export const paperMeta = {
  autores: 'Santos, Behrendt y Teytelboym',
  anio: '2010',
  titulo: 'Incentivos para caminar y pedalear',
  paper: 'Policy instruments for sustainable road transport',
  seccion: 'Sección 4 · Incentives to walking and cycling',
  revista: 'Research in Transportation Economics, 28, 46–91 (pp. 59–63)',
  fuente: 'Universidad de Oxford · Smith School of Enterprise and the Environment',
}

export type Fuente = {
  id: string
  autores: string
  anio: string
  titulo: string
  publicacion: string
}

export const fuentesCatalogo: Record<string, Fuente> = {
  litman2004: {
    id: 'litman2004',
    autores: 'Litman, T.',
    anio: '2004',
    titulo: 'Quantifying the benefits of non-motorized transportation',
    publicacion: 'Victoria Transport Policy Institute · TRR 1441',
  },
  litman2007: {
    id: 'litman2007',
    autores: 'Litman, T.',
    anio: '2007',
    titulo: 'Economic value of walkability',
    publicacion: 'Victoria Transport Policy Institute · TRR 1828',
  },
  ogilvie2004: {
    id: 'ogilvie2004',
    autores: 'Ogilvie, Egan, Hamilton y Petticrew',
    anio: '2004',
    titulo: 'Promoting walking and cycling as an alternative to using cars: systematic review',
    publicacion: 'BMJ, 329(7469), 763–766',
  },
  jacobsen2003: {
    id: 'jacobsen2003',
    autores: 'Jacobsen, P. L.',
    anio: '2003',
    titulo: 'Safety in numbers: more walkers and bicyclists, safer walking and bicycling',
    publicacion: 'Injury Prevention, 9(3), 205–209',
  },
  pucherBuehler2008: {
    id: 'pucherBuehler2008',
    autores: 'Pucher y Buehler',
    anio: '2008',
    titulo: 'Making cycling irresistible: lessons from the Netherlands, Denmark and Germany',
    publicacion: 'Transport Reviews, 28(4), 495–528',
  },
  pucherDijkstra2003: {
    id: 'pucherDijkstra2003',
    autores: 'Pucher y Dijkstra',
    anio: '2003',
    titulo: 'Promoting safe walking and cycling to improve public health',
    publicacion: 'American Journal of Public Health, 93(9), 1509–1516',
  },
  bassett2008: {
    id: 'bassett2008',
    autores: 'Bassett, Pucher, Buehler, Thompson y Crouter',
    anio: '2008',
    titulo: 'Walking, cycling, and obesity rates in Europe, North America and Australia',
    publicacion: 'Journal of Physical Activity and Health, 5(6), 795–814',
  },
  noland2006: {
    id: 'noland2006',
    autores: 'Noland e Ishaque',
    anio: '2006',
    titulo: 'Smart bicycles in an urban area: evaluation of a pilot scheme in London',
    publicacion: 'Journal of Public Transportation, 9(5), 71–95',
  },
}

export type PaperSection = {
  titulo: string
  puntos: string[]
  cita: string
  fuentes: string[]
}

export const paperSecciones: Record<string, PaperSection> = {
  corto: {
    titulo: 'Trayectos cortos y uso del suelo',
    puntos: [
      'Caminar y pedalear no sirven para largas distancias, pero son una opción excelente para viajes cortos, e incluso más rápidos que el auto en congestión.',
      'El uso del suelo es el incentivo primario: acortar las distancias y ubicar viviendas, comercios y oficinas cerca de las estaciones acerca el viaje a pie o en bicicleta.',
      'Los barrios dispersos y de baja densidad desincentivan caminar y pedalear, y hacen a las personas más dependientes del automóvil.',
      'La integración con el transporte público (estacionamientos, rampas y carriles hasta las estaciones) crea viajes sin auto que de otro modo serían inconcebibles.',
    ],
    cita: '“Walking and cycling improve general health, save money […], produce no local pollution or CO2 emissions and can be, ironically, quicker than motorised forms of transport in congested conditions.”',
    fuentes: ['pucherBuehler2008'],
  },
  politicas: {
    titulo: 'Qué incentiva pedalear: carriles, parqueo, duchas y velocidad',
    puntos: [
      'Construir carriles y ciclovías exclusivas, anchas y bien señalizadas, con prioridad en los cruces: la mayoría de autores coincide en que hacen más seguro pedalear.',
      'Estacionamiento cómodo y seguro en comercios, estaciones y oficinas; duchas en el trabajo para quien llega en bicicleta.',
      'Menos estacionamiento para autos y límites de velocidad más bajos incentivan caminar y pedalear a la vez.',
      'Financiar programas de promoción (rutas seguras a la escuela, talleres de reparación, semanas de la bicicleta) e integrar la bicicleta con buses y trenes.',
    ],
    cita: '“Making cycling irresistible”: los Países Bajos, Dinamarca y Alemania lo lograron con paquetes de política coordinados —carriles separados, calmado de tránsito y educación— y no por clima o cultura.',
    fuentes: ['pucherBuehler2008', 'pucherDijkstra2003'],
  },
  salud: {
    titulo: 'Beneficios en salud',
    puntos: [
      'La OMS recomienda 30 min de actividad moderada cinco días por semana; el trayecto activo al trabajo o al estudio ayuda a cumplirla.',
      'Caminar y pedalear reducen enfermedad coronaria, diabetes tipo 2, algunos cánceres, accidentes cerebrovasculares y la mortalidad por todas las causas.',
      'También reducen la obesidad: los países donde se camina y pedalea más tienden a tener menores tasas de obesidad.',
      'La revisión sistemática de Ogilvie et al. (2004) halló que los programas dirigidos a grupos motivados sí desplazan viajes del auto; las campañas genéricas tienen evidencia débil.',
    ],
    cita: 'Bassett et al. (2008): correlación inversa entre transporte activo y obesidad (r = −0,86). Países Bajos 11,2 % de obesidad frente a 34,3 % en EE. UU.',
    fuentes: ['ogilvie2004', 'bassett2008'],
  },
  ambiente: {
    titulo: 'Beneficios ambientales',
    puntos: [
      'Caminar y pedalear no generan emisiones ni contaminación local, y sustituyen sobre todo viajes cortos en auto, los de mayor tasa de emisión por kilómetro.',
      'En el Reino Unido, el 21 % de las emisiones de CO2 provienen de viajes de menos de 5 millas, que podrían hacerse a pie o en bicicleta.',
      'El beneficio depende de cuántos viajes en auto se reemplacen; donde hay buen transporte público, la bicicleta a veces sustituye al bus, y el efecto ambiental neto se atenúa.',
      'Litman (2004): por el “efecto palanca”, cada kilómetro que pasa del auto al modo activo elimina varios kilómetros-vehículo, porque el presupuesto de tiempo de viaje es casi fijo.',
    ],
    cita: 'Komanoff y Roelofs (1993): reemplazar 1 % del viaje en auto por caminata o bicicleta reduciría entre 2 % y 4 % las emisiones de carbono del transporte en EE. UU.',
    fuentes: ['litman2004', 'bassett2008'],
  },
  seguridad: {
    titulo: 'Seguridad en números y uso del casco',
    puntos: [
      'Seguridad en números (Jacobsen, 2003): el riesgo individual de ser atropellado disminuye a medida que aumenta la cantidad de personas que caminan o pedalean.',
      'Al duplicar la cantidad de ciclistas o peatones, el riesgo individual de fatalidad cae cerca de 66 %; el patrón se repite entre ciudades, países y épocas.',
      'No basta con poner más gente en la vía: lo que funciona es invertir en infraestructura y educar a los conductores sobre los usuarios vulnerables.',
      'El casco reduce el riesgo de lesión en la cabeza, pero por sí solo no basta; obligarlo puede desalentar el pedaleo y, por seguridad en números, elevar la tasa de fatalidad.',
    ],
    cita: 'Pucher y Dijkstra (2003): por km, el peatón en EE. UU. tenía 23 veces y el ciclista 12 veces más probabilidad de morir que un ocupante de auto en 2001.',
    fuentes: ['jacobsen2003', 'pucherDijkstra2003'],
  },
  economia: {
    titulo: 'Beneficios económicos',
    puntos: [
      'Invertir en caminar y pedalear genera ahorros en salud, menos fatalidades viales, menor gasto en mantenimiento vial y de vehículos, y menos contaminación.',
      'Litman (2004, 2007) ofrece una evaluación económica de pasar del transporte motorizado a caminar y pedalear, sumando categorías de beneficio a menudo ignoradas.',
      'Calles peatonales y comercio: un aumento promedio de 17 % en la facturación minorista en 22 casos revisados; quien va a pie a las tiendas gasta más por semana.',
      'La relación beneficio-costo del ciclismo promedia 3,2 en el Reino Unido, con rendimientos decrecientes (hasta 20 en un proyecto de Delhi y 1,5 en Ámsterdam).',
    ],
    cita: 'Litman (2007): en comunidades dependientes del auto los hogares gastan ~50 % más en transporte (>US$8.500/año) que en comunidades accesibles y multimodales (<US$5.500/año).',
    fuentes: ['litman2007', 'litman2004'],
  },
  ejemplos: {
    titulo: 'Casos de éxito: Países Bajos, Alemania/Dinamarca y Bogotá',
    puntos: [
      'Países Bajos hizo la primera y más exitosa política oficial de la bicicleta: 27 % de los viajes son en bicicleta; un neerlandés pedalea 2,5 km diarios, 25 veces más que un estadounidense.',
      'Alemania triplicó su red ciclovial entre 1976 y 1995 y, como los Países Bajos, redujo 60 % la fatalidad ciclista desde 1975 separando el tránsito e integrando la red.',
      'Pucher y Buehler (2008): el éxito neerlandés, danés y alemán proviene de paquetes de política similares, no del clima ni de la topografía.',
      'Bogotá construyó 300 km de ciclovías conectadas al transporte masivo; con US$178 millones subió la participación de la bicicleta de 0,9 % a 4 % y lo hizo como política de inclusión social.',
    ],
    cita: 'Rietveld y Daniel (2004): las intervenciones más influyentes fueron reducir el tiempo de viaje en bicicleta frente al auto, disminuir las paradas y encarecer el estacionamiento del automóvil.',
    fuentes: ['pucherBuehler2008'],
  },
  bicipublica: {
    titulo: 'Bicicleta pública: OYBike, Vélib y Bicing',
    puntos: [
      'En 2004 Londres piloteó OYBike, un sistema de alquiler con estaciones automáticas: precursor de los sistemas modernos de bicicleta pública.',
      'Noland e Ishaque (2006): la mayoría de viajes de OYBike fueron de ocio en días soleados y fines de semana, y solían sustituir caminatas cortas, por lo que el impacto ambiental fue pequeño.',
      'El 34 % de los viajes de OYBike reemplazaron viajes en transporte público y solo ~6 % reemplazaron viajes en auto; el clima y la falta de infraestructura limitaron su éxito.',
      'París (Vélib, 20.600 bicicletas) y Barcelona (Bicing, 3.000) escalaron el modelo: economías de escala bajaron la tarifa a ~€1/día frente a £8/día de OYBike.',
    ],
    cita: 'Shaheen y Rodier (2008): hay señales de que en París y Barcelona los usuarios están sustituyendo el auto por Vélib y Bicing para ir al trabajo y complementar el transporte público.',
    fuentes: ['noland2006'],
  },
}

export type Evidencia = {
  fuenteId: string
  titulo: string
  figura: string
  figuraCaption: string
  cita: string
  glosa: string
  bridgeTo: string
  bridgeLabel: string
}

export const evidenciaOrden = [
  'pucherBuehler2008',
  'pucherDijkstra2003',
  'jacobsen2003',
  'bassett2008',
  'ogilvie2004',
  'litman2007',
  'litman2004',
  'noland2006',
]

export const evidencias: Record<string, Evidencia> = {
  pucherBuehler2008: {
    fuenteId: 'pucherBuehler2008',
    titulo: 'La bicicleta como opción masiva',
    figura: '/papers/pucherBuehler2008.png',
    figuraCaption:
      'Figura 1: participación de la bicicleta en el total de viajes. Países Bajos 27 %; EE. UU., R. Unido y Australia ~1 %.',
    cita: 'The key to achieving high levels of cycling appears to be the provision of separate cycling facilities along heavily traveled roads and at intersections, combined with traffic calming of most residential neighborhoods.',
    glosa: 'La clave de una alta tasa de ciclismo es la infraestructura separada en vías de tránsito intenso y en los cruces, más el calmado de tránsito.',
    bridgeTo: 'paper-ejemplos',
    bridgeLabel: 'Ir a · Casos de éxito',
  },
  pucherDijkstra2003: {
    fuenteId: 'pucherDijkstra2003',
    titulo: 'Seguridad y edad al caminar y pedalear',
    figura: '/papers/pucherDijkstra2003.png',
    figuraCaption:
      'Figura 1: porcentaje de viajes urbanos a pie y en bicicleta (EE. UU. 7 %, Países Bajos 46 %), 1995.',
    cita: 'The Dutch and Germans who are 75 and older make roughly half their trips by foot or bike, compared with only 6% of Americans aged 65 and older.',
    glosa: 'Con políticas seguras, caminar y pedalear siguen siendo viables incluso en la tercera edad.',
    bridgeTo: 'paper-seguridad',
    bridgeLabel: 'Ir a · Seguridad',
  },
  jacobsen2003: {
    fuenteId: 'jacobsen2003',
    titulo: 'Seguridad en números',
    figura: '/papers/jacobsen2003.png',
    figuraCaption:
      'Figura 1: índice de riesgo relativo frente a la proporción de viajes al trabajo a pie/bici. 68 ciudades de California (2000).',
    cita: 'Figure 1 shows that the likelihood of an injury is not constant but decreases as walking or bicycling increases.',
    glosa: 'A más personas caminando y pedaleando, menor es el riesgo individual de sufrir un accidente.',
    bridgeTo: 'paper-seguridad',
    bridgeLabel: 'Ir a · Seguridad',
  },
  bassett2008: {
    fuenteId: 'bassett2008',
    titulo: 'Transporte activo y obesidad',
    figura: '/papers/bassett2008.png',
    figuraCaption:
      'Figura 4: kilómetros caminados y pedaleados por habitante al año (EE. UU. el más bajo; Países Bajos el más alto).',
    cita: 'countries in Europe, North America, and Australia where active travel is most common have the lowest obesity rates, whereas those countries with the highest rates of car use for travel have the highest obesity rates.',
    glosa: 'El transporte activo se asocia de forma inversa con la obesidad (r = −0,86).',
    bridgeTo: 'paper-salud',
    bridgeLabel: 'Ir a · Salud',
  },
  ogilvie2004: {
    fuenteId: 'ogilvie2004',
    titulo: 'Qué intervenciones funcionan',
    figura: '/papers/ogilvie2004.png',
    figuraCaption:
      'Resumen de la evidencia sobre la eficacia de las intervenciones para promover el cambio modal del auto a caminar y pedalear.',
    cita: 'targeted programmes can change the behaviour of motivated subgroups, resulting in around 5% of all household trips being shifted from cars to walking and cycling.',
    glosa: 'Los programas dirigidos a grupos motivados sí desplazan viajes; las campañas genéricas tienen evidencia débil.',
    bridgeTo: 'paper-salud',
    bridgeLabel: 'Ir a · Salud',
  },
  litman2007: {
    fuenteId: 'litman2007',
    titulo: 'Costos externos evitados',
    figura: '/papers/litman2007.png',
    figuraCaption:
      'Figura 2: costos externos estimados del automóvil frente a caminar (US$ por pasajero-milla), por categoría.',
    cita: 'each percentage shift of vehicle trips to walking can reduce transport external costs by several percentage points, particularly under urban-peak conditions when emission and parking costs are high.',
    glosa: 'Cada punto porcentual de viajes que pasa del auto a caminar recorta varios puntos de costos externos.',
    bridgeTo: 'paper-economia',
    bridgeLabel: 'Ir a · Economía',
  },
  litman2004: {
    fuenteId: 'litman2004',
    titulo: 'Fatalidades y transporte activo',
    figura: '/papers/litman2004.png',
    figuraCaption:
      'Figura 12: fatalidades de tránsito frente a la proporción de viajes no motorizados (EE. UU., censo 2000).',
    cita: 'Per capita traffic fatality rates tend to decline as active travel increases. This is called “safety in numbers.”',
    glosa: 'La evaluación económica del transporte activo incorpora la caída de fatalidades por la seguridad en números.',
    bridgeTo: 'paper-economia',
    bridgeLabel: 'Ir a · Economía',
  },
  noland2006: {
    fuenteId: 'noland2006',
    titulo: 'Bicicleta pública: OYBike',
    figura: '/papers/noland2006.png',
    figuraCaption:
      'Figura 1: estación de anclaje de OYBike en Londres, esquema piloto de bicicleta pública (2004).',
    cita: 'interest in the system was very low during months when weather and lighting conditions are poor.',
    glosa: 'El primer sistema “inteligente” de bicicleta pública mostró fuerte estacionalidad y dependió de subsidio.',
    bridgeTo: 'paper-bicipublica',
    bridgeLabel: 'Ir a · Bici pública',
  },
}

export function evidencia(id: string): Evidencia {
  const data = evidencias[id]
  if (!data) throw new Error(`No existe la evidencia "${id}"`)
  return data
}

export function paperSection(key: string): PaperSection {
  const data = paperSecciones[key]
  if (!data) throw new Error(`No hay contenido para la sección "${key}" del paper`)
  return data
}

export function fuente(id: string): Fuente {
  const data = fuentesCatalogo[id]
  if (!data) throw new Error(`No existe la fuente "${id}"`)
  return data
}
