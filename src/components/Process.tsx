import { Search, Map, Code2, Rocket } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your problem space. I audit existing systems, understand constraints, identify bottlenecks, and define success metrics before writing a single line of code.',
    duration: 'Week 1',
    color: '#6366f1',
  },
  {
    icon: Map,
    number: '02',
    title: 'Planning',
    desc: 'Architecture design, tech stack selection, timeline estimation, and risk analysis. You get a detailed spec document and project plan with clear milestones.',
    duration: 'Week 1-2',
    color: '#8b5cf6',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development',
    desc: 'Iterative builds with weekly demos, daily async updates, and full test coverage. You always have visibility into progress and can steer the direction.',
    duration: 'Weeks 2–N',
    color: '#22d3ee',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Support',
    desc: 'Zero-downtime deployment, full observability setup, documentation, and a 20-day support window. I don\'t disappear after launch.',
    duration: 'Final week+',
    color: '#22c55e',
  },
]

export default function Process() {
  const { ref, visible } = useReveal()

  return (
    <section id="process" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>How I Work</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            My <span className="gradient-text">Process</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            A structured approach that minimizes surprises and maximizes the quality of what we ship together.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 24,
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: 40, left: '12.5%', right: '12.5%',
            height: 2,
            background: 'linear-gradient(90deg, var(--primary), var(--accent), var(--accent-2), #22c55e)',
            opacity: 0.2,
            zIndex: 0,
          }} className="process-line" />

          {steps.map((s, i) => (
            <div
              key={s.number}
              className="card"
              style={{
                padding: '32px 28px', textAlign: 'center',
                position: 'relative', zIndex: 1,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: `${s.color}15`,
                border: `2px solid ${s.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
                position: 'relative',
              }}>
                <s.icon size={26} style={{ color: s.color }} />
                <div style={{
                  position: 'absolute', top: -8, right: -8,
                  width: 24, height: 24, borderRadius: '50%',
                  background: s.color, color: 'white',
                  fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {i + 1}
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: s.color, marginBottom: 8,
              }}>
                {s.duration}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20,
                color: 'var(--text)', marginBottom: 12,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7,
                color: 'var(--text-muted)',
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-line { display: none !important; }
        }
      `}</style>
    </section>
  )
}
