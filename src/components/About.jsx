import { useReveal } from '../hooks/useReveal'
import { profile } from '../data'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">About Me</div>
        <h2 className="section-heading reveal delay-1">
          Turning Data into <span className="gradient-text">Intelligence</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

          {/* Bio card */}
          <div className="glass-card reveal-left" style={{ padding: '2rem' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.5rem', marginBottom: '1.25rem',
              boxShadow: '0 0 30px var(--purple-glow)',
            }}>
              🧠
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Shameez Shaik
              <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--purple)', fontWeight: 500, letterSpacing: '0.1em', marginTop: '0.2rem' }}>
                AI ENGINEER · MICHIGAN, USA
              </span>
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              {profile.bio}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { label: 'Location', value: profile.location },
                { label: 'LinkedIn', value: 'linkedin.com/in/shameez-shaik', href: profile.linkedin },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.78rem' }}>
                  <span style={{ color: 'var(--muted)', minWidth: 70 }}>{item.label}</span>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer"
                         style={{ color: 'var(--cyan)', textDecoration: 'none' }}>{item.value}</a>
                    : <span style={{ color: 'var(--text)' }}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Education */}
            <div className="glass-card reveal-right delay-1" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--cyan)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Education
              </div>
              {profile.education.map(ed => (
                <div key={ed.degree} style={{ marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{ed.degree}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.75rem', marginTop: '0.15rem' }}>
                    {ed.school} · {ed.year}
                  </div>
                </div>
              ))}

              {/* Publication */}
              <div>
                <div style={{ fontSize: '0.62rem', color: 'var(--pink)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Research
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.82rem', lineHeight: 1.4 }}>
                  {profile.publication.title}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '0.2rem' }}>
                  {profile.publication.journal} · {profile.publication.year}
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '⚡', label: 'Reduced failures', value: '35%', color: 'var(--green)' },
                { icon: '🚀', label: 'Faster reporting', value: '60%', color: 'var(--cyan)' },
                { icon: '📍', label: 'Distribution pts.', value: '50+', color: 'var(--purple)' },
                { icon: '📄', label: 'Daily records', value: 'M+', color: 'var(--pink)' },
              ].map(item => (
                <div
                  key={item.label}
                  className="glass-card reveal delay-2"
                  style={{ padding: '1rem', textAlign: 'center' }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: item.color, letterSpacing: '-0.02em' }}>
                    {item.value}
                  </div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--muted)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
