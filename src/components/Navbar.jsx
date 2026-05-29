import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/beryfy_logo.svg'

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Works', path: '/works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0F1A]/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-0 group"
        >
        <img
          src={logo}
          alt="Beryfy Logo"
          className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:rotate-45"
          />

          <span
            className="text-2xl md:text-3xl font-black tracking-tight text-gradient-triple"
            style={{
              fontFamily: 'Clash Display, sans-serif',
            }}
          >
            Beryfy
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-brand-cyan'
                  : 'text-brand-ivory/60 hover:text-white'
              }`}
            >
              {link.name}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-0 -bottom-2 h-[2px] w-full bg-brand-cyan shadow-cyan-glow"
                />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center bg-[#00F0FF] text-[#0A0F1A] px-7 py-3 rounded-full text-sm font-bold shadow-[0_0_25px_rgba(0,255,255,0.45)] hover:shadow-[0_0_35px_rgba(0,255,255,0.75)] hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0F1A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-cyan'
                      : 'text-brand-ivory/60'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#00F0FF] text-[#0A0F1A] text-center py-4 rounded-2xl font-bold shadow-[0_0_25px_rgba(0,255,255,0.45)]"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar