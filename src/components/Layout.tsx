import { MonsterInfoPanel } from './MonsterInfoPanel'
import { MonsterViewer } from './MonsterViewer'

export function Layout() {
  return (
    <main className="archive-shell">
      <header className="archive-header">
        <p className="archive-kicker">Deep Space Creature Index</p>
        <h1>Monster Galactic Archive</h1>
        <p className="archive-subtitle">
          Interactive 3D creature profile from deep space
        </p>
      </header>

      <section className="archive-grid" aria-label="Monster archive workspace">
        <MonsterViewer />
        <MonsterInfoPanel />
      </section>

      <footer className="archive-footer">
        Archive generated for experimental creature observation.
      </footer>
    </main>
  )
}
