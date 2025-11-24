"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { FadeIn, StaggerFadeIn, StaggerItem } from "@/components/motion/fade-in"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understand the outcome, the audience, and what success looks like.",
  },
  {
    number: "02",
    title: "Design & Systems",
    description: "Build the visual and technical foundation. No surprises later.",
  },
  {
    number: "03",
    title: "Build & Content",
    description: "Execute the build and create the assets. Tight feedback loops.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Go live. Monitor, refine, and keep moving forward.",
  },
]

export function ProcessPreview() {
  return (
    <section className="py-16 md:py-20 border-t border-border-subtle/40 bg-gradient-to-b from-bg-body via-bg-body/95 to-bg-body">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24">
            <FadeIn direction="right" duration={0.8}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-subtle shadow-2xl">
                <Image
                  src="/close-method.jpg"
                  alt="The C.L.O.S.E. Method Book"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Content */}
          <div>
            <FadeIn>
              <SectionHeader
                eyebrow="The System"
                title="The C.L.O.S.E. Method"
                subtitle="Every TD Studios build follows this framework so projects stay structured, on-track, and on-time—without endless revision loops."
                align="left"
              />
            </FadeIn>

            <StaggerFadeIn className="mt-8 grid gap-8 sm:grid-cols-2">
              {steps.map((step) => (
                <StaggerItem key={step.number} className="relative pl-8">
                  <div className="absolute left-0 top-0 text-xs font-bold text-brand-primary/50">
                    {step.number}
                  </div>
                  <div className="absolute left-0 top-6 bottom-0 w-px bg-border-subtle" />
                  <h3 className="mb-2 text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.description}</p>
                </StaggerItem>
              ))}
            </StaggerFadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-8 text-xs text-text-muted">
                Want the full breakdown?{" "}
                <a
                  href="/process"
                  className="text-brand-primary underline underline-offset-4"
                >
                  Learn how the C.L.O.S.E. Method™ works
                </a>
                .
              </p>

              <div className="mt-10">
                <Link href="/process">
                  <Button variant="outline" className="border-border-subtle hover:bg-bg-body">
                    View Full Process
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
