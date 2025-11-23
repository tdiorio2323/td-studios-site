import Link from "next/link"
import { projects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function WorkPreview() {
    const featuredProjects = projects.slice(0, 4)

    return (
        <section className="py-24 bg-bg-body">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Selected Work</h2>
                    <p className="mt-2 text-text-muted">A curated look at recent projects. Not a gallery—just the work that matters.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {featuredProjects.map((project) => (
                        <Link key={project.id} href={`/work`}>
                            <Card className="group overflow-hidden border-border-subtle bg-bg-elevated/30 transition-all hover:border-brand-primary/30">
                                <div className={`aspect-video w-full ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    {/* Placeholder for actual image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                                        {project.title.substring(0, 2).toUpperCase()}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <Badge variant="secondary" className="bg-bg-elevated text-text-muted">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <p className="text-text-muted">{project.description}</p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/work">
                        <Button variant="outline" className="border-border-subtle hover:bg-bg-elevated">
                            View All Projects
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

