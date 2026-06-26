---
title: "CFDI: cómo México convirtió la factura en un proceso de control en tiempo real (2004–2023)"
seoTitle: "CFDI: evolución del control fiscal en México (2004–2023)"
description: "Entre 2004 y 2023, México llevó la factura en papel hacia una transacción electrónica que el SAT valida antes de que tenga efectos. Reconstrucción histórica de cómo se construyó ese modelo, esquema por esquema, con fundamento en el DOF."
pubDate: 2026-06-24T21:00:00-06:00
cover: /covers/cfdi-evolucion.png
coverAlt: "Línea de tiempo de la evolución del CFDI en México: 2004 (CFD), 2011 (CFDI con PAC), 2017 (CFDI 3.3) y 2023 (CFDI 4.0)."
lang: es
tags: ["CFDI", "facturación electrónica", "SAT", "CTC", "México"]
entities: ["cfdi", "sat", "factura-electronica"]
glossary: ["cfd", "cfdi", "sat", "pac", "csd", "e-firma", "sello-digital", "timbrado", "uuid", "anexo-20", "rmf", "dof", "complemento", "rep", "ctc", "factura-electronica"]
citations:
  - text: 'Trayectoria general de la facturación electrónica en México (cronología de versiones y obligatoriedad). Síntesis de fuentes secundarias del sector; cada hito específico se verifica contra el DOF en las referencias siguientes.'
    urls: []
  - text: 'Decreto de reformas al Código Fiscal de la Federación, DOF 05/01/2004. Régimen de documentos digitales, sello digital y firma electrónica avanzada (CFF, arts. 17-C a 17-J).'
    urls: ['https://dof.gob.mx/nota_detalle.php?codigo=676424&fecha=05/01/2004']
  - text: 'Anexo 20 de la Resolución Miscelánea Fiscal para 2004, DOF. Primer estándar técnico del comprobante fiscal digital (estructura XML, codificación, sello digital en Base64).'
    urls: ['https://dof.gob.mx/nota_detalle_popup.php?codigo=671350']
  - text: 'SAT, Manual de Usuario de la Aplicación: Solicitud de Certificado Digital (SOLCEDI). Generación local del par de llaves y del requerimiento (.req/.sdg) para FIEL y CSD. Y SAT, "Consulta folios y envía reportes mensuales de comprobantes fiscales digitales (CFD)" (esquema SICOFI; reporte mensual obligatorio bajo el modelo CFD).'
    urls: ['http://omawww.sat.gob.mx/informacion_fiscal/factura_electronica/Documents/cfdi/Manual_SOLCEDI.pdf', 'https://www.sat.gob.mx/aplicacion/45174/consulta-folios-y-envia-reportes-mensuales-de-comprobantes-fiscales-digitales']
  - text: 'Diferencias operativas entre CFD y CFDI (solicitud de folios/series y reporte mensual obligatorio en CFD frente a timbrado por PAC en CFDI). Documentación técnica del esquema CFD hacia 2010.'
    urls: []
  - text: 'Decreto por el que se reforman, adicionan y derogan diversas disposiciones de las Leyes del Impuesto sobre la Renta, del Impuesto a los Depósitos en Efectivo y del Impuesto al Valor Agregado, del Código Fiscal de la Federación y del Decreto por el que se establecen las obligaciones que podrán denominarse en Unidades de Inversión, DOF 07/12/2009. Reforma los artículos 29 a 29-D del CFF y establece el Comprobante Fiscal Digital por Internet (CFDI) certificado por proveedor autorizado; las reformas a los artículos 29 y 29-A entran en vigor el 1 de enero de 2011.'
    urls: ['https://www.dof.gob.mx/nota_detalle.php?codigo=5123035&fecha=07/12/2009']
  - text: 'Código Fiscal de la Federación, arts. 29 y 29-A. Certificación por proveedor autorizado (PAC): validación, asignación de folio fiscal (UUID) e incorporación del sello digital del SAT.'
    urls: []
  - text: 'Comprobantes fiscales impresos con Código de Barras Bidimensional (CBB): aplicable a contribuyentes con ingresos anuales hasta $4,000,000; folios y CBB asignados por el SAT, impresión por medios propios. Fundamento: art. 29-B, fracción I del CFF y Regla I.2.8.1.1 de la RMF 2012; en 2011, arts. 29 y 29-A, fracción VIII del CFF y Regla I.2.9.3.3 de la RMF 2011. El CBB carece de las propiedades de autenticidad, integridad y no repudio del comprobante electrónico sellado.'
    urls: []
  - text: 'Resolución Miscelánea Fiscal para 2014, DOF 30/12/2013. Obligatoriedad general del CFDI desde 2014 —con facilidad de migración para contribuyentes de menores ingresos hasta el 31/03/2014— e incorporación del recibo de nómina al esquema CFDI.'
    urls: ['https://dof.gob.mx/nota_detalle.php?codigo=5328461&fecha=30/12/2013']
  - text: 'Entrada en vigor del CFDI 4.0 (01/01/2022 opcional) y obligatoriedad a partir del 01/04/2023, tras prórrogas del periodo de convivencia con la 3.3 (confirmada en la RMF 2023, DOF 27/12/2022). Especificación técnica: Anexo 20 versión 4.0, DOF 13/01/2022.'
    urls: ['https://www.dof.gob.mx/nota_detalle.php?codigo=5640565&fecha=13/01/2022', 'https://www.dof.gob.mx/nota_detalle_popup.php?codigo=5710350']
  - text: 'Anexo 20 de la Segunda Resolución de Modificaciones a la RMF para 2017, DOF 28/07/2017. Estándar de la versión 3.3 (catálogos, validaciones, complemento de pagos).'
    urls: ['https://dof.gob.mx/nota_detalle.php?codigo=5492254&fecha=28/07/2017']
  - text: 'Complemento para Recepción de Pagos y su obligatoriedad a partir del 01/09/2018 (resoluciones de modificación a la RMF 2017 y disposiciones relacionadas).'
    urls: []
  - text: 'Código Fiscal de la Federación, art. 29-A (cancelación con aceptación del receptor); reglas de la RMF aplicables.'
    urls: []
  - text: 'Sobre la disputa en la numeración de versiones (fuentes secundarias en contradicción): distintos sitios de divulgación etiquetan de forma incompatible las versiones tempranas (CFD 2005 como "1.0", CFDI 2010 como "2.0", la 3.2 como "primera versión en línea") y confunden publicación con obligatoriedad. Fuente primaria recomendada para fijar versión y vigencia: el Anexo 20 publicado en el DOF para cada periodo.'
    urls: ['http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm']
  - text: 'Catálogo de complementos del CFDI y sus versiones. SAT, "Complementos de factura". Cada complemento tiene su propio anexo técnico; las versiones cambian de forma independiente y deben verificarse contra el portal del SAT antes de usarse.'
    urls: ['https://www.sat.gob.mx/minisitio/Factura/emite_complementosdefactura.htm']
citationsNote: 'Los enlaces al DOF de [2], [3], [4], [6], [9], [10] y [11] están verificados.'
faq:
  - q: "¿Cuándo nació el CFDI?"
    a: "El CFDI (Comprobante Fiscal Digital por Internet) entró en vigor el 1 de enero de 2011. Su base legal es la reforma al Código Fiscal de la Federación publicada en el DOF el 7 de diciembre de 2009, que obliga a que un proveedor autorizado de certificación (PAC) valide y selle cada comprobante antes de que tenga efectos fiscales. No nació en 2004 ni en 2005: eso fue el CFD, su antecesor."
  - q: "¿Existió el CFDI 1.0 o el CFDI 2.0?"
    a: "No. Las versiones tempranas 1.0, 2.0 y 2.2 pertenecen al CFD, el esquema anterior. El CFDI inició en la versión 3.0 hacia 2010-2011 y siguió con 3.2, 3.3 (2017) y 4.0 (2022). Muchas cronologías de divulgación confunden ambos sistemas; la única fuente confiable de la versión y su vigencia es el Anexo 20 publicado en el DOF para cada periodo."
  - q: "¿Cuál es la diferencia entre CFD y CFDI?"
    a: "En el CFD (2004-2010) el contribuyente sellaba el comprobante con su propio certificado y lo reportaba al SAT después, en un reporte mensual. En el CFDI (desde 2011) un tercero autorizado (PAC) valida y sella cada comprobante en el momento de emitirlo, antes de que tenga efectos. El cambio de fondo es cuándo ocurre el control: pasa de posterior a en tiempo real."
  - q: "¿Cuándo fue obligatorio el CFDI 4.0?"
    a: "El CFDI 4.0 entró en vigor de forma opcional el 1 de enero de 2022 y fue obligatorio de manera general a partir del 1 de abril de 2023, tras varias prórrogas del periodo de convivencia con la versión 3.3. La obligatoriedad final se confirma en la RMF 2023, publicada en el DOF el 27 de diciembre de 2022."
  - q: "¿Qué cambió con el CFDI 4.0?"
    a: "El CFDI 4.0 exige que el nombre, el régimen fiscal y el código postal del receptor coincidan exactamente con su constancia de situación fiscal ante el SAT, endurece la cancelación con un catálogo de motivos y refuerza la materialidad. Eso permite al SAT cruzar emisor contra receptor de forma automática en el momento del timbrado."
  - q: "¿Qué es el Anexo 20?"
    a: "El Anexo 20 es el estándar técnico que define la estructura XML del comprobante, primero del CFD y luego del CFDI. Se publica en el DOF y es la referencia oficial de cada versión: por ejemplo, el Anexo 20 de la versión 3.3 se publicó el 28 de julio de 2017 y el de la versión 4.0 el 13 de enero de 2022."
  - q: "¿Qué son los complementos del CFDI?"
    a: "Los complementos son bloques de información que se incorporan al comprobante para sectores u operaciones específicas, como nómina, comercio exterior, combustibles, recepción de pagos o carta porte. Cada complemento tiene su propio anexo técnico y su propia versión, que evoluciona de forma independiente al CFDI base; por eso la mayoría sobrevivió el salto de 3.3 a 4.0 sin cambiar."
---

Entre 2004 y 2023, la factura en México pasó de ser un papel impreso en un establecimiento autorizado a ser una transacción que un tercero valida ante el Servicio de Administración Tributaria (SAT) en el instante mismo de emitirse. En esas casi dos décadas el país construyó, pieza por pieza, uno de los esquemas de control continuo de transacciones (CTC, *continuous transaction controls*) más antiguos del mundo. Este texto reconstruye esa evolución —los sucesivos esquemas de comprobación, las versiones del Comprobante Fiscal Digital por Internet (CFDI) y los complementos que lo extendieron— con un mismo criterio en cada etapa: qué introdujo, con qué fundamento normativo, y qué problema de fiscalización resolvía.

El criterio de orden es cronológico y cada afirmación se referencia a su publicación en el Diario Oficial de la Federación (DOF) o al ordenamiento aplicable. Las referencias van numeradas al final.

## Antecedente: facturación en papel

Antes de 2004 el comprobante fiscal se imprimía en establecimientos autorizados por la Secretaría de Hacienda —el esquema de impresor autorizado—, con folios controlados y conservación obligatoria de cinco años. El control era posterior: la autoridad verificaba mediante revisión documental, sin visibilidad sobre la operación en el momento de ocurrir. Este esquema facilitaba la emisión de comprobantes apócrifos y la deducción de operaciones inexistentes, problema que el propio SAT identificó como motivación del cambio de modelo [\[1\]](#ref-1).

## CFD (2004–2010): comprobante digital sin certificación de la autoridad

La base legal se establece con la reforma al Código Fiscal de la Federación (CFF) publicada en el DOF el 5 de enero de 2004, que incorpora el régimen de documentos digitales, el sello digital y la firma electrónica avanzada (FIEL) como medios de autenticación con efectos fiscales (CFF, arts. 17-C a 17-J) [\[2\]](#ref-2). La primera especificación técnica del Comprobante Fiscal Digital (CFD) es el Anexo 20 de la Resolución Miscelánea Fiscal (RMF) para 2004, que define el estándar XML (*Extensible Markup Language*), el uso de la codificación UTF-8, la estructura de nodos emisor/receptor y el sello digital en Base64 [\[3\]](#ref-3).

La emisión real inicia en 2005 con el esquema 1.0, de uso opcional [\[1\]](#ref-1).

El proceso involucraba dos herramientas distintas, y conviene no confundirlas. La primera era SOLCEDI (Solicitud de Certificado Digital), una aplicación de escritorio que el SAT ponía a disposición para descargar y ejecutar localmente [\[4\]](#ref-4)[\[5\]](#ref-5). SOLCEDI servía para una sola función: generar las credenciales criptográficas. Creaba en el propio equipo del contribuyente el par de llaves —pública y privada— y construía el archivo de requerimiento (.req, luego ensobretado en .sdg) que se enviaba al SAT para obtener la FIEL y, con ella, el Certificado de Sello Digital (CSD) [\[4\]](#ref-4). El punto técnico relevante: la generación de las llaves ocurría del lado del contribuyente y la clave privada nunca salía de su equipo; el SAT solo recibía el requerimiento y emitía el certificado.

Pero SOLCEDI no emitía facturas. Una vez obtenidos la FIEL y el CSD, su trabajo terminaba. Para emitir comprobantes se necesitaba la segunda herramienta: un software de facturación, que el contribuyente desarrollaba, compraba o rentaba, y que el SAT no proporcionaba. Ese software era el que, en cada operación, generaba el archivo XML conforme al Anexo 20, le aplicaba el sello digital usando el CSD y resguardaba el comprobante [\[5\]](#ref-5). La distinción es simple: SOLCEDI tramitaba el sello (uso ocasional, al obtener o renovar certificados); el software de facturación lo estampaba en cada documento (uso diario). Tener las credenciales no bastaba para facturar, igual que tener un sello oficial no equivale a tener con qué estamparlo.

La autoridad no intervenía al emitir cada comprobante. El control se ejercía después, mediante un mecanismo obligatorio: un reporte mensual de los comprobantes emitidos —incluidos los cancelados—, firmado con la FIEL y enviado al SAT dentro de los primeros días del mes siguiente a través del portal [\[4\]](#ref-4)[\[5\]](#ref-5). El SAT recibía la información en lote, ya ocurridas las operaciones, no comprobante por comprobante en el momento. Lo que cambió respecto al papel fue el soporte del comprobante y el medio de reporte, no el modelo de fiscalización: el control seguía siendo posterior.

Hacia el final de su vigencia el esquema admitió una variante: el contribuyente podía emitir CFD a través de un tercero, el PACFD (Proveedor Autorizado de Comprobantes Fiscales Digitales), en lugar de hacerlo enteramente por su cuenta. El PACFD es el antecesor directo del Proveedor Autorizado de Certificación (PAC) que llegaría con el CFDI, pero con una diferencia esencial: no certificaba la operación en el momento de emitirla. El modelo de control seguía siendo posterior, por reporte.

Con todo, la operación seguía siendo local: el contribuyente generaba y sellaba el comprobante por su cuenta, con sus propias credenciales, sin que ningún tercero tuviera que aprobarlo en el momento de emitirlo para que fuera válido [\[3\]](#ref-3).

Vale la pena fijar la decisión de fondo, porque la siguiente versión la invierte. En el esquema CFD todo ocurría del lado del contribuyente: generaba sus propias credenciales en su equipo, sellaba cada comprobante con un certificado propio y lo reportaba al SAT al mes siguiente. Ese diseño deja la validación en manos de quien tiene el incentivo para evadir: el emisor sella los comprobantes que decide y el SAT solo se entera al recibir el reporte del mes siguiente, cuando la operación ya ocurrió y el comprobante ya surtió efectos. No hay forma de impedir un comprobante apócrifo en el momento de emitirlo, ni de garantizar que lo reportado coincida con lo realmente emitido. Por eso lo que faltaba era un tercero que validara la operación en el momento de emitirla, independiente del emisor y previo a que el comprobante tuviera efectos. Esa limitación es la que llevó a rediseñar el esquema por completo: el CFDI movió la validación al instante mismo de la emisión y la puso en manos de un actor externo y obligatorio. Ese giro es el que da forma al modelo que sigue vigente.

## CFDI (2010–2011): la autoridad entra al flujo mediante el PAC

El 7 de diciembre de 2009 se publica en el DOF la reforma al CFF que establece el CFDI y fija la entrada en vigor de las reformas a los artículos 29 y 29-A a partir del 1 de enero de 2011; durante 2010 el SAT oficializa el detalle técnico con el Anexo 20 correspondiente [\[6\]](#ref-6).

La pieza que define el modelo es el PAC. El artículo 29 del CFF establece que el contribuyente debe remitir el comprobante a un PAC autorizado por el SAT para que valide, asigne un folio fiscal único (UUID, *Universally Unique Identifier*) e incorpore el sello digital del SAT antes de que el comprobante tenga efectos fiscales [\[7\]](#ref-7). Sin ese timbrado, el comprobante no existe para la autoridad.

Esto cambia el momento en que la autoridad ejerce el control. En el esquema CFD, el SAT veía la operación después de ocurrida, a través del reporte mensual en lote; con el CFDI, la validación ocurre en el instante de la emisión, antes de que el comprobante exista para efectos fiscales. La autoridad, a través de los certificadores (PAC), queda insertada en el flujo mismo de la operación. En la práctica, esto quiere decir que ya no se puede facturar sin la intervención del PAC: si el certificador no está disponible o no responde a tiempo, la factura no puede emitirse. Emitir, que antes dependía solo del contribuyente, pasa a depender también de un tercero. En conjunto, emitir una factura deja de ser algo que el contribuyente hace por su cuenta y se vuelve un intercambio en el que participan tres partes —emisor, PAC y SAT— y la información va y regresa:

De ida: emisor → PAC → SAT, para validar y timbrar el comprobante.
De vuelta: SAT → PAC → emisor, ya con el sello del SAT que lo hace válido.

En esta transición el SAT abrió además un esquema nuevo para los contribuyentes más pequeños: el CBB (Código de Barras Bidimensional), una opción para quienes tenían ingresos anuales de hasta cuatro millones de pesos. Consistía en una factura impresa con un código bidimensional que el SAT entregaba al asignar un rango de folios, imprimible con recursos propios sin pasar por un impresor autorizado [\[8\]](#ref-8). El matiz importa: el CBB no era factura electrónica, sino papel con un dispositivo de seguridad; no tenía las propiedades de autenticidad, integridad y no repudio que da el XML sellado [\[8\]](#ref-8).

El resultado fue que hacia 2011 coexistían cuatro esquemas de comprobación: el impresor autorizado heredado del modelo en papel, el CFD (con su variante vía PACFD), el CBB y el propio CFDI. Esa fragmentación era justamente el obstáculo para un control continuo: mientras hubiera rutas alternativas, el SAT conservaba puntos ciegos. La etapa siguiente consiste, esencialmente, en eliminarlos uno a uno hasta dejar al CFDI como esquema único.

## Obligatoriedad y fin del papel (2012–2014)

Esta es la etapa en que el SAT ejecuta el cierre anunciado. 2012 es el último ejercicio en que se permiten facturas impresas [\[1\]](#ref-1). Entre 2012 y 2014 se retiran sucesivamente el comprobante de impresor autorizado, el CFD y el CBB, hasta que a partir de 2014 el CFDI queda como esquema obligatorio para la generalidad de los contribuyentes. En ese mismo periodo se incorpora el recibo de nómina al esquema CFDI, extendiendo el control a las percepciones laborales [\[1\]](#ref-1)[\[9\]](#ref-9).

Con esto el SAT alcanza lo que buscaba desde el inicio: una vista transaccional única y completa de la actividad económica formal, sin las rutas paralelas que antes dejaban puntos ciegos.

## Nota sobre las versiones: una numeración en disputa

Antes de seguir conviene una advertencia, porque la numeración de versiones del CFDI es una de las áreas donde las fuentes secundarias se contradicen con más frecuencia, y conviene no tomar ninguna como definitiva sin contrastarla.

La secuencia más defendible es que el CFDI continuó la numeración heredada del CFD en lugar de reiniciarla: el CFD tuvo versiones tempranas (1.0, 2.0, 2.2) y el CFDI arrancó en 3.0 hacia 2010–2011, para pasar luego a 3.2, después a 3.3 (2017) y finalmente a 4.0 (2022) [\[10\]](#ref-10). Bajo esta lectura, no existió un "CFDI 1.0" ni un "CFDI 2.0" propiamente dichos: esas versiones pertenecen al esquema CFD anterior.

El problema es que muchas cronologías mezclan ambos esquemas. Algunas fuentes etiquetan como "versión 1.0" al CFD de 2005 y como "versión 2.0" al CFDI de 2010, fundiendo la genealogía de los dos sistemas en una sola lista [\[10\]](#ref-10). Otras afirman que la 3.2 "fue la primera versión para facturar en línea", lo que contradice tanto a las que sitúan el inicio en 3.0 como a las que lo sitúan antes [\[10\]](#ref-10). Hay además discrepancia sobre fechas de obligatoriedad: para la 3.3, unas fuentes señalan julio de 2017 (publicación) y otras enero de 2018 (obligatoriedad efectiva), que son hitos distintos confundidos como uno solo [\[10\]](#ref-10).

La lección práctica es directa: la única fuente confiable de la versión y su vigencia es el Anexo 20 publicado en el DOF para cada periodo, no las cronologías de divulgación. En este texto se usa la secuencia CFD (1.0–2.2) → CFDI (3.0, 3.2, 3.3, 4.0) por ser la más consistente con los Anexos 20, y se marca como aproximada cualquier frontera que las fuentes no permitan fijar con certeza.

## CFDI 3.3 (2017): estandarización y validación de datos

La versión 3.3 es una reescritura del estándar técnico. Su Anexo 20 se publica en el DOF el 28 de julio de 2017 [\[11\]](#ref-11), y la convivencia con la versión anterior y la obligatoriedad del complemento de pagos se regulan en resoluciones de modificación posteriores, incluyendo la prórroga del complemento para recepción de pagos hasta el 1 de septiembre de 2018 [\[12\]](#ref-12).

Tres cambios definen su carácter:

1. **Catálogos en lugar de texto libre.** Campos antes abiertos (producto/servicio, unidad de medida, uso del CFDI) se sustituyen por claves de catálogos controlados por el SAT, lo que elimina ambigüedad y permite cruces automatizados [\[11\]](#ref-11).
2. **Reglas de validación más estrictas.** El Anexo 20 incorpora un conjunto ampliado de validaciones que se ejecutan en el timbrado; un comprobante mal formado o inconsistente es rechazado antes de certificarse [\[11\]](#ref-11).
3. **Complemento para Recepción de Pagos.** Obliga a documentar pagos en parcialidades o diferidos, cerrando la brecha entre la factura emitida y el flujo real de pago [\[12\]](#ref-12).

A esto se suma el esquema de cancelación con aceptación del receptor, previsto en el artículo 29-A del CFF y reglamentado en la RMF: no se puede cancelar unilateralmente un comprobante que el receptor ya utilizó [\[13\]](#ref-13).

El cambio de fondo es de objetivo: hasta entonces el SAT recolectaba comprobantes; con la 3.3 recolecta datos estructurados y validados, aptos para análisis automatizado y cruce masivo. Para quienes emitían facturas, fue además el cambio más laborioso de toda la serie: implicó adoptar los catálogos del SAT, ajustarse a validaciones más estrictas y sumar el manejo del complemento de pagos.

## CFDI 4.0 (2022–2023): verificación por contraste

La versión vigente entra en vigor el 1 de enero de 2022 de forma opcional. Tras dos prórrogas al periodo de convivencia con la 3.3, la obligatoriedad queda fijada al 1 de abril de 2023 [\[14\]](#ref-14). Cambios principales:

- **Datos del receptor que deben coincidir con el padrón.** Nombre, régimen fiscal y código postal del domicilio fiscal del receptor deben corresponder exactamente con la constancia de situación fiscal registrada ante el SAT [\[14\]](#ref-14).
- **Cancelación con catálogo de motivos.** El esquema de cancelación se endurece y exige especificar la causa conforme a catálogo [\[14\]](#ref-14).
- **Énfasis en materialidad.** Se refuerza el criterio de que el comprobante ampare una operación real.

El efecto es que la validación deja de ser solo de forma y pasa a ser de contraste: al exigir coincidencia exacta de los datos del receptor con el padrón, el SAT puede cruzar emisor contra receptor de manera automática y detectar inconsistencias en el momento del timbrado.

## La otra dimensión: extensibilidad por complementos

El relato hasta aquí sigue la versión del CFDI como comprobante base, pero el estándar se diseñó con capacidad de extensibilidad: incorporar información especializada sin alterar su estructura general. Ese segundo eje de evolución opera en paralelo a las versiones y es igual de relevante para entender el modelo: los complementos. Un complemento es un bloque de información estructurada que se incorpora al comprobante para cubrir las necesidades de un sector o una operación específica —nómina, comercio exterior, combustibles, pagos, transporte de mercancías— y que queda protegido por el mismo sello digital: los datos del complemento se incluyen en la cadena original que se sella, de modo que quedan certificados junto con el resto del comprobante y no pueden alterarse sin invalidar el sello.

La decisión de arquitectura es la que importa históricamente: en lugar de rehacer el estándar cada vez que un sector entraba bajo control fiscal, el SAT lo extendió mediante módulos acoplados al comprobante base. Cada complemento tiene su propio anexo técnico y su propia versión, que evoluciona de forma independiente a la del CFDI. Por eso la mayoría de los complementos sobrevivieron sin cambios el salto de 3.x a 4.0: están desacoplados del comprobante. En la práctica, esto significa que cumplir no se reduce a un solo estándar (el Anexo 20): a él se suma el anexo de cada complemento que aplique, cada uno con su propia versión y sus propias reglas. Quien emite facturas debe atender todos los que le correspondan.

A continuación, una fotografía de los principales complementos en cada régimen. Las versiones corresponden a un corte temporal y cambian con el tiempo, de forma independiente entre sí y respecto al CFDI base; mantenerse al día con esas actualizaciones exige atención constante de quien emite facturas, y por eso deben verificarse contra el portal del SAT antes de usarse [\[15\]](#ref-15).

**Régimen CFDI 3.x (hasta 2023)**

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

**Régimen CFDI 4.0 (2022 en adelante)**

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

El patrón confirma lo dicho: el comprobante base saltó de 3.3 a 4.0, pero la mayoría de los complementos conservaron su versión porque su ciclo de vida es propio. Los que sí se movieron lo hicieron por razones de su sector (Carta Porte por la fiscalización del transporte, REP por el detalle de pagos), no por el cambio de versión del CFDI. La extensibilidad por módulos es, en sí misma, una de las decisiones de diseño más consecuentes del modelo mexicano.

## Lectura del arco completo

Con las versiones del comprobante por un lado y los complementos por el otro, ya está sobre la mesa el cuadro completo de la evolución de la facturación electrónica en México. Vale cerrar leyéndolo como un todo. La secuencia de veinte años es consistente en una dirección: cada versión acercó el control al momento de la transacción y puso más exigencias de validación del lado de quien emite, mientras los complementos extendían ese control a un sector tras otro sin rehacer el estándar.

| Etapa | Año | Cambio de control |
|---|---|---|
| Impresor autorizado | pre-2004 | Papel; verificación posterior, documental |
| CFD | 2004–2010 | Documento digital (vía PACFD); control posterior por reporte mensual |
| CBB | 2010–2011 | Papel con código de seguridad para contribuyentes pequeños |
| CFDI | 2011 | Certificación por tercero (PAC); control casi en tiempo real |
| Obligatoriedad | 2012–2014 | Cierre de impresor autorizado, CFD y CBB; CFDI como esquema único |
| CFDI 3.3 | 2017 | Datos estructurados y validados |
| CFDI 4.0 | 2023 | Verificación por contraste contra el padrón |
| Complementos | 2011 en adelante | Extensión por módulos sellados a sectores específicos (nómina, comercio exterior, combustibles, transporte) |

Leída completa, la evolución no fue una sucesión de cambios técnicos inconexos, sino el despliegue sostenido de una sola idea: convertir la factura en el instrumento con el que el Estado observa el registro fiscal de las operaciones en tiempo real. Cada etapa respondió a una carencia de la anterior —el papel no daba trazabilidad, el CFD no daba certificación inmediata, la 3.3 no daba datos comparables, la 4.0 cerró el contraste contra el padrón— y los complementos extendieron esa misma lógica a cada sector que se quería fiscalizar.

Entender esa lógica —qué carencia resolvía cada etapa y cómo cada una preparó la siguiente— es lo que permite anticipar hacia dónde sigue. Las próximas entregas de esta serie abordan los retos que este modelo plantea hoy, tanto para la autoridad como para quienes emiten facturas.
