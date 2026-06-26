---
title: "El ciclo de vida del CFDI 4.0: tipos, actores, procesos y estados"
seoTitle: "Ciclo de vida del CFDI 4.0: tipos, actores y procesos"
description: "Anatomía del proceso del CFDI 4.0: los cinco tipos de comprobante, los cuatro actores que lo manejan, los procesos por los que pasa y por qué su estado es relativo al lente que lo observa."
pubDate: 2026-06-30T21:00:00-06:00
draft: true
lang: es
tags: ["CFDI", "facturación electrónica", "SAT", "CTC", "México"]
entities: ["cfdi", "sat", "factura-electronica"]
faq:
  - q: "¿Cuántos tipos de CFDI existen?"
    a: "Cinco: Ingreso (I), Egreso (E), Traslado (T), Nómina (N) y Pago (P). El tipo determina para qué sirve el comprobante y qué procesos le aplican; está definido en el catálogo c_TipoDeComprobante del Anexo 20 del SAT."
  - q: "¿Qué diferencia hay entre la emisión y el timbrado de un CFDI?"
    a: "La emisión es cuando el emisor genera el comprobante, lo valida y lo sella con su Certificado de Sello Digital (CSD). El timbrado es cuando un Proveedor Autorizado de Certificación (PAC) lo recibe, lo valida e incorpora el sello del SAT y el folio fiscal único (UUID). Son dos procesos y dos actores distintos."
  - q: "¿Qué es un PAC?"
    a: "Un Proveedor Autorizado de Certificación: el tercero autorizado por el SAT que recibe el comprobante del emisor, lo valida y lo timbra en nombre de la autoridad. En la práctica funciona como un receptor del documento."
  - q: "¿Cuál es la diferencia entre un complemento y una addenda?"
    a: "El complemento es información fiscal y sellada que se incorpora al comprobante y entra en la cadena que se sella (nómina, comercio exterior, carta porte, entre otros). La addenda es información no fiscal y privada entre las partes; el SAT no la sella ni la valida y vive fuera del estándar fiscal."
  - q: "¿Qué es la sustitución de un CFDI?"
    a: "Es la cancelación con el motivo 01 (comprobante emitido con errores con relación): se emite un comprobante nuevo y correcto y se relaciona con el anulado a través de su folio fiscal. Primero se emite el sustituto y luego se cancela el original."
  - q: "¿Cuántos motivos de cancelación de CFDI hay?"
    a: "Cuatro, con claves 01 a 04: 01, comprobante con errores con relación (la sustitución); 02, con errores sin relación; 03, no se llevó a cabo la operación; y 04, operación nominativa relacionada en una factura global."
  - q: "¿El CFDI tiene un solo estado?"
    a: "No. Su estado es relativo a quién lo observe: para el SAT es vigente o cancelado; para el negocio puede estar emitido, cobrado o sustituido; para contabilidad, conciliado o cerrado en el periodo. El único punto donde todas las perspectivas coinciden es el timbrado."
---

En la entrega anterior reconstruimos [la evolución histórica](https://migueldiazmacedo.com/fiscal/cfdi-evolucion/) de la facturación electrónica en México, del comprobante en papel al CFDI 4.0. Cerrada esa revisión histórica, esta serie cambia de eje: del "cómo llegamos aquí" al "cómo funciona hoy". A partir de aquí revisamos la facturación electrónica actual —el Comprobante Fiscal Digital por Internet (CFDI) en su versión 4.0 y sus complementos— vista desde el documento mismo: qué tipos existen, quién lo maneja, por qué procesos pasa y por qué su estado es relativo a quién lo observe.

Este texto es el mapa. Cada proceso que aquí se describe a grandes rasgos tendrá después su propia entrega a detalle.

## Qué es: los cinco tipos de comprobante

Hablar del "CFDI" en singular esconde que no es un documento, sino una familia. El Servicio de Administración Tributaria (SAT) distingue cinco tipos de comprobante [\[1\]](#ref-1), y el tipo es la primera coordenada para entender cualquier CFDI: dice para qué sirve y qué procesos le aplican.

| Tipo | Clave | Para qué sirve |
|---|---|---|
| Ingreso | I | Ventas, honorarios, ingresos |
| Egreso | E | Notas de crédito: devoluciones, descuentos, bonificaciones |
| Traslado | T | Movimiento o posesión de mercancía sin venta (con Carta Porte) |
| Nómina | N | Sueldos y asimilados (complemento de nómina) |
| Pago | P | Recibo Electrónico de Pago (REP) para el esquema de Pago en Parcialidades o Diferido (PPD) |

Lo que coloquialmente se llama "factura" es casi siempre el tipo Ingreso. Los otros cuatro cubren las correcciones de monto (Egreso), el movimiento de mercancía (Traslado), el pago de sueldos (Nómina) y el acuse de cada pago recibido (Pago).

## Quién lo maneja: cuatro actores

Un CFDI no lo produce una sola parte. En su vida intervienen cuatro actores, y conviene tenerlos claros antes de seguir, porque cada proceso es, en el fondo, uno o varios de ellos actuando sobre el documento.

- **Emisor** — genera el comprobante, lo valida y lo sella con su Certificado de Sello Digital (CSD).
- **PAC (Proveedor Autorizado de Certificación)** — recibe el comprobante del emisor, lo valida y lo timbra en nombre del SAT [\[2\]](#ref-2). Visto así, el PAC es también un receptor del documento.
- **SAT** — la autoridad: su sello se incorpora en el timbrado y el PAC le reporta cada operación.
- **Receptor** — el destinatario final: recibe el comprobante y lo valida antes de usarlo.

Hay un patrón que se repite en todos: quien toma custodia del documento recibe, valida, sella y entrega, según le toque. Y dentro de ese patrón, una regla de orden que vale memorizar: **se valida antes de sellar, y se valida después de recibir**. Por eso la validación aparece varias veces a lo largo de la vida del CFDI —la hace el emisor, luego el PAC, luego el receptor— y el sellado dos: el sello del emisor y el del SAT.

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

Dos aclaraciones sobre la emisión, porque es ahí donde el comprobante "carga" lo que lo extiende, y conviene no confundir dos cosas que viajan juntas pero son distintas:

- Un **complemento** es un bloque fiscal y sellado que se incorpora al comprobante y entra en la cadena que se sella [\[1\]](#ref-1) —nómina, comercio exterior, carta porte, entre otros—. Cada uno tiene su propio anexo técnico y su versión. El complemento de pagos es el caso especial: no se adjunta al comprobante original, sino que viaja en su propio comprobante tipo Pago [\[3\]](#ref-3).
- Una **addenda** es un nodo no fiscal con información privada entre las partes, frecuente en el comercio detallista. El SAT no la sella ni la valida; vive fuera del estándar fiscal [\[1\]](#ref-1).

Y sobre la cancelación: no es un botón. El emisor debe indicar un motivo de un catálogo cerrado [\[4\]](#ref-4), y según el caso necesita que el receptor la acepte [\[5\]](#ref-5).

| Clave | Motivo |
|---|---|
| 01 | Comprobante emitido con errores con relación (la sustitución) |
| 02 | Comprobante emitido con errores sin relación |
| 03 | No se llevó a cabo la operación |
| 04 | Operación nominativa relacionada en una factura global |

## Cómo se percibe: el estado es relativo al lente

Aquí está el punto que más confunde si se pregunta mal. La pregunta "¿en qué estado está el CFDI?" no tiene una respuesta única, porque el estado depende de quién observa. El mismo XML corre varios relojes a la vez.

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

No hay que forzar un consenso entre estas máquinas: hay que **declarar la perspectiva**, y entonces los estados quedan definidos. El único punto donde todas coinciden es el **timbrado**: antes de él, el documento no existe para nadie; después, cada lente arranca su propia secuencia.

## Lo que sigue

Este fue el mapa. Las próximas entregas recorren cada proceso por separado —la emisión y qué es realmente un XML; el timbrado y cómo se sella electrónicamente un documento; la recepción y validación; la cancelación y la sustitución; los pagos; los egresos— con el detalle que aquí apenas se esbozó.

---

## Referencias

<span id="ref-1">[1]</span> SAT, Anexo 20 — Guía de llenado de los Comprobantes Fiscales Digitales por Internet (CFDI) versión 4.0. Estructura del comprobante, catálogo de tipos (c_TipoDeComprobante: I, E, T, N, P), complementos y nodo Addenda. http://omawww.sat.gob.mx/tramitesyservicios/Paginas/documentos/Anexo_20_Guia_de_llenado_CFDI.pdf

<span id="ref-2">[2]</span> Código Fiscal de la Federación, arts. 29 y 29-A. Emisión del CFDI y certificación por un Proveedor Autorizado de Certificación (PAC): validación, folio fiscal e incorporación del sello del SAT. https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf

<span id="ref-3">[3]</span> SAT, Complemento para recepción de pagos (Recibo Electrónico de Pago, REP). Obligatorio en el esquema de Pago en Parcialidades o Diferido (PPD); versión 2.0 vigente para CFDI 4.0. https://www.sat.gob.mx/consultas/92764/comprobante-de-recepcion-de-pagos

<span id="ref-4">[4]</span> SAT, Servicio de cancelación de facturas. Catálogo de motivos de cancelación (01 a 04) y esquema de cancelación con aceptación del receptor. http://omawww.sat.gob.mx/factura/Paginas/documentos/cancelacion/servicio_cancelacion.pdf

<span id="ref-5">[5]</span> Resolución Miscelánea Fiscal, regla 2.7.1.39 (renumerada 2.7.1.35 en versiones recientes). Cancelación sin aceptación del receptor en comprobantes de hasta $1,000 y otros supuestos, con sus excepciones. https://www.sat.gob.mx/articulo/62770/regla-2.7.1.39

<span id="ref-6">[6]</span> Código Fiscal de la Federación, art. 30. Conservación de la contabilidad y la documentación —incluidos los CFDI— por cinco años. https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf
