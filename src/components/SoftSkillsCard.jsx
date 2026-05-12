import { useState, useEffect } from 'react';
import BentoCard from './BentoCard';
import './soft-skills-card.scss';

const SOFT_SKILLS = [
    'Adaptabilité',
    'Autonomie',
    'Curiosité',
    'Communication',
    "Travail d'équipe",
    'Rigueur',
    'Créativité',
    'Problem-solving',
    'Pédagogie',
    'Veille active',
];

const CYCLE_DURATION = 3000;

export default function SoftSkillsCard({ className = '' }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % SOFT_SKILLS.length);
        }, CYCLE_DURATION);
        return () => clearInterval(timer);
    }, []);

    return (
        <BentoCard
            accent
            animation="floatY"
            animationDuration="4s"
            animationDelay="1s"
            className={`flex flex-col gap-4 justify-center items-center ${className}`}
        >
            <div className="flex flex-col gap-3 ">
                <div className="soft-skills-word-container">
                    <span
                        key={currentIndex}
                        className="soft-skill-word text-white"
                    >
                        {SOFT_SKILLS[currentIndex]}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                {SOFT_SKILLS.map((_, i) => (
                    <div
                        key={i}
                        className={`soft-skill-dot${i === currentIndex ? ' soft-skill-dot--active' : ''}`}
                    />
                ))}
            </div>
        </BentoCard>
    );
}
