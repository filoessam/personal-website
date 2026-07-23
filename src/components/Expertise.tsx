import { Layers, Globe, Rocket, Brain, Plug, Zap, LayoutTemplate, BarChart3, Database, Gauge, Bug, TrendingUp } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Layers,
    title: 'Bubble.io Development',
    desc: 'Full-featured Bubble apps built right — scalable data structures, reusable elements, custom states, and pixel-perfect UI that performs.',
    tags: ['Bubble.io', 'No-Code', 'SaaS'],
    gradient: 'linear-gradient(135deg, #1B4EF3, #6366f1)',
  },
  {
    icon: Globe,
    title: 'Custom Web Applications',
    desc: 'Bespoke web apps using React, Node.js, and modern frameworks when you need more flexibility than a no-code platform provides.',
    tags: ['React', 'Node.js', 'TypeScript'],
    gradient: 'linear-gradient(135deg, #06b6d4, #6366f1)',
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    desc: "From idea to deployed product in weeks, not months. I'll build the leanest, most fundable version of your SaaS that real users love.",
    tags: ['Startups', 'Fast Delivery'],
    gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    desc: 'Bring AI into your product — GPT-4, Claude, LLaMA, embeddings, RAG pipelines. I integrate AI where it creates genuine value.',
    tags: ['OpenAI', 'Claude AI', 'Gemini'],
    gradient: 'linear-gradient(135deg, #00A67E, #06b6d4)',
  },
  {
    icon: Plug,
    title: 'API Integration',
    desc: 'Connect your app to any third-party service — payment processors, CRMs, communication tools, data providers, and more.',
    tags: ['REST APIs', 'Stripe', 'Webhooks'],
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Eliminate repetitive tasks and manual processes with smart automations built in Make.com, Zapier, or directly inside your app.',
    tags: ['Make.com', 'Zapier', 'n8n', 'Automation'],
    gradient: 'linear-gradient(135deg, #6D00CC, #a855f7)',
  },
  // {
  //   icon: LayoutTemplate,
  //   title: 'Landing Pages',
  //   desc: 'High-converting, beautifully designed landing pages that communicate your value proposition and turn visitors into customers.',
  //   tags: ['Figma', 'Webflow', 'Bubble'],
  //   gradient: 'linear-gradient(135deg, #ec4899, #f59e0b)',
  // },
  {
    icon: BarChart3,
    title: 'Dashboard Development',
    desc: 'Internal dashboards, analytics UIs, and admin panels that give your team real-time visibility into the data that matters.',
    tags: ['Charts', 'Real-time', 'Admin'],
    gradient: 'linear-gradient(135deg, #22d3ee, #6366f1)',
  },
  // {
  //   icon: Database,
  //   title: 'Database Design',
  //   desc: 'Clean, normalized database schemas optimised for performance and scale — whether that\'s Bubble\'s DB, Supabase, or Firebase.',
  //   tags: ['Supabase', 'Firebase', 'Airtable'],
  //   gradient: 'linear-gradient(135deg, #3ECF8E, #22d3ee)',
  // },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    desc: "Slow Bubble apps audited and tuned — reducing page load times, trimming workflows, and fixing the bottlenecks killing your UX.",
    tags: ['Speed', 'Audit', 'Bubble Optimisation'],
    gradient: 'linear-gradient(135deg, #f59e0b, #22c55e)',
  },
  {
    icon: Bug,
    title: 'Bug Fixing & Maintenance',
    desc: "Got a Bubble app or web project that's broken or struggling? I diagnose and fix issues quickly, then set things up to stay stable.",
    tags: ['Debugging', 'Support', 'Maintenance'],
    gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)',
  },
  {
    icon: TrendingUp,
    title: 'Product Scaling',
    desc: 'Already launched and growing fast? I help you scale architecture, add features, and maintain quality as your user base expands.',
    tags: ['Scaling', 'Architecture', 'Growth'],
    gradient: 'linear-gradient(135deg, #22c55e, #06b6d4)',
  },
]

export default function Expertise() {
  const { ref, visible } = useReveal()

  return (
    <section id="expertise" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Services</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            What I Can <span className="gradient-text">Build For You</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 540, margin: '0 auto' }}>
            From no-code Bubble apps to custom-coded platforms — I have the right tool for every product challenge.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card"
              style={{
                padding: 28,
                animationDelay: `${i * 0.06}s`,
                cursor: 'default',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16,
                background: s.gradient,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                boxShadow: `0 8px 20px rgba(99,102,241,0.25)`,
              }}>
                <s.icon size={24} color="white" />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: 17,
                color: 'var(--text)', marginBottom: 10,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.7,
                color: 'var(--text-muted)', marginBottom: 18,
              }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {s.tags.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
