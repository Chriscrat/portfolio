import './neon-background.scss';
import { useTheme } from '../context/ThemeContext';

const BUILDINGS = [
    { left: '4%', height: '20%', width: '3%' },
    { left: '6%', height: '50%', width: '1.5%' },
    { left: '8%', height: '25%', width: '4%' },
    { left: '12%', height: '30%', width: '3%' },
    { left: '13%', height: '55%', width: '3%', antenna: true },
    { left: '17%', height: '20%', width: '4%' },
    { left: '18.5%', height: '70%', width: '1.5%' },
    { left: '20%', height: '30%', width: '4%' },
    { left: '21.5%', height: '80%', width: '2%', antenna: true },
    { left: '25%', height: '60%', width: '4%' },
    { left: '28%', height: '40%', width: '4%' },
    { left: '30%', height: '70%', width: '4%' },
    { left: '35%', height: '65%', width: '4%', antenna: true },
    { left: '38%', height: '40%', width: '3%' },
    { left: '42%', height: '60%', width: '2%' },
    { left: '43%', height: '85%', width: '4%', antenna: true },
    { left: '45%', height: '40%', width: '3%' },
    { left: '48%', height: '25%', width: '3%' },
    { left: '50%', height: '80%', width: '4%' },
    { left: '52%', height: '32%', width: '5%' },
    { left: '55%', height: '55%', width: '3%', antenna: true },
    { left: '58%', height: '45%', width: '4%' },
    { left: '61%', height: '90%', width: '4%' },
    { left: '66%', height: '99%', width: '4%', antenna: true },
    { left: '69%', height: '30%', width: '4%' },
    { left: '73.5%', height: '90%', width: '2%' },
    { left: '72%', height: '70%', width: '4%' },
    { left: '75%', height: '60%', width: '4%' },
    { left: '80%', height: '40%', width: '4%' },
    { left: '83%', height: '70%', width: '4%', antenna: true },
    { left: '87%', height: '60%', width: '3%', antenna: true },
    { left: '93%', height: '50%', width: '3%' },
    { left: '91%', height: '30%', width: '4%' },
    { left: '94%', height: '20%', width: '3%' },
    { left: '98%', height: '35%', width: '2%' },
];

export default function NeonBackground() {
    const { darkTheme } = useTheme();
    const isDark = darkTheme === 'dark';

    const HORIZONTAL_LINES = 30;
    const VERTICAL_LINES = 10;
    return (
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
                        {BUILDINGS.map(({ left, height, width, antenna }, i) => (
                            <div
                                key={i}
                                style={{ left, height, width }}
                                className={antenna ? 'retrobg-building retrobg-antenna' : 'retrobg-building'}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Retro background */}
            <div id="retrobg-ground">
                <div id="retrobg-linesWrap">
                    <div id="retrobg-lines">
                        <div id="retrobg-vlines">
                            {[...Array(HORIZONTAL_LINES)].map((_, i) => (
                                <div
                                    key={i}
                                    className="retrobg-vline"
                                ></div>
                            ))}
                        </div>
                        <div id="retrobg-hlines">
                            {[...Array(VERTICAL_LINES)].map((_, i) => (
                                <div
                                    key={i}
                                    className="retrobg-hline"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div id="retrobg-groundShadow"></div>
            </div>
        </div>
    );
}
