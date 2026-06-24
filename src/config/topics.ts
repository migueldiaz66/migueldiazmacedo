// Single source of truth for blog topics.
// To reveal a hidden topic later: set `published: true` and add articles to
// the matching folder under src/content/<slug>/.
// The navigation, home page, and topic index pages all read from this list,
// so nothing about a hidden topic appears publicly until you flip the flag.

export type Topic = {
  slug: string;        // URL segment and content-collection name
  label: string;       // short nav label
  title: string;       // full title on the topic index page
  blurb: string;       // one-line description
  published: boolean;  // false = completely hidden from the public site
  accent: string;      // CSS custom-property accent for this topic
};

export const TOPICS: Topic[] = [
  {
    slug: 'fiscal',
    label: 'Fiscal / CTC',
    title: 'Cumplimiento fiscal y control continuo de transacciones',
    blurb: 'Facturación electrónica, CFDI y los modelos de control fiscal en tiempo real.',
    published: true,
    accent: '#0b6b5e',
  },
  // --- Hidden topics: scaffolded, not yet public. Flip `published` when ready. ---
  {
    slug: 'filatelia',
    label: 'Filatelia',
    title: 'Filatelia e historia postal',
    blurb: 'Sellos mexicanos, historia postal y marcas paquebote.',
    published: false,
    accent: '#8a5a2b',
  },
  {
    slug: 'making',
    label: 'Making',
    title: 'Making, impresión 3D y metalistería',
    blurb: 'Proyectos de manufactura, impresión 3D y trabajo en metal.',
    published: false,
    accent: '#3a4a7a',
  },
];

export const publishedTopics = () => TOPICS.filter((t) => t.published);
export const topicBySlug = (slug: string) => TOPICS.find((t) => t.slug === slug);
