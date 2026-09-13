import { SlideShell } from './components/SlideShell'
import { useDeckNav } from './hooks/useDeckNav'
import { Portada } from './slides/Portada'
import { slideViews } from './slides/registry'

export default function App() {
  const { current } = useDeckNav()
  const View = slideViews[current.id] ?? Portada

  return (
    <SlideShell>
      <View />
    </SlideShell>
  )
}
