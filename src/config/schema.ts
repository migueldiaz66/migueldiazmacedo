// Nodos schema.org compartidos por varias páginas. Los de artículo se arman en
// Base.astro (TechArticle) y en Article.astro (DefinedTermSet, FAQPage); aquí
// viven las migas y la página índice de cada tema.
// Regla de siempre: solo datos que la página ya muestra.

const SITE = 'https://migueldiazmacedo.com';

export type Crumb = { name: string; path: string };

export const breadcrumbLd = (trail: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: SITE + c.path,
  })),
});

export type CollectionItem = { name: string; path: string };

export const collectionPageLd = (page: {
  name: string;
  description: string;
  path: string;
  items: CollectionItem[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': SITE + page.path,
  url: SITE + page.path,
  name: page.name,
  description: page.description,
  inLanguage: 'es',
  isPartOf: { '@type': 'WebSite', name: 'migueldiazmacedo', url: SITE },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: page.items.length,
    itemListElement: page.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: SITE + it.path,
    })),
  },
});
