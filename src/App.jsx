import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Works from './pages/Works'
import About from './pages/About'
import Contact from './pages/Contact'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark bg-brand-navy' : 'bg-brand-buttercream'}`}>
        <div className="cursor-glow" />
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
