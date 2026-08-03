/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    950: 'var(--color-primary-950)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary)',
                    50: 'var(--color-secondary-50)',
                    100: 'var(--color-secondary-100)',
                    200: 'var(--color-secondary-200)',
                    300: 'var(--color-secondary-300)',
                    400: 'var(--color-secondary-400)',
                    500: 'var(--color-secondary-500)',
                    600: 'var(--color-secondary-600)',
                    700: 'var(--color-secondary-700)',
                    800: 'var(--color-secondary-800)',
                    900: 'var(--color-secondary-900)',
                    950: 'var(--color-secondary-950)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent)',
                    50: 'var(--color-accent-50)',
                    100: 'var(--color-accent-100)',
                    200: 'var(--color-accent-200)',
                    300: 'var(--color-accent-300)',
                    400: 'var(--color-accent-400)',
                    500: 'var(--color-accent-500)',
                    600: 'var(--color-accent-600)',
                    700: 'var(--color-accent-700)',
                    800: 'var(--color-accent-800)',
                    900: 'var(--color-accent-900)',
                    950: 'var(--color-accent-950)',
                },
                surface: 'var(--color-surface)',
                'surface-hover': 'var(--color-surface-hover)',
                border: 'var(--color-border)',
                'border-hover': 'var(--color-border-hover)',
                tx: 'var(--color-text)',
                'tx-muted': 'var(--color-text-muted)',
                'tx-subtle': 'var(--color-text-subtle)',
                bg: 'var(--color-background)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
            },
            fontFamily: {
                ubuntu: 'var(--font-ubuntu)',
                numans: 'var(--font-numans)',
            },
            animation: {
                'float-x': 'floatX var(--anim-duration, 6s) ease-in-out var(--anim-delay, 0s) infinite',
                'float-y': 'floatY var(--anim-duration, 6s) ease-in-out var(--anim-delay, 0s) infinite',
                'float-x-rev': 'floatXReverse var(--anim-duration, 6s) ease-in-out var(--anim-delay, 0s) infinite',
                'float-y-rev': 'floatYReverse var(--anim-duration, 6s) ease-in-out var(--anim-delay, 0s) infinite',
                blob: 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'tranlate(0px, 0px) scale(1)',
                    },
                },
            },
            maxWidth: {
                content: '1100px',
            },
        },
    },
    plugins: [],
};
