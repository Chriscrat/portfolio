import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

// ---------------------------------------------------------------------------
// Matter-js mock — the physics engine has no meaningful DOM output in jsdom.
// The mock is hoisted by Vitest so the factory runs before any import.
// ---------------------------------------------------------------------------
vi.mock('matter-js', () => {
    const Engine = {
        create: vi.fn(() => ({ world: { bodies: [] }, gravity: { x: 0, y: 2.5 } })),
        clear: vi.fn(),
    };
    const Runner = {
        create: vi.fn(() => ({})),
        run: vi.fn(),
        stop: vi.fn(),
    };
    const Composite = {
        add: vi.fn(),
        remove: vi.fn(),
    };
    const Bodies = {
        rectangle: vi.fn((_x, _y, _w, _h, opts) => ({
            id: Math.random(),
            position: { x: 0, y: 0 },
            angle: 0,
            ...opts,
        })),
    };
    const Body = {
        setPosition: vi.fn(),
        setVelocity: vi.fn(),
    };
    return { default: { Engine, Runner, Composite, Bodies, Body } };
});

// ---------------------------------------------------------------------------
// IntersectionObserver stub — fires callback synchronously so tests are
// deterministic without needing async waits.
// ---------------------------------------------------------------------------
const observeSpy = vi.fn();
const disconnectSpy = vi.fn();

class StubIntersectionObserver {
    constructor(callback) {
        this._cb = callback;
    }
    observe(el) {
        observeSpy(el);
        this._cb([{ isIntersecting: true }]);
    }
    disconnect() {
        disconnectSpy();
    }
}

// ---------------------------------------------------------------------------
// Synchronous RAF queue — replaces both the test-setup async stub AND the
// jsdom no-op, so the cleanup path (cancelAnimationFrame) always has a
// real function to call.
// ---------------------------------------------------------------------------
let rafId = 0;
const pendingRafs = new Map();

const rafStub = (cb) => {
    rafId++;
    pendingRafs.set(rafId, cb);
    return rafId;
};

// Keep as a named function so we can restore it
const cafStub = (id) => {
    pendingRafs.delete(id);
};

const flushRafs = () => {
    const pending = [...pendingRafs.entries()];
    pendingRafs.clear();
    pending.forEach(([, cb]) => cb(performance.now()));
};

// ---------------------------------------------------------------------------
// Container factory — elements are attached to document.body so offsetWidth
// works in jsdom (at least returns 0; overridden below with defineProperty).
// ---------------------------------------------------------------------------
const makeContainerRef = (width = 800, height = 600) => {
    const el = document.createElement('div');
    Object.defineProperty(el, 'offsetWidth', { get: () => width, configurable: true });
    Object.defineProperty(el, 'offsetHeight', { get: () => height, configurable: true });
    document.body.appendChild(el);
    return { current: el };
};

const makeSkills = (count = 3) =>
    Array.from({ length: count }, (_, i) => ({ name: `Skill${i}` }));

// ---------------------------------------------------------------------------
// Setup / teardown
// Keep stubs alive across the whole suite — never set them to undefined,
// otherwise React passive-effect cleanup runs after afterEach and finds
// cancelAnimationFrame gone.
// ---------------------------------------------------------------------------
beforeEach(() => {
    vi.useFakeTimers();
    rafId = 0;
    pendingRafs.clear();

    globalThis.IntersectionObserver = StubIntersectionObserver;
    globalThis.requestAnimationFrame = rafStub;
    globalThis.cancelAnimationFrame = cafStub;

    observeSpy.mockClear();
    disconnectSpy.mockClear();
});

afterEach(() => {
    vi.useRealTimers();
    document.body.innerHTML = '';
    vi.clearAllMocks();
    // Re-assign stubs after clearAllMocks (which wraps them, not replaces them)
    globalThis.requestAnimationFrame = rafStub;
    globalThis.cancelAnimationFrame = cafStub;
});

// ---------------------------------------------------------------------------
// Helper — counts how many additional calls happened since a given baseline
// ---------------------------------------------------------------------------
const callsSince = (mockFn, baseline) => mockFn.mock.calls.length - baseline;

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------
describe('useGravityPhysics', () => {
    describe('guard clauses', () => {
        it('should not observe when skills array is empty', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, []));
            expect(observeSpy).not.toHaveBeenCalled();
        });

        it('should not observe when containerRef.current is null', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const ref = { current: null };
            renderHook(() => useGravityPhysics(ref, makeSkills()));
            expect(observeSpy).not.toHaveBeenCalled();
        });
    });

    describe('intersection observer setup', () => {
        it('should observe the container element when skills are provided', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, makeSkills()));
            expect(observeSpy).toHaveBeenCalledWith(ref.current);
        });

        it('should disconnect the observer on unmount', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const ref = makeContainerRef();
            const { unmount } = renderHook(() => useGravityPhysics(ref, makeSkills()));
            unmount();
            expect(disconnectSpy).toHaveBeenCalled();
        });
    });

    describe('pill creation', () => {
        it('should append one span per skill to the container', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const skills = makeSkills(4);
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, skills));
            flushRafs();

            const pills = ref.current.querySelectorAll('span.gravity-pill');
            expect(pills.length).toBe(4);
        });

        it('should set aria-hidden on each pill', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const skills = makeSkills(2);
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, skills));
            flushRafs();

            const pills = ref.current.querySelectorAll('[aria-hidden="true"]');
            expect(pills.length).toBe(2);
        });

        it('should set textContent to skill name on each pill', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const skills = [{ name: 'Vue.js' }, { name: 'React' }];
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, skills));
            flushRafs();

            const pills = [...ref.current.querySelectorAll('span.gravity-pill')];
            const names = pills.map((p) => p.textContent);
            expect(names).toContain('Vue.js');
            expect(names).toContain('React');
        });
    });

    describe('cleanup', () => {
        it('should remove all pills from the container on unmount', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const skills = makeSkills(3);
            const ref = makeContainerRef();
            const { unmount } = renderHook(() => useGravityPhysics(ref, skills));
            flushRafs();

            expect(ref.current.querySelectorAll('span.gravity-pill').length).toBe(3);
            unmount();
            expect(ref.current.querySelectorAll('span.gravity-pill').length).toBe(0);
        });

        it('should stop the Matter runner on unmount', async () => {
            const Matter = (await import('matter-js')).default;
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const callsBefore = Matter.Runner.stop.mock.calls.length;

            const ref = makeContainerRef();
            const { unmount } = renderHook(() => useGravityPhysics(ref, makeSkills(2)));
            flushRafs();
            unmount();

            expect(callsSince(Matter.Runner.stop, callsBefore)).toBe(1);
        });

        it('should clear the Matter engine on unmount', async () => {
            const Matter = (await import('matter-js')).default;
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const callsBefore = Matter.Engine.clear.mock.calls.length;

            const ref = makeContainerRef();
            const { unmount } = renderHook(() => useGravityPhysics(ref, makeSkills(2)));
            flushRafs();
            unmount();

            expect(callsSince(Matter.Engine.clear, callsBefore)).toBe(1);
        });

        it('should remove the resize listener on unmount', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const removeSpy = vi.spyOn(window, 'removeEventListener');
            const ref = makeContainerRef();
            const { unmount } = renderHook(() => useGravityPhysics(ref, makeSkills()));
            flushRafs();
            unmount();

            expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
        });
    });

    describe('resize handling', () => {
        it('should replace walls once after a resize event fires and debounce settles', async () => {
            const Matter = (await import('matter-js')).default;
            const { useGravityPhysics } = await import('../use-gravity-physics');

            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, makeSkills()));
            flushRafs();

            const removeBefore = Matter.Composite.remove.mock.calls.length;

            act(() => {
                window.dispatchEvent(new Event('resize'));
                vi.advanceTimersByTime(200); // past RESIZE_DEBOUNCE_MS (150ms)
            });

            expect(callsSince(Matter.Composite.remove, removeBefore)).toBe(1);
        });

        it('should debounce multiple rapid resize events into a single wall update', async () => {
            const Matter = (await import('matter-js')).default;
            const { useGravityPhysics } = await import('../use-gravity-physics');

            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, makeSkills()));
            flushRafs();

            const removeBefore = Matter.Composite.remove.mock.calls.length;

            act(() => {
                window.dispatchEvent(new Event('resize'));
                vi.advanceTimersByTime(50);
                window.dispatchEvent(new Event('resize'));
                vi.advanceTimersByTime(50);
                window.dispatchEvent(new Event('resize'));
                vi.advanceTimersByTime(200); // debounce settles here
            });

            // Three rapid resizes should coalesce into one wall replacement
            expect(callsSince(Matter.Composite.remove, removeBefore)).toBe(1);
        });
    });

    describe('drop interval', () => {
        it('should drop pills one by one at DROP_INTERVAL_MS (180ms) intervals', async () => {
            const { useGravityPhysics } = await import('../use-gravity-physics');
            const skills = makeSkills(3);
            const ref = makeContainerRef();
            renderHook(() => useGravityPhysics(ref, skills));
            flushRafs();

            const visible = () =>
                [...ref.current.querySelectorAll('span.gravity-pill')].filter(
                    (p) => p.style.opacity === '1',
                ).length;

            // Before any tick: nothing visible
            expect(visible()).toBe(0);

            // After one interval: exactly one pill drops
            act(() => { vi.advanceTimersByTime(180); });
            expect(visible()).toBe(1);

            // After all intervals: all pills dropped
            act(() => { vi.advanceTimersByTime(180 * 2); });
            expect(visible()).toBe(3);
        });
    });
});
