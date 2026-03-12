import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link-item px-2 py-1 ${isActive ? 'text-white' : ''}`

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-secondary shadow-xl py-2' : 'bg-transparent py-4'
      }`}
      style={{ backgroundColor: scrolled ? '#292c2e' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[60px]">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="text-white font-bold text-xl font-ubuntu tracking-tight group-hover:opacity-90 transition"
            style={{ fontFamily: 'Ubuntu, sans-serif' }}
          >
            Aid<span className="text-blue-400">Vision</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="nav-link-item flex items-center gap-1 focus:outline-none">
              Product
              <i className="fas fa-chevron-down text-xs mt-0.5 transition-transform duration-300"
                style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl overflow-hidden"
                >
                  <Link
                    to="/counter"
                    className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fas fa-calculator text-blue-500" />
                    Object Counting
                  </Link>
                  <Link
                    to="/annotation"
                    className="flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors text-sm font-medium"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <i className="fas fa-tag text-blue-500" />
                    Object Annotation
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/realtime" className={linkClass}>
            Realtime Application
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>

          <Link
            to="/contact"
            className="ml-2 bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: '#292c2e' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <NavLink to="/" className="nav-link-item py-2 border-b border-white/10" end onClick={() => setMobileOpen(false)}>Home</NavLink>
              <NavLink to="/counter" className="nav-link-item py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>Object Counting</NavLink>
              <NavLink to="/annotation" className="nav-link-item py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>Object Annotation</NavLink>
              <NavLink to="/realtime" className="nav-link-item py-2 border-b border-white/10" onClick={() => setMobileOpen(false)}>Realtime Application</NavLink>
              <NavLink to="/contact" className="nav-link-item py-2" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
