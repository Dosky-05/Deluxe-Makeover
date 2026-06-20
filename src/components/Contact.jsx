import { useEffect, useRef, useState } from 'react'

const ACCENT = '#E8891A'
const PHONE = '+15138375127'

const contacts = [
  {
    id: 'call',
    label: 'CALL / WHATSAPP',
    desc: 'Chat with us directly',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.12 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    id: 'email',
    href: 'mailto:deluxebridalbeauty@gmail.com',
    label: 'EMAIL',
    desc: 'Send us a message',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: 'https://instagram.com/deluxe_makeover',
    label: 'INSTAGRAM',
    desc: 'See our gallery',
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
      </svg>
    ),
  },
]

function CallPopup({ onClose, anchorRef }) {
  const popupRef = useRef()

  useEffect(() => {
    const handleClick = (e) => {
      if (
        popupRef.current && !popupRef.current.contains(e.target) &&
        anchorRef.current && !anchorRef.current.contains(e.target)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <div
      ref={popupRef}
      style={{
        position: 'absolute',
        bottom: 'calc(100% + 16px)',
        left: '50%',
        zIndex: 201,
        background: '#0e0e0e',
        border: '1px solid rgba(232,137,26,0.2)',
        padding: '6px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minWidth: 190,
        animation: 'popupIn 0.25s cubic-bezier(0.22,1,0.36,1) both',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
      }}
    >
      {/* Arrow */}
      <div style={{
        position: 'absolute',
        bottom: -5,
        left: '50%',
        transform: 'translateX(-50%) rotate(45deg)',
        width: 9, height: 9,
        background: '#0e0e0e',
        borderRight: '1px solid rgba(232,137,26,0.2)',
        borderBottom: '1px solid rgba(232,137,26,0.2)',
      }} />

      <a
        href={`tel:${PHONE}`}
        onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.2s, background 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,137,26,0.08)'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 012 2.12 2 2 0 014 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
        Call
      </a>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.05)', margin: '0 8px' }} />

      <a
        href={`https://wa.me/${PHONE.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', transition: 'color 0.2s, background 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(232,137,26,0.08)'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill={ACCENT}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp
      </a>
    </div>
  )
}

export default function Contact() {
  const sectionRef = useRef()
  const callRef = useRef()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const els = sectionRef.current.querySelectorAll('.reveal')
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
    <section id="contact" ref={sectionRef} className="mob-section" style={{ padding: '120px 0', background: '#050505' }}>
      <div className="mob-px" style={{ maxWidth: 860, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(2.4rem,5.5vw,5rem)',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 18,
            transitionDelay: '0.05s',
          }}
        >
          Let&apos;s make you more beautiful
        </h2>
        <p
          className="reveal"
          style={{
            fontSize: 11,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: ACCENT,
            fontWeight: 400,
            marginBottom: 72,
            transitionDelay: '0.18s',
          }}
        >
          Book your appointment today
        </p>

        {/* Tips card */}
        <div
          className="mob-tips-pad reveal"
          style={{ marginBottom: 72, padding: '36px 40px', border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', transitionDelay: '0.3s' }}
        >
          <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, marginBottom: 24 }}>
            When you reach out, mention
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
            {[
              { num: '01', text: 'Your event date & location' },
              { num: '02', text: "The service you're interested in" },
              { num: '03', text: 'Inspiration photos of your desired look' },
              { num: '04', text: 'Your skin tone & any concerns' },
            ].map((tip) => (
              <div key={tip.num} style={{ textAlign: 'left', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: ACCENT, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{tip.num}</span>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.6, marginTop: 2 }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact icons */}
        <div className="mob-contact-stack tab-contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {contacts.map((c, i) => {
            if (c.id === 'call') {
              return (
                <div
                  key={c.id}
                  ref={callRef}
                  className="reveal"
                  style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, cursor: 'pointer', transitionDelay: `${0.42 + i * 0.12}s` }}
                  onClick={() => setShowPopup(v => !v)}
                  onMouseEnter={e => e.currentTarget.querySelector('svg').style.stroke = '#fff'}
                  onMouseLeave={e => e.currentTarget.querySelector('svg').style.stroke = 'rgba(255,255,255,0.6)'}
                >
                  {c.icon}
                  <div>
                    <p style={{ fontSize: 12, letterSpacing: '0.2em', fontWeight: 600, color: '#fff', marginBottom: 6 }}>{c.label}</p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{c.desc}</p>
                  </div>
                  {showPopup && <CallPopup onClose={() => setShowPopup(false)} anchorRef={callRef} />}
                </div>
              )
            }

            return (
              <a
                key={c.id}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="reveal"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textDecoration: 'none', transitionDelay: `${0.42 + i * 0.12}s` }}
                onMouseEnter={e => e.currentTarget.querySelector('svg').style.stroke = '#fff'}
                onMouseLeave={e => e.currentTarget.querySelector('svg').style.stroke = 'rgba(255,255,255,0.6)'}
              >
                {c.icon}
                <div>
                  <p style={{ fontSize: 12, letterSpacing: '0.2em', fontWeight: 600, color: '#fff', marginBottom: 6 }}>{c.label}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>{c.desc}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
