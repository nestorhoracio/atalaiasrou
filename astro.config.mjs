// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// TODO: reemplazar por el dominio propio cuando esté definido
	site: 'https://atalaias-rou.netlify.app',
	compressHTML: true,
	integrations: [sitemap()],
});
