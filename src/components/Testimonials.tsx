import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Ben Moote',
    role: 'Strategist & Builder, Prime Mover',
    avatar: 'imgs/ben.jpg',
    company: 'Prime Mover',
    rating: 5,
    quote: `Working with Filo has been an incredible experience.
When we started, we had an idea—but Filo came with a clear plan. He helped us build and rebuild a platform from scratch, taking real ownership of the project.
His work and dedication have been invaluable to us. He is exactly the kind of developer you want when something truly matters: realistic, dependable, resourceful, thoughtful, collaborative, and genuinely committed to making the project succeed. His care and focus made a real difference.`,
  },
  {
    name: 'James Bake',
    role: 'Operator, Alison J Prince',
    avatar: 'imgs/james.jpg',
    company: 'Alison J Prince',
    rating: 5,
    quote: "Filo was absolutely incredible in building our directory on Bubble! Not only did he work lightning fast, but his attention to detail and thoughtful approach blew me away. He asked all the right questions to ensure everything was spot on, and the results exceeded my expectations. If you're looking for someone who's thorough, efficient, and a joy to work with—Filo is your guy!",
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const { ref, visible } = useReveal()

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx(i => (i + 1) % testimonials.length)
  const t = testimonials[idx]

  return (
    <section id="testimonials" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Testimonials</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div style={{
          maxWidth: 800, margin: '0 auto',
          position: 'relative',
        }}>
          {/* Main card */}
          <div className="card" style={{ padding: '48px 48px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative quote */}
            <div style={{
              position: 'absolute', top: 24, left: 32,
              opacity: 0.08,
            }}>
              <Quote size={80} style={{ color: 'var(--primary)' }} />
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 28 }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>

            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.8,
              color: 'var(--text-muted)',
              marginBottom: 36,
              fontStyle: 'italic',
              position: 'relative', zIndex: 1,
              transition: 'opacity 0.3s',
            }}>
              "{t.quote}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <img
                src={t.avatar}
                alt={t.name}
                style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }}
              />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>
                  {t.role}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, marginTop: 32 }}>
            <button
              onClick={prev}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: 8 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  style={{
                    width: i === idx ? 24 : 8, height: 8, borderRadius: 99,
                    border: 'none', cursor: 'pointer',
                    background: i === idx ? 'var(--primary)' : 'var(--border-strong)',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--surface)', border: '1px solid var(--border)',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
