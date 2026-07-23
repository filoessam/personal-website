import { useReveal } from '../hooks/useReveal'

const whyCards = [
  { emoji: '⚡', title: 'Fast Delivery', desc: 'I move fast without cutting corners on quality.' },
  { emoji: '✨', title: 'Clean UI/UX', desc: 'Every app looks like a premium product. I design with the end-user in mind at every step.' },
  { emoji: '📐', title: 'Scalable Architecture', desc: 'Bubble apps built for growth — clean data models, reusable elements, and documented workflows.' },
  { emoji: '💬', title: 'Clear Communication', desc: 'Weekly updates, same-day replies, and no jargon. You always know exactly where your project stands.' },
  { emoji: '🤖', title: 'AI-Powered Solutions', desc: 'I integrate OpenAI, Claude, and automation tools to make your product smarter than the competition.' },
  { emoji: '🔧', title: 'Long-Term Support', desc: "I don't disappear after launch. Retainer clients get priority support and ongoing feature development." },
]

export default function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Skills & Strengths</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Why Work <span className="gradient-text">With Me</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto' }}>
            Technical depth meets business thinking. I build products that work — and explain every decision so you stay in control.
          </p>
        </div>

        {/* Why cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20,
          marginBottom: 80,
        }}>
          {whyCards.map(c => (
            <div
              key={c.title}
              className="card"
              style={{ padding: '28px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}
            >
              <div style={{
                fontSize: 28, lineHeight: 1, flexShrink: 0,
                width: 48, height: 48, borderRadius: 14,
                background: 'var(--surface)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {c.emoji}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 8 }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7, color: 'var(--text-muted)' }}>
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
