import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../utils/motionVariants'

const testimonials = [
  {
    name: 'Ahmed Al Mansoori',
    role: 'Facilities Director, Al Reem Tower',
    initials: 'AM',
    rating: 5,
    quote:
      'Clean Art did a great job fitting out our office. The work was neat, done on time, and exactly what we asked for. Very happy with the result.',
  },
  {
    name: 'Sara Khalid',
    role: 'Villa Owner, Khalifa City',
    initials: 'SK',
    rating: 5,
    quote:
      'They renovated our whole villa and did an amazing job. The team was professional, the place was kept clean every day, and the finishing looks beautiful. We are very pleased.',
  },
  {
    name: 'Rashid Al Suwaidi',
    role: 'Operations Manager, Corniche Tower',
    initials: 'RS',
    rating: 5,
    quote:
      'We called Clean Art to fix all the AC units in our building. They were fast, clean, and did the job properly. The AC is working much better now. Highly recommended.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[index]

  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-beige/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="eyebrow justify-center before:hidden">
            <span className="block w-8 h-px bg-brown" />
            Testimonials
          </div>
          <h2 className="heading-md font-serif mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="body-text">
            We are proud to be trusted by homeowners, businesses, and
            property managers throughout Abu Dhabi.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.22, 0.68, 0, 1] }}
                className="card-surface px-8 py-10 md:px-14 md:py-12 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mx-auto mb-6">
                  <Quote size={24} className="text-forest" />
                </div>

                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-brown text-brown" />
                  ))}
                </div>

                <p className="font-serif text-lg md:text-xl text-forest leading-relaxed mb-8 italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center font-serif font-semibold flex-shrink-0">
                    {current.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-forest">{current.name}</p>
                    <p className="text-sm text-ink-muted">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-all duration-300 hover:bg-forest hover:text-cream hover:-translate-y-0.5"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-forest' : 'w-2 bg-forest/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-forest/15 flex items-center justify-center text-forest transition-all duration-300 hover:bg-forest hover:text-cream hover:-translate-y-0.5"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}