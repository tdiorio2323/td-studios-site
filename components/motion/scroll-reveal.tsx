"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      element.style.opacity = "1"
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation by adding class after delay
            setTimeout(() => {
              element.classList.add("animate-fade-in-up")
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
