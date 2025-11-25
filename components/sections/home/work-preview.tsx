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
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-2xl bg-bg-elevated border border-border-subtle hover-lift cursor-pointer animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <Link href="/work">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <Image
                        src={`/portfolio/${item.image}`}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-body/90 via-bg-body/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6">
                        <h3 className="text-heading-2 text-white mb-1 group-hover:text-brand-primary transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm text-white/80">{item.subtitle}</p>
                        )}
                      </div>
                    </div>
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
          </>
        ) : (
          <div className="animate-fade-in-up animate-delay-100">
            <div className="text-center py-12 px-6 rounded-2xl border border-border-subtle bg-bg-elevated/30">
              <h3 className="text-heading-3 mb-3">Portfolio Coming Soon</h3>
              <p className="text-body-sm max-w-lg mx-auto">
                We're curating our best work to showcase here. Check back soon to see our latest projects.
              </p>
              <div className="mt-6">
                <Link href="/work">
                  <Button variant="outline" className="border-border-subtle hover:bg-bg-elevated transition-smooth">
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
