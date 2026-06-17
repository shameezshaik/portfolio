import { useReveal } from '../hooks/useReveal'
import { profile } from '../data'

export default function Skills() {
  const ref = useReveal()
  const categories = Object.entries(profile.skills)

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <div className="section-eyebrow reveal">Technical Skills</div>
        <h2 className="section-heading reveal delay-1">
          My <span className="gradient-text-pink">Tech Stack</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {categories.map(([cat, { color, items }], ci) => (
            <div
              key={cat}
              className={`glass-card reveal delay-${ci + 1}`}
              style={{ padding: '1.5rem' }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                marginBottom: '1.1rem',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10,
                  background: `${color}22`,
                  border: `1px solid ${color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.9rem',
                }}>
                  {cat === 'AI & MLOps' ? '🤖' : cat === 'Data Engineering' ? '🗄️' : cat === 'App Dev & DevOps' ? '⚙️' : '☁️'}
                </div>
                <span style={{
                  fontSize: '0.72rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color,
                }}>
                  {cat}
                </span>
              </div>

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {items.map((skill, si) => (
                  <span
                    key={skill}
                    className="tag"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}28`,
                      color: `${color}ee`,
                      transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                      animationDelay: `${si * 0.04}s`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${color}28`
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = `0 4px 16px ${color}30`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = `${color}12`
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div style={{
          marginTop: '3rem',
          overflow: 'hidden',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}>
          <div style={{
            display: 'flex', gap: '1.5rem',
            animation: 'marquee 20s linear infinite',
            width: 'max-content',
          }}>
            {[...categories.flatMap(([, { items }]) => items), ...categories.flatMap(([, { items }]) => items)].map((skill, i) => (
              <span
                key={i}
                style={{
                  fontSize: '0.65rem', fontFamily: 'JetBrains Mono, monospace',
                  color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}
              >
                {skill} <span style={{ color: 'rgba(139,92,246,0.4)', marginLeft: '0.5rem' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      `}</style>
    </section>
  )
}
