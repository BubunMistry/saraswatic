"use client"

import { useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ModalGalleryProps {
  isOpen: boolean
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onImageSelect?: (index: number) => void
}

export function ModalGallery({ 
  isOpen, 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext, 
  onImageSelect 
}: ModalGalleryProps) {
  // Use useCallback to memoize the event handlers
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    if (e.key === "ArrowLeft") onPrev()
    if (e.key === "ArrowRight") onNext()
  }, [onClose, onPrev, onNext])

  const handleThumbnailClick = (index: number) => {
    if (onImageSelect) {
      onImageSelect(index)
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl transition-all duration-200 hover:scale-110 cursor-pointer"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div className="relative w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Image Container */}
        <div className="relative flex-1 flex items-center justify-center bg-black rounded-2xl overflow-hidden border border-white/10">
          <img
            src={images[currentIndex] || "/placeholder.jpg"}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-4 rounded-2xl transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous image"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={onNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-4 rounded-2xl transition-all duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next image"
                disabled={currentIndex === images.length - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full">
          <span className="text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20">
            {images.map((image, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  idx === currentIndex 
                    ? "border-white scale-110" 
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <img
                  src={image || "/placeholder.jpg"}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Background Click to Close */}
      <div 
        className="absolute inset-0 -z-10 cursor-pointer"
        onClick={onClose}
      />
    </div>
  )
}