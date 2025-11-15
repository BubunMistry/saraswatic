"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ModalGallery } from "@/components/modal-gallery"
import { Calendar, Image as ImageIcon, Filter, ChevronRight, Search, BarChart3, Inbox, ChevronDown, Play, Video } from "lucide-react"
import { galleryData, years } from "@/lib/gallery-data"

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [showMobileFilter, setShowMobileFilter] = useState(false)

  const filteredGallery = selectedYear ? galleryData.filter((item) => item.year === selectedYear) : galleryData

  const openModal = (index: number) => {
    console.log("Opening modal with index:", index, "Media:", filteredGallery[index])
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
    console.log("Thumbnail clicked:", index)
    setCurrentMediaIndex(index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section - Dark Background */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <ImageIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore memorable moments from our Collage family Saraswati Puja celebrations through the years
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Year Filter */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gray-100 rounded-2xl">
                  <Filter className="w-6 h-6 text-black" />
                </div>
                <h2 className="text-3xl font-bold text-black">Filter by Year</h2>
              </div>
              
              {/* Desktop Filter Buttons */}
              <div className="hidden md:flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedYear(null)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 border-2 cursor-pointer ${
                    selectedYear === null
                      ? "bg-black text-white border-black shadow-lg scale-105"
                      : "bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                  All Years
                </button>
                
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 border-2 cursor-pointer ${
                      selectedYear === year
                        ? "bg-black text-white border-black shadow-lg scale-105"
                        : "bg-white text-black border-gray-300 hover:border-black hover:bg-gray-50"
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {year}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Dropdown */}
              <div className="md:hidden">
                <button
                  onClick={() => setShowMobileFilter(!showMobileFilter)}
                  className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-2xl font-semibold flex items-center justify-between hover:border-black transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <Calendar className="w-4 h-4" />
                    {selectedYear ? `Year: ${selectedYear}` : "All Years"}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileFilter ? 'rotate-180' : ''}`} />
                </button>
                
                {showMobileFilter && (
                  <div className="mt-3 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        setSelectedYear(null)
                        setShowMobileFilter(false)
                      }}
                      className={`w-full px-4 py-3 text-left border-b border-gray-100 flex items-center gap-3 cursor-pointer ${
                        selectedYear === null ? 'bg-black text-white' : 'hover:bg-gray-50'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                      All Years
                    </button>
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year)
                          setShowMobileFilter(false)
                        }}
                        className={`w-full px-4 py-3 text-left border-b border-gray-100 flex items-center gap-3 cursor-pointer ${
                          selectedYear === year ? 'bg-black text-white' : 'hover:bg-gray-50'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Gallery Grid - Responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-16">
              {filteredGallery.length > 0 ? (
                filteredGallery.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => openModal(idx)}
                    className="group cursor-pointer bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Media Container */}
                    <div className="relative h-64 md:h-80 bg-gray-100 overflow-hidden">
                      {item.type === 'video' ? (
                        // Video Thumbnail
                        <div className="relative w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            muted
                            preload="metadata"
                          >
                            <source src={item.media} type="video/mp4" />
                          </video>
                          {/* Video Play Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-80 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <div className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full border border-gray-200">
                                <Play className="w-5 h-5 md:w-6 md:h-6 text-black fill-black" />
                              </div>
                            </div>
                          </div>
                          {/* Video Badge */}
                          <div className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            Video
                          </div>
                        </div>
                      ) : (
                        // Image Thumbnail
                        <>
                          <img
                            src={item.media || "/placeholder.jpg"}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                              <div className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-full border border-gray-200">
                                <Search className="w-5 h-5 md:w-6 md:h-6 text-black" />
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                          {item.year}
                        </span>
                        {item.type === 'video' && (
                          <Video className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <h3 className="font-semibold text-black text-lg mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-gray-100 rounded-2xl">
                      <Inbox className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">No media found</h3>
                  <p className="text-gray-600">Try selecting a different year or check back later for new content.</p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="text-center pt-8 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <BarChart3 className="w-5 h-5" />
                <span>
                  Showing <span className="font-bold text-black">{filteredGallery.length}</span> of{" "}
                  <span className="font-bold text-black">{galleryData.length}</span> media items
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Gallery */}
      {isModalOpen && (
        <ModalGallery
          isOpen={isModalOpen}
          images={filteredGallery}
          currentIndex={currentMediaIndex}
          onClose={() => setIsModalOpen(false)}
          onNext={nextMedia}
          onPrev={prevMedia}
          onImageSelect={handleThumbnailClick}
        />
      )}
    </div>
  )
}