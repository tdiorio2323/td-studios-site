import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

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
    <section className="section-spacing-sm border-t border-border-subtle/40">
      <div className="container mx-auto container-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border-subtle shadow-2xl">
                <Image
                  src="/close-method.jpg"
                  alt="The C.L.O.S.E. Method Book"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="animate-fade-in-up">
              <SectionHeader
                eyebrow="The System"
                title="The C.L.O.S.E. Method"
                subtitle="Every TD Studios build follows this framework so projects stay structured, on-track, and on-time—without endless revision loops."
                align="left"
              />
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative pl-8 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="absolute left-0 top-0 text-xs font-bold text-brand-primary/50">
                    {step.number}
                  </div>
                  <div className="absolute left-0 top-6 bottom-0 w-px bg-border-subtle" />
                  <h3 className="mb-2 text-lg font-bold text-text-primary">{step.title}</h3>
                  <p className="text-body-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up animate-delay-500">
              <p className="mt-8 text-xs text-text-muted">
                Want the full breakdown?{" "}
                <a
                  href="/process"
                  className="text-brand-primary underline underline-offset-4 transition-smooth hover:text-brand-primary/80"
                >
                  Learn how the C.L.O.S.E. Method™ works
                </a>
                .
              </p>

              <div className="mt-10">
                <Link href="/process">
                  <Button variant="outline" className="border-border-subtle hover:bg-bg-body transition-smooth">
                    View Full Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
