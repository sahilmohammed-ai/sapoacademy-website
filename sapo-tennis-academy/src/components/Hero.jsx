import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const headlineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
}

const wordVariant = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  }),
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden grain-overlay"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="/images/hero-court.jpg"
          alt="Tennis court"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-sapo-dark/80 via-sapo-dark/60 to-sapo-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-sapo-dark/70 via-transparent to-transparent" />

      {/* Mesh green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1a3a2a55_0%,_transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-sapo-gold" />
          <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
            Pearland, Texas
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={wordVariant}
              className="font-display text-[clamp(2.8rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-sapo-cream"
            >
              TRAIN LIKE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={wordVariant}
              className="font-display text-[clamp(2.8rem,10vw,9rem)] font-black leading-[0.9] tracking-tight text-gradient-gold"
            >
              A CHAMPION
            </motion.h1>
          </div>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          custom={0.9}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-sapo-cream/70 text-lg md:text-xl font-sans font-light max-w-xl leading-relaxed mb-12"
        >
          Expert tennis coaching for all levels. From your very first serve to competitive tournament play.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={1.1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 sm:w-auto"
        >
          <a
            href="#programs"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] w-full sm:w-auto bg-sapo-gold text-sapo-dark font-sans font-semibold text-sm tracking-widest uppercase hover:bg-sapo-cream transition-all duration-300 group"
          >
            Explore Programs
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] w-full sm:w-auto border border-sapo-cream/40 text-sapo-cream font-sans font-medium text-sm tracking-widest uppercase hover:border-sapo-cream hover:bg-sapo-cream/10 transition-all duration-300"
          >
            Meet the Coach
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sapo-cream/40 text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-sapo-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
