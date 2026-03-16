import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const fallbackTestimonials = [
  {
    id: 1,
    quote: "Coach Sapo completely transformed my game. In six months I went from a complete beginner who couldn't rally to playing in my first USTA tournament. His patience and attention to detail are unmatched.",
    name: 'Maria G.',
    level: 'Intermediate Player',
  },
  {
    id: 2,
    quote: "My son has been training with Coach Sapo since he was 9. Now at 14, he's ranked in the top 20 for his age group in Texas. The technical foundation and mental toughness Coach instills are remarkable.",
    name: 'Robert T.',
    level: 'Parent of Competitive Player',
  },
  {
    id: 3,
    quote: "I started tennis at 45, convinced I was too old to learn. Coach Sapo proved me completely wrong. His beginner program is structured perfectly — challenging enough to keep you progressing, fun enough to keep you coming back.",
    name: 'Linda K.',
    level: 'Adult Beginner',
  },
]

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials)
  const { ref, controls } = useScrollAnimation(0.1)

  useEffect(() => {
    if (!supabase) return
    supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data && data.length > 0) setTestimonials(data)
      })
  }, [])

  return (
    <section className="py-20 lg:py-36 px-4 sm:px-6 bg-sapo-green/10 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/court-wide.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gold-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sapo-gold" />
            <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl md:text-6xl font-black text-sapo-cream leading-tight"
          >
            What Our
            <br />
            <span className="text-gradient-gold">Players Say</span>
          </motion.h2>
        </motion.div>

        {/* Cards — horizontal scroll on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:overflow-visible md:grid md:grid-cols-3 pb-4 md:pb-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="w-full md:w-auto bg-sapo-dark/80 border border-sapo-cream/10 hover:border-sapo-gold/30 p-6 sm:p-8 flex flex-col transition-all duration-300"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-sapo-gold fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <span className="font-display text-5xl text-sapo-gold/30 font-black leading-none mb-2">"</span>

              {/* Quote */}
              <p className="text-sapo-cream/70 font-sans text-sm leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t border-sapo-cream/10 pt-6">
                <p className="text-sapo-cream font-sans font-semibold text-sm">{t.name}</p>
                <p className="text-sapo-gold/70 text-xs tracking-wider uppercase font-sans mt-1">{t.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
