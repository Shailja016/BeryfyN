import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Palette, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, techStack }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card rounded-[2.5rem] p-10 flex flex-col h-full border-white/5 hover:border-brand-cyan/20 transition-all duration-500"
  >
    <div className="w-16 h-16 bg-brand-cyan/10 text-brand-cyan rounded-2xl flex items-center justify-center mb-8 shadow-lg">
      <Icon size={32} />
    </div>
    <h3 className="text-3xl font-bold mb-6">{title}</h3>
    <p className="text-lg text-brand-ivory/60 mb-8 leading-relaxed font-light">
      {description}
    </p>
    
    <div className="mt-auto">
      <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
        <ShieldCheck size={18} className="text-brand-cyan" />
        Key Features
      </h4>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-brand-ivory/50 font-light">
            <div className="w-1 h-1 rounded-full bg-brand-cyan shadow-cyan-glow" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="pt-6 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-ivory/40">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "From minimalist landing pages to complex platforms, we build web experiences that convert and scale.",
      features: ["SEO-Optimized", "Responsive Design", "Headless CMS", "Real-time Data"],
      techStack: ["React", "Next.js", "Node.js", "Tailwind"]
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "High-performance mobile applications with seamless user interfaces and robust functionality.",
      features: ["Smooth Animations", "Offline-first", "Push Notifications", "Secure Payments"],
      techStack: ["Flutter", "React Native", "Firebase", "GraphQL"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Aesthetics meet functionality. We design digital products that are not just beautiful but intuitive.",
      features: ["User Research", "Interactive Prototypes", "Design Systems", "Micro-interactions"],
      techStack: ["Figma", "Adobe Suite", "Framer", "Lottie"]
    },
    {
      icon: Zap,
      title: "Tech Consulting",
      description: "Strategic guidance for startups to choose the right tech stack and build scalable roadmaps.",
      features: ["Architecture Audits", "Cloud Setup", "Security Practices", "Workflow Optimization"],
      techStack: ["AWS", "Google Cloud", "Docker", "CI/CD"]
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
        <div className="text-center mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/50 border border-white/5 text-xs font-medium text-brand-ivory/80 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-cyan-glow animate-pulse" />
            Our Expertise
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            Digital <span className="text-glow-cyan">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-ivory/60 max-w-2xl mx-auto font-light"
          >
            We leverage cutting-edge technology to build products that define the <span className="text-brand-cyan font-medium">next generation</span> of digital excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Services
