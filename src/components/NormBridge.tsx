import { useDeckNav } from '../hooks/useDeckNav'
import type { Bridge } from '../data/bridges'

export function NormBridge({ bridges }: { bridges: Bridge[] }) {
  const { go } = useDeckNav()
  if (bridges.length === 0) return null
  return (
    <div className="bridge-row">
      {bridges.map((bridge) => (
        <button
          key={bridge.to}
          type="button"
          className="bridge-btn"
          onClick={() => go(bridge.to)}
        >
          {bridge.label}
        </button>
      ))}
    </div>
  )
}
