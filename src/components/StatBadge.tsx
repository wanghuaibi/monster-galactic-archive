type StatBadgeProps = {
  label: string
  value: string | number
  variant?: 'default' | 'danger'
}

export function StatBadge({ label, value, variant = 'default' }: StatBadgeProps) {
  return (
    <div className={`stat-badge stat-badge--${variant}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}
