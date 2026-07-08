// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://migueldiazmacedo.com',
  integrations: [
    sitemap({
      // No listar rutas de borrador (revisión) en el sitemap.
      filter: (page) => !page.includes('/borrador/'),
      // Demo estático servido desde public/ (no es una página Astro, no se
      // auto-incluye en el sitemap); se añade explícitamente su URL raíz.
      customPages: ['https://migueldiazmacedo.com/demo-corpus-extractor/'],
    }),
  ],
  // Cloudflare Pages serves static output by default
  build: {
    format: 'directory',
  },
});
