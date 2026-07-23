import { GitBranch, Briefcase, AtSign, Mail, Code2, ArrowUp } from 'lucide-react'

const navGroups = [
  {
    title: 'Services',
    links: [
      { label: 'Bubble.io Development', href: '#expertise' },
      { label: 'SaaS Build', href: '#expertise' },
      { label: 'AI Integration', href: '#expertise' },
      { label: 'API Integration', href: '#expertise' },
    ],
  },
  {
    title: 'Navigate',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/filoessam' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/filoessam' },
      { label: 'Email Me', href: 'mailto:filoessam1@gmail.com' },
    ],
  },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      padding: '64px 0 32px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 64,
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
              }}>
                <img src="imgs/logo.png" alt="logo" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>
                Filo<span style={{ color: 'var(--primary)' }}>Essam</span>
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.8,
              color: 'var(--text-muted)', maxWidth: 280, marginBottom: 24,
            }}>
              Bubble.io Expert & Full-Stack Web Developer helping startups and businesses launch faster.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { icon: GitBranch, href: 'https://github.com/filoessam', label: 'GitHub' },
                { icon: Briefcase, href: 'https://www.linkedin.com/in/filoessam', label: 'LinkedIn' },
                // { icon: AtSign, href: 'https://twitter.com', label: 'X / Twitter' },
                { icon: Mail, href: 'mailto:filoessam1@gmail.com', label: 'Email' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {navGroups.map(g => (
            <div key={g.title}>
              <h4 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                color: 'var(--text)', marginBottom: 20,
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                {g.title}
              </h4>
              {g.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: 'block', fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'var(--text-muted)', textDecoration: 'none',
                    marginBottom: 12, transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: 20, padding: '28px 32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 20,
          marginBottom: 40,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--text)', marginBottom: 4 }}>
              Ready to build your next product?
            </div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>
              Book a free 30-minute discovery call — no commitment, no sales pitch.
            </div>
          </div>
          <a
            href="#contact"
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}
          >
            Let's Talk
          </a>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-faint)',
          }}>
            © 2026 Filo Essam. Bubble.io Expert & Full-Stack Web Developer.
          </p>
          <button
            onClick={scrollTop}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '8px 14px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
