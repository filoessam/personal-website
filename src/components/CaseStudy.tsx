import { ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const results = [
  { icon: TrendingUp, label: 'Response Time', before: '2.4s avg', after: '180ms P95', color: '#22c55e' },
  { icon: Users, label: 'Daily Active Users', before: '12,000', after: '250,000', color: '#6366f1' },
  { icon: Zap, label: 'Infra Cost', before: '$18k/mo', after: '$7.2k/mo', color: '#f59e0b' },
  { icon: Shield, label: 'Uptime', before: '98.2%', after: '99.97%', color: '#22d3ee' },
]

const process = [
  { phase: '01', title: 'Problem Discovery', desc: 'Audited the existing monolith — found N+1 query issues, synchronous LLM calls blocking threads, and no caching layer. The bottleneck was clear.' },
  { phase: '02', title: 'Architecture Redesign', desc: 'Proposed a streaming-first architecture with SSE for LLM output, Redis for session state, and a pgvector RAG layer replacing the naive full-text search.' },
  { phase: '03', title: 'Incremental Migration', desc: 'Migrated route-by-route behind feature flags. Used Cloudflare Workers for edge inference caching. Zero downtime deploy via blue/green.' },
  { phase: '04', title: 'Observability & Scale', desc: 'Instrumented with OpenTelemetry, built DataDog dashboards, implemented auto-scaling on K8s. Stress-tested to 5× projected peak load.' },
]

export default function CaseStudy() {
  const { ref, visible } = useReveal()

  return (
    <section id="casestudy" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Case Study</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            NeuralChat: <span className="gradient-text">0 to 250k Users</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 580, margin: '0 auto' }}>
            How I architected a re-platforming that cut latency by 92%, reduced infrastructure costs by 60%, and enabled 20× user growth.
          </p>
        </div>

        {/* Challenge + Solution */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48,
        }} className="cs-grid">
          <div style={{
            padding: 36, borderRadius: 24,
            background: 'rgba(239,68,68,0.06)',
            border: '1px solid rgba(239,68,68,0.15)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: 16 }}>
              The Challenge
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 14 }}>
              Scaling walls hit at 12k users
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)' }}>
              The platform was built on a Ruby on Rails monolith with synchronous OpenAI API calls.
              At 12k DAU, response times spiked to 6+ seconds, error rates climbed to 8%,
              and the infrastructure team was fielding 3AM pages every week. The architecture
              couldn't support the growth the business needed.
            </p>
          </div>
          <div style={{
            padding: 36, borderRadius: 24,
            background: 'rgba(99,102,241,0.06)',
            border: '1px solid rgba(99,102,241,0.15)',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 16 }}>
              The Solution
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 14 }}>
              Event-driven, streaming-first
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted)' }}>
              Re-architected with a Next.js 14 App Router frontend, TypeScript microservices,
              streaming SSE responses, Redis-backed session state, and a pgvector RAG pipeline
              replacing the naive full-text search. Deployed on Kubernetes with custom HPA scaling rules.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20, marginBottom: 48,
        }}>
          {process.map(p => (
            <div key={p.phase} className="card" style={{ padding: 28 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 28,
                color: 'var(--border-strong)',
                marginBottom: 12, lineHeight: 1,
              }}>{p.phase}</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 10 }}>{p.title}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Results before/after */}
        <div style={{
          background: 'var(--bg-subtle)',
          borderRadius: 24,
          border: '1px solid var(--border)',
          padding: '40px 40px',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24,
            color: 'var(--text)', marginBottom: 32, textAlign: 'center',
          }}>
            Measurable Results
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20 }}>
            {results.map(r => (
              <div key={r.label} style={{
                background: 'var(--card-bg)', borderRadius: 20,
                border: '1px solid var(--card-border)',
                padding: '24px',
                textAlign: 'center',
              }}>
                <r.icon size={24} style={{ color: r.color, marginBottom: 12 }} />
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-faint)', marginBottom: 12 }}>{r.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)', textDecoration: 'line-through' }}>{r.before}</span>
                  <ArrowRight size={14} style={{ color: r.color }} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: r.color }}>{r.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cs-grid { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 768px) { .cs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
