/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
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
