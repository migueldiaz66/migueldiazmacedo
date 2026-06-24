import { defineCollection, z } from 'astro:content';

// Shared article schema across all topic blogs.
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  // optional language tag for future bilingual versions
  lang: z.enum(['es', 'en']).default('es'),
  // optional list of source references is kept in the body, not frontmatter
  tags: z.array(z.string()).default([]),
});

// Each topic is its own collection. Add new topics here as they grow.
const fiscal = defineCollection({ type: 'content', schema: articleSchema });
const filatelia = defineCollection({ type: 'content', schema: articleSchema });
const making = defineCollection({ type: 'content', schema: articleSchema });

export const collections = { fiscal, filatelia, making };
