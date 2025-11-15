"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Info, ImageIcon, Mail, Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/connect", label: "Connect", icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) { // Show/hide after 100px scroll
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          setIsScrolled(true)
        } else {
          // Scrolling up - show navbar
          setIsScrolled(false)
        }
      } else {
        // At top - always show navbar
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
   
      {/* Logo - Hidden on scroll */}
      <motion.div
        className="fixed top-2 left-10 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -100 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center"
            whileHover={{
              scale: 1.05,
              rotate: -2,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
            >
              <img
                src="/white.png"
                alt="Saraswati Puja Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>

      {/* Mobile Menu Button - Hidden on scroll */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden flex flex-col gap-1.5 p-3"
        aria-label="Toggle menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -100 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X size={28} className="text-white" />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <Menu size={28} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Desktop Navigation - Hidden on scroll */}
      <motion.nav 
        className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50 w-auto"
        animate={{ 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -100 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div
          className="glassmorphic rounded-full px-6 py-4 flex items-center justify-between border border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-3 items-center">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group"
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                  >
                    <motion.div
                      whileHover={{ rotate: 20, scale: 1.2 }}
                      className="group-hover:rotate-20 group-hover:scale-125 transition-all"
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon size={18} className="text-white" />
                    </motion.div>
                    <span className="text-sm text-white">{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-lg z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed top-0 right-0 h-full w-80 z-50 md:hidden"
            >
              <div className="h-full bg-gradient-to-b from-gray-900 to-black border-l border-white/10 p-6">
                {/* Close Button in Mobile Menu */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X size={24} className="text-white" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-4">
                  {navItems.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-4 px-4 py-4 rounded-xl text-white hover:bg-white/10 transition-all duration-300 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            whileHover={{ rotate: 20, scale: 1.2 }}
                            className="group-hover:rotate-20 group-hover:scale-125 transition-all"
                            transition={{ type: "spring" }}
                          >
                            <Icon size={24} className="text-white" />
                          </motion.div>
                          <span className="text-lg text-white">{item.label}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}