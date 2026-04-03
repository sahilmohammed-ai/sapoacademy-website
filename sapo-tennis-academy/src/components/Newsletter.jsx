import { motion } from 'framer-motion'
import { useScrollAnimation, containerVariants, staggerItem } from '../hooks/useScrollAnimation'

const posts = [
  {
    image: '/images/newsletter/regionals.jpeg',
    date: 'April 2, 2026',
    title: 'Regionals Bound',
    caption: 'Congrats to Val and Cam for making it to regionals!! We are extremely proud of y\'all and wish you the best of luck!',
  },
  {
    image: '/images/newsletter/jv-districts.JPG',
    date: 'April 3, 2026',
    title: 'District Medalists',
    caption: 'Congrats to our fellow students who placed at freshman and JV districts!! We are very proud and can\'t wait to keep supporting you!',
  },
]

export default function Newsletter() {
  const { ref, controls } = useScrollAnimation(0.1)

  return (
    <section id="updates" className="pt-20 pb-24 lg:pb-36 bg-sapo-dark relative">
      <div className="gold-divider mb-12 lg:mb-20" />
      {/* Subtle background texture */}
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

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="group relative bg-sapo-dark border border-sapo-gold/10 hover:border-sapo-gold/30 transition-colors duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sapo-dark via-sapo-dark/20 to-transparent" />

                {/* Date badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-sapo-dark/80 backdrop-blur-sm border border-sapo-gold/40 text-sapo-gold text-[10px] font-sans tracking-[0.25em] uppercase">
                    {post.date}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-5 h-px bg-sapo-gold/60" />
                  <h3 className="font-display text-xl font-black text-sapo-cream tracking-wide uppercase">
                    {post.title}
                  </h3>
                </div>
                <p className="font-sans text-sapo-cream/65 text-sm leading-relaxed">
                  {post.caption}
                </p>
              </div>

              {/* Bottom gold accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-sapo-gold group-hover:w-full transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
