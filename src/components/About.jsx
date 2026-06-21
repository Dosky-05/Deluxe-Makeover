import { useEffect, useRef } from 'react'

const ACCENT = '#E8891A'

const stats = [
  { value: '200+', label: 'Happy Clients' },
  { value: '7+',   label: 'Years & Experience' },
  { value: '100%', label: 'Passion & Precision' },
]

export default function About() {
  const sectionRef = useRef()

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.reveal, .reveal-left')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="mob-section" style={{ padding: '100px 0', background: '#050505' }}>
      <div className="mob-px" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div className="mob-col tab-about-col" style={{ display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' }}>

          {/* Image side */}
          <div className="reveal-left" style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img
                  src="/Artistimg.jpg"
                  alt="Deluxe Makeover Artist"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                />
              </div>
              {/* Corner accent brackets */}
              {[
                { top: -10, left: -10, borderTop: `1px solid ${ACCENT}`, borderLeft: `1px solid ${ACCENT}` },
                { top: -10, right: -10, borderTop: `1px solid ${ACCENT}`, borderRight: `1px solid ${ACCENT}` },
                { bottom: -10, left: -10, borderBottom: `1px solid ${ACCENT}`, borderLeft: `1px solid ${ACCENT}` },
                { bottom: -10, right: -10, borderBottom: `1px solid ${ACCENT}`, borderRight: `1px solid ${ACCENT}` },
              ].map((s, i) => (
                <div key={i} className="mob-hide" style={{ position: 'absolute', width: 28, height: 28, ...s }} />
              ))}
            </div>
          </div>

          {/* Text side */}
          <div style={{ flex: '1 1 300px', minWidth: 0 }}>
            <p className="reveal" style={{ fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, marginBottom: 20, transitionDelay: '0.1s' }}>
              About the Artist
            </p>

            <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#fff', lineHeight: 1.1, marginBottom: 28, transitionDelay: '0.2s' }}>
              Where Beauty Meets{' '}
              <span style={{ fontStyle: 'italic', color: ACCENT }}>Artistry</span>
            </h2>

            <p className="reveal" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, fontWeight: 300, marginBottom: 48, transitionDelay: '0.3s' }}>
              As a passionate Florida-based makeup artist, I bring my love for beauty to life through timeless and skin-focused artistry. Specializing in bridal, clean, and neutral glam looks, I strive to enhance natural beauty with every brushstroke. My mission is to make every client feel confident and radiant, whether it&apos;s for a special day or an everyday occasion. Let&apos;s create your perfect look together!
            </p>

            {/* Stats */}
            <div className="mob-stats" style={{ display: 'flex', gap: 48, marginBottom: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <div key={s.label} className="reveal" style={{ transitionDelay: `${0.35 + i * 0.1}s` }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', fontWeight: 300, color: ACCENT, lineHeight: 1 }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: 6, fontWeight: 400 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mob-btn-full reveal"
              style={{
                display: 'inline-block',
                padding: '13px 40px',
                border: `1px solid ${ACCENT}`,
                color: ACCENT,
                fontSize: 11,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'background 0.2s, color 0.2s, opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)',
                cursor: 'pointer',
                transitionDelay: '0.65s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transitionDelay = '0s'; e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.transitionDelay = '0s'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ACCENT }}
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
