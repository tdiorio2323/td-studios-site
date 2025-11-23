import { CannabisSection } from "@/components/sections/services/cannabis-section"
import { SectionHeader } from "@/components/section-header"

export default function CannabisServicePage() {
  return (
    <>
      <section className="pt-24 pb-10 md:pt-28 md:pb-14 border-b border-border-subtle/40">
        <div className="container mx-auto px-4 sm:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Cannabis packaging & drop systems."
            description="High-end, collectible packaging design for cannabis brands—mylar bags, jars, pre-rolls, edibles, and specialty products. Built as systems you can keep using, not one-off files you outgrow."
          />
        </div>
      </section>
      <CannabisSection />
    </>
  )
}
