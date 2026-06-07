import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'
import MediaGallery, { pickRandom } from './MediaGallery'

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
  { type: 'video', src: '/media/IMG_0195.MP4' },
  { type: 'video', src: '/media/IMG_0212.MP4' },
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
  { type: 'video', src: '/media/IMG_0556.mp4' },
  { type: 'video', src: '/media/IMG_0559.mp4' },
  { type: 'video', src: '/media/IMG_0559_2.mp4' },
  { type: 'video', src: '/media/IMG_1283 2.MP4' },
  { type: 'video', src: '/media/IMG_1304 2.MP4' },
  { type: 'photo', src: '/media/IMG_1323 2.JPG' },
  { type: 'photo', src: '/media/IMG_1341 2.JPG' },
]

export default function Gallery() {
  const { ref, controls } = useScrollAnimation(0.1)
  const mediaItems = useMemo(() => pickRandom(allMedia, 16), [])

  return (
    <section id="gallery" className="pb-8 lg:pb-36 bg-sapo-dark overflow-hidden relative z-10">
      <div className="gold-divider mb-12 lg:mb-16" />

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
        <MediaGallery items={mediaItems} />
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
    </section>
  )
}
