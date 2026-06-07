import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MediaTile, MediaLightbox } from './MediaGallery'

const PER_PAGE = 4

const slideVariants = {
  enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function WeekGallery({ items }) {
  const [page, setPage] = useState(0)
  const [dir, setDir] = useState(1)
  const [lightbox, setLightbox] = useState(null)

  const totalPages = Math.ceil(items.length / PER_PAGE)
  const pageItems = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  const prev = () => { setDir(-1); setPage((p) => (p - 1 + totalPages) % totalPages) }
  const next = () => { setDir(1); setPage((p) => (p + 1) % totalPages) }

  const open = (item, indexInPage) => setLightbox({ ...item, index: page * PER_PAGE + indexInPage })
  const close = () => setLightbox(null)
  const navLightbox = (d) => {
    const nextIndex = (lightbox.index + d + items.length) % items.length
    setLightbox({ ...items[nextIndex], index: nextIndex })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={dir} mode="wait">
          <motion.div
            key={page}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {pageItems.map((item, i) => (
              <MediaTile key={`${page}-${i}`} item={item} onClick={() => open(item, i)} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photos"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-sapo-dark/80 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/70 hover:text-sapo-cream hover:border-sapo-cream/50 transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next photos"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-sapo-dark/80 border border-sapo-cream/20 flex items-center justify-center text-sapo-cream/70 hover:text-sapo-cream hover:border-sapo-cream/50 transition-all duration-200 z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > page ? 1 : -1); setPage(i) }}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  page === i ? 'bg-sapo-gold w-4' : 'bg-sapo-cream/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </>
      )}

      <MediaLightbox items={items} lightbox={lightbox} onClose={close} onNav={navLightbox} />
    </div>
  )
}
