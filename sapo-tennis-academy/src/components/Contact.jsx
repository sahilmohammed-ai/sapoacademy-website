import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const contactItems = [
  {
    label: 'Call or Text',
    value: '832-339-0545',
    sub: 'Reach Coach Mark directly',
    href: 'tel:8323390545',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@sapoacademy',
    sub: 'Follow for camps, events, and updates',
    href: 'https://www.instagram.com/sapoacademy',
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: '1947 Kirby Dr, Pearland, TX 77584',
    sub: 'Courts in Pearland, Texas',
    href: 'https://maps.google.com/?q=1947+Kirby+Dr,+Pearland,+TX+77584',
    external: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const { ref, controls } = useScrollAnimation(0.1)

  return (
    <section id="contact" className="relative py-20 lg:py-36 overflow-hidden">
      {/* Background court image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/court-wide.jpg"
          alt="Tennis court"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-sapo-dark/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-sapo-dark/60 via-transparent to-sapo-dark/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-16"
        >
          <motion.div variants={staggerItem} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-sapo-gold" />
            <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-px bg-sapo-gold" />
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-sapo-cream leading-tight mb-6"
          >
            Ready to
            <br />
            <span className="text-gradient-gold">Start Playing?</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-sapo-cream/55 font-sans text-base leading-relaxed max-w-md mx-auto"
          >
            Reach out directly to Coach Mark to schedule a session or ask any questions.
          </motion.p>
        </motion.div>

        {/* Contact items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactItems.map((item) => (
            <motion.a
              key={item.label}
              variants={staggerItem}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col items-center text-center p-6 sm:p-8 min-h-[44px] border border-sapo-cream/10 bg-sapo-dark/60 hover:border-sapo-gold/50 hover:bg-sapo-dark/80 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-sapo-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-sapo-gold text-[10px] tracking-[0.25em] uppercase font-sans font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-sapo-cream font-sans font-medium text-sm mb-1">
                {item.value}
              </p>
              <p className="text-sapo-cream/40 font-sans text-xs">
                {item.sub}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Book now nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <a
            href="tel:8323390545"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 min-h-[44px] bg-sapo-gold text-sapo-dark font-sans font-semibold text-sm tracking-widest uppercase hover:bg-sapo-cream transition-all duration-300 group"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call 832-339-0545
          </a>
        </motion.div>

      </div>
    </section>
  )
}
