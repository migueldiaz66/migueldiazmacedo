// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://migueldiazmacedo.com',
  integrations: [
    sitemap({
      // No listar las rutas de borrador (revisión) en el sitemap.
      filter: (page) => !page.includes('/fiscal/borrador/'),
    }),
  ],
  // Cloudflare Pages serves static output by default
  build: {
    format: 'directory',
  },
});
