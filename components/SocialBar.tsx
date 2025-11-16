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
        fixed left-0 z-[999]

        /* Mobile: bottom-left */
        bottom-6

        /* Desktop: center-left */
        md:top-1/2 md:-translate-y-1/2 md:bottom-auto

        px-1 py-4
        rounded-r-3xl

        bg-black/30 
        backdrop-blur-xl 
        border-r border-white/10
        shadow-lg

        flex flex-col gap-3
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
            transition={{ type: "spring", stiffness: 260 }}
            style={{ "--hover-bg": item.hoverBg } as any}
            className="
              cursor-pointer
              rounded-full
              border border-white/10
              backdrop-blur-xl
              bg-white/10
              transition-all duration-300

              /* Icon size small on mobile, normal on desktop */
              w-8 h-8 md:w-10 md:h-10

              flex items-center justify-center
              hover:bg-[var(--hover-bg)]
            "
          >
            <Icon
              size={16}
              className="md:size-5 text-white transition-all duration-300"
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}
