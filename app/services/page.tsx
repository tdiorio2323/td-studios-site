import { ServicesOverview } from "@/components/sections/home/services-overview"
import { FinalCTA } from "@/components/sections/home/final-cta"

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-12 container mx-auto px-4 sm:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-text-muted">
          Three ways to work with TD Studios. Each built to tie into the others—site, brand, and content.
        </p>
      </div>
      <ServicesOverview />
      <FinalCTA />
    </>
  )
}
