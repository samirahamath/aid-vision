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

const caseStudies = [
  {
    img: '/img/project-1.png',
    category: 'Manufacturing',
    title: 'Defect Detection',
    desc: 'Real-time visual inspection of production lines to catch defects with >99% accuracy.',
  },
  {
    img: '/img/animal.jpeg',
    category: 'Wildlife',
    title: 'Animal Monitoring',
    desc: 'Automated wildlife monitoring across vast terrains using camera traps and AI models.',
  },
  {
    img: '/img/project-3.png',
    category: 'Agriculture',
    title: 'Crop Monitoring',
    desc: 'Drone-based crop counting, disease detection, and yield estimation for precision farming.',
  },
  {
    img: '/img/marine.png',
    category: 'Marine',
    title: 'Ocean Analytics',
    desc: 'Underwater object classification and marine species tracking using deep-sea cameras.',
  },
  {
    img: '/img/fash.jpeg',
    category: 'Retail',
    title: 'Fashion & Apparel',
    desc: 'Visual search and recommendation engines powered by product attribute recognition.',
  },
  {
    img: '/img/cons.jpeg',
    category: 'Construction',
    title: 'Site Safety Monitoring',
    desc: 'PPE compliance detection and worker safety monitoring on construction sites.',
  },
]

const pipeline = [
  { step: '01', title: 'Capture', desc: 'Connect cameras, drones, or upload images/videos.' },
  { step: '02', title: 'Detect', desc: 'AI models identify and locate all objects in each frame.' },
  { step: '03', title: 'Analyse', desc: 'Aggregate results, generate insights, and flag anomalies.' },
  { step: '04', title: 'Report', desc: 'Export dashboards, alerts, and structured data to your systems.' },
]

export default function Realtime() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.span variants={fadeUp} className="feature-tag">
                <i className="fas fa-video" /> Realtime Applications
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl text-white font-bold mb-5" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Realtime Computer Vision Applications
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8">
                Deploy high-performance AI vision systems across industries — from manufacturing floors
                to marine environments — with sub-second latency.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary-custom shadow-lg" style={{ backgroundColor: 'white', color: '#2142B1' }}>
                  <i className="fas fa-phone-alt" /> Request Demo
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src="/img/hero-img.png" alt="Realtime AI" className="w-full max-w-md drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Explore Case Studies
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Real-world deployments across diverse industries demonstrating the power of our platform.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="case-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <img src={c.img} alt={c.title} className="w-full h-52 object-cover" />
                  <div className="p-6 bg-white">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">{c.category}</span>
                    <h5 className="font-bold text-gray-800 text-lg mt-1 mb-2">{c.title}</h5>
                    <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-14">
              <h2 className="text-3xl font-bold" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                How It Works
              </h2>
            </motion.div>
            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-200 z-0" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {pipeline.map((p) => (
                  <motion.div key={p.step} variants={fadeUp} className="flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg"
                      style={{ backgroundColor: '#2142B1' }}
                    >
                      {p.step}
                    </div>
                    <h5 className="font-bold text-gray-800 mb-2">{p.title}</h5>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Pub / Real-World Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp} className="about-img-wrap">
              <img src="/img/pub.jpeg" alt="Realtime CV" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Live Deployment</span>
              <h2 className="text-3xl font-bold mb-5" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Deploy in Any Environment
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm">
                {[
                  'Cloud, edge, or on-premise deployment options',
                  'REST API & SDK for seamless integration',
                  'RTSP / RTMP video stream support',
                  'Horizontal scaling for high-throughput workloads',
                  'Dashboard alerts and automated reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <i className="fas fa-check-circle mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
            See It Running Live
          </h2>
          <p className="text-white/80 mb-8">
            Schedule a live demonstration with our team and see the platform in action.
          </p>
          <Link to="/contact" className="btn-outline-custom inline-flex">
            <i className="fas fa-calendar-alt" /> Book a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
