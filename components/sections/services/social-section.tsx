import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function SocialSection() {
  return (
    <div className="space-y-24 py-24">
      <section className="container mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
            Content that <span className="text-brand-secondary">scales</span>.
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Stop posting randomly. We build systems that turn content into a growth engine for your brand.
          </p>
          <Link href="/contact?service=social">
            <Button size="lg" className="bg-brand-secondary hover:bg-brand-secondary/90 text-black border-0">
              Start Your Content Engine
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Starter",
              price: "Foundation",
              features: ["Content Strategy", "4 Reels/Month", "Community Management", "Monthly Report"]
            },
            {
              title: "Growth",
              price: "Acceleration",
              features: ["Content Strategy", "8 Reels/Month", "Daily Stories", "Community Management", "Bi-Weekly Report"],
              highlight: true
            },
            {
              title: "Intensive",
              price: "Domination",
              features: ["Full Strategy", "12 Reels/Month", "Daily Stories & Engagement", "Cross-Platform Repurposing", "Weekly Report"]
            }
          ].map((tier) => (
            <Card key={tier.title} className={`p-8 bg-bg-elevated/50 border-border-subtle flex flex-col ${tier.highlight ? 'border-brand-secondary ring-1 ring-brand-secondary/50' : ''}`}>
              <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
              <p className="text-brand-secondary font-medium mb-6">{tier.price}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-secondary shrink-0" />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=social" className="w-full">
                <Button variant={tier.highlight ? "default" : "outline"} className={`w-full ${tier.highlight ? 'bg-brand-secondary text-black hover:bg-brand-secondary/90' : 'border-border-subtle hover:bg-bg-elevated'}`}>
                  Choose {tier.title}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-8 text-center">
        <h3 className="text-2xl font-bold mb-8">Platforms We Master</h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-text-muted font-bold text-xl md:text-3xl opacity-50">
          <span>Instagram</span>
          <span>•</span>
          <span>TikTok</span>
          <span>•</span>
          <span>LinkedIn</span>
          <span>•</span>
          <span>YouTube Shorts</span>
        </div>
      </section>
    </div>
  )
}
