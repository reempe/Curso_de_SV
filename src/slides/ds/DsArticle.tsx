import type { ComponentType } from 'react'
import { dsArticle } from '../../content/ds0122020'
import { dsBridges } from '../../data/bridges'
import {
  DsArt01Diagram,
  DsArt03Diagram,
  DsArt06Diagram,
  DsArt08Diagram,
  DsArt11Diagram,
  DsArt17Diagram,
  DsArt21Diagram,
  DsArt24Diagram,
  DsArt26Diagram,
  DsGenericDiagram,
} from '../../diagrams/dsDiagrams'
import { ArticleFrame } from '../ArticleFrame'

const diagrams: Record<number, ComponentType> = {
  1: DsArt01Diagram,
  3: DsArt03Diagram,
  6: DsArt06Diagram,
  8: DsArt08Diagram,
  11: DsArt11Diagram,
  17: DsArt17Diagram,
  21: DsArt21Diagram,
  24: DsArt24Diagram,
  26: DsArt26Diagram,
}

export function DsArticle({ n }: { n: number }) {
  const data = dsArticle(n)
  const Diagram = diagrams[n]
  const bridges = dsBridges[`ds-art-${n}`]
  return (
    <ArticleFrame
      title={data.titulo}
      points={data.puntos}
      cita={data.cita}
      citeLabel="Texto del reglamento."
      bridges={bridges}
    >
      {Diagram ? (
        <Diagram />
      ) : (
        <DsGenericDiagram kicker={`Art. ${n}`} title={data.titulo} lines={data.puntos.slice(0, 3)} />
      )}
    </ArticleFrame>
  )
}
