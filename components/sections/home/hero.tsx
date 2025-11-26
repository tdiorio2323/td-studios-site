"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden section-spacing-lg">
      {/* Ambient Background Glow */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto container-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-8">
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-white"
              style={{ textShadow: '0 2px 24px rgba(255, 255, 255, 0.1)' }}
            >
              Elevate your digital presence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg text-body-lg text-white/95"
            >
              Websites that convert. Branding that looks expensive. Content systems that don't fall apart after a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lux-glow hover:shadow-[0_20px_60px_rgba(214,0,28,0.25),0_8px_24px_rgba(214,0,28,0.2)] transition-all duration-400"
                  style={{
                    transform: 'perspective(1000px)',
                    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) translateY(-2px) scale(1.02)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) translateY(0) scale(1)'
                  }}
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto glass-light border-lux hover:glass-medium hover:border-lux-bright transition-lux"
                >
                  View Selected Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual - Premium Glass Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: shouldReduceMotion ? 0 : -8,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className="group relative overflow-hidden rounded-3xl glass-panel shadow-lux-strong hover-lift-subtle"
              style={{
                boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              }}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />
              </div>

              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-image.jpg"
                  alt="TD Studios hero visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
              </div>

              {/* Light reflection effect */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
