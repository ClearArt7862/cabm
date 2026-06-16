import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShieldCheck, Wrench, Clock, Sparkles,
  X, ArrowUpRight, Target, Award, MapPin, Users, ChevronRight
} from 'lucide-react'
import { fadeLeft, fadeRight, staggerContainer, staggerItem, viewportOnce } from '../utils/motionVariants'
import a1 from '../../IMG/About/About-1img.jpeg'
import a2 from '../../IMG/About/About-2img.jpeg'
import a3 from '../../IMG/About/About-3img.jpg'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Licensed and Insured',
    desc: 'Trusted by homeowners and businesses across Abu Dhabi with full insurance on every job.',
  },
  {
    icon: Wrench,
    title: 'In-house Specialists',
    desc: 'All our technicians work directly with us — no subcontractors, no middlemen.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    desc: 'We are available around the clock for urgent repairs and maintenance calls.',
  },
  {
    icon: Sparkles,
    title: 'Quality-First Finishes',
    desc: 'Every job is completed with approved materials and checked before we leave.',
  },
]

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver maintenance and fit-out work that lasts — using certified teams, clear pricing, and quality materials.',
  },
  {
    icon: Award,
    title: 'Our Values',
    desc: 'Good work, honest pricing, and finishing what we promise — on time, every time.',
  },
  {
    icon: MapPin,
    title: 'Our Reach',
    desc: 'Based in Abu Dhabi, we serve Mussafah, Khalifa City, Yas Island, Al Reem, and across the UAE.',
  },
]

const team = [
  {
    name: 'Khaled Sulaiman Al Memari',
    role: 'Founder & Owner',
    desc: 'UAE national entrepreneur who started CABM to raise the standard of building maintenance in Abu Dhabi.',
  },
  {
    name: 'Raja Tahir Mehmood',
    role: 'General Manager',
    desc: 'Over 10 years of experience in UAE construction and MEP project management, overseeing every CABM site.',
  },
  {
    name: 'Our Crew',
    role: 'Engineers, Technicians & Specialists',
    desc: 'Engineers, painters, carpenters, and finishers — all in-house, all certified, all accountable.',
    isCrew: true,
  },
]

function AboutPanel({ onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative ml-auto h-full w-full max-w-2xl bg-cream shadow-lift overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 280 }}
      >
        {/* Dark hero header */}
        <div className="bg-ink px-10 py-14 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
          <p className="text-beige text-xs font-semibold uppercase tracking-widest2 mb-5">About CABM</p>
          <h2 className="font-serif text-4xl text-white leading-tight mb-4">
            Built on <span className="italic text-beige">trust.</span><br />Refined by craft.
          </h2>
          <p className="text-white/90 text-sm leading-relaxed max-w-md">
            Clean Art Buildings Maintenance — Sole Proprietorship L.L.C. is an Abu Dhabi licensed company (CN-4534360) founded in 2022 to bring craftsmanship and accountability back to the UAE buildings maintenance industry.
          </p>
        </div>

        <div className="p-8 md:p-10 space-y-12">

          {/* Our Story */}
          <div>
            <p className="eyebrow">Our Story</p>
            <h3 className="font-serif text-3xl text-forest mb-6">
              From a single villa, to <span className="text-brown italic">150+ projects.</span>
            </h3>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: '16/7' }}>
              <img
                src={a1}
                alt="Luxury interior completed by CABM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-ink-muted text-[15px] leading-relaxed">
              <p>
                Founded in July 2022 and headquartered in Mussafah, Abu Dhabi, CABM was started with one simple goal — to give UAE property owners a maintenance partner they could actually trust.
              </p>
              <p>
                Today our team of civil engineers, MEP technicians, AC specialists, painters, carpenters, and interior stylists all work together on every project. No fragmented subcontracting, no cutting corners.
              </p>
              <p>
                Under the leadership of owner Khaled Sulaiman Al Memari and General Manager Raja Tahir Mehmood, we serve villas, offices, retail fit-outs, and government facilities across the Emirates.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-forest/10" />

          {/* Mission / Values / Reach */}
          <div>
            <p className="eyebrow">What We Stand For</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-forest/[0.07] p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-brown/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-brown" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-serif text-base text-forest mb-2">{title}</h4>
                  <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-forest/10" />

          {/* Leadership */}
          <div>
            <p className="eyebrow">Leadership</p>
            <h3 className="font-serif text-2xl text-forest mb-6">The people behind CABM.</h3>
            <div className="space-y-0 divide-y divide-forest/10 border border-forest/10 rounded-2xl overflow-hidden">
              {team.map(({ name, role, desc, isCrew }) => (
                <div key={name} className="flex gap-4 p-6 bg-white">
                  <div className="w-1 flex-shrink-0 rounded-full bg-brown self-stretch" />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {isCrew && <Users size={15} className="text-brown" />}
                      <h4 className="font-serif text-lg text-forest">{name}</h4>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest2 text-brown mb-2">{role}</p>
                    <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { number: '150+', label: 'Projects Done' },
              { number: '2022', label: 'Founded' },
              { number: '6', label: 'Services' },
            ].map(({ number, label }) => (
              <div key={label} className="bg-forest rounded-2xl p-5 text-center">
                <p className="font-serif text-2xl text-cream font-bold mb-1">{number}</p>
                <p className="text-cream/60 text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            Get a Free Quote
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <section id="about" className="section-padding bg-white overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Image stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeLeft}
          className="relative h-[420px] md:h-[540px]"
        >
          <img
            src={a2}
            alt="Clean Art team at work"
            className="absolute top-0 left-0 w-[75%] h-[80%] object-cover rounded-2xl shadow-card"
          />
          <img
            src={a3}
            alt="Technician performing maintenance"
            className="absolute bottom-0 right-0 w-[55%] h-[55%] object-cover rounded-2xl shadow-lift border-4 border-white"
          />
          <div className="absolute top-[44%] left-[60%] -translate-x-1/2 -translate-y-1/2 bg-forest text-cream rounded-2xl px-7 py-5 text-center shadow-lift">
            <span className="block font-serif text-3xl font-bold leading-none">150+</span>
            <span className="block text-xs mt-1 opacity-85">Projects Delivered</span>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeRight}
        >
          <div className="eyebrow">Who we are</div>
          <h2 className="heading-md font-serif mb-6">
            A Single Partner For Every Building Need.
          </h2>
          <p className="body-text max-w-xl mb-8">
            Based in Mussafah, Abu Dhabi, Clean Art Buildings Maintenance LLC was founded to bring better quality work to the UAE maintenance industry. From a leaking pipe at 2 AM to a full villa renovation — our team handles it all in-house. No subcontractors. No surprises.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 gap-5 mb-8"
          >
            {cards.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group bg-cream rounded-2xl p-6 border border-forest/[0.07] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-hover hover:border-forest/15"
              >
                <div className="w-11 h-11 rounded-xl bg-forest/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-forest">
                  <Icon size={20} className="text-forest transition-colors duration-300 group-hover:text-cream" />
                </div>
                <h4 className="font-serif text-lg text-forest mb-2">{title}</h4>
                <p className="text-sm text-ink-muted leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Know More button */}
          <button
            onClick={() => setPanelOpen(true)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-forest border border-forest/20 rounded-full px-6 py-3 hover:bg-forest hover:text-cream hover:border-forest transition-all duration-300 group"
          >
            Know More About Us
            <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Full about panel */}
      <AnimatePresence>
        {panelOpen && (
          <AboutPanel onClose={() => setPanelOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}