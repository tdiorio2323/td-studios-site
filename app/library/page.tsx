import Link from "next/link"
import { ArrowRight, Download, FileText } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { FadeIn, StaggerFadeIn, StaggerItem } from "@/components/motion/fade-in"

export default function LibraryPage() {
  return (
    <section className="pt-24 pb-24 md:pt-28 md:pb-32">
      <div className="container mx-auto px-4 sm:px-8">
        <FadeIn>
          <SectionHeader
            eyebrow="TD Studios Library"
            title="Frameworks, systems, and reference guides."
            description="Download the same internal documents we use to run TD Studios projects. No fluff—just structure, strategy, and execution frameworks."
          />
        </FadeIn>

        <StaggerFadeIn className="grid gap-8 md:grid-cols-2 mt-12 md:mt-16">
          {/* Card 1: The C.L.O.S.E. Method */}
          <StaggerItem>
            <Card className="h-full flex flex-col justify-between rounded-3xl border border-border-subtle/60 bg-bg-elevated/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="border-brand-primary/20 text-brand-primary bg-brand-primary/5">
                    Framework PDF
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-text-primary">The C.L.O.S.E. Method™</h3>
                  <p className="text-text-muted leading-relaxed">
                    A project framework for keeping scope, expectations, and communication tight from first contact to delivery. Eliminate scope creep and keep projects profitable.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
                <a href="/close-method/The-CLOSE-Method.pdf" download className="w-full sm:w-auto">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>
                <Link href="/process" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors flex items-center">
                  View process <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          </StaggerItem>

          {/* Card 2: The Brand Bible */}
          <StaggerItem>
            <Card className="h-full flex flex-col justify-between rounded-3xl border border-border-subtle/60 bg-bg-elevated/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-brand-tertiary/10 text-brand-tertiary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="border-brand-tertiary/20 text-brand-tertiary bg-brand-tertiary/5">
                    Reference PDF
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-text-primary">The Brand Bible</h3>
                  <p className="text-text-muted leading-relaxed">
                    The "Director’s Cut" brand architecture document. A condensed manifesto on how to build brands that feel expensive, cohesive, and impossible to ignore.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
                <a href="/brand-bible/TD-Studios-Brand-Bible.pdf" download className="w-full sm:w-auto">
                  <Button className="w-full bg-brand-tertiary hover:bg-brand-tertiary/90 text-white border-0">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>
                <Link href="/brand-bible" className="text-sm font-medium text-text-muted hover:text-brand-tertiary transition-colors flex items-center">
                  Read online <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          </StaggerItem>
        </StaggerFadeIn>
      </div>
    </section>
  )
}
