import { IndexGrid } from '../../components/IndexGrid'
import { paperSlides } from '../../data/slides'
import { useDeckNav } from '../../hooks/useDeckNav'

export function PaperIndice() {
  const { go } = useDeckNav()
  return (
    <div className="layout">
      <h1>Mapa de la Sección 4 · Santos et al. (2010)</h1>
      <IndexGrid items={paperSlides} onSelect={go} grouped />
    </div>
  )
}
