import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calculator, UserCheck, PackageCheck, ShieldCheck } from 'lucide-react';
import { fadeLeft, fadeRight, viewportOnce } from "../utils/motionVariants";

const stats = [
  { value: 150, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'In-House Craftsmanship' },
  { value: 24, suffix: '/7', label: 'Support Available' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

const highlights = [
  {
    icon: Calculator,
    title: 'Transparent Pricing',
    desc: 'Free on-site assessments paired with fixed-price quotes and zero hidden fees.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Management',
    desc: 'A single, expert point of contact oversees your project from day one to completion.',
  },
  {
    icon: PackageCheck,
    title: 'Premium Materials',
    desc: 'Sourced exclusively from trusted UAE suppliers to ensure unparalleled quality and durability.',
  },
  {
    icon: ShieldCheck,
    title: 'Comprehensive Warranty',
    desc: 'Every completed job is backed by a written post-completion warranty for your peace of mind.',
  },
];

const fadeUpStats = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.68, 0, 1] } },
}

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    const duration = 1700

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-beige leading-none">
      {display}
      {suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-forest relative overflow-hidden">
      <div className="absolute -top-48 -right-32 w-[560px] h-[560px] rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
          >
            <div className="eyebrow text-beige before:bg-beige">Our approach</div>
            <h2 className="heading-md font-serif text-cream mb-6">
              Detail-Led. Deadline-driven. <span className="italic text-beige">Always</span> Accountable.
            </h2>
            <p className="text-cream/70 leading-relaxed mb-8 max-w-md">
              Every project starts with a site visit and a fixed, transparent quote — and ends with a final walkthrough you sign off on. In between, you have a single point of contact and a guaranteed timeline.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-beige"
            >
              Start Your Project
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
            className="flex flex-col gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-5 transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <div className="w-11 h-11 rounded-xl bg-beige/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-beige" />
                </div>
                <div>
                  <p className="font-semibold text-cream mb-1">{title}</p>
                  <p className="text-sm text-cream/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUpStats}
          className="grid grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden border border-white/10 divide-x divide-y lg:divide-y-0 divide-white/10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-6 py-10 bg-white/[0.03] transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-cream/65 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}