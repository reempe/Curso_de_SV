import { disposition } from '../content/ley30936'
import { Disp01Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Disp01() {
  const data = disposition(1)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Disp01Diagram />
    </ArticleFrame>
  )
}
