import { useState, useEffect, useRef } from 'react'

const ACCENT = '#E8891A'

const pages = [
  [
    { quote: 'She made me feel like royalty on my wedding day. The look was absolutely flawless from morning to midnight.', author: 'SOPHIA M.', role: 'Bride' },
    { quote: 'My photographer said it was the best makeup she had seen for a shoot. My skin has never looked more radiant.', author: 'DESTINY T.', role: 'Photoshoot Client' },
    { quote: 'I got so many compliments all night. Clean, refined, and exactly my vision. I will book for every event.', author: 'AALIYAH R.', role: 'Event Client' },
  ],
  [
    { quote: 'From the trial to the big day every detail was perfect. She truly listened and delivered beyond my expectations.', author: 'JASMINE L.', role: 'Bride' },
    { quote: 'The neutral glam she created was so elegant. My family kept asking who did my makeup all night long.', author: 'NICOLE B.', role: 'Special Occasion' },
    { quote: 'Professional, talented, and so warm to work with. I feel like the most beautiful version of myself.', author: 'MORGAN C.', role: 'Client' },
  ],
]

const Stars = () => (
  <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={ACCENT}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

export default function Reviews() {
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = (i) => {
    setPage(i)
    // reset the timer when user manually navigates
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setPage(p => (p + 1) % pages.length)
    }, 4000)
  }

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setPage(p => (p + 1) % pages.length)
      }, 4000)
    }
    return () => clearInterval(timerRef.current)
  }, [paused])

  return (
    <section
      id="reviews"
      className="mob-section"
      style={{ padding: '100px 0', background: '#050505' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mob-px" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, marginBottom: 14 }}>Testimonials</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            Client Reviews
          </h2>
          <div className="section-line" />
        </div>

        {/* Cards */}
        <div className="mob-stack tab-reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {pages[page].map((r, i) => (
            <div
              key={`${page}-${i}`}
              style={{
                position: 'relative',
                padding: 32,
                border: '1px solid #1c1c1c',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 240,
                overflow: 'hidden',
                animation: 'slideInLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
                animationDelay: `${i * 600}ms`,
              }}
            >
              {/* Decorative background quote mark */}
              <span style={{ position: 'absolute', top: -10, right: 16, fontFamily: "'Cormorant Garamond', serif", fontSize: '8rem', color: ACCENT, opacity: 0.06, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>&ldquo;</span>

              <div>
                <Stars />
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.7 }}>
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>
              <p style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', marginTop: 28, fontWeight: 400 }}>
                &mdash; {r.author}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 36 }}>
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              style={{
                height: 3,
                width: i === page ? 28 : 8,
                background: i === page ? ACCENT : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Auto-scroll progress bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <div style={{ width: 120, height: 1, background: 'rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div
              key={`${page}-${paused}`}
              style={{
                position: 'absolute',
                left: 0, top: 0, height: '100%',
                background: ACCENT,
                width: paused ? '0%' : '100%',
                transition: paused ? 'none' : 'width 4s linear',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
