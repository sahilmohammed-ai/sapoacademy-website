import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function pickRandom(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export function VideoTile({ src, onClick }) {
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

export function PhotoTile({ src, onClick }) {
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

export function MediaTile({ item, onClick }) {
  return item.type === 'video'
    ? <VideoTile src={item.src} onClick={onClick} />
    : <PhotoTile src={item.src} onClick={onClick} />
}

// Shared lightbox: pass the full item list plus the currently-open { ...item, index } or null
export function MediaLightbox({ items, lightbox, onClose, onNav }) {
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, onClose])

  return (
    <AnimatePresence>
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-sapo-dark/96 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-14 h-14 bg-sapo-dark/80 border border-sapo-cream/30 flex items-center justify-center text-sapo-cream hover:bg-sapo-gold hover:border-sapo-gold hover:text-sapo-dark transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNav(-1) }}
            aria-label="Previous"
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
            className="flex items-center justify-center"
          >
            {lightbox.type === 'video' ? (
              <video
                src={lightbox.src}
                className="max-h-[88vh] max-w-[90vw] object-contain"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <img
                src={lightbox.src}
                alt="Sapo Tennis Academy"
                className="max-h-[88vh] max-w-[90vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>

          <button
            onClick={(e) => { e.stopPropagation(); onNav(1) }}
            aria-label="Next"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/60 hover:text-sapo-cream hover:border-sapo-cream/40 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sapo-cream/30 text-xs font-sans tracking-widest">
            {lightbox.index + 1} / {items.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function MediaGallery({ items }) {
  const [lightbox, setLightbox] = useState(null)

  const open = (item, index) => setLightbox({ ...item, index })
  const close = () => setLightbox(null)
  const nav = (dir) => {
    const next = (lightbox.index + dir + items.length) % items.length
    setLightbox({ ...items[next], index: next })
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.035, 0.3) }}
            viewport={{ once: true }}
          >
            <MediaTile item={item} onClick={() => open(item, i)} />
          </motion.div>
        ))}
      </div>

      <MediaLightbox items={items} lightbox={lightbox} onClose={close} onNav={nav} />
    </>
  )
}
