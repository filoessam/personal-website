import { ExternalLink, GitBranch, Star, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    featured: true,
    title: 'NeuralChat',
    desc: 'Enterprise-grade AI chat platform with multi-model support, RAG, and team collaboration. Serves 250k+ daily active users.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format',
    tags: ['Next.js', 'OpenAI', 'Supabase', 'TypeScript', 'Redis'],
    achievements: ['250k DAU', '99.9% uptime', '< 200ms P95'],
    stars: 2840,
    live: 'https://neuralchat.demo',
    github: 'https://github.com',
    color: '#6366f1',
  },
  {
    title: 'FlowAI',
    desc: 'ML pipeline orchestration platform built on Kubernetes. Automates model training, evaluation, and deployment cycles.',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop&auto=format',
    tags: ['Python', 'Kubernetes', 'MLflow', 'FastAPI', 'Airflow'],
    achievements: ['10× faster deploys', '60% cost reduction'],
    stars: 1240,
    live: 'https://flowai.demo',
    github: 'https://github.com',
    color: '#8b5cf6',
  },
  {
    title: 'DevPulse',
    desc: 'Real-time developer analytics dashboard tracking code quality, velocity, and team health across engineering orgs.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format',
    tags: ['React', 'ClickHouse', 'Grafana', 'Node.js', 'tRPC'],
    achievements: ['Used by 120+ teams', '5M events/day'],
    stars: 890,
    live: 'https://devpulse.demo',
    github: 'https://github.com',
    color: '#22d3ee',
  },
]

export default function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Portfolio</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            A selection of projects where I've pushed the boundaries of what's possible with AI and modern engineering.
          </p>
        </div>

        {/* Featured project */}
        <div
          className="project-featured card"
          style={{
            marginBottom: 24,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div style={{
            aspectRatio: '16/10', overflow: 'hidden',
            background: 'var(--surface)',
          }}>
            <img
              src={projects[0].img}
              alt={projects[0].title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
          <div style={{ padding: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                color: 'white', padding: '4px 12px', borderRadius: 99,
              }}>⭐ Featured</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                <Star size={13} fill="currentColor" />{projects[0].stars.toLocaleString()}
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, color: 'var(--text)', marginBottom: 12 }}>
              {projects[0].title}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 20 }}>
              {projects[0].desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
              {projects[0].tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
              {projects[0].achievements.map(a => (
                <span key={a} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
                  background: 'rgba(99,102,241,0.12)', color: 'var(--primary)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  padding: '4px 12px', borderRadius: 99,
                }}>{a}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <a href={projects[0].live} className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, padding: '9px 18px' }}>
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href={projects[0].github} className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, padding: '9px 18px' }}>
                <GitBranch size={14} /> Source
              </a>
              <a href="#casestudy" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, padding: '9px 18px' }}>
                Case Study <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {projects.slice(1).map(p => (
            <div key={p.title} className="card" style={{ overflow: 'hidden' }}>
              <div style={{ height: 200, overflow: 'hidden', background: 'var(--surface)' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text)' }}>{p.title}</h3>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--text-faint)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                    <Star size={12} fill="currentColor" />{p.stars}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: 16 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={p.live} className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '8px 16px' }}>
                    <ExternalLink size={13} /> Demo
                  </a>
                  <a href={p.github} className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, padding: '8px 16px' }}>
                    <GitBranch size={13} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-featured { grid-template-columns: 1fr 1fr !important; }
        @media (max-width: 900px) {
          .project-featured { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
