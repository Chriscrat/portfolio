import './welcome.scss';
import BentoCard from '../BentoCard';
import { useTheme } from '../../context/ThemeContext';
import { ArrowDown, ArrowRight } from 'lucide-react';
import CyberpunkCard from '../CyberpunkCard';

export default function Welcome() {
    const { theme } = useTheme();
    return (
        <section
            id="welcome"
            className="h-min-screen w-full flex flex-col"
        >
            <div className={['cyber-grid', theme === 'dark' ? 'bg-secondary-950' : 'bg-primary-700 light-grid'].join(' ')}></div>
            <div className="h-screen grid grid-cols-3 grid-rows-4 gap-4 px-12 pt-[150px] lg:pt-[300px] pb-10">
                <div className="max-md:hidden order-2 col-span-3 row-span-3 xl:col-span-1 xl:order-1 flex align-middle items-center justify-center place-self-center">
                    <CyberpunkCard />
                </div>
                <div className="order-1 col-span-3 xl:col-span-2 xl:order-2 row-span-3 md:row-span-2 sticky flex items-center justify-center place-self-center flex-col text-center px-4">
                    <h1 className="flex flex-col text-[clamp(36px,5vw,60px)] text-4xl md:text-7xl font-extrabold text-center text-white py-4">
                        Christophe{' '}
                        <span
                            data-text="<Barreto/>"
                            className="cyber-title max-sm:text-5xl lg:text-8xl"
                        >
                            &lt;Barreto/&gt;
                        </span>
                    </h1>
                    <div className="flex flex-row text-xs sm:text-md md:text-lg text-white gap-2">
                        <span>
                            Développeur Fullstack Senior <span className="text-accent-500 font-bold">Vue.js</span> &{' '}
                            <span className="text-accent-500 font-bold">Node.js</span>
                        </span>
                        <span className="max-md:hidden">|</span>
                        <span> 10+ ans</span>
                        <span className="max-md:hidden"> d'experiences</span>
                    </div>
                    <div className="flex flex-row gap-4 mt-8">
                        <a
                            href="#experience"
                            className="relative cursor-pointer group px-4 py-2 md:px-10 md:py-4 inline-flex items-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-full overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-pink-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                            <span className="relative text-white text-sm md:text-xl lg:text-2xl font-semibold group-hover:text-white transition-colors duration-300">
                                Mes experiences{' '}
                            </span>
                            <ArrowRight
                                size={30}
                                className="relative text-white ml-2 font-semibold"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="cursor-pointer px-4 py-2 md:px-10 md:py-4 inline-flex items-center rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] shadow-pink-500 text-white font-semibold border border-accent-500 border-hover text-sm md:text-xl lg:text-2xl hover:bg-accent-500 transition-[background] duration-200"
                        >
                            Me contacter
                        </a>
                    </div>
                </div>
                <div className="flex flex-none relative row-span-1 col-span-3 order-3">
                    <a
                        href="#about"
                        className="absolute place-self-center bottom-0 m-auto left-0 right-0 animate-bounce"
                    >
                        <ArrowDown
                            className="text-white"
                            size={42}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
