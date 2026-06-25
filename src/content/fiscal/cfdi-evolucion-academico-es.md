---
title: "La evolución del control fiscal en la facturación electrónica mexicana: del comprobante en papel al CFDI (2004–2023)"
description: "Artículo de reflexión: reconstrucción histórico-normativa de la evolución del CFDI con sustento en el DOF y el CFF."
pubDate: 2026-06-24
draft: true
lang: es
tags: ["CFDI", "facturación electrónica", "SAT", "CTC", "México"]
---

# La evolución del control fiscal en la facturación electrónica mexicana: del comprobante en papel al Comprobante Fiscal Digital por Internet (2004–2023)

**The evolution of fiscal control in Mexican electronic invoicing: from paper receipts to the Online Digital Tax Receipt (2004–2023)**

*Artículo de reflexión*

---

**Autor:** [Nombre del autor]
**Adscripción institucional:** [Institución]
**Correo electrónico:** [correo]
**ORCID:** [identificador, si se cuenta con él]

**Fecha de elaboración:** [completar al enviar]

---

## Resumen

La facturación electrónica en México constituye uno de los esquemas de control continuo de transacciones (CTC) de mayor antigüedad a nivel internacional. Este artículo de reflexión reconstruye, con criterio cronológico y sustento en fuentes normativas primarias —principalmente el Diario Oficial de la Federación (DOF) y el Código Fiscal de la Federación (CFF)—, la evolución del modelo desde el comprobante en papel del esquema de impresor autorizado hasta el Comprobante Fiscal Digital por Internet (CFDI) en su versión 4.0. El análisis distingue dos ejes de desarrollo paralelos: la sucesión de esquemas de comprobación y versiones del comprobante base, por un lado, y la extensibilidad mediante complementos sectoriales, por otro. La tesis central sostiene que la trayectoria de dos décadas no fue una sucesión de cambios técnicos inconexos, sino el despliegue sostenido de un mismo principio: convertir la factura en el instrumento mediante el cual la autoridad fiscal observa el registro de las operaciones en tiempo real. Se examina cómo cada etapa respondió a una carencia de la anterior y se documenta, además, la contradicción existente entre fuentes secundarias respecto a la numeración de versiones, señalando al Anexo 20 publicado en el DOF como la única referencia confiable.

**Palabras clave:** facturación electrónica; CFDI; control continuo de transacciones; fiscalización; Comprobante Fiscal Digital; SAT; México.

**Clasificación JEL:** H25; H26; K34; O33.

## Abstract

Electronic invoicing in Mexico constitutes one of the oldest continuous transaction control (CTC) schemes at the international level. This reflection article reconstructs, in chronological order and grounded in primary regulatory sources —chiefly the Official Gazette of the Federation (DOF) and the Federal Tax Code (CFF)—, the evolution of the model from the paper receipt of the authorized-printer scheme to the Online Digital Tax Receipt (CFDI) in its 4.0 version. The analysis distinguishes two parallel axes of development: the succession of verification schemes and base-receipt versions on the one hand, and extensibility through sector-specific complements on the other. The central thesis holds that the two-decade trajectory was not a sequence of disconnected technical changes, but the sustained deployment of a single principle: turning the invoice into the instrument through which the tax authority observes the record of transactions in real time. The article examines how each stage responded to a shortcoming of the preceding one, and documents the contradiction among secondary sources regarding version numbering, pointing to the Annex 20 published in the DOF as the only reliable reference.

**Keywords:** electronic invoicing; CFDI; continuous transaction controls; tax enforcement; Digital Tax Receipt; SAT; Mexico.

**JEL Classification:** H25; H26; K34; O33.

---

## 1. Introducción

En México la factura no es un documento que el contribuyente emite y guarda. Es una transacción que un tercero autorizado valida contra la infraestructura del Servicio de Administración Tributaria (SAT) antes de que tenga validez fiscal. Ese modelo —control continuo de transacciones, o CTC por sus siglas en inglés (*continuous transaction controls*)— se construyó por etapas a lo largo de casi veinte años.

Este artículo reconstruye esa evolución —los sucesivos esquemas de comprobación, las versiones del CFDI y los complementos que lo extendieron— con un mismo criterio analítico en cada etapa: qué introdujo, con qué fundamento normativo, y qué problema de fiscalización resolvía. No se trata de una investigación empírica con datos primarios, sino de un artículo de reflexión que ordena e interpreta la trayectoria normativa del modelo a partir de sus fuentes originales.

La pregunta que organiza el texto es si los cambios sucesivos del esquema de facturación responden a una lógica única o a decisiones aisladas. La tesis que se defiende es la primera: cada etapa puede leerse como respuesta a una carencia de la anterior, y el conjunto traza una dirección constante hacia el control en el momento mismo de la transacción.

## 2. Consideraciones metodológicas

El criterio de orden es cronológico. Cada afirmación factual se referencia a su publicación en el Diario Oficial de la Federación (DOF) o al ordenamiento aplicable —principalmente el Código Fiscal de la Federación (CFF), la Resolución Miscelánea Fiscal (RMF) y sus Anexos—, y las referencias se numeran al final. Se privilegian las fuentes normativas primarias sobre las cronologías de divulgación, que como se documenta en la sección 7 incurren con frecuencia en contradicciones. Donde una frontera temporal o de versión no puede fijarse con certeza a partir de la fuente primaria, se señala expresamente como aproximada.

## 3. Antecedente: la facturación en papel

Antes de 2004 el comprobante fiscal se imprimía en establecimientos autorizados por la Secretaría de Hacienda —el esquema de impresor autorizado—, con folios controlados y conservación obligatoria de cinco años. El control era posterior: la autoridad verificaba mediante revisión documental, sin visibilidad sobre la operación en el momento de ocurrir. Este esquema facilitaba la emisión de comprobantes apócrifos y la deducción de operaciones inexistentes, problema que el propio SAT identificó como motivación del cambio de modelo [1].

## 4. El Comprobante Fiscal Digital (2004–2010): digitalización sin certificación de la autoridad

La base legal se establece con la reforma al CFF publicada en el DOF el 5 de enero de 2004, que incorpora el régimen de documentos digitales, el sello digital y la firma electrónica avanzada (FIEL) como medios de autenticación con efectos fiscales (CFF, arts. 17-C a 17-J) [2]. La primera especificación técnica del Comprobante Fiscal Digital (CFD) es el Anexo 20 de la RMF para 2004, que define el estándar XML (*Extensible Markup Language*), el uso de la codificación UTF-8, la estructura de nodos emisor/receptor y el sello digital en Base64 [3]. La emisión real inicia en 2005 con el esquema 1.0, de uso opcional [1].

### 4.1. El proceso de emisión y sus dos herramientas

El proceso involucraba dos herramientas distintas, que conviene no confundir. La primera era SOLCEDI (Solicitud de Certificado Digital), una aplicación de escritorio que el SAT ponía a disposición para descargar y ejecutar localmente [4][5]. SOLCEDI servía para una sola función: generar las credenciales criptográficas. Creaba en el propio equipo del contribuyente el par de llaves —pública y privada— y construía el archivo de requerimiento (.req, luego ensobretado en .sdg) que se enviaba al SAT para obtener la FIEL y, con ella, el Certificado de Sello Digital (CSD) [4]. El punto relevante: la generación de las llaves ocurría del lado del contribuyente y la clave privada nunca salía de su equipo; el SAT solo recibía el requerimiento y emitía el certificado.

SOLCEDI no emitía facturas. Una vez obtenidos la FIEL y el CSD, su función terminaba. Para emitir comprobantes se necesitaba una segunda herramienta: un software de facturación que el contribuyente desarrollaba, compraba o rentaba, y que el SAT no proporcionaba. Ese software era el que, en cada operación, generaba el archivo XML conforme al Anexo 20, le aplicaba el sello digital usando el CSD y resguardaba el comprobante [5]. SOLCEDI tramitaba el sello (uso ocasional, al obtener o renovar certificados); el software de facturación lo estampaba en cada documento (uso diario). Tener las credenciales no bastaba para facturar.

### 4.2. El modelo de control: verificación posterior

La autoridad no intervenía al emitir cada comprobante. El control se ejercía después, mediante un mecanismo obligatorio: un reporte mensual de los comprobantes emitidos —incluidos los cancelados—, firmado con la FIEL y enviado al SAT dentro de los primeros días del mes siguiente a través del portal [4][5]. El SAT recibía la información en lote, ya ocurridas las operaciones, no comprobante por comprobante en el momento. Lo que cambió respecto al papel fue el soporte del comprobante y el medio de reporte, no el modelo de fiscalización: el control seguía siendo posterior.

Hacia el final de su vigencia el esquema admitió una variante: el contribuyente podía emitir CFD a través de un tercero, el PACFD (Proveedor Autorizado de Comprobantes Fiscales Digitales), en lugar de hacerlo enteramente por su cuenta. El PACFD es el antecesor directo del Proveedor Autorizado de Certificación (PAC) que llegaría con el CFDI, pero con una diferencia esencial: no certificaba la operación en el momento de emitirla. El modelo de control seguía siendo posterior, por reporte.

### 4.3. La decisión de arquitectura subyacente

Conviene fijar la decisión de fondo, porque la etapa siguiente la invierte. En el esquema CFD, lo que se distribuyó al usuario final fue la generación de las claves: cada contribuyente las creaba en su propio equipo. El comprobante quedaba sellado con un certificado del propio emisor y se reportaba con posterioridad, en lote. Ese diseño deja la validación en manos del agente con incentivo para evadir: el emisor sella los comprobantes que decide y la autoridad solo toma conocimiento al recibir el reporte del mes siguiente, cuando la operación ya ocurrió y el comprobante ya surtió efectos frente a terceros. No existe mecanismo para impedir un comprobante apócrifo en el momento de su emisión, ni para garantizar que lo reportado corresponda con lo efectivamente emitido. Lo que no existía, en suma, era un tercero que validara la operación en el momento de emitirla, independiente del emisor y previo a que el comprobante tuviera efectos. Esa limitación es la que condujo a un rediseño completo del esquema: el Comprobante Fiscal Digital por Internet (CFDI) movió la validación al momento mismo de la emisión y la puso en manos de un actor externo y obligatorio.

## 5. El Comprobante Fiscal Digital por Internet (2010–2011): la autoridad entra al flujo

El 7 de diciembre de 2009 se publica en el DOF la modificación a la RMF que fija la entrada en vigor del CFDI a partir del 1 de enero de 2011, y durante 2010 se oficializa el modelo con su Anexo 20 correspondiente [6].

La pieza que define el modelo es el PAC. El artículo 29 del CFF establece que el contribuyente debe remitir el comprobante a un PAC autorizado por el SAT para que valide, asigne un folio fiscal único (UUID, *Universally Unique Identifier*) e incorpore el sello digital del SAT antes de que el comprobante tenga efectos fiscales [7]. Sin ese timbrado, el comprobante no existe para la autoridad.

Esto modifica el momento en que la autoridad ejerce el control. En el esquema CFD, el SAT veía la operación después de ocurrida, a través del reporte mensual en lote; con el CFDI, la validación ocurre en el instante de la emisión, antes de que el comprobante exista para efectos fiscales. La autoridad, a través de los certificadores (PAC), queda insertada en el flujo mismo de la operación. La emisión de una factura deja de ser una operación local y pasa a ser una transacción multiparte en dos direcciones: del emisor al PAC y de éste al SAT en la solicitud de certificación, y del SAT al PAC y de éste al emisor en la devolución del comprobante timbrado. El emisor no se comunica directamente con la autoridad; el PAC actúa como intermediario.

### 5.1. La coexistencia de esquemas y el Código de Barras Bidimensional

En esta transición el SAT abrió además un esquema para los contribuyentes de menor tamaño: el CBB (Código de Barras Bidimensional), una opción para quienes tenían ingresos anuales de hasta cuatro millones de pesos. Consistía en una factura impresa con un código bidimensional que el SAT entregaba al asignar un rango de folios, imprimible con recursos propios sin pasar por un impresor autorizado [8]. El matiz es relevante: el CBB no era factura electrónica, sino papel con un dispositivo de seguridad; carecía de las propiedades de autenticidad, integridad y no repudio que aporta el XML sellado [8].

Hacia 2011 coexistían, así, cuatro esquemas de comprobación: el impresor autorizado heredado del modelo en papel, el CFD (con su variante vía PACFD), el CBB y el propio CFDI. Esa fragmentación constituía el obstáculo para un control continuo: mientras hubiera rutas alternativas, la autoridad conservaba puntos ciegos. La etapa siguiente consiste, esencialmente, en eliminarlas una a una hasta dejar al CFDI como esquema único.

## 6. Obligatoriedad y fin del papel (2012–2014)

Esta es la etapa en que el SAT ejecuta el cierre del esquema previo. 2012 es el último ejercicio en que se permiten facturas impresas [1]. Entre 2012 y 2014 se retiran sucesivamente el comprobante de impresor autorizado, el CFD y el CBB, hasta que a partir de 2014 el CFDI queda como esquema obligatorio para la generalidad de los contribuyentes. En ese mismo periodo se incorpora el recibo de nómina al esquema CFDI, extendiendo el control a las percepciones laborales [1][9]. Con ello la autoridad alcanza una vista transaccional única de la actividad económica formal, sin las rutas paralelas que antes dejaban puntos ciegos.

## 7. Nota crítica sobre la numeración de versiones

La numeración de versiones del CFDI es una de las áreas donde las fuentes secundarias se contradicen con mayor frecuencia, por lo que conviene no tomar ninguna como definitiva sin contrastarla.

La secuencia más defendible es que el CFDI continuó la numeración heredada del CFD en lugar de reiniciarla: el CFD tuvo versiones tempranas (1.0, 2.0, 2.2) y el CFDI inició en 3.0 hacia 2010–2011, para pasar luego a 3.2, después a 3.3 (2017) y finalmente a 4.0 (2022) [10]. Bajo esta lectura, no existió un "CFDI 1.0" ni un "CFDI 2.0" propiamente dichos: esas versiones pertenecen al esquema CFD anterior.

El problema es que numerosas cronologías mezclan ambos esquemas. Algunas fuentes etiquetan como "versión 1.0" al CFD de 2005 y como "versión 2.0" al CFDI de 2010, fundiendo la genealogía de los dos sistemas en una sola lista [10]. Otras afirman que la 3.2 "fue la primera versión para facturar en línea", lo que contradice tanto a las que sitúan el inicio en 3.0 como a las que lo sitúan antes [10]. Existe además discrepancia sobre fechas de obligatoriedad: para la 3.3, unas fuentes señalan julio de 2017 (publicación) y otras enero de 2018 (obligatoriedad efectiva), que son hitos distintos confundidos como uno solo [10].

La implicación es directa: la única fuente confiable de la versión y su vigencia es el Anexo 20 publicado en el DOF para cada periodo, no las cronologías de divulgación. En este texto se emplea la secuencia CFD (1.0–2.2) → CFDI (3.0, 3.2, 3.3, 4.0) por ser la más consistente con los Anexos 20, y se marca como aproximada cualquier frontera que las fuentes no permitan fijar con certeza.

## 8. CFDI 3.3 (2017): estandarización y validación de datos

La versión 3.3 constituye una reescritura del estándar técnico. Su Anexo 20 se publica en el DOF el 28 de julio de 2017 [11], y la convivencia con la versión anterior, junto con la obligatoriedad del complemento de pagos, se regulan en resoluciones de modificación posteriores, incluida la prórroga del complemento para recepción de pagos hasta el 1 de septiembre de 2018 [12]. Tres cambios definen su carácter:

1. **Catálogos en lugar de texto libre.** Campos antes abiertos (producto/servicio, unidad de medida, uso del CFDI) se sustituyen por claves de catálogos controlados por el SAT, lo que elimina ambigüedad y permite cruces automatizados [11].
2. **Reglas de validación más estrictas.** El Anexo 20 incorpora un conjunto ampliado de validaciones que se ejecutan en el timbrado; un comprobante mal formado o inconsistente es rechazado antes de certificarse [11].
3. **Complemento para Recepción de Pagos.** Obliga a documentar pagos en parcialidades o diferidos, cerrando la brecha entre la factura emitida y el flujo real de pago [12].

A esto se añade el esquema de cancelación con aceptación del receptor, previsto en el artículo 29-A del CFF y reglamentado en la RMF: no es posible cancelar unilateralmente un comprobante que el receptor ya utilizó [13]. El cambio de fondo es de objetivo: hasta entonces el SAT recolectaba comprobantes; con la 3.3 recolecta datos estructurados y validados, aptos para análisis automatizado y cruce masivo.

## 9. CFDI 4.0 (2022–2023): verificación por contraste

La versión vigente entra en vigor el 1 de enero de 2022 de forma opcional. Tras dos prórrogas al periodo de convivencia con la 3.3, la obligatoriedad queda fijada al 1 de abril de 2023 [14]. Sus cambios principales son:

- **Datos del receptor que deben coincidir con el padrón.** Nombre, régimen fiscal y código postal del domicilio fiscal del receptor deben corresponder exactamente con la constancia de situación fiscal registrada ante el SAT [14].
- **Cancelación con catálogo de motivos.** El esquema de cancelación se endurece y exige especificar la causa conforme a catálogo [14].
- **Énfasis en materialidad.** Se refuerza el criterio de que el comprobante ampare una operación real.

El efecto es que la validación deja de ser solo de forma y pasa a ser de contraste: al exigir coincidencia exacta de los datos del receptor con el padrón, el SAT puede cruzar emisor contra receptor de manera automática y detectar inconsistencias en el momento del timbrado.

## 10. La extensibilidad mediante complementos

El relato anterior sigue la versión del CFDI como comprobante base, pero el estándar se diseñó con capacidad de extensibilidad: incorporar información especializada sin alterar su estructura general. Este segundo eje de desarrollo opera en paralelo a las versiones: los complementos. Un complemento es un bloque de información estructurada que se incorpora al comprobante para cubrir las necesidades de un sector o una operación específica —nómina, comercio exterior, combustibles, pagos, transporte de mercancías— y que queda protegido por el mismo sello digital: los datos del complemento se incluyen en la cadena original que se sella, de modo que quedan certificados junto con el resto del comprobante y no pueden alterarse sin invalidar el sello.

La decisión de arquitectura es relevante para la interpretación histórica: en lugar de rehacer el estándar cada vez que un sector entraba bajo control fiscal, el SAT lo extendió mediante módulos acoplados al comprobante base. Cada complemento tiene su propio anexo técnico y su propia versión, que evoluciona de forma independiente a la del CFDI. Por ello la mayoría de los complementos sobrevivieron sin cambios el tránsito de 3.x a 4.0: están desacoplados del comprobante.

Las tablas siguientes presentan los principales complementos en cada régimen. Las versiones corresponden a un corte temporal y cambian con el tiempo, de forma independiente entre sí y respecto al CFDI base, por lo que deben verificarse contra el portal del SAT antes de su uso [15].

**Tabla 1. Principales complementos en el régimen CFDI 3.x (hasta 2023)**

| Complemento | Versión | Propósito |
|---|---|---|
| Recibo de nómina | 1.2 | Percepciones y deducciones laborales (CFDI tipo N) |
| Recepción de pagos (Recibo Electrónico de Pago, REP) | 1.0 → 2.0 | Documentar pagos en parcialidades o diferidos |
| Comercio exterior | 1.1 | Datos aduaneros en operaciones de exportación |
| Consumo de combustibles | 1.1 | Registro de consumos para monederos electrónicos |
| Estado de cuenta de combustibles | 1.2 | Operaciones con monederos electrónicos de combustible |
| INE | 1.1 | Información fiscal de partidos y operaciones electorales |
| Instituciones educativas privadas (IEDU) | 1.0 | Colegiaturas deducibles |
| Carta Porte | 1.0 → 2.0 | Traslado de bienes y mercancías |

**Tabla 2. Principales complementos en el régimen CFDI 4.0 (2022 en adelante)**

| Complemento | Versión | Cambio respecto a 3.x |
|---|---|---|
| Recibo de nómina | 1.2 | Sin cambio de versión |
| Recepción de pagos (REP) | 2.0 | Impuestos a nivel pago, nuevas validaciones |
| Comercio exterior | 1.1 / 2.0 | Convive 1.1; 2.0 para datos aduaneros ampliados |
| Consumo de combustibles | 1.1 | Sin cambio de versión |
| Estado de cuenta de combustibles | 1.2 | Sin cambio de versión |
| INE | 1.1 | Sin cambio de versión |
| Hidrocarburos y petrolíferos | 1.0 | Nuevo; complemento a nivel concepto |
| Carta Porte | 2.0 → 3.1 | Evolución mayor; validaciones más estrictas |

El patrón confirma la lectura propuesta: el comprobante base transitó de 3.3 a 4.0, pero la mayoría de los complementos conservaron su versión porque su ciclo de vida es propio. Los que sí cambiaron lo hicieron por razones de su sector —Carta Porte por la fiscalización del transporte, REP por el detalle de pagos—, no por el cambio de versión del CFDI.

## 11. Lectura de conjunto y conclusiones

La Tabla 3 sintetiza la trayectoria como un todo.

**Tabla 3. Evolución del modelo de control fiscal en la facturación electrónica mexicana**

| Etapa | Año | Cambio en el modelo de control |
|---|---|---|
| Impresor autorizado | pre-2004 | Papel; verificación posterior, documental |
| CFD | 2004–2010 | Documento digital (vía PACFD); control posterior por reporte mensual |
| CBB | 2010–2011 | Papel con código de seguridad para contribuyentes pequeños |
| CFDI | 2011 | Certificación por tercero (PAC); control casi en tiempo real |
| Obligatoriedad | 2012–2014 | Cierre de impresor autorizado, CFD y CBB; CFDI como esquema único |
| CFDI 3.3 | 2017 | Datos estructurados y validados |
| CFDI 4.0 | 2023 | Verificación por contraste contra el padrón |
| Complementos | 2011 en adelante | Extensión por módulos sellados a sectores específicos |

Leída en conjunto, la evolución no fue una sucesión de cambios técnicos inconexos, sino el despliegue sostenido de un mismo principio: convertir la factura en el instrumento mediante el cual el Estado observa el registro fiscal de las operaciones en tiempo real. Cada etapa respondió a una carencia de la anterior —el papel no aportaba trazabilidad, el CFD no aportaba certificación inmediata, la versión 3.3 no aportaba datos comparables, la 4.0 cerró el contraste contra el padrón— y los complementos extendieron la misma lógica a cada sector que se buscaba fiscalizar.

La principal contribución de esta reflexión es ofrecer una lectura unificada de una trayectoria que la literatura de divulgación suele presentar de forma fragmentaria y, con frecuencia, contradictoria en sus datos. Reconocer la lógica subyacente —qué carencia resolvía cada etapa y cómo cada una preparó la siguiente— permite interpretar el estado actual del modelo no como un punto de llegada, sino como una fase dentro de una dirección sostenida hacia el control en el momento de la transacción.

Entre las limitaciones del trabajo se encuentra su carácter interpretativo y documental, que no incorpora evidencia empírica sobre los efectos del modelo en la recaudación o en el cumplimiento. Esa evaluación, así como el estudio comparado con otros regímenes de control continuo de transacciones en América Latina, constituye una línea de investigación que este panorama deja planteada.

---

## Referencias

[1] Trayectoria general de la facturación electrónica en México (cronología de versiones y obligatoriedad). Síntesis a partir de fuentes secundarias del sector, verificadas contra el DOF en cada hito específico citado en este trabajo.

[2] Decreto por el que se reforman, adicionan y derogan diversas disposiciones del Código Fiscal de la Federación, DOF 05/01/2004. Régimen de documentos digitales, sello digital y firma electrónica avanzada (CFF, arts. 17-C a 17-J). Disponible en: https://dof.gob.mx/nota_detalle.php?codigo=676424&fecha=05/01/2004

[3] Anexo 20 de la Resolución Miscelánea Fiscal para 2004, DOF. Primer estándar técnico del comprobante fiscal digital (estructura XML, codificación, sello digital en Base64). Disponible en: https://dof.gob.mx/nota_detalle_popup.php?codigo=671350

[4] SAT, Manual de Usuario de la Aplicación: Solicitud de Certificado Digital (SOLCEDI). Generación local del par de llaves y del archivo de requerimiento (.req/.sdg) para la obtención de la FIEL y el CSD. Disponible en: http://omawww.sat.gob.mx/informacion_fiscal/factura_electronica/Documents/cfdi/Manual_SOLCEDI.pdf — y SAT, "Consulta folios y envía reportes mensuales de comprobantes fiscales digitales (CFD)" (esquema SICOFI; reporte mensual obligatorio bajo el modelo CFD). Disponible en: https://www.sat.gob.mx/aplicacion/45174/consulta-folios-y-envia-reportes-mensuales-de-comprobantes-fiscales-digitales

[5] Diferencias operativas entre los esquemas CFD y CFDI (solicitud de folios y series, reporte mensual obligatorio en CFD frente a certificación por PAC en CFDI). Documentación técnica del esquema CFD vigente hacia 2010.

[6] Primera Resolución de Modificaciones a la RMF para 2010 y su Anexo 1-A, DOF 07/12/2009; oficialización del esquema CFDI con entrada en vigor a partir del 01/01/2011. (Verificar el código DOF correspondiente a la publicación específica del Anexo que oficializa el CFDI antes del envío final.)

[7] Código Fiscal de la Federación, arts. 29 y 29-A. Obligación de remitir el comprobante a un proveedor autorizado de certificación (PAC) para su validación, asignación de folio fiscal (UUID) e incorporación del sello digital del SAT.

[8] Esquema de comprobantes fiscales impresos con Código de Barras Bidimensional (CBB): aplicable a contribuyentes con ingresos anuales de hasta $4,000,000; folios y CBB asignados por el SAT, impresión por medios propios. Fundamento: art. 29-B, fracción I del CFF y Regla I.2.8.1.1 de la RMF 2012; para 2011, arts. 29 y 29-A, fracción VIII del CFF y Regla I.2.9.3.3 de la RMF 2011. El CBB carece de las propiedades de autenticidad, integridad y no repudio del comprobante electrónico sellado.

[9] Resolución Miscelánea Fiscal para 2014, DOF 30/12/2013. Obligatoriedad general del CFDI para todos los contribuyentes desde 2014 —con facilidad de migración para contribuyentes de menores ingresos hasta el 31/03/2014, art. cuadragésimo quinto transitorio— e incorporación del recibo de nómina al esquema CFDI. Disponible en: https://dof.gob.mx/nota_detalle.php?codigo=5328461&fecha=30/12/2013

[10] Entrada en vigor del CFDI 4.0 (01/01/2022, opcional) y obligatoriedad general a partir del 01/04/2023, tras prórrogas del periodo de convivencia con la versión 3.3 (transitorios de la RMF 2022 y sus modificaciones; la obligatoriedad final se confirma en la RMF 2023, DOF 27/12/2022). Especificación técnica: Anexo 20 versión 4.0, DOF 13/01/2022. Disponible en: https://www.dof.gob.mx/nota_detalle.php?codigo=5640565&fecha=13/01/2022 — y RMF 2023: https://www.dof.gob.mx/nota_detalle_popup.php?codigo=5710350

[11] Anexo 20 de la Segunda Resolución de Modificaciones a la RMF para 2017, DOF 28/07/2017. Estándar técnico de la versión 3.3 (catálogos, validaciones, complemento de pagos). Disponible en: https://dof.gob.mx/nota_detalle.php?codigo=5492254&fecha=28/07/2017

[12] Disposiciones sobre el Complemento para Recepción de Pagos y su obligatoriedad a partir del 01/09/2018 (resoluciones de modificación a la RMF 2017 y disposiciones relacionadas). El esquema de cancelación con aceptación del receptor se fundamenta en el art. 29-A del CFF y reglas de la RMF aplicables.

[13] Código Fiscal de la Federación, art. 29-A (cancelación de comprobantes con aceptación del receptor); reglas de la RMF aplicables.

[14] Sobre la contradicción entre fuentes secundarias respecto a la numeración de versiones del CFDI: distintos sitios de divulgación etiquetan de forma incompatible las versiones tempranas (CFD 2005 como "1.0", CFDI 2010 como "2.0", la 3.2 como "primera versión en línea"), y confunden fechas de publicación con fechas de obligatoriedad. Fuente primaria recomendada para fijar versión y vigencia: el Anexo 20 publicado en el DOF para cada periodo. Referencia de apoyo: http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm

[15] Catálogo de complementos del CFDI y sus versiones. SAT, "Complementos de factura". Disponible en: https://www.sat.gob.mx/minisitio/Factura/emite_complementosdefactura.htm. Cada complemento cuenta con su propio anexo técnico publicado por el SAT; las versiones cambian de forma independiente y deben verificarse contra el portal del SAT antes de su uso.

---

*Nota para el envío: los enlaces al DOF de las referencias [2], [3], [4], [9], [10] y [11] están verificados. La referencia [6] (oficialización del CFDI con vigor en 2011) requiere confirmar el código exacto de la publicación en el DOF antes del envío. La revista de destino determinará el formato final de citación (APA 7.ª u otro); las referencias deberán ajustarse a sus lineamientos.*
