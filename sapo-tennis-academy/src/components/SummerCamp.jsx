import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'
import WeekGallery from './WeekGallery'

// Camp photos/videos by week, drop new files into /public/media/summer-camp/
// and add a new { label, items } entry here as each week wraps up.
const campWeeks = [
  {
    label: 'Week 1',
    items: [
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1353.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1354.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1355.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1360.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1363.jpeg' },
      { type: 'video', src: '/media/summer-camp/week-1/IMG_1364.MOV' },
      { type: 'video', src: '/media/summer-camp/week-1/IMG_1365.mov' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1366.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1367.jpeg' },
      { type: 'video', src: '/media/summer-camp/week-1/IMG_1368.mov' },
      { type: 'video', src: '/media/summer-camp/week-1/IMG_1369.mov' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1370.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1371.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_1372.jpeg' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_5192.JPEG' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_5193.JPEG' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_5194.JPEG' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_5195.JPEG' },
      { type: 'photo', src: '/media/summer-camp/week-1/IMG_5196.JPEG' },
      { type: 'video', src: '/media/summer-camp/week-1/IMG_5197.MOV' },
    ],
  },
]

const dayPlans = [
  { id: 1, label: '1 Day', link: 'https://buy.stripe.com/5kQ28s72E2DRcd8bZ30co0h' },
  { id: 2, label: '2 Day', link: 'https://buy.stripe.com/aFa9AU4UwfqDcd87IN0co0g' },
  { id: 3, label: '3 Day', link: 'https://buy.stripe.com/00w6oIev65Q35OKd370co0c' },
  { id: 4, label: '4 Day', link: 'https://buy.stripe.com/eVq3cw1Ikdiv5OKaUZ0co0f' },
]

const campInfo = [
  { label: 'Location', value: 'Shadow Creek High School', sub: '11850 Broadway St, Pearland, TX 77584' },
  { label: 'Time', value: '7:45 AM – 9:45 AM', sub: 'Daily, weeks run June through August' },
]

export default function SummerCamp() {
  const { ref, controls } = useScrollAnimation(0.1)

  return (
    <section id="summer-camp" className="pt-20 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 bg-sapo-dark relative overflow-hidden">
      <div className="gold-divider mb-16 lg:mb-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1a3a2a44_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-14"
        >
          <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-sapo-gold" />
            <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
              Summer Camp
            </span>
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-sapo-cream leading-tight"
          >
            2026
            <br />
            <span className="text-gradient-gold">Summer Camp</span>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-sapo-cream/50 font-sans text-base mt-6 max-w-lg leading-relaxed"
          >
            Join us at Shadow Creek High School this summer. Pick the number of days that fits your schedule and reserve your spot.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* Flyer image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <img
              src="/images/summer-camp/2026-summer-camp-flyer.png"
              alt="2026 Sapo Tennis Academy Summer Camp flyer with weekly dates and times"
              className="w-full h-auto border border-sapo-gold/15"
            />
          </motion.div>

          {/* Info + booking */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            {/* Camp details */}
            <div className="flex flex-col gap-6">
              {campInfo.map((info) => (
                <motion.div key={info.label} variants={staggerItem} className="border-l-2 border-sapo-gold/40 pl-4">
                  <p className="text-sapo-gold text-xs tracking-widest uppercase font-sans font-semibold mb-1">
                    {info.label}
                  </p>
                  <p className="text-sapo-cream font-sans font-medium text-base mb-0.5">
                    {info.value}
                  </p>
                  <p className="text-sapo-cream/50 text-sm font-sans leading-relaxed">
                    {info.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Booking buttons */}
            <div className="flex flex-col gap-4">
              <motion.p
                variants={staggerItem}
                className="text-sapo-gold text-xs tracking-[0.25em] uppercase font-sans font-semibold mb-1"
              >
                Reserve Your Spot
              </motion.p>
              {dayPlans.map((plan) => (
                <motion.a
                  key={plan.id}
                  variants={staggerItem}
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-4 px-6 min-h-[44px] border border-sapo-gold text-sapo-gold font-sans font-semibold text-sm tracking-widest uppercase transition-colors duration-300 hover:bg-sapo-gold hover:text-sapo-dark"
                >
                  Book {plan.label}
                </motion.a>
              ))}
            </div>

            {/* GroupMe link */}
            <motion.a
              variants={staggerItem}
              href="https://groupme.com/join_group/115290301/KUACRwlO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-l-2 border-sapo-gold/40 pl-4 py-1 group"
            >
              <div>
                <p className="text-sapo-gold text-xs tracking-widest uppercase font-sans font-semibold mb-1">
                  Stay Connected
                </p>
                <p className="text-sapo-cream font-sans font-medium text-base group-hover:text-sapo-gold transition-colors duration-300">
                  Join the Summer Camp GroupMe →
                </p>
              </div>
            </motion.a>
          </motion.div>

        </div>

        {/* Camp media, by week */}
        {campWeeks.length > 0 && (
          <div className="mt-20 lg:mt-28 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-px bg-sapo-gold" />
              <span className="text-sapo-gold text-xs font-sans font-medium tracking-[0.3em] uppercase">
                Camp Highlights
              </span>
            </motion.div>

            {campWeeks.map((week) => (
              <div key={week.label}>
                <motion.h3
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="font-display text-2xl md:text-3xl font-black text-sapo-cream mb-6 uppercase tracking-wide"
                >
                  {week.label}
                </motion.h3>
                <WeekGallery items={week.items} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
