import '@testing-library/jest-dom';

// jsdom does not implement requestAnimationFrame/cancelAnimationFrame —
// provide minimal stubs so hooks that call them during cleanup don't throw.
if (typeof globalThis.requestAnimationFrame === 'undefined') {
    let rafId = 0;
    globalThis.requestAnimationFrame = (cb) => {
        const id = ++rafId;
        // Defer slightly so tests that call flushRafs() can drive execution
        Promise.resolve().then(() => cb(Date.now()));
        return id;
    };
    globalThis.cancelAnimationFrame = () => {};
}
