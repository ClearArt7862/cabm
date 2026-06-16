import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, ShieldCheck, Clock, Award, Calendar } from 'lucide-react'
import { fadeRight, staggerContainer, staggerItem } from '../utils/motionVariants'
import heroImg from '../../IMG/Projects/Project-3img.jpg'

const trustPoints = [
  { icon: Calendar, label: 'Est. 2022' },
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: Clock, label: '24/7 Support' },
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-beige-fade"
    >
      {/* Decorative shapes */}
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-beige/50 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 rounded-full bg-forest/[0.06] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 w-40 h-40 rounded-full border border-forest/10 pointer-events-none hidden lg:block" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="eyebrow">
            Abu Dhabi · Since 2022
          </motion.div>

          <motion.h1 variants={staggerItem} className="heading-lg font-serif mb-6">
            Buildings, {' '}
            <span className="italic text-brown">crafted </span>
            with care.
          </motion.h1>

          <motion.p variants={staggerItem} className="body-text max-w-lg mb-10">
            Clean Art Buildings Maintenance is a licensed Abu Dhabi company delivering civil, MEP, AC, painting, renovation and interior decoration services — under one roof, by one team.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-12">
            <button onClick={() => scrollTo('#contact')} className="btn-primary">
              Get Free Quote
              <ArrowUpRight size={16} />
            </button>
            <button onClick={() => scrollTo('#services')} className="btn-outline">
              Explore Services
              <ChevronRight size={16} />
            </button>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-ink-muted">
                <Icon size={16} className="text-brown" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          className="relative hidden lg:flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-lift"
          >
            <img
              src={heroImg}
              alt="Sophisticated Al Reem corporate office fit-out featuring custom joinery, premium interior decoration, and ambient lighting"
              className="w-full h-[560px] object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center gap-4 shadow-soft">
              <div className="w-12 h-12 rounded-xl bg-forest flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={22} className="text-cream" />
              </div>
              <div>
                <p className="font-semibold text-forest text-sm">In-House Craftsmanship</p>
                <p className="text-xs text-ink-muted">100% our team. No sub-contractors.</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-beige-dark/40 -z-10" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-forest/10 -z-10" />
        </motion.div>
      </div>
    </section>
  )
}