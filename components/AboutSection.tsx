"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Calendar, Users, Heart, Home, BookOpen, Music, Sparkles } from 'lucide-react'
import { CustomButton } from "@/components/custom-button"

export function AboutSection() {

  /* ----------------------------
      COUNTERS (2 seconds)
  ------------------------------*/
  const [years, setYears] = useState(0)
  const [members, setMembers] = useState(0)
  const [annual, setAnnual] = useState(0)

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

  return (
    <section className="pt-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Main Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
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

          {/* ---- RIGHT IMAGE CARD ---- */}
          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[480px] mx-auto">

              {/* Frame */}
              <div className="bg-gray-50 rounded-3xl p-4 sm:p-5 border border-gray-200 shadow-xl w-full">
                <motion.div
                  className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl w-full"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="/images/2021/2021-main.webp"
                    alt="Collage Puja"
                    className="w-full h-60 sm:h-72 md:h-80 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Badge 1 */}
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow border border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-black" />
                      <span className="text-xs text-black font-semibold">Since 2014</span>
                    </div>
                  </div>

                  {/* Badge 2 */}
                  <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full border border-gray-200 shadow">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4 text-black" />
                      <span className="text-xs text-black font-semibold">Collage Home</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* FLOATING DECOR — safe inside bounds */}
              <motion.div
                className="absolute top-0 left-0 bg-white p-2 sm:p-3 rounded-2xl border border-gray-200 shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Music className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-0 bg-white p-2 sm:p-3 rounded-2xl border border-gray-200 shadow-lg"
                animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </motion.div>

            </div>
          </motion.div>

        </motion.div>

        {/* ---- STATS WITH COUNTERS ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-16"
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
      className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 flex items-center justify-center bg-white rounded-2xl border border-gray-200 shadow-md">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </div>
      <div className="text-xl sm:text-2xl font-bold text-black">{number}</div>
      <div className="text-xs sm:text-sm text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}
