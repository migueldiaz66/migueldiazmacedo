---
title: "El ciclo de vida del CFDI 4.0: tipos, actores, procesos y estados"
seoTitle: "Ciclo de vida del CFDI 4.0: anatomía del proceso"
description: "Anatomía del proceso del CFDI 4.0: los cinco tipos de comprobante, los cuatro actores que lo manejan, los procesos por los que pasa y por qué su estado es relativo al lente que lo observa."
pubDate: 2026-06-26T21:00:00-06:00
cover: /covers/cfdi-ciclo-de-vida.png
coverAlt: "El ciclo de vida del CFDI 4.0 y la cadena de sus cuatro actores: emisor, PAC, SAT y receptor."
draft: false
lang: es
tags: ["CFDI", "facturación electrónica", "SAT", "CTC", "México"]
entities: ["cfdi", "sat", "factura-electronica"]
glossary: ["cfdi", "sat", "pac", "csd", "timbrado", "uuid", "tfd", "sello-digital", "complemento", "addenda", "rep", "ppd", "pue", "anexo-20", "ctc", "factura-electronica", "rfc", "carta-porte", "nota-de-credito"]
citations:
  - text: 'SAT, Anexo 20 — Guía de llenado de los Comprobantes Fiscales Digitales por Internet (CFDI) versión 4.0. Estructura del comprobante, catálogo de tipos (c_TipoDeComprobante: I, E, T, N, P), complementos y nodo Addenda.'
    urls: ['http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Anexo_20_Guia_de_llenado_CFDI.pdf']
  - text: 'Código Fiscal de la Federación, arts. 29 y 29-A. Emisión del CFDI y certificación por un Proveedor Autorizado de Certificación (PAC): validación, folio fiscal e incorporación del sello del SAT.'
    urls: ['https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf']
  - text: 'SAT, Complemento para recepción de pagos (Recibo Electrónico de Pago, REP). Obligatorio en el esquema de Pago en Parcialidades o Diferido (PPD); versión 2.0 vigente para CFDI 4.0.'
    urls: ['https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos']
  - text: 'SAT, Servicio de cancelación de facturas. Catálogo de motivos de cancelación (01 a 04) y esquema de cancelación con aceptación del receptor.'
    urls: ['http://omawww.sat.gob.mx/factura/Paginas/documentos/cancelacion/servicio_cancelacion.pdf']
  - text: 'Resolución Miscelánea Fiscal, regla 2.7.1.39 (renumerada 2.7.1.35 en versiones recientes). Cancelación sin aceptación del receptor en comprobantes de hasta $1,000 y otros supuestos, con sus excepciones.'
    urls: ['https://www.sat.gob.mx/articulo/62770/regla-2.7.1.39']
  - text: 'Código Fiscal de la Federación, art. 30. Conservación de la contabilidad y la documentación —incluidos los CFDI— por cinco años.'
    urls: ['https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf']
  - text: 'SAT, Verificación de Comprobantes Fiscales Digitales por Internet (CFDI). Servicio en línea para confirmar la autenticidad y la vigencia de un comprobante capturando el folio fiscal (UUID), el RFC del emisor y el del receptor.'
    urls: ['https://verificacfdi.facturaelectronica.sat.gob.mx/']
faq:
  - q: "¿Cuántos tipos de CFDI existen?"
    a: "Cinco: Ingreso (I), Egreso (E), Traslado (T), Nómina (N) y Pago (P). El tipo determina para qué sirve el comprobante y qué procesos le aplican; está definido en el catálogo c_TipoDeComprobante del Anexo 20 del SAT."
  - q: "¿Una factura electrónica siempre es de tipo Ingreso?"
    a: "Casi siempre. Lo que coloquialmente se llama 'factura' suele ser el tipo Ingreso, una venta. La excepción común es la nota de crédito —devoluciones, descuentos o bonificaciones—, que es de tipo Egreso; a veces se le llama 'factura de egreso', aunque no ampara una venta."
  - q: "¿Qué es una nota de crédito en el CFDI?"
    a: "Un CFDI de tipo Egreso que documenta devoluciones, descuentos o bonificaciones sobre una venta ya facturada. Resta su monto sin cancelar el comprobante de Ingreso original, al que se relaciona por su folio fiscal."
  - q: "¿Qué es el complemento de pagos o REP?"
    a: "El Recibo Electrónico de Pago: un CFDI de tipo Pago que acusa cada pago recibido cuando la operación se factura en el esquema de Pago en Parcialidades o Diferido (PPD). Se emite un REP por cada pago, hasta saldar la operación."
  - q: "¿Quiénes intervienen en el ciclo de vida de un CFDI?"
    a: "Cuatro actores: el emisor (genera y sella el comprobante), el PAC (lo valida y lo timbra en nombre del SAT), el SAT (la autoridad, cuyo sello le da efectos fiscales y que recibe los datos de cada operación) y el receptor (lo recibe y, según el caso, lo valida)."
  - q: "¿Qué es un PAC?"
    a: "Un Proveedor Autorizado de Certificación: el tercero autorizado por el SAT que recibe el comprobante del emisor, lo valida y lo timbra en nombre de la autoridad. En la práctica funciona como un receptor del documento."
  - q: "¿El SAT timbra cada CFDI?"
    a: "No. El SAT no certifica cada comprobante directamente: autoriza a los PAC para timbrar en su nombre. El sello del SAT lo aplica el PAC al timbrar, y el SAT recibe cada CFDI timbrado, lo que le da visibilidad de las operaciones conforme ocurren."
  - q: "¿Qué diferencia hay entre la emisión y el timbrado de un CFDI?"
    a: "La emisión es cuando el emisor genera el comprobante, lo valida y lo sella con su Certificado de Sello Digital (CSD). El timbrado es cuando un PAC lo recibe, lo valida e incorpora el sello del SAT y el folio fiscal único (UUID). Son dos procesos y dos actores distintos."
  - q: "¿El Certificado de Sello Digital (CSD) es lo mismo que la e.firma?"
    a: "No. El emisor sella cada comprobante con su Certificado de Sello Digital (CSD). La e.firma (antes FIEL) acredita la identidad del contribuyente ante el SAT y sirve para obtener el CSD y firmar trámites, no para sellar cada factura."
  - q: "¿Cuál es la diferencia entre un complemento y una addenda?"
    a: "El complemento es una extensión fiscal: información que le interesa al SAT, está regulada y se sella junto con el comprobante (nómina, comercio exterior, carta porte). La addenda es una extensión para el usuario: datos privados entre las partes que no le interesan al SAT; no es normativa y no se sella."
  - q: "¿Qué es la sustitución de un CFDI?"
    a: "Es la cancelación con el motivo 01 (comprobante emitido con errores con relación): se emite un comprobante nuevo y correcto y se relaciona con el anulado a través de su folio fiscal. Primero se emite el sustituto y luego se cancela el original."
  - q: "¿Se puede cancelar un CFDI libremente?"
    a: "No. Cancelar un CFDI exige indicar un motivo de un catálogo cerrado (claves 01 a 04) y, en muchos casos, la aceptación del receptor. No es una acción unilateral e inmediata en todos los supuestos."
  - q: "¿Cuántos motivos de cancelación de CFDI hay?"
    a: "Cuatro, con claves 01 a 04: 01, comprobante con errores con relación (la sustitución); 02, con errores sin relación; 03, no se llevó a cabo la operación; y 04, operación nominativa relacionada en una factura global."
  - q: "¿Cuánto tiempo debe conservarse un CFDI?"
    a: "Cinco años. Conservar el XML (y su representación impresa) es obligación del contribuyente —emisor y receptor—, conforme al artículo 30 del Código Fiscal de la Federación; el SAT no sustituye ese resguardo."
  - q: "¿Cómo se verifica si un CFDI es válido y está vigente?"
    a: "En el portal de verificación del SAT, capturando el folio fiscal (UUID) y los RFC del emisor y del receptor. El servicio confirma si el comprobante está registrado y si sigue vigente o fue cancelado."
  - q: "¿El CFDI tiene un solo estado?"
    a: "No. Su estado es relativo a quién lo observe: para el SAT es vigente o cancelado; para el negocio, emitido, cobrado o sustituido; para contabilidad, conciliado o cerrado. Ninguna perspectiva es la correcta; todas describen el mismo CFDI desde donde le toca mirarlo."
---

En la entrega anterior reconstruimos [la evolución histórica](https://migueldiazmacedo.com/fiscal/cfdi-evolucion/) de la facturación electrónica en México, del comprobante en papel al CFDI 4.0. Cerrada esa revisión histórica, esta serie cambia de eje: del "cómo llegamos aquí" al "cómo funciona hoy". En adelante revisamos la facturación electrónica actual —el Comprobante Fiscal Digital por Internet (CFDI) en su versión 4.0 y sus complementos— vista desde el documento mismo: qué tipos existen, quién lo maneja, por qué procesos pasa y por qué su estado es relativo a quién lo observe.

Este texto es el esbozo. Cada proceso que aquí se describe a grandes rasgos tendrá después su propia entrega a detalle.

## Qué es: una familia de cinco tipos

Hablar del "CFDI" en singular esconde que no es un documento, sino una familia [\[a\]](#nota-a). El Servicio de Administración Tributaria (SAT) distingue cinco tipos de comprobante [\[1\]](#ref-1), y el tipo es la primera coordenada para entender cualquier CFDI: dice para qué sirve y qué procesos le aplican.

| Tipo | Clave | Para qué sirve |
|---|---|---|
| Ingreso | I | Ventas, honorarios, ingresos |
| Egreso | E | Notas de crédito: devoluciones, descuentos, bonificaciones |
| Traslado | T | Movimiento o posesión de mercancía sin venta (con Carta Porte) |
| Nómina | N | Sueldos y asimilados (complemento de nómina) |
| Pago | P | Recibo Electrónico de Pago (REP) para el esquema de Pago en Parcialidades o Diferido (PPD) |

Lo que coloquialmente se llama "factura" es casi siempre el tipo Ingreso [\[b\]](#nota-b). Los otros cuatro cubren las correcciones de monto (Egreso), el movimiento de mercancía (Traslado), el pago de sueldos (Nómina) y el acuse de cada pago recibido (Pago).

## Quién lo maneja: cuatro actores

Un CFDI no lo produce una sola parte. En su vida intervienen cuatro actores, y conviene tenerlos claros antes de seguir, porque cada proceso es, en el fondo, uno o varios de ellos actuando sobre el documento.

> **Para el lector no técnico:** no necesitas dominar términos como *XML*, *sellado*, *CSD* o *timbrado* para seguir el resto. En el fondo, todo esto es **un proceso de firmado electrónico**, y cada actor —emisor, PAC, SAT y receptor— participa en él de forma electrónica, firmando, validando o sellando según le toca. Quédate con esa idea; el detalle de cada paso lo desmenuzamos en las **entregas especializadas** de esta serie.

- **Emisor** — genera el comprobante, lo valida y lo sella con su Certificado de Sello Digital (CSD).
- **PAC (Proveedor Autorizado de Certificación)** — recibe el comprobante del emisor, lo valida y lo timbra en nombre del SAT: le incorpora el sello del SAT —con un certificado que la autoridad le provee— y el folio fiscal (UUID) [\[2\]](#ref-2). Visto así, el PAC es también un receptor del documento.
- **SAT (Servicio de Administración Tributaria)** — la autoridad y raíz de confianza: define el estándar, emite los certificados que permiten sellar (el CSD del emisor) y autoriza a los PAC a certificar en su nombre. No timbra él mismo: su sello —que el PAC aplica al timbrar— es lo que convierte un XML sellado en un CFDI con efectos fiscales. Además, recibe cada comprobante timbrado, lo que le da visibilidad de las operaciones conforme ocurren.
- **Receptor** — el destinatario final: recibe el comprobante y, según quién sea, lo valida antes de usarlo [\[c\]](#nota-c).

## Por qué pasa: los procesos

Con los tipos y los actores sobre la mesa, el ciclo de vida es la secuencia de procesos por los que el documento atraviesa. A vista de pájaro:

| Proceso | Actores | Qué ocurre |
|---|---|---|
| **Emisión** | Emisor | Genera el XML (Extensible Markup Language), lo valida y lo sella con su CSD |
| **Timbrado** | PAC, SAT | El PAC recibe, valida y timbra: incorpora el sello del SAT y asigna el folio fiscal único (UUID, Universally Unique Identifier) |
| **Recepción y validación** | Receptor, SAT | El receptor recibe, valida y consulta la vigencia ante el SAT |
| **Cancelación** | Emisor, Receptor, SAT | El emisor solicita la cancelación con un motivo; según el caso, el receptor la acepta o la rechaza |
| **Sustitución** | Emisor, SAT | Cancelación que reemplaza: se emite un comprobante nuevo y se relaciona con el anulado |
| **Pagos** | Emisor, PAC, Receptor | Por cada pago de un comprobante PPD se emite un tipo Pago con su complemento |
| **Egreso** | Emisor, Receptor | Devoluciones, descuentos o bonificaciones, sin cancelar el comprobante de Ingreso |
| **Conservación** | Emisor, Receptor | Cada parte resguarda el XML y su representación impresa durante el plazo legal [\[6\]](#ref-6) |
| **Consulta de vigencia** | Cualquiera, SAT | Verificar si el comprobante sigue vigente o fue cancelado |

Una regla de orden que vale memorizar: **se valida antes de sellar, y se valida después de recibir**. Por eso la validación aparece varias veces —la hace el emisor, luego el PAC, luego el receptor— y el sellado ocurre dos veces: el del emisor en la emisión y el del SAT en el timbrado.

Al emitirse, el comprobante puede cargar dos tipos de extensión, y no hay que confundirlos:

- Un **complemento** es una extensión **fiscal**: información que le interesa al SAT. Está **regulado** —entra en las reglas de cumplimiento— y por eso **se sella junto con el comprobante** [\[1\]](#ref-1): nómina, comercio exterior, carta porte, entre otros. (El de pagos es la excepción: viaja en su propio comprobante tipo Pago, no dentro del original [\[3\]](#ref-3).)
- Una **addenda** es una extensión **para el usuario**: información que solo les sirve a las partes (emisor y receptor), **no al SAT**. No es normativa y **no se sella**; es el mecanismo para sumarle al CFDI datos **no regulados** (común en el comercio detallista) [\[1\]](#ref-1).

Cancelar un CFDI requiere un motivo de un **catálogo cerrado** [\[4\]](#ref-4) y, según el caso, la **aceptación del receptor** [\[5\]](#ref-5):

| Clave | Motivo |
|---|---|
| 01 | Comprobante emitido con errores con relación (la sustitución) |
| 02 | Comprobante emitido con errores sin relación |
| 03 | No se llevó a cabo la operación |
| 04 | Operación nominativa relacionada en una factura global |

### Escenarios generales

En la práctica los procesos se encadenan. Los siguientes son **idealizados** —cubren el grueso de los casos— y están contados desde sus actores. Los cuatro arrancan igual —el emisor sella, el PAC timbra en nombre del SAT, el receptor valida— y de ahí cada uno toma su rumbo:

1. **Emisión y cancelación.** Una mueblería le factura un comedor a un cliente y el comprobante se timbra sin problema. Al día siguiente el cliente cancela el pedido antes de recogerlo: la operación no se llevó a cabo. Como ya no hay venta que amparar, la mueblería cancela el CFDI con ese motivo —no hay nada que reemplazar— y el SAT marca el folio como cancelado.

2. **Cancelación con sustitución.** Otra venta que se timbra sin problema —RFC, estructura y sellos válidos—, pero días después detectan que el comedor se clasificó con la clave de “equipo de cómputo” en lugar de la de mueble: pasó todas las validaciones automáticas (es una clave válida), pero está mal. La mueblería emite un comprobante nuevo y correcto y cancela el original relacionándolo (motivo 01). El cliente se queda con el sustituto; el SAT ve la liga entre los dos folios.

3. **Venta a plazos (pagos).** La mueblería vende una sala a meses sin intereses (esquema PPD). Cada vez que el cliente paga una mensualidad, la mueblería emite un Recibo Electrónico de Pago (REP) —que el PAC vuelve a timbrar— hasta saldar. El SAT ve la deuda original y cada abono.

4. **Egreso (nota de crédito).** El cliente compró un librero y a la semana devuelve un entrepaño defectuoso. La venta original (tipo Ingreso) sigue válida; para reflejar la devolución, la mueblería emite una nota de crédito (tipo Egreso), la timbra y la relaciona con la factura de Ingreso —sin cancelarla—. El SAT ve el monto restado.

La conservación y la consulta de vigencia no entran en estas cadenas: son transversales —pueden aparecer en cualquier escenario, o en ninguno como paso explícito—. Y hay casos más específicos —los que cargan complementos (nómina, comercio exterior, carta porte…) o una addenda— que combinan estos mismos procesos con piezas extra; quedan fuera del alcance de este panorama y tendrán su propia entrega.

## Cómo se percibe: el estado es relativo al lente

Hasta aquí he consolidado hechos; lo que sigue es **mi lectura** —la que fui armando al trabajar con equipos multidisciplinarios, del lado de quien construye estos sistemas y del de quien los usa, cada uno de los cuales aprecia el CFDI desde su propia perspectiva—: **el CFDI no tiene un estado; tiene tantos como lentes lo miren.** El "estado" no es una propiedad del documento —el XML no cambia—, sino de la **perspectiva** desde la que se le observa. Un mismo comprobante puede estar, a la vez, vigente para el SAT, cobrado para el emisor y aún por conciliar en contabilidad: cada lente lo registra en el estado que le importa, sin contradecir a los demás.

| Lente | Quién lo vive | Su estado del documento |
|---|---|---|
| Fiscal / CTC (control continuo de transacciones) | El SAT | por emitir → timbrado → vigente → cancelado |
| Negocio, lado emisor | El emisor | borrador → emitido → cobrado; o cancelado / sustituido |
| Negocio, lado receptor | El comprador | esperado (por orden de compra) → recibido → validado → conciliado → pagado |
| Documental | Los sistemas | generado → sellado → timbrado → distribuido → almacenado |
| Contable | Contabilidad | reconocido → conciliado → cerrado en el periodo |
| Tesorería | Finanzas | por cobrar o por pagar → pagado → saldado |
| Legal | Las partes y terceros | válido y oponible → impugnable → firme |
| Cumplimiento | El SAT y el contribuyente | emitido → cruzado (emisor contra receptor) → consistente o inconsistente |

No hay que forzar un consenso entre estas **visiones**: basta con **declarar la perspectiva** y los estados quedan definidos. Ninguna es la correcta y las demás equivocadas; todas describen **el mismo CFDI**, cada una desde donde le toca mirarlo.

## Lo que sigue

Este es el esbozo del ciclo completo. Las próximas entregas recorren cada proceso por separado —la emisión y qué es realmente un XML; el timbrado y cómo se sella electrónicamente un documento; la recepción y validación; la cancelación y la sustitución; los pagos; los egresos—. Cada una exige una inmersión técnica más profunda, pero el tema se introducirá de forma accesible para cualquier lector, con o sin formación técnica.

## Notas

<span id="nota-a">[a]</span> Diferencial de diseño: el CFDI concentra los cinco tipos en una sola estructura XML (los distingue el campo `TipoDeComprobante`) [\[1\]](#ref-1), mientras que otros regímenes de control continuo —como el de Brasil— definen esquemas separados por tipo de documento (NF-e para bienes, NFS-e para servicios, CT-e para transporte). México unificó en un estándar; otros repartieron. Unificar simplifica mucho el diseño y el procesamiento: un solo validador, parser y modelo de datos sirven para los cinco tipos.

<span id="nota-b">[b]</span> La salvedad: una nota de crédito —devoluciones, descuentos o bonificaciones— es tipo Egreso, no Ingreso [\[1\]](#ref-1); aun así, coloquial o informalmente se le nombra “factura” (de egreso). De ahí el “casi siempre”: es lo que se llama factura sin amparar una venta.

<span id="nota-c">[c]</span> En la práctica esa validación es sobre todo cosa del receptor persona moral, cuyos sistemas de recepción revisan cada comprobante de forma automática (estructura, sellos, vigencia). El receptor persona física rara vez tiene esos sistemas; si valida, suele hacerlo a mano en el portal del SAT, capturando el folio fiscal (UUID) y los RFC del emisor y del receptor —más un captcha—, para que el servicio le confirme si el comprobante está registrado y vigente [\[7\]](#ref-7).
