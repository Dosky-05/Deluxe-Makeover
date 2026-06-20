import { useState, useEffect } from 'react'

const ACCENT = '#E8891A'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px -50% 0px',
      }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const linkColor = (href) =>
    active === href.replace('#', '') ? ACCENT : 'rgba(255,255,255,0.55)'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? '#050505' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(232,137,26,0.25)' : '1px solid transparent',
    }}>
      <div className="nav-bar-pad" style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center' }}>

        {/* Logo */}
        <a href="#home" style={{ flexShrink: 0 }}>
          <img
            src="/Deluxe_DM_Makeup_Logo_nobg.png"
            alt="Deluxe Makeover"
            style={{ height: 68, width: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ flex: 1, justifyContent: 'center', gap: 40, listStyle: 'none', alignItems: 'center' }}>
          {links.map((l) => (
            <li key={l.label} style={{ position: 'relative' }}>
              <a
                href={l.href}
                style={{
                  color: linkColor(l.href),
                  fontSize: 11,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: active === l.href.replace('#', '') ? 500 : 400,
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor(l.href))}
              >
                {l.label}
              </a>
              {/* Active underline dot */}
              {active === l.href.replace('#', '') && (
                <span style={{
                  position: 'absolute',
                  bottom: -6,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: ACCENT,
                }} />
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          aria-label="Menu"
          style={{ gap: 5, cursor: 'pointer', padding: 4, marginLeft: 'auto' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block', width: 24, height: 1.5, background: '#fff',
                transition: 'all 0.3s',
                transform: open && i === 0 ? 'rotate(45deg) translate(4px,4px)'
                         : open && i === 2 ? 'rotate(-45deg) translate(4px,-4px)'
                         : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="nav-mob-drawer"
        style={{
          background: '#050505',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          maxHeight: open ? 320 : 0,
          transition: 'max-height 0.35s ease',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {links.map((l) => (
            <li key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {active === l.href.replace('#', '') && (
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
              )}
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: active === l.href.replace('#', '') ? ACCENT : 'rgba(255,255,255,0.6)',
                  fontSize: 12,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  fontWeight: active === l.href.replace('#', '') ? 500 : 400,
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
