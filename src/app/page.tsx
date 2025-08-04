"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Reduced duration for better UX

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-purple-primary flex items-center justify-center relative overflow-hidden">
        {/* Subtle particle effects */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => {
            const left = ((i * 7) % 100) + (i % 3) * 10;
            const top = ((i * 11) % 100) + (i % 5) * 8;
            const delay = (i * 0.2) % 1.5;
            
            return (
              <motion.div
                key={i}
                className="particle"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ 
                  delay: delay,
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            );
          })}
        </div>

        {/* Main welcome container with smooth animation */}
        <motion.div 
          className="text-center space-y-8 z-10 relative"
          initial={{ 
            scale: 0.8,
            opacity: 0 
          }}
          animate={{ 
            scale: 1,
            opacity: 1 
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          {/* Subtle background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-yellow-400/10 rounded-full blur-2xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />

          {/* Main emoji with gentle entrance */}
          <motion.div
            initial={{ 
              scale: 0.8, 
              opacity: 0,
              y: 20 
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}
            className="text-9xl mb-6 relative z-10"
          >
            ✨💅💄
          </motion.div>
      
          {/* "BY" text with fade in */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl text-white/90 font-light relative z-10"
          >
            BY
          </motion.div>

          {/* Author name with subtle glow effect */}
          <motion.div
            initial={{ 
              scale: 0.9, 
              opacity: 0,
              y: 20
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: 0
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className="text-8xl font-bold text-white mb-4 relative z-10"
          >
            ALI ZOKAEI
          </motion.div>

          {/* Subtitle with smooth animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-xl text-white/80 font-light relative z-10"
          >
            Beauty & Nail Art Specialist
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex justify-center space-x-2 relative z-10"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-purple-100">
      {/* Navigation Section - 100vh with header */}
      <section className="h-screen relative overflow-hidden flex flex-col">
        {/* Background effects */}
        <div className="absolute inset-0 bg-purple-primary opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-light border-b border-purple-200/30 relative z-10 flex-shrink-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl animate-wave">✨</div>
                <h1 className="text-3xl font-bold text-gradient-purple-yellow">BEAUTY HAVEN</h1>
              </motion.div>
              <div className="hidden md:flex space-x-10">
                {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>
              <motion.a 
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="tel:5551234567"
                className="hidden md:block bg-purple-primary text-white px-8 py-3 rounded-full font-semibold hover-glow neon-glow shadow-lg"
              >
                Book Now ✨
              </motion.a>
            </div>
          </div>
        </motion.header>

        {/* Navigation Content - Hero Section */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <h1 className="text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="text-gradient-purple-yellow">Transform</span>
                    <br />
                    <span className="text-gray-800">Your Style</span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Experience the perfect blend of artistry and luxury. Our expert team creates stunning nail designs, 
                  professional hair styling, and flawless makeup that brings out your natural beauty.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:5551234567"
                    className="bg-purple-primary text-white px-12 py-5 rounded-full text-lg font-semibold hover-glow neon-glow shadow-xl text-center"
                  >
                    Start Your Journey ✨
                  </motion.a>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-yellow px-12 py-5 rounded-full text-lg font-semibold text-yellow-primary hover:bg-yellow-light transition-colors"
                  >
                    Explore Services
                  </motion.button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-primary rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                  <div className="relative glass-light rounded-3xl p-10 shadow-2xl">
                    <Image
                      src="/images/nail4.jpg"
                      alt="Beautiful nail art tools and manicure setup"
                      width={500}
                      height={600}
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/60 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-yellow-100/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-gradient-purple-yellow mb-8">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intricate nail art to stunning hair transformations and professional makeup, 
              we offer comprehensive beauty services that enhance your natural radiance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Nail Services */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover-lift border-purple"
            >
              <div className="w-24 h-24 bg-purple-primary rounded-full flex items-center justify-center mb-8 mx-auto neon-glow">
                <span className="text-4xl">💅</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nail Artistry</h3>
              <ul className="text-gray-600 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Luxury Manicures & Pedicures
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Custom Nail Art Designs
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Gel & Acrylic Extensions
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Nail Repair & Maintenance
                </li>
              </ul>
              <div className="text-center">
                <span className="text-4xl font-bold text-purple-primary">$45+</span>
              </div>
            </motion.div>

            {/* Hair Services */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover-lift border-yellow"
            >
              <div className="w-24 h-24 bg-yellow-primary rounded-full flex items-center justify-center mb-8 mx-auto neon-glow-yellow">
                <span className="text-4xl">💇‍♀️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Hair Styling</h3>
              <ul className="text-gray-600 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-yellow-primary mr-3">✦</span>
                  Professional Haircuts
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-primary mr-3">✦</span>
                  Color & Highlights
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-primary mr-3">✦</span>
                  Special Occasion Styling
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-primary mr-3">✦</span>
                  Hair Treatments
                </li>
              </ul>
              <div className="text-center">
                <span className="text-4xl font-bold text-yellow-primary">$65+</span>
              </div>
            </motion.div>

            {/* Makeup Services */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover-lift border-purple"
            >
              <div className="w-24 h-24 bg-purple-primary rounded-full flex items-center justify-center mb-8 mx-auto neon-glow">
                <span className="text-4xl">💄</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Makeup Artistry</h3>
              <ul className="text-gray-600 mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Professional Makeup
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Bridal & Event Makeup
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Makeup Lessons
                </li>
                <li className="flex items-center">
                  <span className="text-purple-primary mr-3">✦</span>
                  Lash Extensions
                </li>
              </ul>
              <div className="text-center">
                <span className="text-4xl font-bold text-purple-primary">$85+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-gradient-teal-coral mb-8">Our Gallery</h2>
            <p className="text-xl text-gray-600">
              Discover our stunning transformations and creative masterpieces
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { src: "/images/nail4.jpg", alt: "Pink manicure tools", delay: 0.1 },
              { src: "/images/nail5.jpg", alt: "Nail art tools", delay: 0.2 },
              { src: "/images/nail6.jpg", alt: "Glamorous makeup", delay: 0.3 },
              { src: "/images/nail1.jpg", alt: "Nail art concept", delay: 0.4 },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: image.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group overflow-hidden rounded-3xl shadow-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg font-semibold">Beautiful Design</h3>
                  <p className="text-sm opacity-90">Custom nail art</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-yellow-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-6xl font-bold text-gradient-purple-yellow">About Beauty Haven</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Beauty Haven, we believe that every individual deserves to feel confident and beautiful. 
                Our team of skilled artists specializes in creating stunning nail art, professional hair styling, 
                and flawless makeup that enhances your natural beauty and reflects your unique personality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We use only premium products and follow the latest beauty trends to ensure you always look 
                your best. Whether it&apos;s a special occasion or just a day of self-care, we&apos;re here to make 
                you feel amazing and confident.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-purple-primary">1500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-yellow-primary">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-purple-primary">800+</div>
                  <div className="text-gray-600">Designs Created</div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-primary rounded-3xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative glass-light rounded-3xl p-12 shadow-2xl">
                  <div className="text-center space-y-6">
                    <div className="text-8xl animate-sparkle">✨</div>
                    <h3 className="text-3xl font-bold text-gray-800">Premium Quality</h3>
                    <p className="text-gray-600 text-lg">We use only the finest products and latest techniques to ensure your satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/80 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl font-bold text-gradient-teal-coral mb-8">Get In Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your look? Contact us to book your appointment today!
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl text-center border-purple hover-lift"
            >
              <div className="w-20 h-20 bg-purple-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h3>
              <p className="text-gray-600">123 Beauty Street<br />Downtown, City 12345</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl text-center border-yellow hover-lift"
            >
              <div className="w-20 h-20 bg-yellow-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-yellow">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us</h3>
              <a href="tel:5551234567" className="text-gray-600 hover:text-purple-primary transition-colors font-semibold text-lg">(555) 123-4567</a>
              <p className="text-sm text-gray-500 mt-2">Mon-Sat: 9AM-8PM</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl text-center border-purple hover-lift"
            >
              <div className="w-20 h-20 bg-purple-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <span className="text-3xl">✉️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600">hello@beautyhaven.com</p>
              <p className="text-sm text-gray-500 mt-2">24h response time</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl text-center border-yellow hover-lift"
            >
              <div className="w-20 h-20 bg-yellow-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-yellow">
                <span className="text-3xl">🕒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sat: 9AM-8PM</p>
              <p className="text-gray-600">Sunday: 10AM-6PM</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-purple-primary rounded-3xl p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-8">Ready to Transform Your Look?</h3>
                <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                  Book your appointment today and experience the magic of professional beauty services!
                </p>
                <motion.a 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:5551234567"
                  className="bg-white text-purple-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-colors inline-block shadow-xl"
                >
                  Book Now ✨ (555) 123-4567
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-purple-primary text-white py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-4xl animate-wave">✨</div>
                <h3 className="text-3xl font-bold text-white">BEAUTY HAVEN</h3>
              </div>
              <p className="text-white/90 text-lg">
                Creating beautiful transformations and confident smiles since 2014.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Services</h4>
              <ul className="space-y-4 text-white/90 text-lg">
                <li>Nail Artistry</li>
                <li>Hair Styling</li>
                <li>Makeup Artistry</li>
                <li>Beauty Treatments</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4 text-white/90 text-lg">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-8 text-white">Follow Us</h4>
              <div className="flex space-x-6">
                <motion.a 
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="#" 
                  className="text-white/90 hover:text-white text-3xl transition-colors"
                >
                  📱
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="#" 
                  className="text-white/90 hover:text-white text-3xl transition-colors"
                >
                  📷
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="#" 
                  className="text-white/90 hover:text-white text-3xl transition-colors"
                >
                  💬
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-16 pt-8 text-center text-white/90 text-lg">
            <p>&copy; 2024 Beauty Haven. All rights reserved. ✨</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
