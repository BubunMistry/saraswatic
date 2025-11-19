"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomButton } from "@/components/custom-button"
import { ArtistQuotes } from "@/components/artist-quotes"
import { ModalGallery } from "@/components/modal-gallery"
import { AnimateIcon } from "@/components/animate-icon"
import Link from "next/link"
import { AboutSection } from "@/components/AboutSection"
import { GalleryPreview } from "@/components/GalleryPreview"
import { HeroSection } from "@/components/HeroSection"

const galleryImages = [
  "/saraswati-puja-celebration-event-2024.jpg",
  "/saraswati-goddess-worship-ceremony.jpg",
  "/college-students-saraswati-puja-performance.jpg",
  "/saraswati-puja-decoration-flowers.jpg",
  "/saraswati-puja-cultural-program-music.jpg",
]

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="flex flex-col min-h-screen text-white">
      <Navigation />

      <main className="flex-1">

        {/* HERO SECTION */}
  <HeroSection />


        <AboutSection />
        <GalleryPreview />
        {/* QUOTES */}
        <ArtistQuotes />




      </main>

      <Footer />

    </div>
  )
}
