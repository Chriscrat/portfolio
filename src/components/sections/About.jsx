import './about.scss';
import { MapPin, ArrowUpRight, ArrowRight, Crown } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import BentoCard from '../BentoCard';
import { useTheme } from '../../context/ThemeContext';

const statusBadge = (
    <span className="inline-flex items-center gap-2 text-[13px] font-medium text-sm text-white bg-black px-3 py-1.5 rounded-full w-fit">
        <span className="w-[10px] h-[10px] rounded-full bg-green-400 animate-pulse" />
        Open to work
    </span>
);

export default function About() {
    const { theme, toggleTheme } = useTheme();
    return (
        <section
            id="about"
            className="flex flex-col px-6 pt-[50px] md:pt-[150px] pb-20"
        >
            <div className="h-min-screen max-w-content mx-auto grid grid-cols-4 gap-4 w-full sm:grid-cols-2 max-[560px]:grid-cols-1 lg:grid-cols-4">
                {/* Main card — col 1-3 */}
                <BentoCard className="col-span-3 min-h-[280px] sm:col-span-2 max-[560px]:col-span-4 lg:col-span-3 flex flex-col md:flex-row items-center gap-4 bg-accent-400">
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-56 h-56 rounded-full overflow-hidden bg-radial-secondary-accent shadow-lg shadow-primary/20">
                            <img
                                src="/me.png"
                                alt="Christophe Barreto photo"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div> {statusBadge}</div>
                    </div>
                    <div className="flex flex-col gap-4 relative z-10">
                        <p className="text-base leading-relaxed">
                            <span className="text-5xl block pb-4 text-left">Christophe Barreto</span>
                            Passionné par la création d’expériences utilisateurs élégantes et performantes, j’aime transformer des besoins
                            produits qui contribuent à une mission qui a du sens, tout en maintenant des standards de code exigeants et
                            transmettre mes connaissances (mentorat, mise en place de wikis, bonnes pratiques).
                            <br />
                            <br />
                            Curieux, rigoureux et créatif, je me forme continuellement aux technologies modernes comme{' '}
                            <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>,{' '}
                            <span className="font-bold">NestJs</span> et <span className="font-bold">TailwindCSS</span>, tout en continuant
                            à exceller sur <span className="font-bold">Vue.js</span> et <span className="font-bold">Node.js</span>.
                        </p>
                        <div className="flex gap-3 flex-wrap mt-1 md:justify-end align-middle justify-center">
                            <a
                                href="#projects"
                                className="inline-flex items-center px-4 py-3 rounded-full bg-primary text-tx text-sm font-semibold hover:opacity-85 hover:-translate-y-px transition-[opacity,transform] duration-200"
                            >
                                Voir mes projets
                                <ArrowRight
                                    size={20}
                                    className="ml-2"
                                />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-3 rounded-full border border-tx text-tx border-hover text-sm font-semibold hover:bg-border-hover hover:-translate-y-px transition-[background,transform] duration-200"
                            >
                                Me contacter
                            </a>
                        </div>
                    </div>
                </BentoCard>

                {/* Stack card */}
                <BentoCard
                    className={[
                        'sm:col-span-2 max-[560px]:col-span-4 md:col-span-2 lg:col-span-1',
                        theme === 'dark' ? 'bg-primary-800' : 'bg-primary-500',
                    ].join(' ')}
                >
                    <p className="text-md font-semibold tracking-[0.08em] uppercase text-center mb-4 text-white">Stack principale</p>
                    <div className="flex flex-col max-lg:flex-row gap-2.5">
                        <span className="inline-flex justify-center p-2">
                            <img
                                src="/vue.png"
                                alt="Vue.js"
                                className="w-16 object-contain"
                            />
                        </span>

                        <span className="inline-flex justify-center p-2">
                            <img
                                src="/js.png"
                                alt="Javascript"
                                className="w-16 object-contain"
                            />
                        </span>

                        <span className="inline-flex justify-center p-2">
                            <img
                                src="/ts.png"
                                alt="TypeScript"
                                className="w-16 object-contain"
                            />
                        </span>

                        <span className="inline-flex justify-center p-2">
                            <img
                                src="/node.png"
                                alt="Node.js"
                                className="h-16 object-contain"
                            />
                        </span>
                    </div>
                </BentoCard>

                {/* GitHub card */}
                <BentoCard
                    className={[theme === 'dark' ? 'bg-white' : 'bg-gray-900', 'col-span-2 cursor-pointer max-[560px]:col-span-4'].join(
                        ' ',
                    )}
                    href="https://github.com/Chriscrat"
                >
                    <div className="flex items-center gap-3.5 h-full group">
                        <FaGithub
                            size={36}
                            className={`${theme === 'dark' ? 'text-gray-900' : 'text-white'} shrink-0"`}
                        />
                        <div className={theme === 'dark' ? 'text-gray-900' : 'text-white'}>
                            <p className="text-3xl font-semibold">Chriscrat</p>
                            <p className="text-md mt-0.5">Voir le profil GitHub</p>
                        </div>
                        <ArrowUpRight
                            size={40}
                            className={[
                                'ml-auto shrink-0 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary',
                                theme === 'dark' ? 'text-gray-900' : 'text-white',
                            ].join(' ')}
                        />
                    </div>
                </BentoCard>

                {/* Location card */}
                <BentoCard
                    className={[
                        'text-center flex flex-col items-center justify-center gap-1 max-[560px]:col-span-4 text-white',
                        theme === 'dark' ? 'bg-primary-800' : 'bg-primary-500',
                    ].join(' ')}
                >
                    <MapPin
                        size={40}
                        className="text-white"
                    />
                    <p className="text-xl font-semibold">Paris, France</p>
                    <p className="text-md italic">Remote friendly</p>
                </BentoCard>

                {/* XP card */}
                <BentoCard className="text-center flex flex-col items-center justify-center max-[560px]:col-span-4 bg-black rainbow rotate">
                    <p>
                        {' '}
                        <Crown
                            size={48}
                            className="ml-2"
                        />
                    </p>
                    <p className="text-[48px] font-extrabold text-white tracking-[-2px]">10+</p>
                    <p className="text-[13px] text-white/80 mt-1">ans d'expérience</p>
                </BentoCard>
            </div>
        </section>
    );
}
