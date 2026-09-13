export type SlideKind = 'cover' | 'index' | 'article' | 'disposition' | 'close'

export type SlideMeta = {
  id: string
  path: string
  kind: SlideKind
  kicker: string
  title: string
  short: string
}

export const slides: SlideMeta[] = [
  {
    id: 'portada',
    path: '/portada',
    kind: 'cover',
    kicker: 'Curso',
    title: 'Ley que promueve y regula el uso de la bicicleta',
    short: 'Portada',
  },
  {
    id: 'indice',
    path: '/indice',
    kind: 'index',
    kicker: 'Mapa de la ley',
    title: 'Once artículos y cuatro disposiciones',
    short: 'Índice',
  },
  {
    id: 'art-1',
    path: '/art/1',
    kind: 'article',
    kicker: 'Artículo 1',
    title: 'Objeto de la Ley',
    short: 'Art. 1 · Objeto',
  },
  {
    id: 'art-2',
    path: '/art/2',
    kind: 'article',
    kicker: 'Artículo 2',
    title: 'Políticas públicas para el uso de la bicicleta',
    short: 'Art. 2 · Políticas',
  },
  {
    id: 'art-3',
    path: '/art/3',
    kind: 'article',
    kicker: 'Artículo 3',
    title: 'Día Nacional de la Bicicleta',
    short: 'Art. 3 · 3 de junio',
  },
  {
    id: 'art-4',
    path: '/art/4',
    kind: 'article',
    kicker: 'Artículo 4',
    title: 'Educación vial y uso de la bicicleta',
    short: 'Art. 4 · Educación',
  },
  {
    id: 'art-5',
    path: '/art/5',
    kind: 'article',
    kicker: 'Artículo 5',
    title: 'Adecuación de la infraestructura vial',
    short: 'Art. 5 · Infraestructura',
  },
  {
    id: 'art-6',
    path: '/art/6',
    kind: 'article',
    kicker: 'Artículo 6',
    title: 'Transporte intermodal',
    short: 'Art. 6 · Intermodalidad',
  },
  {
    id: 'art-7',
    path: '/art/7',
    kind: 'article',
    kicker: 'Artículo 7',
    title: 'Estacionamientos para bicicletas',
    short: 'Art. 7 · 5 %',
  },
  {
    id: 'art-8',
    path: '/art/8',
    kind: 'article',
    kicker: 'Artículo 8',
    title: 'Sistema de bicicleta pública',
    short: 'Art. 8 · Bici pública',
  },
  {
    id: 'art-9',
    path: '/art/9',
    kind: 'article',
    kicker: 'Artículo 9',
    title: 'Promoción en los centros laborales',
    short: 'Art. 9 · Trabajo',
  },
  {
    id: 'art-10',
    path: '/art/10',
    kind: 'article',
    kicker: 'Artículo 10',
    title: 'Derechos de los ciclistas',
    short: 'Art. 10 · Derechos',
  },
  {
    id: 'art-11',
    path: '/art/11',
    kind: 'article',
    kicker: 'Artículo 11',
    title: 'Obligaciones, infracciones y sanciones',
    short: 'Art. 11 · Infracciones',
  },
  {
    id: 'disp-1',
    path: '/disp/1',
    kind: 'disposition',
    kicker: 'Disposición primera',
    title: 'Modificación de la Ley 27181',
    short: '1.ª · Ley 27181',
  },
  {
    id: 'disp-2',
    path: '/disp/2',
    kind: 'disposition',
    kicker: 'Disposición segunda',
    title: 'Informe anual al Congreso',
    short: '2.ª · Informe',
  },
  {
    id: 'disp-3',
    path: '/disp/3',
    kind: 'disposition',
    kicker: 'Disposición tercera',
    title: 'Reglamento de la ley',
    short: '3.ª · Reglamento',
  },
  {
    id: 'disp-4',
    path: '/disp/4',
    kind: 'disposition',
    kicker: 'Disposición cuarta',
    title: 'Financiamiento',
    short: '4.ª · Presupuesto',
  },
  {
    id: 'cierre',
    path: '/cierre',
    kind: 'close',
    kicker: 'Cierre',
    title: 'Quién hace qué, según la propia ley',
    short: 'Cierre',
  },
]

export function parseHash(hash: string): string {
  const raw = hash.replace(/^#/, '').trim()
  const path = raw === '' ? '/portada' : raw.startsWith('/') ? raw : `/${raw}`
  const found = slides.find((slide) => slide.path === path)
  return found?.id ?? 'portada'
}

export function slideIndex(id: string): number {
  const index = slides.findIndex((slide) => slide.id === id)
  return index < 0 ? 0 : index
}
