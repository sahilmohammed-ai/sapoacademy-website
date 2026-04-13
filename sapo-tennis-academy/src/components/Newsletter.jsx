import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const currentPost = {
  title: 'SCHS Tennis Banquet',
  date: 'April 11, 2026',
  caption: "Sapo Tennis Academy is proud to celebrate our players' tennis journies at the 2026 SCHS Tennis Banquet! Also, shoutout to our seniors! We are so proud of all your dedication and wish y'all good luck in your own endeavors!!",
  images: [
    '/images/newsletter/banquet-1.jpg',
    '/images/newsletter/banquet-2.jpg',
    '/images/newsletter/banquet-3.jpg',
    '/images/newsletter/banquet-4.jpg',
  ],
}

const pastPosts = [
  {
    image: '/images/newsletter/regionals.jpeg',
    date: 'April 2, 2026',
    title: 'Regionals Bound',
    caption: "Congrats to Val and Cam for making it to regionals!! We are extremely proud of y'all and wish you the best of luck!",
  },
  {
    image: '/images/newsletter/jv-districts.JPG',
    date: 'April 3, 2026',
    title: 'District Medalists',
    caption: "Congrats to our fellow students who placed at freshman and JV districts!! We are very proud and can't wait to keep supporting you!",
  },
]

function ScrollablePost({ post }) {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const total = post.images.length

  const prev = () => { setDir(-1); setCurrent((c) => (c - 2 + total) % total) }
  const next = () => { setDir(1);  setCurrent((c) => (c + 2) % total) }

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  return (
    <div className="group relative bg-sapo-dark border border-sapo-gold/10 hover:border-sapo-gold/30 transition-colors duration-500 overflow-hidden">

      {/* Two photos side by side, each same size as original single photo */}
      <div className="relative overflow-hidden aspect-[8/3]">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 flex gap-1"
          >
            <img src={post.images[current]}           alt={post.title} className="w-1/2 h-full object-cover" />
            <img src={post.images[(current+1) % total]} alt={post.title} className="w-1/2 h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sapo-dark/60 via-transparent to-transparent pointer-events-none z-10" />

        {/* Date badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-block px-3 py-1 bg-sapo-dark/80 backdrop-blur-sm border border-sapo-gold/40 text-sapo-gold text-[10px] font-sans tracking-[0.25em] uppercase">
            {post.date}
          </span>
        </div>

        {/* Dot indicators — one per pair */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {Array.from({ length: Math.ceil(total / 2) }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i * 2 > current ? 1 : -1); setCurrent(i * 2) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === i * 2 ? 'bg-sapo-gold w-4' : 'bg-sapo-cream/40 w-1.5'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-sapo-dark/60 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/70 hover:text-sapo-cream hover:border-sapo-cream/50 transition-all duration-200 z-20"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-sapo-dark/60 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/70 hover:text-sapo-cream hover:border-sapo-cream/50 transition-all duration-200 z-20"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-4 right-4 z-20 text-sapo-cream/50 text-[10px] font-sans tracking-widest">
          {current + 1}–{(current + 1) % total + 1} / {total}
        </div>
      </div>

      {/* Text content */}
      <div className="p-6 pt-5 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-5 h-px bg-sapo-gold/60" />
          <h3 className="font-display text-xl font-black text-sapo-cream tracking-wide uppercase">
            {post.title}
          </h3>
          <div className="w-5 h-px bg-sapo-gold/60" />
        </div>
        {post.caption && (
          <p className="font-sans text-sapo-cream/65 text-sm leading-relaxed">
            {post.caption}
          </p>
        )}
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-sapo-gold group-hover:w-full transition-all duration-500" />
    </div>
  )
}

export default function Newsletter() {
  const { ref, controls } = useScrollAnimation(0.1)
  const [showArchive, setShowArchive] = useState(false)

  return (
    <section id="updates" className="pt-20 pb-16 bg-sapo-dark relative">
      <div className="gold-divider mb-12 lg:mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#1a3a2a33_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

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
              Student Spotlight
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl md:text-6xl font-black text-sapo-cream leading-tight"
          >
            Academy
            <br />
            <span className="text-gradient-gold">Updates</span>
          </motion.h2>
        </motion.div>

        {/* Current post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="w-full"
        >
          <ScrollablePost post={currentPost} />
        </motion.div>

        {/* See Past Updates toggle */}
        <div className="mt-12">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-3 px-6 py-3 border border-sapo-gold/40 text-sapo-gold hover:bg-sapo-gold hover:text-sapo-dark transition-all duration-300 group"
          >
            <span className="text-xs font-sans font-medium tracking-[0.25em] uppercase">
              {showArchive ? 'Hide Past Updates' : 'See Past Updates'}
            </span>
            <motion.svg
              animate={{ rotate: showArchive ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {showArchive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  {pastPosts.map((post, i) => (
                    <motion.article
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group relative bg-sapo-dark border border-sapo-gold/10 hover:border-sapo-gold/20 transition-colors duration-500 overflow-hidden opacity-70 hover:opacity-100"
                    >
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sapo-dark via-sapo-dark/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-sapo-dark/80 backdrop-blur-sm border border-sapo-gold/30 text-sapo-gold/70 text-[10px] font-sans tracking-[0.25em] uppercase">
                            {post.date}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 pt-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-5 h-px bg-sapo-gold/40" />
                          <h3 className="font-display text-xl font-black text-sapo-cream/70 tracking-wide uppercase">
                            {post.title}
                          </h3>
                        </div>
                        <p className="font-sans text-sapo-cream/50 text-sm leading-relaxed">
                          {post.caption}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-px bg-sapo-gold/50 group-hover:w-full transition-all duration-500" />
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
