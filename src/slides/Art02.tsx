import { article } from '../content/ley30936'
import { Art02Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art02() {
  const data = article(2)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art02Diagram />
    </ArticleFrame>
  )
}
