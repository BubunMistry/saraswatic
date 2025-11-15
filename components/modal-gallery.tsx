"use client"

import { useEffect, useCallback, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"

interface MediaItem {
  media: string
  type: 'image' | 'video'
  title: string
}

interface ModalGalleryProps {
  isOpen: boolean
  images: MediaItem[]
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
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Safe access to current media
  const currentMedia = images && images.length > 0 ? images[currentIndex] : null

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose()
    if (e.key === "ArrowLeft") onPrev()
    if (e.key === "ArrowRight") onNext()
    if (e.key === " " && currentMedia?.type === 'video') {
      e.preventDefault()
      togglePlayPause()
    }
  }, [onClose, onPrev, onNext, currentMedia])

  const handleThumbnailClick = (index: number) => {
    onImageSelect?.(index)
  }

  const togglePlayPause = () => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle video playback
  useEffect(() => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(console.error)
      } else {
        videoRef.current.pause()
      }
      videoRef.current.muted = isMuted
    }
  }, [currentMedia, isPlaying, isMuted])

  // Reset video state when media changes
  useEffect(() => {
    setIsPlaying(false)
    setIsMuted(true)
  }, [currentIndex])

  // Keyboard and body overflow handling
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "unset"
      }
    }
  }, [isOpen, handleKeyDown])

  // Don't render if not open or no images
  if (!isOpen || !images || images.length === 0) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999] p-4 cursor-pointer"
          onClick={onClose}
        >
          {/* Modal container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl w-full cursor-default"
          >
            {/* Media Container */}
            <div className="relative w-full bg-black/50 rounded-2xl overflow-hidden border border-white/10">
              
              {currentMedia?.type === 'image' ? (
                // Image Display
                <img
                  src={currentMedia.media}
                  className="w-full max-w-4xl max-h-[70vh] object-contain rounded-2xl mx-auto grayscale-[70%] hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                // Video Display
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={currentMedia?.media}
                    className="w-full max-w-4xl max-h-[70vh] object-contain rounded-2xl mx-auto"
                    loop
                    playsInline
                    preload="metadata"
                    onClick={togglePlayPause}
                  />
                  
                  {/* Video Controls Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}>
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlayPause}
                      className="bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 rounded-full hover:bg-black/80 cursor-pointer"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6 fill-white" />
                      )}
                    </button>

                    {/* Volume Control */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-16 bg-black/60 backdrop-blur-xl border border-white/20 text-white p-2 rounded-full hover:bg-black/80 cursor-pointer"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Previous Button */}
              {images.length > 1 && (
                <button
                  onClick={onPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={onNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {images.length} • {currentMedia?.type === 'video' ? 'Video' : 'Image'}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-6 justify-center flex-wrap">
                {images.map((item, idx) => (
                  <motion.div
                    key={idx}
                    onClick={() => handleThumbnailClick(idx)}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-200
                      ${
                        currentIndex === idx
                          ? "border-white shadow-lg scale-105"
                          : "border-white/30 hover:border-white/60"
                      }
                    `}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.media}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl grayscale-[70%] hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-black/60 rounded-full flex items-center justify-center border border-white/20">
                          <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}