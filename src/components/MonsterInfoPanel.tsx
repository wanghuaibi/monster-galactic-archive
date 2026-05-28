import { AbilityChart } from './AbilityChart'
import { StatBadge } from './StatBadge'
import { Timeline } from './Timeline'
import { monsterData } from '../data/monsterData'

export function MonsterInfoPanel() {
  return (
    <aside className="glass-card monster-info" aria-label="Monster data archive">
      <div className="info-header">
        <div>
          <div className="panel-marker">Archive Module</div>
          <h2>Monster Data Archive</h2>
        </div>
        <span className="threat-badge">Threat {monsterData.threatLevel}</span>
      </div>

      <div className="monster-profile">
        <div>
          <p className="record-label">Creature ID</p>
          <p className="record-value">{monsterData.id}</p>
        </div>
        <div>
          <p className="record-label">Name</p>
          <p className="record-value">{monsterData.name}</p>
        </div>
      </div>

      <div className="stat-grid">
        <StatBadge label="Planet" value={monsterData.planet} />
        <StatBadge label="Age" value={`${monsterData.age} cycles`} />
        <StatBadge label="Status" value={monsterData.status} />
        <StatBadge
          label="Danger"
          value={monsterData.threatLevel}
          variant="danger"
        />
      </div>

      <section className="info-section">
        <h3>Hobbies</h3>
        <ul className="hobby-list">
          {monsterData.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      </section>

      <section className="info-section">
        <h3>Traits</h3>
        <div className="trait-list">
          {monsterData.traits.map((trait) => (
            <span className="trait-pill" key={trait}>
              {trait}
            </span>
          ))}
        </div>
      </section>

      <section className="info-section">
        <h3>Scan Report</h3>
        <div className="scan-report">
          <span>SCAN://MG-042</span>
          <p>{monsterData.scanReport}</p>
        </div>
      </section>

      <section className="info-section">
        <h3>Ability Matrix</h3>
        <AbilityChart abilities={monsterData.abilities} />
      </section>

      <section className="info-section">
        <h3>Discovery Timeline</h3>
        <Timeline items={monsterData.timeline} />
      </section>
    </aside>
  )
}
