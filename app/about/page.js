"use client"
import { motion } from 'framer-motion'
import BgLayout from '@/components/layouts/bgLayout'
import About from '@/components/sections/about'
import Faqs from '@/components/sections/faqs'
import React from 'react'
import Link from 'next/link'

function AboutPage() {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src="/about/about-1.png"
            alt="About Stronwell - Industrial Excellence"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          
          {/* Brand Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff4f01]/20 via-transparent to-[#ff6b2e]/20" />
        </div>

        {/* Hero Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-8"
        >
          
          {/* Breadcrumb */}
          <motion.div variants={contentVariants} className="mb-8">
            <nav className="flex justify-center">
              <ol className="flex items-center space-x-2 text-sm text-gray-300">
                <li>
                  <Link href="/" className="hover:text-[#ff4f01] transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li className="text-[#ff4f01] font-medium">About Us</li>
              </ol>
            </nav>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={contentVariants} className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <motion.span
                className="block mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                About
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Stronwell
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={contentVariants} className="mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Pioneering industrial excellence through innovation, quality, and unwavering commitment to our customers&apos; success.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={contentVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            
            {/* Our Story Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <button 
                onClick={() => document.getElementById('global-presence').scrollIntoView({ behavior: 'smooth' })}
                className="group relative cursor-pointer px-8 py-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl overflow-hidden"
              >
                {/* Button Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff6b2e] to-[#ff4f01] opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-2">
                  <span className='text-xl'>Our Presence</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                </div>
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/contact">
                <button className="group relative cursor-pointer px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl backdrop-blur-sm hover:border-[#ff4f01] transition-all duration-300 overflow-hidden">
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ff4f01]/20 to-[#ff6b2e]/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button Content */}
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className='text-xl'>Contact Us</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </motion.svg>
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Company Highlights */}
          {/* <motion.div
            variants={contentVariants}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "25+", label: "Years Experience" },
              { number: "10K+", label: "Happy Customers" },
              { number: "500+", label: "Products" },
              { number: "50+", label: "Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <div className="text-2xl lg:text-3xl font-bold text-[#ff4f01] mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>

        {/* Floating Elements */}
        {/* <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff4f01] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div> */}
      </section>

      {/* About Content Section */}
      {/* <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to global leadership - the story of innovation, perseverance, and excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff4f01] to-[#ff6b2e] transform lg:-translate-x-0.5" />
            
            {[
              {
                year: "1999",
                title: "Foundation",
                description: "Started as a small workshop with a vision to revolutionize industrial equipment manufacturing.",
                position: "left"
              },
              {
                year: "2005",
                title: "First Export",
                description: "Expanded internationally, establishing our first export partnerships across Asia-Pacific region.",
                position: "right"
              },
              {
                year: "2012",
                title: "ISO Certification",
                description: "Achieved ISO 9001 certification, reinforcing our commitment to quality and excellence.",
                position: "left"
              },
              {
                year: "2018",
                title: "Global Expansion",
                description: "Reached 50+ countries worldwide with comprehensive product portfolio and service network.",
                position: "right"
              },
              {
                year: "2024",
                title: "Innovation Hub",
                description: "Launched advanced R&D facility focusing on sustainable and smart industrial solutions.",
                position: "left"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: milestone.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex ${milestone.position === "right" ? "lg:justify-end" : ""} mb-12`}
              >
                <div className={`lg:w-5/12 ${milestone.position === "right" ? "lg:text-right" : ""}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-12 lg:ml-0">
                    <div className="text-2xl font-bold text-[#ff4f01] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full transform lg:-translate-x-2 translate-y-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      {/* <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Leadership <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries driving innovation and excellence at Stronwell.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Michael Bonhoeffer",
                position: "Chief Executive Officer",
                experience: "25+ Years",
                image: "/about/about-2.png",
                description: "Visionary leader with expertise in industrial automation and global business strategy."
              },
              {
                name: "Sarah Chen",
                position: "Chief Technology Officer",
                experience: "20+ Years",
                image: "/about/about-3.png",
                description: "Innovation pioneer driving R&D initiatives and sustainable technology development."
              },
              {
                name: "James Rodriguez",
                position: "Global Sales Director",
                experience: "18+ Years",
                image: "/about/about-4.png",
                description: "Market expert expanding Stronwell&apos;s presence across international markets."
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff4f01]/30 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#ff4f01] text-white text-sm font-bold rounded-full">
                      {leader.experience}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                    <div className="text-[#ff4f01] font-medium mb-4">{leader.position}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{leader.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Global Presence */}
      <section className="py-5 lg:py-10 px-6 lg:px-8" id='global-presence'>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Global <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Presence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Serving customers worldwide with local expertise and global standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "21+", label: "Countries Served", icon: "🌍" },
                { number: "5743+", label: "Distribution Partners", icon: "🤝" },
                { number: "4535+", label: "Products", icon: "📦" },
                { number: "24/7", label: "Global Support", icon: "📞" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ff4f01]/30 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-[#ff4f01] mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Regional Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  region: "India",
                  description: "Leading the market with innovative solutions and extensive service network across India.",
                  growth: "+35% YoY"
                },
                {
                  region: "Mexico & Central America",
                  description: "Strategic partnerships enhancing distribution and service capabilities in Mexico and Central America.",
                  growth: "+28% YoY"
                },
                {
                  region: "South America",
                  description: "Expanding footprint with dedicated service centers and local distributor networks across South America.",
                  growth: "+42% YoY"
                }
              ].map((region, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{region.region}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">
                      {region.growth}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{region.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation & Sustainability */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Innovation & <span className="bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] bg-clip-text text-transparent">Sustainability</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Pioneering tomorrow&apos;s solutions while protecting our planet for future generations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-full opacity-20 blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Innovation Lab</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Our state-of-the-art R&D facility focuses on developing next-generation industrial solutions, 
                    incorporating AI, IoT, and advanced materials to create smarter, more efficient equipment.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Smart Equipment Integration",
                      "Advanced Material Research",
                      "AI-Powered Diagnostics",
                      "IoT Connectivity Solutions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-[#ff4f01] rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Sustainability */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Green Initiative</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Committed to environmental responsibility through sustainable manufacturing processes, 
                    eco-friendly materials, and energy-efficient product designs that reduce our carbon footprint.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Carbon Neutral Manufacturing",
                      "Recyclable Material Usage",
                      "Energy Efficient Designs",
                      "Waste Reduction Programs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 lg:py-10 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative p-12 rounded-3xl overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              {/* <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #ff4f01 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #ff6b2e 0%, transparent 50%)`
              }} /> */}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Ready to Partner with Excellence?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the Stronwell family and experience the difference that quality, 
                innovation, and dedicated service can make for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-gradient-to-r from-[#ff4f01] to-[#ff6b2e] text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-[#ff4f01]/25 transition-all duration-100"
                >
                  Explore Products
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 lg:text-xl cursor-pointer bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:border-[#ff4f01] hover:bg-[#ff4f01]/10 transition-all duration-100"
                >
                  Contact Us
                </motion.button>
              </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </BgLayout>
  )
}

export default AboutPage