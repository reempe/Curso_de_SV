import { article } from '../content/ley30936'
import { leyBridges } from '../data/bridges'
import { Art06Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art06() {
  const data = article(6)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita} bridges={leyBridges['ley-art-6']}>
      <Art06Diagram />
    </ArticleFrame>
  )
}
