import type { SlideMeta } from '../data/slides'

type Props = {
  items: SlideMeta[]
  onSelect: (id: string) => void
  grouped?: boolean
}

export function IndexGrid({ items, onSelect, grouped }: Props) {
  const cards = items.filter((slide) => slide.kind !== 'cover' && slide.kind !== 'index')

  if (!grouped) {
    return (
      <div className="index-grid">
        {cards.map((slide) => (
          <IndexCard key={slide.id} slide={slide} onSelect={onSelect} />
        ))}
      </div>
    )
  }

  const chapters: { title: string; slides: SlideMeta[] }[] = []
  for (const slide of cards) {
    const title = slide.chapter ?? 'Otras láminas'
    const last = chapters[chapters.length - 1]
    if (last && last.title === title) {
      last.slides.push(slide)
    } else {
      chapters.push({ title, slides: [slide] })
    }
  }

  return (
    <div className="index-chapters">
      {chapters.map((chapter) => (
        <section key={chapter.title} className="index-chapter">
          <h2>{chapter.title}</h2>
          <div className="index-grid compact">
            {chapter.slides.map((slide) => (
              <IndexCard key={slide.id} slide={slide} onSelect={onSelect} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function IndexCard({
  slide,
  onSelect,
}: {
  slide: SlideMeta
  onSelect: (id: string) => void
}) {
  return (
    <button type="button" className="index-card" onClick={() => onSelect(slide.id)}>
      <span className="n">{slide.kicker}</span>
      <span className="t">{slide.title}</span>
    </button>
  )
}
