import VideoSection from './components/VideoSection'
import PhotoSection from './components/PhotoSection'
import SideNav      from './components/SideNav'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import About         from './components/About'
import Skills        from './components/Skills'
import Experience    from './components/Experience'
import Projects      from './components/Projects'
import Contact       from './components/Contact'

export default function App() {
  return (
    <>
      {/* Ambient background blobs */}
      <div className="blob-wrap" aria-hidden>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      {/* Side dot nav — appears once past intro */}
      <SideNav />

      {/* Top navbar — hidden on video/photo */}
      <Navbar />

      {/* ── Section 1: Video ── */}
      <VideoSection />

      {/* ── Section 2: Photo ── */}
      <PhotoSection />

      {/* ── Sections 3+: Portfolio ── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <footer style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center', padding: '2rem',
        borderTop: '1px solid var(--glass-border)',
        fontSize: '0.7rem', color: 'var(--muted)',
      }}>
        © 2025 Shameez Shaik ·{' '}
        <span style={{ color: 'var(--purple)' }}>React</span>
        {' + '}
        <span style={{ color: 'var(--cyan)' }}>Vite</span>
        {' · Michigan, USA'}
      </footer>
    </>
  )
}
