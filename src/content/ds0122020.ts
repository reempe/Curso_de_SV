export const dsMeta = {
  numero: '012-2020-MTC',
  titulo:
    'Reglamento de la Ley N.º 30936, Ley que promueve y regula el uso de la bicicleta como medio de transporte sostenible',
  decreto:
    'Decreto Supremo que aprueba el Reglamento de la Ley N.º 30936 y modifica el Reglamento Nacional de Tránsito y el Reglamento Nacional de Gestión de Infraestructura Vial',
  fechaEmision: '3 de junio de 2020',
  fechaPublicacion: '3 de junio de 2020',
  fuente: 'SPIJ H1260225 · El Peruano, edición extraordinaria N.º 15461',
}

export type ArticleContent = {
  titulo: string
  puntos: string[]
  cita: string
}

export const dsArticulos: Record<number, ArticleContent> = {
  1: {
    titulo: 'Objeto',
    puntos: [
      'Reglamenta la Ley N.º 30936, no la sustituye.',
      'Desarrolla las medidas de promoción y regulación que la ley dejó al Ejecutivo.',
      'Forma parte integrante del D.S. 012-2020-MTC.',
    ],
    cita: 'La presente norma tiene por objeto reglamentar la Ley N° 30936, Ley que Promueve y Regula el Uso de la Bicicleta como Medio de Transporte Sostenible (en adelante, la Ley).',
  },
  2: {
    titulo: 'Finalidad',
    puntos: [
      'Fomentar la bicicleta como transporte sostenible.',
      'Cuatro frentes: educación, trabajo, desarrollo urbano e infraestructura.',
      'En condiciones de seguridad, promoción y sensibilización, para desplazar personas y preservar el ambiente.',
    ],
    cita: 'El presente Reglamento tiene por finalidad fomentar el uso de la bicicleta como medio de transporte sostenible a través del desarrollo de medidas en materia de educación, trabajo, desarrollo urbano e infraestructura, en condiciones de seguridad, promoción y sensibilización, que permita el desplazamiento de las personas y la preservación del medio ambiente.',
  },
  3: {
    titulo: 'Ámbito de aplicación',
    puntos: [
      'Rige en todo el territorio de la República.',
      'Alcanza a entidades públicas y privadas.',
      'Alcanza a la ciudadanía en tres roles: peatones, ciclistas y conductores de vehículos automotores.',
    ],
    cita: 'El presente Reglamento es de aplicación en todo el territorio de la República, alcanza a las entidades públicas y privadas y a los/las ciudadanos/as en general en sus diversos roles como peatones/as, ciclistas y conductores/as de vehículos automotores.',
  },
  4: {
    titulo: 'Abreviaturas',
    puntos: [
      'DRE y UGEL: gestión educativa regional y local.',
      'INEI, MINEDU, MTC, SERVIR: rectoría estadística, educativa, de transportes y del servicio civil.',
      'PEI y POI: instrumentos de planificación donde deben anclarse las actividades.',
      'IP: iniciativa privada, usada para financiar bicicleta pública e infraestructura.',
    ],
    cita: 'Para la aplicación del presente Reglamento, se utiliza las siguientes abreviaturas: DRE, INEI, IP, MINEDU, MTC, PEI, POI, SERVIR y UGEL.',
  },
  5: {
    titulo: 'Políticas públicas a cargo del MTC',
    puntos: [
      'El MTC elabora e implementa políticas de diseño de infraestructura vial a favor de la bicicleta, en coordinación con las entidades competentes.',
      'Promueve el desplazamiento en bicicleta incorporando infraestructura ciclovial y complementaria en programas y proyectos de inversión.',
      'Desarrolla el artículo 2 de la Ley 30936.',
    ],
    cita: 'El MTC elabora e implementa políticas públicas de diseño de obras de infraestructura vial a favor del uso de la bicicleta como medio de transporte sostenible y eficiente, que contribuye en la preservación del ambiente en coordinación con las entidades competentes.',
  },
  6: {
    titulo: 'Día Nacional de la Bicicleta',
    puntos: [
      'Las entidades públicas incorporan en su planificación anual las actividades del 3 de junio.',
      'El 31 de julio de cada año remiten al MTC lo hecho: deporte, recreación, educación, familia y campañas.',
      'El MTC publica esos datos en el Portal Nacional de Datos Abiertos.',
    ],
    cita: 'El 31 de julio de cada año, las entidades públicas remiten información a la Dirección General de Políticas y Regulación en Transporte Multimodal o la que haga sus veces en el MTC, sobre las acciones adoptadas por el Día Nacional de la Bicicleta […].',
  },
  7: {
    titulo: 'Instituto Nacional de Estadística e Informática',
    puntos: [
      'El INEI, por la Dirección Nacional de Censos y Encuestas o la que haga sus veces, coordina con el MTC.',
      'Incorpora el uso de la bicicleta como transporte sostenible en el censo nacional y en encuestas oficiales multisectoriales.',
      'Opera el mandato estadístico del artículo 2.2 de la ley.',
    ],
    cita: 'El INEI a través de la Dirección Nacional de Censos y Encuestas o la que haga sus veces, en coordinación con el MTC, incorpora en los procesos de levantamiento censal nacional, las encuestas oficiales multisectoriales, que contengan información sobre el uso de la bicicleta como medio de transporte sostenible.',
  },
  8: {
    titulo: 'Derechos y obligaciones de los ciclistas',
    puntos: [
      'El reglamento de la ley no crea un régimen sancionador propio para el ciclista.',
      'Derechos, obligaciones, infracciones y sanciones están en el Reglamento Nacional de Tránsito (D.S. 033-2001-MTC).',
      'El TUO de ese reglamento se aprobó por D.S. 016-2009-MTC.',
    ],
    cita: 'El uso de la bicicleta como medio de transporte conlleva los derechos, obligaciones, infracciones y sanciones que establece el Reglamento Nacional de Tránsito, aprobado por Decreto Supremo Nº 033-2001-MTC, cuyo Texto Único Ordenado es aprobado por Decreto Supremo Nº 016-2009-MTC.',
  },
  9: {
    titulo: 'Promoción en instituciones educativas',
    puntos: [
      'Desarrolla el artículo 4 de la ley.',
      'Abarca II.EE. públicas y privadas de todas las modalidades y niveles formativos, a nivel nacional.',
      'No se limita a primaria y secundaria: incluye técnico-productiva y superior.',
    ],
    cita: 'Para efectos de lo señalado en el artículo 4 de la Ley, las disposiciones del presente capítulo se aplican a las instituciones educativas públicas y privadas de todas las modalidades y niveles formativos de la educación, a nivel nacional.',
  },
  10: {
    titulo: 'Objetivos de la educación vial y las jornadas',
    puntos: [
      'Interiorizar convivencia vial, respeto y valor por la vida.',
      'Lograr actitudes racionales: derechos y deberes de quienes usan la vía, y verse como agentes de riesgo.',
      'Conseguir participación estudiantil curricular y extracurricular en seguridad vial y bicicleta.',
    ],
    cita: 'Los objetivos de las medidas de promoción de educación vial y las jornadas de sensibilización sobre el uso de la bicicleta son, entre otros, […] interiorizar valores ciudadanos de convivencia vial […]; lograr actitudes racionales en las personas usuarias de la vía […]; conseguir la participación estudiantil […].',
  },
  11: {
    titulo: 'Medidas de promoción: MINEDU y MTC',
    puntos: [
      'MINEDU norma y orienta; fija forma, duración, periodicidad y seguimiento según cada II.EE. y su geografía.',
      'El MTC fija el contenido de las normas de tránsito y da soporte técnico; garantiza especialistas descentralizados.',
      'MINEDU las incorpora en las orientaciones anuales del año escolar y académico.',
    ],
    cita: 'El MINEDU es la entidad a cargo de normar y orientar las medidas de promoción de la educación vial y del uso de la bicicleta […]; corresponde al MTC establecer el contenido y la finalidad específica de las normas de tránsito […].',
  },
  12: {
    titulo: 'Jornadas en educación superior',
    puntos: [
      'Actividades en el marco de los planes de estudio: beneficios de la bicicleta, salud, calidad del aire y normas de tránsito.',
      'Universidades, en su autonomía, alcanzan a toda la comunidad universitaria y regulan el uso dentro del campus.',
      'El MTC hace seguimiento, evalúa resultados y recomienda mejoras.',
    ],
    cita: 'Las jornadas de sensibilización del cumplimiento de las normas de tránsito aplicables en la conducción de la bicicleta, a cargo de las instituciones educativas de educación superior, públicas y privadas, son actividades y acciones que pueden realizarse en el marco de lo establecido en sus planes de estudio […].',
  },
  13: {
    titulo: 'Catálogo de medidas de promoción',
    puntos: [
      'Orientar la normativa vial del uso de la bicicleta.',
      'Ayudar a elegir rutas seguras casa–escuela y aspectos básicos de seguridad urbana y rural.',
      'Organizar grupos de estudiantes ciclistas por ruta y enseñar mantenimiento básico.',
    ],
    cita: 'Son medidas de promoción […], entre otras: orientar sobre la normativa vial relacionada al uso de la bicicleta; apoyar a los estudiantes a elegir las rutas más seguras […]; orientar […] sobre aspectos básicos de seguridad […]; organizar grupos de estudiantes ciclistas por rutas […]; enseñar […] mantenimiento de las bicicletas.',
  },
  14: {
    titulo: 'Acciones de gobiernos regionales y locales',
    puntos: [
      'Señalización y mantenimiento de vías de acceso a las II.EE., con DRE y UGEL.',
      'DRE y UGEL incluyen educación vial en PEI y POI.',
      'Capacitaciones: seguridad vial, prioridad peatón/ciclista, protección de la comunidad educativa, normas entre usuarios y primeros auxilios.',
    ],
    cita: 'Los gobiernos regionales y locales, en coordinación con las DRE y UGEL correspondientes, incorporan la señalización vial y mantenimiento de vías tomando en cuenta las condiciones de acceso a las instituciones educativas de cada jurisdicción.',
  },
  15: {
    titulo: 'Programas municipales ambientales',
    puntos: [
      'Los programas de educación, cultura y ciudadanía ambiental incorporan la bicicleta.',
      'Componente práctico: conducción y mantenimiento.',
      'Componente teórico: transporte sostenible, partes de la bicicleta, beneficios y reglas.',
    ],
    cita: 'Los programas municipales de educación, cultura y ciudadanía ambiental o, los que hagan sus veces, incorporan acciones de comunicación y sensibilización ambiental sobre el uso de la bicicleta, incorporando un componente práctico (conducción y mantenimiento) y otro teórico […].',
  },
  16: {
    titulo: 'Alcance laboral',
    puntos: [
      'El capítulo se aplica a empleadores públicos y privados del artículo 9 de la ley.',
      'No crea un régimen laboral distinto: desarrolla los incentivos de la ley.',
      'El sector público se sujeta además a SERVIR.',
    ],
    cita: 'Las disposiciones del presente capítulo se aplican a los/las empleadores/as públicos/as y privados/as a que refiere el artículo 9 de la Ley.',
  },
  17: {
    titulo: 'Medidas de promoción en centros laborales',
    puntos: [
      'Horario flexible, sin recortar jornada ni refrigerio.',
      'Días u horas libres remuneradas, acumulables a vacaciones o licencias; cada empleador verifica la llegada en bicicleta (SERVIR en el Estado).',
      'Vestimenta o uniforme más flexible, duchas y charlas de sensibilización.',
    ],
    cita: 'Los/las empleadores/as públicos/as y privados/as, para incentivar a los/las trabajadores/as […] el uso de la bicicleta […], pueden adoptar, entre otras, las siguientes medidas: a) flexibilización del horario […]; b) otorgamiento de días u horas libres remuneradas […]; c) flexibilización en el uso de vestimenta formal o uniforme […]; d) implementación y facilitación de duchas […]; e) actividades promocionales […].',
  },
  18: {
    titulo: 'Buenas prácticas laborales',
    puntos: [
      'Promover el traslado en bicicleta cuenta como buena práctica laboral.',
      'El Ministerio de Trabajo y Promoción del Empleo la reconoce como prevención de riesgos en salud y seguridad.',
      'Es un incentivo reputacional, no una sanción.',
    ],
    cita: 'La promoción del uso de la bicicleta por los/las trabajadores/as como medio de transporte para llegar a su centro laboral es considerada para el reconocimiento de buenas prácticas laborales que promueve el Ministerio de Trabajo y Promoción del Empleo como una actividad de prevención de riesgos en salud y seguridad laboral.',
  },
  19: {
    titulo: 'Infraestructura ciclovial en gobiernos regionales y locales',
    puntos: [
      'Objetivos, acciones estratégicas e inversiones deben incluir ciclovías y complementos, priorizando peatón y ciclista como usuarios vulnerables.',
      'Los gobiernos locales lo incorporan en planificación y gestión urbana, y en la interconexión con el transporte integrado.',
      'Registran mapas y rutas en geoidep.gob.pe, con estándares de la Infraestructura de Datos Espaciales del Perú.',
    ],
    cita: 'Los Gobiernos Regionales y Locales consideran en los objetivos y acciones estratégicas institucionales, así como en las actividades operativas e inversiones, la construcción y adecuación de infraestructura ciclovial y complementaria ciclovial, priorizando la satisfacción de las condiciones de transitabilidad, accesibilidad y seguridad de los/las peatones/as y los/las ciclistas […].',
  },
  20: {
    titulo: 'Construcción, adecuación y mantenimiento',
    puntos: [
      'Las autoridades del artículo 4 del RNGIV (D.S. 034-2008-MTC) planifican la infraestructura ciclovial en la programación multianual de inversiones.',
      'Sigue el ciclo de proyectos de inversión o IOARR, según el D. Leg. 1252.',
      'No basta declararlo: debe entrar al sistema de inversión pública.',
    ],
    cita: 'Para la construcción, adecuación y mantenimiento de la infraestructura ciclovial y complementaria ciclovial, las autoridades competentes indicadas en el artículo 4 del Reglamento Nacional de Gestión de la Infraestructura Vial […] planifican la inclusión de infraestructura ciclovial y complementaria ciclovial en la Programación Multianual de Inversiones […].',
  },
  21: {
    titulo: 'Estacionamientos para bicicletas: 5 % del área neta',
    puntos: [
      '5 % del área neta de estacionamientos vehiculares; no se cuentan circulación ni áreas comunes.',
      'Módulos según Norma Técnica CE.030; lo más próximo al ingreso. En patrimonio cultural, anclajes removibles.',
      'Excepción: inmuebles con conformidad de obra que no exigía estacionamientos vehiculares. En SIT: cicloparqueaderos de transferencia modal.',
    ],
    cita: 'Los inmuebles de las entidades públicas o privadas deben contar con estacionamientos de bicicletas en una proporción del 5% del área neta destinada a espacios de estacionamientos de vehículos. No se incluye en este porcentaje a las áreas de circulación y/o áreas comunes.',
  },
  22: {
    titulo: 'Dimensionamiento de los módulos',
    puntos: [
      'Las medidas las fija Vivienda en el numeral 7 de la Norma Técnica CE.030 del Reglamento Nacional de Edificaciones (D.S. 011-2006-VIVIENDA).',
      'Rigen también las normas complementarias o modificatorias de esa ficha.',
      'El 5 % se traduce en módulos concretos, no en un porcentaje abstracto.',
    ],
    cita: 'El dimensionamiento de los módulos de estacionamientos para bicicletas se sujeta a los lineamientos establecidos por el Ministerio de Vivienda, Construcción y Saneamiento en el numeral 7 de la Norma Técnica CE.030 “Obras Especiales y Complementarias” del Reglamento Nacional de Edificaciones […].',
  },
  23: {
    titulo: 'Ubicación de los cicloparqueaderos',
    puntos: [
      'En entidades que atienden al público: interior de la edificación o el espacio más próximo al ingreso.',
      'Debe permitir controlar ingresos y salidas de quienes se acogen a los incentivos laborales.',
      'La cercanía no es estética: es control y seguridad.',
    ],
    cita: 'Los cicloparqueaderos de las entidades públicas o privadas que prestan servicios de atención al público, deben ubicarse al interior de la edificación o en el espacio más próximo al ingreso de la entidad, de modo tal que, según corresponda, permita llevar el control de los ingresos y salidas del personal que se acoja a las medidas de promoción en materia laboral.',
  },
  24: {
    titulo: 'Sistema de bicicleta pública: definición',
    puntos: [
      'Lo ponen a disposición las municipalidades provinciales y distritales.',
      'Préstamo gratuito o alquiler a personas inscritas e identificadas, dentro de un perímetro.',
      'Opera en infraestructura vial, ciclovial y complementaria, con medios automatizados o manuales.',
    ],
    cita: 'El Sistema de Bicicleta Pública es la puesta a disposición, por parte de las Municipalidades Provinciales y Distritales, de bicicletas a personas previamente inscritas e identificadas a través de un préstamo gratuito o alquiler para su uso como medio de transporte dentro de un perímetro determinado.',
  },
  25: {
    titulo: 'Fomento y financiamiento',
    puntos: [
      'Las municipalidades provinciales y distritales incentivan la bicicleta implementando el sistema.',
      'Pueden usar inversión pública y privada vigente.',
      'El mandato es territorial: cada jurisdicción en la suya.',
    ],
    cita: 'Las Municipalidades Provinciales y Distritales, incentivan el uso de la bicicleta, a través de la promoción e implementación del Sistema de Bicicleta Pública. […] pueden utilizar los mecanismos de inversión pública y privada previstos en la normativa vigente, para tal fin.',
  },
  26: {
    titulo: 'Planificación, intermodalidad e integración',
    puntos: [
      'Los gobiernos locales planifican el sistema evaluando gestión, financiamiento, operación, medios de pago, integración tarifaria y mantenimiento.',
      'El objetivo es funcionamiento y sostenibilidad, no un piloto sin operación.',
      'Cierra el círculo con la intermodalidad del artículo 6 de la ley.',
    ],
    cita: 'Los gobiernos locales planifican la implementación del Sistema de Bicicleta Pública considerando la evaluación del modelo de gestión, financiamiento, operación, medios de pago, integración tarifaria y mantenimiento; entre otros, que garanticen su funcionamiento y sostenibilidad.',
  },
}

export const dsDisposiciones: Record<number, ArticleContent> = {
  1: {
    titulo: 'Parámetros de cicloparqueaderos de transferencia modal',
    puntos: [
      'El MTC aprueba los parámetros técnicos de los cicloparqueaderos de transferencia en los Sistemas Integrados de Transporte.',
      'Plazo: 240 días calendario desde la vigencia del reglamento.',
      'Sin esos parámetros, el artículo 21.8 queda incompleto en la práctica.',
    ],
    cita: 'El MTC, dentro de los doscientos cuarenta días calendario siguientes a la vigencia del presente Reglamento, aprueba los parámetros técnicos para la implementación de los Cicloparqueaderos de Transferencia Modal ubicados en los Sistemas Integrados de Transporte.',
  },
  2: {
    titulo: 'Disposiciones que emita SERVIR',
    puntos: [
      'Cada entidad pública formula e implementa cómo certificar la asistencia en bicicleta.',
      'Debe concordar con lo que emita SERVIR.',
      'Plazo: 90 días calendario desde la vigencia del reglamento.',
    ],
    cita: 'Cada institución del sector público formula e implementa las medidas necesarias para el desarrollo y certificación de la asistencia de los/las servidores/as públicos/as al centro de labores, en concordancia con las disposiciones que emita SERVIR, dentro de los noventa días calendario siguientes a la vigencia del presente Reglamento.',
  },
  3: {
    titulo: 'Lineamientos del Ministerio de Educación',
    puntos: [
      'MINEDU aprueba lineamientos de educación vial y uso de la bicicleta.',
      'Alcance: educación básica (primaria y secundaria), técnico-productiva y superior, públicas y privadas, en todo el país.',
      'También fija forma, duración, periodicidad y evaluación. Plazo: 90 días calendario.',
    ],
    cita: 'El MINEDU, dentro de los noventa días calendario siguientes a la vigencia del presente Reglamento, aprueba los lineamientos para la promoción de la educación vial y del uso de la bicicleta en las instituciones educativas públicas y privadas de educación básica […]; así como, en las instituciones educativas de educación técnico-productiva y superiores […].',
  },
  4: {
    titulo: 'Suspensión del reporte del Día Nacional',
    puntos: [
      'Disposición complementaria transitoria única.',
      'Se suspendió hasta el 31 de julio de 2021 la obligación del numeral 6.2 (informe anual al MTC).',
      'Era una pausa de pandemia, no una derogación del Día Nacional.',
    ],
    cita: 'Dispóngase la suspensión hasta el 31 de julio del año 2021, de la aplicación del numeral 6.2 del artículo 6 del presente Reglamento, en lo referido a la obligación de la presentación de la información sobre las acciones adoptadas por el Día Nacional de la Bicicleta.',
  },
}

export const dsRnt = {
  titulo: 'Lo que el decreto cambia en el RNT y el RNGIV',
  puntos: [
    'Define ciclo, ciclista, bicicleta y bicicleta con SPA (motor ≤ 350 W, corta a 25 km/h; no es vehículo automotor).',
    'Preferencia del ciclo en ciclovía; peatón primero en intersecciones no señalizadas de esa infraestructura. Papeletas a ciclistas con carácter educativo durante un año.',
    'El RNGIV suma el Manual de Diseño Geométrico para infraestructura ciclovial y obliga a incluir movilidad sostenible en los planes viales.',
  ],
  cita: 'Apruébase el Reglamento de la Ley Nº 30936 […], modifica el Reglamento Nacional de Tránsito, aprobado por Decreto Supremo Nº 033-2001-MTC y el Reglamento Nacional de Gestión de Infraestructura Vial, aprobado por Decreto Supremo Nº 034-2008-MTC.',
}

export function dsArticle(n: number): ArticleContent {
  const data = dsArticulos[n]
  if (!data) throw new Error(`No hay contenido para el artículo ${n} del reglamento`)
  return data
}

export function dsDisposition(n: number): ArticleContent {
  const data = dsDisposiciones[n]
  if (!data) throw new Error(`No hay contenido para la disposición ${n} del reglamento`)
  return data
}
