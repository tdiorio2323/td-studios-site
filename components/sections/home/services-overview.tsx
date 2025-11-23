import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Palette, Share2, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Website Design & Build",
    description: "Sites that load fast and convert. Clean structure, mobile-first, built to scale.",
    icon: Monitor,
    href: "/services/websites",
    color: "text-brand-primary",
    borderColor: "hover:border-brand-primary/50",
  },
  {
    title: "Branding & Design",
    description: "Visual systems that look expensive. Logo, colors, type, templates—done properly.",
    icon: Palette,
    href: "/services/branding-design",
    color: "text-brand-tertiary",
    borderColor: "hover:border-brand-tertiary/50",
  },
  {
    title: "Social & Content",
    description: "Content systems, not random posts. Calendars, templates, editing—built to last.",
    icon: Share2,
    href: "/services/social-media",
    color: "text-brand-secondary",
    borderColor: "hover:border-brand-secondary/50",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-bg-body">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What We Build</h2>
            <p className="mt-2 text-text-muted">Three ways to work with TD Studios. Each designed to tie into the others.</p>
          </div>
          <Link href="/services" className="text-sm font-medium text-brand-primary hover:underline">
            View all services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className={`h-full bg-bg-elevated/50 backdrop-blur-sm border-border-subtle transition-all duration-300 hover:-translate-y-1 ${service.borderColor}`}>
                <CardHeader>
                  <service.icon className={`h-10 w-10 ${service.color} mb-4`} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-muted mb-6">{service.description}</p>
                  <div className={`flex items-center text-sm font-medium ${service.color}`}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
