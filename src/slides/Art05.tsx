import { article } from '../content/ley30936'
import { leyBridges } from '../data/bridges'
import { Art05Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art05() {
  const data = article(5)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita} bridges={leyBridges['ley-art-5']}>
      <Art05Diagram />
    </ArticleFrame>
  )
}
