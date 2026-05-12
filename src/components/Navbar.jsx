import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { label: 'Bienvenue', href: '#welcome' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Expériences', href: '#experience' },
    // { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('#welcome')
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setScrolled(scrollTop > 20)

            let current = navLinks[0].href
            for (const { href } of navLinks) {
                const el = document.getElementById(href.slice(1))
                if (el && el.offsetTop <= scrollTop + 100) {
                    current = href
                }
            }
            setActiveSection(current)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLinkClick = () => setMenuOpen(false)

    return (
        <header className={[
            'fixed m-md:w-screen top-0 z-[100] py-4 bg-primary-500 transition-[background,backdrop-filter,box-shadow,margin,padding,background-color,border-radius] shadow-[0_1px_0_var(--color-border)] duration-300',
            scrolled ? 'left-0 right-0 m-0 rounded-none backdrop-blur-[16px] shadow-[0_1px_0_var(--color-border)]' : 'xl:left-[15%] xl:right-[15%] md:left-[5%] md:right-[5%] left-0 right-0 md:mt-12 mx-0 md:rounded-3xl',
        ].join(' ')}>
            <div className="max-w-content mx-auto flex items-center justify-between px-4 min-md:justify-center gap-6">
                <div className="max-lg:text-xl text-2xl font-bold text-white">
                    Christophe <span style={{ color: 'var(--color-accent-500)' }}>&lt;Barreto/&gt;</span>
                </div>
                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-2">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={[
                                'px-3.5 py-2 rounded-full text-xs lg:text-lg font-medium transition-[color,background] duration-200 text-white',
                                activeSection === link.href
                                    ? 'bg-accent-500'
                                    : 'hover:bg-border',
                            ].join(' ')}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        className="md:hidden p-1 text-white"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <div className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 flex flex-col bg-primary-500 backdrop-blur-[16px] border border-border rounded-md p-3 shadow-[0_8px_32px_var(--color-shadow)]">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={[
                                'px-4 py-3 rounded-sm text-[15px] text-white font-medium transition-[color,background] duration-200',
                                activeSection === link.href
                                    ? 'bg-accent-500'
                                    : 'hover:bg-border',
                            ].join(' ')}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    )
}
