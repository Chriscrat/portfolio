import './cyberpunkCard.scss';
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
            <span
                target="_blank"
                className="trigger t-1"
            ></span>
            <span
                target="_blank"
                className="trigger t-2"
            ></span>
            <span
                target="_blank"
                className="trigger t-3"
            ></span>
            <span
                target="_blank"
                className="trigger t-4"
            ></span>
            <span
                target="_blank"
                className="trigger t-5"
            ></span>
            <span
                target="_blank"
                className="trigger t-6"
            ></span>
            <span
                target="_blank"
                className="trigger t-7"
            ></span>
            <span
                target="_blank"
                className="trigger t-8"
            ></span>
            <span
                target="_blank"
                className="trigger t-9"
            ></span>
            <span
                target="_blank"
                className="trigger t-10"
            ></span>
            <span
                target="_blank"
                className="trigger t-11"
            ></span>
            <span
                target="_blank"
                className="trigger t-12"
            ></span>
            <span
                target="_blank"
                className="trigger t-13"
            ></span>
            <span
                target="_blank"
                className="trigger t-14"
            ></span>
            <span
                target="_blank"
                className="trigger t-15"
            ></span>
            <span
                target="_blank"
                className="trigger t-16"
            ></span>
            <span
                target="_blank"
                className="trigger t-17"
            ></span>
            <span
                target="_blank"
                className="trigger t-18"
            ></span>
            <span
                target="_blank"
                className="trigger t-19"
            ></span>
            <span
                target="_blank"
                className="trigger t-20"
            ></span>
            <span
                target="_blank"
                className="trigger t-21"
            ></span>
            <span
                target="_blank"
                className="trigger t-22"
            ></span>
            <span
                target="_blank"
                className="trigger t-23"
            ></span>
            <span
                target="_blank"
                className="trigger t-24"
            ></span>
            <span
                target="_blank"
                className="trigger t-25"
            ></span>
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
