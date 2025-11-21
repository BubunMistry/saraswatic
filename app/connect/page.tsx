"use client"

import type React from "react"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomButton } from "@/components/custom-button"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube, Users } from "lucide-react"

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

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
        alt="Contact Illustration"
        className="w-32 sm:w-48 md:w-64 lg:w-72 xl:w-80 object-contain mx-auto"
      />
    </div>

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl xl:text-6xl 
                   font-bold mb-3 leading-tight tracking-wide">
      Connect With Us
    </h1>

    {/* Sub Text */}
    <p className="text-xs sm:text-base xl:text-lg 
                 text-gray-300 leading-relaxed max-w-xl mx-auto">
      Have questions about our Saraswati Puja celebrations? <br /> We'd love to hear from you!
    </p>
  </div>
</section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Information - Left Side */}
              <div className="lg:col-span-2 space-y-6">
                {/* Address Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black rounded-2xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Visit Us</h3>
                  </div>
                  <address className="not-italic text-gray-700 leading-relaxed space-y-3">
                    <div className="text-lg font-semibold text-black">103, Tripura Roy Lane</div>
                    <div>Salkia, Howrah – 711106</div>
                    <div>West Bengal, India</div>
                  </address>
                </div>

                {/* Contact Details Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black rounded-2xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Contact Details</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone className="w-5 h-5 text-black" />
                      <span>+91 98048 76362</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail className="w-5 h-5 text-black" />
                      <span>tamal.d3440@gmail.com / collagesaraswatiofficial@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-5 h-5 text-black" />
                      <span>Always available for inquiries</span>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black rounded-2xl">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Follow Us</h3>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="https://facebook.com/tamal.das.522"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-300 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-black hover:bg-white group"
                    >
                      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Facebook</span>
                    </a>
                    <a
                      href="https://instagram.com/tamal.das2210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-300 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-black hover:bg-white group"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Instagram</span>
                    </a>
                    <a
                      href="https://youtube.com/@tamaldas2877"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-black transition-all duration-300 p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-black hover:bg-white group"
                    >
                      <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form & Map - Right Side */}
              <div className="lg:col-span-3 space-y-8">

                {/* Contact Form */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-black rounded-2xl">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Send us a Message</h2>
                  </div>

                  {submitted && (
                    <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-5 rounded-lg mb-8 flex items-center gap-3">
                      <CheckCircle className="w-6 h-6" />
                      <div>
                        <p className="font-semibold">Thank you for your message!</p>
                        <p className="text-sm opacity-80">We'll get back to you soon.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                      <label className="block text-black font-semibold mb-3">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 bg-white text-black border-2 border-gray-300 rounded-xl 
          focus:outline-none focus:border-black transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-black font-semibold mb-3">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 bg-white text-black border-2 border-gray-300 rounded-xl 
            focus:outline-none focus:border-black transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-black font-semibold mb-3">Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-3 bg-white text-black border-2 border-gray-300 rounded-xl 
            focus:outline-none focus:border-black transition-colors duration-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-black font-semibold mb-3">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-5 py-3 bg-white text-black border-2 border-gray-300 rounded-xl 
          focus:outline-none focus:border-black transition-colors duration-300 resize-none"
                        placeholder="Tell us about your inquiry or how you'd like to be involved..."
                      />
                    </div>

                    {/* FIXED FULL-WIDTH CUSTOM BUTTON */}
                    <div className=" text-center">
                      <CustomButton
                        type="submit"
                        variant="default"
                        size="sm"
                        className=" items-center justify-center gap-2"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </CustomButton>
                    </div>

                  </form>
                </div>

                {/* Map Integration */}
                <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black rounded-2xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">Find Our Location</h3>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.7600852471369!2d88.34463225390846!3d22.59956622272832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277000846780b%3A0x712fff88310a98f4!2sHome!5e0!3m2!1sen!2sin!4v1763230887531!5m2!1sen!2sin"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-gray-600 text-sm">
                      Visit us at our Collage home for Saraswati Puja celebrations
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="py-16 px-4 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Event Timing",
                  description: "Saraswati Puja is celebrated annually in January/February. Contact us for exact dates.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description: "Join our growing family of 100+ members celebrating together since 2014.",
                },
                {
                  icon: MapPin,
                  title: "Easy Access",
                  description: "Located in central Howrah with good transportation links and parking availability.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-black rounded-2xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
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