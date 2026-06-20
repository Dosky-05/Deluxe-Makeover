import { useState } from 'react'

const q1 = `She made me feel like the most beautiful version of myself on my wedding day.
The makeup lasted all night, through tears of joy and dancing. I could not have asked for more.
Absolutely stunning work.`

const q2 = `I booked for a gala and received so many compliments. The clean glam look she
created was exactly what I envisioned — refined, luminous, and totally me. Will be booking
again for every event.`

const q3 = `My skin has never photographed so beautifully. She truly understands how to work
with your natural features rather than covering them. The skin-focused approach left me glowing.`

const q4 = `From the trial to the wedding day, the experience was seamless and luxurious.
She listened to every detail and delivered beyond my expectations. My bridal look was
everything I dreamed of.`

const testimonials = [
  { id: 1, name: 'Sophia M.', role: 'Bride', quote: q1, rating: 5 },
  { id: 2, name: 'Aaliyah R.', role: 'Event Client', quote: q2, rating: 5 },
  { id: 3, name: 'Destiny T.', role: 'Photoshoot Client', quote: q3, rating: 5 },
  { id: 4, name: 'Jasmine L.', role: 'Bride', quote: q4, rating: 5 },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1))
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1))

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-28 bg-[#080808] relative overflow-hidden">
      <div
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#C9A84C]/5 text-[10rem] font-light whitespace-nowrap pointer-events-none select-none"
      >
        Reviews
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-4 font-light">
            Client Love
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C9A84C]/50" />
            <div className="w-1 h-1 bg-[#C9A84C] rotate-45" />
            <div className="h-px w-12 bg-[#C9A84C]/50" />
          </div>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#e8e0d0] text-4xl md:text-5xl font-light"
          >
            What They&apos;re <span className="text-[#C9A84C] italic">Saying</span>
          </h2>
        </div>

        <div className="border border-[#C9A84C]/20 p-10 md:p-14 relative">
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#C9A84C]/60" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#C9A84C]/60" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#C9A84C]/60" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#C9A84C]/60" />

          <div
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#C9A84C]/30 text-[6rem] leading-none mb-2 -mt-6 select-none"
          >
            &ldquo;
          </div>

          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-[#e8e0d0]/80 text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
          >
            {t.quote}
          </p>

          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <div>
              <p className="text-[#e8e0d0] text-sm font-medium tracking-[0.1em]">{t.name}</p>
              <p className="text-[#C9A84C]/70 text-xs tracking-[0.2em] uppercase">{t.role}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            className="flex items-center gap-2 text-[#C9A84C]/60 hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M19 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Prev
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 ${
                  i === active ? 'w-6 h-1 bg-[#C9A84C]' : 'w-2 h-1 bg-[#C9A84C]/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex items-center gap-2 text-[#C9A84C]/60 hover:text-[#C9A84C] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
          >
            Next
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M1 5h18M15 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
