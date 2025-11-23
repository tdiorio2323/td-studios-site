"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion/fade-in"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-border-subtle/40 bg-gradient-to-b from-bg-body via-bg-body/95 to-bg-body">
      <div className="container mx-auto px-4 sm:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-bg-elevated/50 border border-border-subtle/50 px-6 py-16 text-center shadow-2xl sm:px-16 md:py-24">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[600px] -translate-x-1/2 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--brand-primary),_transparent_70%)] blur-[80px]" />

            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">
              Ready to <span className="text-brand-primary">get started</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-text-muted">
              Send over your project details. You'll get a clear response, not a spammy sales sequence.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lg shadow-brand-primary/20">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
