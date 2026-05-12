import './experiences.scss';
import { useState } from 'react';
import { ChevronDown, MapPin, Handshake } from 'lucide-react';
import BentoCard from '../BentoCard';
import experiences from '../../data/experiences';

function PositionAccordion({ position, isOpen, onToggle }) {
    return (
        <div className="exp-position group">
            <button
                className="exp-position-header"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <div className="flex flex-col gap-0.5 text-left">
                    <span
                        className={[
                            'text-[18px] font-semibold text-tx',
                            isOpen ? 'text-accent-400' : 'group-hover:text-accent-400 transition-colors duration-300',
                        ].join(' ')}
                    >
                        {position.title}
                    </span>
                    <span className="text-[12px] text-tx-muted">
                        {position.startDate} — {position.endDate}
                    </span>
                </div>
                <ChevronDown
                    size={16}
                    className={`text-tx-muted exp-chevron ${isOpen ? 'open' : ''}`}
                />
            </button>

            <div className={`mission-panel ${isOpen ? 'open' : ''}`}>
                <div>
                    <ul className="exp-missions">
                        {position.missions.map((mission, i) => (
                            <li key={i}>{mission}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const [openPositions, setOpenPositions] = useState(() => {
        const initial = new Set();
        experiences.forEach((exp) => {
            if (exp.positions.length > 0) initial.add(exp.positions[0].id);
        });
        return initial;
    });

    const togglePosition = (id) => {
        setOpenPositions((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    return (
        <section
            id="experience"
            className="flex flex-col justify-between min-h-screen pt-[100px] pb-[50px] px-6 max-[560px]:py-20 max-[560px]:px-4"
        >
            <h1 className="text-4xl pb-12 xl:left-32 mb-6 relative">
                &lt;
                <span className="text-accent-500">Experiences</span>
                &gt;
            </h1>
            <div className="max-w-content lg:mx-auto">
                <div className="mb-12">
                    <p className="text-xl leading-relaxed">
                        Mon parcours professionnel — des missions concrètes qui ont forgé mon expertise.
                    </p>
                </div>

                <div className="exp-timeline">
                    <div className="flex flex-col gap-6">
                        {experiences.map((exp) => {
                            const initials = exp.company
                                .split(' ')
                                .slice(0, 2)
                                .map((w) => w[0].toUpperCase())
                                .join('');

                            return (
                                <div
                                    key={exp.id}
                                    className="exp-item"
                                >
                                    <BentoCard className="flex flex-col gap-0 bg-surface p-5">
                                        <div className="flex flex-col pb-5 gap-2">
                                            <div className="flex gap-4">
                                                {exp.logo ? (
                                                    <img
                                                        src={exp.logo}
                                                        alt={exp.company}
                                                        className={[
                                                            'exp-logo-img my-auto',
                                                            'max-sm:w-16 max-sm:h-16 min-sm:w-24 min-sm:h-24 w-32 h-32',
                                                        ].join(' ')}
                                                    />
                                                ) : (
                                                    <div className="exp-logo-fallback">{initials}</div>
                                                )}
                                                <div className="flex flex-col gap-0.5 flex-1 min-w-0 justify-start">
                                                    <span className="text-[25px] font-bold text-tx">{exp.company}</span>
                                                    <span className="flex items-center gap-1 text-md text-tx-muted">
                                                        {exp.description}
                                                    </span>
                                                    <span className="max-md:hidden text-[15px] text-tx-muted whitespace-nowrap shrink-0">
                                                        <a
                                                            href={exp.url}
                                                            _target={exp.company}
                                                            className="text-blue-600 underline"
                                                        >
                                                            {exp.url}
                                                        </a>
                                                    </span>
                                                    <span className="max-md:hidden flex items-center gap-1 text-[15px]">
                                                        <MapPin
                                                            size={20}
                                                            className="text-accent-600"
                                                        />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                                <span className="max-md:hidden flex flew-row gap-1 rounded-full bg-primary-600 h-8 px-4 py-2 items-center text-[15px] text-white font-bold">
                                                    <Handshake size={18} />
                                                    {exp.startDate} - {exp.endDate}
                                                </span>
                                            </div>
                                            <div className="flex gap-4 md:hidden flex-wrap justify-center">
                                                <span className="text-[15px] text-tx-muted whitespace-nowrap shrink-0">
                                                    <a
                                                        href={exp.url}
                                                        _target={exp.company}
                                                        className="text-blue-600 underline"
                                                    >
                                                        {exp.url}
                                                    </a>
                                                </span>
                                                <span className="flex items-center gap-1 text-[15px]">
                                                    <MapPin
                                                        size={20}
                                                        className="text-accent-600"
                                                    />
                                                    {exp.location}
                                                </span>
                                                <span className="md:hidden flex flew-row gap-1 rounded-full bg-primary-600 h-8 px-4 py-2 items-center text-[13px] text-white font-bold">
                                                    <Handshake size={20} />
                                                    {exp.startDate} - {exp.endDate}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row flex-wrap gap-2 pb-5">
                                            {exp.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full bg-secondary-500 text-[12px] text-white px-2"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col border-t border-border">
                                            {exp.positions.map((pos) => (
                                                <PositionAccordion
                                                    key={pos.id}
                                                    position={pos}
                                                    isOpen={openPositions.has(pos.id)}
                                                    onToggle={() => togglePosition(pos.id)}
                                                />
                                            ))}
                                        </div>
                                    </BentoCard>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <h1 className="text-4xl xl:right-32 xl:text-right mt-6 relative">
                &lt;/
                <span className="text-accent-500">Experiences</span>
                &gt;
            </h1>
        </section>
    );
}
