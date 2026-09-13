export const leyMeta = {
  numero: '30936',
  titulo:
    'Ley que promueve y regula el uso de la bicicleta como medio de transporte sostenible',
  fechaEmision: '23 de abril de 2019',
  fechaPublicacion: '24 de abril de 2019',
  fuente: 'SPIJ H1234001 · El Peruano NL 1762977-4',
  promulgacion:
    'Reconsiderada por el Congreso, por insistencia, conforme al artículo 108 de la Constitución.',
}

export type ArticleContent = {
  titulo: string
  puntos: string[]
  cita: string
}

export const articulos: Record<number, ArticleContent> = {
  1: {
    titulo: 'Objeto de la Ley',
    puntos: [
      'Fija medidas de promoción y de regulación, no solo un enunciado simbólico.',
      'Reconoce la bicicleta como medio de transporte sostenible.',
      'Dos fines: usar mejor la capacidad vial y preservar el ambiente.',
    ],
    cita: 'El objeto de la presente ley es establecer medidas de promoción y regulación del uso de la bicicleta como medio de transporte sostenible y eficiente en el uso de la capacidad vial y en la preservación del ambiente.',
  },
  2: {
    titulo: 'Implementación de políticas públicas para el uso de la bicicleta',
    puntos: [
      'El MTC elabora e implementa políticas de diseño de infraestructura vial y promueve la planificación urbana y rural a favor de la bicicleta, coordinando con los tres niveles de gobierno.',
      'El INEI produce, de forma progresiva y con sus propios recursos, estadísticas básicas sobre el uso de la bicicleta.',
      'Las fuentes son censos, encuestas por muestreo y registros administrativos del sector público.',
    ],
    cita: '2.1. El Ministerio de Transportes y Comunicaciones elabora e implementa políticas públicas de diseño de obras de infraestructura vial y promueve la planificación urbana y rural a favor del uso de la bicicleta […], en coordinación con las entidades públicas de los tres niveles de Gobierno.',
  },
  3: {
    titulo: 'Día Nacional de la Bicicleta',
    puntos: [
      'Se declara el 3 de junio de cada año como Día Nacional de la Bicicleta.',
      'Organismos públicos y privados deben realizar actividades de conmemoración y concientización.',
      'La fecha se alinea con la Resolución 72/272 de la Asamblea General de las Naciones Unidas.',
    ],
    cita: 'Declárase el 3 de junio de cada año como el Día Nacional de la Bicicleta, debiendo los organismos públicos y privados realizar actividades para conmemorar la fecha y crear conciencia de la necesidad del uso de la bicicleta; concordante con el establecido por la Asamblea General de las Naciones Unidas en la Resolución N° 72/272.',
  },
  4: {
    titulo: 'Promoción de la educación vial y del uso de la bicicleta',
    puntos: [
      'MINEDU, a través de II.EE. públicas y privadas de primaria y secundaria, establece actividades de educación vial; coordina normas de tránsito con el MTC.',
      'Las instituciones de educación superior promueven jornadas de sensibilización y el cumplimiento de las normas de tránsito.',
      'En zonas rurales, los gobiernos locales priorizan señalización y puntos de guía hacia centros educativos.',
      'Los gobiernos locales sensibilizan desde sus programas de educación, cultura y ciudadanía ambiental.',
    ],
    cita: '4.1. El Ministerio de Educación, a través de las instituciones educativas públicas y privadas de primaria y secundaria de todo el territorio nacional, establece actividades promocionales de educación vial […].',
  },
  5: {
    titulo: 'Adecuación de la infraestructura vial pública',
    puntos: [
      'Se declara de interés nacional y necesidad pública la adecuación progresiva de la infraestructura urbana y de transporte, en los tres niveles de gobierno.',
      'Gobiernos regionales y locales pueden usar obras por impuestos (Ley 29230), previa evaluación técnica, económica y legal.',
      'El fin es adecuar infraestructura existente y construir ciclovías, conforme a los planes viales urbanos vigentes.',
    ],
    cita: '5.1. Establézcase de interés nacional y necesidad pública la adecuación progresiva, a nivel nacional, regional y local, de la infraestructura urbana y de transporte existente, para facilitar la utilización de la bicicleta […].',
  },
  6: {
    titulo: 'Medidas que faciliten el transporte intermodal',
    puntos: [
      'Los tres niveles de gobierno implementan medidas para que el ciclista conecte su trayecto con otros medios de transporte.',
      'Deben habilitarse espacios y estructuras seguras para estacionar bicicletas en estaciones de transporte masivo.',
      'Cuando las ciclovías cruzan distritos contiguos, las autoridades competentes gestionan su interconectividad.',
    ],
    cita: '6.1. Establézcase que las autoridades de los tres niveles de gobierno implementan medidas que faciliten el transporte intermodal, con la finalidad de que el ciclista conecte su trayecto con otros medios de transporte; asimismo, habilitan espacios y estructuras seguras para el estacionamiento de bicicletas en las estaciones de los medios de transporte masivo.',
  },
  7: {
    titulo: 'Implementación progresiva de estacionamientos para bicicletas',
    puntos: [
      'Entidades públicas y privadas destinan a bicicletas el 5 % del área de estacionamiento de vehículos automotores.',
      'Plazo general: no mayor de tres años desde la publicación de la ley, independiente de su reglamentación.',
      'Edificaciones ya construidas: un año desde la publicación en El Peruano.',
      'Municipalidades provinciales y distritales cautelan la ejecución y la hacen obligatoria en construcciones existentes y nuevas.',
    ],
    cita: '7.1. Las entidades públicas y privadas, en un plazo no mayor de tres años contados a partir de la publicación de la presente ley, independientemente de su reglamentación, adecúan sus espacios para estacionamientos de bicicletas, en una proporción del cinco por ciento del área que destinan a los vehículos automotores.',
  },
  8: {
    titulo: 'Sistema de bicicleta pública',
    puntos: [
      'Los gobiernos locales implementan sistemas de bicicleta pública con sus recursos disponibles.',
      'El servicio consiste en préstamo o alquiler de bicicletas.',
      'Se prioriza la intermodalidad con el transporte masivo, para incentivar el uso ciudadano.',
    ],
    cita: 'Los gobiernos locales implementan, con sus recursos disponibles, sistemas de bicicleta pública, consistente en préstamo o alquiler de bicicletas, priorizando este servicio para la intermodalidad a los sistemas de transporte masivo […].',
  },
  9: {
    titulo: 'Promoción del uso de la bicicleta por los centros laborales',
    puntos: [
      'Empleadores públicos y privados pueden incentivar el traslado en bicicleta: horario flexible, días u horas libres, duchas, entre otros.',
      'Los servidores públicos tienen derecho a una jornada laboral libre remunerada por cada sesenta asistencias certificadas en bicicleta.',
      'Cada entidad pública formula e implementa las medidas de desarrollo y certificación, en concordancia con SERVIR.',
    ],
    cita: '9.2. Los servidores públicos reciben una jornada laboral libre remunerada por cada sesenta veces que certifiquen haber asistido al centro de labores en bicicleta; para lo cual, cada institución del sector público formula e implementa las medidas necesarias para su desarrollo y certificación, en concordancia con las disposiciones emitidas por la Autoridad Nacional del Servicio Civil.',
  },
  10: {
    titulo: 'Derechos de los ciclistas',
    puntos: [
      'Circular por vías públicas con respeto y seguridad, salvo túneles y pasos a desnivel sin carril para ciclistas.',
      'Vías de circulación preferente (ciclovías u otros), estacionamiento suficiente y uso gratuito de estacionamientos públicos.',
      'Preferencia sobre el tránsito vehicular —después del peatón— en desvíos, cruces de caminos, intersecciones no señalizadas y ciclovías.',
      'Pueden establecerse días u horas de circulación preferente en el área urbana.',
    ],
    cita: 'd) Derecho de preferencia del ciclista en la vía o circulación en los desvíos de avenidas, cruce de caminos, intersecciones no señalizadas y ciclovías sobre el tránsito vehicular, después del peatón.',
  },
  11: {
    titulo: 'Obligaciones, infracciones y sanciones',
    puntos: [
      'Las obligaciones, infracciones y sanciones de quienes conducen bicicletas se regulan en el Reglamento Nacional de Tránsito.',
      'Las infracciones se clasifican en leves, graves y muy graves.',
      'El criterio es el peligro, el riesgo potencial o el daño efectivo a la vida y la salud del peatón, del conductor o de terceros.',
    ],
    cita: '11.1. Las obligaciones, infracciones y sanciones de los conductores de bicicletas son reguladas en el Reglamento Nacional de Tránsito.',
  },
}

export const disposiciones: Record<number, ArticleContent> = {
  1: {
    titulo: 'Modificación de los artículos 7 y 23 de la Ley 27181',
    puntos: [
      'Se modifica el numeral 7.3: el Estado da trato preferencial a los medios más eficientes en capacidad vial o en preservación del ambiente.',
      'El Reglamento Nacional de Gestión de Infraestructura debe definir pautas técnicas para implementar de forma progresiva elementos de movilidad sostenible (bicicleta).',
      'En el artículo 23, literal c), ese reglamento también incluye esas pautas en el planeamiento de la infraestructura vial.',
    ],
    cita: 'El Reglamento Nacional de Gestión de Infraestructura define las pautas para las normas técnicas que permiten la implementación progresiva de elementos de movilidad sostenible (bicicleta).',
  },
  2: {
    titulo: 'Obligación de informar al Congreso de la República',
    puntos: [
      'El MTC presenta cada año, en la primera quincena de septiembre, un informe a la Comisión de Transportes y Comunicaciones.',
      'El informe detalla las acciones realizadas para implementar la ley.',
    ],
    cita: 'El Ministerio de Transportes y Comunicaciones debe presentar en la primera quincena del mes de septiembre de cada año a la Comisión de Transportes y Comunicaciones del Congreso de la República un informe detallando las acciones realizadas para la implementación de la presente ley.',
  },
  3: {
    titulo: 'Reglamento de la presente ley',
    puntos: [
      'El Poder Ejecutivo aprueba el reglamento dentro de los ciento veinte días hábiles siguientes a la publicación.',
      'Refrendan: Vivienda, Construcción y Saneamiento; Educación; Trabajo y Promoción del Empleo; Transportes y Comunicaciones.',
      'La propuesta la formula el ministro de Transportes y Comunicaciones.',
    ],
    cita: 'El Poder Ejecutivo dentro de los ciento veinte días hábiles siguientes a la publicación de la presente ley, aprueba el reglamento correspondiente, contando con el refrendo del ministro de Vivienda, Construcción y Saneamiento, el ministro de Educación, el ministro de Trabajo y Promoción del Empleo y el ministro de Transportes y Comunicaciones, a propuesta de este último.',
  },
  4: {
    titulo: 'Financiamiento',
    puntos: [
      'La implementación es progresiva.',
      'Se sujeta a la disponibilidad presupuestaria de las entidades involucradas.',
      'No demanda recursos adicionales al tesoro público.',
    ],
    cita: 'La implementación de la presente norma se efectúa de manera progresiva y se sujeta a la disponibilidad presupuestaria de las entidades involucradas, sin demandar recursos adicionales al tesoro público.',
  },
}

export function article(n: number): ArticleContent {
  const data = articulos[n]
  if (!data) throw new Error(`No hay contenido para el artículo ${n}`)
  return data
}

export function disposition(n: number): ArticleContent {
  const data = disposiciones[n]
  if (!data) throw new Error(`No hay contenido para la disposición ${n}`)
  return data
}

export const derechosCiclista: { letra: string; texto: string }[] = [
  {
    letra: 'a',
    texto:
      'Transitar por las vías públicas con respeto y seguridad, salvo túneles y pasos a desnivel sin carril para ciclistas.',
  },
  {
    letra: 'b',
    texto: 'Disponer de vías de circulación preferente: ciclovías u otros espacios similares.',
  },
  {
    letra: 'c',
    texto: 'Disponer de suficientes espacios para estacionar, en ámbitos públicos y privados.',
  },
  {
    letra: 'd',
    texto:
      'Preferencia sobre el tránsito vehicular —después del peatón— en desvíos, cruces, intersecciones no señalizadas y ciclovías.',
  },
  {
    letra: 'e',
    texto: 'Uso gratuito de estacionamientos públicos para bicicletas.',
  },
  {
    letra: 'f',
    texto: 'Tener días u horas de circulación preferente en el área urbana, en trayectos determinados.',
  },
]
