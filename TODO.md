# Pendientes

Lo que queda por hacer en el sitio. Cada entrada dice qué está hoy, qué se
propone y qué falta decidir. Al cerrar una, bórrala.

Última revisión: 2026-10-27.

---

## 1. El sitio todavía se describe como un blog solo fiscal

Hay tres líneas publicadas —Fiscal / CTC, Bibliometría y Laboratorio— pero
varios textos siguen describiendo únicamente la fiscal. Son cuatro lugares y
conviene cambiarlos de una pasada, porque dicen lo mismo.

### 1.1 `public/llms.txt`, entradilla

Hoy: «Notas técnicas sobre facturación electrónica, CFDI y control continuo de
transacciones (CTC) en México y Latinoamérica, por Miguel Díaz Macedo —líder de
ingeniería de tecnología de cumplimiento fiscal en SOVOS, formación de biólogo
(UNAM) y casi 30 años en TI.»

Propuesta: «Notas técnicas de Miguel Díaz Macedo —líder de ingeniería de
tecnología de cumplimiento fiscal en SOVOS, formación de biólogo (UNAM) y casi
30 años en TI— sobre tres asuntos: facturación electrónica y control continuo de
transacciones (CTC) en México y Latinoamérica, bibliometría reproducible, y
pruebas de concepto de software medidas de principio a fin.»

### 1.2 `public/llms.txt`, párrafo de presentación

Hoy dice «cómo los sistemas registran, validan y controlan **las operaciones
fiscales**» y cita solo fuentes del SAT y del DOF.

Propuesta: «Blog técnico de oficio: cómo los sistemas registran, validan y
controlan lo que ocurre. Cada afirmación se apoya, en la medida de lo posible,
en fuentes oficiales (Diario Oficial de la Federación, Código Fiscal de la
Federación, Resolución Miscelánea Fiscal, Anexo 20 del SAT), en literatura
indexada o en mediciones propias que el artículo describe. El contenido es
independiente y no representa a su empleador.»

### 1.3 `public/llms.txt`, línea del glosario y sección de autor

El glosario aparece como «Glosario de facturación electrónica y CFDI» con
términos solo fiscales; hoy tiene 53, de los cuales 20 son de generación
aumentada por recuperación y modelos de lenguaje.

Propuesta: «definiciones de los términos de las tres líneas —CFDI, PAC, CSD,
UUID, timbrado, complemento, CTC; corpus, co-citación, science mapping; RAG,
embedding, troceado, base de datos vectorial—, con enlaces al grafo de
conocimiento.»

Falta además listar `/acerca/` (el índice de la sección) junto a sus tres
fichas, que sí están.

### 1.4 Título y descripción de `/glosario/`

El `<title>` es «Glosario de facturación electrónica y CFDI — migueldiazmacedo»
y la descripción enumera solo términos fiscales. Mismo problema que 1.3, pero
en la página.

### 1.5 Hero de la portada

`src/pages/index.astro` dice «Empiezo por el tema que conozco de cerca —la
facturación electrónica y el control continuo de transacciones en México— y con
el tiempo sumaré otros oficios e intereses». Ya se sumaron dos.

---

## 2. Enlace entrante al artículo del RAG

Ningún artículo publicado enlaza al del laboratorio: el único camino es la
navegación. El artículo nuevo sí enlaza hacia fuera (`/fiscal/cfdi-evolucion/`
desde «el Anexo 20»).

Propuesta, al cierre de la sección «Qué sigue» de *CFDI: evolución del control
fiscal en México*: «Una prueba de concepto sobre cómo consultar estos documentos
con un modelo de lenguaje está en [Un RAG sin nube ni llave de
API](/laboratorio/rag-minimo-local/).»

Falta aprobar la frase: toca prosa de un artículo ya publicado.

---

## 3. Indexación manual en Search Console

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

## 4. Decisiones menores, abiertas

- **Recorte de las portadas en las tarjetas.** El índice de `/acerca/` muestra
  la portada completa (1200×630) y los índices de tema la recortan a 16:9.
  Unificar en una u otra.
- **Portada propia para los índices de tema y para `/acerca/`.** Hoy heredan la
  imagen genérica del sitio.
- **Autoría del texto.** Ni `/acerca/tecnologias/` ni ninguna otra página
  declara qué escribe Miguel y en qué ayuda Claude Code. Si conviene decirlo,
  falta la frase.

---

## 5. Artículo del RAG: ofrecimientos que quedaron sin respuesta

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
