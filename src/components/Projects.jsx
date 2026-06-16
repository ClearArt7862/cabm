import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react'

import p1 from '../../IMG/Projects/Project-1img.jpg'
import p2 from '../../IMG/Projects/Project-2img.jpg'
import p3 from '../../IMG/Projects/Project-3img.jpg'
import p4 from '../../IMG/Projects/Project-4img.jpg'
import p5 from '../../IMG/Projects/Project-5img.jpg'
import p6 from '../../IMG/Projects/Project-6img.jpg'

const CATEGORIES = [
  'All',
  'Residential Maintenance',
  'Commercial Buildings',
  'Office Spaces',
  'AC Projects',
  'Painting Projects',
  'Facility Management',
]

const projects = [
  {
    id: 1,
    image: p1,
    category: 'Residential Maintenance',
    type: 'Full Renovation',
    title: 'Khalifa City Villa Renovation',
    location: 'Khalifa City, AD',
    year: '2024',
    duration: '8 weeks',
    description:
      'A complete end-to-end renovation of a 4-bedroom villa in Khalifa City. The scope covered kitchen and bathroom remodeling, full interior repainting, flooring replacement, and electrical upgrades — all completed within budget and on schedule.',
    scope: [
      'Kitchen & bathroom remodel',
      'Flooring replacement throughout',
      'Interior & exterior repainting',
      'Electrical panel upgrade',
      'False ceiling installation',
      'Plumbing fixtures replacement',
    ],
  },
  {
    id: 2,
    image: p2,
    category: 'Facility Management',
    type: 'Electrical & Plumbing',
    title: 'Mussafah Warehouse MEP',
    location: 'Mussafah, AD',
    year: '2024',
    duration: '5 weeks',
    description:
      'Full MEP installation and fit-out for a large industrial warehouse in Mussafah. Delivered on an accelerated timeline with zero downtime to ongoing operations. Included three-phase power distribution, industrial lighting, and plumbing infrastructure.',
    scope: [
      'Three-phase power distribution',
      'Industrial lighting installation',
      'Plumbing & drainage systems',
      'Fire alarm integration',
      'Cable management & trunking',
      'Final commissioning & testing',
    ],
  },
  {
    id: 3,
    image: p3,
    category: 'Office Spaces',
    type: 'Commercial Fit-out',
    title: 'Al Reem Office Fit-out',
    location: 'Al Reem Island, AD',
    year: '2023',
    duration: '6 weeks',
    description:
      'A premium office fit-out for a financial services firm on Al Reem Island. The project included custom joinery, glass partitions, raised flooring, concealed AC systems, and a full network infrastructure — delivered to Grade A office standards.',
    scope: [
      'Custom joinery & cabinetry',
      'Glass partition installation',
      'Raised access flooring',
      'Concealed AC & ventilation',
      'IT & network infrastructure',
      'Decorative lighting design',
    ],
  },
  {
    id: 4,
    image: p4,
    category: 'Painting Projects',
    type: 'Interior & Exterior',
    title: 'Yas Island Family Home',
    location: 'Yas Island, AD',
    year: '2024',
    duration: '3 weeks',
    description:
      'A full interior and exterior repaint for a luxury family villa on Yas Island. UV-resistant Jotun Exterior paints were selected for the facade, while premium Dulux Matt emulsions were used throughout the interior — creating a warm, contemporary finish.',
    scope: [
      'Full exterior repaint (Jotun)',
      'Interior painting all rooms',
      'Feature wall textures',
      'Anti-fungal coating in wet areas',
      'Ceiling painting & coving',
      'Post-paint deep clean',
    ],
  },
  {
    id: 5,
    image: p5,
    category: 'AC Projects',
    type: 'HVAC Servicing',
    title: 'Corniche Tower AC Overhaul',
    location: 'Corniche Road, AD',
    year: '2024',
    duration: '4 weeks',
    description:
      'Comprehensive HVAC servicing, including deep cleaning and system diagnostics for peak cooling efficiency. The project covered 48 split units and a central chiller across 12 residential floors — restoring full capacity ahead of summer.',
    scope: [
      'Full system diagnostics',
      'Deep cleaning of 48 units',
      'Gas refilling (R410A)',
      'Duct sanitization',
      'Chiller inspection & service',
      'Efficiency report & AMC setup',
    ],
  },
  {
    id: 6,
    image: p6,
    category: 'Commercial Buildings',
    type: 'Civil Works',
    title: 'Al Shamkha Civil Works',
    location: 'Al Shamkha, AD',
    year: '2023',
    duration: '12 weeks',
    description:
      'Structural civil works for a G+3 commercial building in Al Shamkha. Our team handled concrete works, masonry, waterproofing, and tiling across all floors, coordinating with the main contractor to meet critical handover milestones.',
    scope: [
      'Concrete & masonry works',
      'Waterproofing all wet areas',
      'Tiling & flooring G+3',
      'External facade plastering',
      'Steel lintel installation',
      'Final punch list & snagging',
    ],
  },
]

function ProjectDetailPanel({ project, onClose }) {
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
        className="relative ml-auto h-full w-full max-w-xl bg-cream shadow-lift overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 32, stiffness: 280 }}
      >
        {/* Hero image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Category badge */}
          <div className="absolute bottom-4 left-6">
            <span className="text-[10px] font-semibold uppercase tracking-widest2 text-beige">
              {project.category} · {project.type}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Title */}
          <h2 className="font-serif text-3xl text-forest leading-tight mb-4">
            {project.title}
          </h2>

          {/* Meta */}
          <div className="flex flex-wrap gap-5 mb-7">
            <div className="flex items-center gap-2 text-ink-muted text-sm">
              <MapPin size={14} className="text-brown" />
              {project.location}
            </div>
            <div className="flex items-center gap-2 text-ink-muted text-sm">
              <Calendar size={14} className="text-brown" />
              {project.year} · {project.duration}
            </div>
          </div>

          <div className="h-px bg-forest/10 mb-7" />

          {/* Description */}
          <p className="text-ink-muted text-[15px] leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Scope */}
          <div className="mb-10">
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brown mb-5">
              Project Scope
            </h3>
            <ul className="grid grid-cols-1 gap-3">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-forest" strokeWidth={2} />
                  <span className="text-ink text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            Start a Similar Project
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 0.68, 0, 1] }}
    >
      {/* Image with brightness transition */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        animate={{ filter: hovered ? 'brightness(1)' : 'brightness(0.45)' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Always-on strong bottom gradient so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Default state content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest2 text-beige/80 mb-2"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
          {project.category}
        </span>
        <h3 className="font-serif text-xl text-white leading-snug font-bold"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>
          {project.title}
        </h3>
      </motion.div>

      {/* Hover state content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, delay: hovered ? 0.1 : 0 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest2 text-beige mb-2"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
          {project.category} · {project.type}
        </span>
        <h3 className="font-serif text-xl text-white font-bold leading-snug mb-2"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,1)' }}>
          {project.title}
        </h3>
        <p className="text-white text-xs mb-4 line-clamp-2 font-medium"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
          {project.description}
        </p>
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest2 text-white"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,1)' }}>
          View Details
          <ChevronRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="eyebrow justify-center">Our Work</span>
          <h2 className="heading-lg mb-5">Projects That Speak For Themselves.</h2>
          <p className="body-text max-w-xl mx-auto">
            A selection of completed projects across the UAE — each one delivered on time, on budget, and to the highest standard.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest2 border transition-all duration-250 ${
                activeCategory === cat
                  ? 'bg-forest text-cream border-forest'
                  : 'bg-transparent text-ink border-forest/20 hover:border-forest/50 hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail panel */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetailPanel
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}