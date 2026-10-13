import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  // { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ dark, toggleDark }: { dark: boolean; toggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: "hidden"
            }}>
              {/* <Code2 size={18} color="white" /> */}
              <img src="imgs/logo.png" alt="logo" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--text)' }}>
              Filo<span style={{ color: 'var(--primary)' }}>Essam</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: 14,
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  padding: '6px 14px',
                  borderRadius: 8,
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--text)'
                    ; (e.target as HTMLElement).style.background = 'var(--surface)'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-muted)'
                    ; (e.target as HTMLElement).style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={toggleDark}
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'var(--surface)', border: '1px solid var(--border)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s, transform 0.2s', color: 'var(--text-muted)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: '9px 22px', fontSize: 14 }}>
              Hire Me
            </a>
            <button
              className="show-mobile"
              onClick={() => setOpen(!open)}
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'var(--surface)', border: '1px solid var(--border)',
                cursor: 'pointer', display: 'none', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text)',
              }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--glass-bg)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '12px 16px',
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
                color: 'var(--text-muted)', textDecoration: 'none',
                borderRadius: 10, transition: 'background 0.2s',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 12, textDecoration: 'none' }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
