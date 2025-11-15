"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const FULL_YEARS = [
  { year: "2012", text: "Initial gatherings and cultural discussions began" },
  { year: "2013", text: "Established the core artistic community foundation" },
  { year: "2014", text: "First official Saraswati Puja celebration" },
  { year: "2015", text: "Expanded community involvement and activities" },
  { year: "2016", text: "Collaborative artist performances began" },
  { year: "2017", text: "Started annual art exhibition tradition" },
  { year: "2018", text: "Introduced professional cultural programs" },
  { year: "2019", text: "Expanded to multi-day festival" },
  { year: "2020", text: "20+ artists joined celebrations" },
  { year: "2021", text: "Hybrid virtual + physical celebration" },
  { year: "2022", text: "Record participation with exhibitions" },
  { year: "2023", text: "International artist collaborations" },
  { year: "2024", text: "A decade of artistic tradition continues" },
  { year: "2025", text: "Expanded to national-level participation" },
  { year: "2026", text: "13 years of celebrating creativity" },
  { year: "2027", text: "Largest community gathering" },
  { year: "2028", text: "15 years of cultural excellence" },
]

const DESKTOP_RANGE = FULL_YEARS.filter(
  (y) => Number(y.year) >= 2014 && Number(y.year) <= 2026
)

export function TimelineFinal() {
  const scroller = useRef<HTMLDivElement | null>(null)
  const [items, setItems] = useState(FULL_YEARS)
  const [activeIndex, setActiveIndex] = useState(0)

  // Select range based on screen size
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) {
        setItems(DESKTOP_RANGE) // only 2014–2026
      } else {
        setItems(FULL_YEARS) // 2012–2028 on mobile
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  // Auto-scroll without scrollIntoView()
  useEffect(() => {
    const container = scroller.current
    if (!container) return

    const auto = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % items.length
        const cards = container.querySelectorAll(".timeline-card") as NodeListOf<HTMLElement>
        const card = cards[next]
        if (card) {
          const leftOffset =
            card.offsetLeft -
            container.clientWidth / 2 +
            card.clientWidth / 2

          container.scrollTo({
            left: leftOffset,
            behavior: "smooth",
          })
        }
        return next
      })
    }, 2500)

    return () => clearInterval(auto)
  }, [items])

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey Through Years</h2>
        <p className="text-gray-600">
          From {items[0].year} to {items[items.length - 1].year}
        </p>
      </div>

      <div className="relative px-4">
        <div
          ref={scroller}
          className="overflow-hidden"
        >
          <div className="flex gap-6 py-6 relative min-w-max">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className={`
                  timeline-card w-[250px] shrink-0 p-6 text-center 
                  rounded-2xl border shadow-lg bg-white transition-all
                  ${i === activeIndex ? "scale-105 shadow-2xl border-black" : "scale-95 opacity-70"}
                `}
              >
                <div className="text-sm font-semibold text-gray-600 mb-3">
                  {item.year}
                </div>
                <div
                  className={`
                    w-14 h-14 rounded-full mx-auto flex items-center justify-center
                    text-lg font-bold border
                    ${i === activeIndex ? "bg-black text-white border-black" : "bg-gray-200 border-gray-300"}
                  `}
                >
                  {item.year}
                </div>
                <p className="mt-4 text-gray-700 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
