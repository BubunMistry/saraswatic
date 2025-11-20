"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { CustomButton } from "@/components/custom-button"

export function HeroSection() {
  return (
    <section
      className="
        relative h-screen min-h-[480px] flex
        items-end justify-center /* Default: bottom alignment */
        2xl:items-center 2xl:justify-start /* Only 2xl and above: center */
        pb-16 sm:pb-16 md:pb-0 lg:pb-0 xl:pb-16 2xl:pb-0
        md:pl-16 lg:pl-24 2xl:pl-24
        overflow-hidden group
      "
    >
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/main/main-banner.mp4"
        />
      </div>
      {/* ✨ Gradient Layers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-transparent" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent w-1/3" />
        <div className="md:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      {/* 🔮 Motion Glows */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-[160px]"
          animate={{ x: ["-20%", "20%", "-10%"], y: ["-10%", "10%", "-20%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px]"
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      {/* 📜 Content */}
      <motion.div
        className="
          relative z-30 text-center md:text-left w-full max-w-xl px-4 lg:me-24
          flex flex-col items-center
          xl:items-center 2xl:items-start
          mb-12 md:mb-10 xl:mb-10 2xl:mb-0
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Shimmer Text Effect */}
        <div className="relative">
          <motion.h1 
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.2rem] 2xl:text-[3rem] 
              font-extrabold tracking-tight text-[#d87b14] drop-shadow-xl
              bg-gradient-to-r from-[#d87b14] via-[#ffb347] to-[#d87b14] 
              bg-[length:200%_auto] bg-clip-text text-transparent
            "
            animate={{
              backgroundPosition: ["0% center", "200% center", "0% center"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Saraswati Puja
          </motion.h1>
        </div>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-base 2xl:text-base mt-3 text-gray-300 font-light">
          Celebrating Knowledge, Music & Arts
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center md:justify-start mt-6 flex-wrap">
          <Link href="/gallery">
            <CustomButton
              size="sm"
              className="text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[0.9rem] 2xl:text-[0.85rem]"
            >
              Explore Gallery
            </CustomButton>
          </Link>
          <Link href="/connect">
            <CustomButton
              size="sm"
              className="text-[0.75rem] sm:text-[0.85rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[0.9rem] 2xl:text-[0.85rem]"
            >
              Join Us
            </CustomButton>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}