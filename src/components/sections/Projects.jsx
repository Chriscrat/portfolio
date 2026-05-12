import './projects.scss';
import { FaGithub } from 'react-icons/fa';
import BentoCard from '../BentoCard';
import projects from '../../data/projects';

function ProjectCard({ project }) {
    const { Icon, iconColor, title, description, stack, status, github, animation, animationDuration, animationDelay } = project;

    return (
        <BentoCard
            className="flex flex-col gap-3.5 bg-surface"
            animation={animation}
            animationDuration={animationDuration}
            animationDelay={animationDelay}
        >
            <div className="flex items-center justify-between">
                <Icon
                    size={28}
                    style={{ color: iconColor }}
                />
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-border border border-border-hover text-tx-muted">
                    {status}
                </span>
            </div>

            <h3 className="text-[22px] font-bold text-tx tracking-[-0.5px]">{title}</h3>
            <p className="text-md text-tx-muted leading-relaxed flex-1">{description}</p>

            <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-[12px] font-medium px-2.5 py-1 rounded-full text-accent-500 bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-1 pt-4 border-t border-border">
                <a
                    href={github}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-tx-muted hover:text-primary transition-colors duration-200"
                    onClick={(e) => e.preventDefault()}
                >
                    <FaGithub size={16} />
                    Voir sur GitHub
                </a>
            </div>
        </BentoCard>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="flex flex-col justify-between min-h-screen pt-[100px] pb-[50px] px-6 max-[560px]:py-20 max-[560px]:px-4"
        >
            <h1 className="text-4xl xl:left-32 mb-6 relative">
                &lt;
                <span className="text-accent-500">Projects</span>
                &gt;
            </h1>
            <div className="max-w-content mx-auto">
                <p className="text-xl leading-relaxed mb-4">
                    Projets illustratifs — des réalisations concrètes qui reflètent mon approche du développement.
                </p>

                <div className="grid grid-cols-3 gap-4 items-start max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                    {/* CTA card */}
                    <BentoCard
                        accent
                        className="col-span-3 flex items-center gap-6 flex-wrap relative overflow-hidden max-[900px]:col-span-2 max-[560px]:col-span-1 max-[560px]:flex-col max-[560px]:items-start"
                        animation="floatXReverse"
                        animationDuration="10s"
                        animationDelay="2s"
                    >
                        <p className="text-[22px] font-bold text-white tracking-[-0.5px]">Un projet en tête ?</p>
                        <p className="text-sm text-white/75 leading-snug flex-1">
                            Discutons ensemble de ce que je peux apporter à votre équipe.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold whitespace-nowrap hover:bg-white/30 hover:-translate-y-px transition-[background,transform] duration-200"
                        >
                            Prendre contact
                        </a>
                        <div
                            className="absolute -top-16 -right-16 w-60 h-60 rounded-full pointer-events-none"
                            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)' }}
                            aria-hidden
                        />
                    </BentoCard>
                </div>
            </div>
            <h1 className="text-4xl xl:right-32 xl:text-right mt-6 relative">
                &lt;/
                <span className="text-accent-500">Projects</span>
                &gt;
            </h1>
        </section>
    );
}
