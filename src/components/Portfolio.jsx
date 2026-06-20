import { useState } from 'react'

const ACCENT = '#E8891A'

const items = [
  { label: 'The Bridal Glow', sub: 'Bridal Makeup', bg: 'linear-gradient(135deg,#2a1408 0%,#140a04 100%)' },
  { label: 'Clean Glam', sub: 'Evening Look', bg: 'linear-gradient(135deg,#0a1020 0%,#050810 100%)' },
  { label: 'Neutral Elegance', sub: 'Neutral Glam', bg: 'linear-gradient(135deg,#1e1208 0%,#0f0a06 100%)' },
  { label: 'Skin Focus', sub: 'Natural Look', bg: 'linear-gradient(135deg,#0a180e 0%,#050f08 100%)' },
  { label: 'Bold & Beautiful', sub: 'Editorial', bg: 'linear-gradient(135deg,#1a0818 0%,#0d040c 100%)' },
  { label: 'Golden Hour', sub: 'Special Occasion', bg: 'linear-gradient(135deg,#241408 0%,#120a04 100%)' },
]

export default function Portfolio() {
  const [cur, setCur] = useState(0)
  const n = items.length
  const prev = () => setCur((c) => (c - 1 + n) % n)
  const next = () => setCur((c) => (c + 1) % n)
  const leftIdx = (cur - 1 + n) % n
  const rightIdx = (cur + 1) % n

  const arrowBtn = (onClick, children) => (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,255,255,0.25)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
    >
      {children}
    </button>
  )

  return (
    <section id="portfolio" style={{ padding: '100px 0', background: '#050505' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff', marginBottom: 12 }}>
          Our Portfolio
        </h2>
        <p style={{ fontSize: 11, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>
          Curated Looks
        </p>
      </div>

      {/* Carousel */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '0 80px' }}>
        {/* Left arrow */}
        <div style={{ position: 'absolute', left: 20 }}>
          {arrowBtn(prev,
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7l5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </div>

        {/* Side card left */}
        <div
          className="hidden sm:flex"
          style={{ width: 200, height: 280, flexShrink: 0, background: items[leftIdx].bg, filter: 'blur(3px)', opacity: 0.4, alignItems: 'flex-end', padding: 16 }}
        />

        {/* Center card */}
        <div style={{ position: 'relative', width: 340, height: 460, flexShrink: 0, background: items[cur].bg, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.8)' }}>
          {/* Decorative grain */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />
          {/* Content overlay */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)', padding: '40px 24px 24px' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: '#fff', marginBottom: 6 }}>
              {items[cur].label}
            </p>
            <p style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500 }}>
              {items[cur].sub}
            </p>
          </div>
          {/* Placeholder text */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-60%)', textAlign: 'center', opacity: 0.15 }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Photo</p>
          </div>
        </div>

        {/* Side card right */}
        <div
          className="hidden sm:flex"
          style={{ width: 200, height: 280, flexShrink: 0, background: items[rightIdx].bg, filter: 'blur(3px)', opacity: 0.4, alignItems: 'flex-end', padding: 16 }}
        />

        {/* Right arrow */}
        <div style={{ position: 'absolute', right: 20 }}>
          {arrowBtn(next,
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCur(i)}
            style={{
              height: 3,
              width: i === cur ? 28 : 8,
              background: i === cur ? ACCENT : 'rgba(255,255,255,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
