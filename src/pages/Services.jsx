import React from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Smartphone,
  Palette,
  CheckCircle2,
  ArrowRight,
  Rocket,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Web Development',
    description:
      'Build stunning, high-performance websites that convert and scale.',
    icon: Globe,
    gradient: 'text-gradient-triple',
    button: 'bg-brand-cyan text-black',
    accent: 'text-brand-cyan',
    tags: ['Responsive', 'Fast', 'Modern'],
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Lightning Fast',
      'Custom CMS',
      'E-commerce Ready',
      'Analytics',
    ],
  },

  {
    title: 'App Development',
    description:
      'Native-quality mobile apps for iOS & Android with blazing-fast performance.',
    icon: Smartphone,
    gradient: 'text-gradient-lavender',
    button: 'bg-gradient-to-r from-violet-400 to-fuchsia-500 text-white',
    accent: 'text-violet-400',
    tags: ['Cross-Platform', 'Scalable', 'Fast'],
    features: [
      'Cross-Platform',
      'Push Notifications',
      'Offline Mode',
      'App Store Ready',
      'Secure Auth',
      'Real-time Sync',
    ],
  },

  {
    title: 'UI/UX Design',
    description:
      'Modern interfaces crafted for engagement, usability, and conversion.',
    icon: Palette,
    gradient: 'text-gradient-cyber',
    button: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black',
    accent: 'text-cyan-400',
    tags: ['Creative', 'Modern', 'Minimal'],
    features: [
      'Wireframing',
      'User Research',
      'Interactive Prototypes',
      'Design Systems',
      'Micro Interactions',
      'Mobile First',
    ],
  },
]

const techStack = [
  {
    title: 'Frontend',
    value: 'React',
    color: 'text-brand-cyan',
  },
  {
    title: 'Framework',
    value: 'Next.js',
    color: 'text-white',
  },
  {
    title: 'Mobile',
    value: 'React Native',
    color: 'text-violet-400',
  },
  {
    title: 'Backend',
    value: 'Node.js',
    color: 'text-brand-cyan',
  },
  {
    title: 'Database',
    value: 'PostgreSQL',
    color: 'text-white',
  },
  {
    title: 'Cloud',
    value: 'AWS',
    color: 'text-violet-400',
  },
]

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-midnight overflow-hidden"
    >
      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.08),transparent_45%)]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-brand-cyan/20 bg-brand-navy/40 mb-8">
            <Rocket size={16} className="text-brand-cyan" />

            <span className="text-brand-ivory/70">
              What we do best
            </span>
          </div>

          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] flex flex-col items-center">
            <span className="-translate-x-8 md:-translate-x-16">OUR</span>
            <span className="text-gradient-triple text-glow-cyan translate-x-8 md:translate-x-0">SERVICES</span>
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-brand-ivory/50 font-light">
            Transforming ideas into digital experiences that{' '}
            <span className="text-brand-cyan">
              scale
            </span>
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[2.5rem] border border-brand-cyan/10 bg-gradient-to-br from-[#132238] via-[#101827] to-[#0a1120] p-8 md:p-10 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.06),transparent_40%)]" />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* LEFT CONTENT */}
                  <div
                    className={`${
                      index % 2 !== 0
                        ? 'lg:order-2'
                        : ''
                    }`}
                  >
                    <div className="w-20 h-20 rounded-[1.7rem] bg-white/5 flex items-center justify-center mb-8">
                      <Icon
                        size={40}
                        className={service.accent}
                      />
                    </div>

                    <h2
                      className={`text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-6 ${service.gradient}`}
                    >
                      {service.title}
                    </h2>

                    <p className="text-lg text-brand-ivory/50 leading-relaxed mb-8 max-w-xl">
                      {service.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {service.tags.map((tag) => (
                        <div
                          key={tag}
                          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-sm flex items-center gap-2"
                        >
                          <CheckCircle2
                            size={15}
                            className={service.accent}
                          />

                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 ${service.button}`}
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  {/* FEATURES */}
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                      index % 2 !== 0
                        ? 'lg:order-1'
                        : ''
                    }`}
                  >
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-[1.4rem] border border-brand-cyan/10 bg-white/[0.03] px-5 py-5 flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className={service.accent}
                        />

                        <span className="text-base text-brand-ivory/60">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative px-6 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.06),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-5 flex flex-col items-center">
              <span className="-translate-x-4 md:-translate-x-0">Tech</span>
              <span className="text-gradient-triple translate-x-4 md:translate-x-0">Stack</span>
            </h2>

            <p className="text-lg text-brand-ivory/50">
              Modern, battle-tested technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {techStack.map((tech) => (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                key={tech.title}
                className="rounded-[1.8rem] border border-brand-cyan/10 bg-gradient-to-b from-[#132238] to-[#0c1422] p-6 text-center"
              >
                <p className={`text-sm mb-4 ${tech.color}`}>
                  {tech.title}
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {tech.value}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] border border-brand-cyan/10 bg-gradient-to-br from-[#132238] via-[#101827] to-[#0a1120] py-20 px-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,217,255,0.06),transparent_40%)]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 flex flex-col items-center">
                <span className="-translate-x-6 md:-translate-x-0">Let’s Build</span>
                <span className="translate-x-6 md:translate-x-0">Something Epic</span>
              </h2>

              <p className="text-lg text-brand-ivory/50 mb-10">
                Ready to bring your project to life?
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-cyan text-black text-lg font-bold shadow-cyan-glow hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services