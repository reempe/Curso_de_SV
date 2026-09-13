import { article } from '../content/ley30936'
import { Art01Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art01() {
  const data = article(1)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art01Diagram />
    </ArticleFrame>
  )
}
