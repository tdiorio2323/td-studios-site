import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="section-spacing-sm border-t border-lux-subtle/40 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto container-padding">
        <div className="animate-fade-in-up">
          <div className="relative overflow-hidden rounded-[2rem] glass-panel shadow-lux-strong px-8 py-20 text-center sm:px-16 md:py-28"
            style={{
              boxShadow: '0 32px 96px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.08)'
            }}
          >
            {/* Radial gradient overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[400px] w-[800px] opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--brand-primary),_transparent_60%)] blur-[100px]" />

            {/* Top highlight line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

            <h2 className="relative mx-auto max-w-2xl text-heading-1" style={{ letterSpacing: '-0.03em' }}>
              Ready to{" "}
              <span className="relative inline-block">
                <span className="text-brand-primary">get started</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary/40 via-brand-primary to-brand-primary/40 blur-sm" />
              </span>
              ?
            </h2>

            <p className="relative mx-auto mt-8 max-w-xl text-body-lg text-white/90" style={{ letterSpacing: '-0.008em' }}>
              Send over your project details. You'll get a clear response, not a spammy sales sequence.
            </p>

            <div className="relative mt-12">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lux-glow hover:shadow-[0_24px_72px_rgba(214,0,28,0.3),0_12px_32px_rgba(214,0,28,0.25)] transition-all duration-500 hover:scale-[1.05] px-10 py-7 text-lg font-semibold"
                  style={{
                    boxShadow: '0 16px 48px rgba(214, 0, 28, 0.2), 0 8px 24px rgba(214, 0, 28, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  Let's Talk
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
