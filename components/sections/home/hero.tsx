"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-32 md:pb-48">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div 
          className="absolute -inset-[10px] opacity-40 blur-[80px] animate-aurora"
          style={{
            backgroundImage: `
              radial-gradient(at 0% 0%, var(--brand-primary) 0px, transparent 50%),
              radial-gradient(at 98% 1%, var(--brand-secondary) 0px, transparent 50%),
              radial-gradient(at 5% 95%, var(--brand-tertiary) 0px, transparent 50%),
              radial-gradient(at 95% 95%, var(--brand-primary) 0px, transparent 50%),
              radial-gradient(at 50% 50%, var(--bg-body) 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%'
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">


            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl"
            >
              Elevate your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary">
                digital presence.
              </span>
            </motion.h1>

            <FadeIn delay={0.1}>
              <p className="max-w-lg text-lg text-text-muted md:text-xl">
                Websites that convert. Branding that looks expensive. Content systems that don't fall apart after a week.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/work">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-border-subtle hover:bg-bg-elevated hover:text-brand-primary">
                    View Selected Work
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-8 lg:mt-0">
            {/* Gradient Glow */}
            <div className="absolute inset-[-40%] -z-10 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-tertiary opacity-25 blur-3xl" />

            {/* Glass Card Container */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-image.jpg"
                  alt="TD Studios hero visual"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
