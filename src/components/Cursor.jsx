import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let rx = 0, ry = 0
    let animId

    function onMove(e) {
      dot.style.left  = e.clientX + 'px'
      dot.style.top   = e.clientY + 'px'

      cancelAnimationFrame(animId)
      animId = requestAnimationFrame(() => {
        rx += (e.clientX - rx) * 0.12
        ry += (e.clientY - ry) * 0.12
        ring.style.left = rx + 'px'
        ring.style.top  = ry + 'px'
      })
    }

    function onEnter() {
      dot.classList.add('hovering')
      ring.classList.add('hovering')
    }
    function onLeave() {
      dot.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    window.addEventListener('mousemove', onMove)

    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return null
}
