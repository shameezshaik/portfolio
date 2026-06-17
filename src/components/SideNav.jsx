import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'video-section', label: 'Intro' },
  { id: 'photo-section', label: 'Profile' },
  { id: 'home',          label: 'Hero' },
  { id: 'about',         label: 'About' },
  { id: 'skills',        label: 'Skills' },
  { id: 'experience',    label: 'Experience' },
  { id: 'projects',      label: 'Projects' },
  { id: 'contact',       label: 'Contact' },
]

export default function SideNav() {
  const [active, setActive]   = useState('video-section')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            // Hide dots while on video/photo, show from hero onwards
            setVisible(!['video-section', 'photo-section'].includes(entry.target.id))
          }
        })
      },
      { threshold: 0.5 }
    )

    SECTIONS.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <nav style={{
      position: 'fixed',
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 200,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
      alignItems: 'center',
    }}>
      {SECTIONS.filter(s => !['video-section', 'photo-section'].includes(s.id)).map(s => (
        <button
          key={s.id}
          title={s.label}
          onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            width:  active === s.id ? 8 : 5,
            height: active === s.id ? 24 : 5,
            borderRadius: 4,
            background: active === s.id
              ? 'linear-gradient(to bottom, var(--purple), var(--cyan))'
              : 'rgba(255,255,255,0.2)',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.3s cubic-bezier(.22,1,.36,1)',
            boxShadow: active === s.id ? '0 0 10px var(--purple-glow)' : 'none',
          }}
        />
      ))}
    </nav>
  )
}
