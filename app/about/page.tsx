import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-8 space-y-24">
        
        {/* Intro */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-6">
            We build systems, not just pages.
          </h1>
          <p className="text-xl text-text-muted mb-8">
            TD Studios is a digital product agency focused on high-impact creative work. We strip away the fluff and focus on what actually moves the needle: clear strategy, distinct design, and flawless execution.
          </p>
        </section>

        {/* What we say yes to */}
        <section className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-6">What we say YES to</h2>
            <ul className="space-y-4">
              {[
                "Ambitious rebrands",
                "High-performance marketing sites",
                "Complex content systems",
                "Long-term creative partnerships",
                "Technical challenges"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-primary" />
                  <span className="text-lg text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg-elevated/50 rounded-2xl p-8 border border-border-subtle">
             <h2 className="text-3xl font-bold mb-6">Our Stack</h2>
             <div className="flex flex-wrap gap-3">
               {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Supabase", "Figma", "Adobe Suite"].map((tech) => (
                 <span key={tech} className="px-3 py-1 rounded-full bg-bg-body border border-border-subtle text-sm text-text-muted">
                   {tech}
                 </span>
               ))}
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              Work With Us
            </Button>
          </Link>
        </section>

      </div>
    </div>
  )
}
