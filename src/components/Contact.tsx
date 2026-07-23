"use client"

import { useState } from 'react'
import { Mail, Globe, Phone, MapPin, Calendar, Send, CheckCircle2, GitBranch, Briefcase, AtSign } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import emailjs from "@emailjs/browser";

const socials = [
  { icon: GitBranch, href: 'https://github.com/filoessam', label: 'GitHub' },
  { icon: Briefcase, href: 'https://www.linkedin.com/in/filoessam', label: 'LinkedIn' },
  // { icon: AtSign, href: 'https://twitter.com', label: 'X / Twitter' },
  { icon: Mail, href: 'mailto:filoessam1@gmail.com', label: 'Email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [sent, setSent] = useState(false)
  const { ref, visible } = useReveal()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()


    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );

      setForm({
        name: "",
        email: "",
        message: "",
        budget: ""
      });
      setSent(true)
    } catch (err) {
      console.error(err);
      setSent(false)
      alert("Failed to send.");
    }
  }

  const inputStyle = {
    width: '100%', background: 'var(--surface)', border: '1px solid var(--border)',
    borderRadius: 12, padding: '14px 16px',
    fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text)',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '120px 0', background: 'var(--bg-subtle)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} className={`reveal${visible ? ' visible' : ''}`} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>Contact</div>
          <h2 className="section-title" style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginBottom: 16 }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-muted)', maxWidth: 500, margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Send a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1.2fr', gap: 40,
        }} className="contact-grid">
          {/* Form */}
          <div className="card" style={{ padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle2 size={56} style={{ color: '#22c55e', marginBottom: 20, marginLeft: "auto", marginRight: "auto" }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, color: 'var(--text)', marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                      Name *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="jane@company.com"
                      style={inputStyle}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = 'var(--primary)'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px var(--glow)' }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = 'var(--border)'; (e.target as HTMLElement).style.boxShadow = 'none' }}
                  >
                    <option value="">Select budget range</option>
                    <option>$100 – $500 (Small project)</option>
                    <option>$500 – $1000 (Medium project)</option>
                    <option>$1500 – $2000 (Large project)</option>
                    <option>Advisory / hourly</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 500, color: 'var(--text-muted)', display: 'block', marginBottom: 8 }}>
                    Tell me about your project *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Describe the problem you're trying to solve, your timeline, and any technical context that's relevant..."
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px var(--glow)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Availability */}
            {/* <div className="card" style={{ padding: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
                  Available from Sep 2026
                </span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Currently accepting new project inquiries for Q3 2026. Discovery calls are free — 45 minutes, no pressure.
              </p>
            </div> */}

            {/* Contact details */}
            <div className="card" style={{ padding: 28 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text)', marginBottom: 20 }}>
                Direct Contact
              </h3>
              {[
                { icon: Mail, label: 'filoessam1@gmail.com', href: 'mailto:filoessam1@gmail.com' },
                { icon: Globe, label: 'filoessam.com', href: 'https://filoessam.com' }
                // { icon: Phone, label: '+1 (415) 555-0194', href: 'tel:+14155550194' },
                // { icon: MapPin, label: 'San Francisco, CA', href: '#' },
              ].map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <item.icon size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 14 }}>{item.label}</span>
                </a>
              ))}
            </div>

            {/* Calendly */}
            <a
              href="https://calendly.com/filoessam1/30min"
              className="btn-primary"
              style={{
                textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, padding: '14px',
              }}
            >
              <Calendar size={16} />
              Book a 30-min Call
            </a>

            {/* Social */}
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
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 2fr 1.2fr !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
