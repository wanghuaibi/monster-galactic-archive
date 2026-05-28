import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { MonsterData } from '../data/monsterData'

type AbilityChartProps = {
  abilities: MonsterData['abilities']
}

export function AbilityChart({ abilities }: AbilityChartProps) {
  const chartData = Object.entries(abilities).map(([ability, value]) => ({
    ability,
    value,
  }))

  return (
    <div className="ability-chart" aria-label="Monster ability chart">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: -18 }}>
          <CartesianGrid stroke="rgba(145, 164, 199, 0.16)" vertical={false} />
          <XAxis
            dataKey="ability"
            interval={0}
            tick={{ fill: '#91a4c7', fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(145, 164, 199, 0.24)' }}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: '#91a4c7', fontSize: 11 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(120, 232, 255, 0.08)' }}
            contentStyle={{
              background: 'rgba(5, 8, 22, 0.92)',
              border: '1px solid rgba(120, 232, 255, 0.28)',
              borderRadius: 12,
              color: '#d7e3ff',
            }}
            labelStyle={{ color: '#78e8ff' }}
          />
          <Bar
            dataKey="value"
            fill="#78e8ff"
            radius={[8, 8, 3, 3]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
