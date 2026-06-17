import { useRef, useState } from 'react'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [muted,   setMuted]   = useState(true)
  const [playing, setPlaying] = useState(true)

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(m => !m)
  }

  function togglePlay() {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause() } else { videoRef.current.play() }
    setPlaying(p => !p)
  }

  const btnStyle = {
    background: 'rgba(0,0,0,0.35)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 100,
    color: 'rgba(255,255,255,0.75)',
    padding: '0.4rem 1rem',
    fontSize: '0.62rem',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    transition: 'background 0.2s',
  }

  function scrollDown() {
    document.getElementById('photo-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="video-section"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        background: '#000',
      }}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Gradient: transparent top, dark bottom */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.8) 100%)',
      }} />

      {/* Top-left wordmark */}
      <p style={{
        position: 'absolute', top: '1.75rem', left: '2rem',
        fontSize: '0.58rem', letterSpacing: '0.3em',
        color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase',
        userSelect: 'none',
      }}>
        Shameez Shaik · Portfolio
      </p>

      {/* Controls: Play/Pause + Mute */}
      <div style={{
        position: 'absolute', top: '1.35rem', right: '2rem',
        display: 'flex', gap: '0.5rem', zIndex: 2,
      }}>
        <button
          onClick={togglePlay}
          style={btnStyle}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
        >
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>

        <button
          onClick={toggleMute}
          style={btnStyle}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.55)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
        >
          {muted ? '🔇 Unmute' : '🔊 Mute'}
        </button>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        style={{
          position: 'absolute', bottom: '3rem',
          left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'rgba(255,255,255,0.55)',
          animation: 'nudgeDown 2.2s ease-in-out infinite',
        }}
      >
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        {/* Mouse outline */}
        <div style={{
          width: 24, height: 38,
          border: '1.5px solid rgba(255,255,255,0.3)',
          borderRadius: 12,
          display: 'flex', justifyContent: 'center',
          paddingTop: '5px',
        }}>
          <div style={{
            width: 2, height: 7,
            background: 'rgba(255,255,255,0.6)',
            borderRadius: 2,
            animation: 'dotDrop 2.2s ease-in-out infinite',
          }} />
        </div>
      </button>

      <style>{`
        @keyframes nudgeDown { 0%,100%{transform:translateX(-50%) translateY(0)} 55%{transform:translateX(-50%) translateY(7px)} }
        @keyframes dotDrop   { 0%,100%{transform:translateY(0);opacity:1} 75%{transform:translateY(12px);opacity:0} }
      `}</style>
    </section>
  )
}
