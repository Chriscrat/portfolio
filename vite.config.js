import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    plugins: [
        react(),
        sitemap({ hostname: 'https://portfolio.dev-cba.com' })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8788',
                changeOrigin: true,
            },
        },
    },
});
