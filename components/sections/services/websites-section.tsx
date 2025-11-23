import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function WebsitesSection() {
  const websiteProjects = projects.filter(p => p.serviceType === "web").slice(0, 3)

  return (
    <div className="space-y-24 py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
            Websites that <span className="text-brand-primary">convert</span>.
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Conversion-focused website builds and revamps. Sites that load fast, look clean, and are easy to manage after launch.
          </p>
          <Link href="/contact?service=website">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              Start Your Website Build
            </Button>
          </Link>
        </div>
      </section>

      {/* What you get & Best for */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* What you get */}
          <Card className="p-8 bg-bg-elevated/50 border-border-subtle">
            <h3 className="text-2xl font-bold mb-6">What you get</h3>
            <ul className="space-y-4">
              {[
                "Custom design (Figma)",
                "Next.js/React build",
                "Mobile-first, fully responsive",
                "Basic SEO & meta tags",
                "CMS integration (Sanity/Contentful)",
                "Full handoff & documentation"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-primary shrink-0" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Best for */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Best for</h3>
            <ul className="space-y-6">
              {[
                { title: "New Brands", desc: "You need a solid foundation and want it done right from day one." },
                { title: "Serious Redesigns", desc: "Your current site doesn't match your level. Time for an upgrade." },
                { title: "Landing Pages & Funnels", desc: "Speed, clarity, conversion. Every element matters." }
              ].map((item) => (
                <li key={item.title}>
                  <h4 className="font-bold text-lg text-text-primary">{item.title}</h4>
                  <p className="text-text-muted">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Micro Projects */}
      <section className="container mx-auto px-4 sm:px-8">
        <h3 className="text-2xl font-bold mb-8">Recent Builds</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {websiteProjects.map((project) => (
            <Link key={project.slug} href="/work">
              <div className="group cursor-pointer">
                <div className={cn(
                  "aspect-video rounded-xl mb-4 border border-border-subtle group-hover:border-brand-primary/50 transition-colors overflow-hidden relative",
                  "bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-transparent"
                )}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors select-none">
                    {project.name.substring(0, 2).toUpperCase()}
                  </div>
                </div>
                <h4 className="font-bold text-lg group-hover:text-brand-primary transition-colors">{project.name}</h4>
                <p className="text-sm text-text-muted line-clamp-2">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-8 text-center">
        <Link href="/contact?service=website">
          <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white">
            Get a Quote for Your Site <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
