"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
      {/* Top Navigation */}
      <Navigation />

      {/* Main 404 Content */}
      <section className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">

        {/* Glow Circle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />

        <div className="text-center relative z-10 max-w-lg pt-56 pb-32">
          
      
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-7xl md:text-[110px] font-extrabold tracking-tight drop-shadow-lg"
          >
            404
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-300 text-lg mb-8"
          >
            Oops! The page you're looking for doesn’t exist.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                         bg-white text-black font-semibold hover:bg-gray-200
                         transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back Home
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
