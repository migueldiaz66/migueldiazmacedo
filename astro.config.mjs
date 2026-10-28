// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// `lastmod` del sitemap: la fecha real de cada artículo, leída de su
// frontmatter (updatedDate si existe, si no pubDate). El índice de cada tema y
// la portada heredan la fecha del artículo más reciente que listan.
const articleDates = () => {
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

// Las páginas que no son artículos no tienen fecha propia, así que la suya es
// la del último commit que tocó sus fuentes. En un clon superficial —que es lo
// que algunos servicios de compilación hacen— todos los archivos comparten la
// fecha del último commit, y entonces no se declara nada: un `lastmod` falso
// es peor que ninguno.
const gitUsable = (() => {
  try {
    const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return shallow === 'false';
  } catch {
    return false;
  }
})();

const lastCommit = (files) => {
  if (!gitUsable) return null;
  let newest = null;
  for (const file of files) {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (!out) continue;
      const date = new Date(out);
      if (!Number.isNaN(date.valueOf()) && !(newest >= date)) newest = date;
    } catch {
      /* el archivo no está versionado todavía: esa página se queda sin lastmod */
    }
  }
  return newest;
};

const PAGE_SOURCES = {
  '/acerca/': ['src/pages/acerca/index.astro'],
  '/acerca/perfil/': ['src/pages/acerca/perfil.astro'],
  '/acerca/seo/': ['src/pages/acerca/seo.astro'],
  '/acerca/tecnologias/': ['src/pages/acerca/tecnologias.astro', 'src/config/tech.ts'],
  '/glosario/': ['src/pages/glosario.astro', 'src/config/glossary.ts'],
};

const lastmod = articleDates();
for (const [route, files] of Object.entries(PAGE_SOURCES)) {
  if (lastmod.has(route)) continue;
  const date = lastCommit(files);
  if (date) lastmod.set(route, date);
}

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
