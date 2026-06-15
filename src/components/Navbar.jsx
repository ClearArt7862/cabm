import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react'
import logoImg from '../../IMG/Logo.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3"
        >
          <img
            src={logoImg}
            alt="CABM Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-sm flex-shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-semibold text-forest">
              Clean Art
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-widest2 text-brown font-medium">
              Buildings Maintenance
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-medium text-ink/80 hover:text-forest transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-brown transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+971501287460"
            className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-forest transition-colors duration-200 group"
          >
            <div className="w-7 h-7 rounded-full bg-brown/10 flex items-center justify-center group-hover:bg-brown/20 transition-colors duration-200">
              <Phone size={13} className="text-brown" />
            </div>
            <span className="tracking-wide">+971 50 128 7460</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-primary"
          >
            Get Free Quote
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-forest p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1] }}
            className="lg:hidden bg-cream/98 backdrop-blur-md border-t border-forest/10 overflow-hidden"
          >
            <div className="container-custom flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl text-forest py-3 border-b border-forest/5 last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn-primary mt-5 self-start"
              >
                Get Free Quote
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}