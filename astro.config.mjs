// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `lastmod` del sitemap: la fecha real de cada artículo, leída de su
// frontmatter (updatedDate si existe, si no pubDate). El índice de cada tema y
// la portada heredan la fecha del artículo más reciente que listan.
const lastmodByPath = () => {
  const root = 'src/content';
  const byPath = new Map();
  const newestByTopic = new Map();
  let newest = null;

  for (const dir of fs.readdirSync(root, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(root, dir.name))) {
      if (!file.endsWith('.md')) continue;
      const text = fs.readFileSync(path.join(root, dir.name, file), 'utf8');
      if (/^draft:\s*true\s*$/m.test(text)) continue;
      const raw =
        text.match(/^updatedDate:\s*(.+)$/m)?.[1] ?? text.match(/^pubDate:\s*(.+)$/m)?.[1];
      const date = new Date((raw ?? '').trim().replace(/^['"]|['"]$/g, ''));
      if (Number.isNaN(date.valueOf())) continue;
      byPath.set(`/${dir.name}/${file.replace(/\.md$/, '')}/`, date);
      if (!(newestByTopic.get(dir.name) >= date)) newestByTopic.set(dir.name, date);
      if (!(newest >= date)) newest = date;
    }
  }
  for (const [topic, date] of newestByTopic) byPath.set(`/${topic}/`, date);
  if (newest) byPath.set('/', newest);
  return byPath;
};

const lastmod = lastmodByPath();

// https://astro.build
export default defineConfig({
  site: 'https://migueldiazmacedo.com',
  integrations: [
    sitemap({
      // No listar rutas de borrador (revisión) en el sitemap.
      filter: (page) => !page.includes('/borrador/'),
      serialize: (item) => {
        const date = lastmod.get(new URL(item.url).pathname);
        return date ? { ...item, lastmod: date.toISOString() } : item;
      },
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
