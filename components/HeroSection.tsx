"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CustomButton } from "@/components/custom-button"

export function HeroSection() {
  return (
    <section className="relative h-[480px] sm:h-[520px] md:h-[650px] lg:h-[720px] flex items-center justify-center overflow-hidden">

      {/* 🔥 Black Gradient Background + Aura Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <video
          className="w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/main/main-banner.mp4"
        />
      </div>

      {/* 🔮 Aura Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-[140px]"
          animate={{ x: ["-20%", "20%", "-10%"], y: ["-10%", "10%", "-20%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* 🌟 Content */}
      <motion.div
        className="relative z-10 text-center px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white drop-shadow-xl">
          Saraswati Puja
        </h1>

        <p className="text-lg sm:text-xl md:text-3xl mt-4 text-gray-300 font-light">
          Celebrating Knowledge, Music & Arts
        </p>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Join us in this divine celebration of wisdom and creativity.
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 flex-wrap">
          <Link href="/gallery">
            <CustomButton size="sm" className="text-[0.9rem] sm:text-[1.1rem]">
              Explore Gallery
            </CustomButton>
          </Link>

          <Link href="/connect">
            <CustomButton size="sm" className="text-[0.9rem] sm:text-[1.1rem]">
              Join Us
            </CustomButton>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
