import { useReveal } from '../hooks/useReveal'
import { profile } from '../data'

const COLORS = ['var(--purple)', 'var(--cyan)', 'var(--pink)']

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">Career</div>
        <h2 className="section-heading reveal delay-1">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 18, top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--purple), var(--cyan), var(--pink))',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '3rem' }}>
            {profile.experience.map((exp, i) => (
              <div key={exp.company} className={`reveal delay-${i + 1}`} style={{ position: 'relative' }}>

                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: -46, top: '1.5rem',
                  width: 14, height: 14, borderRadius: '50%',
                  background: COLORS[i],
                  boxShadow: `0 0 16px ${COLORS[i]}`,
                  border: '2px solid var(--bg)',
                }} />

                <div
                  className="glass-card"
                  style={{ padding: '1.75rem' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = COLORS[i].replace('var(', '').replace(')', '')
                      .includes('purple') ? 'rgba(139,92,246,0.35)'
                      : COLORS[i].includes('cyan') ? 'rgba(34,211,238,0.35)'
                      : 'rgba(244,114,182,0.35)'
                  }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{exp.company}</h3>
                      <span style={{ fontSize: '0.78rem', color: COLORS[i], fontWeight: 600 }}>{exp.role}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                      <span style={{
                        fontSize: '0.62rem', fontFamily: 'JetBrains Mono, monospace',
                        color: 'var(--muted)', letterSpacing: '0.05em',
                      }}>
                        {exp.period}
                      </span>
                      <span className="tag" style={{
                        background: `${COLORS[i]}18`, border: `1px solid ${COLORS[i]}33`,
                        color: COLORS[i], fontSize: '0.58rem',
                      }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem' }}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                        <span style={{ color: COLORS[i], flexShrink: 0, marginTop: '0.15rem' }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
