---
title: "Bibliometría reproducible: automatizar el análisis de science mapping en una sola corrida"
seoTitle: "Bibliometría reproducible con R y bibliometrix"
description: "Automatiza el science mapping de biblioshiny sobre un corpus de Web of Science: de días de exportar a mano a ~13 minutos, determinista y reproducible."
pubDate: 2026-06-30T21:00:00-06:00
draft: false
lang: es
tags: ["Bibliometría", "Reproducibilidad", "R", "Science mapping", "bibliometrix", "biblioshiny", "Web of Science", "CorpusBiblioExtractor"]
cover: /covers/bibliometria-reproducible.png
coverAlt: "Portada del artículo: 'Bibliometría reproducible', con el motivo corpus → red → mapa en violeta sobre fondo papel."
entities: ["bibliometria", "cienciometria", "r-lenguaje", "web-of-science"]
glossary: ["bibliometria", "science-mapping", "bibliometrix", "biblioshiny", "corpus", "bibtex", "web-of-science", "pajek", "reproducibilidad", "co-citacion"]
citations:
  - text: "Aria, M. & Cuccurullo, C. (2017). bibliometrix: An R-tool for comprehensive science mapping analysis. Journal of Informetrics, 11(4), 959–975."
    urls: ["https://doi.org/10.1016/j.joi.2017.08.007"]
  - text: "bibliometrix — sitio oficial del paquete y de biblioshiny."
    urls: ["https://www.bibliometrix.org/"]
  - text: "The R Project for Statistical Computing."
    urls: ["https://www.r-project.org/"]
  - text: "Web of Science (Clarivate) — base de datos bibliográfica."
    urls: ["https://www.webofscience.com/"]
  - text: "CorpusBiblioExtractor — repositorio del proyecto (licencia GPL-3)."
    urls: ["https://github.com/migueldiaz66/CorpusBiblioExtractor"]
faq:
  - q: "¿Qué es la bibliometría?"
    a: "Es el análisis cuantitativo de la literatura científica: medir qué se publica, quién cita a quién y cómo se agrupan los temas y los autores de un campo, a partir de los metadatos de las publicaciones."
  - q: "¿Qué es el science mapping (mapeo científico)?"
    a: "Es la rama de la bibliometría que reconstruye la estructura de un campo —sus temas, sus comunidades de autores y cómo se relacionan— mediante redes de co-citación, acoplamiento bibliográfico y co-ocurrencia de palabras."
  - q: "¿Qué son bibliometrix y biblioshiny?"
    a: "bibliometrix es un paquete del lenguaje R para análisis bibliométrico; biblioshiny es su interfaz gráfica. Son la herramienta de referencia del science mapping, creada por Massimo Aria y Corrado Cuccurullo."
  - q: "¿Qué es CorpusBiblioExtractor?"
    a: "Una herramienta en R, creada por el autor de este blog, que recorre de forma automática y determinista todas las configuraciones de análisis de biblioshiny sobre un corpus, en una sola corrida, para hacer el análisis reproducible."
  - q: "¿Qué formato de entrada acepta?"
    a: "Únicamente exportaciones en formato BibTeX de Web of Science. Otras bases, como Scopus u OpenAlex, no están soportadas por ahora."
  - q: "¿Por qué importa que sea reproducible?"
    a: "Porque un estudio bibliométrico se rehace muchas veces al refinar la consulta o actualizar el corpus. Si cada corrida entrega resultados idénticos a partir del mismo corpus, la iteración pasa de semanas de trabajo manual a minutos."
  - q: "¿Necesito saber programar en R para usarlo?"
    a: "No para lo básico: una orden prepara el entorno y otra corre el análisis completo. Saber R ayuda para personalizar, pero no es indispensable para ejecutarlo."
  - q: "¿Cuánto tarda?"
    a: "Sobre un corpus de unos 473 documentos, recorrer las 42 secciones (159 escenarios) toma alrededor de 13 minutos. El escalado es sub-lineal: un corpus diez veces mayor no tarda diez veces más."
  - q: "¿Está soportada oficialmente?"
    a: "No. Es una herramienta beta, bloqueada a versiones específicas (R 4.6.1, bibliometrix 5.4.1) y ofrecida sin soporte; su deuda técnica está documentada en el repositorio."
  - q: "¿Qué licencia tiene?"
    a: "GPL-3, la misma que bibliometrix, en el que se apoya. No está avalada por los autores de bibliometrix."
---

<p class="repo-cta"><a href="https://github.com/migueldiaz66/CorpusBiblioExtractor" rel="external" target="_blank" style="display:inline-flex;align-items:center;gap:0.6ch;padding:0.55em 0.95em;border:1px solid var(--line);border-radius:6px;background:color-mix(in srgb, var(--accent) 7%, transparent);color:var(--ink);text-decoration:none;font-family:var(--mono);font-size:var(--step--1);font-weight:500"><svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg> Ver el código en GitHub: CorpusBiblioExtractor</a></p>

**Explora un ejemplo del resultado 👉 [una corrida completa en el navegador](https://migueldiazmacedo.com/demo-corpus-extractor/).**

La **bibliometría** —el análisis cuantitativo de la literatura científica: qué se publica, quién cita a quién y cómo se agrupan los temas— rara vez es un ejercicio de una sola pasada. Un estudio de *science mapping* (el mapeo de la estructura de un campo a partir de sus publicaciones) se construye por iteración: se afina la consulta, se filtran documentos, llegan registros nuevos, y cada cambio obliga a rehacer el análisis completo.

La herramienta de referencia para ese trabajo es **bibliometrix**, un paquete del lenguaje **R** [\[3\]](#ref-3), junto con su interfaz gráfica **biblioshiny** [\[1\]](#ref-1)[\[2\]](#ref-2). biblioshiny es muy buena para explorar, pero su flujo es manual: cada tabla, cada figura y cada red se obtienen navegando menús y exportando a mano. Repetir las decenas de configuraciones de un análisis completo —cada vez que el corpus cambia— cuesta horas o días y, sobre todo, es difícil de reproducir de forma idéntica.

**CorpusBiblioExtractor** es una herramienta que construí para resolver exactamente eso [\[5\]](#ref-5): recorre de forma automática y **determinista** todas las configuraciones de biblioshiny sobre un mismo corpus, en una sola corrida.

## El valor está en la re-corrida, no en la primera

La intuición de fondo es simple. En un estudio bibliométrico, el primer análisis casi nunca es el definitivo: se corrige la búsqueda, se excluye un tipo de documento, se incorpora un año más de publicaciones. Lo costoso no es producir el mapa una vez, sino **volver a producirlo igual** después de cada ajuste.

Por eso la herramienta no automatiza "hacer el análisis": automatiza **poder repetirlo**. Si la primera corrida y la décima entregan exactamente los mismos resultados a partir del mismo corpus, la iteración deja de ser semanas de exportar a mano y se vuelve cuestión de minutos.

|  | A mano en biblioshiny | CorpusBiblioExtractor |
|---|---|---|
| Esfuerzo por corrida | días (clic y exportación manual de cientos de archivos) | un comando |
| Tiempo (~473 docs) | — | ~13 min (159 escenarios) |
| Reproducible idéntico | difícil / improbable | sí (`set.seed` + `renv`) |
| Ante un cambio de corpus | repetir todo desde cero | re-correr |

La primera corrida te ahorra una tarde; cada cambio de corpus después te ahorra una semana.

## Qué hace

Con una sola orden, CorpusBiblioExtractor toma un corpus y recorre las **42 secciones** de análisis de biblioshiny —que, con sus combinaciones de configuración, se despliegan en **159 escenarios**— llamando **directo** a las funciones de bibliometrix, sin pasar por la interfaz gráfica.

| Flujo | Detalle |
|---|---|
| **Entrada** | Una exportación en formato **BibTeX** de **Web of Science** [\[4\]](#ref-4) (la base bibliográfica de Clarivate). Es el único formato de entrada admitido. |
| **Salidas** | Tablas en Excel (`.xlsx`), figuras en PNG, **redes interactivas** en HTML, diagramas de Sankey, archivos de red en formato **Pajek** (`.net`) y un **visor HTML autónomo** que reúne todo. |

El recorrido se planea como el **producto cartesiano** de las secciones por los selectores de *Main Configuration* (campo, método, n-gramas…): en lugar de elegir a mano qué análisis correr, los corre **todos**.

**Explora un ejemplo del resultado 👉 [una corrida completa en el navegador](https://migueldiazmacedo.com/demo-corpus-extractor/).**

## Cómo sabe qué correr: leo el fuente, no mantengo una lista

En lugar de codificar a mano qué análisis y qué opciones existen, CorpusBiblioExtractor **parsea el árbol de sintaxis (AST)** del propio `ui.R` de la biblioshiny instalada (`system.file("biblioshiny", package = "bibliometrix")`) y deriva de ahí el menú completo: las 42 secciones, los selectores de *Main Configuration* (campo, método, n-gramas…), sus condicionales y qué resultados produce cada vista.

¿La consecuencia? Cuando biblioshiny cambia de versión, no edito una especificación a mano: **la vuelvo a extraer del fuente instalado**. La fuente de verdad de qué se puede correr es el código de biblioshiny, no mis notas.

## Cómo logra ser reproducible

Esta es la parte que más me importa. Aquí, hacer el análisis reproducible se traduce en cuatro decisiones:

- **Determinismo.** Donde hay azar —por ejemplo, en el acomodo de una red— se fija la semilla (`set.seed`), de modo que el resultado sea idéntico en cada corrida.
- **Versiones congeladas.** Las 125 dependencias quedan ancladas con `renv` a versiones exactas (R 4.6.1, bibliometrix 5.4.1), para que el entorno de hoy sea el mismo dentro de un año. No depende de Python, pandoc ni Rtools.
- **Reanudable.** Cada corrida deja *manifiestos* que permiten retomarla donde se quedó, sin rehacer lo ya hecho.
- **Verificación de versión.** Avisa si tu R o tu bibliometrix difieren de las versiones probadas, en vez de fallar en silencio.
## Rendimiento y alcance

Sobre un corpus de unos **473 documentos**, recorrer las 42 secciones (159 escenarios) toma alrededor de **13 minutos**. El escalado es sub-lineal: multiplicar el corpus por diez no multiplica por diez el tiempo, sino por algo cercano a 2.5.

Y, por honestidad, los límites —todos documentados en el repositorio—:

- Acepta **solo Web of Science**. Scopus y OpenAlex no están soportados.
- No incluye datos de ejemplo, porque los registros de Web of Science están licenciados.
- Es **beta**, está **bloqueada** a esas versiones y se ofrece **sin soporte**; su deuda técnica está descrita abiertamente.

## Cómo se usa

```bash
# Preparar el entorno (una sola vez)
Rscript make.R setup

# Correr el análisis completo sobre tu corpus
Rscript make.R run ruta/a/tu_corpus.bib
```

O desde R:

```r
library(CorpusBiblioExtractor)
cbe_run(bib = "ruta/a/tu_corpus.bib")
```

## El mismo oficio, otro dominio

Aunque parezcan mundos distintos, el cumplimiento fiscal del que escribo en la [otra línea de este blog](/fiscal/) —el CFDI y el control continuo de transacciones— y la bibliometría reproducible comparten ADN: **registrar, validar y controlar** lo que ocurre, de forma verificable y auditable. El CFDI controla transacciones en tiempo real, con trazabilidad; la bibliometría reproducible vuelve auditable y re-ejecutable el registro de la producción científica. CorpusBiblioExtractor es, en el fondo, **trazabilidad aplicada a un corpus**.

## Origen y atribución

CorpusBiblioExtractor nació como una herramienta personal para mi **tesis**: necesitaba repetir un análisis bibliométrico muchas veces sin volverme rehén de la interfaz. Se apoya por completo en **bibliometrix** [\[1\]](#ref-1), de Massimo Aria y Corrado Cuccurullo, a quienes corresponde el crédito del motor de análisis. Se publica bajo licencia **GPL-3**, igual que aquel, y **no está avalada** por sus autores. El código está abierto en el repositorio [\[5\]](#ref-5).
