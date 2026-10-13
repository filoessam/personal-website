import { useReveal } from '../hooks/useReveal'

const jobs = [
  {
    company: 'Alison J Prince',
    role: 'Bubble.io & Automations Expert',
    duration: 'Jan 2025 – Present',
    location: 'Unites States',
    color: '#C47C5A',
    current: true,
    responsibilities: [
      'Worked closely with Alison to understand her needs and turn her ideas into practical solutions.',
      'Helped improve existing applications by fixing issues and adding useful functionality.',
      'Researched and implemented technical solutions to overcome challenges and improve performance.',
      'Maintained clear communication throughout our collaboration to ensure the work aligned with her expectations.',
    ],
    achievements: ["Aligned with Alison's needs and goals", 'Creative problem-solving in API integrations.'],
  },
  {
    company: 'Prime Mover',
    role: 'Bubble.io Developer',
    duration: 'Feb 2026 – May 2026',
    location: 'Idaho, Unites States',
    color: 'var(--text)',
    current: false,
    responsibilities: [
      'Developed and maintained web application, implementing features based on business needs and project requirements.',
      'Collaborated with team members to understand requirements, solve technical challenges, and deliver effective solutions.',
      'Integrated APIs and connected different platforms to improve functionality and streamline workflows.',
    ],
    achievements: ['Collaborated with +7 team members to implement features'],
  },
]

export default function Experience() {
  const { ref, visible } = useReveal()

  return (
    <section id="experience" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Experience</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Work <span className="gradient-text">Timeline</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 24, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, var(--primary) 0%, var(--accent) 60%, transparent 100%)',
            opacity: 0.3,
          }} />

          {jobs.map((j, i) => (
            <div
              key={j.company}
              style={{
                position: 'relative', paddingLeft: 72, marginBottom: 48,
                animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 12, top: 6,
                width: 24, height: 24, borderRadius: '50%',
                background: j.current
                  ? 'linear-gradient(135deg, var(--primary), var(--accent))'
                  : 'var(--surface)',
                border: `2px solid ${j.current ? 'var(--primary)' : 'var(--border-strong)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1,
                boxShadow: j.current ? '0 0 16px var(--glow)' : 'none',
              }}>
                {j.current && (
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'white', display: 'block' }} />
                )}
              </div>

              <div className="card" style={{ padding: '28px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text)' }}>
                        {j.role}
                      </h3>
                      {j.current && (
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                          letterSpacing: '0.1em',
                          background: 'rgba(34,197,94,0.15)', color: '#22c55e',
                          border: '1px solid rgba(34,197,94,0.3)',
                          padding: '3px 10px', borderRadius: 99,
                        }}>Current</span>
                      )}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: j.color }}>
                      {j.company}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 }}>
                      {j.duration}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)' }}>
                      {j.location}
                    </div>
                  </div>
                </div>

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', marginBottom: 16 }}>
                  {j.responsibilities.map((r, ri) => (
                    <li key={ri} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      marginBottom: 8,
                    }}>
                      <span style={{
                        width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)',
                        flexShrink: 0, marginTop: 7,
                      }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {j.achievements.map(a => (
                    <span key={a} style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      background: 'rgba(99,102,241,0.08)', color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                      padding: '4px 12px', borderRadius: 8,
                    }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
