import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function CannabisSection() {
  return (
    <div className="space-y-24 py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
            Cannabis Branding & <span className="text-brand-primary">Packaging Systems</span>
          </h1>
          <p className="text-xl text-text-muted mb-8">
            High-impact, compliance-conscious packaging and launch creative for cannabis brands that want to look as strong as their product hits.
          </p>
          <Link href="/contact?service=cannabis">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              Start a Cannabis Project
            </Button>
          </Link>
        </div>
      </section>

      {/* What you get & Who it's for */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* What you get */}
          <Card className="p-8 bg-bg-elevated/50 border-border-subtle">
            <h3 className="text-2xl font-bold mb-6">What you get</h3>
            <ul className="space-y-4">
              {[
                "Mylar bag collections for strains, flavors, and collabs",
                "Jars, pre-roll tubes, carts, and edible packaging",
                "Strain line systems and sub-brand hierarchies",
                "3D mockups for menus, product pages, and promos",
                "Social launch assets for new drops and flavors"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-primary shrink-0" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Who it's for */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Who it's for</h3>
            <ul className="space-y-6">
              {[
                { title: "Growers & Brands", desc: "You need consistent, scalable packaging that works across your entire line." },
                { title: "Exotic Bag Brands", desc: "You want a cohesive line, not random one-offs. Build brand equity." },
                { title: "Dispensaries", desc: "You need menus, in-store graphics, and drop campaigns that move product." }
              ].map((item) => (
                <li key={item.title}>
                  <h4 className="font-bold text-lg text-text-primary">{item.title}</h4>
                  <p className="text-text-muted">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold mb-6">How we work</h3>
          <p className="text-text-muted mb-6">
            Every cannabis packaging project runs through our structured C.L.O.S.E. Method™ framework:
          </p>
          <div className="space-y-4 pl-6 border-l-2 border-brand-primary/30">
            <div>
              <h4 className="font-semibold text-text-primary mb-1">Clarify</h4>
              <p className="text-sm text-text-muted">Define the line, positioning, and target audience.</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-1">Layout</h4>
              <p className="text-sm text-text-muted">Map out core SKUs, flavors, and strain architecture.</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-1">Orchestrate</h4>
              <p className="text-sm text-text-muted">Design the packaging system, mockups, and brand hierarchy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-1">Ship</h4>
              <p className="text-sm text-text-muted">Deliver final print-ready files and launch assets.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-8">
        <div className="bg-bg-elevated/30 p-8 rounded-2xl border border-border-subtle text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to build your line?</h3>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Tell us about your line, strains, or upcoming drop and we'll map out the packaging system around it.
          </p>
          <Link href="/contact?service=cannabis">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              Start a Cannabis Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
