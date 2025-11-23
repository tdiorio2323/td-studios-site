import { Hero } from "@/components/sections/home/hero"
import { ServicesOverview } from "@/components/sections/home/services-overview"
import { WorkPreview } from "@/components/sections/home/work-preview"
import { ProcessPreview } from "@/components/sections/home/process-preview"
import { WhoItsFor } from "@/components/sections/home/who-its-for"
import { FinalCTA } from "@/components/sections/home/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WorkPreview />
      <ProcessPreview />
      <WhoItsFor />
      <FinalCTA />
    </>
  )
}
