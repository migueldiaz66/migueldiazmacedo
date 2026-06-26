// Glosario: única fuente de la verdad de los términos definidos del sitio.
// Se renderiza en /glosario/ como texto visible Y como DefinedTermSet (JSON-LD),
// para que LLM y parsers consulten definiciones precisas.
//
// ADENDA POR ARTÍCULO: al publicar un artículo nuevo, agrega aquí los términos
// que introduce (una entrada por término). La página y el schema se actualizan
// solos. `sameAs` solo con URIs verificadas (Wikidata/Wikipedia); si no existe
// entidad, se omite.

export type GlossaryTerm = {
  name: string;        // término completo (encabezado si no hay sigla)
  abbr?: string;       // sigla/acrónimo, si aplica (sirve de termCode)
  definition: string;
  sameAs?: string[];   // URIs verificadas, si existen
};

export const GLOSSARY: GlossaryTerm[] = [
  {
    abbr: 'CFDI',
    name: 'Comprobante Fiscal Digital por Internet',
    definition:
      'La factura electrónica vigente en México: un archivo XML que un Proveedor Autorizado de Certificación (PAC) valida y sella en nombre del SAT antes de que tenga efectos fiscales. Versión actual: 4.0.',
    sameAs: ['https://es.wikipedia.org/wiki/CFDI'],
  },
  {
    abbr: 'CFD',
    name: 'Comprobante Fiscal Digital',
    definition:
      'Antecesor del CFDI (2004–2010): el contribuyente sellaba el comprobante con su propio certificado y lo reportaba al SAT después, en un reporte mensual; no había validación en tiempo real.',
  },
  {
    abbr: 'SAT',
    name: 'Servicio de Administración Tributaria',
    definition:
      'La autoridad fiscal de México, órgano desconcentrado de la Secretaría de Hacienda y Crédito Público. Define el estándar del CFDI y recibe el reporte de cada operación.',
    sameAs: ['https://www.wikidata.org/wiki/Q6126093'],
  },
  {
    abbr: 'PAC',
    name: 'Proveedor Autorizado de Certificación',
    definition:
      'Tercero autorizado por el SAT que recibe el comprobante del emisor, lo valida y lo timbra en nombre de la autoridad. En la práctica funciona como un receptor del documento.',
  },
  {
    abbr: 'CSD',
    name: 'Certificado de Sello Digital',
    definition:
      'Certificado con el que el emisor sella sus comprobantes. Es distinto de la e.firma: la e.firma identifica al contribuyente, el CSD se usa exclusivamente para sellar CFDI.',
  },
  {
    name: 'e.firma',
    definition:
      'Credencial criptográfica que acredita la identidad del contribuyente ante el SAT, con la misma validez jurídica que una firma autógrafa. Antes se llamaba FIEL (Firma Electrónica Avanzada).',
  },
  {
    name: 'Timbrado',
    definition:
      'Proceso en que el PAC valida el comprobante, le incorpora el sello del SAT y le asigna el folio fiscal (UUID). Antes del timbrado el CFDI no tiene efectos.',
  },
  {
    name: 'Timbre Fiscal Digital',
    abbr: 'TFD',
    definition:
      'Complemento obligatorio que se agrega al CFDI durante el timbrado; contiene el sello del SAT, el folio fiscal (UUID) y la fecha y hora de certificación.',
  },
  {
    abbr: 'UUID',
    name: 'Folio fiscal (UUID)',
    definition:
      'Identificador único universal que el SAT asigna a cada CFDI al timbrarlo. Lo individualiza de forma irrepetible ante la autoridad.',
  },
  {
    name: 'Sello digital',
    definition:
      'Firma criptográfica que garantiza la integridad y el origen de un comprobante. Un CFDI lleva dos: el del emisor (con su CSD) y el del SAT (al timbrarse).',
  },
  {
    name: 'Complemento',
    definition:
      'Bloque de información fiscal y sellada que se incorpora al CFDI para sectores u operaciones específicas (nómina, comercio exterior, carta porte, pagos, etc.). Cada uno tiene su propio anexo técnico y su versión.',
  },
  {
    name: 'Addenda',
    definition:
      'Nodo no fiscal con información privada entre las partes (frecuente en el comercio detallista). El SAT no la sella ni la valida; vive fuera del estándar fiscal.',
  },
  {
    abbr: 'CTC',
    name: 'Control Continuo de Transacciones',
    definition:
      'Modelo de fiscalización (en inglés, continuous transaction controls) en el que la autoridad valida o recibe la transacción en el momento de ocurrir, no mediante revisión posterior. El CFDI es uno de los esquemas CTC más antiguos del mundo.',
  },
  {
    abbr: 'REP',
    name: 'Recibo Electrónico de Pago',
    definition:
      'CFDI tipo Pago, con su complemento de pagos, que acusa cada pago recibido en el esquema de Pago en Parcialidades o Diferido (PPD).',
  },
  {
    abbr: 'PPD',
    name: 'Pago en Parcialidades o Diferido',
    definition:
      'Esquema en que la operación se liquida después de su emisión o en varias partes. Obliga a emitir un Recibo Electrónico de Pago (REP) por cada pago.',
  },
  {
    abbr: 'PUE',
    name: 'Pago en Una sola Exhibición',
    definition:
      'Esquema en que la operación se paga de contado al momento de emitir el comprobante; no requiere Recibo Electrónico de Pago.',
  },
  {
    name: 'Anexo 20',
    definition:
      'Estándar técnico del SAT que define la estructura XML del comprobante (primero del CFD y luego del CFDI). Se publica en el DOF y es la referencia oficial de cada versión.',
  },
  {
    abbr: 'RMF',
    name: 'Resolución Miscelánea Fiscal',
    definition:
      'Conjunto de reglas administrativas que el SAT publica (normalmente cada año) para detallar cómo se aplican las leyes fiscales; incluye reglas sobre emisión y cancelación de CFDI.',
  },
  {
    abbr: 'DOF',
    name: 'Diario Oficial de la Federación',
    definition:
      'Publicación oficial del Estado mexicano donde se promulgan leyes, reglamentos y reglas. Es la fuente primaria a la que se referencian las afirmaciones normativas de este sitio.',
  },
  {
    name: 'Factura electrónica',
    definition:
      'Comprobante de una operación comercial emitido, transmitido y conservado en formato electrónico. En México se materializa como CFDI.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q10481245',
      'https://es.wikipedia.org/wiki/Factura_electr%C3%B3nica',
    ],
  },
];
