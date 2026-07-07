import './dark-theme-toggle.scss';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function DarkThemeToggle() {
    const { darkTheme, toggleDarkTheme } = useTheme();
    const isDark = darkTheme === 'dark';

    return (
        <button
            onClick={toggleDarkTheme}
            aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
            title={isDark ? 'Mode clair' : 'Mode sombre'}
            className={[
                "relative w-14 h-14 rounded-tl-full cursor-pointer transition-colors duration-300",
                isDark ? 'bg-black' : 'bg-white'
            ].join(' ')}
        >
            <span
                className={[
                    "flex items-center justify-center transition-all duration-300 pt-2 pl-2",
                ].join(' ')}
            >
                {isDark ? (
                    <Moon
                        size={30}
                        className="text-amber-400"
                    />
                ) : (
                    <Sun
                        size={30}
                        className="text-orange-500"
                    />
                )}
            </span>
        </button>
    );
}
