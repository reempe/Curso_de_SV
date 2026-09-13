import { article } from '../content/ley30936'
import { Art03Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art03() {
  const data = article(3)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art03Diagram />
    </ArticleFrame>
  )
}
