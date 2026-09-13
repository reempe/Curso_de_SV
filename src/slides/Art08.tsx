import { article } from '../content/ley30936'
import { Art08Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art08() {
  const data = article(8)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art08Diagram />
    </ArticleFrame>
  )
}
