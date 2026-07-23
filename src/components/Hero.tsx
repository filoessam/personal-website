import { GitBranch, Briefcase, AtSign, Mail, ArrowRight, Download, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

const socials = [
  { icon: GitBranch, href: 'https://github.com/filoessam', label: 'GitHub' },
  { icon: Briefcase, href: 'https://www.linkedin.com/in/filoessam', label: 'LinkedIn' },
  // { icon: AtSign, href: 'https://twitter.com', label: 'X / Twitter' },
  { icon: Mail, href: 'mailto:filoessam1@gmail.com', label: 'Email' },
]

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (orb1.current) {
        orb1.current.style.transform = `translate(${e.clientX * 0.02}px, ${e.clientY * 0.02}px)`
      }
      if (orb2.current) {
        orb2.current.style.transform = `translate(${-e.clientX * 0.015}px, ${-e.clientY * 0.015}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
      }}
    >
      {/* Background mesh */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          ref={orb1}
          style={{
            position: 'absolute',
            width: 600, height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            top: '5%', left: '-10%',
            transition: 'transform 0.8s ease',
          }}
        />
        <div
          ref={orb2}
          style={{
            position: 'absolute',
            width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)',
            bottom: '10%', right: '-5%',
            transition: 'transform 0.8s ease',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
        }} />
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) auto',
          gap: 80,
          alignItems: 'center',
        }} className="hero-grid">
          {/* Left content */}
          <div>
            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
              borderRadius: 99, padding: '7px 16px', marginBottom: 32,
              animation: 'fadeUp 0.6s ease forwards',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
                display: 'inline-block',
              }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--primary)', fontWeight: 500 }}>
                Available for new opportunities
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(44px, 6vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: 'var(--text)',
              marginBottom: 24,
              animation: 'fadeUp 0.7s 0.1s ease both',
            }}>
              Hi, I'm{' '}
              <span className="gradient-text">Filo Essam</span>
              <br />
              <span style={{ fontSize: '0.75em', fontWeight: 700 }}>
                Bubble.io expert
              </span>
              <br />
              <span style={{ fontSize: '0.65em', fontWeight: 600, color: 'var(--text-muted)' }}>
                & Web developer
              </span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              maxWidth: 540,
              marginBottom: 40,
              animation: 'fadeUp 0.7s 0.2s ease both',
            }}>
              I build fast, scalable, beautiful web applications for startups and businesses — combining Bubble.io, modern web technologies, and AI-powered automation to deliver what typically takes a full dev team.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 48,
              animation: 'fadeUp 0.7s 0.3s ease both',
            }}>
              <a href="#contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Sparkles size={16} />
                Let's Work Together
              </a>
              {/* <a href="#projects" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                View Projects <ArrowRight size={15} />
              </a> */}
            </div>

            {/* Social links */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              animation: 'fadeUp 0.7s 0.4s ease both',
            }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--primary)'
                    e.currentTarget.style.borderColor = 'var(--primary)'
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--surface)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <s.icon size={17} />
                </a>
              ))}
              {/* <span style={{ width: 1, height: 28, background: 'var(--border)', margin: '0 4px' }} />
               <a href="/resume.pdf"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
                  color: 'var(--text-muted)', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <Download size={15} /> Resume
              </a> */}
            </div>
          </div>

          {/* Right — avatar + floating cards */}
          <div style={{ position: 'relative', width: 360, flexShrink: 0 }} className="hero-avatar">
            {/* Avatar container */}
            <div
              className="animate-float"
              style={{
                width: 300, height: 300, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                padding: 4,
                boxShadow: '0 0 60px var(--glow)',
                margin: '0 auto',
                position: 'relative',
              }}
            >
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                overflow: 'hidden', background: 'var(--surface-2)',
              }}>
                <img
                  src="imgs/filo.png"
                  alt="Filo Essam — Web Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: "scale(1.2)" }}
                />
              </div>
            </div>

            {/* Floating stat cards */}
            <div style={{
              position: 'absolute', top: 20, right: -20,
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 16, padding: '12px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeUp 0.8s 0.5s ease both',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text)' }}>4+</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>Years Exp.</div>
            </div>
            <div style={{
              position: 'absolute', bottom: 40, left: -30,
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 16, padding: '12px 18px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              backdropFilter: 'blur(12px)',
              animation: 'fadeUp 0.8s 0.6s ease both',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--text)' }}>20+</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>Projects Done</div>
            </div>
            <div style={{
              position: 'absolute', bottom: 0, right: 10,
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              borderRadius: 16, padding: '12px 18px',
              animation: 'fadeUp 0.8s 0.7s ease both',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'white' }}>5.0★</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Client Rating</div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-avatar { width: 260px !important; margin: 0 auto; }
          .hero-avatar > div:first-child { width: 220px !important; height: 220px !important; }
        }
      `}</style>
    </section>
  )
}
