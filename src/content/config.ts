import { defineCollection, z } from 'astro:content';

// Shared article schema across all topic blogs.
const articleSchema = z.object({
  title: z.string(),
  // optional shorter title for the <title> tag (SEO, <70 chars); the long
  // `title` stays as the visible H1. Falls back to `title` when absent.
  seoTitle: z.string().optional(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  // optional cover image for the card layout (path under /public) + its alt
  // text. When absent, the index renders an on-brand generated cover panel.
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  // optional language tag for future bilingual versions
  lang: z.enum(['es', 'en']).default('es'),
  // optional list of source references is kept in the body, not frontmatter
  tags: z.array(z.string()).default([]),
  // optional FAQ: renders a visible block and emits FAQPage structured data
  faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  // optional knowledge-graph entities (keys into src/config/entities.ts);
  // emitted as schema.org `about` nodes with sameAs in the article JSON-LD
  entities: z.array(z.string()).default([]),
  // glosario contextual del artículo: claves hacia src/config/glossary.ts ->
  // sección visible + DefinedTermSet en la propia página del artículo
  glossary: z.array(z.string()).default([]),
  // referencias estructuradas: fuente única de la sección visible "Referencias"
  // y del `citation` (JSON-LD). El orden = el número [N] de las citas en el cuerpo.
  citations: z
    .array(z.object({ text: z.string(), urls: z.array(z.string()).default([]) }))
    .default([]),
  citationsNote: z.string().optional(),
});

// Each topic is its own collection. Add new topics here as they grow.
const fiscal = defineCollection({ type: 'content', schema: articleSchema });
const filatelia = defineCollection({ type: 'content', schema: articleSchema });
const making = defineCollection({ type: 'content', schema: articleSchema });

export const collections = { fiscal, filatelia, making };
