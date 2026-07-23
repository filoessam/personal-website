const companies = [
  { name: 'Google', logo: '🔵', color: '#4285F4' },
  { name: 'Stripe', logo: '💳', color: '#635BFF' },
  { name: 'Vercel', logo: '▲', color: 'var(--text)' },
  { name: 'OpenAI', logo: '◉', color: '#00A67E' },
  { name: 'Anthropic', logo: '◈', color: '#C47C5A' },
  { name: 'AWS', logo: '☁', color: '#FF9900' },
  { name: 'Linear', logo: '◇', color: '#5E6AD2' },
  { name: 'Figma', logo: '◉', color: '#F24E1E' },
  { name: 'Supabase', logo: '⚡', color: '#3ECF8E' },
  { name: 'Notion', logo: '□', color: 'var(--text)' },
]

export default function TrustedBy() {
  const items = [...companies, ...companies]

  return (
    <section style={{
      padding: '48px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
      background: 'var(--bg-subtle)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', marginBottom: 28 }}>
        <p style={{
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-faint)',
        }}>
          Trusted by engineers and teams at
        </p>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          className="animate-marquee"
          style={{
            display: 'flex',
            gap: 0,
            width: 'max-content',
          }}
        >
          {items.map((c, i) => (
            <div
              key={i}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 40px',
                borderRight: '1px solid var(--border)',
                flexShrink: 0,
                opacity: 0.6,
                transition: 'opacity 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              <span style={{ fontSize: 20, color: c.color }}>{c.logo}</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--text)',
                letterSpacing: '-0.01em',
              }}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
