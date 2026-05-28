import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

export function ProceduralMonster() {
  const monsterRef = useRef<Group>(null)

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    const monster = monsterRef.current

    if (!monster) {
      return
    }

    const breath = 1 + Math.sin(elapsed * 2.1) * 0.025
    monster.position.y = Math.sin(elapsed * 1.35) * 0.12
    monster.scale.set(breath, 1 + Math.sin(elapsed * 2.1) * 0.018, breath)
  })

  return (
    <group ref={monsterRef} position={[0, -0.65, 0]} rotation={[0, -0.25, 0]}>
      <mesh position={[0, 0.7, 0]} castShadow>
        <sphereGeometry args={[1.22, 48, 32]} />
        <meshStandardMaterial color="#4f8cff" roughness={0.55} metalness={0.08} />
      </mesh>

      <mesh position={[0, 1.85, 0.05]} castShadow>
        <sphereGeometry args={[0.82, 48, 32]} />
        <meshStandardMaterial color="#6a5bff" roughness={0.5} metalness={0.05} />
      </mesh>

      <mesh position={[-0.34, 1.95, 0.72]}>
        <sphereGeometry args={[0.13, 24, 16]} />
        <meshStandardMaterial
          color="#dffcff"
          emissive="#78e8ff"
          emissiveIntensity={1.2}
        />
      </mesh>
      <mesh position={[0.34, 1.95, 0.72]}>
        <sphereGeometry args={[0.13, 24, 16]} />
        <meshStandardMaterial
          color="#dffcff"
          emissive="#78e8ff"
          emissiveIntensity={1.2}
        />
      </mesh>

      <mesh position={[-0.48, 2.58, -0.02]} rotation={[0.28, 0, -0.42]}>
        <coneGeometry args={[0.18, 0.72, 24]} />
        <meshStandardMaterial
          color="#d8b7ff"
          emissive="#8c5dff"
          emissiveIntensity={0.35}
        />
      </mesh>
      <mesh position={[0.48, 2.58, -0.02]} rotation={[0.28, 0, 0.42]}>
        <coneGeometry args={[0.18, 0.72, 24]} />
        <meshStandardMaterial
          color="#d8b7ff"
          emissive="#8c5dff"
          emissiveIntensity={0.35}
        />
      </mesh>

      <mesh position={[-1.05, 0.85, 0.08]} rotation={[0.2, 0, 0.65]}>
        <capsuleGeometry args={[0.18, 0.92, 10, 22]} />
        <meshStandardMaterial color="#67b7ff" roughness={0.5} />
      </mesh>
      <mesh position={[1.05, 0.85, 0.08]} rotation={[0.2, 0, -0.65]}>
        <capsuleGeometry args={[0.18, 0.92, 10, 22]} />
        <meshStandardMaterial color="#67b7ff" roughness={0.5} />
      </mesh>

      <mesh position={[-0.48, -0.48, 0.15]} rotation={[0.1, 0, 0.08]}>
        <capsuleGeometry args={[0.24, 0.78, 10, 22]} />
        <meshStandardMaterial color="#376ddd" roughness={0.58} />
      </mesh>
      <mesh position={[0.48, -0.48, 0.15]} rotation={[0.1, 0, -0.08]}>
        <capsuleGeometry args={[0.24, 0.78, 10, 22]} />
        <meshStandardMaterial color="#376ddd" roughness={0.58} />
      </mesh>

      <mesh position={[0, 0.38, -1.18]} rotation={[1.1, 0, 0]}>
        <coneGeometry args={[0.28, 1.55, 28]} />
        <meshStandardMaterial color="#5dc5ff" roughness={0.46} />
      </mesh>

      {[-0.48, 0, 0.48].map((x, index) => (
        <mesh key={x} position={[x, 1.05 + index * 0.12, -1.02]}>
          <sphereGeometry args={[0.11, 20, 12]} />
          <meshStandardMaterial
            color="#bdfcff"
            emissive="#78e8ff"
            emissiveIntensity={0.75}
          />
        </mesh>
      ))}

      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 8, 96]} />
        <meshBasicMaterial color="#78e8ff" transparent opacity={0.28} />
      </mesh>
    </group>
  )
}
