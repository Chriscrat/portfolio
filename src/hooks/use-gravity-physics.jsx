import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Matter from 'matter-js';

export const THEME_COLORS = {
    frontend: 'var(--color-primary-500)',
    backend: 'var(--color-secondary-500)',
    tools: 'var(--color-accent-500)',
    ia: 'var(--color-primary-700)',
    'soft-skills': 'var(--color-primary-300)',
};

const DROP_INTERVAL_MS = 180;
const WALL_THICKNESS = 100;
const RESIZE_DEBOUNCE_MS = 150;

const createWalls = (W, H) => [
    Matter.Bodies.rectangle(W / 2, H + WALL_THICKNESS / 2, W + WALL_THICKNESS * 2, WALL_THICKNESS, {
        isStatic: true,
        label: 'ground',
        friction: 1,
        restitution: 0.1,
    }),
    Matter.Bodies.rectangle(-WALL_THICKNESS / 2, H / 2, WALL_THICKNESS, H * 2, {
        isStatic: true,
        label: 'wallLeft',
        friction: 1,
    }),
    Matter.Bodies.rectangle(W + WALL_THICKNESS / 2, H / 2, WALL_THICKNESS, H * 2, {
        isStatic: true,
        label: 'wallRight',
        friction: 1,
    }),
];

const spawnPhysics = (container, skillsGroup) => {
    const W = container.offsetWidth;
    const H = container.offsetHeight;
    const roots = [];

    const pills = skillsGroup.flatMap((skillCategory) => {
        const { Icon, skills } = skillCategory;
        return skills.map((skill, i) => {
            const el = document.createElement('span');
            const root = createRoot(el);
            root.render(
                <span className="gravity-pill-inner">
                    <Icon
                        size={i % 2 ? 18 : 22}
                        className="gravity-pill-icon"
                    />
                    {skill}
                </span>,
            );
            roots.push(root);
            const pillStyle = {
                position: 'absolute',
                opacity: 0,
                pointerEvents: 'none',
                willChange: 'left, top, transform',
                backgroundColor: THEME_COLORS[skillCategory.category],
                fontSize: i % 3 ? '18px' : '24px',
            };
            el.className = 'gravity-pill';
            el.setAttribute('aria-hidden', 'true');
            const style = el.style;
            Object.assign(style, pillStyle);
            container.appendChild(el);

            return el;
        });
    });

    pills.sort(() => Math.random() - 0.5);

    const engine = Matter.Engine.create({ gravity: { x: 0, y: 2.5 }, positionIterations: 12, velocityIterations: 8 });

    /*
     * Object wrapper instead of `let walls`: spawnPhysics is not a hook, so
     * closures captured by onResize would hold a stale primitive reference after
     * reassignment. The mutable `.current` property is shared by reference,
     * letting onResize swap walls in-place without creating a new closure.
     */
    const wallsRef = { current: createWalls(W, H) };
    Matter.Composite.add(engine.world, wallsRef.current);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const activeBodyIds = new Set();
    const bodiesRef = { current: [] };
    const timersRef = { drop: null, resize: null, sync: null };

    /*
     * RAF before measuring pill dimensions: DOM elements are appended above but
     * the browser hasn't laid them out yet. One animation frame guarantees that
     * offsetWidth/offsetHeight reflect the computed SCSS styles rather than 0.
     */
    const initRafId = requestAnimationFrame(() => {
    const dimCache = new Map();

    let dropIndex = 0;
    timersRef.drop = setInterval(() => {
        if (dropIndex >= pills.length) {
            clearInterval(timersRef.drop);
            timersRef.drop = null;
            return;
        }

        const el = pills[dropIndex];

        const w = Math.max(el.offsetWidth, 40);
        const h = Math.max(el.offsetHeight, 20);

        const body = Matter.Bodies.rectangle(0, 0, w, h, {
            label: el.textContent ?? `pill-${dropIndex}`,
            restitution: 0.2,
            friction: 0.8,
            frictionAir: 0.04,
            density: 0.001,
            slop: 0.01,
        });

        dimCache.set(body.id, { w, h });
        bodiesRef.current.push(body);

        const currentW = container.offsetWidth;
        const margin = w / 2 + 6;
        const spawnX = margin + Math.random() * Math.max(currentW - margin * 2, 0);

        Matter.Body.setPosition(body, { x: spawnX, y: -(h + 4) });
        Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 1 });
        Matter.Composite.add(engine.world, body);
        activeBodyIds.add(body.id);
        el.style.opacity = '1';
        dropIndex++;
    }, DROP_INTERVAL_MS);

    const sync = () => {
        bodiesRef.current.forEach((body, i) => {
            if (!activeBodyIds.has(body.id)) return;
            const el = pills[i];
            if (!el) return;
            const { w, h } = dimCache.get(body.id) ?? { w: el.offsetWidth, h: el.offsetHeight };
            el.style.left = `${body.position.x - w / 2}px`;
            el.style.top = `${body.position.y - h / 2}px`;
            el.style.transform = `rotate(${body.angle}rad)`;
            el.style.zIndex = String(-Math.round(body.position.y));
        });
        timersRef.sync = requestAnimationFrame(sync);
    };
    timersRef.sync = requestAnimationFrame(sync);
});

    /*
     * Debounced at 150 ms: rebuilding walls triggers a full Matter.js Composite
     * diff on every event without it. Firing on every pixel of a drag resize
     * would saturate the physics runner and cause visible frame drops.
     */
    const onResize = () => {
        clearTimeout(timersRef.resize);
        timersRef.resize = setTimeout(() => {
            const newW = container.offsetWidth;
            const newH = container.offsetHeight;
            Matter.Composite.remove(engine.world, wallsRef.current);
            wallsRef.current = createWalls(newW, newH);
            Matter.Composite.add(engine.world, wallsRef.current);
        }, RESIZE_DEBOUNCE_MS);
    };
    window.addEventListener('resize', onResize);

    return () => {
        cancelAnimationFrame(initRafId);
        if (timersRef.drop) clearInterval(timersRef.drop);
        if (timersRef.sync) cancelAnimationFrame(timersRef.sync);
        if (timersRef.resize) clearTimeout(timersRef.resize);
        Matter.Runner.stop(runner);
        Matter.Engine.clear(engine);
        window.removeEventListener('resize', onResize);
        roots.forEach((root) => root.unmount());
        pills.forEach((el) => {
            if (container.contains(el)) container.removeChild(el);
        });
    };
};

/**
 * Lazily starts a Matter.js gravity simulation inside a container element,
 * dropping DOM pill elements one by one when the container scrolls into view.
 * The simulation is torn down automatically when the component unmounts or
 * when `enabled` becomes false.
 *
 * @param {import('react').RefObject<HTMLElement>} containerRef
 * @param {Array} skillsGroup - skillGroups array from data/skills
 * @param {boolean} enabled - Set to false to stop and cleanup the simulation
 */
export const useGravityPhysics = (containerRef, skillsGroup, enabled = true) => {
    useEffect(() => {
        if (!enabled || typeof window === 'undefined' || !skillsGroup.length) return;

        const container = containerRef.current;
        if (!container) return;

        let cleanup = null;
        let observer = null;

        /*
         * If the container is already visible (e.g. on re-enable after toggle),
         * skip the IntersectionObserver and start immediately.
         */
        const rect = container.getBoundingClientRect();
        const isAlreadyVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (isAlreadyVisible) {
            cleanup = spawnPhysics(container, skillsGroup);
        } else {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        observer.disconnect();
                        observer = null;
                        cleanup = spawnPhysics(container, skillsGroup);
                    }
                },
                { threshold: 0.2 },
            );
            observer.observe(container);
        }

        return () => {
            if (observer) observer.disconnect();
            if (cleanup) cleanup();
        };
    }, [skillsGroup, enabled]);
};
