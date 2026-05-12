import './skills.scss';
import BentoCard from '../BentoCard';
import SoftSkillsCard from '../SoftSkillsCard';
import skillGroups from '../../data/skills';
import { useTheme } from '../../context/ThemeContext';

function SkillBar({ name, level }) {
    return (
        <div className="flex flex-col gap-1.5 ">
            <div className="flex justify-between items-center">
                <span className="text-[16px] font-medium text-tx">{name}</span>
                {level}%
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{ width: `${level}%` }}
                />
                {level}%
            </div>
        </div>
    );
}

export default function Skills() {
    const { theme } = useTheme();
    return (
        <section
            id="skills"
            className="flex flex-col justify-between min-h-screen pt-[100px] pb-[50px] px-6 max-[560px]:py-20 max-[560px]:px-4"
        >
            <h1 className="text-4xl xl:left-32 mb-6 relative">
                &lt;
                <span className="text-accent-500">Skills</span>
                &gt;
            </h1>
            <div className="max-w-content mx-auto">
                <p className="text-xl leading-relaxed mb-4">
                    Spécialisé Vue.js et TypeScript, avec une forte appétence pour les architectures Node.js propres et scalables.
                </p>

                <div className="w-full grid grid-cols-4 grid-rows-1 gap-4 items-start max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
                    {skillGroups.map(({ category, Icon, skills }) => (
                        <BentoCard
                            key={category}
                            className="flex flex-col col-span-1 gap-5 bg-surface"
                        >
                            <div className="flex items-center gap-2.5 justify-center">
                                <Icon
                                    size={30}
                                    className="text-accent-500 font-bold"
                                />
                                <h3 className="text-base font-semibold text-tx">{category}</h3>
                            </div>
                            <div className="flex flex-col gap-3.5">
                                {skills.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        {...skill}
                                    />
                                ))}
                            </div>
                        </BentoCard>
                    ))}

                    {/* Soft Skills card — 2ème ligne, col-span-3 */}
                    <SoftSkillsCard className="w-full relative flex flex-col gap-2.5 justify-center row-span-2 min-h-[280px] min-w-[280px]" />
                </div>
            </div>

            <h1 className="text-4xl xl:right-32 xl:text-right mt-6 relative">
                &lt;/
                <span className="text-accent-500">Skills</span>
                &gt;
            </h1>
        </section>
    );
}
