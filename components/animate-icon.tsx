"use client"

import { useEffect, useRef } from "react"

interface AnimateIconProps {
  iconName: string
  size?: number
  className?: string
}

export function AnimateIcon({ iconName, size = 24, className = "" }: AnimateIconProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      if (!(window as any).AnimateIcons) {
        const script = document.createElement("script")
        script.src = "https://animateicons.vercel.app/icon.js"
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [iconName])

  return (
    <div
      ref={containerRef}
      className={`inline-flex items-center justify-center transition-all duration-300 ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size }}
      data-icon={iconName}
    />
  )
}
