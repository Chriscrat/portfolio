import './cyberpunk-card.scss';
import { Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CyberpunkCard({ withIdentity, withJobTitle }) {
    const { darkTheme } = useTheme();
    const isDark = darkTheme === 'dark';

    function downloadFile() {
        const CVFile = '/CV_Senior_Fullstack_developer_Christophe_BARRETO.pdf';
        window.open(CVFile, '_blank');
    }

    return (
        <div
            className="card-wrapper md:w-[350px]"
            onClick={() => downloadFile()}
        >
            {Array.from({ length: 25 }, (_, i) => (
                <span
                    key={i}
                    className={`trigger t-${i + 1}`}
                ></span>
            ))}
            <div
                className={['card', isDark ? 'bg-slate-950' : 'bg-white'].join(' ')}
                id="cyber-card"
            >
                <div className="card-content">
                    <div className="glitch-wrapper w-44 h-36">
                        <img
                            src="/me.png"
                            alt="Cyber Avatar"
                            className="avatar"
                        />
                        <div className="glitch-effect"></div>
                    </div>
                    <div className={withIdentity ? '' : 'hidden'}>
                        <h2
                            className="cyber-title text-2xl w-full"
                            data-text="CHRISTOPHE"
                        >
                            CHRISTOPHE
                        </h2>
                        <h2
                            className="cyber-title text-3xl w-full"
                            data-text="BARRETO"
                        >
                            BARRETO
                        </h2>
                    </div>

                    <p className={['cyber-role', withJobTitle ? '' : 'hidden'].join(' ')}>FULLSTACK_WEB_DEVELOPER</p>

                    <div className="stats">
                        <div className="stat-box">
                            <span className={['label font-bold', isDark ? 'text-gray-400' : 'text-accent-500'].join(' ')}>EXP</span>
                            <span className="value text-tx-muted">10+</span>
                        </div>
                        <div className="stat-box">
                            <span className={['label font-bold', isDark ? 'text-gray-400' : 'text-accent-500'].join(' ')}>STACKS</span>
                            <span className="value text-tx-muted">VUE / NODE</span>
                        </div>
                        <div className="stat-box">
                            <span className={['label font-bold', isDark ? 'text-gray-400' : 'text-accent-500'].join(' ')}>DISPONIBLE ?</span>
                            <span className="value text-tx-muted">Oui</span>
                        </div>
                    </div>

                    <span className="cyber-btn rounded-full text-sm">
                        Mon CV <Download size={18} />
                    </span>
                </div>

                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
            </div>
        </div>
    );
}
