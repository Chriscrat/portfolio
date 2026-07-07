import './skills.scss';
import BentoCard from '../BentoCard';
import GravitySkillsCard from '../GravitySkillsCard';
import skillGroups from '../../data/skills';

export default function Skills() {
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

                <div className="w-full grid grid-cols-4 gap-4 items-start max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
                    <GravitySkillsCard
                        className="col-span-4 min-h-[500px]"
                    />
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
