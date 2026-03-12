import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const highlights = [
  { label: 'Philosophy', detail: 'Discipline, joy, and the long game. Tennis as a life skill.' },
  { label: 'Experience', detail: '10+ years developing players of all ages in Pearland' },
  { label: 'Specialties', detail: 'Junior development, adult beginners, tournament preparation' },
]

export default function About() {
  const { ref, controls } = useScrollAnimation(0.1)

  return (
    <section id="about" className="py-28 lg:py-36 px-6 bg-sapo-dark overflow-hidden">
      <div className="gold-divider mb-24" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main photo */}
            <div className="relative">
              <img
                src="/images/coach-mark.jpg"
                alt="Coach Mark on court"
                className="w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapo-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating group photo inset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -right-6 w-48 md:w-56 border-4 border-sapo-dark shadow-2xl"
            >
              <img
                src="/images/group-team.jpg"
                alt="Sapo Tennis Academy team"
                className="w-full aspect-square object-cover object-center"
              />
            </motion.div>

            {/* Gold accent line */}
            <div className="absolute -left-4 top-12 w-0.5 h-32 bg-sapo-gold/60" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:pl-8"
          >
            {/* Eyebrow */}
            <motion.div variants={staggerItem} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-sapo-gold" />
              <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
                The Coach
              </span>
            </motion.div>

            {/* Decorative quote mark */}
            <motion.div
              variants={staggerItem}
              className="font-display text-[8rem] leading-[0.7] text-sapo-gold/15 font-black select-none mb-2"
            >
              "
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={staggerItem}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-sapo-cream leading-tight mb-6"
            >
              Developing Players,
              <br />
              <span className="text-gradient-gold">One Rally at a Time</span>
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={staggerItem}
              className="text-sapo-cream/65 font-sans text-base leading-relaxed mb-4"
            >
              Coach Mark has been shaping tennis players in the Pearland area for over a decade. His approach goes beyond technique. He believes tennis teaches patience, resilience, and confidence that extend far beyond the baseline.
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="text-sapo-cream/65 font-sans text-base leading-relaxed mb-10"
            >
              Whether you're picking up a racket for the first time or preparing for your next tournament, Coach Mark meets you exactly where you are and builds a clear path forward.
            </motion.p>

            {/* Highlights grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
            >
              {highlights.map((h) => (
                <div key={h.label} className="border-l-2 border-sapo-gold/40 pl-4">
                  <p className="text-sapo-gold text-xs tracking-widest uppercase font-sans font-semibold mb-1">
                    {h.label}
                  </p>
                  <p className="text-sapo-cream/60 text-sm font-sans leading-relaxed">
                    {h.detail}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={staggerItem}
              href="#contact"
              className="inline-flex items-center gap-3 text-sapo-cream font-sans font-medium text-sm tracking-widest uppercase hover:text-sapo-gold transition-colors duration-300 group"
            >
              <span>Start Training</span>
              <div className="w-10 h-px bg-sapo-cream group-hover:bg-sapo-gold group-hover:w-14 transition-all duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
