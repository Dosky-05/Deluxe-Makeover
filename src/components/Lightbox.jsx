import { useState, useEffect } from 'react'

const ACCENT = '#E8891A'

export const allImages = [
  { img: '/BridalGlow.jpg',      label: 'The Bridal Glow',   sub: 'Bridal Makeup' },
  { img: '/Cleanglam.jpg',       label: 'Clean Glam',         sub: 'Evening Look' },
  { img: '/NaturalElegance.jpg', label: 'Neutral Elegance',   sub: 'Neutral Glam' },
  { img: '/SkinFocus.jpg',       label: 'Skin Focus',         sub: 'Natural Look' },
  { img: '/Bold&Beautiful.jpg',  label: 'Bold & Beautiful',   sub: 'Editorial' },
  { img: '/Goldenhour.jpg',      label: 'Golden Hour',        sub: 'Special Occasion' },
  { img: '/Artistimg.jpg',       label: 'The Artist',         sub: 'Portrait' },
  { img: '/Heroimg.jpg',         label: 'Beauty Tools',       sub: 'Studio' },
  { img: '/Heroimg2.jpg',        label: 'The Collection',     sub: 'Studio' },
]

export default function Lightbox({ startIndex = 0, onClose }) {
  const [cur, setCur] = useState(startIndex)
  const [dir, setDir] = useState('next')
  const n = allImages.length

  const prev = () => { setDir('prev'); setCur(c => (c - 1 + n) % n) }
  const next = () => { setDir('next'); setCur(c => (c + 1) % n) }
  const goTo = (i) => { setDir(i > cur ? 'next' : 'prev'); setCur(i) }

  // Keyboard navigation + lock body scroll
  useEffect(() => {
    const prev_orig = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowRight')  next()
      if (e.key === 'ArrowLeft')   prev()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev_orig
      window.removeEventListener('keydown', onKey)
    }
  }, [cur])

  const slideAnim = dir === 'next'
    ? 'galleryInRight 0.6s cubic-bezier(0.22,1,0.36,1) both'
    : 'galleryInLeft  0.6s cubic-bezier(0.22,1,0.36,1) both'

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 999, background: 'rgba(0,0,0,0.96)', display: 'flex', flexDirection: 'column' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{ position: 'absolute', top: 20, right: 24, zIndex: 10, fontSize: 22, color: 'rgba(255,255,255,0.5)', lineHeight: 1, transition: 'color 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
      >
        ✕
      </button>

      {/* Counter */}
      <div style={{ position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)', fontSize: 11, letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', zIndex: 10 }}>
        {String(cur + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
      </div>

      {/* Main image area */}
      <div
        className="lightbox-content"
        style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '60px 24px 16px' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Prev arrow */}
        <button
          className="lightbox-prev"
          onClick={prev}
          style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'border-color 0.2s, background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.background = ACCENT }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Image */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div className="lightbox-img">
            <img
              key={cur}
              src={allImages[cur].img}
              alt={allImages[cur].label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', animation: slideAnim }}
            />
          </div>
          <div style={{ textAlign: 'center', animation: 'galleryLabelIn 0.6s ease 0.25s both' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, color: '#fff', marginBottom: 4 }}>
              {allImages[cur].label}
            </p>
            <p style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500 }}>
              {allImages[cur].sub}
            </p>
          </div>
        </div>


        {/* Next arrow */}
        <button
          className="lightbox-next"
          onClick={next}
          style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, transition: 'border-color 0.2s, background 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = ACCENT; e.currentTarget.style.background = ACCENT }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '0 24px 28px', justifyContent: 'center', flexWrap: 'wrap' }}
        onClick={e => e.stopPropagation()}
      >
        {allImages.map((item, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: 100, height: 100, flexShrink: 0, overflow: 'hidden', cursor: 'pointer',
              border: `2px solid ${i === cur ? ACCENT : 'rgba(255,255,255,0.08)'}`,
              opacity: i === cur ? 1 : 0.45,
              transition: 'opacity 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
            onMouseLeave={e => { e.currentTarget.style.opacity = i === cur ? 1 : 0.45 }}
          >
            <img src={item.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
