"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function SocialBar() {
  const socialItems = [
    {
      icon: Facebook,
      href: "https://facebook.com/tamal.das.522",
      label: "Facebook",
      hoverBg: "#1877F2",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/tamal.das2210",
      label: "Instagram",
      hoverBg: "#E4405F",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@tamaldas2877",
      label: "YouTube",
      hoverBg: "#FF0000",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed left-0 top-1/2 -translate-y-1/2
        z-[999]

        px-3 py-5
        rounded-r-3xl

        /* EXACT NAVBAR BG */
        bg-black/30 
        backdrop-blur-xl 
        border-r border-white/10
        shadow-lg

        flex flex-col gap-4
      "
    >
      {socialItems.map((item, idx) => {
        const Icon = item.icon
        return (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, x: 6 }}
            transition={{ type: "spring", stiffness: 250 }}
            style={{ "--hover-bg": item.hoverBg } as any}
            className="
              /* ICON SIZE — small on mobile */
              w-8 h-8 sm:w-10 sm:h-10

              flex items-center justify-center
              rounded-full

              cursor-pointer

              /* Circle background (same style as navbar buttons) */
              bg-white/10
              backdrop-blur-xl
              border border-white/10

              transition-all duration-300
              hover:bg-[var(--hover-bg)]
            "
          >
            <Icon
              size={16}
              className="text-white sm:text-white transition-all duration-300"
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}
