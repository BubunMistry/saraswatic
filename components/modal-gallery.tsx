"use client"

import { useEffect, useCallback, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react"

interface MediaItem {
  media: string
  type: 'image' | 'video'
  title: string
  thumbnail?: string
}

interface ModalGalleryProps {
  isOpen: boolean
  images: MediaItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onImageSelect?: (index: number) => void
  autoPlayVideo?: boolean
}

export function ModalGallery({ 
  isOpen, 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext, 
  onImageSelect,
  autoPlayVideo = false 
}: ModalGalleryProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [showAllButtons, setShowAllButtons] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  // Safe access to current media
  const currentMedia = images && images.length > 0 ? images[currentIndex] : null

  // Get max 10 thumbnails (current and surrounding ones)
  const getVisibleThumbnails = () => {
    const total = images.length
    const maxThumbnails = 10
    const half = Math.floor(maxThumbnails / 2)
    
    let start = currentIndex - half
    let end = currentIndex + half
    
    if (start < 0) {
      end += Math.abs(start)
      start = 0
    }
    
    if (end >= total) {
      start -= (end - total + 1)
      end = total - 1
    }
    
    start = Math.max(0, start)
    end = Math.min(total - 1, end)
    
    const visible = []
    for (let i = start; i <= end; i++) {
      visible.push({ ...images[i], index: i })
    }
    
    return visible
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (isFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      } else {
        onClose()
      }
    }
    if (e.key === "ArrowLeft") onPrev()
    if (e.key === "ArrowRight") onNext()
    if (e.key === " " && currentMedia?.type === 'video') {
      e.preventDefault()
      togglePlayPause()
    }
    if (e.key === "f" || e.key === "F") {
      e.preventDefault()
      toggleFullscreen()
    }
  }, [onClose, onPrev, onNext, currentMedia, isFullscreen])

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

  const toggleFullscreen = async () => {
    const mediaContainer = document.querySelector('.media-container') as HTMLElement
    if (!document.fullscreenElement && mediaContainer) {
      try {
        await mediaContainer.requestFullscreen()
        setIsFullscreen(true)
        
        // Try to lock to landscape on mobile devices
        if (screen.orientation && screen.orientation.lock) {
          try {
            await screen.orientation.lock('landscape')
          } catch (lockError) {
            console.log('Screen orientation lock not supported')
          }
        }
      } catch (error) {
        console.log('Fullscreen failed:', error)
      }
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
      
      // Unlock orientation when exiting fullscreen
      if (screen.orientation && screen.orientation.unlock) {
        try {
          screen.orientation.unlock()
        } catch (unlockError) {
          console.log('Screen orientation unlock failed')
        }
      }
    }
  }

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentMedia?.type === 'video' && videoRef.current && timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      const newTime = percent * duration
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const showVideoControls = () => {
    setShowControls(true)
    setShowAllButtons(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
        setShowAllButtons(false)
      }, 3000)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Video event handlers
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setCurrentTime(0)
    setShowAllButtons(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  // Handle video playback
  useEffect(() => {
    if (currentMedia?.type === 'video' && videoRef.current) {
      if (isPlaying || (autoPlayVideo && !isPlaying && currentMedia.type === 'video')) {
        videoRef.current.play().catch(console.error)
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false)
          setShowAllButtons(false)
        }, 3000)
      } else {
        videoRef.current.pause()
        setShowControls(true)
        setShowAllButtons(true)
      }
      videoRef.current.muted = isMuted
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [currentMedia, isPlaying, isMuted, autoPlayVideo])

  // Auto-play video when it opens
  useEffect(() => {
    if (currentMedia?.type === 'video' && autoPlayVideo && !isPlaying) {
      setIsPlaying(true)
    }
  }, [currentMedia, autoPlayVideo, isPlaying])

  // Reset video state when media changes
  useEffect(() => {
    if (currentMedia?.type === 'video') {
      if (autoPlayVideo) {
        setIsPlaying(true)
      } else {
        setIsPlaying(false)
      }
    } else {
      setIsPlaying(false)
    }
    
    setIsMuted(false)
    setCurrentTime(0)
    setDuration(0)
    setShowControls(true)
    setShowAllButtons(true)
  }, [currentIndex, currentMedia, autoPlayVideo])

  // Fullscreen change handler
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = !!document.fullscreenElement
      setIsFullscreen(fullscreen)
      if (fullscreen && currentMedia?.type === 'video' && isPlaying) {
        setShowAllButtons(false)
      } else {
        setShowAllButtons(true)
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [currentMedia, isPlaying])

  // Keyboard and body overflow handling
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "unset"
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current)
        }
      }
    }
  }, [isOpen, handleKeyDown])

  // Don't render if not open or no images
  if (!isOpen || !images || images.length === 0) {
    return null
  }

  const visibleThumbnails = getVisibleThumbnails()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999] p-2 sm:p-4 cursor-pointer"
          onClick={onClose}
        >
          {/* Modal container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center w-full max-w-6xl cursor-default media-container"
          >
            {/* Media Container */}
            <div className="relative w-full bg-black/50 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              
              {currentMedia?.type === 'image' ? (
                // Image Display - Always colorful
                <div 
                  className="relative"
                  onTouchStart={() => setShowAllButtons(true)}
                  onMouseMove={() => setShowAllButtons(true)}
                >
                  <img
                    src={currentMedia.media}
                    className="w-full max-w-6xl max-h-[80vh] object-contain rounded-xl sm:rounded-2xl mx-auto"
                  />
                  
                  {/* Centered Play/Pause for Images (Hidden) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0">
                    <button
                      onClick={onNext}
                      className="p-4 rounded-full cursor-pointer"
                    >
                      <Play className="w-8 h-8 fill-white" />
                    </button>
                  </div>
                </div>
              ) : (
                // Video Display - Always colorful
                <div 
                  className="relative"
                  onTouchStart={showVideoControls}
                  onMouseMove={showVideoControls}
                >
                  <video
                    ref={videoRef}
                    src={currentMedia?.media}
                    className="w-full max-w-6xl max-h-[80vh] object-contain rounded-xl sm:rounded-2xl mx-auto"
                    loop
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleVideoEnd}
                    onClick={togglePlayPause}
                  />
                  
                  {/* Centered Play/Pause Button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    (!isPlaying || showControls) ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button
                      onClick={togglePlayPause}
                      className="bg-black/60 backdrop-blur-xl border border-white/20 text-white p-4 rounded-full hover:bg-black/80 cursor-pointer transition-all duration-300"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 sm:w-10 sm:h-10" />
                      ) : (
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white" />
                      )}
                    </button>
                  </div>

                  {/* Video Controls Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 transition-opacity duration-300 ${
                    showControls ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {/* Timeline */}
                    <div 
                      ref={timelineRef}
                      className="w-full h-1.5 sm:h-2 bg-white/30 rounded-full mb-3 sm:mb-4 cursor-pointer"
                      onClick={handleTimelineClick}
                    >
                      <div 
                        className="h-full bg-white rounded-full relative"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg"></div>
                      </div>
                    </div>

                    {/* Controls Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-4">
                        {/* Play/Pause */}
                        <button
                          onClick={togglePlayPause}
                          className="text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full cursor-pointer"
                          aria-label={isPlaying ? "Pause video" : "Play video"}
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                          )}
                        </button>

                        {/* Time Display */}
                        <span className="text-white text-xs sm:text-sm font-mono">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        {/* Volume Control */}
                        <button
                          onClick={toggleMute}
                          className="text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full cursor-pointer"
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>

                        {/* Fullscreen */}
                        <button
                          onClick={toggleFullscreen}
                          className="text-white hover:bg-white/20 p-1.5 sm:p-2 rounded-full cursor-pointer"
                          aria-label="Toggle fullscreen"
                        >
                          <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Close Button - Responsive size */}
              <button
                onClick={onClose}
                className={`absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer transition-opacity duration-300 ${
                  showAllButtons ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </button>

              {/* Previous Button - Responsive size */}
              {images.length > 1 && (
                <button
                  onClick={onPrev}
                  className={`absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer transition-opacity duration-300 ${
                    showAllButtons ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </button>
              )}

              {/* Next Button - Responsive size */}
              {images.length > 1 && (
                <button
                  onClick={onNext}
                  className={`absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black/80 cursor-pointer transition-opacity duration-300 ${
                    showAllButtons ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </button>
              )}

              {/* Counter - Reduced size */}
              <div className={`absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/60 backdrop-blur-xl px-2 py-1 rounded-full transition-opacity duration-300 ${
                showAllButtons ? 'opacity-100' : 'opacity-0'
              }`}>
                <span className="text-white text-xs font-medium">
                  {currentIndex + 1}/{images.length}
                </span>
              </div>
            </div>

            {/* Thumbnails - Only show on large screens */}
            {images.length > 1 && (
              <div className={`hidden lg:flex gap-2 mt-4 sm:mt-6 justify-center transition-opacity duration-300 ${
                showAllButtons ? 'opacity-100' : 'opacity-0'
              }`}>
                {visibleThumbnails.map((item) => (
                  <motion.div
                    key={item.index}
                    onClick={() => handleThumbnailClick(item.index)}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200
                      ${
                        currentIndex === item.index
                          ? "border-white shadow-lg scale-105"
                          : "border-white/30 grayscale hover:border-white/60 hover:grayscale-0"
                      }
                    `}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.media}
                        className="w-10 h-10 object-cover rounded-lg transition-all duration-500"
                      />
                    ) : (
                      <div className="relative w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-black/60 rounded-full flex items-center justify-center border border-white/20">
                          <Play className="w-2.5 h-2.5 text-white fill-white" />
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