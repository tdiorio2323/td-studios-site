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
    <section className="section-spacing-sm border-t border-lux-subtle/40 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto container-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Image - Premium Glass Treatment */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-24">
            <div className="animate-fade-in-up">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl glass-panel shadow-lux-strong group hover-lift-subtle transition-all duration-500"
                style={{
                  boxShadow: '0 24px 80px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.1)'
                }}
              >
                <Image
                  src="/close-method.jpg"
                  alt="The C.L.O.S.E. Method Book"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40" />
                {/* Top light reflection */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                {/* Inner glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 via-transparent to-transparent" />
                </div>
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

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group relative pl-10 p-6 rounded-2xl glass-light hover:glass-medium transition-all duration-400 hover-lift-subtle animate-fade-in-up animate-delay-${(index + 1) * 100}`}
                >
                  <div className="absolute left-4 top-6 text-xs font-bold text-brand-primary/60 group-hover:text-brand-primary transition-colors duration-300" style={{ letterSpacing: '0.1em' }}>
                    {step.number}
                  </div>
                  <div className="absolute left-6 top-9 bottom-6 w-px bg-gradient-to-b from-brand-primary/30 to-transparent group-hover:from-brand-primary/50 transition-colors duration-300" />
                  <h3 className="mb-3 text-lg font-bold text-white group-hover:text-brand-primary transition-colors duration-300" style={{ letterSpacing: '-0.015em' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="animate-fade-in-up animate-delay-500">
              <p className="mt-10 text-xs text-white/70 tracking-wide" style={{ letterSpacing: '0.01em' }}>
                Want the full breakdown?{" "}
                <a
                  href="/process"
                  className="text-brand-primary font-semibold underline underline-offset-4 decoration-brand-primary/30 transition-all duration-300 hover:text-white hover:decoration-white"
                >
                  Learn how the C.L.O.S.E. Method™ works
                </a>
                .
              </p>

              <div className="mt-10">
                <Link href="/process">
                  <Button
                    variant="outline"
                    className="glass-light border-lux hover:glass-medium hover:border-lux-bright transition-lux"
                  >
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
