import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// resolve: {
	// 	alias: {
	// 		$lib: '/src/lib',
	// 		$components: '/src/lib/components'
	// 	}
	// },
	// ssr: {
	// 	noExternal: ['bits-ui', 'shadcn-svelte']
	// },
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:8080',
				changeOrigin: true,
				secure: false,
			}
		}
	}
});
