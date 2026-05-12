import './about.scss';
import { MapPin, ArrowUpRight, ArrowRight, Crown } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import BentoCard from '../BentoCard';
import { useTheme } from '../../context/ThemeContext';

const statusBadge = (
    <span className="inline-flex items-center gap-2 text-md font-medium text-white bg-black px-3 py-1.5 rounded-full w-fit">
        <span className="w-[10px] h-[10px] rounded-full bg-green-400 animate-pulse" />
        Open to work
    </span>
);

export default function About() {
    const { theme, toggleTheme } = useTheme();
    return (
        <section
            id="about"
            className="flex flex-col px-6 pt-[50px] md:pt-[100px] pb-20"
        >
            <h1 className="text-4xl pb-12 xl:left-32 text-white mb-6 relative">
                &lt;
                <span className="text-accent-500">About</span>
                &gt;
            </h1>
            <div className="h-min-screen max-w-content mx-auto grid grid-cols-4 gap-6 w-full sm:grid-cols-2 max-[560px]:grid-cols-1 lg:grid-cols-4">
                <BentoCard className="col-span-3 min-h-[280px] sm:col-span-2 max-[560px]:col-span-4 lg:col-span-3 flex flex-col md:flex-row items-center gap-4 bg-accent-400">
                    <div className="flex flex-col text-center gap-4">
                        <div className="w-56 h-56 rounded-full overflow-hidden bg-radial-secondary-accent shadow-lg shadow-primary/20">
                            <img
                                src="/me.png"
                                alt="Christophe Barreto photo"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div className="mt-4">{statusBadge}</div>
                    </div>
                    <div className="flex flex-col gap-4 relative z-10">
                        <p className="text-2xl leading-relaxed inline-block">
                            <span className="font-semibold text-primary-600">10 ans</span> à construire des interfaces qui tiennent la route et
                            des équipes qui grandissent. De l'architecture <span className="right font-semibold text-primary-600"> Vue.js/Node.js</span> au mentoring de juniors, j'interviens
                            là où le technique rencontre l'humain.
                        </p>
                        <div className="flex gap-3 flex-wrap mt-10 md:justify-end align-middle justify-center">
                            <a
                                href="#experience"
                                className="inline-flex items-center px-4 py-2 md:px-10 md:py-4 rounded-full bg-primary text-white text-md font-semibold hover:bg-primary-500 transition-[background] cursor-pointer duration-200"
                            >
                                Voir mes expériences
                                <ArrowRight
                                    size={20}
                                    className="ml-2"
                                />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 md:px-10 md:py-4 rounded-full border border-tx text-white border-white border-hover text-md font-semibold hover:bg-accent-500 transition-[background] cursor-pointer duration-200"
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
            <h1 className="text-4xl xl:right-32 xl:text-right text-white  mt-6 relative">
                &lt;/
                <span className="text-accent-500">About</span>
                &gt;
            </h1>
        </section>
    );
}
