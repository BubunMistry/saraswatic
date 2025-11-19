"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { CustomButton } from "@/components/custom-button"

/* -------------------------
   GALLERY IMAGES WITH YEAR
--------------------------*/
const galleryImages = [
  { src: "/images/2024/collage-saraswatipuja-2024-pushpanjali.webp", year: "2024" },
  { src: "/images/2023/main-2023.webp", year: "2023" },
  { src: "/images/2022/collage-saraswatipuja-2022 (3).webp", year: "2022" },
]

export function GalleryPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)

  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  const goToImage = (i: number) => setCurrentImageIndex(i)

  return (
    <>
      {/* ---------- GALLERY SECTION ---------- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black">Gallery Highlights</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Relive the beautiful moments from our Collage Saraswati Puja celebrations.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {galleryImages.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -5 }}
                className="cursor-pointer group"
                onClick={() => openModal(idx)}
              >
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100">

                  {/* Main Image - FULL black & white by default, color on hover */}
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />

                  {/* Hover Zoom Icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-center justify-center transition rounded-2xl">
                    <div className="opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white/80 backdrop-blur-md shadow p-3 rounded-full border border-gray-200">
                        <Search className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-lg shadow-lg px-3 py-1.5 rounded-full">
                    <span className="text-white font-semibold text-sm drop-shadow-md">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/gallery">
              <CustomButton size="sm">View Full Gallery</CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999] p-4 cursor-pointer"
            onClick={closeModal}
          >
            {/* Modal container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center max-w-4xl w-full cursor-default"
            >
              {/* Image Container */}
              <div className="relative w-full bg-black/50 rounded-2xl overflow-hidden border border-white/10">
                
                {/* Main Image - FULL COLOR in modal (no grayscale) */}
                <img
                  src={galleryImages[currentImageIndex].src}
                  className="w-full max-w-4xl max-h-[70vh] object-contain rounded-2xl mx-auto"
                />

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Prev */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Next */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails - FULL COLOR in modal */}
              <div className="flex gap-3 mt-6 justify-center flex-wrap">
                {galleryImages.map((item, idx) => (
                  <motion.div
                    key={idx}
                    onClick={() => goToImage(idx)}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200
                      ${
                        currentImageIndex === idx
                          ? "border-white shadow-lg scale-105"
                          : "border-white/30 hover:border-white/60"
                      }
                    `}
                  >
                    <img
                      src={item.src}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}