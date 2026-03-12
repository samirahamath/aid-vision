import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import VueMountWrapper from '../components/VueMountWrapper.jsx'
import ProductCarousel from '../vue/ProductCarousel.vue'
import StatsCounter from '../vue/StatsCounter.vue'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

function FadeSection({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const caseStudies = [
  { img: '/img/project-1.png', category: 'Manufacture', title: 'Defect Detection' },
  { img: '/img/animal.jpeg', category: 'Animal', title: 'Wildlife Monitoring' },
  { img: '/img/project-3.png', category: 'Agriculture', title: 'Crop Monitoring' },
]

const features = [
  { icon: 'fas fa-brain', title: 'AI-Powered Models', desc: 'State-of-the-art SAM and YOLO models for precise object detection and segmentation.' },
  { icon: 'fas fa-bolt', title: '15× Faster Annotation', desc: 'Auto-annotation speeds up your data labeling pipeline dramatically.' },
  { icon: 'fas fa-video', title: 'Realtime Processing', desc: 'Process live video streams with low-latency, high-accuracy detection.' },
  { icon: 'fas fa-expand-arrows-alt', title: 'Scalable Platform', desc: 'Handles large volumes of data and integrates seamlessly with any workflow.' },
  { icon: 'fas fa-cogs', title: 'Custom Training', desc: 'Train custom models on your own dataset for domain-specific needs.' },
  { icon: 'fas fa-shield-alt', title: 'Enterprise Ready', desc: 'Secure, reliable infrastructure designed for production deployments.' },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20"
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl -z-0" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp} className="inline-flex">
                <span className="feature-tag">
                  <i className="fas fa-eye" /> AID Vision Platform
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6"
                style={{ fontFamily: 'Ubuntu, sans-serif' }}
              >
                AI-Powered Computer Vision Platform
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                Accelerate your data annotation process <strong className="text-white">15× faster</strong> with
                auto-annotation tools and improve quality through collaborative workflows and SAM models.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/annotation" className="btn-primary-custom shadow-lg shadow-blue-900/30">
                  <i className="fas fa-play-circle" /> Explore Now
                </Link>
                <Link to="/contact" className="btn-outline-custom">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/img/hero-img.png"
                alt="AI Vision Hero"
                className="w-full max-w-lg drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter (Vue) ───────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <VueMountWrapper vueComponent={StatsCounter} className="w-full" />
        </div>
      </section>

      {/* ── Product Carousel (Vue) ────────────────────────────── */}
      <section className="bg-light py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-6xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Explore Our Products
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Cutting-edge AI tools for object annotation, counting, and realtime analysis.
              </p>
            </motion.div>
          </FadeSection>
          <VueMountWrapper vueComponent={ProductCarousel} className="w-full" />
        </div>
      </section>

      {/* ── Object Annotation Section ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="about-img-wrap">
              <img src="/img/anno.jpg" alt="Object Annotation" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Product</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Object Annotation
              </h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
                <p>
                  Object annotation involves labeling objects within images or video frames to provide information
                  about their identity, location, and attributes. Key components include bounding boxes, labels,
                  attributes, and key points.
                </p>
                <p>
                  The process covers collecting images, detecting objects, drawing bounding boxes, labeling,
                  adding attributes, quality control, and saving in XML, JSON, or CSV formats.
                  Our SAM-powered auto-annotation reduces manual effort by up to <strong>15×</strong>.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {['LabelImg', 'CVAT', 'SAM Models', 'YOLO'].map(tag => (
                  <span key={tag} className="text-xs bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/annotation" className="btn-primary-custom inline-flex">
                <i className="fas fa-arrow-right" /> Try Annotation
              </Link>
            </motion.div>
          </FadeSection>
        </div>
      </section>

      {/* ── Object Counting Section ───────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="order-2 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Product</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Object Counting
              </h2>
              <div className="space-y-3 text-gray-600 text-sm leading-relaxed mb-6">
                <p>
                  Object Counting is essential for managing inventory and improving warehouse operations,
                  combining computer vision and AI algorithms to automatically detect, recognize, and count
                  objects in images or videos.
                </p>
                <p>
                  By utilizing ML models for object detection, the system effortlessly identifies standard or
                  custom-trained items, providing quantity and location data for each detected item in real-time.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Inventory Mgmt', 'Deep Learning', 'Real-time', 'Custom Models'].map(tag => (
                  <span key={tag} className="text-xs bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to="/counter" className="btn-primary-custom inline-flex">
                <i className="fas fa-arrow-right" /> Try Counter
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 lg:order-2 about-img-wrap">
              <img src="/img/project-3.png" alt="Object Counting" />
            </motion.div>
          </FadeSection>
        </div>
      </section>

      {/* ── Features Grid ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Why Choose AID Vision?
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Built for speed, accuracy, and scale — every feature is designed to empower your ML pipeline.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeUp} className="service-card group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#EEF2FF' }}
                  >
                    <i className={`${f.icon} text-2xl`} style={{ color: '#2142B1' }} />
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-white">{f.title}</h5>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/90">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── Case Studies ──────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Explore Case Studies
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((c) => (
                <motion.div key={c.title} variants={fadeUp} className="case-card">
                  <img src={c.img} alt={c.title} />
                  <div className="case-overlay">
                    <small className="text-white/80 text-xs font-semibold uppercase tracking-widest">{c.category}</small>
                    <h5 className="text-white text-lg font-bold leading-snug mt-1 mb-3">{c.title}</h5>
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: '#2142B1' }}
                    >
                      <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="hero-gradient py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Ready to Accelerate Your CV Pipeline?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how AID Vision transforms your data annotation and object detection workflow.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/annotation" className="btn-primary-custom bg-white text-blue-700 hover:bg-blue-50" style={{ backgroundColor: 'white', color: '#2142B1' }}>
                <i className="fas fa-rocket" /> Get Started Free
              </Link>
              <Link to="/contact" className="btn-outline-custom">
                Talk to Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
