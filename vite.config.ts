import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
	base: './',
	build: {
		minify: true,
		sourcemap: true,
	},
	server: {
		host: '0.0.0.0',
		port: 8888,
		hmr: true,
	},
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
		postcss: {
			plugins: [tailwindcss(), autoprefixer()],
		},
	},
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
