// Glosario: única fuente de la verdad de las DEFINICIONES (el texto vive aquí
// una sola vez). Cada término tiene una `key` estable.
//
// Se usa en dos lugares, ambos referenciando por `key` (sin duplicar texto):
//  - /glosario/  : página índice con TODO el catálogo (DefinedTermSet).
//  - cada artículo: su propio glosario contextual (subconjunto), declarado en el
//    frontmatter como `glossary: [<key>, ...]`. Esto importa porque los LLM
//    priorizan por PÁGINA HTML: las definiciones deben estar en la página del
//    artículo, no solo en /glosario/.
//
// ADENDA POR ARTÍCULO: al publicar uno nuevo, agrega aquí los términos que
// introduzca y enlístalos en su frontmatter. `sameAs` solo con URIs verificadas.

export type GlossaryTerm = {
  key: string;         // identificador estable referenciado desde el frontmatter
  name: string;        // término completo (encabezado si no hay sigla)
  abbr?: string;       // sigla/acrónimo, si aplica (sirve de termCode)
  definition: string;
  sameAs?: string[];   // URIs verificadas, si existen
  hidden?: boolean;    // término de una línea aún escondida: NO se lista en
                       // /glosario/ (público), pero sí en el glosario del artículo.
                       // Quitar la marca al publicar la línea.
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    key: 'cfdi',
    abbr: 'CFDI',
    name: 'Comprobante Fiscal Digital por Internet',
    definition:
      'La factura electrónica vigente en México: un archivo XML que un Proveedor Autorizado de Certificación (PAC) valida y sella en nombre del SAT antes de que tenga efectos fiscales. Versión actual: 4.0.',
    sameAs: ['https://es.wikipedia.org/wiki/CFDI'],
  },
  {
    key: 'cfd',
    abbr: 'CFD',
    name: 'Comprobante Fiscal Digital',
    definition:
      'Antecesor del CFDI (2004–2010): el contribuyente sellaba el comprobante con su propio certificado y lo reportaba al SAT después, en un reporte mensual; no había validación en tiempo real.',
  },
  {
    key: 'sat',
    abbr: 'SAT',
    name: 'Servicio de Administración Tributaria',
    definition:
      'La autoridad fiscal de México, órgano desconcentrado de la Secretaría de Hacienda y Crédito Público. Define el estándar del CFDI y recibe el reporte de cada operación.',
    sameAs: ['https://www.wikidata.org/wiki/Q6126093'],
  },
  {
    key: 'pac',
    abbr: 'PAC',
    name: 'Proveedor Autorizado de Certificación',
    definition:
      'Tercero autorizado por el SAT que recibe el comprobante del emisor, lo valida y lo timbra en nombre de la autoridad. En la práctica funciona como un receptor del documento.',
  },
  {
    key: 'csd',
    abbr: 'CSD',
    name: 'Certificado de Sello Digital',
    definition:
      'Certificado con el que el emisor sella sus comprobantes. Es distinto de la e.firma: la e.firma identifica al contribuyente, el CSD se usa exclusivamente para sellar CFDI.',
  },
  {
    key: 'e-firma',
    name: 'e.firma',
    definition:
      'Credencial criptográfica que acredita la identidad del contribuyente ante el SAT, con la misma validez jurídica que una firma autógrafa. Antes se llamaba FIEL (Firma Electrónica Avanzada).',
  },
  {
    key: 'timbrado',
    name: 'Timbrado',
    definition:
      'Proceso en que el PAC valida el comprobante, le incorpora el sello del SAT y le asigna el folio fiscal (UUID). Antes del timbrado el CFDI no tiene efectos.',
  },
  {
    key: 'tfd',
    name: 'Timbre Fiscal Digital',
    abbr: 'TFD',
    definition:
      'Complemento obligatorio que se agrega al CFDI durante el timbrado; contiene el sello del SAT, el folio fiscal (UUID) y la fecha y hora de certificación.',
  },
  {
    key: 'uuid',
    abbr: 'UUID',
    name: 'Folio fiscal (UUID)',
    definition:
      'Identificador único universal que el SAT asigna a cada CFDI al timbrarlo. Lo individualiza de forma irrepetible ante la autoridad.',
  },
  {
    key: 'sello-digital',
    name: 'Sello digital',
    definition:
      'Firma criptográfica que garantiza la integridad y el origen de un comprobante. Un CFDI lleva dos: el del emisor (con su CSD) y el del SAT (al timbrarse).',
  },
  {
    key: 'complemento',
    name: 'Complemento',
    definition:
      'Bloque de información fiscal y sellada que se incorpora al CFDI para sectores u operaciones específicas (nómina, comercio exterior, carta porte, pagos, etc.). Cada uno tiene su propio anexo técnico y su versión.',
  },
  {
    key: 'addenda',
    name: 'Addenda',
    definition:
      'Nodo no fiscal con información privada entre las partes (frecuente en el comercio detallista). El SAT no la sella ni la valida; vive fuera del estándar fiscal.',
  },
  {
    key: 'ctc',
    abbr: 'CTC',
    name: 'Control Continuo de Transacciones',
    definition:
      'Modelo de fiscalización (en inglés, continuous transaction controls) en el que la autoridad valida o recibe la transacción en el momento de ocurrir, no mediante revisión posterior. El CFDI es uno de los esquemas CTC más antiguos del mundo.',
  },
  {
    key: 'rep',
    abbr: 'REP',
    name: 'Recibo Electrónico de Pago',
    definition:
      'CFDI tipo Pago, con su complemento de pagos, que acusa cada pago recibido en el esquema de Pago en Parcialidades o Diferido (PPD).',
  },
  {
    key: 'ppd',
    abbr: 'PPD',
    name: 'Pago en Parcialidades o Diferido',
    definition:
      'Esquema en que la operación se liquida después de su emisión o en varias partes. Obliga a emitir un Recibo Electrónico de Pago (REP) por cada pago.',
  },
  {
    key: 'pue',
    abbr: 'PUE',
    name: 'Pago en Una sola Exhibición',
    definition:
      'Esquema en que la operación se paga de contado al momento de emitir el comprobante; no requiere Recibo Electrónico de Pago.',
  },
  {
    key: 'anexo-20',
    name: 'Anexo 20',
    definition:
      'Estándar técnico del SAT que define la estructura XML del comprobante (primero del CFD y luego del CFDI). Se publica en el DOF y es la referencia oficial de cada versión.',
  },
  {
    key: 'rmf',
    abbr: 'RMF',
    name: 'Resolución Miscelánea Fiscal',
    definition:
      'Conjunto de reglas administrativas que el SAT publica (normalmente cada año) para detallar cómo se aplican las leyes fiscales; incluye reglas sobre emisión y cancelación de CFDI.',
  },
  {
    key: 'dof',
    abbr: 'DOF',
    name: 'Diario Oficial de la Federación',
    definition:
      'Publicación oficial del Estado mexicano donde se promulgan leyes, reglamentos y reglas. Es la fuente primaria a la que se referencian las afirmaciones normativas de este sitio.',
  },
  {
    key: 'factura-electronica',
    name: 'Factura electrónica',
    definition:
      'Comprobante de una operación comercial emitido, transmitido y conservado en formato electrónico. En México se materializa como CFDI.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q10481245',
      'https://es.wikipedia.org/wiki/Factura_electr%C3%B3nica',
    ],
  },
  {
    key: 'rfc',
    abbr: 'RFC',
    name: 'Registro Federal de Contribuyentes',
    definition:
      'La clave única que identifica a cada contribuyente —persona física o moral— ante el SAT. En el CFDI 4.0, el RFC del receptor, junto con su nombre y código postal, debe coincidir con su constancia de situación fiscal; si no, el comprobante no se timbra.',
  },
  {
    key: 'carta-porte',
    name: 'Carta Porte',
    definition:
      'Complemento del CFDI que ampara el traslado de mercancías por territorio nacional y acredita su legal tenencia o estancia. Lo emite el dueño que traslada mercancía propia (CFDI de Traslado) o el transportista que cobra el flete (CFDI de Ingreso).',
  },
  {
    key: 'nota-de-credito',
    name: 'Nota de crédito',
    definition:
      'CFDI de tipo Egreso que documenta devoluciones, descuentos o bonificaciones sobre una venta ya facturada: resta su monto sin cancelar el comprobante de Ingreso. Coloquialmente, "factura de egreso".',
  },

  // --- Bibliometría (línea escondida; hidden:true para no exponerlos aún en
  // /glosario/ público). Quitar `hidden` al publicar la línea. ---
  {
    key: 'bibliometria',
    name: 'Bibliometría',
    definition:
      'Análisis cuantitativo de la literatura científica: a partir de los metadatos de las publicaciones, mide qué se publica, quién cita a quién y cómo se agrupan los temas y los autores de un campo.',
    sameAs: ['https://es.wikipedia.org/wiki/Bibliometr%C3%ADa'],
  },
  {
    key: 'science-mapping',
    name: 'Science mapping (mapeo científico)',
    definition:
      'Rama de la bibliometría que reconstruye la estructura de un campo —sus temas, sus comunidades de autores y cómo se relacionan— mediante redes de co-citación, acoplamiento bibliográfico y co-ocurrencia de palabras.',
  },
  {
    key: 'bibliometrix',
    name: 'bibliometrix',
    definition:
      'Paquete del lenguaje R para análisis bibliométrico y science mapping, creado por Massimo Aria y Corrado Cuccurullo. Es la herramienta de referencia del campo.',
  },
  {
    key: 'biblioshiny',
    name: 'biblioshiny',
    definition:
      'La interfaz gráfica de bibliometrix: permite hacer el análisis bibliométrico desde el navegador, sin escribir código. Su flujo es manual, basado en menús y exportaciones.',
  },
  {
    key: 'corpus',
    name: 'Corpus (bibliográfico)',
    definition:
      'El conjunto de registros de publicaciones —con sus metadatos: autores, citas, palabras clave, año— sobre el que se realiza un análisis bibliométrico.',
  },
  {
    key: 'bibtex',
    name: 'BibTeX',
    definition:
      'Formato de texto para describir referencias bibliográficas. Es uno de los formatos en que las bases de datos exportan los registros de publicaciones.',
    sameAs: ['https://es.wikipedia.org/wiki/BibTeX'],
  },
  {
    key: 'web-of-science',
    name: 'Web of Science',
    abbr: 'WoS',
    definition:
      'Base de datos bibliográfica de publicaciones científicas y sus citas, operada por Clarivate. Es la fuente de datos que admite CorpusBiblioExtractor.',
    sameAs: ['https://es.wikipedia.org/wiki/Web_of_Science'],
  },
  {
    key: 'pajek',
    name: 'Pajek',
    definition:
      'Programa y formato de archivo (.net) para representar y analizar redes grandes. Las redes bibliométricas pueden exportarse en ese formato para estudiarlas en otras herramientas.',
    sameAs: ['https://en.wikipedia.org/wiki/Pajek'],
  },
  {
    key: 'reproducibilidad',
    name: 'Reproducibilidad',
    definition:
      'Propiedad de un análisis que, a partir de los mismos datos, entrega exactamente los mismos resultados cada vez que se ejecuta. Exige fijar el azar y congelar las versiones de las herramientas.',
    sameAs: ['https://es.wikipedia.org/wiki/Reproducibilidad'],
  },
  {
    key: 'co-citacion',
    name: 'Co-citación',
    definition:
      'Relación entre dos documentos (o autores) citados juntos por un tercero: cuanto más se les cita en conjunto, más cercanos se consideran. Es una de las bases del science mapping.',
    sameAs: ['https://en.wikipedia.org/wiki/Co-citation'],
  },
];

// Subconjunto por claves, en el orden del catálogo (filtra claves desconocidas).
export const glossaryByKeys = (keys: string[] = []) =>
  GLOSSARY.filter((t) => keys.includes(t.key));
