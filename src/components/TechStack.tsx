import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    label: 'No-Code',
    techs: [
      { name: 'Bubble.io', icon: 'imgs/bubble.png', color: '#1B4EF3' },
      { name: 'Webflow', icon: 'imgs/webflow.png', color: '#4353FF' },
      { name: 'Make.com', icon: 'imgs/make.png', color: '#6D00CC' },
      { name: 'Zapier', icon: 'imgs/zapier.png', color: '#FF4A00' },
      { name: 'Airtable', icon: 'imgs/airtable.png', color: '#2D7FF9' },
      { name: 'Notion', icon: 'imgs/notion.png', color: 'var(--text)' },
    ],
  },
  {
    label: 'Coding',
    techs: [
      { name: 'React', icon: 'imgs/react.png', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'imgs/js.png', color: '#F7DF1E' },
      { name: 'HTML / CSS', icon: 'imgs/code.png', color: '#E34F26' },
      { name: 'Tailwind CSS', icon: 'imgs/tailwind.png', color: '#38BDF8' },
      { name: 'Next.js', icon: 'imgs/nextjs.png', color: 'var(--text)' },
      { name: 'Figma', icon: 'imgs/figma.png', color: '#F24E1E' },
      { name: 'Node.js', icon: 'imgs/nodejs.png', color: '#339933' },
      { name: 'REST APIs', icon: 'imgs/api.png', color: '#6366f1' },
      { name: 'Supabase', icon: 'imgs/supabase.png', color: '#3ECF8E' },
      // { name: 'Firebase', icon: '🔥', color: '#FF9800' },
      // { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
      // { name: 'Redis', icon: '⬡', color: '#DC382D' },
    ],
  },
  {
    label: 'AI & LLMs',
    techs: [
      { name: 'OpenAI GPT-5', icon: 'imgs/gpt.png', color: '#00A67E' },
      { name: 'Claude AI', icon: 'imgs/claude.png', color: '#C47C5A' },
      { name: 'Gemini', icon: 'imgs/gemini.png', color: '#00A67E' },
      // { name: 'LangChain', icon: '🔗', color: '#1C3C3C' },
      // { name: 'Embeddings', icon: '◎', color: '#8b5cf6' },
      // { name: 'Whisper', icon: '🎙', color: '#22c55e' },
      // { name: 'Replicate', icon: '♾', color: '#6366f1' },
    ],
  },
  {
    label: 'Payments & Auth',
    techs: [
      { name: 'Stripe', icon: 'imgs/stripe.png', color: '#635BFF' },
      { name: 'PayPal', icon: 'imgs/paypal.png', color: '#003087' },
      // { name: 'Auth0', icon: '🔐', color: '#EB5424' },
      // { name: 'Clerk', icon: '🪪', color: '#6C47FF' },
      { name: 'SendGrid', icon: 'imgs/sendgrid.png', color: '#1A82E2' },
      { name: 'ActiveCampaign', icon: 'imgs/activecampaign.png', color: '#F22F46' },
      { name: 'Postmark', icon: 'imgs/postmark.png', color: '#F22F46' },
    ],
  },
  // {
  //   label: 'Cloud & Deploy',
  //   techs: [
  //     { name: 'Vercel', icon: '▲', color: 'var(--text)' },
  //     { name: 'AWS', icon: '☁', color: '#FF9900' },
  //     { name: 'Cloudflare', icon: '☁', color: '#F38020' },
  //     { name: 'Railway', icon: '🚂', color: '#7B2CF2' },
  //     { name: 'Docker', icon: '🐳', color: '#2496ED' },
  //     { name: 'GitHub', icon: '◉', color: 'var(--text)' },
  //   ],
  // },
]

export default function TechStack() {
  const [active, setActive] = useState(0)
  const { ref, visible } = useReveal()

  return (
    <section id="techstack" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Expertise</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            The Tools I <span className="gradient-text">Use</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            A battle-tested toolkit spanning no-code platforms, modern web frameworks, AI APIs, and everything in between.
          </p>
        </div>

        {/* Tab bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 40,
        }}>
          {categories.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setActive(i)}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
                padding: '8px 20px', borderRadius: 99,
                border: active === i ? 'none' : '1px solid var(--border)',
                background: active === i
                  ? 'linear-gradient(135deg, var(--primary), var(--accent))'
                  : 'var(--surface)',
                color: active === i ? 'white' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div style={{
          display: 'grid',
          justifyContent: "center",
          gridTemplateColumns: 'repeat(auto-fit, 160px)',
          gap: 16,
        }}>
          {categories[active].techs.map((t, i) => (
            <div
              key={t.name}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '24px 16px',
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: 16,
                cursor: 'default',
                transition: 'all 0.25s',
                animation: `fadeUp 0.4s ${i * 0.05}s ease both`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.borderColor = 'var(--card-border)'
                e.currentTarget.style.boxShadow = ''
              }}
            >
              <div style={{
                fontSize: 32, marginBottom: 12,
                fontFamily: t.icon.length <= 2 ? 'var(--font-mono)' : 'inherit',
                color: t.color,
                lineHeight: 1,
              }}>
                <img src={t.icon} alt={t.name + " - icon"} style={{
                  "width": "30px",
                  "height": "30px"
                }}></img>
              </div>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
                color: 'var(--text)', textAlign: 'center',
              }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
