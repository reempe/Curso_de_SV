import { article } from '../content/ley30936'
import { Art09Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art09() {
  const data = article(9)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art09Diagram />
    </ArticleFrame>
  )
}
