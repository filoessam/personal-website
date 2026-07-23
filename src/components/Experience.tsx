import { useReveal } from '../hooks/useReveal'

const jobs = [
  {
    company: 'Anthropic',
    role: 'Senior AI Engineer',
    duration: 'Jan 2023 – Present',
    location: 'San Francisco, CA',
    color: '#C47C5A',
    current: true,
    responsibilities: [
      'Leading LLM evaluation infrastructure used to assess Claude model quality across 200+ safety/capability dimensions',
      'Built distributed prompt caching layer reducing API costs by $1.2M annually',
      'Architected Constitutional AI training data pipelines processing 40TB/week',
      'Mentored a team of 5 junior engineers on ML systems design',
    ],
    achievements: ['Promoted to Staff Engineer (pending)', 'Patent filed: Adaptive KV Cache Management'],
  },
  {
    company: 'Vercel',
    role: 'Staff Software Engineer',
    duration: 'Mar 2021 – Dec 2022',
    location: 'Remote',
    color: 'var(--text)',
    current: false,
    responsibilities: [
      'Core contributor to Next.js App Router architecture and streaming SSR implementation',
      'Reduced Edge Network cold start times by 68% through V8 isolate optimization',
      'Built the Vercel Analytics product from prototype to 50k+ active deployments',
      'Co-authored RFC-0001: React Server Components integration spec',
    ],
    achievements: ['Employee of the Year 2022', '⭐ 3,200 stars on personal Next.js tooling OSS'],
  },
  {
    company: 'Stripe',
    role: 'Software Engineer II',
    duration: 'Aug 2019 – Feb 2021',
    location: 'San Francisco, CA',
    color: '#635BFF',
    current: false,
    responsibilities: [
      'Built fraud detection ML models processing $12B in annual transaction volume',
      'Designed idempotent payment retry logic for Stripe Checkout, reducing duplicate charges by 99.4%',
      'Migrated critical billing service from Ruby to Go, achieving 4× throughput improvement',
    ],
    achievements: ['Led "Project Nightingale" — zero-downtime DB migration of 500M records'],
  },
  {
    company: 'Acme Labs',
    role: 'Junior Software Engineer',
    duration: 'Jun 2017 – Jul 2019',
    location: 'New York, NY',
    color: '#22c55e',
    current: false,
    responsibilities: [
      'Built React + Node.js SaaS platform for enterprise document management',
      'Integrated third-party ML APIs for document OCR and classification',
      'Implemented real-time collaborative editing using operational transforms',
    ],
    achievements: ['First engineering hire; grew team to 6 engineers'],
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
