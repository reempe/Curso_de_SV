import { dsDisposition } from '../../content/ds0122020'
import { dsBridges } from '../../data/bridges'
import {
  DsDisp01Diagram,
  DsDisp02Diagram,
  DsDisp03Diagram,
  DsDisp04Diagram,
} from '../../diagrams/dsDiagrams'
import { ArticleFrame } from '../ArticleFrame'

const diagrams = {
  1: DsDisp01Diagram,
  2: DsDisp02Diagram,
  3: DsDisp03Diagram,
  4: DsDisp04Diagram,
}

export function DsDisposition({ n }: { n: 1 | 2 | 3 | 4 }) {
  const data = dsDisposition(n)
  const Diagram = diagrams[n]
  return (
    <ArticleFrame
      title={data.titulo}
      points={data.puntos}
      cita={data.cita}
      citeLabel="Texto del reglamento."
      bridges={dsBridges[`ds-disp-${n}`]}
    >
      <Diagram />
    </ArticleFrame>
  )
}
