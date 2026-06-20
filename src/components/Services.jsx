const ACCENT = '#E8891A'


const BASE = 'https://wa.me/15138375127?text='

const services = [
  {
    title: 'Bridal Makeup',
    desc: 'Effortless Elegance for your Wedding Day, Every bride deserves a makeup look that feels as natural and timeless as her love story.',
    img: '/BridalGlow.jpg',
    pos: 'center 20%',
    wa: BASE + encodeURIComponent("Hi! 👰🏽 I'm interested in your Bridal Makeup service. I'd love to discuss my wedding look, date, and details. Could we connect?"),
  },
  {
    title: 'Clean Glam',
    desc: 'Fresh, Polished Looks That Emphasize Your Natural Glow.',
    img: '/Cleanglam.jpg',
    pos: 'center 20%',
    wa: BASE + encodeURIComponent("Hi! ✨ I'm interested in your Clean Glam service. I'd love a fresh, polished look and would like to know more about availability and pricing."),
  },
  {
    title: 'Neutral Glam',
    desc: 'Balanced, Elegant Makeup That Enhances Your Facial Features.',
    img: '/NaturalElegance.jpg',
    pos: 'center 20%',
    wa: BASE + encodeURIComponent("Hi! 🤎 I'm interested in your Neutral Glam service. I love a balanced, elegant look and would love to book a session. Can we chat?"),
  },
  {
    title: 'Skin-Focused',
    desc: 'Let your skin be the star. Flawless prep and natural finish minimal makeup, maximum impact.',
    img: '/SkinFocus.jpg',
    pos: 'center 20%',
    wa: BASE + encodeURIComponent("Hi! 🌿 I'm interested in your Skin-Focused makeup service. I'd love a natural, flawless finish. Could we discuss what would work best for me?"),
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17.3l-6.2 4 2.4-7.4L2 9.4h7.6z" />
  </svg>
)

export default function Services() {
  return (
    <section id="services" className="mob-section" style={{ padding: '100px 0', background: '#050505' }}>
      <div className="mob-px" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: ACCENT, fontWeight: 500, marginBottom: 14 }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.2rem,5vw,3.8rem)', color: '#fff' }}>
            Our Services
          </h2>
          <div className="section-line" />
        </div>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card"
              style={{ position: 'relative', height: 420, background: '#0a0a0a', overflow: 'hidden', cursor: 'default', minWidth: 0 }}
            >
              {/* Background image */}
              <img
                src={s.img}
                alt=""
                className="service-img"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: s.pos }}
              />
              {/* Texture overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
              {/* Bottom gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 55%)' }} />

              {/* Content */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 28px' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <StarIcon />
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.6rem', color: '#fff', marginBottom: 6 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 300, marginBottom: 14, lineHeight: 1.6 }}>
                  {s.desc}
                </p>
                <a
                  href={s.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="enquire-btn"
                >
                  Click to Enquire
                  <span className="enquire-arrow">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
