import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Rocket, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-brand-midnight">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-brand-cyan/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-brand-lavender/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/50 border border-white/5 text-xs font-medium text-brand-ivory/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-cyan-glow animate-pulse" />
            Empowering Gen-Z Startups
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
            BUILD BEYOND <br /> 
            <span className="text-gradient-triple text-glow-cyan uppercase">Limits</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-ivory/60 mb-10 max-w-lg font-light leading-relaxed">
            Premium Web & App development for ambitious startups. We turn creative visions into <span className="text-brand-cyan font-medium">high-performance digital realities</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="btn-electric !px-10 !py-4 text-lg flex items-center justify-center gap-2 group shadow-cyan-glow">
              Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/works" className="px-10 py-4 bg-brand-navy/50 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-brand-navy transition-all flex items-center justify-center gap-2">
              View Our Work
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10 glass-card rounded-[3rem] p-4 overflow-hidden shadow-2xl border-white/5">
            <div className="bg-brand-midnight rounded-[2.5rem] p-8 aspect-[4/3] relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,217,255,0.05),transparent)] pointer-events-none" />
              
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>

              <div className="space-y-6">
                <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-brand-cyan/5 rounded-2xl border border-brand-cyan/10" />
                  <div className="h-20 bg-brand-lavender/5 rounded-2xl border border-brand-lavender/10" />
                  <div className="h-20 bg-white/5 rounded-2xl border border-white/5" />
                </div>
                <div className="h-4 w-2/3 bg-brand-cyan/10 rounded-full" />
              </div>

              <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-ivory/40">Success Rate</div>
                </div>
                <div className="w-12 h-12 bg-gradient-electric text-brand-midnight rounded-full flex items-center justify-center shadow-cyan-glow">
                  <Zap size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-24 h-24 glass-card rounded-3xl flex items-center justify-center shadow-2xl border-brand-cyan/20"
          >
            <Code className="text-brand-cyan shadow-cyan-glow" size={32} />
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -bottom-10 -left-10 w-24 h-24 glass-card rounded-3xl flex items-center justify-center shadow-2xl border-brand-lavender/20"
          >
            <Rocket className="text-brand-lavender" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, responsive websites built with modern frameworks for ultimate scalability.",
      icon: <Code size={32} />,
      tags: ["React", "Next.js", "Tailwind"],
      gradient: "text-gradient-cyber"
    },
    {
      title: "App Development",
      description: "Native & cross-platform mobile apps with smooth UX and robust backend architectures.",
      icon: <Zap size={32} />,
      tags: ["Flutter", "React Native", "Node.js"],
      gradient: "text-gradient-lavender"
    },
    {
      title: "UI/UX Design",
      description: "Creative & functional designs that prioritize user engagement and startup aesthetics.",
      icon: <Rocket size={32} />,
      tags: ["Figma", "Interaction", "Prototyping"],
      gradient: "text-gradient-triple"
    }
  ]

  return (
    <section className="py-32 px-6 bg-brand-midnight">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Our <span className="text-gradient-triple uppercase">Services</span></h2>
          <p className="text-brand-ivory/40 max-w-2xl mx-auto font-light">
            We provide end-to-end tech solutions tailored for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2.5rem] group hover:border-brand-cyan/20"
            >
              <div className="w-16 h-16 bg-brand-cyan/10 text-brand-cyan rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-brand-cyan group-hover:text-brand-midnight shadow-lg">
                {service.icon}
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${service.gradient}`}>{service.title}</h3>
              <p className="text-brand-ivory/60 mb-8 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-ivory/40">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ServicesSection />
    </motion.div>
  )
}

export default Home
