import { useEffect, useRef, useState } from 'react'

export default function PhotoSection() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  function scrollToPortfolio() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="photo-section"
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        background: '#03030a',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
    >
      {/* Purple glow behind photo */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 70% at 50% 70%, rgba(139,92,246,0.18) 0%, transparent 70%)',
      }} />

      {/* Photo — slides up when section enters viewport */}
      <div style={{
        position: 'relative', zIndex: 1,
        height: '100%',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        transform: visible ? 'translateY(0)' : 'translateY(80px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 1.3s cubic-bezier(.22,1,.36,1), opacity 1s ease',
      }}>
        <img
          src="/shameez.jpg"
          alt="Shameez Shaik"
          style={{
            height: '94vh',
            maxWidth: '100vw',
            objectFit: 'cover',
            objectPosition: 'top center',
            display: 'block',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 78%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 78%, transparent 100%)',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(3,3,10,0.4) 0%, transparent 20%, transparent 60%, rgba(3,3,10,0.85) 100%)',
      }} />

      {/* Name — bottom left */}
      <div style={{
        position: 'absolute', bottom: '8vh', left: '6vw', zIndex: 3,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1s 0.35s ease, transform 1s 0.35s ease',
      }}>
        <p style={{
          fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'rgba(139,92,246,0.85)', marginBottom: '0.4rem', fontWeight: 600,
        }}>
          AI Engineer · Michigan, USA
        </p>
        <h1 style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1,
          color: '#fff',
        }}>
          Shameez<br />
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6, #22d3ee)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Shaik
          </span>
        </h1>
      </div>

      {/* Pill badges — bottom right */}
      <div style={{
        position: 'absolute', bottom: '8vh', right: '6vw', zIndex: 3,
        display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 1.1s 0.5s ease, transform 1.1s 0.5s ease',
      }}>
        {[
          { v: '3+', l: 'Years Experience', c: '#8b5cf6' },
          { v: 'RAG', l: 'Architect',        c: '#22d3ee' },
          { v: 'LLM', l: 'Engineer',          c: '#f472b6' },
        ].map(s => (
          <div key={s.l} style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 100, padding: '0.4rem 1rem',
          }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: s.c }}>{s.v}</span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* Scroll cue — bottom center */}
      <button
        onClick={scrollToPortfolio}
        style={{
          position: 'absolute', bottom: '2rem',
          left: '50%', transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
          background: 'none', border: 'none', cursor: 'pointer',
          opacity: visible ? 0.55 : 0,
          transition: 'opacity 1.5s 0.8s ease',
          animation: visible ? 'scrollBounce2 2s 1.5s ease-in-out infinite' : 'none',
        }}
      >
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase' }}>
          Explore
        </span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <path d="M7 1v18M1 13l6 6 6-6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        @keyframes scrollBounce2 { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
      `}</style>
    </section>
  )
}
