import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "./service-card"

const services = [
  {
    title: "Website Design & Build",
    description: "Sites that load fast and convert. Clean structure, mobile-first, built to scale.",
    image: "/images/website-design.jpg",
    href: "/services/websites",
    gradient: "from-brand-primary/50 via-brand-secondary/40 to-brand-tertiary/30",
    spotlight: "card-spotlight-primary",
  },
  {
    title: "Branding & Design",
    description: "Visual systems that look expensive. Logo, colors, type, templates—done properly.",
    image: "/images/branding-design.jpg",
    href: "/services/branding-design",
    gradient: "from-orange-400/50 via-amber-300/40 to-pink-400/30",
    spotlight: "card-spotlight-tertiary",
  },
  {
    title: "Social & Content",
    description: "Content systems, not random posts. Calendars, templates, editing—built to last.",
    image: "/images/social-content.jpg",
    href: "/services/social-media",
    gradient: "from-cyan-400/50 via-sky-400/40 to-emerald-400/30",
    spotlight: "card-spotlight-secondary",
  },
  {
    title: "Cannabis Branding & Packaging",
    description: "High-impact packaging and drops for cannabis brands. Mylar bags, jars, pre-rolls, edibles—built to sell and stay consistent.",
    image: "/images/cannabis-branding.jpg",
    href: "/services/cannabis",
    gradient: "from-emerald-400/60 via-lime-400/40 to-amber-300/40",
    spotlight: "card-spotlight-emerald",
    objectPosition: "50% 80%",
  },
]

export function ServicesOverview() {
  return (
    <section className="section-spacing-sm border-t border-border-subtle/40">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="animate-fade-in-up">
            <SectionHeader
              eyebrow="Services"
              title="What We Build"
              subtitle="Three ways to work with TD Studios. Each designed to tie into the others."
              align="left"
              className="mb-0"
            />
          </div>
          <div className="animate-fade-in-up animate-delay-200">
            <Link
              href="/services"
              className="hidden md:inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-smooth mb-2"
            >
              View all services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={(index + 1) * 100}
            />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-smooth"
          >
            View all services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
