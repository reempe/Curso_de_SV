import { disposition } from '../content/ley30936'
import { Disp04Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Disp04() {
  const data = disposition(4)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Disp04Diagram />
    </ArticleFrame>
  )
}
