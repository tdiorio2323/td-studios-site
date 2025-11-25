import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="section-spacing-sm border-t border-border-subtle/40">
      <div className="container mx-auto container-padding">
        <div className="animate-fade-in-up">
          <div className="relative overflow-hidden rounded-3xl bg-bg-elevated/50 border border-border-subtle/50 px-6 py-16 text-center shadow-2xl sm:px-16 md:py-24">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--brand-primary),_transparent_70%)] blur-[80px]" />

            <h2 className="mx-auto max-w-2xl text-heading-1">
              Ready to <span className="text-brand-primary">get started</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body-lg">
              Send over your project details. You'll get a clear response, not a spammy sales sequence.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lg shadow-brand-primary/20 transition-smooth hover:scale-105">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
