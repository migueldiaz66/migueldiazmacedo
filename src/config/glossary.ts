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
  // --- Línea "Laboratorio" ---
  {
    key: 'rag',
    abbr: 'RAG',
    name: 'Generación aumentada por recuperación',
    definition:
      'Técnica que, antes de que un modelo de lenguaje responda, busca en un conjunto de documentos los fragmentos pertinentes y se los entrega junto con la pregunta. El modelo deja de responder de memoria y responde a partir de un texto que se puede verificar.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q121362277',
      'https://es.wikipedia.org/wiki/Generaci%C3%B3n_aumentada_por_recuperaci%C3%B3n',
    ],
  },
  {
    key: 'llm',
    abbr: 'LLM',
    name: 'Gran modelo de lenguaje',
    definition:
      'Modelo entrenado sobre grandes volúmenes de texto para predecir la continuación de una secuencia. Solo conoce lo que vio durante su entrenamiento, y esa limitación es la que la generación aumentada por recuperación viene a cubrir.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q115305900',
      'https://es.wikipedia.org/wiki/Modelo_de_lenguaje_de_gran_tama%C3%B1o',
    ],
  },
  {
    key: 'embedding',
    name: 'Embedding (vector semántico)',
    definition:
      'Lista de números que representa el significado de un texto, de modo que dos textos sobre el mismo asunto quedan cerca en ese espacio aunque no compartan palabras. Es lo que permite buscar por sentido y no por coincidencia literal.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q18395344',
      'https://en.wikipedia.org/wiki/Word_embedding',
    ],
  },
  {
    key: 'corpus-rag',
    name: 'Corpus (en generación aumentada por recuperación)',
    definition:
      'Conjunto de documentos del que un sistema de recuperación saca sus respuestas. No es el corpus de entrenamiento del modelo: este se da de alta después, se puede cambiar o ampliar, y delimita exactamente lo que el sistema está en condiciones de contestar.',
  },
  {
    key: 'chunking',
    name: 'Troceado (chunking)',
    definition:
      'Corte de un documento en fragmentos manejables antes de vectorizarlos. El tamaño y el punto de corte deciden la calidad de la recuperación: un fragmento que mezcla varios temas produce un vector que no se parece del todo a ninguno.',
  },
  {
    key: 'pasaje',
    name: 'Pasaje',
    definition:
      'Cada uno de los fragmentos en que se corta un documento. Es la unidad que se vectoriza, se almacena, se recupera y se cita como fuente de una respuesta.',
  },
  {
    key: 'base-vectorial',
    name: 'Base de datos vectorial',
    definition:
      'Base de datos especializada en guardar vectores y encontrar los más cercanos a uno dado. Usa índices para no comparar la consulta contra todos los vectores guardados.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q118396004',
      'https://en.wikipedia.org/wiki/Vector_database',
    ],
  },
  {
    key: 'similitud-coseno',
    name: 'Similitud coseno',
    definition:
      'Medida de parecido entre dos vectores por el ángulo que forman, con independencia de su magnitud. Es la métrica habitual para decidir qué pasaje se acerca más a una pregunta.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q1784941',
      'https://es.wikipedia.org/wiki/Similitud_coseno',
    ],
  },
  {
    key: 'recuperacion',
    name: 'Recuperación (retrieval)',
    definition:
      'Paso que convierte la pregunta en un vector y trae del almacén los pasajes más cercanos. Es la "R" de RAG y, medido, suele ser la parte barata del proceso.',
  },
  {
    key: 'vectorizacion-pregunta',
    name: 'Vectorización de la pregunta',
    definition:
      'Conversión de la pregunta en un vector con el mismo modelo que vectorizó los pasajes. Solo así ambos quedan en el mismo espacio y la distancia entre ellos significa algo: con modelos distintos, la búsqueda por cercanía no mide nada.',
  },
  {
    key: 'prompt-aumentado',
    name: 'Prompt aumentado',
    definition:
      'Texto que finalmente recibe el modelo: los pasajes recuperados, la pregunta y la instrucción de responder solo con lo que está en ellos. Es donde la recuperación se vuelve contexto.',
  },
  {
    key: 'temperatura',
    name: 'Temperatura',
    definition:
      'Parámetro que gradúa cuánto azar introduce el modelo al elegir cada palabra. En cero toma siempre la opción más probable, de modo que la misma pregunta sobre los mismos pasajes devuelve la misma respuesta y el resultado se puede repetir.',
  },
  {
    key: 'modo-de-razonamiento',
    name: 'Modo de razonamiento',
    definition:
      'Comportamiento de ciertos modelos que, antes de contestar, generan una cadena de pasos intermedios. Ayuda en tareas que exigen deducción y multiplica el tiempo de respuesta; aquí está apagado porque la tarea es redactar a partir de pasajes ya recuperados.',
  },
  {
    key: 'ventana-de-contexto',
    name: 'Ventana de contexto',
    definition:
      'Cantidad máxima de texto que un modelo puede tener presente de una vez, contando el prompt y la respuesta. Limita cuántos pasajes se le pueden entregar y encarece el procesamiento cuando crece.',
  },
  {
    key: 'agente-llm',
    name: 'Agente (de modelo de lenguaje)',
    definition:
      'Montaje en el que el modelo no solo responde sino que decide qué hacer: buscar más información, ejecutar una herramienta o actuar sobre la interfaz. Más flexible que un flujo fijo y menos predecible.',
  },
  {
    key: 'llamada-a-herramientas',
    name: 'Llamada a herramientas (tool calling)',
    definition:
      'Capacidad de un modelo para pedir la ejecución de una función declarada, con sus argumentos, en lugar de contestar con texto. Los modelos pequeños la manejan bien solo cuando las opciones son pocas.',
  },
  {
    key: 'ollama',
    name: 'Ollama',
    definition:
      'Programa que descarga y ejecuta modelos de lenguaje en la propia máquina y los expone en una interfaz de programación local. Permite montar un sistema completo sin servicio en la nube ni llave de acceso.',
  },
  {
    key: 'qdrant',
    name: 'Qdrant',
    definition:
      'Base de datos vectorial de código abierto, con búsqueda por similitud y filtros, que se levanta en un contenedor. Es el almacén de vectores de este montaje.',
  },
  {
    key: 'alucinacion',
    name: 'Alucinación',
    definition:
      'Respuesta inventada que un modelo presenta con la misma seguridad que una correcta. La generación aumentada por recuperación no la elimina: la reduce y, al exigir que cada respuesta cite sus pasajes, la vuelve detectable.',
    sameAs: [
      'https://www.wikidata.org/wiki/Q116197048',
      'https://es.wikipedia.org/wiki/Alucinaci%C3%B3n_(inteligencia_artificial)',
    ],
  },
  {
    key: 'recall-at-k',
    name: 'Cobertura en los primeros k (recall@k)',
    definition:
      'Proporción de preguntas en las que el pasaje correcto aparece entre los k primeros resultados de la búsqueda. Es la medida básica para decidir si la recuperación sirve, separada de la calidad de la redacción final.',
  },
];

// Subconjunto por claves, en el orden del catálogo (filtra claves desconocidas).
export const glossaryByKeys = (keys: string[] = []) =>
  GLOSSARY.filter((t) => keys.includes(t.key));
