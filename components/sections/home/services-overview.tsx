"use client"

import Link from "next/link"
import { Monitor, Palette, Share2, Flame, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"
import { StaggerFadeIn, StaggerItem, FadeIn } from "@/components/motion/fade-in"

const services = [
  {
    title: "Website Design & Build",
    description: "Sites that load fast and convert. Clean structure, mobile-first, built to scale.",
    icon: Monitor,
    href: "/services/websites",
    gradient: "from-brand-primary/50 via-brand-secondary/40 to-brand-tertiary/30",
    iconColor: "text-brand-primary",
    spotlight: "card-spotlight-primary",
  },
  {
    title: "Branding & Design",
    description: "Visual systems that look expensive. Logo, colors, type, templates—done properly.",
    icon: Palette,
    href: "/services/branding-design",
    gradient: "from-orange-400/50 via-amber-300/40 to-pink-400/30",
    iconColor: "text-orange-400",
    spotlight: "card-spotlight-tertiary",
  },
  {
    title: "Social & Content",
    description: "Content systems, not random posts. Calendars, templates, editing—built to last.",
    icon: Share2,
    href: "/services/social-media",
    gradient: "from-cyan-400/50 via-sky-400/40 to-emerald-400/30",
    iconColor: "text-cyan-400",
    spotlight: "card-spotlight-secondary",
  },
  {
    title: "Cannabis Branding & Packaging",
    description: "High-impact packaging and drops for cannabis brands. Mylar bags, jars, pre-rolls, edibles—built to sell and stay consistent.",
    icon: Flame,
    href: "/services/cannabis",
    gradient: "from-emerald-400/60 via-lime-400/40 to-amber-300/40",
    iconColor: "text-emerald-400",
    spotlight: "card-spotlight-emerald",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-20 border-t border-border-subtle/40 bg-gradient-to-b from-bg-body via-bg-body/95 to-bg-body">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <FadeIn>
            <SectionHeader
              eyebrow="Services"
              title="What We Build"
              subtitle="Three ways to work with TD Studios. Each designed to tie into the others."
              align="left"
              className="mb-0"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors mb-2"
            >
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        <StaggerFadeIn className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full">
              <Link href={service.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className={cn(
                    "group relative h-full overflow-hidden rounded-3xl border border-border-subtle/70 bg-bg-elevated/80 px-6 py-7 transition-all duration-300 hover:bg-bg-elevated/95 hover:shadow-[0_22px_60px_rgba(0,0,0,0.75)]",
                    service.spotlight
                  )}
                >
                  {/* Gradient Backdrop */}
                  <div className={cn(
                    "pointer-events-none absolute inset-x-[-40%] -top-24 h-40 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-r",
                    service.gradient
                  )} />

                  {/* Icon Chip */}
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-body/80 ring-1 ring-border-subtle/70 group-hover:ring-transparent group-hover:bg-black/60 transition-all duration-300">
                    <service.icon className={cn("h-6 w-6 transition-colors duration-300 group-hover:text-white", service.iconColor)} />
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed mb-6 group-hover:text-text-primary/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="mt-auto inline-flex items-center text-sm font-medium text-brand-primary group-hover:text-brand-primary/90">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerFadeIn>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
          >
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
