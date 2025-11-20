"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomButton } from "@/components/custom-button"
import Link from "next/link"
import {
  Calendar, Users, MapPin, Award, Star, BookOpen, Music, Heart, ChevronRight
} from "lucide-react"
import { useEffect, useState } from "react"
import { TimelineFinal } from "@/components/TimelineFinal"

export default function About() {
  const [yearsCount, setYearsCount] = useState(0)
  const [artistsCount, setArtistsCount] = useState(0)
  const [eventsCount, setEventsCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const animateCounter = (setter: any, target: number) => {
      let current = 0
      const increment = target / steps

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(current))
        }
      }, stepDuration)
    }

    animateCounter(setYearsCount, 13)
    animateCounter(setArtistsCount, 20)
    animateCounter(setEventsCount, 65)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-gray-900 to-black text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-5 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About Saraswati Puja
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Celebrating 13 years of divine knowledge, music, and arts at our College family tradition
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="pt-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

              {/* Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border-2 border-gray-100 shadow-2xl bg-white">
                  <img
                    src="/images/about/collage-family.webp"
                    alt="Tamal Adak organizing Saraswati Puja"
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="absolute -top-5 -right-5 bg-white border-2 border-gray-200 text-black px-5 py-3 rounded-2xl shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-black" />
                    <span className="text-sm font-bold">Since 2014</span>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                      Since 2014, our College family has been celebrating Saraswati Puja as a heartfelt
                      tradition bringing together artists, musicians, and creative minds in an artistic
                      celebration of knowledge and creativity.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      What started as a small gathering has evolved into an annual tradition where we honor
                      Goddess Saraswati, showcase incredible talent, and strengthen our creative community.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{yearsCount}+</div>
                    <div className="text-sm font-medium text-gray-600">Years of Tradition</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{artistsCount}+</div>
                    <div className="text-sm font-medium text-gray-600">Artists Worked</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{eventsCount}+</div>
                    <div className="text-sm font-medium text-gray-600">Events Hosted</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Why We Celebrate */}
        <section className="py-5 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why We Celebrate</h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                Saraswati Puja represents our commitment to knowledge, creativity, and artistic unity within our growing community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Feature icon={BookOpen} title="Knowledge & Wisdom" desc="Honoring the pursuit of learning and academic excellence through artistic expression and cultural heritage." />
              <Feature icon={Music} title="Music & Arts" desc="Celebrating creative expression and cultural heritage with 20+ artists and performers annually." />
              <Feature icon={Users} title="Art Community" desc="Strengthening bonds and fostering growth within our expanding artistic family network." />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-5 px-6">
          <div className="max-w-7xl mx-auto">
            <TimelineFinal />
          </div>
        </section>

        {/* Host Section */}
        <section className="pb-8 px-6">

          <div className="rounded-3xl p-12 border-2 border-gray-100 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Host Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-56 h-56 rounded-3xl overflow-hidden border-4 border-gray-100 shadow-2xl">
                    <img
                      src="/images/about/tamal-adak-profile.webp"
                      alt="Tamal Adak - Main Host"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-black text-white px-4 py-2 rounded-full border-2 border-white shadow-xl">
                    <Star className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Host Info */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-900 rounded-2xl border-2 border-gray-700">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Meet Our Host</h3>
                </div>

                <h2 className="text-4xl font-bold mb-6">Tamal Adak</h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  As the main organizer since 2014, Tamal Adak has been the driving force behind our celebrations,
                  transforming it into a cherished annual tradition that unites our artistic community.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Tag icon={Calendar} text="Organizer since 2014" />
                  <Tag icon={MapPin} text="College Home" />
                  <Tag icon={Heart} text="Art Community Leader" />
                </div>
              </div>
            </div>
          </div>

        </section>




        {/* CTA Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Gallery CTA */}
              <div className="rounded-3xl p-10 border-2 border-gray-100 shadow-2xl bg-white hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-gray-900 rounded-2xl border-2 border-gray-700">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Memories</h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Explore beautiful moments from 13 years of Saraswati Puja celebrations.
                  From traditional rituals to incredible artistic performances and community gatherings.
                </p>

                <Link href="/gallery" className="inline-block">
                  <CustomButton size="sm" className="w-full text-lg py-4">
                    View Gallery
                  </CustomButton>
                </Link>
              </div>

              {/* Connect CTA */}
              <div className="rounded-3xl p-10 border-2 border-gray-100 shadow-2xl bg-black text-white hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-white/20 rounded-2xl border border-white/30">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">Join Our Art Family</h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Become part of our growing artistic community. Connect with 20+ artists,
                  participate in creative celebrations, and contribute to our cultural legacy.
                </p>

                <Link href="/connect" className="inline-block">
                  <CustomButton variant="default" size="sm" className="">
                    Get Involved
                  </CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

/* Small Reusable Components */
function Tag({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <Icon className="w-5 h-5 text-black" />
      <span className="text-sm font-semibold text-black">{text}</span>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }: any) {
  return (
    <div className="rounded-3xl p-10 border-2 border-gray-100 shadow-xl bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-900 rounded-3xl border-2 border-gray-700 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-9 h-9 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed text-center">{desc}</p>
    </div>
  )
}