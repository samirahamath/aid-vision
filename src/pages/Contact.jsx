import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const contactInfo = [
  { icon: 'fas fa-map-marker-alt', label: 'Address', value: 'NIT, Tiruchirappalli, Tamil Nadu, India', href: null },
  { icon: 'fas fa-phone-alt', label: 'Phone', value: '+91 8765485696', href: 'tel:+918765485696' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'AIDVISIONML@GMAIL.COM', href: 'mailto:AIDVISIONML@GMAIL.COM' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    // Simulate API call — replace with actual email service (e.g., EmailJS, Formspree)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="feature-tag justify-center mx-auto">
              <i className="fas fa-envelope" /> Contact Us
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl text-white font-bold mt-4 mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Get In Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/80 text-lg max-w-xl mx-auto">
              Have a question, a project idea, or want to see a live demo? We&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Contact Information
              </h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EEF2FF' }}
                    >
                      <i className={`${item.icon} text-sm`} style={{ color: '#2142B1' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-700 font-medium text-sm hover:text-blue-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="mailto:AIDVISIONML@GMAIL.COM"
                    className="social-btn border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600"
                    aria-label="Email"
                  >
                    <i className="fas fa-envelope text-sm" />
                  </a>
                  <a
                    href="https://www.instagram.com/sameer_ahamath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn border border-gray-200 text-gray-500 hover:border-pink-500 hover:text-pink-500"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-sm" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sameer-ahamath-1b61b525b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn border border-gray-200 text-gray-500 hover:border-blue-700 hover:text-blue-700"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in text-sm" />
                  </a>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  title="NIT Trichy Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.988!2d78.8106432!3d10.7589381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa8d47758e1ae1%3A0xb3e16389eeab05a!2sNational%20Institute%20of%20Technology%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10">
                <h3 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                  Send Us a Message
                </h3>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 text-green-700 text-sm font-medium"
                  >
                    <i className="fas fa-check-circle text-green-500" />
                    Thank you! Your message has been received. We&apos;ll get back to you shortly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        className={`form-input focus:ring-blue-500 ${errors.firstName ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="John"
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className={`form-input focus:ring-blue-500 ${errors.lastName ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="Doe"
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={`form-input focus:ring-blue-500 ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="john@company.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Subject
                    </label>
                    <select
                      className={`form-input focus:ring-blue-500 bg-white ${errors.subject ? 'border-red-400' : ''}`}
                      {...register('subject', { required: 'Please select a subject' })}
                    >
                      <option value="">Select a topic...</option>
                      <option value="demo">Request a Demo</option>
                      <option value="annotation">Object Annotation</option>
                      <option value="counting">Object Counting</option>
                      <option value="realtime">Realtime Application</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="mb-7">
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className={`form-input resize-none focus:ring-blue-500 ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="Tell us about your project or question..."
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 20, message: 'Message must be at least 20 characters' },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-8 rounded-xl text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ backgroundColor: '#2142B1' }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
