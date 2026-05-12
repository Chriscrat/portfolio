import { useState, useEffect } from 'react';

import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Welcome from './components/sections/Welcome';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experiences from './components/sections/Experiences';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ThemeToggle from './components/ThemeToggle';
import './sections.scss';

function Portfolio() {
    const [isMaintenanceEnabled, setIsMaintenanceEnabled] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/status')
            .then(res => res.json())
            .then(data => {
                setIsMaintenanceEnabled(data.maintenance);
                setLoading(false);
            })
            .catch(() => setLoading(false));
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
                        <main className="relative">
                            <Welcome />
                            <About />
                            <Skills />
                            <Experiences />
                            {/* <Projects /> */}
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                    <AnimatedBackground />
                    <div className="fixed right-0 bottom-0">
                        <ThemeToggle />
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
