import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail, MessageSquare, Send, CheckCircle2, MapPin, Zap } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    service: '',
    requirements: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Formspree direct submission to beryfy2@gmail.com
      const response = await fetch("https://formspree.io/f/xeenndal", { 
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
        service: formData.service,
        message: formData.requirements,

  // Email Subject
        _subject: `${formData.fullName} sent a project inquiry`,

  // Reply directly to user's email
        _replyto: formData.email,
}),
      });

      if (response.ok) {
        setSubmitted(true)
        setFormData({ fullName: '', email: '', whatsapp: '', service: '', requirements: '' })
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    { 
      name: 'Instagram', 
      handle: '@beryfy_tech', 
      icon: Instagram, 
      link: 'https://www.instagram.com/beryfy_tech/', 
      gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]' 
    },
    { 
      name: 'LinkedIn', 
      handle: 'Beryfy Tech', 
      icon: Linkedin, 
      link: 'https://www.linkedin.com/company/109017236/admin/dashboard/', 
      gradient: 'from-[#0077b5] to-[#00a0dc]' 
    },
    { 
      name: 'Email', 
      handle: 'beryfy2@gmail.com', 
      icon: Mail, 
      link: 'mailto:beryfy2@gmail.com', 
      gradient: 'from-[#00D9FF] to-[#00FFFF]' 
    },
    { 
      name: 'WhatsApp', 
      handle: '+91 7499 023 473', 
      icon: MessageSquare, 
      link: 'https://wa.me/917499023473', 
      gradient: 'from-[#25d366] to-[#128c7e]' 
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
            Let's talk
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] flex flex-col items-center text-white"
          >
            <span className="-translate-x-4 md:-translate-x-0">GET IN</span>
            <span className="text-gradient-triple text-glow-cyan uppercase translate-x-8 md:translate-x-0">TOUCH</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-ivory/60 font-light"
          >
            Have a project in mind? Let's <span className="text-brand-cyan font-medium">build it together</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
              className="glass-card p-6 rounded-[2rem] flex items-center gap-5 group hover:border-brand-cyan/30"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${social.gradient} text-white transition-all group-hover:scale-110 shadow-lg`}>
                <social.icon size={28} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-ivory/40 mb-1">{social.name}</p>
                <p className="font-bold text-white group-hover:text-brand-cyan transition-colors truncate max-w-[150px]">{social.handle}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 flex flex-col items-center text-white">
              <span>Start a</span>
              <span className="text-gradient-triple uppercase -translate-x-15">Project</span>
            </h2>
            <p className="text-brand-ivory/40 text-center">Fill out the form and we'll respond within 24 hours</p>
          </div>

          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border-white/5 shadow-2xl"
          >
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-brand-cyan/10 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-cyan-glow">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-brand-ivory/60">We'll get back to you shortly. Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90 ml-2">Full Name <span className="text-brand-cyan">*</span></label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-midnight border border-white/5 focus:border-brand-cyan/50 outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90 ml-2">Email Address <span className="text-brand-cyan">*</span></label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-midnight border border-white/5 focus:border-brand-cyan/50 outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90 ml-2">WhatsApp Number <span className="text-brand-cyan">*</span></label>
                  <input
                    required
                    type="tel"
                    name="whatsapp"
                    placeholder="+91 7499 023 473"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-midnight border border-white/5 focus:border-brand-cyan/50 outline-none transition-all text-white placeholder:text-white/10"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90 ml-2">Service Required <span className="text-brand-cyan">*</span></label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-midnight border border-white/5 focus:border-brand-cyan/50 outline-none transition-all text-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="App Development">App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-white/90 ml-2">Project Details <span className="text-brand-cyan">*</span></label>
                  <textarea
                    required
                    name="requirements"
                    rows="4"
                    placeholder="Tell us about your project..."
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-brand-midnight border border-white/5 focus:border-brand-cyan/50 outline-none transition-all text-white placeholder:text-white/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 btn-electric text-lg flex items-center justify-center gap-3 shadow-cyan-glow ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
