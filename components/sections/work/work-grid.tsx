"use client"

import Link from "next/link"
import { projects, ServiceType } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { FadeIn, StaggerFadeIn, StaggerItem } from "@/components/motion/fade-in"

const gradientMap: Record<ServiceType, string> = {
  web: "from-brand-primary/20 via-brand-secondary/10 to-transparent",
  branding: "from-orange-500/20 via-amber-500/10 to-transparent",
  social: "from-cyan-500/20 via-blue-500/10 to-transparent",
  cannabis: "from-emerald-500/20 via-lime-500/10 to-transparent",
}

export function WorkGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">Selected Work</h1>
            <p className="text-xl text-text-muted max-w-2xl">
              A collection of digital products, brand identities, and content systems we've crafted.
            </p>
          </div>
        </FadeIn>

        <StaggerFadeIn className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/work`}>
                <Card className="group h-full overflow-hidden border-border-subtle bg-bg-elevated/30 transition-all hover:border-brand-primary/30 hover:shadow-2xl hover:-translate-y-1">
                  {/* Image / Placeholder Area */}
                  <div className={cn(
                    "aspect-video w-full relative overflow-hidden bg-bg-elevated",
                    "bg-gradient-to-br",
                    gradientMap[project.serviceType]
                  )}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-bg-body/80 backdrop-blur-md border-border-subtle text-text-primary uppercase tracking-wider text-[10px]">
                        {project.serviceType}
                      </Badge>
                    </div>

                    {/* Placeholder Text (Initials) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                        {project.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-brand-primary uppercase tracking-wider">
                          {project.client}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-colors leading-tight">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-bg-elevated px-2 py-1 text-xs font-medium text-text-muted ring-1 ring-inset ring-border-subtle/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  )
}
