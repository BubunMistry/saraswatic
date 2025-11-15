"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Music, BookOpen, Palette } from "lucide-react"

interface QuoteData {
  text: string
  author: string
  image: string
  icon: "quote" | "music" | "book" | "art"
}

const quotes: QuoteData[] = [
  {
    text: "Saraswati is the goddess of learning and the arts, inspiring creativity in all forms.",
    author: "Ancient Hindu Texts",
    image: "/saraswati-goddess-statue-ancient.jpg",
    icon: "quote"
  },
  {
    text: "Music is the universal language of humanity, blessed by Saraswati's grace.",
    author: "Ravi Shankar",
    image: "/musician-playing-sitar-black-and-white.jpg",
    icon: "music"
  },
  {
    text: "Knowledge without wisdom is like a lamp without oil.",
    author: "Indian Proverb",
    image: "/ancient-library-books-black-and-white.jpg",
    icon: "book"
  },
  {
    text: "Art is the expression of the soul through divine inspiration.",
    author: "Tagore",
    image: "/artist-painting-black-and-white.jpg",
    icon: "art"
  },
]

const iconMap = {
  quote: Quote,
  music: Music,
  book: BookOpen,
  art: Palette
}

export function ArtistQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const IconComponent = iconMap[quotes[currentQuote].icon]

  return (
    <section className="py-24 px-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Wisdom & Inspiration
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Timeless quotes from artists, scholars, and thinkers about knowledge, art, and creativity
          </p>
        </motion.div>

        {/* Main Quote Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image Side */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                  <img
                    src={quotes[currentQuote].image || "/placeholder.jpg"}
                    alt={quotes[currentQuote].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Icon Badge */}
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl border border-gray-200 shadow-lg">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>

                {/* Author Name */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                  <span className="text-sm font-semibold text-black">{quotes[currentQuote].author}</span>
                </div>
              </div>

              {/* Quote Side */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-start">
                  <div className="p-3 bg-gray-100 rounded-2xl">
                    <Quote className="w-8 h-8 text-black" />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
                  "{quotes[currentQuote].text}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-black">{quotes[currentQuote].author}</p>
                  <p className="text-gray-600 text-sm">
                    {quotes[currentQuote].icon === "music" && "Legendary Musician"}
                    {quotes[currentQuote].icon === "book" && "Ancient Wisdom"}
                    {quotes[currentQuote].icon === "art" && "Renowned Poet & Artist"}
                    {quotes[currentQuote].icon === "quote" && "Sacred Texts"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Indicators */}
          <div className="flex gap-3 justify-center mt-8">
            {quotes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuote(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentQuote 
                    ? "bg-black w-8" 
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`View quote ${idx + 1}`}
              />
            ))}
          </div>
        </div>

    
      </div>
    </section>
  )
} 