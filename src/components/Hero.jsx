const ACCENT = '#E8891A'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: '50% 30%',
        }}
      >
        <source src="/HeroBgpic_clean.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', maxWidth: 900, animation: 'fadeUp 1.2s ease both' }}>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: 16,
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            color: '#fff',
            textShadow: '0 2px 30px rgba(0,0,0,0.5)',
          }}
        >
          Deluxe{' '}
          <span style={{ color: ACCENT, fontStyle: 'italic' }}>Makeover</span>
        </h1>

        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 400,
            marginBottom: 40,
            textShadow: '0 1px 10px rgba(0,0,0,0.4)',
          }}
        >
          Florida&apos;s Timeless Beauty Artistry Expert
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#gallery"
            style={{
              display: 'inline-block',
              padding: '13px 40px',
              border: '1px solid rgba(255,255,255,0.7)',
              color: '#fff',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'background 0.2s, color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#050505' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
          >
            View Gallery
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '13px 40px',
              background: ACCENT,
              color: '#fff',
              fontSize: 11,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontWeight: 500,
              transition: 'background 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#c97412')}
            onMouseLeave={e => (e.currentTarget.style.background = ACCENT)}
          >
            Book a Session
          </a>
        </div>
      </div>

      {/* Top gradient — masks video artifact on mobile */}
      <div className="hero-top-fade" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3 }} />

      {/* Fade into next section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          background: 'linear-gradient(to top, #050505, transparent)',
          zIndex: 3,
        }}
      />
    </section>
  )
}
