import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-dark-theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkTheme);
        localStorage.setItem('portfolio-dark-theme', darkTheme);
    }, [darkTheme]);

    const toggleDarkTheme = () => setDarkTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
    return ctx;
}
