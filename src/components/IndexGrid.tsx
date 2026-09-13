import { slides } from '../data/slides'

type Props = {
  onSelect: (id: string) => void
}

export function IndexGrid({ onSelect }: Props) {
  const items = slides.filter((slide) => slide.kind !== 'cover' && slide.id !== 'indice')
  return (
    <div className="index-grid">
      {items.map((slide) => (
        <button
          key={slide.id}
          type="button"
          className="index-card"
          onClick={() => onSelect(slide.id)}
        >
          <span className="n">{slide.kicker}</span>
          <span className="t">{slide.title}</span>
        </button>
      ))}
    </div>
  )
}
