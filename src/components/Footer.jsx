import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white/60 pt-14 pb-6" style={{ backgroundColor: '#1a1d1f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-white font-bold text-xl" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
                Aid<span className="text-blue-400">Vision</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              At our core, we&apos;re pioneering machine learning solutions. With innovative algorithms
              and a dedicated team, we&apos;re shaping the future of AI technology.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h5 className="text-white font-semibold text-base mb-5">Get In Touch</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-0.5 text-blue-400" />
                <span>NIT, Trichy</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone-alt mt-0.5 text-blue-400" />
                <span>+91 8765485696</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope mt-0.5 text-blue-400" />
                <a href="mailto:AIDVISIONML@GMAIL.COM" className="hover:text-white transition-colors">
                  AIDVISIONML@GMAIL.COM
                </a>
              </li>
            </ul>
            {/* Social */}
            <div className="flex mt-5 gap-2">
              <a href="mailto:AIDVISIONML@GMAIL.COM" className="social-btn" aria-label="Email">
                <i className="fas fa-envelope text-sm" />
              </a>
              <a
                href="https://www.google.com/maps/place/National+Institute+of+Technology+Tiruchirappalli"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Location"
              >
                <i className="fas fa-map-marker text-sm" />
              </a>
              <a
                href="https://www.instagram.com/sameer_ahamath/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/sameer-ahamath-1b61b525b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h5 className="text-white font-semibold text-base mb-5">Our Products</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/counter" className="footer-link hover:pl-1 transition-all">
                  <i className="fas fa-arrow-right text-xs mr-2 text-blue-400" />
                  Object Counting
                </Link>
              </li>
              <li>
                <Link to="/annotation" className="footer-link hover:pl-1 transition-all">
                  <i className="fas fa-arrow-right text-xs mr-2 text-blue-400" />
                  Object Annotation
                </Link>
              </li>
              <li>
                <Link to="/realtime" className="footer-link hover:pl-1 transition-all">
                  <i className="fas fa-arrow-right text-xs mr-2 text-blue-400" />
                  Realtime Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold text-base mb-5">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link hover:pl-1 transition-all">
                  <i className="fas fa-arrow-right text-xs mr-2 text-blue-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link hover:pl-1 transition-all">
                  <i className="fas fa-arrow-right text-xs mr-2 text-blue-400" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">AID Vision</Link>
            . All Rights Reserved.
          </p>
          <p>
            Designed By <span className="text-white">Vision Team</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
