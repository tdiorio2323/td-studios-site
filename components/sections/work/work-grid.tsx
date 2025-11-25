import Link from "next/link"
import { projects, ServiceType } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const gradientMap: Record<ServiceType, string> = {
  web: "from-brand-primary/20 via-brand-secondary/10 to-transparent",
  branding: "from-orange-500/20 via-amber-500/10 to-transparent",
  social: "from-cyan-500/20 via-blue-500/10 to-transparent",
  cannabis: "from-emerald-500/20 via-lime-500/10 to-transparent",
}

export function WorkGrid() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-display mb-6">Selected Work</h1>
          <p className="text-body-lg max-w-2xl">
            A collection of digital products, brand identities, and content systems we've crafted.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 500)}`}
            >
              <Link href={`/work`}>
                <Card className="group h-full overflow-hidden border-border-subtle bg-bg-elevated/30 hover-lift hover:border-brand-primary/30 hover:shadow-2xl">
                  {/* Image / Placeholder Area */}
                  <div className={cn(
                    "aspect-video w-full relative overflow-hidden bg-bg-elevated",
                    "bg-gradient-to-br",
                    gradientMap[project.serviceType]
                  )}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-smooth" />

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-bg-body/80 backdrop-blur-md border-border-subtle text-text-primary uppercase tracking-wider text-[10px]">
                        {project.serviceType}
                      </Badge>
                    </div>

                    {/* Placeholder Text (Initials) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-smooth select-none">
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
                      <h3 className="text-heading-2 text-text-primary group-hover:text-brand-primary transition-smooth leading-tight">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-body-sm mb-6 line-clamp-3">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
