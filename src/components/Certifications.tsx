import { ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

const certs = [
  {
    name: 'AWS Solutions Architect Professional',
    org: 'Amazon Web Services',
    date: 'Mar 2024',
    expiry: 'Mar 2027',
    color: '#FF9900',
    icon: '☁',
    credentialId: 'AWS-SAP-2024-0312',
  },
  {
    name: 'Google Cloud Professional ML Engineer',
    org: 'Google Cloud',
    date: 'Jan 2024',
    expiry: 'Jan 2026',
    color: '#4285F4',
    icon: '🧠',
    credentialId: 'GCP-MLE-2024-0115',
  },
  {
    name: 'Certified Kubernetes Administrator',
    org: 'Cloud Native Computing Foundation',
    date: 'Sep 2023',
    expiry: 'Sep 2026',
    color: '#326CE5',
    icon: '⎈',
    credentialId: 'CKA-2023-0945',
  },
  {
    name: 'Machine Learning Specialization',
    org: 'Stanford / Coursera',
    date: 'Dec 2022',
    expiry: 'No expiry',
    color: '#8C1515',
    icon: '🎓',
    credentialId: 'STAN-ML-2022-4821',
  },
  {
    name: 'Professional Scrum Master I',
    org: 'Scrum.org',
    date: 'Jun 2021',
    expiry: 'No expiry',
    color: '#009FDA',
    icon: '⚡',
    credentialId: 'PSM1-2021-0821',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    org: 'HashiCorp',
    date: 'Feb 2023',
    expiry: 'Feb 2025',
    color: '#7B42BC',
    icon: '◈',
    credentialId: 'HCP-TF-2023-0234',
  },
]

export default function Certifications() {
  const { ref, visible } = useReveal()

  return (
    <section id="certifications" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Credentials</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Certifications <span className="gradient-text">& Awards</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {certs.map((c, i) => (
            <div
              key={c.credentialId}
              className="card"
              style={{
                padding: '24px 28px',
                display: 'flex', gap: 18, alignItems: 'flex-start',
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16, flexShrink: 0,
                background: `${c.color}15`,
                border: `1px solid ${c.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>
                {c.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
                  color: 'var(--text)', marginBottom: 4, lineHeight: 1.4,
                }}>
                  {c.name}
                </h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: c.color, fontWeight: 600, marginBottom: 8 }}>
                  {c.org}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>
                    Issued {c.date} · {c.expiry}
                  </div>
                  <ExternalLink size={13} style={{ color: 'var(--text-faint)', cursor: 'pointer', flexShrink: 0 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
