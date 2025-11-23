import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function BrandingSection() {
  return (
    <div className="space-y-24 py-24">
      <section className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
            Branding that looks <span className="text-brand-tertiary">expensive</span>.
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Branding and design that looks as good as your product deserves. Visual identity, cohesive systems, and the collateral to back it up.
          </p>
          <Link href="/contact?service=branding">
            <Button size="lg" className="bg-brand-tertiary hover:bg-brand-tertiary/90 text-white border-0">
              Start Your Brand Identity
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8 bg-bg-elevated/50 border-border-subtle">
            <h3 className="text-2xl font-bold mb-6 text-brand-tertiary">Core Identity</h3>
            <ul className="space-y-4">
              {[
                "Logo + variations",
                "Color palette & typography",
                "Brand guidelines document",
                "Icon sets & visual elements",
                "Voice & tone direction"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-tertiary shrink-0" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-bg-elevated/50 border-border-subtle">
            <h3 className="text-2xl font-bold mb-6 text-brand-tertiary">Collateral & Assets</h3>
            <ul className="space-y-4">
              {[
                "Social Media Templates",
                "Pitch Decks & Presentations",
                "Business Cards & Stationery",
                "Packaging Design",
                "Merch Design"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-tertiary shrink-0" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Visual Gallery Placeholder */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
          <div className="col-span-2 row-span-2 bg-bg-elevated rounded-2xl border border-border-subtle flex items-center justify-center text-text-muted">Brand Moodboard</div>
          <div className="bg-bg-elevated rounded-2xl border border-border-subtle flex items-center justify-center text-text-muted">Typography</div>
          <div className="bg-bg-elevated rounded-2xl border border-border-subtle flex items-center justify-center text-text-muted">Palette</div>
          <div className="col-span-2 bg-bg-elevated rounded-2xl border border-border-subtle flex items-center justify-center text-text-muted">Logo Marks</div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8 text-center">
        <Link href="/contact?service=branding">
          <Button variant="outline" size="lg" className="border-brand-tertiary text-brand-tertiary hover:bg-brand-tertiary hover:text-white">
            Discuss Your Brand <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
