import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Hammer,
  Zap,
  Wind,
  Paintbrush,
  Wrench,
  Sparkles,
  X,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import s1 from '../../IMG/Services/Services-1img.jpg'
import s2 from '../../IMG/Services/Services-2img.jpg'
import s3 from '../../IMG/Services/Services-3img.jpg'
import s4 from '../../IMG/Services/Services-4img.jpg'
import s5 from '../../IMG/Services/Services-5img.jpg'
import s6 from '../../IMG/Services/Services-6img.jpg'



const services = [
  {
    id: 'civil',
    image: s1,
    icon: Hammer,
    number: '01',
    title: 'Civil and Construction Works',
    tagline: 'Structural integrity, masonry, and concrete works executed to UAE building standards.',
    color: '#4A6557',
    accent: '#E8DCCB',
    description:
      'Our civil and construction division handles all aspects from foundational reinforcement to full structural builds. Every project is executed by certified engineers who understand the unique demands of UAE climate and regulatory environment.',
    highlights: [
      'Concrete & masonry repair',
      'Tiling & flooring installation',
      'Waterproofing systems',
      'Steel & structural works',
      'Foundation reinforcement',
      'Retaining walls & drainage',
    ],
    why: 'We follow Dubai Municipality and Abu Dhabi Urban Planning standards on every project — no shortcuts, no compromises.',
  },
  {
    id: 'electrical',
    image: s2,
    icon: Zap,
    number: '02',
    title: 'Electrical and Plumbing',
    tagline: 'Certified MEP technicians handling installations, fault diagnostics, and 24/7 emergencies.',
    color: '#6B4A36',
    accent: '#F7F3ED',
    description:
      'Our MEP team is DEWA-approved and equipped to handle residential, commercial, and industrial electrical and plumbing systems. From new installations to emergency fault repairs, we respond fast and work to code.',
    highlights: [
      'Full electrical fit-out',
      'Plumbing & pipework',
      'Fault diagnostics & repair',
      '24/7 emergency response',
      'Water heater installation',
      'Panel upgrades & rewiring',
    ],
    why: 'DEWA-approved engineers with same-day response for emergencies across Dubai, Sharjah, and Abu Dhabi.',
  },
  {
    id: 'ac',
    image: s3,
    icon: Wind,
    number: '03',
    title: 'AC Installation and Service',
    tagline: 'Split, ducted and central AC installation, maintenance, deep cleaning and gas refilling.',
    color: '#33483E',
    accent: '#E8DCCB',
    description:
      'Operating in the UAE demands a climate control system that performs at peak efficiency year-round. Our certified technicians install, service, and maintain all major AC brands — from residential split units to central chiller systems.',
    highlights: [
      'Split & cassette AC installation',
      'Central & ducted AC systems',
      'Preventive maintenance contracts',
      'Deep cleaning & sanitization',
      'Gas refilling (R22 & R410A)',
      'Annual AMC packages',
    ],
    why: 'All technicians hold ASHRAE-level certifications. We carry gas refilling kits and spare parts on every van — no waiting, no delays.',
  },
  {
    id: 'painting',
    image: s4,
    icon: Paintbrush,
    number: '04',
    title: 'Painting and Finishing',
    tagline: 'Interior and exterior painting with premium finishes that elevate every surface.',
    color: '#4A6557',
    accent: '#F7F3ED',
    description:
      'From single rooms to complete building exteriors, our painting teams use only premium-grade paints suited to the Gulf climate. We prepare surfaces meticulously, apply with precision, and leave your space spotless.',
    highlights: [
      'Interior & exterior painting',
      'Textured & decorative finishes',
      'Anti-fungal & moisture-resistant coatings',
      'Epoxy flooring',
      'Wallpaper installation',
      'Touch-up & patch painting',
    ],
    why: 'We use Jotun, Dulux, and Sigma paints — UV-resistant formulas built for the UAE sun, guaranteed to last.',
  },
  {
    id: 'renovation',
    image: s5,
    icon: Wrench,
    number: '05',
    title: 'Renovation and Remodeling',
    tagline: 'Kitchens, bathrooms and whole-home transformations — managed end-to-end.',
    color: '#6B4A36',
    accent: '#E8DCCB',
    description:
      'We transform tired spaces into bespoke environments. Whether you are upgrading a bathroom, modernising a kitchen, or remodeling an entire floor, our project managers oversee every trade — one call, one team, zero hassle.',
    highlights: [
      'Kitchen remodeling',
      'Bathroom renovations',
      'Full apartment fit-out',
      'Partition walls & gypsum work',
      'False ceiling installation',
      'Commercial office refit',
    ],
    why: 'Single point of contact for all trades. We coordinate plumbers, electricians, tilers and painters — you deal with one team.',
  },
  {
    id: 'interior',
    image: s6,
    icon: Sparkles,
    number: '06',
    title: 'Interior Decoration',
    tagline: 'Bespoke interior styling, joinery and false ceilings that reflect your identity.',
    color: '#33483E',
    accent: '#F7F3ED',
    description:
      'Our interior design studio goes beyond aesthetics — we create spaces engineered for living. From concept boards to custom joinery and soft furnishing curation, we bring your vision to life with precision craftsmanship.',
    highlights: [
      'Concept design & mood boards',
      'Custom joinery & cabinetry',
      'Gypsum & POP false ceilings',
      'Lighting design & installation',
      'Flooring & wall cladding',
      'Soft furnishing sourcing',
    ],
    why: 'Our in-house designers and craftsmen work together — no outsourcing, no miscommunication, just a finished space that reflects you.',
  },
]

function ServiceDetailPanel({ service, onClose }) {
  const Icon = service.icon

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative ml-auto h-full w-full max-w-xl bg-cream shadow-lift overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 280 }}
      >
        {/* Hero image */}
        {service.image && (
          <div className="relative h-52 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest2 text-white/70">
                {service.number} — Service Detail
              </p>
            </div>
          </div>
        )}

        <div className="p-8 md:p-10">
          {/* Close (fallback if no image) */}
          {!service.image && (
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-forest/5 hover:bg-forest/10 text-forest transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          )}

          {/* Eyebrow (only if no image) */}
          {!service.image && (
            <p
              className="text-xs font-semibold uppercase tracking-widest2 mb-6"
              style={{ color: service.color }}
            >
              {service.number} — Service Detail
            </p>
          )}

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: service.accent }}
          >
            <Icon size={28} color={service.color} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl text-forest leading-tight mb-4">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-ink-muted leading-relaxed mb-8 text-[15px]">
            {service.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-forest/10 mb-8" />

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brown mb-5">
              What's Included
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: service.color }}
                    strokeWidth={2}
                  />
                  <span className="text-ink text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why us */}
          <div
            className="rounded-2xl p-5 mb-10"
            style={{ background: service.accent }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest2 mb-2" style={{ color: service.color }}>
              Our Promise
            </p>
            <p className="text-ink text-sm leading-relaxed">{service.why}</p>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            Request a Quote
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.68, 0, 1] } },
  }

  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow justify-center">What We Do</span>
          <h2 className="heading-lg max-w-3xl mx-auto mb-5">
            Six Disciplines.<br className="hidden sm:block" /> One Uncompromising Standard.
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            From structural foundations to bespoke interior finishes, our in-house experts deliver
            seamless, end-to-end care for your property.
          </p>
        </div>

        {/* 3×3 Grid (6 cards + empty cell) */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="card-surface group flex flex-col p-7 cursor-pointer"
                onClick={() => setActiveService(service)}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{ background: '#F0EBE3' }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="transition-colors duration-300"
                    style={{ color: service.color }}
                  />
                </div>

                {/* Number */}
                <span
                  className="text-xs font-semibold uppercase tracking-widest2 mb-3 transition-colors duration-300"
                  style={{ color: '#DACBB2' }}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl text-forest mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="body-text text-sm flex-1 mb-6">
                  {service.tagline}
                </p>

                {/* Learn more */}
                <button
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-forest group-hover:text-brown transition-colors duration-300 self-start"
                >
                  Learn More
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </motion.div>
            )
          })}

        </motion.div>

        {/* CTA card centered below grid */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-6 max-w-md mx-auto rounded-2xl bg-forest flex flex-col items-center text-center p-10 cursor-pointer group"
          onClick={() => {
            const el = document.querySelector("#contact")
            if (el) el.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <p className="text-beige text-xs font-semibold uppercase tracking-widest2 mb-4">
            Ready to Start?
          </p>
          <h3 className="font-serif text-2xl text-cream leading-snug mb-4">
            Get a free, no-obligation quote today.
          </h3>
          <p className="text-cream/60 text-sm leading-relaxed mb-8">
            Our team will assess your needs and provide a transparent estimate within 24 hours.
          </p>
          <div className="w-10 h-10 rounded-full bg-beige/20 flex items-center justify-center group-hover:bg-beige/30 transition-colors duration-300">
            <ArrowUpRight size={18} className="text-cream" />
          </div>
        </motion.div>
      </div>

      {/* Service detail panel */}
      <AnimatePresence>
        {activeService && (
          <ServiceDetailPanel
            service={activeService}
            onClose={() => setActiveService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}