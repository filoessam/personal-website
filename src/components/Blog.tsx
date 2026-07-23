import { Clock, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const posts = [
  {
    title: 'Building Production-Ready RAG Systems That Actually Work',
    excerpt: "Most RAG tutorials show you the happy path. Here's what happens when you hit 10k queries/day — and how to fix the failure modes nobody talks about.",
    category: 'AI Engineering',
    readTime: '12 min read',
    date: 'Jul 2, 2026',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=380&fit=crop&auto=format',
    color: '#6366f1',
  },
  {
    title: "The Future of AI Agents: Beyond the Hype",
    excerpt: 'Autonomous agents are getting a lot of press. Here\'s my honest assessment of where they actually work in production, and where they still fail badly.',
    category: 'AI Strategy',
    readTime: '8 min read',
    date: 'Jun 18, 2026',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=380&fit=crop&auto=format',
    color: '#8b5cf6',
  },
  {
    title: 'Scaling Next.js to 10 Million Users Without Losing Your Mind',
    excerpt: 'A practical guide to the performance patterns, caching strategies, and infrastructure decisions that let our team 10× scale without rewriting the app.',
    category: 'Web Performance',
    readTime: '15 min read',
    date: 'May 30, 2026',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&auto=format',
    color: '#22d3ee',
  },
  {
    title: "Why I Rewrote Our API in Rust (And What I'd Do Differently)",
    excerpt: 'Moving a high-throughput inference endpoint from Python to Rust cut p99 latency from 800ms to 12ms. The migration story, the wins, and the regrets.',
    category: 'Systems',
    readTime: '10 min read',
    date: 'May 10, 2026',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=380&fit=crop&auto=format',
    color: '#f59e0b',
  },
  {
    title: 'The Art of Technical Leadership at Small AI Startups',
    excerpt: "Engineering leadership at a 15-person AI company is completely different from a FAANG. Here's what I've learned about the tradeoffs that matter.",
    category: 'Leadership',
    readTime: '7 min read',
    date: 'Apr 22, 2026',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=380&fit=crop&auto=format',
    color: '#22c55e',
  },
  {
    title: 'Kubernetes for ML: A Practical Guide for Platform Engineers',
    excerpt: 'GPU scheduling, spot instances, model artifact caching, and graceful interruption handling — everything I wish someone had told me before Year 1.',
    category: 'MLOps',
    readTime: '11 min read',
    date: 'Apr 5, 2026',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=380&fit=crop&auto=format',
    color: '#ef4444',
  },
]

export default function Blog() {
  const { ref, visible } = useReveal()

  return (
    <section id="blog" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 48, flexWrap: 'wrap', gap: 16,
        }}>
          <div>
            <div className="section-label" style={{ marginBottom: 16 }}>Blog</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)' }}>
              Insights & <span className="gradient-text">Writing</span>
            </h2>
          </div>
          <a
            href="/blog"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 14,
              color: 'var(--primary)', textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
            onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
          >
            View all posts <ArrowRight size={15} />
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="card"
              style={{
                overflow: 'hidden', cursor: 'pointer',
                animationDelay: `${i * 0.06}s`,
              }}
            >
              <div style={{ height: 210, overflow: 'hidden', background: 'var(--surface)', position: 'relative' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  background: p.color, color: 'white',
                  padding: '4px 12px', borderRadius: 99,
                }}>
                  {p.category}
                </div>
              </div>
              <div style={{ padding: '24px 24px 20px' }}>
                <div style={{
                  display: 'flex', gap: 12, marginBottom: 12,
                  fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Clock size={12} />{p.readTime}
                  </span>
                  <span>{p.date}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                  color: 'var(--text)', marginBottom: 10, lineHeight: 1.4,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.7,
                  color: 'var(--text-muted)', marginBottom: 16,
                }}>
                  {p.excerpt}
                </p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 13,
                  color: 'var(--primary)',
                }}>
                  Read more <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
