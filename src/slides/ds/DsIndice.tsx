import { IndexGrid } from '../../components/IndexGrid'
import { dsSlides } from '../../data/slides'
import { useDeckNav } from '../../hooks/useDeckNav'

export function DsIndice() {
  const { go } = useDeckNav()
  return (
    <div className="layout">
      <h1>Mapa del D.S. 012-2020-MTC</h1>
      <IndexGrid items={dsSlides} onSelect={go} grouped />
    </div>
  )
}
