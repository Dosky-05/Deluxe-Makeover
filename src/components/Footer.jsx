const ACCENT = '#E8891A'

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/deluxe_makeover',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/15138375127',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:deluxebridalbeauty@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#050505', paddingTop: 56 }}>
      {/* Brand block */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <img
          src="/Deluxe_DM_Makeup_Logo_nobg.png"
          alt="Deluxe Makeover"
          style={{ height: 76, width: 'auto', display: 'inline-block', objectFit: 'contain', marginBottom: 16 }}
        />
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>
          Deluxe Makeover
        </p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', marginTop: 6, letterSpacing: '0.15em' }}>
          Florida&apos;s Timeless Beauty Artistry
        </p>
      </div>

      {/* Bottom bar */}
      <div className="footer-bar" style={{ borderTop: '1px solid #111', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Spacer left */}
        <div style={{ flex: 1 }} />

        {/* Copyright — center */}
        <p style={{ flex: 1, textAlign: 'center', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)', fontWeight: 400, whiteSpace: 'nowrap' }}>
          &copy; {new Date().getFullYear()} Deluxe Makeover. All rights reserved.
        </p>

        {/* Social icons — right */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
