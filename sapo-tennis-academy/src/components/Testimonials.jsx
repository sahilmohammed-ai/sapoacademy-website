import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const fallbackTestimonials = [
  {
    id: 1,
    quote: "My children have been training with Coach Mark for over 5 years now, and I couldn't be happier with the experience. He is incredibly dedicated to his students and takes the time to ensure they learn proper technique while having fun. His positive attitude and engaging teaching style make every session enjoyable, and my kids look forward to practice every week.",
    name: 'Divya Chundru',
    level: 'Parent',
  },
  {
    id: 2,
    quote: "Excellent coaching and prep for tennis team and tournaments! Both kids love the lessons and as a parent I can see their progress and growth. Coach Mark tailors his coaching to each child's potential and learning style. He knows when to push his students and how to push them to the next level. Can't recommend him enough!",
    name: 'Olivia Sieffers',
    level: 'Parent',
  },
  {
    id: 3,
    quote: "Coach Mark Sapo is an excellent coach! I took his lessons as a Sophomore at Shadow Creek High School. He taught me the foundation and basics of Tennis in an unforgettable way. I highly recommend and trust his expertise.",
    name: 'Mj Tolentino',
    level: 'High School Player',
  },
  {
    id: 4,
    quote: "As a beginner his lessons are well put together to have fun and strict enough for me to learn. I did see a drastic improvement on my tennis skills and will definitely recommend my friends to join. I highly recommend it for all skill levels too.",
    name: 'Erik Esparza',
    level: 'Adult Beginner',
  },
  {
    id: 5,
    quote: "We love Coach Mark! He not only focuses on improving skills and technique with my 9 year old son but also makes the sessions fun and engaging. My son always looks forward to practice. We truly appreciate the coach's patience and ability to connect.",
    name: 'Sonal Parikh',
    level: 'Parent',
  },
  {
    id: 6,
    quote: "Sapo Tennis Academy does an excellent job of instilling good technique into beginners, providing practice opportunities, and refining players' game! I highly recommend to anyone looking to improve or start their tennis journey!",
    name: 'Michelle Truong',
    level: 'High School Player',
  },
  {
    id: 7,
    quote: "Mark's a great tennis coach! He's engaged during lessons and really cares about his students. My son has learned a lot and looks forward to practice.",
    name: 'Ram Parikh',
    level: 'Parent',
  },
]

function shuffleAndPick(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(() => shuffleAndPick(fallbackTestimonials, 3))
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
    <section className="py-20 lg:py-36 px-4 sm:px-6 bg-sapo-green/10 relative overflow-hidden z-20">
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

        {/* Cards — horizontal scroll */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.1, 0.4), ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[calc(33.333%-1rem)] snap-start bg-sapo-dark/80 border border-sapo-cream/10 hover:border-sapo-gold/30 p-6 sm:p-8 flex flex-col transition-all duration-300"
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
