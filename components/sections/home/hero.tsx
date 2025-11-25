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
      <div className="container mx-auto container-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-display text-white"
            >
              Elevate your digital presence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="max-w-lg text-body-lg text-white"
            >
              Websites that convert. Branding that looks expensive. Content systems that don't fall apart after a week.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white border-0 transition-smooth hover:scale-105">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-border-subtle hover:bg-bg-elevated hover:text-brand-primary transition-smooth">
                  View Selected Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-8 lg:mt-0">
            {/* Glass Card Container */}
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: shouldReduceMotion ? 0 : -4 }}
              className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.75)] transition-smooth"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-image.jpg"
                  alt="TD Studios hero visual"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
