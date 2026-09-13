import type { ReactNode } from 'react'

type Tone = 'promo' | 'duty' | 'neutral'

const fills: Record<Tone, string> = {
  promo: 'var(--accent-dim)',
  duty: 'var(--duty-dim)',
  neutral: 'var(--card)',
}

const strokes: Record<Tone, string> = {
  promo: 'var(--accent)',
  duty: 'var(--duty)',
  neutral: 'var(--line)',
}

export function Canvas({
  children,
  viewBox = '0 0 1100 430',
  label,
}: {
  children: ReactNode
  viewBox?: string
  label: string
}) {
  return (
    <svg className="diag" viewBox={viewBox} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

export function Panel({
  x,
  y,
  w,
  h,
  title,
  lines = [],
  tone = 'neutral',
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  lines?: string[]
  tone?: Tone
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="14" fill={fills[tone]} stroke={strokes[tone]} strokeWidth="2" />
      <text x="16" y="32" fontSize="20" fontWeight="700" fill={strokes[tone]}>
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={line} x="16" y={58 + i * 22} fontSize="16" fill="var(--muted)">
          {line}
        </text>
      ))}
    </g>
  )
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
  tone = 'promo',
}: {
  x1: number
  y1: number
  x2: number
  y2: number
  tone?: Tone
}) {
  const dx = x2 - x1
  const dy = y2 - y1
  const len = Math.hypot(dx, dy) || 1
  const ux = dx / len
  const uy = dy / len
  const ah = 12
  const tipX = x2
  const tipY = y2
  const baseX = x2 - ux * ah
  const baseY = y2 - uy * ah
  const px = -uy
  const py = ux
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={baseX}
        y2={baseY}
        stroke={strokes[tone]}
        strokeWidth="3"
      />
      <polygon
        points={`${tipX},${tipY} ${baseX + px * 6},${baseY + py * 6} ${baseX - px * 6},${baseY - py * 6}`}
        fill={strokes[tone]}
      />
    </g>
  )
}
