import { Button } from "@/components/ui/button"
import Link from "next/link"

const phases = [
  {
    label: "Phase 1 · C — Clarify",
    headline: "Uncover who your ideal client really is.",
    body: "Clarity equals speed. If your audience can't explain what you do in one sentence, you've already lost them. Instead of guessing, we dig into your audience's lifestyle, pain points, values, and behavior so your positioning is exact and every dollar you spend on design or ads has a clear target.",
    outcome: "Your message becomes impossible to misunderstand.",
    action: "Write a 10-word brand statement that makes your value undeniable: \"We help [Avatar] achieve [Result] without [Pain Point].\""
  },
  {
    label: "Phase 2 · L — Lead & Leverage",
    headline: "Turn your assets into leverage and lead the narrative.",
    body: "Design is a sales tool, not decoration. In this phase we turn your visuals, proof, and presence into leverage so they work together to position you as the authority. Strategic messaging plus strong creative move your audience from awareness to action, and clients stop questioning your price and start asking for availability.",
    outcome: "Clients invest in the brand that confidently leads them to the solution.",
    action: "Audit 3 assets that already sell for you (case study, video, landing page) and 3 that need to be built or upgraded next."
  },
  {
    label: "Phase 3 · O — Offer",
    headline: "Build an offer that's hard to say no to.",
    body: "If the offer isn't irresistible, nothing else matters. We turn your services into a magnetic offer by focusing on tangible outcomes and transformation—not a list of tasks. We work through the seven core components: Promise, Outcome, Timeframe, Risk Reversal, Scarcity, Proof, and Pricing, so your offer feels like an investment instead of a cost.",
    outcome: "An offer so refined you can't imagine a qualified prospect saying \"no.\"",
    action: "Rewrite your current offer so it reads like a clear transformation, not just work you'll do."
  },
  {
    label: "Phase 4 · S — Select & Structure",
    headline: "Choose the right platforms and build structure around them.",
    body: "Structure builds trust. Platforms move traffic. But you can't be everywhere. We focus your presence on the one or two channels where your ideal clients are active and ready to engage—Instagram, LinkedIn, email, paid traffic, whatever actually matters for your offer. That focus cuts the \"be everywhere\" burnout and filters for serious, qualified leads.",
    outcome: "You stop chasing traffic and start attracting qualified clients.",
    action: "Pick two platforms to focus on for the next 90 days. Ignore the rest until these are dialed in."
  },
  {
    label: "Phase 5 · E — Execute",
    headline: "Build the path to \"yes\" and run the play.",
    body: "Strategy without rollout is nothing. Execution is where most brands fall apart. We map the full journey from first click to closed client—site, funnels, CTAs, onboarding, and delivery—so the system doesn't just look good, it generates revenue. Then we launch, test, refine, and tighten until results are consistent.",
    outcome: "Superior execution turns clients into advocates who send more business.",
    action: "Define your next 30-day execution sprint and three measurable outcomes—like launching a funnel, booking calls, or driving qualified traffic."
  }
]

export function ProcessSteps() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Hero */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tighter md:text-6xl mb-4">
            The C.L.O.S.E. Method™
          </h1>
          <p className="text-2xl font-medium text-text-primary mb-6">
            Master client acquisition and close high-paying deals with a repeatable framework.
          </p>
          <p className="text-lg text-text-muted mb-4">
            If your digital presence doesn't close, it's costing you. Most businesses don't fail because of bad ideas—they fail because they can't turn attention into revenue. The C.L.O.S.E. Method™ is a five-phase architecture designed to install clarity, leverage, irresistible offers, structure, and clean execution into your brand so more of the right people say "yes."
          </p>
          <p className="text-sm text-text-muted">
            Every TD Studios project runs through this system so you're not just "looking better online"—you're closing at a higher level with less noise.
          </p>
        </div>

        {/* Phases */}
        <div className="relative border-l border-border-subtle ml-4 md:ml-8 space-y-16 mb-20">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-8 md:pl-16">
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand-primary ring-4 ring-bg-body" />

              <div className="max-w-2xl">
                <div className="text-xs font-bold text-brand-primary/70 mb-2 tracking-wider uppercase">
                  {phase.label}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{phase.headline}</h3>
                <p className="text-base text-text-muted mb-4 leading-relaxed">{phase.body}</p>
                <p className="text-sm text-text-primary/80 mb-2">
                  <span className="font-semibold">Outcome:</span> {phase.outcome}
                </p>
                <p className="text-sm text-text-muted">
                  <span className="font-semibold">Action step:</span> {phase.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What the C.L.O.S.E. Method changes */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-6">
            What the C.L.O.S.E. Method™ changes.
          </h2>
          <p className="text-lg text-text-muted mb-4">
            The C.L.O.S.E. Method™ gives you the blueprint. TD Studios builds the machine. When this framework is implemented properly, we've seen close rates on qualified prospects increase, revenue and client value grow, and retention and satisfaction climb—because the entire client journey is structured, not improvised.
          </p>
          <p className="text-sm text-text-muted">
            If you know your brand could be closing at a higher level, the next step is simple.
          </p>
        </div>

        {/* Download Section */}
        <div className="mt-12 rounded-xl border border-border-subtle bg-bg-elevated/40 backdrop-blur-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-1">
              Want the full breakdown?
            </h3>
            <p className="text-sm text-text-muted">
              Download the C.L.O.S.E. Method™ PDF for offline reference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="/close-method/The-CLOSE-Method.pdf" download>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
                Download PDF
              </Button>
            </a>
            <Link href="/library" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors">
              View Library
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <section className="mt-10 border-t border-border-subtle pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Want to see how this would plug into your brand?
              </h3>
              <p className="text-sm text-text-muted max-w-md">
                Share your offer, platforms, and goals. I'll map how the C.L.O.S.E. Method™ would fit into what you already have—and where it needs to be rebuilt.
              </p>
            </div>
            <Link href="/contact">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
                Start a Project
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  )
}
