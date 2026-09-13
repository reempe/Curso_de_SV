import { disposition } from '../content/ley30936'
import { Disp03Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Disp03() {
  const data = disposition(3)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Disp03Diagram />
    </ArticleFrame>
  )
}
