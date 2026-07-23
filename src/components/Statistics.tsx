import { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: 120, suffix: '+', label: 'Projects Completed', color: '#6366f1' },
  { value: 48, suffix: '', label: 'Happy Clients', color: '#8b5cf6' },
  { value: 7, suffix: '+', label: 'Years Experience', color: '#22d3ee' },
  { value: 4200, suffix: '+', label: 'GitHub Stars', color: '#f59e0b' },
  { value: 12, suffix: '', label: 'Countries Served', color: '#22c55e' },
  { value: 99.9, suffix: '%', label: 'Uptime SLA', color: '#ef4444' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, value])

  const formatted = value % 1 !== 0
    ? display.toFixed(1)
    : Math.round(display).toLocaleString()

  return <span ref={ref}>{formatted}{suffix}</span>
}

export default function Statistics() {
  const { ref, visible } = useReveal()

  return (
    <section id="stats" style={{ padding: '80px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 2,
            borderRadius: 24,
            overflow: 'hidden',
            border: '1px solid var(--border)',
            background: 'var(--border)',
          }}>
            {stats.map(s => (
              <div
                key={s.label}
                style={{
                  padding: '36px 24px',
                  background: 'var(--card-bg)',
                  textAlign: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--card-bg)')}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  color: s.color,
                  lineHeight: 1, marginBottom: 8,
                }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 13,
                  color: 'var(--text-muted)',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
