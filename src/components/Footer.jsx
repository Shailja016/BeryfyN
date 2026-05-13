import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Glassmorphism Background matching rgba(34, 56, 80, 0.6) and 20px blur */}
      <div 
        className="absolute inset-0 -z-10 backdrop-blur-[20px] border-t border-[#00D9FF]/10" 
        style={{ backgroundColor: 'rgba(34, 56, 80, 0.6)' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-8 group">
              <Link to="/" className="flex items-center gap-3">
                {/* Logo: 40x40px rounded square, Gradient #00D9FF -> #B794F6 */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#00D9FF] to-[#B794F6] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 shadow-cyan-glow">
                  <span className="text-[#0A0F1A] font-bold text-lg">{`>_`}</span>
                </div>
                {/* Brand Name: Triple gradient #00D9FF -> #0FF -> #B794F6 */}
                <span className="text-2xl font-bold tracking-tighter text-gradient-triple uppercase" style={{ fontFamily: 'Clash Display, sans-serif' }}>
                  BERYFY
                </span>
              </Link>
            </div>
            
            <p className="text-[#8B9CB8] max-w-sm mb-8 font-light leading-relaxed text-sm">
              Building next-generation digital experiences for bold brands and ambitious startups.
            </p>
            
            {/* Status Badge: Pulsing cyan dot with neon glow */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75 shadow-[0_0_10px_rgba(0,217,255,0.8)]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF] shadow-[0_0_5px_rgba(0,217,255,0.8)]"></span>
              </div>
              <span className="text-xs font-medium text-[#8B9CB8]">Available for projects</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a href="https://www.instagram.com/beryfy_tech/" target="_blank" rel="noopener noreferrer" className="text-[#8B9CB8] hover:text-[#00D9FF] transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/109017236/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-[#8B9CB8] hover:text-[#00D9FF] transition-colors">
                LinkedIn
              </a>
              <a href="mailto:beryfy2@gmail.com" className="text-[#8B9CB8] hover:text-[#00D9FF] transition-colors">
                Email
              </a>
            </div>
          </div>

          {/* Navigate Column */}
          <div className="md:col-span-3">
            <h4 className="text-[#00D9FF] text-lg font-semibold mb-8">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Works', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-[#8B9CB8] hover:text-[#00D9FF] transition-all duration-300 font-light text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3">
            <h4 className="text-[#00D9FF] text-lg font-semibold mb-8">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', label: 'Web' },
                { name: 'App Development', label: 'App' },
                { name: 'UI/UX Design', label: 'UI/UX' },
                { name: 'Consulting', label: 'Consulting' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to="/services" 
                    className="text-[#8B9CB8] hover:text-[#00D9FF] transition-all duration-300 font-light text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#8B9CB8] font-light">
          <p>© {new Date().getFullYear()} Beryfy. Crafted with code & creativity.</p>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full glass-card border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            <span>Made in India <span className="ml-1 opacity-50">🇮🇳</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
