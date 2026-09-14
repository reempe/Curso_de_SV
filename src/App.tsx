import { SlideShell } from './components/SlideShell'
import { useDeckNav } from './hooks/useDeckNav'
import { Hub } from './slides/Hub'
import { slideViews } from './slides/registry'

export default function App() {
  const { current } = useDeckNav()
  const View = slideViews[current.id] ?? Hub

  return (
    <SlideShell>
      <View />
    </SlideShell>
  )
}
