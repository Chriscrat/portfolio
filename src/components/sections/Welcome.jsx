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
            <div className="absolute h-screen w-screen grid grid-cols-3 grid-rows-4 gap-4 px-12 pt-[150px] lg:pt-[300px] pb-10 z-10">
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
                <div className="flex relative row-span-1 col-span-3 order-3">
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

            <div id="retrobg">
                <div id="retrobg-sky">
                    <div id="retrobg-sunWrap">
                        <div id="retrobg-sun"></div>
                    </div>
                    <div id="retrobg-mountains">
                        <div
                            id="retrobg-mountains-left"
                            className="retrobg-mountain"
                        ></div>
                        <div
                            id="retrobg-mountains-right"
                            className="retrobg-mountain"
                        ></div>
                    </div>
                    <div id="retrobg-cityWrap">
                        <div id="retrobg-city">
                            <div
                                style={{ left: '4%', height: '20%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '6%', height: '50%', width: '1.5%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '8%', height: '25%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '12%', height: '30%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '13%', height: '55%', width: '3%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '17%', height: '20%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '18.5%', height: '70%', width: '1.5%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '20%', height: '30%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '21.5%', height: '80%', width: '2%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '25%', height: '60%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '28%', height: '40%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '30%', height: '70%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '35%', height: '65%', width: '4%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '38%', height: '40%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '42%', height: '60%', width: '2%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '43%', height: '85%', width: '4%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '45%', height: '40%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '48%', height: '25%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '50%', height: '80%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '52%', height: '32%', width: '5%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '55%', height: '55%', width: '3%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '58%', height: '45%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '61%', height: '90%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '66%', height: '99%', width: '4%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '69%', height: '30%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '73.5%', height: '90%', width: '2%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '72%', height: '70%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '75%', height: '60%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '80%', height: '40%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '83%', height: '70%', width: '4%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '87%', height: '60%', width: '3%' }}
                                className="retrobg-building retrobg-antenna"
                            ></div>
                            <div
                                style={{ left: '93%', height: '50%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '91%', height: '30%', width: '4%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '94%', height: '20%', width: '3%' }}
                                className="retrobg-building"
                            ></div>
                            <div
                                style={{ left: '98%', height: '35%', width: '2%' }}
                                className="retrobg-building"
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Retro background */}
                <div id="retrobg-ground">
                    <div id="retrobg-linesWrap">
                        <div id="retrobg-lines">
                            <div id="retrobg-vlines">
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                                <div className="retrobg-vline"></div>
                            </div>
                            <div id="retrobg-hlines">
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                                <div className="retrobg-hline"></div>
                            </div>
                        </div>
                    </div>
                    <div id="retrobg-groundShadow"></div>
                </div>
            </div>
        </section>
    );
}
