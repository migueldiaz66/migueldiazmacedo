# Pendientes

Lo que queda por hacer en el sitio. Cada entrada dice qué está hoy, qué se
propone y qué falta decidir. Al cerrar una, bórrala.

Última revisión: 2026-11-07.

---

## 1. Indexación manual en Search Console

La hace Miguel. Pendientes, en orden:

```
https://migueldiazmacedo.com/laboratorio/rag-minimo-local/
https://migueldiazmacedo.com/laboratorio/
https://migueldiazmacedo.com/bibliometria/
https://migueldiazmacedo.com/acerca/perfil/
https://migueldiazmacedo.com/acerca/tecnologias/
https://migueldiazmacedo.com/acerca/seo/
https://migueldiazmacedo.com/acerca/
```

IndexNow ya avisó a Bing de todas. El límite de Google ronda las diez o doce
solicitudes al día.

---

## 2. Decisiones menores, abiertas

- **Recorte de las portadas en las tarjetas.** El índice de `/acerca/` muestra
  la portada completa (1200×630) y los índices de tema la recortan a 16:9.
  Unificar en una u otra.
- **Portada propia para los índices de tema y para `/acerca/`.** Hoy heredan la
  imagen genérica del sitio.
- **`_linkedin/rag-minimo-local.html`.** Se borró en el commit `2f32bd2`, cuando la
  copia para LinkedIn pasó a Markdown. Restaurarlo con `git checkout 514f6a2 --
  _linkedin/rag-minimo-local.html`, o que `scripts/gen-copia-linkedin.cjs` produzca
  también una salida en HTML. Falta elegir.
- **Autoría del texto.** Ni `/acerca/tecnologias/` ni ninguna otra página
  declara qué escribe Miguel y en qué ayuda Claude Code. Si conviene decirlo,
  falta la frase.

---

## 3. Artículo del RAG: ofrecimientos que quedaron sin respuesta

Son mejoras editoriales sobre un artículo ya publicado; ninguna es un error.

- La cita **[12]** (Wikipedia en español, «Generación aumentada por
  recuperación») no fija revisión con `oldid`, como sí hace la [3]. Sin él, la
  referencia apunta a un texto que puede cambiar.
- El **corpus es el componente 1** de la tabla, pero su sección —«El documento
  que se explica a sí mismo»— va después de «Los componentes, uno por uno».
- La apertura de **«Seis componentes y dos fases»** vuelve a explicar la
  secuencia que la tabla y el diagrama ya dan.
- Las **dos capturas** van seguidas, al final de «Tres formas de preguntar», en
  vez de cada una junto a su párrafo.
- Falta un **pase de registro** al resto del artículo con las reglas de
  redacción acordadas, y una **revisión de las definiciones del glosario** de
  una sentada.
- Está sin mostrar el **prompt literal** que arma el montaje, extraído del
  repositorio.


---

## 4. Enlaces entrantes

El único error que Bing reporta en todo el sitio: «Your site lacks inbound links from
high-quality domains», severidad moderada, sin páginas señaladas. Lo hace Miguel, fuera
del repositorio.

- Perfil de GitHub → campo *Website*: `https://migueldiazmacedo.com` (hoy vacío).
- Repo `remix3-local-rag-agent` → *Website* con la URL del artículo del RAG, y la línea
  de README que enlaza a él. Hoy el artículo enlaza al repo y el repo no devuelve nada.
- Repo `CorpusBiblioExtractor` → *Website* con la URL del artículo de bibliometría. El
  README ya enlaza, pero con `www.`, que responde 301.
- Perfil de LinkedIn → campo de sitio web.
- Depositar CorpusBiblioExtractor en **Zenodo** con DOI y `related_identifiers` hacia el
  artículo y el demo. Es el único de la lista en un dominio académico; los de GitHub
  llevan `rel="nofollow"`.

---

## 5. Datos que faltan de Bing y de GA4

- **Bing → Search Performance → Pages.** Qué URL recibe cada impresión, y quién se lleva
  las 10 de la consulta de marca `migueldiazmacedo.com`, hoy en posición media 5.40.
- **Bing → AI Performance (BETA).** Las citas en Copilot. Search Performance las excluye,
  y son lo que persigue el marcado `TechArticle` y `FAQPage`.
- **Bing → Block URLs.** Retirar los tres archivos `.net` del demo que ya están indexados;
  el `robots.txt` impide que vuelvan a rastrearse pero no los saca del índice.
- **GA4 → Adquisición de tráfico, dimensión Nombre de host.** Si en las tres sesiones de
  `aocr.org` el host no es `migueldiazmacedo.com`, son *ghost referrals* y se filtran en
  Admin → Data settings → Data filters. Son un tercio de los usuarios de la semana.

---

## 6. Publicar el artículo del RAG en LinkedIn

La copia está en `src/content/laboratorio/rag-minimo-local-linkedin-es.md`, ya con las dos
líneas que declaran el original. Las cuatro imágenes, en `_linkedin/img/`: `pipeline.png`,
`respuesta-rag.png`, `agente.png` y `codespaces.png`. El editor de artículos está en
`https://www.linkedin.com/article/new/`, desde el escritorio.
