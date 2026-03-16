import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-sapo-dark border-t border-sapo-gold/15 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <a href="#home" className="flex flex-col leading-none mb-4 items-center md:items-start">
              <span className="font-display text-3xl font-black text-sapo-cream tracking-wider">
                SAPO
              </span>
              <span className="text-[10px] font-sans font-light tracking-[0.25em] text-sapo-gold uppercase">
                Tennis Academy
              </span>
            </a>
            <p className="text-sapo-cream/50 text-sm font-sans leading-relaxed max-w-xs">
              Developing champions, one rally at a time. Pearland's premier tennis coaching program for all ages and levels.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sapo-gold text-xs tracking-[0.25em] uppercase font-sans font-semibold mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sapo-cream/60 hover:text-sapo-cream text-sm font-sans transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="text-sapo-gold text-xs tracking-[0.25em] uppercase font-sans font-semibold mb-5">
              Follow Along
            </p>
            <div className="flex gap-4 mb-8 justify-center md:justify-start">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/sapoacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-sapo-cream/15 flex items-center justify-center text-sapo-cream/60 hover:text-sapo-gold hover:border-sapo-gold/50 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={1.5}/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth={2} strokeLinecap="round"/>
                </svg>
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] border border-sapo-gold text-sapo-gold font-sans text-sm font-medium tracking-widest uppercase hover:bg-sapo-gold hover:text-sapo-dark transition-all duration-300"
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-sapo-cream/30 text-xs font-sans">
            © 2025 Sapo Tennis Academy. All rights reserved.
          </p>
          <p className="text-sapo-cream/20 text-xs font-sans">
            Pearland, Texas · Est. 2014
          </p>
        </div>
      </div>
    </footer>
  )
}
