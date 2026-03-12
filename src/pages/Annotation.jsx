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

const features = [
  { icon: 'fas fa-tag', title: 'Bounding Boxes', desc: 'Draw tight bounding boxes around objects with pixel-level accuracy.' },
  { icon: 'fas fa-pencil-ruler', title: 'Polygon Segmentation', desc: 'Create precise polygon masks for complex irregular shapes.' },
  { icon: 'fas fa-magic', title: 'Auto-Annotation (SAM)', desc: 'Use Segment Anything Model to auto-label objects in one click.' },
  { icon: 'fas fa-users', title: 'Collaborative Workflow', desc: 'Invite team members, assign tasks, and review annotations together.' },
  { icon: 'fas fa-file-export', title: 'Export Formats', desc: 'Export to YOLO, COCO, Pascal VOC, JSON, CSV, and more.' },
  { icon: 'fas fa-check-circle', title: 'Quality Control', desc: 'Built-in review and validation tools to maintain annotation quality.' },
]

const industries = [
  { img: '/img/project-1.png', label: 'Manufacturing', desc: 'Defect detection on production lines.' },
  { img: '/img/marine.png', label: 'Marine', desc: 'Underwater species identification and monitoring.' },
  { img: '/img/annotation.png', label: 'Healthcare', desc: 'Medical image segmentation and analysis.' },
]

export default function Annotation() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-20 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-white blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center lg:text-left">
              <motion.span variants={fadeUp} className="feature-tag">
                <i className="fas fa-tag" /> Object Annotation
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl text-white font-bold mb-5" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Annotate Smarter, <br />Not Harder
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/80 text-lg leading-relaxed mb-8">
                Speed up your annotation pipeline <strong className="text-white">15× faster</strong> with SAM-powered auto-labeling,
                collaborative workflows, and multi-format export.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#features" className="btn-primary-custom shadow-lg">
                  <i className="fas fa-play-circle" /> Start Free Trial
                </a>
                <Link to="/contact" className="btn-outline-custom">
                  Request Demo
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <img src="/img/anno.jpg" alt="Annotation Interface" className="rounded-2xl shadow-2xl w-full max-w-md object-cover" style={{ height: '320px' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Annotation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div variants={fadeUp} className="about-img-wrap">
              <img src="/img/annotation.png" alt="Object Annotation Visual" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3 block">Overview</span>
              <h2 className="text-3xl font-bold mb-5" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                What is Object Annotation?
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Object annotation involves labeling objects within images or video frames to provide structured
                  information about their identity, location, and attributes. It is the foundation of every
                  supervised machine learning model in computer vision.
                </p>
                <p>
                  Key components include <strong>objects</strong>, <strong>bounding boxes</strong>, <strong>labels</strong>,
                  <strong>attributes</strong>, and <strong>key points</strong>. The process covers collecting images,
                  detecting objects, drawing boxes, labeling, adding attributes, quality checks, and exporting
                  to formats like XML, JSON, or CSV.
                </p>
                <p>
                  Object annotation is crucial in autonomous driving, healthcare imaging, retail inventory,
                  and precision agriculture.
                </p>
              </div>
            </motion.div>
          </FadeSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20" style={{ backgroundColor: '#F4F7FE' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Annotation Features
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Everything you need to build high-quality labeled datasets at scale.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeUp}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-gray-50 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                    <i className={`${f.icon} text-xl`} style={{ color: '#2142B1' }} />
                  </div>
                  <h5 className="font-semibold text-gray-800 mb-2">{f.title}</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeSection>
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ color: '#14183E', fontFamily: 'Ubuntu, sans-serif' }}>
                Industry Applications
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industries.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <img src={item.img} alt={item.label} className="w-full h-48 object-cover" />
                  <div className="bg-white p-5">
                    <h5 className="font-bold text-gray-800 mb-1">{item.label}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
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
            Start Annotating Today
          </h2>
          <p className="text-white/80 mb-8">Try our annotation platform free — no credit card required.</p>
          <Link to="/contact" className="btn-outline-custom inline-flex">
            <i className="fas fa-envelope" /> Contact Us to Start
          </Link>
        </div>
      </section>
    </div>
  )
}
