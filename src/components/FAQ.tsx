import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const faqs = [
  {
    q: "What kinds of projects do you typically take on?",
    a: "I specialize in AI/ML systems, full-stack web applications, and backend infrastructure. My sweet spot is projects at the intersection of AI and production engineering — RAG pipelines, LLM integration, ML platform tooling, and high-performance APIs. I work best with clients who have a clear problem, a reasonable budget, and technical leadership who understands that good software takes time.",
  },
  {
    q: "How do you handle project pricing?",
    a: "Most of my work is scoped-and-fixed for well-defined projects, or time-and-materials for ongoing product development. I don't do hourly for most engagements — I'd rather give you a clear number upfront so we're aligned on value, not time. Discovery calls are always free, and I'll tell you honestly if your budget doesn't match your scope.",
  },
  {
    q: "What's your availability like right now?",
    a: "I typically take 1–2 new client projects per quarter and maintain a small number of ongoing retainer relationships. Currently accepting projects starting September 2026. If your timeline is urgent, reach out anyway — I may be able to accommodate, or I can refer you to other engineers I trust.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, and I enjoy it. I've been the first technical hire or primary contractor for a number of pre-seed and seed startups. I'm comfortable making the fast architectural tradeoffs that early-stage requires — choosing the boring, working solution over the sophisticated one when time-to-market matters more. I also know when to say 'no, this tech debt will cost you in 6 months.'",
  },
  {
    q: "Can you help with AI strategy, not just implementation?",
    a: "Absolutely. A significant portion of my work is advisory — helping teams understand where AI can realistically help their product, which LLMs to use for which tasks, build vs. buy decisions, and how to evaluate AI quality in production. I've helped teams avoid expensive AI experiments that weren't going to work, and identify opportunities they hadn't considered.",
  },
  {
    q: "What does your typical engagement look like?",
    a: "Discovery call (free, 45min) → scoping doc + proposal → contract → weekly async updates with Loom videos showing progress → code review sessions → launch. I use Linear for task tracking, Slack for async comms, and GitHub for all code. You'll always have access to the codebase and full visibility into what's happening.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, I'm comfortable signing a mutual NDA before detailed technical discussions. I treat all client work as confidential by default — I won't discuss your architecture, business details, or source code with anyone without your explicit consent.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const { ref, visible } = useReveal()

  return (
    <section id="faq" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>FAQ</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)' }}>
            Everything you need to know before reaching out.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{
                background: 'var(--card-bg)',
                border: `1px solid ${open === i ? 'var(--primary)' : 'var(--card-border)'}`,
                borderRadius: 16,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left',
                  padding: '20px 24px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  gap: 16,
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
                  color: open === i ? 'var(--primary)' : 'var(--text)',
                  transition: 'color 0.2s',
                }}>
                  {f.q}
                </span>
                <span style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: open === i ? 'var(--primary)' : 'var(--surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: open === i ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                }}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.8,
                    color: 'var(--text-muted)',
                  }}>
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
