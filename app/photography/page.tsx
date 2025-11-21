"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomButton } from "@/components/custom-button"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube, Users } from "lucide-react"

export default function Photography() {
  
    return (
        <div className="flex flex-col min-h-screen bg-white">
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
                                alt="Photography Illustration"
                                className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-80 object-contain mx-auto rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl xl:text-6xl 
                   font-bold mb-3 leading-tight tracking-wide">
                            My Photography
                        </h1>

                        {/* Sub Text */}
                        <p className="text-xs sm:text-base xl:text-lg 
                 text-gray-300 leading-relaxed max-w-xl mx-auto">
                            Capturing divine moments of devotion, culture, and beauty — through my lens
                        </p>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Want to Know More?</h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Explore our gallery to see past celebrations or learn about our tradition's history.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <a href="/about">
                                <CustomButton variant="default" size="sm">
                                    Our Story
                                </CustomButton>
                            </a>
                            <a href="/gallery">
                                <CustomButton variant="default" size="sm">
                                    View Gallery
                                </CustomButton>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}