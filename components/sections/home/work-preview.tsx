import Link from "next/link"
import { projects, ServiceType } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

const serviceColors: Record<ServiceType, string> = {
    web: "bg-brand-primary/20 text-brand-primary",
    branding: "bg-orange-500/20 text-orange-500",
    social: "bg-cyan-500/20 text-cyan-500",
    cannabis: "bg-emerald-500/20 text-emerald-500",
}

const gradientMap: Record<ServiceType, string> = {
    web: "from-brand-primary/20 via-brand-secondary/10 to-transparent",
    branding: "from-orange-500/20 via-amber-500/10 to-transparent",
    social: "from-cyan-500/20 via-blue-500/10 to-transparent",
    cannabis: "from-emerald-500/20 via-lime-500/10 to-transparent",
}

export function WorkPreview() {
    const featuredProjects = projects.slice(0, 4)

    return (
        <section className="section-spacing-sm border-t border-border-subtle/40">
            <div className="container mx-auto container-padding">
                <div className="animate-fade-in-up">
                    <SectionHeader
                        eyebrow="Selected Work"
                        title="A curated look at what we build"
                        subtitle="Not every project makes it here—only the work that best represents how we think about structure, visuals, and performance."
                        align="left"
                    />
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {featuredProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className={`animate-fade-in-up animate-delay-${(index + 1) * 100}`}
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
                                            <h3 className="text-2xl font-bold text-text-primary group-hover:text-brand-primary transition-smooth leading-tight">
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

                <div className="animate-fade-in-up animate-delay-500">
                    <div className="mt-12 text-center">
                        <Link href="/work">
                            <Button variant="outline" className="border-border-subtle hover:bg-bg-elevated transition-smooth">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
