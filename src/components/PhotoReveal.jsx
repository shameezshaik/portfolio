import { useEffect, useRef, useState } from 'react'

export default function PhotoReveal() {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    // Reveal on mount (this section appears after scroll)
    const t = setTimeout(() => setVisible(true), 100)

    function onScroll() {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const progress = -rect.top / window.innerHeight
      setParallaxY(progress * 60) // subtle parallax
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <section
      ref={ref}
      id="photo-reveal"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#03030a',
      }}
    >
      {/* Blurred color splash behind photo */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 60% 80% at 50% 60%, rgba(139,92,246,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Photo — slides up on enter */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        height: '100%', width: '100%',
        transform: visible ? `translateY(${parallaxY}px)` : 'translateY(60px)',
        opacity: visible ? 1 : 0,
        transition: visible ? 'opacity 1s cubic-bezier(.22,1,.36,1), transform 1s cubic-bezier(.22,1,.36,1)' : 'none',
      }}>
        <img
          src="/shameez.jpg"
          alt="Shameez Shaik"
          style={{
            height: '92vh',
            maxWidth: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 75%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 75%, transparent 100%)',
            display: 'block',
            filter: 'contrast(1.05) saturate(1.1)',
          }}
        />
      </div>

      {/* Name overlay — bottom left */}
      <div style={{
        position: 'absolute', bottom: '8vh', left: '5vw', zIndex: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: 'opacity 1.1s 0.3s ease, transform 1.1s 0.3s ease',
      }}>
        <p style={{
          fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'rgba(139,92,246,0.8)', marginBottom: '0.4rem', fontWeight: 600,
        }}>
          AI Engineer · Michigan
        </p>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
          color: '#fff',
        }}>
          Shameez<br />
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Shaik</span>
        </h2>
      </div>

      {/* Quick stat pills — bottom right */}
      <div style={{
        position: 'absolute', bottom: '8vh', right: '5vw', zIndex: 2,
        display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: 'opacity 1.2s 0.5s ease, transform 1.2s 0.5s ease',
      }}>
        {[
          { v: '3+', l: 'Years Experience', c: '#8b5cf6' },
          { v: 'RAG', l: 'Specialist', c: '#22d3ee' },
          { v: 'LLM', l: 'Engineer', c: '#f472b6' },
        ].map(s => (
          <div key={s.l} style={{
            display: 'flex', alignItems: 'center', gap: '0.65rem',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 100, padding: '0.45rem 1rem',
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: s.c }}>{s.v}</span>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em' }}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: '2.5vh', left: '50%', transform: 'translateX(-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        opacity: visible ? 0.5 : 0,
        transition: 'opacity 1.5s 0.8s ease',
        animation: visible ? 'floatDown 2s 1.5s ease-in-out infinite' : 'none',
      }}>
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 0v20M1 13l7 7 7-7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <style>{`
        @keyframes floatDown { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(6px)} }
      `}</style>
    </section>
  )
}
