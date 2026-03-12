import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const plans = [
  {
    id: 1,
    label: '1 Private Lesson',
    price: '$50',
    description: 'A great way to get started or focus on a specific part of your game. One dedicated hour with Coach Mark.',
    cta: 'Book Now',
    link: 'https://buy.stripe.com/7sY7sMfzaguHfpk6EJ0co02',
    badge: null,
    featured: false,
  },
  {
    id: 2,
    label: '5 Private Lessons',
    price: '$225',
    description: 'Build real momentum. Five sessions let Coach Mark dial in your technique and start seeing consistent improvement.',
    cta: 'Book Now',
    link: 'https://buy.stripe.com/dRm3cw2MofqD90W9QV0co00',
    badge: 'Most Popular',
    featured: true,
  },
  {
    id: 3,
    label: '10 Private Lessons',
    price: '$400',
    description: 'The full commitment. Ten sessions to transform your game, build habits, and take your play to the next level.',
    cta: 'Book Now',
    link: 'https://buy.stripe.com/14A14o1Ik1zNelgaUZ0co03',
    badge: 'Best Value',
    featured: false,
  },
]

export default function Programs() {
  const { ref, controls } = useScrollAnimation()

  return (
    <section id="programs" className="py-28 lg:py-36 px-6 bg-sapo-dark">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sapo-gold" />
            <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
              Private Lessons
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-sapo-cream leading-tight"
          >
            Simple,
            <br />
            <span className="text-gradient-gold">Transparent Pricing</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-sapo-cream/50 font-sans text-base mt-6 max-w-lg leading-relaxed"
          >
            All lessons are one-on-one with Coach Mark. Pick the package that fits your schedule and goals.
          </motion.p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col p-8 border transition-all duration-300 group ${
                plan.featured
                  ? 'border-sapo-gold/50 bg-sapo-green/30 md:scale-105'
                  : 'border-sapo-cream/10 bg-sapo-green/15 hover:border-sapo-gold/40 hover:bg-sapo-green/25'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-8 text-[10px] tracking-widest uppercase font-sans font-semibold px-3 py-1 bg-sapo-gold text-sapo-dark">
                  {plan.badge}
                </span>
              )}

              {/* Label */}
              <p className="text-sapo-cream/50 text-xs tracking-[0.25em] uppercase font-sans font-medium mb-4">
                {plan.label}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display text-6xl font-black text-sapo-gold leading-none">
                  {plan.price}
                </span>
              </div>

              {/* Divider */}
              <div className="gold-divider mb-6" />

              {/* Description */}
              <p className="text-sapo-cream/60 text-sm font-sans leading-relaxed mb-10 flex-grow">
                {plan.description}
              </p>

              {/* CTA */}
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${
                  plan.featured
                    ? 'bg-sapo-gold text-sapo-dark hover:bg-sapo-cream'
                    : 'border border-sapo-gold text-sapo-gold hover:bg-sapo-gold hover:text-sapo-dark'
                }`}
              >
                {plan.cta}
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom image strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 relative h-64 md:h-80 overflow-hidden"
        >
          <img
            src="/images/training-session.jpg"
            alt="Training session"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sapo-dark/80 via-transparent to-sapo-dark/60" />
          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div>
              <p className="text-sapo-gold text-xs tracking-[0.3em] uppercase font-sans mb-3">Every Session</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-sapo-cream max-w-md leading-tight">
                Where discipline meets joy on the court.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
