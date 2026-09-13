import { disposition } from '../content/ley30936'
import { Disp02Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Disp02() {
  const data = disposition(2)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Disp02Diagram />
    </ArticleFrame>
  )
}
