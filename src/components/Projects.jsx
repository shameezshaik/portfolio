import { useReveal } from '../hooks/useReveal'
import { profile } from '../data'

const GRADIENTS = [
  'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(34,211,238,0.08))',
  'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(139,92,246,0.08))',
]
const GLOW = ['var(--purple-glow)', 'var(--pink-glow)']

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">Work</div>
        <h2 className="section-heading reveal delay-1">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {profile.projects.map((proj, i) => (
            <div
              key={proj.name}
              className={`glass-card reveal delay-${i + 1}`}
              style={{
                padding: '2rem',
                background: GRADIENTS[i],
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 24px 60px ${GLOW[i]}, 0 0 0 1px rgba(255,255,255,0.1)`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = ''
              }}
            >
              {/* Glow orb */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 150, height: 150, borderRadius: '50%',
                background: i === 0 ? 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)'
                                    : 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative' }}>
                {/* Period badge */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}>
                  <span style={{
                    fontSize: '0.58rem', fontFamily: 'JetBrains Mono, monospace',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                  }}>
                    {proj.period}
                  </span>
                  <span className="tag" style={{
                    background: i === 0 ? 'rgba(139,92,246,0.2)' : 'rgba(244,114,182,0.2)',
                    border: i === 0 ? '1px solid rgba(139,92,246,0.35)' : '1px solid rgba(244,114,182,0.35)',
                    color: i === 0 ? 'var(--purple)' : 'var(--pink)',
                    fontSize: '0.58rem',
                  }}>
                    {proj.highlight}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {proj.name}
                </h3>
                <p style={{
                  fontSize: '0.72rem', color: i === 0 ? 'var(--purple)' : 'var(--pink)',
                  fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}>
                  {proj.subtitle}
                </p>

                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {proj.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} className="tag" style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(240,244,255,0.65)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button className={i === 0 ? 'btn-primary' : 'btn-glass'} style={{ fontSize: '0.7rem', padding: '0.5rem 1.1rem' }}>
                    Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
