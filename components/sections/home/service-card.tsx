"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  gradient: string
  spotlight: string
  objectPosition?: string
  delay: number
}

export function ServiceCard({
  title,
  description,
  image,
  href,
  gradient,
  spotlight,
  objectPosition,
  delay,
}: ServiceCardProps) {
  return (
    <div className={`animate-fade-in-up animate-delay-${delay}`}>
      <Link href={href} className="block h-full group">
        <motion.div
          whileHover={{
            y: -10,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
          }}
          className={cn(
            "group relative h-full flex flex-col overflow-hidden rounded-3xl glass-card shadow-lux-medium hover:shadow-lux-strong transition-all duration-500",
            spotlight
          )}
          style={{
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Hover glow overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
          </div>

          {/* Image Box with refined overlay */}
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
              style={{ objectPosition: objectPosition || "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Gradient overlay for sophistication */}
            <div className={cn(
              "absolute inset-0 opacity-25 group-hover:opacity-30 mix-blend-overlay bg-gradient-to-br transition-opacity duration-500",
              gradient
            )} />
            {/* Dark vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            {/* Top light reflection */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Content with enhanced spacing */}
          <div className="relative flex flex-col flex-grow p-7 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-brand-primary mb-3 tracking-tight transition-all duration-300 group-hover:text-brand-primary/90" style={{ letterSpacing: '-0.02em' }}>
              {title}
            </h3>

            <p className="text-sm text-white/85 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-white/95" style={{ letterSpacing: '-0.005em', lineHeight: '1.6' }}>
              {description}
            </p>

            <div className="mt-auto inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-white transition-all duration-300">
              <span className="relative">
                Learn more
                <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-primary group-hover:w-full transition-all duration-400" />
              </span>
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-400 group-hover:translate-x-2" />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}
