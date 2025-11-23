import Link from "next/link"
import { Leaf, Package, Sparkles, Layers, ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { FadeIn, StaggerFadeIn, StaggerItem } from "@/components/motion/fade-in"

const highlightPacks = [
  {
    label: "Mylar Bag Series",
    text: "Full flavor lines, compliant layouts, front/back systems.",
  },
  {
    label: "Jar + Pre-roll Sets",
    text: "Coordinated jar lids, pre-roll tubes, and box wraps.",
  },
  {
    label: "Edibles + Specialty",
    text: "Gummies, chocolates, beverages, and seasonal drop concepts.",
  },
]

const processSteps = [
  {
    title: "1. Brand + Market Calibration",
    text: "We align your visual direction with your target market, strain lineup, and existing brand assets—if they exist.",
  },
  {
    title: "2. Concept + System Design",
    text: "We design key hero SKUs first, then expand into a full packaging system across bags, jars, tubes, and boxes.",
  },
  {
    title: "3. Print-Ready Production Files",
    text: "You receive layered, production-ready artwork set up for printers—no messy files, no guesswork.",
  },
  {
    title: "4. Launch Assets",
    text: "Optional add-ons: mockups, social launch graphics, menu images, and drop promo material.",
  },
]

export function CannabisSection() {
  return (
    <section className="border-t border-border-subtle/40 bg-gradient-to-b from-bg-body via-bg-body/95 to-bg-body py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-8 space-y-16 md:space-y-20">
        {/* Intro */}
        <FadeIn>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <SectionHeader
                eyebrow="Cannabis"
                title="Packaging that actually gets picked up."
                description="TD Studios designs high-end cannabis packaging systems—mylar bags, jars, pre-rolls, and edibles—that look premium on the shelf and consistent across every drop."
              />
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-emerald-500/15 text-emerald-300 border-emerald-500/40">
                  Mylar lines &amp; flavor drops
                </Badge>
                <Badge className="bg-lime-400/15 text-lime-200 border-lime-400/40">
                  Jar &amp; pre-roll sets
                </Badge>
                <Badge className="bg-amber-300/15 text-amber-100 border-amber-300/40">
                  Edibles &amp; specialty packs
                </Badge>
              </div>
            </div>

            <Card className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl shadow-[0_22px_60px_rgba(0,0,0,0.75)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-lime-400/15 to-amber-300/20 opacity-70" />
              <div className="relative space-y-4 p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-emerald-100">
                  <Leaf className="h-3.5 w-3.5 text-emerald-300" />
                  Cannabis Packaging Focus
                </div>
                <p className="text-sm text-text-muted">
                  Perfect for brands who want their flower and products to feel collectible, not generic. We focus on strong shelf presence, clear hierarchy, and repeatable systems.
                </p>
                <ul className="space-y-2 text-sm text-text-muted/90">
                  <li>• Full strain lines and flavor families</li>
                  <li>• Single-drop concepts and collabs</li>
                  <li>• Rebrands and system clean-ups</li>
                </ul>
              </div>
            </Card>
          </div>
        </FadeIn>

        {/* Value pillars */}
        <StaggerFadeIn className="grid gap-6 md:grid-cols-3">
          <StaggerItem>
            <Card className="group relative h-full overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/25 via-emerald-400/10 to-bg-elevated/20 opacity-80 group-hover:opacity-100" />
              <div className="relative space-y-3 p-6">
                <div className="inline-flex items-center justify-center rounded-full border border-emerald-400/40 bg-black/50 p-2">
                  <Package className="h-4 w-4 text-emerald-300" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  Systems, not one-off bags
                </h3>
                <p className="text-sm text-text-muted">
                  We design full packaging ecosystems—front, back, variants, and guidelines—so every future drop stays on brand.
                </p>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="group relative h-full overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:border-lime-300/60 hover:shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lime-400/25 via-lime-300/10 to-bg-elevated/20 opacity-80 group-hover:opacity-100" />
              <div className="relative space-y-3 p-6">
                <div className="inline-flex items-center justify-center rounded-full border border-lime-300/40 bg-black/50 p-2">
                  <Layers className="h-4 w-4 text-lime-200" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  Print-ready, production clean
                </h3>
                <p className="text-sm text-text-muted">
                  Files are built for real-world printers—proper bleed, layers, dielines, and callouts. No rebuilding, no guessing.
                </p>
              </div>
            </Card>
          </StaggerItem>

          <StaggerItem>
            <Card className="group relative h-full overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl transition-transform duration-200 hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-300/25 via-amber-200/10 to-bg-elevated/20 opacity-80 group-hover:opacity-100" />
              <div className="relative space-y-3 p-6">
                <div className="inline-flex items-center justify-center rounded-full border border-amber-300/40 bg-black/50 p-2">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  Drop-ready visuals
                </h3>
                <p className="text-sm text-text-muted">
                  Optional add-ons for 3D mockups, social graphics, and menus so the drop looks as good online as it does on the shelf.
                </p>
              </div>
            </Card>
          </StaggerItem>
        </StaggerFadeIn>

        {/* Example pack types */}
        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                Example project types
              </h3>
              <p className="text-sm text-text-muted max-w-xl">
                Whether you&apos;re building a new brand or tightening up an existing one, the packaging work is scoped around real-world drops, not theoretical style tiles.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {highlightPacks.map((item) => (
                  <Card
                    key={item.label}
                    className="relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-lime-400/10 to-amber-300/10 opacity-70" />
                    <div className="relative space-y-1.5 p-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-emerald-200/90">
                        {item.label}
                      </p>
                      <p className="text-xs text-text-muted">{item.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">
                How the cannabis projects run
              </h3>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.title} className="rounded-2xl border border-border-subtle/60 bg-bg-elevated/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                      {step.title}
                    </p>
                    <p className="mt-1.5 text-sm text-text-muted">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn fullWidth>
          <Card className="relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-amber-300/15 backdrop-blur-xl shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
            <div className="relative flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
              <div className="space-y-2">
                <p className="text-sm font-medium text-emerald-100">
                  Cannabis Packaging • TD Studios
                </p>
                <h3 className="text-xl font-semibold text-text-primary md:text-2xl">
                  Have a new strain line or drop coming up?
                </h3>
                <p className="text-sm text-text-muted max-w-xl">
                  Send through your current branding, any printer specs, and a rough idea of your SKUs. You&apos;ll get a clear path and scope—not a vague estimate.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-500/90 text-white border-0">
                    Start a cannabis project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-xs text-text-muted/80">
                  Mention &quot;Cannabis&quot; as your primary service on the form.
                </p>
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
