import React from 'react'
import { motion } from 'framer-motion'
import { Target, Zap, Heart, Award, MapPin } from 'lucide-react'

const TeamMember = ({ name, role, bio }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="glass-card p-10 rounded-[3rem] border-white/5 hover:border-brand-cyan/20 transition-all duration-500 group"
  >
    <div className="w-24 h-24 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full mb-8 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-cyan-glow transition-all">
      <div className="w-full h-full bg-brand-midnight/40 flex items-center justify-center text-4xl font-bold text-brand-cyan opacity-40 group-hover:opacity-100 transition-opacity">
        {name[0]}
      </div>
    </div>
    <h3 className="text-3xl font-bold mb-2 text-white">{name}</h3>
    <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-6">{role}</p>
    <p className="text-brand-ivory/60 leading-relaxed text-sm font-light">
      {bio}
    </p>
  </motion.div>
)

const About = () => {
  const team = [
    {
      name: "Shailja Shukla",
      role: "Creative Director",
      bio: "Visionary behind Beryfy, ensuring every project meets the highest standards of modern design and startup excellence."
    },
    {
      name: "Ankit Kumar",
      role: "Founder & Lead Developer ",
      bio: "Expert in building scalable architectures and high-performance applications that drive business growth."
    },
    {
      name: "Khyati Mathpal",
      role: "UX Strategist",
      bio: "Dedicated to crafting intuitive user journeys and digital experiences that resonate with the next generation."
    }
  ]

  const values = [
    { icon: Target, title: "Mission Driven", text: "We're on a mission to empower startups with technology that matters." },
    { icon: Zap, title: "Innovation First", text: "Always staying ahead of the curve with the latest tech and design trends." },
    { icon: Heart, title: "Client Focused", text: "Your success is our success. We build relationships, not just products." }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 pb-20 bg-brand-midnight"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/50 border border-white/5 text-xs font-medium text-brand-ivory/80 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-cyan-glow animate-pulse" />
              Our Story
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
              <span className="inline-block -translate-x-2 md:-translate-x-4">Who We</span>
              <span className="text-glow-cyan inline-block translate-x-2 md:translate-x-4 ml-4">Are</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ivory/60 leading-relaxed mb-12 font-light">
              Beryfy is a modern tech brand founded on the principles of <span className="text-brand-cyan font-medium">innovation, creativity, and technical excellence</span>. Based in India, we've grown into a premium partner for startups globally.
            </p>
            <div className="space-y-8">
              {values.map((value, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 glass-card rounded-2xl text-brand-cyan group-hover:shadow-cyan-glow transition-all">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">{value.title}</h4>
                    <p className="text-brand-ivory/40 font-light">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass-card rounded-[4rem] p-16 flex flex-col justify-center items-center text-center relative overflow-hidden border-white/5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,255,0.05),transparent)] pointer-events-none" />
              <Award size={80} className="text-brand-cyan mb-8 shadow-cyan-glow" />
              <h3 className="text-4xl font-bold mb-4 text-white">India's Rising <br /> Tech Force</h3>
              <p className="text-brand-ivory/40 font-light max-w-xs">
                Delivering global standards from the heart of digital innovation.
              </p>
              <div className="mt-8 flex items-center gap-2 px-4 py-2 glass-card rounded-full border-brand-cyan/20">
                <MapPin size={16} className="text-brand-cyan" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Proudly Indian</span>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />
          </div>
        </div>

        {/* Founder's Note - Dashboard Style */}
        <div className="mb-40 glass-card bg-brand-navy/30 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border-white/5">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(0,245,255,0.05),transparent)] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-cyan mb-12">Founder's Vision</div>
            <p className="text-3xl md:text-5xl font-bold leading-[1.1] text-white mb-16 tracking-tight">
              "We believe that every startup deserves a digital presence that reflects their <span className="text-glow-cyan">ambition</span>. Beryfy was born to bridge the gap between creative vision and technical execution."
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-brand-cyan/10 border border-brand-cyan/20 rounded-full flex items-center justify-center font-bold text-2xl text-brand-cyan shadow-lg">S</div>
              <div>
                <h4 className="font-bold text-xl text-white">Shailja Shukla</h4>
                <p className="text-brand-ivory/40 text-[10px] font-bold uppercase tracking-widest mt-1">Founder, Beryfy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col items-center">
              <span className="-translate-x-4 md:-translate-x-8">The</span>
              <span className="text-glow-cyan translate-x-4 md:translate-x-8">Core Team</span>
            </h2>
            <p className="text-brand-ivory/40 max-w-2xl mx-auto font-light">
              Meet the creative minds behind your favorite digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <TeamMember key={i} {...member} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
