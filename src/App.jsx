import { useState, useEffect } from 'react';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Welcome from './views/Welcome';
import About from './views/About';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Experiences from './views/Experiences';
import Contact from './views/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import DarkThemeToggle from './components/DarkThemeToggle';
import { getMaintenanceStatus } from './services/status-service';
import './sections.scss';

function Portfolio() {
    const [isMaintenanceEnabled, setIsMaintenanceEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkMaintenanceStatus = async () => {
            try {
                const data = await getMaintenanceStatus();
                setIsMaintenanceEnabled(data.maintenance);
            } catch {
                setIsMaintenanceEnabled(false);
            } finally {
                setLoading(false);
            }
        };

        checkMaintenanceStatus();
    }, []);

    // TODO : spinner
    if (loading) return null;

    return (
        <>
            {isMaintenanceEnabled ? (
                <div className="maintenance-page h-screen">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source
                            src="/cyberpunk-mountain.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div id="beback">
                        <p
                            className="text-6xl md:text-9xl font-extrabold cyber-title"
                            data-text="I'll be back !"
                        >
                            I'll be back !
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col min-h-screen w-screen">
                        <Navbar />
                        <main>
                            <Welcome />
                            <About />
                            <Skills />
                            <Experiences />
                            <Projects />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                    <AnimatedBackground />
                    <div className="fixed right-0 bottom-0 z-10">
                        <DarkThemeToggle />
                    </div>
                </>
            )}
        </>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Portfolio />
        </ThemeProvider>
    );
}
