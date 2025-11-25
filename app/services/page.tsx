import { ServicesOverview } from "@/components/sections/home/services-overview"
import { FinalCTA } from "@/components/sections/home/final-cta"

export default function ServicesPage() {
  return (
    <>
      <div className="section-spacing-sm container mx-auto container-padding text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-display mb-6">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-body-lg">
            Four ways to work with TD Studios. Each built to tie into the others—site, brand, content, and packaging.
          </p>
        </div>
      </div>
      <ServicesOverview />
      <FinalCTA />
    </>
  )
}
