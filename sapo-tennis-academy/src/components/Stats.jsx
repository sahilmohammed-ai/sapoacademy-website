import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 10, suffix: '+', label: 'Years Coaching' },
  { value: 200, suffix: '+', label: 'Students Trained' },
  { value: 'All', suffix: '', label: 'Skill Levels' },
  { value: 'PTX', suffix: '', label: 'Pearland, TX' },
]

function CountUp({ value, suffix, trigger }) {
  const [display, setDisplay] = useState(typeof value === 'number' ? 0 : value)

  useEffect(() => {
    if (!trigger || typeof value !== 'number') {
      setDisplay(value)
      return
    }
    let start = 0
    const duration = 1500
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [trigger, value])

  return (
    <span>
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="relative py-0">
      <div className="w-full border-t border-sapo-gold/25" />
      <div className="bg-sapo-green py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center md:border-r md:border-sapo-gold/20 last:border-0"
            >
              <span className="font-display text-4xl md:text-6xl font-black text-sapo-gold mb-2 leading-none">
                <CountUp value={stat.value} suffix={stat.suffix} trigger={isInView} />
              </span>
              <span className="text-sapo-cream/60 text-xs font-sans font-medium tracking-[0.2em] uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full border-b border-sapo-gold/25" />
    </section>
  )
}
