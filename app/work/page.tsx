import { PortfolioGallery } from "@/components/sections/work/portfolio-gallery"
import { FinalCTA } from "@/components/sections/home/final-cta"

export default function WorkPage() {
  return (
    <>
      <section className="section-spacing">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-display mb-6">Selected Work</h1>
            <p className="text-body-lg">
              A curated collection of our recent projects across branding, web design, social content, and packaging.
            </p>
          </div>

          {/* Gallery */}
          <PortfolioGallery />
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
