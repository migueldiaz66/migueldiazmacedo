// Catálogo de entidades del grafo de conocimiento (knowledge graph).
// Cada artículo declara en su frontmatter `entities: [<clave>, ...]` y el
// layout las convierte en nodos `about` con `sameAs` hacia URIs REALES de
// Wikidata / Wikipedia. Esto ayuda a que buscadores y LLM asocien el contenido
// con entidades conocidas. Regla: solo URIs verificadas — nada inventado.

export type Entity = {
  name: string;
  sameAs: string[];
};

export const ENTITIES: Record<string, Entity> = {
  cfdi: {
    name: 'Comprobante Fiscal Digital por Internet (CFDI)',
    sameAs: ['https://es.wikipedia.org/wiki/CFDI'],
  },
  sat: {
    name: 'Servicio de Administración Tributaria (SAT)',
    sameAs: [
      'https://www.wikidata.org/wiki/Q6126093',
      'https://en.wikipedia.org/wiki/Servicio_de_Administraci%C3%B3n_Tributaria',
    ],
  },
  'factura-electronica': {
    name: 'Factura electrónica',
    sameAs: [
      'https://www.wikidata.org/wiki/Q10481245',
      'https://es.wikipedia.org/wiki/Factura_electr%C3%B3nica',
    ],
  },
  bibliometria: {
    name: 'Bibliometría',
    sameAs: ['https://es.wikipedia.org/wiki/Bibliometr%C3%ADa'],
  },
  cienciometria: {
    name: 'Cienciometría',
    sameAs: ['https://es.wikipedia.org/wiki/Cienciometr%C3%ADa'],
  },
  'r-lenguaje': {
    name: 'R (lenguaje de programación)',
    sameAs: ['https://es.wikipedia.org/wiki/R_(lenguaje_de_programaci%C3%B3n)'],
  },
  'web-of-science': {
    name: 'Web of Science',
    sameAs: ['https://es.wikipedia.org/wiki/Web_of_Science'],
  },
  rag: {
    name: 'Generación aumentada por recuperación (RAG)',
    sameAs: [
      'https://www.wikidata.org/wiki/Q121362277',
      'https://es.wikipedia.org/wiki/Generaci%C3%B3n_aumentada_por_recuperaci%C3%B3n',
    ],
  },
  llm: {
    name: 'Gran modelo de lenguaje (LLM)',
    sameAs: [
      'https://www.wikidata.org/wiki/Q115305900',
      'https://es.wikipedia.org/wiki/Modelo_de_lenguaje_de_gran_tama%C3%B1o',
    ],
  },
  'base-vectorial': {
    name: 'Base de datos vectorial',
    sameAs: [
      'https://www.wikidata.org/wiki/Q118396004',
      'https://en.wikipedia.org/wiki/Vector_database',
    ],
  },
  embedding: {
    name: 'Embedding (vector semántico)',
    sameAs: [
      'https://www.wikidata.org/wiki/Q18395344',
      'https://en.wikipedia.org/wiki/Word_embedding',
    ],
  },
};

// Resolve frontmatter keys into schema.org `about` nodes; unknown keys drop.
export const resolveEntities = (keys: string[] = []) =>
  keys
    .map((k) => ENTITIES[k])
    .filter(Boolean)
    .map((e) => ({ '@type': 'Thing', name: e.name, sameAs: e.sameAs }));
