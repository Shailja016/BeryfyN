import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ title, category, tags, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] glass-card mb-6 border-white/5 group-hover:border-brand-cyan/20">
      {/* Mockup Preview Placeholder */}
      <div className="absolute inset-0 bg-brand-navy/40 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
        <div className="w-4/5 h-4/5 bg-brand-midnight/40 rounded-3xl border border-white/5 flex items-center justify-center p-8 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,245,255,0.05),transparent)] pointer-events-none" />
           <div className="text-center relative z-10">
             <div className="text-5xl font-bold text-white mb-2 shadow-cyan-glow opacity-20">{title[0]}</div>
             <div className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/20">Beryfy Case Study</div>
           </div>
        </div>
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-brand-midnight/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-brand-cyan text-brand-midnight rounded-full flex items-center justify-center shadow-cyan-glow-lg hover:scale-110 transition-transform"
          >
            <ExternalLink size={24} />
          </a>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan">View Live</span>
        </div>
      </div>
    </div>

    <div className="px-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-ivory/40 mb-2 block">
            {category}
          </span>
          <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
            {title}
          </h3>
        </div>
        <button className="p-3 glass-card rounded-full group-hover:bg-brand-cyan group-hover:text-brand-midnight transition-all shadow-lg">
          <ArrowUpRight size={20} />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full text-brand-ivory/40">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Works = () => {
  const projects = [
    {
      title: "FinFlow Dashboard",
      category: "Web Application",
      tags: ["React", "D3.js", "Node.js"],
      link: "#"
    },
    {
      title: "Z-Shop E-commerce",
      category: "App Development",
      tags: ["Flutter", "Firebase", "Stripe"],
      link: "#"
    },
    {
      title: "Pulse Social Media",
      category: "Web Platform",
      tags: ["Next.js", "GraphQL", "Tailwind"],
      link: "#"
    },
    {
      title: "EcoTrack AI",
      category: "App Development",
      tags: ["React Native", "Python", "AWS"],
      link: "#"
    },
    {
      title: "Vibe Music Player",
      category: "UI/UX Design",
      tags: ["Figma", "Lottie", "Interaction"],
      link: "#"
    },
    {
      title: "Nexus Portfolio",
      category: "Web Development",
      tags: ["Astro", "GSAP", "Three.js"],
      link: "#"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 bg-brand-midnight"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/50 border border-white/5 text-xs font-medium text-brand-ivory/80 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-cyan-glow animate-pulse" />
              Portfolio
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Selected <span className="text-glow-cyan">Works</span></h1>
            <p className="text-lg md:text-xl text-brand-ivory/60 font-light max-w-lg">
              A collection of digital products we've crafted for <span className="text-brand-cyan font-medium">ambitious brands</span> across the globe.
            </p>
          </div>
          <div className="flex gap-4 p-2 glass-card rounded-full border-white/5">
            {["All Projects", "Web", "App"].map((tab, i) => (
              <button 
                key={tab}
                className={`px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${i === 0 ? 'bg-brand-cyan text-brand-midnight shadow-cyan-glow' : 'text-brand-ivory/40 hover:text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "120+" },
            { label: "Happy Clients", value: "85+" },
            { label: "Years Experience", value: "04+" },
            { label: "Coffee Consumed", value: "∞" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-7xl font-bold mb-4 text-white group-hover:text-glow-cyan transition-all duration-500">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/40 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Works
