import { useMemo, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { ProceduralMonster } from './ProceduralMonster'

function StarField() {
  const positions = useMemo(() => {
    const points = new Float32Array(360)

    for (let i = 0; i < points.length; i += 3) {
      const seed = i + 1
      const x = Math.sin(seed * 12.9898) * 43758.5453
      const y = Math.sin(seed * 78.233) * 24634.6345
      const z = Math.sin(seed * 37.719) * 13521.9171

      points[i] = (x - Math.floor(x) - 0.5) * 16
      points[i + 1] = (y - Math.floor(y) - 0.5) * 10
      points[i + 2] = -(z - Math.floor(z)) * 12 - 2
    }

    return points
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial color="#9edfff" size={0.035} sizeAttenuation />
    </points>
  )
}

export function MonsterViewer() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null)

  return (
    <section className="glass-card monster-viewer" aria-label="3D monster viewer">
      <div className="viewer-toolbar">
        <div>
          <div className="panel-marker">Viewer Module</div>
          <h2>3D Observation Chamber</h2>
        </div>
        <button
          className="reset-view-button"
          type="button"
          onClick={() => controlsRef.current?.reset()}
        >
          Reset View
        </button>
      </div>

      <div className="viewer-canvas" aria-label="Interactive 3D monster scene">
        <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
          <color attach="background" args={['#050816']} />
          <fog attach="fog" args={['#050816', 8, 18]} />
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 4]} intensity={1.25} />
          <pointLight color="#78e8ff" position={[-3, 2.5, 3]} intensity={1.4} />
          <pointLight color="#c2a3ff" position={[3, 1.5, -2]} intensity={0.9} />
          <StarField />
          <ProceduralMonster />
          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.08}
            enablePan={false}
            minDistance={4}
            maxDistance={10}
          />
        </Canvas>
      </div>
    </section>
  )
}
