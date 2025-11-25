import Link from "next/link"
import { ArrowRight, Download, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

export default function LibraryPage() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="animate-fade-in-up">
          <SectionHeader
            eyebrow="TD Studios Library"
            title="Frameworks, systems, and reference guides."
            description="Download the same internal documents we use to run TD Studios projects. No fluff—just structure, strategy, and execution frameworks."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-12 md:mt-16">
          {/* Card 1: The C.L.O.S.E. Method */}
          <div className="animate-fade-in-up animate-delay-100">
            <Card className="h-full flex flex-col justify-between rounded-3xl border border-border-subtle/60 bg-bg-elevated/80 backdrop-blur-xl hover-lift hover:shadow-2xl">
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
                  <h3 className="text-heading-2 text-text-primary">The C.L.O.S.E. Method™</h3>
                  <p className="text-body">
                    A project framework for keeping scope, expectations, and communication tight from first contact to delivery. Eliminate scope creep and keep projects profitable.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
                <a href="/close-method/The-CLOSE-Method.pdf" download className="w-full sm:w-auto">
                  <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0 transition-smooth hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>
                <Link href="/process" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-smooth flex items-center">
                  View process <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          </div>

          {/* Card 2: The Brand Bible */}
          <div className="animate-fade-in-up animate-delay-200">
            <Card className="h-full flex flex-col justify-between rounded-3xl border border-border-subtle/60 bg-bg-elevated/80 backdrop-blur-xl hover-lift hover:shadow-2xl">
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
                  <h3 className="text-heading-2 text-text-primary">The Brand Bible</h3>
                  <p className="text-body">
                    The "Director's Cut" brand architecture document. A condensed manifesto on how to build brands that feel expensive, cohesive, and impossible to ignore.
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
                <a href="/brand-bible/TD-Studios-Brand-Bible.pdf" download className="w-full sm:w-auto">
                  <Button className="w-full bg-brand-tertiary hover:bg-brand-tertiary/90 text-white border-0 transition-smooth hover:scale-105">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </a>
                <Link href="/brand-bible" className="text-sm font-medium text-text-muted hover:text-brand-tertiary transition-smooth flex items-center">
                  Read online <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
