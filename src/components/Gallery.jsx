import { useState } from 'react'
import Lightbox from './Lightbox'

const ACCENT = '#E8891A'

const items = [
  { label: 'The Bridal Glow', sub: 'Bridal Makeup', img: '/Gallery01.jpg' },
  { label: 'Clean Glam', sub: 'Evening Look', img: '/Gallery02.jpg' },
  { label: 'Neutral Elegance', sub: 'Neutral Glam', img: '/Gallery03.jpg' },
  { label: 'Skin Focus', sub: 'Natural Look', img: '/Gallery04.jpg' },
  { label: 'Bold & Beautiful', sub: 'Editorial', img: '/Gallery05.jpg' },
  { label: 'Golden Hour', sub: 'Special Occasion', img: '/Gallery06.jpg' },
]

const ArrowBtn = ({ onClick, dir }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 48, height: 48,
        borderRadius: '50%',
        background: hovered ? ACCENT : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? ACCENT : 'rgba(255,255,255,0.2)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', flexShrink: 0,
        transform: hovered ? 'scale(1.12)' : 'scale(1)',
        boxShadow: hovered ? `0 0 24px rgba(232,137,26,0.45)` : 'none',
        transition: 'background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s',
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        {dir === 'left'
          ? <path d="M9 2L4 7l5 5" stroke={hovered ? '#fff' : 'rgba(255,255,255,0.7)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M5 2l5 5-5 5" stroke={hovered ? '#fff' : 'rgba(255,255,255,0.7)'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        }
      </svg>
    </button>
  )
}

export default function Gallery() {
  const [cur, setCur]       = useState(0)
  const [dir, setDir]       = useState('next')
  const [lightbox, setLightbox] = useState(false)
  const n = items.length

  const prev = () => { setDir('prev'); setCur((c) => (c - 1 + n) % n) }
  const next = () => { setDir('next'); setCur((c) => (c + 1) % n) }
  const goTo = (i)  => { setDir(i > cur ? 'next' : 'prev'); setCur(i) }

  const leftIdx  = (cur - 1 + n) % n
  const rightIdx = (cur + 1) % n

  const slideAnim = dir === 'next'
    ? 'galleryInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both'
    : 'galleryInLeft  0.9s cubic-bezier(0.22, 1, 0.36, 1) both'

  return (
    <section id="gallery" className="mob-section" style={{ padding: '100px 0', background: '#050505' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <p style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, marginBottom: 14 }}>Portfolio</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff', marginBottom: 20 }}>
          Our Gallery
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
          <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.12)' }} />
          <p style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>Curated Looks</p>
          <div style={{ width: 48, height: 1, background: 'rgba(255,255,255,0.12)' }} />
        </div>
      </div>

      {/* Carousel */}
      <div className="gallery-carousel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: '0 40px' }}>
        <ArrowBtn onClick={prev} dir="left" />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, overflow: 'hidden' }}>
          {/* Left blurred card */}
          <div
            className="gallery-side"
            onClick={prev}
            style={{ width: 200, height: 280, flexShrink: 0, overflow: 'hidden', borderRadius: 2 }}
          >
            <img
              key={`left-${leftIdx}`}
              src={items[leftIdx].img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', animation: 'galleryInLeft 0.9s ease both' }}
            />
          </div>

          {/* Center card — click to open full gallery */}
          <div
            className="gallery-center"
            onClick={() => setLightbox(true)}
            style={{ position: 'relative', width: 340, height: 460, flexShrink: 0, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.8)', borderRadius: 2, cursor: 'pointer' }}
          >
            <img
              key={`img-${cur}`}
              src={items[cur].img}
              alt={items[cur].label}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', animation: slideAnim }}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', padding: '40px 24px 24px' }}>
              <p
                key={`label-${cur}`}
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: '#fff', marginBottom: 6, animation: 'galleryLabelIn 0.9s ease 0.35s both' }}
              >
                {items[cur].label}
              </p>
              <p
                key={`sub-${cur}`}
                style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, animation: 'galleryLabelIn 0.9s ease 0.5s both' }}
              >
                {items[cur].sub}
              </p>
            </div>
            {/* View all hint */}
            <div
              className="gallery-view-all"
              style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', padding: '6px 12px', backdropFilter: 'blur(4px)', transition: 'background 0.25s, border-color 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.borderColor = ACCENT }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
            >
              <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', fontWeight: 400 }}>View All</p>
            </div>
          </div>

          {/* Right blurred card */}
          <div
            className="gallery-side"
            onClick={next}
            style={{ width: 200, height: 280, flexShrink: 0, overflow: 'hidden', borderRadius: 2 }}
          >
            <img
              key={`right-${rightIdx}`}
              src={items[rightIdx].img}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', animation: 'galleryInRight 0.9s ease both' }}
            />
          </div>
        </div>

        <ArrowBtn onClick={next} dir="right" />
      </div>

      {/* Lightbox */}
      {lightbox && <Lightbox startIndex={cur} onClose={() => setLightbox(false)} />}

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            style={{
              height: 3,
              width: i === cur ? 28 : 8,
              background: i === cur ? ACCENT : 'rgba(255,255,255,0.2)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s', padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
