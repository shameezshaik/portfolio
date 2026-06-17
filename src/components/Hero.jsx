import { useEffect, useRef, useState } from 'react'
import { profile } from '../data'

const ROLES = ['AI Engineer', 'RAG Architect', 'ML Engineer', 'Data Engineer']

export default function Hero() {
  const [roleIdx,  setRoleIdx]  = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const target = ROLES[roleIdx]

    if (!deleting && displayed.length < target.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, roleIdx])

  function scrollDown() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', padding: '0 2rem', alignItems: 'center' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}>

          {/* Left content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(139,92,246,0.12)',
              border: '1px solid rgba(139,92,246,0.25)',
              borderRadius: '100px',
              padding: '0.35rem 0.9rem',
              width: 'fit-content',
              fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--purple)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px #4ade80',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Available for opportunities
            </div>

            <div>
              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '0.25rem' }}>
                <span style={{ display: 'block', color: 'rgba(240,244,255,0.9)' }}>Shameez</span>
                <span className="gradient-text" style={{ display: 'block' }}>Shaik</span>
              </h1>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                color: 'var(--muted)', fontWeight: 500,
                marginTop: '0.5rem',
              }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--cyan)' }}>
                  {displayed}
                  <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--purple)' }}>|</span>
                </span>
              </div>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: 520 }}>
              {profile.bio}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects →
              </button>
              <a href="mailto:shameezsk543@gmail.com" className="btn-glass">Get in Touch</a>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '1.5rem', paddingTop: '1rem',
              borderTop: '1px solid var(--glass-border)',
            }}>
              {profile.stats.map(s => (
                <div key={s.label}>
                  <div style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800,
                    letterSpacing: '-0.03em',
                    background: 'linear-gradient(135deg, var(--purple), var(--cyan))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating tech card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 200 }} className="hero-right">
            {[
              { label: 'LLMs & RAG',        color: 'var(--purple)', icon: '🤖' },
              { label: 'Apache Kafka',       color: 'var(--cyan)',   icon: '⚡' },
              { label: 'Vector Databases',   color: 'var(--pink)',   icon: '🗄️' },
              { label: 'MLflow & MLOps',     color: 'var(--green)',  icon: '📊' },
              { label: 'AWS / Azure / GCP',  color: 'var(--cyan)',   icon: '☁️' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="glass-card"
                style={{
                  padding: '0.75rem 1rem',
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  animation: `floatCard 4s ease-in-out ${i * 0.4}s infinite`,
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 500, color: item.color }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollDown}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '0.4rem', background: 'none', border: 'none',
            color: 'var(--muted)', marginTop: '3rem', fontSize: '0.6rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            animation: 'bounce 2s ease-in-out infinite',
          }}
        >
          scroll
          <span style={{
            width: 1, height: 36,
            background: 'linear-gradient(to bottom, var(--purple), transparent)',
          }} />
        </button>
      </div>

      <style>{`
        @keyframes pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.8)} }
        @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(8px)} }
        @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @media (max-width:768px) {
          .hero-right { display:none !important; }
        }
      `}</style>
    </section>
  )
}
