import './welcome.scss';
import BentoCard from '../BentoCard';
import { useTheme } from '../../context/ThemeContext'
import { ArrowDown } from 'lucide-react';

export default function Welcome() {
    const { theme } = useTheme()
    return (
        <section
            id="welcome"
            className="h-min-screen w-full flex flex-col"
        >
            <div className={[
                'sticky top-0 h-screen flex items-center justify-center flex-col text-center px-4',
                ].join(' ')}>
                <h1 className="text-[clamp(36px,5vw,60px)] text-4xl md:text-7xl font-extrabold text-center text-white py-4 flex flex-col">
                    Hello <span data-text="World !" className="cyber-title max-sm:text-6xl lg:text-9xl">&lt;World/&gt;</span>
                </h1>

                <div className="absolute bottom-10 animate-bounce">
                    <ArrowDown className="text-white" size={42}/>
                </div>
            </div>
        </section>
    );
}
