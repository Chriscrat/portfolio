import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import GravitySkillsCard from '../GravitySkillsCard';

// ---------------------------------------------------------------------------
// Mock the physics hook — it runs Matter.js which is irrelevant here
// ---------------------------------------------------------------------------
vi.mock('../../hooks/use-gravity-physics', () => ({
    useGravityPhysics: vi.fn(),
}));

// ---------------------------------------------------------------------------
// Mock SCSS imports — Vitest has css:false but the import itself must resolve
// ---------------------------------------------------------------------------
vi.mock('../gravity-skills-card.scss', () => ({}));
vi.mock('../bento-card.scss', () => ({}));

// ---------------------------------------------------------------------------
// Mock lucide-react icons used by skills data (imported transitively)
// ---------------------------------------------------------------------------
vi.mock('lucide-react', () => ({
    Layers: () => null,
    Server: () => null,
    Wrench: () => null,
}));

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------
describe('GravitySkillsCard', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('rendering', () => {
        it('should render without crashing', () => {
            render(<GravitySkillsCard />);
            // The physics container div is always present
            const container = document.querySelector('.absolute.inset-0.overflow-hidden');
            expect(container).not.toBeNull();
        });

        it('should forward extra className to BentoCard', () => {
            const { container } = render(<GravitySkillsCard className="my-extra-class" />);
            // BentoCard is the root element — it receives the combined class
            expect(container.firstChild).toHaveClass('my-extra-class');
        });

        it('should render a physics container div inside BentoCard', () => {
            const { container } = render(<GravitySkillsCard />);
            const physicsDiv = container.querySelector('.absolute.inset-0.overflow-hidden');
            expect(physicsDiv).not.toBeNull();
        });
    });

    describe('useGravityPhysics integration', () => {
        it('should call useGravityPhysics with a ref and the flattened skills array', async () => {
            const { useGravityPhysics } = await import('../../hooks/use-gravity-physics');

            render(<GravitySkillsCard />);

            expect(useGravityPhysics).toHaveBeenCalledOnce();

            const [refArg, skillsArg] = useGravityPhysics.mock.calls[0];

            // First arg must look like a React ref ({ current: ... })
            expect(refArg).toHaveProperty('current');

            // Second arg must be a non-empty array of { name } objects
            expect(Array.isArray(skillsArg)).toBe(true);
            expect(skillsArg.length).toBeGreaterThan(0);
            skillsArg.forEach((skill) => {
                expect(skill).toHaveProperty('name');
                expect(typeof skill.name).toBe('string');
                // Flattening must drop the `level` field
                expect(skill).not.toHaveProperty('level');
            });
        });

        it('should not pass duplicate skill objects across re-renders (useMemo)', async () => {
            const { useGravityPhysics } = await import('../../hooks/use-gravity-physics');

            const { rerender } = render(<GravitySkillsCard />);
            rerender(<GravitySkillsCard />);

            const [, firstSkills] = useGravityPhysics.mock.calls[0];
            const [, secondSkills] = useGravityPhysics.mock.calls[1];

            // useMemo should return the same reference — skills array identity is stable
            expect(firstSkills).toBe(secondSkills);
        });
    });
});
