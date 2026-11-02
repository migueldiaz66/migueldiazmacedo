// Genera una copia exacta del articulo publicado, en Markdown, lista para
// copiar y pegar. Toma el cuerpo del articulo tal cual y arma las tres
// secciones que la pagina genera desde el frontmatter: Referencias, Glosario y
// Preguntas frecuentes. Volver a correrlo si el articulo cambia.
const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');

const ROOT = 'D:/code/migueldiazmacedo';
const SRC = path.join(ROOT, 'src/content/laboratorio/rag-minimo-local.md');
const OUT = path.join(ROOT, 'src/content/laboratorio/rag-minimo-local-linkedin-es.md');
const SITE = 'https://migueldiazmacedo.com';

// --- articulo: frontmatter + cuerpo ---------------------------------------
const raw = fs.readFileSync(SRC, 'utf8');
const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
if (!m) throw new Error('no se pudo separar el frontmatter');
const fm = yaml.load(m[1]);
const pubDateRaw = (m[1].match(/^pubDate:\s*(.+)$/m) || [])[1] || '';
let body = m[2].trim();

// --- glosario: el catalogo, evaluado como literal -------------------------
const gsrc = fs.readFileSync(path.join(ROOT, 'src/config/glossary.ts'), 'utf8');
const gstart = gsrc.indexOf('GLOSSARY: GlossaryTerm[] = [');
const garr = gsrc.slice(gsrc.indexOf('[', gstart), gsrc.lastIndexOf('];') + 1);
const GLOSSARY = eval('(' + garr + ')');
const terms = (fm.glossary ?? []).map((k) => {
  const t = GLOSSARY.find((x) => x.key === k);
  if (!t) throw new Error('termino ausente en el glosario: ' + k);
  return t;
});
terms.sort((a, b) =>
  (a.abbr ?? a.name).localeCompare(b.abbr ?? b.name, 'es', { sensitivity: 'base' })
);

// --- cuerpo: las anclas de la pagina no sobreviven al pegado --------------
const url1 = (n) => (fm.citations?.[n - 1]?.urls ?? [])[0];

// [1] -> enlace a la fuente (en la pagina enlaza a la referencia de abajo)
body = body.replace(/\[\\\[(\d+)\\\]\]\(#ref-\d+\)/g, (s, n) => {
  const u = url1(Number(n));
  return u ? `[\\[${n}\\]](${u})` : `\\[${n}\\]`;
});
// [a] y [b] -> marca de nota, que va al final del cuerpo
body = body.replace(/\[\\\[([ab])\\\]\]\(#nota-[ab]\)/g, '\\[$1\\]');
body = body.replace(/<span id="nota-([ab])">\[([ab])\]<\/span>/g, '**[$2]**');
// terminos del glosario: el texto se queda, el salto interno se va
body = body.replace(/\[([^\]]+)\]\(#gloss-[^)]+\)/g, '$1');
// enlaces internos del sitio -> absolutos
body = body.replace(/\]\((\/[^)]+)\)/g, `](${SITE}$1)`);
// figuras -> marca de imagen con el archivo por subir y el pie tal cual
let fig = 0;
body = body.replace(
  /<figure>\s*<img[^>]*src="([^"]+)"[^>]*\/>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g,
  (s, src, cap) => {
    fig += 1;
    const file = path.basename(src).replace(/\.(svg|webp|png|jpg)$/, '.png');
    return `[IMAGEN ${fig} — subir _linkedin/img/${file}]\n\n*${cap.trim()}*`;
  }
);
if (fig !== 3) throw new Error('se esperaban 3 figuras, se encontraron ' + fig);
// banda de Codespaces: va donde el articulo habla de correrlo sin instalar nada
const CODESPACES = 'https://codespaces.new/migueldiaz66/remix3-local-rag-agent';
const marcaCs = `

[IMAGEN 4 — subir _linkedin/img/codespaces.png, con el enlace ${CODESPACES}]`;
if (!body.includes('y en 12.2 la segunda.')) throw new Error('no se encontro el parrafo de Codespaces');
body = body.replace('y en 12.2 la segunda.', 'y en 12.2 la segunda.' + marcaCs);

if (/#ref-|#gloss-|#nota-|<figure|<span/.test(body)) throw new Error('quedaron anclas o HTML en el cuerpo');

// --- fecha, con el mismo formato que la pagina ----------------------------
const fecha = new Intl.DateTimeFormat('es-MX', {
  year: 'numeric', month: 'long', day: 'numeric',
  hour: '2-digit', minute: '2-digit', hour12: false,
  timeZone: 'America/Mexico_City',
}).format(new Date(fm.pubDate));

// --- las tres secciones que la pagina arma del frontmatter ----------------
const refs = (fm.citations ?? [])
  .map((c, i) => {
    const urls = (c.urls ?? []).map((u) => `[${u}](${u})`).join(' ');
    return `**[${i + 1}]** ${c.text}${urls ? '\n\n' + urls : ''}`;
  })
  .join('\n\n');

const gloss = terms
  .map((t) => {
    const head = t.abbr ? `**${t.abbr}** (*${t.name}*)` : `**${t.name}**`;
    return `${head}. ${t.definition}`;
  })
  .join('\n\n');

const faq = (fm.faq ?? []).map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n');

// --- archivo final --------------------------------------------------------
const out = `---
title: "Copia para pegar en LinkedIn — ${fm.title}"
description: "Copia exacta del articulo publicado, en Markdown y sin anclas internas, para copiar y pegar en el editor de articulos de LinkedIn. Generada del articulo con scripts/gen-copia-linkedin.cjs."
pubDate: ${pubDateRaw.trim().slice(0, 10)}
draft: true
lang: es
tags: ${JSON.stringify(fm.tags ?? [])}
---

# ${fm.title}

*${fm.description}*

Miguel Díaz Macedo · ${fecha}

${body}

## Referencias

${refs}

## Glosario

${gloss}

## Preguntas frecuentes

${faq}
`;

fs.writeFileSync(OUT, out, 'utf8');
const words = out.split(/\s+/).filter(Boolean).length;
console.log(`escrito: ${OUT}`);
console.log(`referencias: ${(fm.citations ?? []).length} | glosario: ${terms.length} | faq: ${(fm.faq ?? []).length} | figuras: ${fig}`);
console.log(`palabras: ${words} | caracteres: ${out.length}`);
