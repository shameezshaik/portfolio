import { useEffect, useRef, useState } from 'react'

export default function VideoIntro({ onDone }) {
  const videoRef   = useRef(null)
  const [progress, setProgress]   = useState(0)
  const [muted,    setMuted]      = useState(true)
  const [ended,    setEnded]      = useState(false)
  const [exiting,  setExiting]    = useState(false)
  const [showSkip, setShowSkip]   = useState(false)

  useEffect(() => {
    // Show skip after 2 s
    const t = setTimeout(() => setShowSkip(true), 2000)
    return () => clearTimeout(t)
  }, [])

  function handleTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  function handleEnded() {
    setEnded(true)
    setProgress(100)
  }

  function exit() {
    setExiting(true)
    setTimeout(onDone, 800)
  }

  function toggleMute() {
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(m => !m)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 500,
      background: '#000',
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.8s ease',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Gradient overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.7) 100%)', pointerEvents: 'none' }} />

      {/* Top bar */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          Shameez Shaik · Portfolio
        </span>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={toggleMute} style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: 100, color: '#fff',
            padding: '0.4rem 0.9rem',
            fontSize: '0.65rem', letterSpacing: '0.1em',
            cursor: 'pointer',
          }}>
            {muted ? '🔇 Unmute' : '🔊 Mute'}
          </button>

          {showSkip && !ended && (
            <button onClick={exit} style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 100, color: 'rgba(255,255,255,0.6)',
              padding: '0.4rem 0.9rem',
              fontSize: '0.65rem', letterSpacing: '0.1em',
              cursor: 'pointer',
              animation: 'fadeIn 0.4s ease',
            }}>
              Skip →
            </button>
          )}
        </div>
      </div>

      {/* Center "Scroll" prompt — shown after video ends */}
      {ended && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          animation: 'fadeIn 0.6s ease',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              fontWeight: 900, letterSpacing: '-0.04em',
              background: 'linear-gradient(135deg, #fff 40%, rgba(139,92,246,0.8))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
            }}>
              Shameez Shaik
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              AI Engineer
            </p>
          </div>

          <button
            onClick={exit}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase',
              animation: 'bounceScroll 1.8s ease-in-out infinite',
            }}
          >
            Scroll to explore
            <div style={{
              width: 28, height: 44,
              border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: 14, display: 'flex', justifyContent: 'center', paddingTop: 6,
            }}>
              <div style={{
                width: 3, height: 8, borderRadius: 2,
                background: 'rgba(255,255,255,0.7)',
                animation: 'scrollDot 1.8s ease-in-out infinite',
              }} />
            </div>
          </button>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div style={{ height: 2, background: 'rgba(255,255,255,0.1)' }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--purple, #8b5cf6), var(--cyan, #22d3ee))',
            transition: 'width 0.1s linear',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn       { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }
        @keyframes bounceScroll { 0%,100% { transform:translateY(0) } 50% { transform:translateY(10px) } }
        @keyframes scrollDot    { 0%,100% { transform:translateY(0); opacity:1 } 80% { transform:translateY(14px); opacity:0 } }
      `}</style>
    </div>
  )
}
