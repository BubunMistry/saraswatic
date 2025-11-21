"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Info, ImageIcon, Mail, Menu, X, Camera } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Info },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/photography", label: "My Photography", icon: Camera},
    { href: "/connect", label: "Connect", icon: Mail },
    
  ];
  
  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* ---------------- NAVBAR MAIN BAR ---------------- */}
      <motion.div
        className="
          fixed top-0 left-0 w-full h-[90px]
          z-[999]
          flex items-center justify-between
          px-6 md:px-12
        "
        animate={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      >

        {/* -------- LOGO INSIDE NAVBAR -------- */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.img
            src="/white.png"
            alt="Logo"
            className="w-14 md:w-20 object-contain"
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </Link>

        {/* ---------- DESKTOP NAV ITEMS ---------- */}
        <ul className="hidden md:flex items-center gap-14">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.li key={item.href} whileHover={{ y: -2 }}>
                <Link
                  href={item.href}
                  className="relative flex items-center gap-2 text-white group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  >
                    <Icon size={18} className="text-white/80 group-hover:text-white" />
                  </motion.div>

                  {/* Label */}
                  <span className="text-base font-medium text-white/80 group-hover:text-white transition">
                    {item.label}
                  </span>

                  {/* Premium underline */}
                  <span
                    className="
                      absolute left-0 -bottom-1
                      h-[2px] w-0 bg-white rounded-full
                      group-hover:w-full transition-all duration-300
                    "
                  />
                </Link>
              </motion.li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2"
        >
          <Menu size={30} className="text-white" />
        </button>

      </motion.div>

      {/* ---------------- MOBILE MENU ---------------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-xl z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-72 bg-black z-[999] p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2"
              >
                <X size={30} className="text-white" />
              </button>

              {/* MOBILE NAV ITEMS */}
              <div className="mt-20 flex flex-col gap-6">
                {navItems.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="
                          flex items-center gap-4 text-white 
                          py-3 px-2 rounded-lg
                          hover:bg-white/10 transition
                          text-lg
                        "
                      >
                        <Icon size={22} />
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
