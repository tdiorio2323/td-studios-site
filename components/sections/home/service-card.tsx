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
      <Link href={href} className="block h-full">
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={cn(
            "group relative h-full flex flex-col overflow-hidden rounded-3xl border border-border-subtle/70 bg-bg-elevated/80 transition-all duration-300 hover:bg-bg-elevated/95 hover:shadow-[0_22px_60px_rgba(0,0,0,0.75)]",
            spotlight
          )}
        >
          {/* Image Box */}
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: objectPosition || "center" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className={cn(
              "absolute inset-0 opacity-30 mix-blend-overlay bg-gradient-to-r",
              gradient
            )} />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow p-6">
            <h3 className="text-lg font-semibold text-brand-primary mb-3 transition-colors">
              {title}
            </h3>

            <p className="text-sm text-black leading-relaxed mb-6 transition-colors">
              {description}
            </p>

            <div className="mt-auto inline-flex items-center text-sm font-medium text-brand-primary group-hover:text-brand-primary/90">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  )
}
