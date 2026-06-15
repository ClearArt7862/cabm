import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../utils/motionVariants'
import logoImg from '../../IMG/Logo.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Civil and Construction Works',
  'Electrical and Plumbing',
  'AC Installation and Service',
  'Painting and Finishing',
  'Renovation and Remodeling',
  'Interior Decoration',
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-forest text-cream/80 overflow-hidden">
      {/* Main footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:col-span-1"
          >
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-3 mb-5"
            >
              <img
                src={logoImg}
                alt="CABM Logo"
                className="h-12 w-12 object-contain rounded-sm flex-shrink-0 brightness-0 invert opacity-90"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-2xl font-semibold text-cream">
                  Clean Art
                </span>
                <span className="text-[10px] uppercase tracking-widest2 text-beige font-medium">
                  Buildings Maintenance LLC
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-cream/65 mb-8">
              A licensed Abu Dhabi maintenance company delivering crafted civil, electrical, MEP and interior solutions across the UAE.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-cream/15 flex items-center justify-center text-cream/60 hover:bg-cream hover:text-forest hover:border-cream transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            <h4 className="font-serif text-cream text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href) }}
                    className="text-sm text-cream/65 hover:text-cream transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-beige transition-all duration-300 group-hover:w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            <h4 className="font-serif text-cream text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    className="text-sm text-cream/65 hover:text-cream transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-beige transition-all duration-300 group-hover:w-4" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            <h4 className="font-serif text-cream text-lg mb-6">Contact Details</h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="tel:+971501287460"
                  className="flex items-start gap-3 text-sm text-cream/65 hover:text-cream transition-colors duration-200 group"
                >
                  <Phone size={16} className="flex-shrink-0 mt-0.5 text-beige" />
                  +971 50 128 7460
                </a>
              </li>
              <li>
                <a
                  href="mailto:cleanart.ae@gmail.com"
                  className="flex items-start gap-3 text-sm text-cream/65 hover:text-cream transition-colors duration-200"
                >
                  <Mail size={16} className="flex-shrink-0 mt-0.5 text-beige" />
                  cleanart.ae@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-cream/65">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5 text-beige" />
                  Mussafah M-37, Plot 43, Office 3, Abu Dhabi, UAE
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-beige border border-beige/30 rounded-full px-5 py-2.5 hover:bg-beige hover:text-forest hover:border-beige transition-all duration-300"
            >
              Get Free Quote
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/45">
            &copy; {new Date().getFullYear()} Clean Art Buildings Maintenance — Sole Proprietorship L.L.C. All rights reserved.
          </p>
          <p className="text-xs text-cream/35">
            Licence No. CN-4534360 · Abu Dhabi, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}