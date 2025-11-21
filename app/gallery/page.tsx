"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModalGallery } from "@/components/modal-gallery"
import {
  Calendar,
  Image as ImageIcon,
  ChevronDown,
  Play,
  Video,
  Film,
  SortAsc,
} from "lucide-react"
import { galleryData, years } from "@/lib/gallery-data"

type MediaType = "all" | "image" | "video"

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<number | null>(years[0] || null)
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType>("all")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [showYearFilter, setShowYearFilter] = useState(false)
  const [showSortFilter, setShowSortFilter] = useState(false)

  // Filter gallery based on year and media type
  const filteredGallery = galleryData.filter((item) => {
    const yearMatch = selectedYear ? item.year === selectedYear : true
    const mediaTypeMatch = selectedMediaType === "all" || item.type === selectedMediaType
    return yearMatch && mediaTypeMatch
  })

  const openModal = (index: number) => {
    setCurrentMediaIndex(index)
    setIsModalOpen(true)
  }

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % filteredGallery.length)
  }

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)
  }

  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navigation />

      <main className="flex-1">
      {/* Hero Section */}
<section className="relative px-6 text-center text-white overflow-hidden
  bg-gradient-to-br from-gray-900 to-black 
  pt-28 md:pt-32 lg:pt-36 xl:pt-40 
  pb-16 md:pb-20 lg:pb-24 
  min-h-[50vh] flex flex-col justify-center">

  {/* Top-right Alpona */}
  <img
    src="/images/assets/alpona-right.png"
    alt="Alpona Decorative"
    className="absolute 
      top-16 right-4 sm:top-20 sm:right-8
      w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32
      opacity-80 object-contain pointer-events-none"
  />

  {/* Bottom-left Alpona */}
  <img
    src="/images/assets/alpona-left.png"
    alt="Alpona Decorative"
    className="absolute 
      bottom-6 left-4 sm:bottom-10 sm:left-6
      md:bottom-12 md:left-10 lg:bottom-14 lg:left-14
      w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32
      opacity-80 object-contain pointer-events-none"
  />

  <div className="max-w-5xl mx-auto px-4">

    {/* Main Top Image */}
    <div className="flex justify-center mb-4 sm:mb-6">
      <img
        src="/images/assets/main.png"
        alt="Gallery Illustration"
        className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-80 object-contain mx-auto"
      />
    </div>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl xl:text-6xl 
                   font-bold mb-3 leading-tight tracking-wide">
      Gallery
    </h1>

    {/* Sub Text */}
    <p className="text-xs sm:text-base xl:text-lg 
                 text-gray-300 leading-relaxed max-w-xl mx-auto">
      Explore memorable moments from our College family <br /> Saraswati Puja celebrations through the years
    </p>
  </div>
</section>


        {/* Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Filter and Sort Header - Responsive */}
            <div className="flex flex-col min-[300px]:flex-row min-[300px]:items-center min-[300px]:justify-center lg:justify-between mb-8 gap-4">
              {/* Left Side - Year Selection */}
              <div className="flex justify-center min-[300px]:justify-start lg:justify-start">
                <div className="relative">
                  {/* Desktop - Year Tabs */}
                  <div className="hidden lg:flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl p-1">
                      {years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                            selectedYear === year
                              ? "bg-black text-white shadow-sm"
                              : "text-gray-700 hover:text-black"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile - Year Dropdown */}
                  <div className="lg:hidden relative">
                    <button
                      onClick={() => {
                        setShowYearFilter(!showYearFilter)
                        setShowSortFilter(false)
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl text-black transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {selectedYear ? `Year: ${selectedYear}` : "Select Year"}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${showYearFilter ? "rotate-180" : ""}`} />
                    </button>

                    {/* Year Dropdown */}
                    {showYearFilter && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                        {years.map((year, index) => (
                          <button
                            key={year}
                            onClick={() => {
                              setSelectedYear(year)
                              setShowYearFilter(false)
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer text-black ${
                              selectedYear === year ? "bg-gray-100 font-medium" : ""
                            } ${index === 0 ? "rounded-t-xl" : ""} ${
                              index === years.length - 1 ? "rounded-b-xl" : ""
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Side - Sort Filter */}
              <div className="flex justify-center min-[300px]:justify-end lg:justify-end">
                <div className="relative">
                  <button
                    onClick={() => {
                      setShowSortFilter(!showSortFilter)
                      setShowYearFilter(false)
                    }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-black/5 backdrop-blur-sm border border-black/10 rounded-xl text-black transition-colors cursor-pointer"
                  >
                    <SortAsc className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {selectedMediaType === "all" && "All Media"}
                      {selectedMediaType === "image" && "Photos Only"}
                      {selectedMediaType === "video" && "Videos Only"}
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${showSortFilter ? "rotate-180" : ""}`} />
                  </button>

                  {/* Sort Dropdown */}
                  {showSortFilter && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
                      <button
                        onClick={() => {
                          setSelectedMediaType("all")
                          setShowSortFilter(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-black ${
                          selectedMediaType === "all" ? "bg-gray-100 font-medium" : ""
                        } rounded-t-xl`}
                      >
                        <Film className="w-4 h-4" />
                        All Media
                      </button>
                      <button
                        onClick={() => {
                          setSelectedMediaType("image")
                          setShowSortFilter(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-black ${
                          selectedMediaType === "image" ? "bg-gray-100 font-medium" : ""
                        }`}
                      >
                        <ImageIcon className="w-4 h-4" />
                        Photos Only
                      </button>
                      <button
                        onClick={() => {
                          setSelectedMediaType("video")
                          setShowSortFilter(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-black ${
                          selectedMediaType === "video" ? "bg-gray-100 font-medium" : ""
                        } rounded-b-xl`}
                      >
                        <Video className="w-4 h-4" />
                        Videos Only
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Gallery Grid - Responsive */}
            <div className="grid grid-cols-1 min-[300px]:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.length ? (
                filteredGallery.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => openModal(idx)}
                    className="group cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
                  >
                    {/* Thumbnail Container */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      {item.type === "video" ? (
                        <>
                          {/* Video thumbnail */}
                          <img
                            src={item.thumbnail || "/placeholder.jpg"}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
                          />
                          {/* Play overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white/90 p-3 rounded-full border border-gray-200 shadow-sm group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                              <Play className="w-4 h-4 text-black fill-black" />
                            </div>
                          </div>
                          {/* Video badge */}
                          <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1 cursor-pointer">
                            <Video className="w-3 h-3" />
                            Video
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Image */}
                          <img
                            src={item.media || "/placeholder.jpg"}
                            alt={item.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 cursor-pointer"
                          />
                          {/* Image overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer">
                              <div className="bg-white/90 p-3 rounded-full border border-gray-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <ImageIcon className="w-4 h-4 text-black" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {/* Year badge inside image */}
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-white cursor-pointer">
                        {item.year}
                      </div>
                    </div>

                    {/* Hidden content for accessibility */}
                    <div className="sr-only">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-gray-100 rounded-2xl">
                      <ImageIcon className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">No media found</h3>
                  <p className="text-gray-600">
                    {selectedYear || selectedMediaType !== "all"
                      ? "Try changing your filters or check back later for new content."
                      : "No media available. Check back later for new content."}
                  </p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="text-center pt-8 border-t border-gray-200 mt-8">
              <div className="text-gray-600 text-sm">
                Showing <span className="font-bold text-black">{filteredGallery.length}</span> items
                {selectedYear && ` from ${selectedYear}`}
                {selectedMediaType !== "all" && ` (${selectedMediaType}s)`}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {isModalOpen && (
        <ModalGallery
          isOpen={isModalOpen}
          images={filteredGallery}
          currentIndex={currentMediaIndex}
          onClose={() => setIsModalOpen(false)}
          onNext={nextMedia}
          onPrev={prevMedia}
          onImageSelect={handleThumbnailClick}
          autoPlayVideo={true}
        />
      )}
    </div>
  )
}