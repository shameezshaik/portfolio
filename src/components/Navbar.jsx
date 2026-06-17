import { useState, useEffect } from 'react'

const LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('Home')
  const [open,      setOpen]      = useState(false)
  const [onIntro,   setOnIntro]   = useState(true)

  useEffect(() => {
    function onScroll() {
      // Hide navbar while on video or photo sections (first two 100vh sections)
      setOnIntro(window.scrollY < window.innerHeight * 1.8)
      setScrolled(window.scrollY > 60)
      const sections = LINKS.map(l => document.getElementById(l.toLowerCase())).filter(Boolean)
      const current  = sections.findLast(s => window.scrollY >= s.offsetTop - 200)
      if (current) setActive(current.id.charAt(0).toUpperCase() + current.id.slice(1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
        background: scrolled ? 'rgba(6,6,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.35s ease',
        opacity: onIntro ? 0 : 1,
        pointerEvents: onIntro ? 'none' : 'auto',
      }}>
        <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
          <span className="gradient-text">SS</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 0.25rem' }}>·</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>AI Engineer</span>
        </span>

        <div style={{ display: 'flex', gap: '0.25rem' }} className="nav-links-desktop">
          {LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: active === link ? 'rgba(139,92,246,0.15)' : 'transparent',
                border: 'none',
                color: active === link ? 'var(--purple)' : 'var(--muted)',
                fontSize: '0.72rem',
                fontWeight: active === link ? 600 : 400,
                letterSpacing: '0.05em',
                padding: '0.45rem 0.85rem',
                borderRadius: '100px',
                transition: 'all 0.2s',
              }}
            >
              {link}
            </button>
          ))}
        </div>

        <a
          href="mailto:shameezsk543@gmail.com"
          className="btn-primary"
          style={{ fontSize: '0.7rem', padding: '0.5rem 1.25rem' }}
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'none', background: 'none', border: 'none',
            color: 'var(--text)', fontSize: '1.25rem', padding: '0.25rem',
          }}
          className="hamburger"
          aria-label="menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(6,6,16,0.97)',
          backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '1.5rem',
        }}>
          {LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none',
                color: active === link ? 'var(--purple)' : 'var(--text)',
                fontSize: '1.75rem', fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
