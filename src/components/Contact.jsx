import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data'

export default function Contact() {
  const ref = useReveal()
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    { label: 'LinkedIn', icon: '💼', href: profile.linkedin, color: 'var(--cyan)' },
    { label: 'Email',    icon: '✉️',  href: `mailto:${profile.email}`, color: 'var(--purple)' },
    { label: 'Phone',    icon: '📞',  href: `tel:${profile.phone}`, color: 'var(--green)' },
  ]

  return (
    <section id="contact" className="section" ref={ref} style={{ minHeight: 'auto', padding: '6rem 2rem' }}>
      <div className="container">
        <div className="section-eyebrow reveal">Get In Touch</div>
        <h2 className="section-heading reveal delay-1">
          Let's Build Something <span className="gradient-text">Together</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

          {/* CTA card */}
          <div className="glass-card reveal-left" style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(34,211,238,0.06))',
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>
              Open to Opportunities
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Whether it's a full-time AI Engineering role, a consulting project, or a collaboration on cutting-edge AI systems — I'd love to connect.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 12,
                    color: 'var(--text)', textDecoration: 'none',
                    fontSize: '0.82rem',
                    transition: 'background 0.2s, border-color 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--glass-hover)'
                    e.currentTarget.style.borderColor = s.color
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--glass)'
                    e.currentTarget.style.borderColor = 'var(--glass-border)'
                    e.currentTarget.style.transform = ''
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
                  <span style={{ flex: 1 }}>{s.label}</span>
                  <span style={{ color: s.color, fontSize: '0.7rem' }}>↗</span>
                </a>
              ))}
            </div>

            <button className="btn-primary" onClick={copyEmail} style={{ width: '100%', justifyContent: 'center' }}>
              {copied ? '✓ Copied!' : '📋 Copy Email Address'}
            </button>
          </div>

          {/* Quick info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { icon: '⚡', title: 'Quick Response', body: 'I typically respond within 24 hours. For urgent inquiries, feel free to reach out via LinkedIn or phone.' },
              { icon: '🌍', title: 'Remote & On-Site', body: 'Based in Michigan, USA. Open to remote, hybrid, or on-site roles across the United States.' },
              { icon: '🎯', title: 'Areas of Expertise', body: 'LLMs, RAG systems, MLOps, data pipelines, FastAPI, and cloud-native AI applications.' },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`glass-card reveal-right delay-${i + 1}`}
                style={{ padding: '1.4rem' }}
              >
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
