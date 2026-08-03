import { useRef, useState } from 'react';
import { List, Zap } from 'lucide-react';
import BentoCard from './BentoCard';
import skillGroups from '../data/skills';
import { useGravityPhysics } from '../hooks/use-gravity-physics';
import { THEME_COLORS } from '../constants/theme-colors';
import './gravity-skills-card.scss';

export default function GravitySkillsCard({ className = '' }) {
    const containerRef = useRef(null);
    const [isListView, setIsListView] = useState(false);

    useGravityPhysics(containerRef, skillGroups, !isListView);

    const toggle = () => setIsListView((v) => !v);

    return (
        <div className={`${className} !p-0 relative z-10`}>
            <button
                onClick={toggle}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full border bg-black/90 hover:border-white hover:border-solid hover:border-2 text-white text-lg font-medium transition-all duration-200 cursor-pointer"
                aria-label={isListView ? 'Vue physique' : 'Vue liste'}
            >
                {isListView ? <Zap size={12} /> : <List size={12} />}
                <span>{isListView ? 'Gravité' : 'Liste'}</span>
            </button>

            {/* Physics container — always mounted so IntersectionObserver has real dimensions */}
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-hidden"
            />

            {isListView && (
                <div className="gravity-list-view absolute inset-0 overflow-y-auto p-6 pt-14">
                    <div className="grid grid-cols-3 gap-6 max-[600px]:grid-cols-1">
                        {skillGroups.map(({ category, Icon, skills }) => (
                            <div
                                key={category}
                                className="flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                                    <Icon
                                        size={16}
                                        style={{ color: THEME_COLORS[category] }}
                                    />
                                    <h3 className="text-white/80 font-semibold text-md uppercase tracking-wider">
                                        {category}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="gravity-pill gravity-list-pill"
                                            style={{ backgroundColor: THEME_COLORS[category] }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
