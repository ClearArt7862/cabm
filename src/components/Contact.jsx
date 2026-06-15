import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { fadeLeft, fadeRight, viewportOnce } from '../utils/motionVariants'

const contactInfo = [
  {
    icon: Phone,
    label: 'Mobile',
    value: '971 50 128 7460',
    href: 'tel:+971501287460',
  },
  {
    icon: Phone,
    label: 'Land Line',
    value: '02 877 2821',
    href: 'tel:0528772821',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'cleanart.ae@gmail.com',
    href: 'mailto:cleanart.ae@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Mussafah M-37, Plot 43, Office 3, Abu Dhabi, UAE',
    href: 'https://maps.google.com/?q=Mussafah+M-37+Abu+Dhabi',
  },
  {
    icon: MapPin,
    label: 'P.O. Box',
    value: '33902',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sat – Thu · 8:00 – 18:00 · Emergency 24/7',
    href: null,
  },
]

const services = [
  'Civil & Construction Works',
  'Electrical & Plumbing',
  'AC Installation & Service',
  'Painting & Finishing',
  'Renovation & Remodeling',
  'Interior Decoration',
  'Other / Not Sure',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '971501287460'

    const text =
      `Hello Clean Art CABM,%0A%0A` +
      `I would like to request a free consultation.%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Service Required:* ${form.service}%0A` +
      (form.message ? `*Message:* ${form.message}%0A` : '') +
      `%0APlease get back to me at your earliest convenience. Thank you.`

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank')
  }

  const isValid = form.name && form.phone && form.email && form.service

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow justify-center">Get In Touch</span>
          <h2 className="heading-lg mb-4">Request a Free Consultation</h2>
          <p className="body-text max-w-xl mx-auto">
            Fill in your details and we will send you a quote within 24 hours. No obligation, no pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left — company info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeLeft}
          >
            <h3 className="font-serif text-2xl text-forest mb-2">Company Information</h3>
            <p className="body-text mb-8">
              Clean Art Buildings Maintenance LLC is based in Abu Dhabi and serves clients throughout the UAE with a full range of professional maintenance services.
            </p>

            <ul className="space-y-6 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={17} className="text-forest" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest2 text-brown mb-1">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-ink text-sm hover:text-forest transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-ink text-sm">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Free consultation note */}
            <div className="bg-beige rounded-2xl p-6">
              <h4 className="font-serif text-lg text-forest mb-2">Free Consultation</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                All enquiries receive a free consultation and a no-obligation quote. We respond to all messages within one business day.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeRight}
          >
            <div className="bg-white rounded-3xl border border-forest/[0.08] shadow-card p-8 md:p-10">
              <h3 className="font-serif text-2xl text-forest mb-7">Request Free Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest2 text-ink-muted mb-2">
                      Full Name <span className="text-brown">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-soft border border-transparent focus:outline-none focus:border-forest/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest2 text-ink-muted mb-2">
                      Phone Number <span className="text-brown">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 000"
                      required
                      className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-soft border border-transparent focus:outline-none focus:border-forest/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest2 text-ink-muted mb-2">
                    Email Address <span className="text-brown">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-soft border border-transparent focus:outline-none focus:border-forest/30 transition-colors"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest2 text-ink-muted mb-2">
                    Service Required <span className="text-brown">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink border border-transparent focus:outline-none focus:border-forest/30 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest2 text-ink-muted mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your maintenance requirements..."
                    rows={4}
                    className="w-full bg-cream rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-soft border border-transparent focus:outline-none focus:border-forest/30 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isValid
                      ? 'bg-forest text-cream hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-hover'
                      : 'bg-forest/30 text-cream/50 cursor-not-allowed'
                  }`}
                >
                  Request Free Consultation
                  <ArrowUpRight size={16} />
                </button>

                <p className="text-center text-xs text-ink-muted">
                  You will be redirected to WhatsApp to send your request directly.
                </p>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}