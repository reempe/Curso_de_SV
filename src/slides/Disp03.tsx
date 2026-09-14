import { disposition } from '../content/ley30936'
import { leyBridges } from '../data/bridges'
import { Disp03Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Disp03() {
  const data = disposition(3)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita} bridges={leyBridges['ley-disp-3']}>
      <Disp03Diagram />
    </ArticleFrame>
  )
}
