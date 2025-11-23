import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--brand-primary),_transparent_70%)] blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline" className="border-brand-primary/50 text-brand-primary bg-brand-primary/10 backdrop-blur-sm">
              Now Booking Q1 2025
            </Badge>

            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              Tight, high-impact <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary">
                creative systems.
              </span>
            </h1>

            <p className="max-w-lg text-lg text-text-muted md:text-xl">
              Websites that convert. Branding that looks expensive. Content systems that don't fall apart after a week.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-border-subtle hover:bg-bg-elevated hover:text-brand-primary">
                  View Selected Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-8 lg:mt-0">
            {/* Gradient Glow */}
            <div className="absolute inset-[-40%] -z-10 bg-gradient-to-tr from-brand-primary via-brand-secondary to-brand-tertiary opacity-25 blur-3xl" />

            {/* Glass Card Container */}
            <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-bg-elevated/80 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/hero-image.jpg"
                  alt="TD Studios hero visual"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
