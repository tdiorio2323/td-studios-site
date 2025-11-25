import Image from "next/image"
import { portfolioItems } from "@/lib/portfolio"

const categoryColors = {
  branding: "from-orange-500/80 to-amber-500/80",
  web: "from-brand-primary/80 to-brand-secondary/80",
  social: "from-cyan-500/80 to-blue-500/80",
  cannabis: "from-emerald-500/80 to-lime-500/80",
  packaging: "from-pink-500/80 to-purple-500/80",
}

export function PortfolioGallery() {
  if (portfolioItems.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="max-w-lg mx-auto animate-fade-in-up">
          <h3 className="text-heading-2 mb-4">Portfolio Coming Soon</h3>
          <p className="text-body mb-6">
            Drop your images into <code className="px-2 py-1 bg-bg-elevated rounded text-brand-primary">public/portfolio/</code>
          </p>
          <p className="text-body-sm">
            Then add their details to <code className="px-2 py-1 bg-bg-elevated rounded text-brand-primary">lib/portfolio.ts</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item, index) => (
        <div
          key={item.id}
          className={`group relative overflow-hidden rounded-2xl bg-bg-elevated border border-border-subtle hover-lift cursor-pointer animate-fade-in-up animate-delay-${Math.min((index + 1) * 100, 500)}`}
        >
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={`/portfolio/${item.image}`}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Gradient Overlay - shows on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-90 transition-opacity duration-300 ${
                item.category ? categoryColors[item.category] : "from-bg-body/80 to-bg-elevated/80"
              }`}
            />

            {/* Text Overlay - shows on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-heading-3 text-white text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-white/90 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.subtitle}
                </p>
              )}
              {item.category && (
                <span className="mt-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
