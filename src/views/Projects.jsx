import './projects.scss';
import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Globe, Maximize2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import projects from '../data/projects';

function CoverImage({ src, alt, iconColor, Icon, title }) {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div
                className="project-cover-fallback"
                style={{
                    background: `radial-gradient(circle at 30% 20%, ${iconColor} 0%, transparent 55%), radial-gradient(circle at 80% 90%, var(--color-accent) 0%, transparent 50%), linear-gradient(135deg, color-mix(in srgb, ${iconColor} 60%, var(--color-primary)), var(--color-background))`,
                }}
            >
                {Icon && (
                    <Icon
                        size={56}
                        className="text-white/90"
                    />
                )}
                <span className="project-fallback-label">{title}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="project-card-img"
        />
    );
}

function ProjectCard({ project, index, onClick }) {
    const { title, cover, iconColor, Icon, status, stack } = project;

    return (
        <button
            type="button"
            className="project-card group"
            onClick={() => onClick(project)}
            aria-label={`Ouvrir le projet ${title}`}
        >
            <div className="project-card-media">
                <CoverImage
                    src={cover}
                    alt={`Aperçu de ${title}`}
                    iconColor={iconColor}
                    Icon={Icon}
                    title={title}
                />
                <div
                    className="project-card-overlay"
                    aria-hidden
                />
                <div
                    className="project-scanlines"
                    aria-hidden
                />

                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <span className={`project-status project-status--${String(status).toLowerCase()}`}>{status}</span>
            </div>

            <div className="project-card-body">
                <div className="project-card-body-top">
                    <h3
                        className="project-card-title"
                        data-text={title}
                    >
                        {title}
                    </h3>
                    <Maximize2
                        size={18}
                        className="project-card-expand"
                    />
                </div>
                <div className="project-card-tags">
                    {stack.map((tech) => (
                        <span
                            key={tech}
                            className="project-tag"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <span className="project-cta">Visualiser &#8594;</span>
            </div>
        </button>
    );
}

function TagChip({ children }) {
    return <span className="project-chip">{children}</span>;
}

function LinkButton({ href, disabled, icon, label }) {
    if (disabled || !href) {
        return (
            <span className="project-link project-link--disabled">
                {icon}
                {label}
            </span>
        );
    }
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
        >
            {icon}
            {label}
        </a>
    );
}

function ProjectModal({ project, onClose }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
        if (!project) return;
        const onKey = (e) => {
            if (e.key === 'Escape') {
                if (lightboxOpen) setLightboxOpen(false);
                else onClose();
            }
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [project, lightboxOpen]);

    const shots = project?.screenshots ?? [];
    const next = () => setActiveIndex((i) => (i + 1) % shots.length);
    const prev = () => setActiveIndex((i) => (i - 1 + shots.length) % shots.length);

    if (!project) return null;

    const hasGallery = shots.length > 0;

    return (
        <div
            className="project-modal"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Projet ${project.title}`}
        >
            <div
                className="project-modal-panel"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="project-modal-close"
                    onClick={onClose}
                    aria-label="Fermer"
                >
                    <X size={22} />
                </button>

                <div className="project-modal-grid">
                    <div className="project-modal-main">
                        {hasGallery ? (
                            <div className="project-gallery">
                                <div className="project-gallery-stage">
                                    <img
                                        src={shots[activeIndex]}
                                        alt={`Capture ${activeIndex + 1} de ${project.title}`}
                                        className="project-gallery-img"
                                        onClick={() => setLightboxOpen(true)}
                                    />
                                    <button
                                        type="button"
                                        className="project-gallery-zoom"
                                        onClick={() => setLightboxOpen(true)}
                                        aria-label="Agrandir"
                                    >
                                        <Maximize2 size={16} />
                                    </button>
                                    {shots.length > 1 && (
                                        <>
                                            <button
                                                type="button"
                                                className="project-gallery-nav project-gallery-nav--prev"
                                                onClick={prev}
                                                aria-label="Capture précédente"
                                            >
                                                <ChevronLeft size={20} />
                                            </button>
                                            <button
                                                type="button"
                                                className="project-gallery-nav project-gallery-nav--next"
                                                onClick={next}
                                                aria-label="Capture suivante"
                                            >
                                                <ChevronRight size={20} />
                                            </button>
                                        </>
                                    )}
                                </div>
                                {shots.length > 1 && (
                                    <div className="project-thumbs">
                                        {shots.map((shot, i) => (
                                            <button
                                                type="button"
                                                key={shot + i}
                                                className={`project-thumb ${i === activeIndex ? 'project-thumb--active' : ''}`}
                                                onClick={() => setActiveIndex(i)}
                                                aria-label={`Capture ${i + 1}`}
                                            >
                                                <img
                                                    src={shot}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <CoverImage
                                src={project.cover}
                                alt={`Aperçu de ${project.title}`}
                                iconColor={project.iconColor}
                                Icon={project.Icon}
                                title={project.title}
                            />
                        )}

                        <p  className="project-modal-description">{ project.description }</p>

                        {project.highlights?.length > 0 && (
                            <ul className="project-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <aside className="project-modal-aside">
                        <span className={`project-status project-status--${String(project.status).toLowerCase()} project-status--static`}>
                            {project.status}
                        </span>
                        <h2
                            className="project-modal-title"
                            data-text={project.title}
                        >
                            {project.title}
                        </h2>
                        <p className="project-modal-meta">
                            {project.role}
                            {project.year ? ` · ${project.year}` : ''}
                        </p>

                        <div className="project-modal-section">
                            <h3 className="project-modal-heading">Stack</h3>
                            <div className="project-chip-row">
                                {project.stack.map((tech) => (
                                    <TagChip key={tech}>{tech}</TagChip>
                                ))}
                            </div>
                        </div>

                        {project.tools?.length > 0 && (
                            <div className="project-modal-section">
                                <h3 className="project-modal-heading">Outils</h3>
                                <div className="project-chip-row">
                                    {project.tools.map((tool) => (
                                        <TagChip key={tool}>{tool}</TagChip>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.links?.length > 0 && (
                            <div className="project-modal-section">
                                <h3 className="project-modal-heading">Liens</h3>
                                <div className="project-link-row">
                                    { project.links.map((link, i) => (
                                        <LinkButton
                                            key={i}
                                            href={link.url}
                                            icon={<link.icon size={16}/>}
                                            label={link.text}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            {lightboxOpen && (
                <div
                    className="project-lightbox"
                    onClick={() => setLightboxOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Aperçu agrandi"
                >
                    <img
                        src={shots[activeIndex]}
                        alt={`Capture ${activeIndex + 1} de ${project.title}`}
                        className="project-lightbox-img"
                    />
                    {shots.length > 1 && (
                        <>
                            <button
                                type="button"
                                className="project-lightbox-nav project-lightbox-nav--prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                aria-label="Capture précédente"
                            >
                                <ChevronLeft size={28} />
                            </button>
                            <button
                                type="button"
                                className="project-lightbox-nav project-lightbox-nav--next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                aria-label="Capture suivante"
                            >
                                <ChevronRight size={28} />
                            </button>
                        </>
                    )}
                    <button
                        type="button"
                        className="project-lightbox-close"
                        onClick={() => setLightboxOpen(false)}
                        aria-label="Fermer l'aperçu"
                    >
                        <X size={26} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = useCallback((project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    }, []);

    const handleClose = useCallback(() => {
        setSelectedProject(null);
        document.body.style.overflow = '';
    }, []);

    return (
        <section
            id="projects"
            className="flex flex-col justify-between min-h-screen pt-[100px] pb-[50px] px-6 max-[560px]:py-20 max-[560px]:px-4"
        >
            <h1 className="text-4xl pb-12 xl:left-32 mb-6 relative">
                &lt;
                <span className="text-accent-500">Projets</span>
                &gt;
            </h1>

            <div className="max-w-content mx-auto w-full">
                <p className="text-xl leading-relaxed mb-10">
                    Projets illustratifs — des réalisations concrètes qui reflètent mon approche du développement, de la conception UX/UI et de l'architecture logicielle.
                </p>

                <div className="project-grid">
                    {projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                            onClick={handleOpen}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={handleClose}
            />

            <h1 className="text-4xl xl:right-32 xl:text-right mt-6 relative">
                &lt;/
                <span className="text-accent-500">Projets</span>
                &gt;
            </h1>
        </section>
    );
}
