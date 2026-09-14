export type DeckId = 'hub' | 'ley' | 'ds'

export type SlideKind =
  | 'hub'
  | 'cover'
  | 'index'
  | 'map'
  | 'article'
  | 'disposition'
  | 'rnt'
  | 'close'

export type SlideMeta = {
  id: string
  path: string
  kind: SlideKind
  deck: DeckId
  kicker: string
  title: string
  short: string
  chapter?: string
}

export const hubSlide: SlideMeta = {
  id: 'hub',
  path: '/inicio',
  kind: 'hub',
  deck: 'hub',
  kicker: 'Curso',
  title: 'Ley 30936 y su reglamento',
  short: 'Inicio',
}

export const leySlides: SlideMeta[] = [
  {
    id: 'ley-portada',
    path: '/ley/portada',
    kind: 'cover',
    deck: 'ley',
    kicker: 'Curso',
    title: 'Ley que promueve y regula el uso de la bicicleta',
    short: 'Portada',
  },
  {
    id: 'ley-indice',
    path: '/ley/indice',
    kind: 'index',
    deck: 'ley',
    kicker: 'Mapa de la ley',
    title: 'Once artículos y cuatro disposiciones',
    short: 'Índice',
  },
  {
    id: 'ley-art-1',
    path: '/ley/art/1',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 1',
    title: 'Objeto de la Ley',
    short: 'Art. 1 · Objeto',
  },
  {
    id: 'ley-art-2',
    path: '/ley/art/2',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 2',
    title: 'Políticas públicas para el uso de la bicicleta',
    short: 'Art. 2 · Políticas',
  },
  {
    id: 'ley-art-3',
    path: '/ley/art/3',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 3',
    title: 'Día Nacional de la Bicicleta',
    short: 'Art. 3 · 3 de junio',
  },
  {
    id: 'ley-art-4',
    path: '/ley/art/4',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 4',
    title: 'Educación vial y uso de la bicicleta',
    short: 'Art. 4 · Educación',
  },
  {
    id: 'ley-art-5',
    path: '/ley/art/5',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 5',
    title: 'Adecuación de la infraestructura vial',
    short: 'Art. 5 · Infraestructura',
  },
  {
    id: 'ley-art-6',
    path: '/ley/art/6',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 6',
    title: 'Transporte intermodal',
    short: 'Art. 6 · Intermodalidad',
  },
  {
    id: 'ley-art-7',
    path: '/ley/art/7',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 7',
    title: 'Estacionamientos para bicicletas',
    short: 'Art. 7 · 5 %',
  },
  {
    id: 'ley-art-8',
    path: '/ley/art/8',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 8',
    title: 'Sistema de bicicleta pública',
    short: 'Art. 8 · Bici pública',
  },
  {
    id: 'ley-art-9',
    path: '/ley/art/9',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 9',
    title: 'Promoción en los centros laborales',
    short: 'Art. 9 · Trabajo',
  },
  {
    id: 'ley-art-10',
    path: '/ley/art/10',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 10',
    title: 'Derechos de los ciclistas',
    short: 'Art. 10 · Derechos',
  },
  {
    id: 'ley-art-11',
    path: '/ley/art/11',
    kind: 'article',
    deck: 'ley',
    kicker: 'Artículo 11',
    title: 'Obligaciones, infracciones y sanciones',
    short: 'Art. 11 · Infracciones',
  },
  {
    id: 'ley-disp-1',
    path: '/ley/disp/1',
    kind: 'disposition',
    deck: 'ley',
    kicker: 'Disposición primera',
    title: 'Modificación de la Ley 27181',
    short: '1.ª · Ley 27181',
  },
  {
    id: 'ley-disp-2',
    path: '/ley/disp/2',
    kind: 'disposition',
    deck: 'ley',
    kicker: 'Disposición segunda',
    title: 'Informe anual al Congreso',
    short: '2.ª · Informe',
  },
  {
    id: 'ley-disp-3',
    path: '/ley/disp/3',
    kind: 'disposition',
    deck: 'ley',
    kicker: 'Disposición tercera',
    title: 'Reglamento de la ley',
    short: '3.ª · Reglamento',
  },
  {
    id: 'ley-disp-4',
    path: '/ley/disp/4',
    kind: 'disposition',
    deck: 'ley',
    kicker: 'Disposición cuarta',
    title: 'Financiamiento',
    short: '4.ª · Presupuesto',
  },
  {
    id: 'ley-cierre',
    path: '/ley/cierre',
    kind: 'close',
    deck: 'ley',
    kicker: 'Cierre',
    title: 'Quién hace qué, según la propia ley',
    short: 'Cierre',
  },
]

const dsArt = (
  n: number,
  title: string,
  short: string,
  chapter: string,
): SlideMeta => ({
  id: `ds-art-${n}`,
  path: `/ds/art/${n}`,
  kind: 'article',
  deck: 'ds',
  kicker: `Artículo ${n}`,
  title,
  short,
  chapter,
})

export const dsSlides: SlideMeta[] = [
  {
    id: 'ds-portada',
    path: '/ds/portada',
    kind: 'cover',
    deck: 'ds',
    kicker: 'Curso',
    title: 'Reglamento de la Ley que promueve el uso de la bicicleta',
    short: 'Portada',
  },
  {
    id: 'ds-indice',
    path: '/ds/indice',
    kind: 'index',
    deck: 'ds',
    kicker: 'Mapa del reglamento',
    title: 'Veintiséis artículos y cuatro disposiciones',
    short: 'Índice',
  },
  {
    id: 'ds-mapa',
    path: '/ds/mapa',
    kind: 'map',
    deck: 'ds',
    kicker: 'El decreto',
    title: 'Tres piezas en un solo D.S.',
    short: 'Mapa del D.S.',
    chapter: 'El decreto',
  },
  dsArt(1, 'Objeto', 'Art. 1 · Objeto', 'Título I · Generales'),
  dsArt(2, 'Finalidad', 'Art. 2 · Finalidad', 'Título I · Generales'),
  dsArt(3, 'Ámbito de aplicación', 'Art. 3 · Ámbito', 'Título I · Generales'),
  dsArt(4, 'Abreviaturas', 'Art. 4 · Siglas', 'Título I · Generales'),
  dsArt(5, 'Políticas públicas del MTC', 'Art. 5 · MTC', 'Título II · Promoción'),
  dsArt(6, 'Día Nacional de la Bicicleta', 'Art. 6 · 3 de junio', 'Título II · Promoción'),
  dsArt(7, 'Estadísticas del INEI', 'Art. 7 · INEI', 'Título II · Promoción'),
  dsArt(8, 'Derechos y obligaciones', 'Art. 8 · Al RNT', 'Título II · Promoción'),
  dsArt(9, 'Alcance en instituciones educativas', 'Art. 9 · II.EE.', 'Educación vial'),
  dsArt(10, 'Objetivos de la educación vial', 'Art. 10 · Objetivos', 'Educación vial'),
  dsArt(11, 'MINEDU norma, MTC aporta contenido', 'Art. 11 · MINEDU/MTC', 'Educación vial'),
  dsArt(12, 'Jornadas en educación superior', 'Art. 12 · Superior', 'Educación vial'),
  dsArt(13, 'Catálogo de medidas', 'Art. 13 · Medidas', 'Educación vial'),
  dsArt(14, 'Gobiernos regionales y locales', 'Art. 14 · GR/GL', 'Educación vial'),
  dsArt(15, 'Programas municipales ambientales', 'Art. 15 · Ambiental', 'Educación vial'),
  dsArt(16, 'Alcance laboral', 'Art. 16 · Alcance', 'Centros laborales'),
  dsArt(17, 'Cinco incentivos en el trabajo', 'Art. 17 · Incentivos', 'Centros laborales'),
  dsArt(18, 'Buenas prácticas del MTPE', 'Art. 18 · MTPE', 'Centros laborales'),
  dsArt(19, 'Ciclovías en GR y GL', 'Art. 19 · Planes', 'Infraestructura'),
  dsArt(20, 'Inversión y mantenimiento', 'Art. 20 · Inversión', 'Infraestructura'),
  dsArt(21, 'Estacionamientos: 5 % neto', 'Art. 21 · 5 %', 'Infraestructura'),
  dsArt(22, 'Dimensionamiento CE.030', 'Art. 22 · CE.030', 'Infraestructura'),
  dsArt(23, 'Ubicación de cicloparqueaderos', 'Art. 23 · Ingreso', 'Infraestructura'),
  dsArt(24, 'Bicicleta pública: definición', 'Art. 24 · Definición', 'Bicicleta pública'),
  dsArt(25, 'Fomento y financiamiento', 'Art. 25 · Financiar', 'Bicicleta pública'),
  dsArt(26, 'Planificación e integración', 'Art. 26 · Sostenible', 'Bicicleta pública'),
  {
    id: 'ds-disp-1',
    path: '/ds/disp/1',
    kind: 'disposition',
    deck: 'ds',
    kicker: 'DCF primera',
    title: 'Parámetros de transferencia modal',
    short: '1.ª · 240 días',
    chapter: 'Disposiciones',
  },
  {
    id: 'ds-disp-2',
    path: '/ds/disp/2',
    kind: 'disposition',
    deck: 'ds',
    kicker: 'DCF segunda',
    title: 'Certificación SERVIR',
    short: '2.ª · 90 días',
    chapter: 'Disposiciones',
  },
  {
    id: 'ds-disp-3',
    path: '/ds/disp/3',
    kind: 'disposition',
    deck: 'ds',
    kicker: 'DCF tercera',
    title: 'Lineamientos MINEDU',
    short: '3.ª · 90 días',
    chapter: 'Disposiciones',
  },
  {
    id: 'ds-disp-4',
    path: '/ds/disp/4',
    kind: 'disposition',
    deck: 'ds',
    kicker: 'DCT única',
    title: 'Suspensión del reporte 2021',
    short: 'Única · 31/07/2021',
    chapter: 'Disposiciones',
  },
  {
    id: 'ds-rnt',
    path: '/ds/rnt',
    kind: 'rnt',
    deck: 'ds',
    kicker: 'Modificatorias',
    title: 'RNT y RNGIV: lo que cambia el decreto',
    short: 'RNT · RNGIV',
    chapter: 'Modificatorias',
  },
  {
    id: 'ds-cierre',
    path: '/ds/cierre',
    kind: 'close',
    deck: 'ds',
    kicker: 'Cierre',
    title: 'Quién hace qué, según el reglamento',
    short: 'Cierre',
    chapter: 'Cierre',
  },
]

export const allSlides: SlideMeta[] = [hubSlide, ...leySlides, ...dsSlides]

const leyAliases: Record<string, string> = {
  '/portada': '/ley/portada',
  '/indice': '/ley/indice',
  '/cierre': '/ley/cierre',
}

for (let n = 1; n <= 11; n += 1) {
  leyAliases[`/art/${n}`] = `/ley/art/${n}`
}
for (let n = 1; n <= 4; n += 1) {
  leyAliases[`/disp/${n}`] = `/ley/disp/${n}`
}

function normalizePath(hash: string): string {
  const raw = hash.replace(/^#/, '').trim()
  if (raw === '' || raw === '/') return '/inicio'
  const path = raw.startsWith('/') ? raw : `/${raw}`
  return leyAliases[path] ?? path
}

export function parseHash(hash: string): string {
  const path = normalizePath(hash)
  const found = allSlides.find((slide) => slide.path === path)
  return found?.id ?? 'hub'
}

export function slideById(id: string): SlideMeta {
  return allSlides.find((slide) => slide.id === id) ?? hubSlide
}

export function slidesOf(deck: DeckId): SlideMeta[] {
  if (deck === 'hub') return [hubSlide]
  if (deck === 'ley') return leySlides
  return dsSlides
}

export function slideIndexInDeck(id: string): number {
  const slide = slideById(id)
  const list = slidesOf(slide.deck)
  const index = list.findIndex((item) => item.id === id)
  return index < 0 ? 0 : index
}

export const otherDeckStart: Record<'ley' | 'ds', string> = {
  ley: 'ds-portada',
  ds: 'ley-portada',
}
