import { article } from '../content/ley30936'
import { Art11Diagram } from '../diagrams/lawDiagrams'
import { ArticleFrame } from './ArticleFrame'

export function Art11() {
  const data = article(11)
  return (
    <ArticleFrame title={data.titulo} points={data.puntos} cita={data.cita}>
      <Art11Diagram />
    </ArticleFrame>
  )
}
