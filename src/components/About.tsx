import { Download, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '3+', label: 'Happy Clients' },
  { value: '4+', label: 'Years Experience' },
  { value: '100%', label: 'Responsive Designs' },
]

const highlights = [
  'Bubble.io Certified Developer with deep no-code and custom plugin expertise',
  'AI integrations using OpenAI, Claude, and custom LLM workflows',
  'End-to-end ownership from wireframe to deployed, production-ready app',
]

export default function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          ref={ref}
          className={`about-grid reveal${visible ? ' visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Image side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              aspectRatio: '4/5',
              position: 'relative',
            }}>
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=750&fit=crop&auto=format"
                alt="Building web applications at desk"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, transparent 50%, rgba(99,102,241,0.3) 100%)',
              }} />
            </div>

            {/* Floating experience card */}
            <div style={{
              position: 'absolute', bottom: -20, right: -20,
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 20, padding: 24,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(16px)',
              minWidth: 200,
            }}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                {stats.slice(0, 2).map(s => (
                  <div key={s.label}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 28,
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="section-label" style={{ marginBottom: 20 }}>About Me</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 24 }}>
              I turn your idea into a{' '}
              <span className="gradient-text">live product</span>, fast
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8,
              color: 'var(--text-muted)', marginBottom: 20,
            }}>
              I'm a Bubble.io Expert and Full-Stack Web Developer who specialises in transforming
              ideas into production-ready web applications. Whether you're a first-time founder
              building an MVP or an established business that needs a custom SaaS platform,
              I deliver clean UX, scalable architecture, and rapid execution.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.8,
              color: 'var(--text-muted)', marginBottom: 32,
            }}>
              I work closely with founders, product teams, and entrepreneurs to understand
              business goals first — then build the simplest, most scalable solution that
              achieves them. You get a partner who cares about your product's success,
              not just the ticket list.
            </p>

            <div style={{ marginBottom: 36 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16, marginBottom: 36,
            }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  textAlign: 'center', padding: '16px 8px',
                  background: 'var(--surface)', borderRadius: 16,
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
                    color: 'var(--primary)',
                  }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-faint)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* <a
              href="/portfolio.pdf"
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Download size={16} />
              Download Portfolio
            </a> */}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
