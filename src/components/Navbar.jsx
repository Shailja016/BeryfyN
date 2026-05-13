import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0F1A]/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo matching the picture: circular gradient + terminal icon */}
          <div className="w-10 h-10 bg-gradient-to-br from-[#00D9FF] to-[#B794F6] rounded-full flex items-center justify-center transition-transform group-hover:rotate-12 shadow-[0_0_15px_rgba(0,217,255,0.3)]">
            <span className="text-[#0A0F1A] font-bold text-lg">{`>_`}</span>
          </div>
          {/* Brand Name with gradient matching the picture */}
          <span className="text-2xl font-bold tracking-tighter text-gradient-triple uppercase" style={{ fontFamily: 'Clash Display, sans-serif' }}>
            BERYFY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm font-medium ${location.pathname === link.path ? 'nav-link-active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Let's Talk button matching the picture: pill shape + intense cyan glow */}
          <Link to="/contact" className="hidden md:block bg-[#00FFFF] text-[#0A0F1A] px-8 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all hover:scale-105 active:scale-95">
            Let's Talk
          </Link>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0F1A] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium ${location.pathname === link.path ? 'text-[#00D9FF]' : 'text-[#8B9CB8]'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#00FFFF] text-[#0A0F1A] text-center py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(0,255,255,0.4)]"
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
