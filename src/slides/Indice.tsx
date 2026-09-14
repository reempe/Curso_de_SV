import { IndexGrid } from '../components/IndexGrid'
import { leySlides } from '../data/slides'
import { useDeckNav } from '../hooks/useDeckNav'

export function Indice() {
  const { go } = useDeckNav()
  return (
    <div className="layout">
      <h1>Mapa de la Ley 30936</h1>
      <IndexGrid items={leySlides} onSelect={go} />
    </div>
  )
}
