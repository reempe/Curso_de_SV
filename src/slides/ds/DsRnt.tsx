import { dsRnt } from '../../content/ds0122020'
import { dsBridges } from '../../data/bridges'
import { DsRntDiagram } from '../../diagrams/dsDiagrams'
import { ArticleFrame } from '../ArticleFrame'

export function DsRnt() {
  return (
    <ArticleFrame
      title={dsRnt.titulo}
      points={dsRnt.puntos}
      cita={dsRnt.cita}
      citeLabel="Texto del decreto."
      bridges={dsBridges['ds-rnt']}
    >
      <DsRntDiagram />
    </ArticleFrame>
  )
}
