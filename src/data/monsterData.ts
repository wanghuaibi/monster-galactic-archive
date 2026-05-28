export const monsterData = {
  id: 'MG-042',
  name: 'Nebula Horn Beast',
  planet: 'Zorath-9',
  age: 326,
  threatLevel: 'B+',
  status: 'Observable, keep safe distance',
  hobbies: [
    'Collecting meteor fragments',
    'Chasing stardust',
    'Listening to low-frequency cosmic noise',
  ],
  traits: [
    'Nocturnal',
    'Bioluminescent skin',
    'Cold-resistant',
    'Mineral eater',
    'Short-range blink movement',
  ],
  abilities: {
    Strength: 88,
    Speed: 64,
    Intelligence: 72,
    Defense: 91,
    Affinity: 38,
  },
  timeline: [
    {
      year: 2198,
      event:
        'First footprints discovered in the northern hemisphere of Zorath-9',
    },
    {
      year: 2201,
      event: 'Night glow images captured',
    },
    {
      year: 2207,
      event: 'Remote biological scan completed',
    },
    {
      year: 2212,
      event: 'Non-contact observation archive established',
    },
  ],
  scanReport:
    'Lifeform scan complete. This creature shows high defensive capacity and low affinity. Safe-distance observation is recommended.',
} as const

export type MonsterData = typeof monsterData
