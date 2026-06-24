# migueldiazmacedo.com

Sitio personal con blogs por tema. Construido con [Astro](https://astro.build),
pensado para desplegarse en **Cloudflare Pages** sobre el dominio que ya
administras en Cloudflare.

Hoy solo el tema **Fiscal / CTC** está publicado. Los demás temas (filatelia,
making) están preparados en el código pero **ocultos** hasta que tengan
contenido — no aparecen en ninguna parte del sitio público.

---

## Estructura

```
src/
  config/topics.ts        ← registro central de temas (publicar/ocultar aquí)
  content/
    config.ts             ← esquema de los artículos
    fiscal/               ← artículos del tema fiscal (Markdown)
      cfdi-evolucion.md   ← primer artículo
    filatelia/            ← vacío, oculto
    making/               ← vacío, oculto
  layouts/
    Base.astro            ← cabecera, navegación, pie
    Article.astro         ← plantilla de artículo individual
  pages/
    index.astro           ← portada (home)
    fiscal/index.astro    ← índice del blog fiscal
    fiscal/[slug].astro   ← ruta de cada artículo fiscal
  styles/global.css       ← tokens de diseño y estilos
public/
  robots.txt
```

---

## Cómo publicar un artículo nuevo (tema ya visible)

1. Crea un archivo `.md` en `src/content/fiscal/` (por ejemplo `mi-articulo.md`).
2. Empieza con el bloque de metadatos (frontmatter):

   ```markdown
   ---
   title: "Título del artículo"
   description: "Resumen de una o dos líneas para buscadores y la portada."
   pubDate: 2026-07-01
   lang: es
   tags: ["etiqueta1", "etiqueta2"]
   ---

   El cuerpo del artículo en Markdown. No incluyas un # H1: el título de
   arriba ya se usa como encabezado.
   ```

3. `npm run build`. El artículo aparece solo en el índice y en la portada.

Para que un artículo no se publique todavía, pon `draft: true` en su frontmatter.

---

## Cómo revelar un tema oculto (filatelia, making, …)

Todo se controla desde **un solo archivo**: `src/config/topics.ts`.

1. Cambia `published: false` a `published: true` en el tema que quieras revelar.
2. Crea una carpeta de páginas para ese tema, copiando las dos de `fiscal`:
   - `src/pages/<tema>/index.astro`  (lista de artículos)
   - `src/pages/<tema>/[slug].astro` (artículo individual)

   Son idénticas a las de `fiscal`; solo cambia el nombre del tema en tres
   lugares (la colección, el `topicSlug` y las rutas). Búscalas y reemplázalas.
3. Añade artículos `.md` en `src/content/<tema>/`.
4. `npm run build`. El tema aparece en la navegación, la portada y su índice.

Mientras `published` siga en `false`, el tema no existe en el sitio público:
no hay enlace, ni índice, ni páginas. No filtra nada.

---

## Desarrollo local

```bash
npm install      # una sola vez
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en dist/
npm run preview  # sirve dist/ para revisar el build final
```

---

## Despliegue en Cloudflare Pages

Como ya administras el dominio en Cloudflare, el camino más directo:

1. Sube este proyecto a un repositorio de GitHub.
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages →
   Connect to Git**, y elige el repositorio.
3. Configuración de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Despliega. Cloudflare te da un subdominio `*.pages.dev` para revisar.
5. En **Custom domains** del proyecto Pages, añade `migueldiazmacedo.com`
   (y `www` si lo quieres). Como el DNS ya está en Cloudflare, la verificación
   es automática.

Cada `git push` vuelve a desplegar el sitio.

> Alternativa sin Git: `npm run build` y sube la carpeta `dist/` con
> *Direct Upload* en Cloudflare Pages. Funciona, pero pierdes el redepliegue
> automático.

---

## Nota sobre la versión académica

Si vas a enviar la versión académica del artículo a una revista arbitrada,
revisa su política sobre **publicación previa** antes de publicar el blog:
algunas revistas consideran un blog indexado como publicación previa. Muchas
distinguen divulgación de artículo arbitrado, pero conviene confirmarlo.
