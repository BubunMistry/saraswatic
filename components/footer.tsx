"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home, Info, ImageIcon, Mail, MapPin, Phone, Facebook, Instagram, Youtube, Heart, ArrowRight } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: "Quick Links",
      items: [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: Info },
        { href: "/gallery", label: "Gallery", icon: ImageIcon },
        { href: "/connect", label: "Connect", icon: Mail },
      ]
    },
    {
      title: "Connect With Us",
      items: [
        {
          href: "https://maps.google.com/?q=103+Tripura+Roy+Lane,Salkia,Howrah",
          label: "103 Tripura Roy Lane, Salkia, Howrah – 711106",
          icon: MapPin,
          external: true
        },
        {
          href: "tel:+9804876362",
          label: "+91 98048 76362",
          icon: Phone
        },
        {
          href: "mailto:collagesaraswatiofficial@gmail.com",
          label: "collagesaraswatiofficial@gmail.com",
          icon: Mail
        },
        {
          href: "mailto:tamal.d3440@gmail.com",
          label: "tamal.d3440@gmail.com",
          icon: Mail
        },
      ]
    }
  ]

  const socialItems = [
    {
      icon: Facebook,
      href: "https://facebook.com/tamal.das.522",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/tamal.das2210",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@tamaldas2877",
      label: "YouTube",
    },
  ]

  return (
    <footer className="relative m-5 lg:m-10">
      {/* Main Footer Container with Linear Gradient and Rounded Corners */}
      <div className="bg-linear-to-b from-gray-800 to-black rounded-t-3xl rounded-b-3xl ">
      

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-10 py-16">
            {/* Main Footer Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12"
            >
              {/* Brand Section with Larger Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1"
              >
                {/* Larger Logo with Tilt and Scale Effects */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-linear-to-br from-gray-100 to-gray-300 flex items-center justify-center shadow-2xl"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: -2,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    initial={{ scale: 0.9, rotate: -1 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="w-16 h-16 flex items-center justify-center"
                    >
                      <img
                        src="/placeholder-logo.png"
                        alt="Saraswati Puja Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </motion.div>
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">
                      Saraswati<span className="text-white">Puja</span>
                    </h3>
                    <p className="text-gray-400 text-sm">Divine Knowledge & Arts</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
                  Celebrating divine knowledge, music, and arts through traditional worship and community gatherings.
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Icon size={18} className="text-white group-hover:text-gray-300" />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Links Sections */}
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + sectionIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <div className="w-1 h-6 bg-white rounded-full mr-3" />
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.items.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.li
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + (sectionIndex + index) * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : "_self"}
                            className="flex items-center gap-3 group text-gray-400 hover:text-white transition-all duration-300"
                          >
                            <motion.div
                              className="flex items-center gap-3"
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="flex-shrink-0"
                              >
                                <Icon size={18} className="text-white" />
                              </motion.div>
                              <span className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform">
                                {item.label}
                              </span>
                            </motion.div>
                            {item.external && (
                              <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-white ml-auto" />
                            )}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Bar - Only this section modified */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border-t border-white/20 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                {/* Copyright - Made responsive */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                  <span>© 2025 Saraswati Puja Celebration</span>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                  <span>All rights reserved</span>
                </div>

                {/* Made with love - Improved layout */}
                <motion.div
                  className="flex items-center justify-center space-x-2 text-sm text-gray-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <span>Made with</span>
                  <Heart size={14} className="text-red-400 fill-red-400" />
                  <span>by</span>
                  <a 
                    href="https://www.fusiondev.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors font-medium underline"
                  >
                    @Fusion Dev
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}