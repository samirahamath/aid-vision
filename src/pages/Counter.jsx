import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

function FadeSection({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

const capabilities = [
  { icon: 'fas fa-search', title: 'AI Object Detection', desc: 'State-of-the-art deep learning algorithms detect and localize multiple objects simultaneously.' },
  { icon: 'fas fa-sort-numeric-up', title: 'Counting & Classification', desc: 'Accurately counts objects within specific areas like shelves, conveyor belts, and room sections.' },
  { icon: 'fas fa-clock', title: 'Real-time Processing', desc: 'Processes images or video streams in real-time, delivering up-to-date and precise data.' },
  { icon: 'fas fa-sliders-h', title: 'Customizable Models', desc: 'Train custom ML models on your visual data to count specific objects tailored to your business.' },
  { icon: 'fas fa-expand', title: 'Scalable Architecture', desc: 'Handles large data volumes while seamlessly integrating with other technologies.' },
  { icon: 'fas fa-chart-bar', title: 'Analytics Dashboard', desc: 'Comprehensive dashboards showing counts, trends, locations, and insights over time.' },
]

const useCases = [
  { icon: 'fas fa-warehouse', label: 'Warehouse & Inventory', color: '#2142B1' },
  { icon: 'fas fa-industry', label: 'Manufacturing QC', color: '#10b981' },
  { icon: 'fas fa-seedling', label: 'Agriculture', color: '#f59e0b' },
  { icon: 'fas fa-car', label: 'Traffic Analysis', color: '#ef4444' },
  { icon: 'fas fa-fish', label: 'Marine Science', color: '#8b5cf6' },
  { icon: 'fas fa-store', label: 'Retail Analytics', color: '#ec4899' },
]

export default function Counter() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.span variants={fadeUp} className="feature-tag">
                <i className="fas fa-calculator" /> Object Counting
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl text-white font-bold mb-5" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Count Every Object, <br />Every Time
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8">
                AI-powered object counting for inventory management, production lines, agriculture,
                and beyond — with real-time accuracy and analytics.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary-custom shadow-lg" style={{ backgroundColor: 'white', color: '#2142B1' }}>
                  <i className="fas fa-rocket" /> Request Trial
                </Link>
                <a href="#capabilities" className="btn-outline-custom">
                  See Capabilities
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src="/img/project-3.png" alt="Object Counter" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" style={{ height: '320px' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Overview</span>
              <h2 className="text-3xl font-bold mb-5" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                What is Object Counting?
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Object Counting combines computer vision and artificial intelligence to automatically detect,
                  recognize, and count objects in images or videos. It is essential for managing inventory and
                  improving warehouse operations.
                </p>
                <p>
                  By utilizing machine learning models for object detection, the system effortlessly identifies
                  standard or custom-trained items. Once detected, the AI system quickly counts objects and
                  provides crucial data including quantity and location of each item.
                </p>
                <p>
                  Our platform supports real-time video, batch image processing, and custom model training
                  for domain-specific counting tasks.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="about-img-wrap">
              <img src="/img/project-3.png" alt="Object Counting" />
            </motion.div>
          </FadeSection>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Key Capabilities
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                End-to-end object counting solutions designed for accuracy, speed, and scalability.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c) => (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all border border-gray-50 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                    <i className={`${c.icon} text-xl`} style={{ color: '#2142B1' }} />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">{c.title}</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Industry Use Cases
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {useCases.map((u) => (
                <motion.div
                  key={u.label}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center p-5 rounded-2xl bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: u.color + '20' }}
                  >
                    <i className={`${u.icon} text-2xl`} style={{ color: u.color }} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{u.label}</span>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            Ready to Count Smarter?
          </h2>
          <p className="text-white/80 mb-8">
            Get in touch to start your free trial or request a live demo.
          </p>
          <Link to="/contact" className="btn-outline-custom inline-flex">
            <i className="fas fa-envelope" /> Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
