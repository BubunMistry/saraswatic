"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Music, BookOpen, Palette } from "lucide-react"

interface ArtistData {
  id: number
  name: string
  designation: string
  image: string
  text: string
  era: string
  field: string
  icon: "quote" | "music" | "book" | "art"
}

const artists: ArtistData[] = [
  {
    id: 1,
    name: "Rabindranath Tagore",
    designation: "Poet, Writer, Painter",
    image: "/images/artist/rabindranath-tagore.webp",
    text: "You can't cross the sea merely by standing and staring at the water.",
    era: "1861-1941",
    field: "Literature & Arts",
    icon: "art"
  },
  {
    id: 2,
    name: "Jibanananda Das",
    designation: "Poet, Writer",
    image: "/images/artist/jibanananda-das.webp",
    text: "For a long time, I have been staring at the world through the window of poetry.",
    era: "1899-1954",
    field: "Bengali Literature",
    icon: "book"
  },
  {
    id: 3,
    name: "Nandalal Bose",
    designation: "Painter",
    image: "/images/artist/nandalal-bose.webp",
    text: "Art is not what you see, but what you make others see.",
    era: "1882-1966",
    field: "Visual Arts",
    icon: "art"
  },
  {
    id: 4,
    name: "Ramkinkar Baij",
    designation: "Sculptor, Painter",
    image: "/images/artist/ramkinkar-baij.webp",
    text: "Sculpture is the art of intelligence that speaks through stone.",
    era: "1906-1980",
    field: "Sculpture",
    icon: "art"
  },
  {
    id: 5,
    name: "Haren Das",
    designation: "Printmaker, Painter",
    image: "/images/artist/haren-das.webp",
    text: "In every stroke, there lies a story waiting to be told.",
    era: "1921-1993",
    field: "Printmaking",
    icon: "art"
  },
  {
    id: 6,
    name: "Bhimsen Joshi",
    designation: "Classical Vocalist",
    image: "/images/artist/bhimsen-joshi.webp",
    text: "Music is the divine way to tell beautiful, poetic things to the heart.",
    era: "1922-2011",
    field: "Indian Classical Music",
    icon: "music"
  },
  {
    id: 7,
    name: "Ravi Shankar",
    designation: "Sitar Maestro",
    image: "/images/artist/ravi-shankar.webp",
    text: "The true purpose of music is to connect with the divine within us.",
    era: "1920-2012",
    field: "World Music",
    icon: "music"
  },
  {
    id: 8,
    name: "Swami Vivekananda",
    designation: "Spiritual Leader",
    image: "/images/artist/swami-vivekananda.webp",
    text: "Arise, awake, and stop not until the goal is reached.",
    era: "1863-1902",
    field: "Spirituality",
    icon: "quote"
  },
  {
    id: 9,
    name: "Satyajit Ray",
    designation: "Filmmaker, Writer",
    image: "/images/artist/satyajit-ray.webp",
    text: "The world is a great book, and those who do not travel read only a page.",
    era: "1921-1992",
    field: "Cinema",
    icon: "art"
  },
  {
    id: 10,
    name: "Mother Teresa",
    designation: "Humanitarian",
    image: "/images/artist/mother-teresa.webp",
    text: "Not all of us can do great things. But we can do small things with great love.",
    era: "1910-1997",
    field: "Humanitarian Work",
    icon: "quote"
  }
]

const iconMap = {
  quote: Quote,
  music: Music,
  book: BookOpen,
  art: Palette
}

export function ArtistQuotes() {
  const [currentArtist, setCurrentArtist] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isAutoPlaying || isHovering) return

    const interval = setInterval(() => {
      setCurrentArtist((prev) => (prev + 1) % artists.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovering])

  const IconComponent = iconMap[artists[currentArtist].icon]

  const goToArtist = (index: number) => {
    setCurrentArtist(index)
  }

  return (
    <section className=" bg-white pb-10 relative overflow-hidden">
      <div className="container h-full px-4 sm:px-6 lg:px-8 mx-auto ">

        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Legacy of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-black to-gray-600">
              Indian Masters
            </span>
          </h2>
          <p className="text-sm text-gray-600">
            Timeless wisdom from legendary artists
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 h-full">

            {/* Left Side - Square Image */}
            <motion.div
              className="relative w-full flex flex-col"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div 
                className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentArtist}
                    src={artists[currentArtist].image}
                    alt={artists[currentArtist].name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Glassmorphic Era Badge */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-glass">
                  <span className="text-xs font-semibold text-gray-900">{artists[currentArtist].era}</span>
                </div>

                {/* Glassmorphic Icon Badge */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-glass">
                  <IconComponent className="w-4 h-4 text-gray-900" />
                </div>
              </div>

              {/* Small Images - Bottom of main image on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex -space-x-3 mt-6 justify-start lg:hidden w-full"
              >
                {artists.map((artist, index) => {
                  const Icon = iconMap[artist.icon]
                  const isActive = index === currentArtist

                  return (
                    <motion.div
                      key={artist.id}
                      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-110 z-20 -translate-y-2' : 'scale-100 z-10'
                        }`}
                      whileHover={{
                        scale: 1.15,
                        zIndex: 30
                      }}
                      onClick={() => goToArtist(index)}
                    >
                      {/* Circular Avatar with Glassmorphic Shadow */}
                      <div className={`relative w-10 h-10 rounded-full overflow-hidden ${isActive ? 'shadow-lg' : 'shadow-glass'
                        } transition-all duration-300`}>
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />

                        {/* Tiny Glassmorphic Icon */}
                        <div className="absolute bottom-0 right-0 bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-glass">
                          <Icon className="w-2 h-2 text-gray-700" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Right Side - Quote Section */}
            <div className="w-full flex flex-col justify-center">
              <motion.div
                key={currentArtist}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 w-full"
              >
                {/* Quote with Icon */}
                <div className="flex items-start gap-4 text-start">
                  <div className="p-3 bg-gray-900 rounded-xl shadow-lg mt-1 flex-shrink-0">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                  <blockquote className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic flex-1 text-start">
                    "{artists[currentArtist].text}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-300 text-start">
                  <p className="text-lg font-bold text-black mb-1">{artists[currentArtist].name}</p>
                  <p className="text-gray-700 text-sm mb-1">{artists[currentArtist].designation}</p>
                  <p className="text-gray-500 text-xs">{artists[currentArtist].field}</p>
                </div>
              </motion.div>

              {/* Small Images - Right side on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden lg:flex -space-x-3 mt-8 justify-start w-full"
              >
                {artists.map((artist, index) => {
                  const Icon = iconMap[artist.icon]
                  const isActive = index === currentArtist

                  return (
                    <motion.div
                      key={artist.id}
                      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-110 z-20 -translate-y-2' : 'scale-100 z-10'
                        }`}
                      whileHover={{
                        scale: 1.15,
                        zIndex: 30
                      }}
                      onClick={() => goToArtist(index)}
                    >
                      {/* Circular Avatar with Glassmorphic Shadow */}
                      <div className={`relative w-10 h-10 rounded-full overflow-hidden ${isActive ? 'shadow-lg' : 'shadow-glass'
                        } transition-all duration-300`}>
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Add glassmorphic shadow styles */}
      <style jsx>{`
        .shadow-glass {
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  )
}