import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

// Full pool — add new files here as they're dropped into /public/media/
const allMedia = [
  { type: 'photo', src: '/media/IMG_9266.JPG' },
  { type: 'photo', src: '/media/IMG_9267.JPG' },
  { type: 'photo', src: '/media/IMG_9268.JPG' },
  { type: 'photo', src: '/media/IMG_9269.JPG' },
  { type: 'photo', src: '/media/IMG_9270.JPG' },
  { type: 'photo', src: '/media/IMG_9271.JPG' },
  { type: 'photo', src: '/media/IMG_9272.JPG' },
  { type: 'photo', src: '/media/IMG_9273.JPG' },
  { type: 'photo', src: '/media/IMG_9274.JPG' },
  { type: 'photo', src: '/media/IMG_9579.JPG' },
  { type: 'photo', src: '/media/IMG_9580.JPG' },
  { type: 'photo', src: '/media/IMG_9581.JPG' },
  { type: 'photo', src: '/media/IMG_9582.JPG' },
  { type: 'photo', src: '/media/IMG_9622.JPG' },
  { type: 'photo', src: '/media/IMG_9624.JPG' },
  { type: 'photo', src: '/media/IMG_9625.JPG' },
  { type: 'photo', src: '/media/IMG_0196.JPG' },
  { type: 'photo', src: '/media/IMG_0197.JPG' },
  { type: 'photo', src: '/media/IMG_0198.JPG' },
  { type: 'video', src: '/media/IMG_9416.MP4' },
  { type: 'video', src: '/media/IMG_9417.MP4' },
  { type: 'video', src: '/media/IMG_9583.MP4' },
  { type: 'video', src: '/media/IMG_9623.MP4' },
  { type: 'video', src: '/media/IMG_0189.MP4' },
  { type: 'video', src: '/media/IMG_0190.MP4' },
  { type: 'video', src: '/media/IMG_0191.MP4' },
  { type: 'video', src: '/media/IMG_0192.MP4' },
  { type: 'video', src: '/media/IMG_0193.MP4' },
  { type: 'video', src: '/media/IMG_0194.MP4' },
  { type: 'video', src: '/media/IMG_0195.MP4' },
  { type: 'video', src: '/media/IMG_0212.MP4' },
  { type: 'video', src: '/media/IMG_0215.MP4' },
  { type: 'video', src: '/media/IMG_0216.MP4' },
  { type: 'video', src: '/media/D82FC7DA-E896-4D62-A9D5-143096740112.MP4' },
  { type: 'photo', src: '/media/IMG_0529.JPG' },
  { type: 'photo', src: '/media/IMG_1352.JPG' },
  { type: 'photo', src: '/media/IMG_2206.JPG' },
  { type: 'photo', src: '/media/IMG_2208.JPG' },
  { type: 'photo', src: '/media/IMG_2210.JPG' },
  { type: 'photo', src: '/media/IMG_2839.JPG' },
  { type: 'photo', src: '/media/IMG_4118.JPG' },
  { type: 'photo', src: '/media/image.JPG' },
  { type: 'photo', src: '/media/Sapo - 2.JPG' },
  { type: 'video', src: '/media/IMG_1283 2.MP4' },
  { type: 'video', src: '/media/IMG_1289 2.MP4' },
  { type: 'video', src: '/media/IMG_1304 2.MP4' },
  { type: 'video', src: '/media/IMG_1309 2.MP4' },
  { type: 'photo', src: '/media/IMG_1323 2.JPG' },
  { type: 'photo', src: '/media/IMG_1341 2.JPG' },
]

function pickRandom16(pool) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 16)
}

function VideoTile({ src, onClick }) {
  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group bg-sapo-green/30 aspect-square"
      onClick={onClick}
    >
      <video
        src={`${src}#t=0.001`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        muted
        playsInline
        preload="metadata"
        onMouseEnter={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0 }}
      />
      <div className="absolute inset-0 bg-sapo-dark/20 group-hover:bg-transparent transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-11 h-11 rounded-full bg-sapo-dark/60 border border-sapo-cream/30 flex items-center justify-center">
          <svg className="w-4 h-4 text-sapo-cream ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-sapo-dark/50 to-transparent" />
    </div>
  )
}

function PhotoTile({ src, onClick }) {
  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group aspect-square"
      onClick={onClick}
    >
      <img
        src={src}
        alt="Sapo Tennis Academy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-sapo-dark/0 group-hover:bg-sapo-dark/10 transition-colors duration-300" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="w-8 h-8 border border-sapo-gold/60 flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-sapo-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { ref, controls } = useScrollAnimation(0.1)
  const [lightbox, setLightbox] = useState(null)
  const mediaItems = useMemo(() => pickRandom16(allMedia), [])

  const open = (item, index) => setLightbox({ ...item, index })
  const close = () => setLightbox(null)
  const nav = (dir) => {
    const next = (lightbox.index + dir + mediaItems.length) % mediaItems.length
    setLightbox({ ...mediaItems[next], index: next })
  }

  return (
    <section id="gallery" className="pt-20 pb-8 lg:py-36 bg-sapo-dark overflow-hidden relative z-10">
      <div className="gold-divider mb-12 lg:mb-24" />

      {/* Header */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="px-4 sm:px-6 max-w-7xl mx-auto mb-14"
      >
        <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-sapo-gold" />
          <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
            On The Court
          </span>
        </motion.div>
        <motion.h2
          variants={staggerItem}
          className="font-display text-4xl md:text-6xl font-black text-sapo-cream leading-tight"
        >
          Life at
          <br />
          <span className="text-gradient-gold">Sapo Academy</span>
        </motion.h2>
      </motion.div>

      {/* Grid gallery */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {mediaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.035, 0.3) }}
              viewport={{ once: true }}
            >
              {item.type === 'video' ? (
                <VideoTile src={item.src} onClick={() => open(item, i)} />
              ) : (
                <PhotoTile src={item.src} onClick={() => open(item, i)} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mt-6 flex items-center gap-3 flex-wrap">
        <div className="w-8 h-px bg-sapo-gold/40 shrink-0" />
        <a
          href="https://www.instagram.com/sapoacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sapo-cream/50 hover:text-sapo-gold transition-colors duration-300 text-sm font-sans min-h-[44px]"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
          </svg>
          <span>Follow @sapoacademy for more</span>
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-sapo-dark/96 flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/60 hover:text-sapo-cream hover:border-sapo-cream/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nav(-1) }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/60 hover:text-sapo-cream hover:border-sapo-cream/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.18 }}
              className="max-w-4xl max-h-[88vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.type === 'video' ? (
                <video
                  src={lightbox.src}
                  className="max-h-[88vh] max-w-full object-contain"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt="Sapo Tennis Academy"
                  className="max-h-[88vh] max-w-full object-contain"
                />
              )}
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); nav(1) }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/60 hover:text-sapo-cream hover:border-sapo-cream/40 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sapo-cream/30 text-xs font-sans tracking-widest">
              {lightbox.index + 1} / {mediaItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
