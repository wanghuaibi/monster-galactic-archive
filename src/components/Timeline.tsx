import type { MonsterData } from '../data/monsterData'

type TimelineProps = {
  items: MonsterData['timeline']
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="timeline" aria-label="Discovery timeline">
      {items.map((item) => (
        <li className="timeline-item" key={item.year}>
          <span className="timeline-year">{item.year}</span>
          <p>{item.event}</p>
        </li>
      ))}
    </ol>
  )
}
