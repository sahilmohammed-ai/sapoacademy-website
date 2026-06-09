import { motion } from 'framer-motion'

export default function SummerCampPromo() {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 bg-sapo-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1a3a2a66_0%,_transparent_70%)]" />

      <motion.a
        href="#summer-camp"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto block"
      >
        <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-8 sm:p-12 border border-sapo-gold/50 bg-gradient-to-br from-sapo-gold/15 via-sapo-gold/5 to-transparent backdrop-blur-sm hover:border-sapo-gold/70 transition-all duration-300 cursor-pointer">
          <div className="text-sapo-gold shrink-0">
            <svg className="w-12 h-12 sm:w-14 sm:h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m6.364 1.636l-.707-.707M21 12h-1m1.364 6.364l-.707.707M12 21v1m-6.364-1.636l.707.707M3 12h1M3.636 5.636l.707.707M7 12a5 5 0 1110 0 5 5 0 01-10 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <p className="text-sapo-gold text-xs font-bold uppercase tracking-wider mb-2">Limited Spots Available</p>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-sapo-cream mb-3 leading-tight">
              STA Summer Camp 2026
            </h3>
            <p className="text-sapo-cream/70 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              Join us at Shadow Creek High School this summer. Pick the number of days that fits your schedule and secure your spot now.
            </p>
          </div>
          <div className="shrink-0">
            <div className="w-10 h-10 rounded-full bg-sapo-gold/20 border border-sapo-gold/50 flex items-center justify-center group-hover:bg-sapo-gold/30 transition-colors duration-300">
              <svg className="w-5 h-5 text-sapo-gold group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </motion.a>
    </section>
  )
}
