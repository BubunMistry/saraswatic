"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Calendar, Users, Heart, Home, BookOpen, Music, Sparkles, Clock, Camera, Utensils } from 'lucide-react'
import { CustomButton } from "@/components/custom-button"

export function AboutSection() {
  const [years, setYears] = useState(0)
  const [members, setMembers] = useState(0)
  const [annual, setAnnual] = useState(0)
  const [showBlackboard, setShowBlackboard] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const animate = (setter: any, target: number, duration = 2000) => {
      let start = 0
      const step = target / 60
      const interval = setInterval(() => {
        start += step
        if (start >= target) {
          setter(target)
          clearInterval(interval)
        } else {
          setter(Math.floor(start))
        }
      }, duration / 60)
    }

    animate(setYears, 13)
    animate(setMembers, 100)
    animate(setAnnual, 1)
  }, [])

  const notices = [
    { icon: Clock, text: "Puja starts at 8:00 AM" },
    { icon: Music, text: "Cultural program at 6:00 PM" },
    { icon: Utensils, text: "Prasad after Aarti" },
    { icon: Camera, text: "Group photo at 7:00 PM" }
  ]

  return (
    <section className="md:pt-24 pt-5 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 sm:gap-10 gap-3 items-center"
        >

          {/* ---- LEFT TEXT CARD ---- */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                    Our Family Puja
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">A tradition since 2014</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Since 2014, our <span className="font-semibold text-black">Collage</span> family
                has been organizing Saraswati Puja at home, bringing students,
                alumni, and faculty together.
              </p>

              <p className="text-gray-600 leading-relaxed">
                What began as a small gathering has grown into an annual tradition
                with rituals, cultural programs, food, and togetherness.
              </p>

              <div className="pt-4">
                <Link href="/about">
                  <CustomButton size="sm">Our Puja Story</CustomButton>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ---- RIGHT 3D BLACKBOARD CARD ---- */}
          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[480px] mx-auto">

              {/* 3D Frame Container */}
              <motion.div
                className="relative w-full cursor-pointer"
                onHoverStart={() => {
                  setIsHovering(true)
                  setTimeout(() => setShowBlackboard(true), 200)
                }}
                onHoverEnd={() => {
                  setIsHovering(false)
                  setShowBlackboard(false)
                }}
                animate={{ 
                  rotateY: isHovering ? 15 : 0,
                  rotateX: isHovering ? -5 : 0,
                  scale: isHovering ? 1.05 : 1
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                {/* Main Image Container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-gray-50"
                  animate={{ 
                    opacity: showBlackboard ? 0 : 1,
                    scale: showBlackboard ? 0.8 : 1
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src="/images/about/collage-family.webp"
                    alt="Collage Puja"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover"
                  />

                  {/* Badge 1 */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full shadow-lg border border-gray-300 z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-800" />
                      <span className="text-xs text-gray-800 font-semibold">Since 2014</span>
                    </div>
                  </motion.div>

                  {/* Badge 2 */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full border border-gray-300 shadow-lg z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-gray-800" />
                      <span className="text-xs text-gray-800 font-semibold">Collage Home</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 3D Blackboard Overlay - Black/White/Gray Only */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-4"
                  initial={false}
                  animate={{ 
                    opacity: showBlackboard ? 1 : 0,
                    scale: showBlackboard ? 1 : 0.8,
                    rotateY: showBlackboard ? 0 : -15,
                    rotateX: showBlackboard ? 0 : 10
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25 
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* 3D Blackboard with Depth */}
                  <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                    {/* Blackboard Main */}
                    <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-xl p-1 shadow-2xl border-4 border-gray-700 relative">
                      {/* Metal Frame */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-2xl border-4 border-gray-400 -z-10 shadow-xl" />
                      
                      {/* Chalk Dust Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-lg pointer-events-none" />
                      
                      {/* Blackboard Surface */}
                      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 border-2 border-gray-700 relative overflow-hidden">
                        {/* Chalk Grid Lines */}
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_99%,rgba(255,255,255,0.1)_100%)] bg-[length:20px_1px] pointer-events-none" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_99%,rgba(255,255,255,0.1)_100%)] bg-[length:1px_20px] pointer-events-none" />
                        
                        {/* Header */}
                        <div className="text-center mb-6 relative">
                          <div className="inline-block bg-white rounded-lg px-6 py-2 shadow-lg border border-gray-300">
                            <h3 className="text-black font-bold text-lg sm:text-xl font-mono tracking-wider">
                              📋 NOTICE BOARD
                            </h3>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                        </div>

                        {/* Notices List */}
                        <div className="space-y-3 relative">
                          {notices.map((notice, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center gap-4 p-3 bg-white/10 rounded-lg border-l-4 border-white backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 200
                              }}
                              whileHover={{ 
                                scale: 1.02,
                                backgroundColor: "rgba(255,255,255,0.15)",
                                borderLeftColor: "rgb(156, 163, 175)"
                              }}
                            >
                              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-300">
                                <notice.icon className="w-4 h-4 text-gray-800" />
                              </div>
                              <p className="text-white text-sm font-medium font-mono flex-1">
                                {notice.text}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Bottom Chalk Line */}
                        <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full" />
                      </div>
                    </div>

                    {/* 3D Shadow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/40 to-gray-800/20 rounded-2xl -z-10 blur-md"
                      animate={{ 
                        opacity: isHovering ? 0.6 : 0.3,
                        scale: isHovering ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Decorations */}
              <motion.div
                className="absolute -top-2 -left-2 bg-white p-3 rounded-2xl border border-gray-300 shadow-lg z-20"
                animate={{ 
                  opacity: showBlackboard ? 0 : 1,
                  scale: isHovering ? 1.2 : 1,
                  rotate: isHovering ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl border border-gray-300 shadow-lg z-20"
                animate={{ 
                  opacity: showBlackboard ? 0 : 1,
                  scale: isHovering ? 1.2 : 1,
                  rotate: isHovering ? -10 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

        {/* ---- STATS WITH COUNTERS ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 md:mt-16"
        >
          <StatCard number={`${years}+`} label="Years of Tradition" icon={Calendar} />
          <StatCard number={`${members}+`} label="Family Members" icon={Users} />
          <StatCard number={`${annual}`} label="Annual Celebration" icon={Heart} />
          <StatCard number="Collage" label="Home Venue" icon={Home} />
        </motion.div>

      </div>
    </section>
  )
}

/* -------- REUSABLE STAT CARD -------- */
function StatCard({ number, label, icon: Icon }: any) {
  return (
    <motion.div
      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg text-center group relative overflow-hidden my-3"
      whileHover={{ scale: 1.04, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center bg-white rounded-2xl border border-gray-300 shadow-md group-hover:shadow-lg transition-shadow">
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-black transition-colors">
          {number}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
          {label}
        </div>
      </div>
    </motion.div>
  )
}