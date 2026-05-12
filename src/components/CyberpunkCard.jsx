import './cyberpunkCard.scss';
import { Download } from 'lucide-react';

export default function CyberpunkCard() {
    function downloadFile() {
        const CVFile = '/CV_Senior_Fullstack_developer_Christophe_BARRETO.pdf';
        window.open(CVFile, '_blank');
    }

    return (
        <div className="card-wrapper" onClick={() => downloadFile()}>
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
                className="card"
                id="cyber-card"
            >
                <div className="card-content">
                    <div className="glitch-wrapper">
                        <img
                            src="/me.png"
                            alt="Cyber Avatar"
                            className="avatar"
                        />
                        <div className="glitch-effect"></div>
                    </div>

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
                    <p className="cyber-role">FULLSTACK_WEB_DEVELOPER</p>

                    <div className="stats">
                        <div className="stat-box">
                            <span className="label">EXP</span>
                            <span className="value">10+</span>
                        </div>
                        <div className="stat-box">
                            <span className="label">STACKS</span>
                            <span className="value">JS / TS / VUE</span>
                        </div>
                        <div className="stat-box">
                            <span className="label">Dispo ?</span>
                            <span className="value">Oui</span>
                        </div>
                    </div>

                    <span className="cyber-btn">
                        Mon CV <Download />
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
