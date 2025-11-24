"use client"

import { CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { FadeIn, StaggerFadeIn, StaggerItem } from "@/components/motion/fade-in"

const clients = [
  {
    title: "Serious Brands",
    description: "You value quality and want your business to look as good as it performs.",
  },
  {
    title: "Creators Who Sell",
    description: "You're beyond the starter phase and need a system that supports your offers.",
  },
  {
    title: "Agencies & Partners",
    description: "You need a reliable creative partner for white-label work. No drama.",
  },
]

export function WhoItsFor() {
  return (
    <section className="py-16 md:py-20 border-t border-border-subtle/40 bg-gradient-to-b from-bg-body via-bg-body/95 to-bg-body">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <SectionHeader
              eyebrow="Who We Work With"
              title="For brands and creators who take their image seriously"
              subtitle="If you care how your brand looks, loads, and converts, TD Studios is built for you. We’re not for bargain hunters or quick-fix projects."
              align="center"
            />
          </FadeIn>
        </div>

        <StaggerFadeIn className="mt-12 grid gap-8 md:grid-cols-3">
          {clients.map((client) => (
            <StaggerItem key={client.title} className="flex flex-col items-center text-center p-6 rounded-2xl bg-bg-elevated/30 border border-border-subtle/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-elevated text-brand-primary ring-1 ring-border-subtle">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-primary">{client.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{client.description}</p>
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  )
}
