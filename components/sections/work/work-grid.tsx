import Link from "next/link"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function WorkGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">Selected Work</h1>
          <p className="text-xl text-text-muted max-w-2xl">
            A collection of digital products, brand identities, and content systems we've crafted.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.id} href={`/work`}>
              <Card className="group overflow-hidden border-border-subtle bg-bg-elevated/30 transition-all hover:border-brand-primary/30 h-full flex flex-col">
                <div className={`aspect-video w-full ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {project.title.substring(0, 2).toUpperCase()}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="bg-bg-elevated text-text-muted">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-text-muted mt-2">{project.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
