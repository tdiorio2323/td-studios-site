import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { portfolioItems } from "@/lib/portfolio"

export function WorkPreview() {
  // Show the first 4 portfolio items, or a coming soon message
  const featuredItems = portfolioItems.slice(0, 4)

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

        {featuredItems.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredItems.map((item, index) => (
                <Link
                  key={item.id}
                  href="/work"
                  className={`group relative block overflow-hidden rounded-3xl glass-card shadow-lux-medium hover:shadow-lux-strong transition-all duration-500 hover-lift-subtle animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                  style={{
                    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.08)'
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10" />
                  </div>

                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={`/portfolio/${item.image}`}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                    {/* Top light reflection */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Text Overlay with refined typography */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                      <h3
                        className="text-heading-2 text-white mb-2 group-hover:text-brand-primary transition-all duration-300"
                        style={{
                          letterSpacing: '-0.02em',
                          textShadow: '0 4px 16px rgba(0, 0, 0, 0.5)'
                        }}
                      >
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm text-white/85 tracking-wide" style={{ letterSpacing: '0.01em' }}>
                          {item.subtitle}
                        </p>
                      )}
                      {/* View indicator */}
                      <div className="mt-4 inline-flex items-center text-xs font-semibold text-brand-primary/80 group-hover:text-brand-primary transition-colors duration-300 uppercase tracking-wider">
                        <span>View Project</span>
                        <span className="ml-2 w-0 h-px bg-brand-primary group-hover:w-8 transition-all duration-400" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="animate-fade-in-up animate-delay-500">
              <div className="mt-16 text-center">
                <Link href="/work">
                  <Button
                    variant="outline"
                    className="glass-light border-lux hover:glass-medium hover:border-lux-bright transition-lux"
                  >
                    View All Projects
                  </Button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="animate-fade-in-up animate-delay-100">
            <div className="text-center py-16 px-8 rounded-3xl glass-card shadow-lux-soft">
              <h3 className="text-heading-3 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Portfolio Coming Soon
              </h3>
              <p className="text-body-sm max-w-lg mx-auto text-white/80" style={{ letterSpacing: '-0.005em' }}>
                We're curating our best work to showcase here. Check back soon to see our latest projects.
              </p>
              <div className="mt-8">
                <Link href="/work">
                  <Button
                    variant="outline"
                    className="glass-light border-lux hover:glass-medium hover:border-lux-bright transition-lux"
                  >
                    Visit Work Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
