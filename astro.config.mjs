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
// la del último commit que tocó sus fuentes, o la del archivo en disco si está
// modificado sin confirmar. Cloudflare Pages compila sobre un clon superficial,
// donde todos los archivos comparten la fecha del último commit: ahí ese cálculo
// mentiría, así que la compilación local deja las fechas escritas en
// PAGE_DATES_FILE y la remota se limita a leerlas.
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

const fileDate = (files) => {
  if (!gitUsable) return null;
  let newest = null;
  for (const file of files) {
    try {
      // Sin confirmar todavía: vale la fecha del archivo en disco.
      const pending = execFileSync('git', ['status', '--porcelain', '--', file], {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      const raw = pending
        ? fs.statSync(file).mtime.toISOString()
        : execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore'],
          }).trim();
      if (!raw) continue;
      const date = new Date(raw);
      if (!Number.isNaN(date.valueOf()) && !(newest >= date)) newest = date;
    } catch {
      /* el archivo no existe o no está versionado: esa página se queda sin fecha */
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

// Fechas de esas páginas, calculadas aquí cuando se puede y leídas del archivo
// cuando no. El archivo se versiona: es el que viaja a la compilación remota.
const PAGE_DATES_FILE = 'src/config/page-dates.json';

const readPageDates = () => {
  try {
    return JSON.parse(fs.readFileSync(PAGE_DATES_FILE, 'utf8'));
  } catch {
    return {};
  }
};

const pageDates = (() => {
  if (!gitUsable) return readPageDates();
  const fresh = {};
  for (const [route, files] of Object.entries(PAGE_SOURCES)) {
    const date = fileDate(files);
    if (date) fresh[route] = date.toISOString();
  }
  if (!Object.keys(fresh).length) return readPageDates();
  const json = JSON.stringify(fresh, null, 2) + '\n';
  if (json !== (() => { try { return fs.readFileSync(PAGE_DATES_FILE, 'utf8'); } catch { return ''; } })()) {
    fs.writeFileSync(PAGE_DATES_FILE, json);
  }
  return fresh;
})();

const lastmod = articleDates();
for (const [route, iso] of Object.entries(pageDates)) {
  if (lastmod.has(route)) continue;
  const date = new Date(iso);
  if (!Number.isNaN(date.valueOf())) lastmod.set(route, date);
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
