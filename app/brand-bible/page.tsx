import Link from "next/link"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandBiblePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16 space-y-10">
      {/* Hero */}
      <div>
        <p className="text-xs font-bold tracking-wider text-white/70 uppercase mb-2">
          THE BRAND BIBLE
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          STRATEGY • STRUCTURE • POWER
        </h1>
        <p className="text-base text-text-muted">
          This is the consolidated "Director's Cut" version of The Brand Bible—sharpened for TD Studios clients who care about strategic architecture, not just aesthetics.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href="/brand-bible/TD-Studios-Brand-Bible.pdf" download>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </a>
          <Link href="/library" className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors flex items-center">
            <ArrowLeft className="mr-1 h-3 w-3" /> Back to Library
          </Link>
        </div>
      </div>

      {/* Section 01 - Manifesto */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">01. THE MANIFESTO</h2>
        <p className="text-sm text-text-muted font-medium">
          Engineered for Impact. Designed for Dominance.
        </p>
        
        <div className="space-y-4 text-text-muted">
          <p className="font-semibold text-text-primary">
            This isn't just a guide. It's a strategic weapon.
          </p>
          
          <p>
            Most branding advice remains superficial—focused on visual aesthetics rather than strategic architecture. The real challenge is systemic alignment. When your brand lacks structural integrity, your market feels the disconnection. This is why exceptional offers go unnoticed and superior work remains undervalued.
          </p>
          
          <p>
            The Brand Bible is your framework for building a digital brand that doesn't just compete—it conquers. It is engineered to help you maintain consistency, command trust, and become the inevitable choice.
          </p>
          
          <div>
            <p className="font-semibold text-text-primary">The Core Premise:</p>
            <p>
              You must approach your brand as an integrated operating system—one that functions methodically behind the scenes to establish trust, project authority, and drive conversion at every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 - Six Pillars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">02. THE SIX PILLARS OF STRATEGIC BRANDING</h2>
        <p className="text-sm text-text-muted font-medium">
          Master these six pillars and you master market perception.
        </p>

        {/* Pillar 1 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">1. Brand Identity Architecture</h3>
          <p className="text-sm text-text-muted italic">
            The cognitive anchors that establish immediate recognition.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">Visual System:</span> Logomark, color architecture, typography, and rhythm patterns.</li>
            <li>• <span className="font-semibold">The Goal:</span> Must be precisely calibrated to penetrate the noise, not assimilate into it.</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">2. Brand Position Engineering</h3>
          <p className="text-sm text-text-muted italic">
            The strategic nucleus of all operations.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">Target:</span> Psychographics and decision patterns.</li>
            <li>• <span className="font-semibold">Framework:</span> Problem-solution alignment.</li>
            <li>• <span className="font-semibold">The Goal:</span> Establish "Indispensability Indicators"—making your brand the only logical choice.</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">3. Brand Voice & Messaging Protocol</h3>
          <p className="text-sm text-text-muted italic">
            Linguistic patterns, cadence, and communication architecture.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">The Rule:</span> Zero redundancy, maximum impact.</li>
            <li>• <span className="font-semibold">The Goal:</span> Instantly recognizable at every touchpoint. Strategic silence outperforms tactical noise.</li>
          </ul>
        </div>

        {/* Pillar 4 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">4. Brand Narrative Framework</h3>
          <p className="text-sm text-text-muted italic">
            Origin architecture, mission directives, and driving forces.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">Presentation:</span> Presented with precision, not promotional excess.</li>
            <li>• <span className="font-semibold">The Goal:</span> Immediate cognitive alignment with your prospect's worldview.</li>
          </ul>
        </div>

        {/* Pillar 5 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">5. Brand Experience Ecosystem</h3>
          <p className="text-sm text-text-muted italic">
            The meticulous orchestration of every interaction—from discovery to transaction to delivery.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">The Metric:</span> Consistency accelerates trust acquisition by 47–68%. Experience friction directly correlates to conversion loss.</li>
          </ul>
        </div>

        {/* Pillar 6 */}
        <div className="border-l-2 border-brand-primary pl-4 space-y-2">
          <h3 className="text-lg font-bold text-text-primary">6. Brand Expansion Strategy</h3>
          <p className="text-sm text-text-muted italic">
            The long-range strategic blueprint.
          </p>
          <ul className="space-y-2 text-sm text-text-muted">
            <li>• <span className="font-semibold">Systems:</span> Visibility systems, audience development, and monetization architecture.</li>
            <li>• <span className="font-semibold">The Goal:</span> Methodical scaling protocols for maximum impact with minimal noise.</li>
          </ul>
        </div>
      </section>

      {/* Section 03 - Impact Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">03. IMPACT METRICS & PROOF</h2>
        <p className="text-sm text-text-muted font-medium">
          Suboptimal branding isn't merely forgettable—it's quantifiably expensive.
        </p>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-text-primary mb-2">The Cost of Chaos:</p>
            <p className="text-text-muted">
              Every misaligned touchpoint generates cognitive dissonance. Indicators include market invisibility, perpetual justification of prices, and low conversion despite high traffic.
            </p>
          </div>

          {/* Case Study A */}
          <div className="bg-bg-elevated/50 border border-border-subtle rounded-lg p-6 space-y-2">
            <h4 className="font-bold text-text-primary">Case Study A: The Consultant</h4>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• <span className="font-semibold">Problem:</span> Inconsistent visual identity and fragmented messaging led to constant fee negotiation.</li>
              <li>• <span className="font-semibold">The Fix:</span> Implementation of the Six Pillars.</li>
              <li>• <span className="font-semibold">Result:</span> Price resistance decreased by 78%. Sales cycle duration reduced by 41%.</li>
            </ul>
          </div>

          {/* Case Study B */}
          <div className="bg-bg-elevated/50 border border-border-subtle rounded-lg p-6 space-y-2">
            <h4 className="font-bold text-text-primary">Case Study B: The Digital Agency</h4>
            <ul className="space-y-1 text-sm text-text-muted">
              <li>• <span className="font-semibold">Problem:</span> Disconnected assets and ambiguous positioning.</li>
              <li>• <span className="font-semibold">The Fix:</span> Complete Brand Architecture System.</li>
              <li>• <span className="font-semibold">Result:</span> Conversion rate increased by 112%. Client compatibility improved dramatically.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 04 - Implementation Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">04. IMPLEMENTATION FRAMEWORK</h2>
        <p className="text-sm text-text-muted font-medium">
          Tactical proliferation isn't the solution. Strategic presence is the requirement.
        </p>

        {/* Phase 1 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-text-primary">Phase 1: Visual Foundation</h3>
          <p className="text-text-muted">
            Before production begins, you must establish the Strategic Moodboard.
          </p>
          <ul className="space-y-2 text-sm text-text-muted pl-4">
            <li>• <span className="font-semibold">Requirement:</span> It must define the precise visual tone and emotional response.</li>
            <li>• <span className="font-semibold">The Rule:</span> Maintain alignment. If any element fails to match this established direction, it must be eliminated.</li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-text-primary">Phase 2: Communication Architecture</h3>
          <p className="text-text-muted">
            Your communication should convert without appearing transactional.
          </p>
          <ul className="space-y-2 text-sm text-text-muted pl-4">
            <li>• <span className="font-semibold">The Filter Protocol:</span> If your message could be utilized by any market participant, it will fail to engage your optimal audience segment.</li>
            <li>• <span className="font-semibold">Eliminate:</span> Generic benefit statements, tentative requests ("Are you prepared to...?"), and unnecessary noise.</li>
            <li>• <span className="font-semibold">Adopt:</span> Decisive, precision-focused language ("Dominant brands don't compete for attention. They command it.").</li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-text-primary">Phase 3: The Strategic Positioning Matrix</h3>
          <p className="text-text-muted mb-3">
            Utilize this 7-step framework to define your indispensable market position:
          </p>
          <ol className="space-y-2 text-sm text-text-muted pl-4 list-decimal">
            <li><span className="font-semibold">Target:</span> Define audience with psychographic specificity.</li>
            <li><span className="font-semibold">Problem:</span> Identify the exact pain point you solve.</li>
            <li><span className="font-semibold">Differentiation:</span> Articulate your unique mechanism.</li>
            <li><span className="font-semibold">Anti-Service:</span> Clearly state what you explicitly do not provide.</li>
            <li><span className="font-semibold">Transformation:</span> Define the client's "After" state.</li>
            <li><span className="font-semibold">Association:</span> Identify 3 specific terms you want irrevocably associated with your brand.</li>
            <li><span className="font-semibold">Emotion:</span> Define the precise emotional response you intend to generate.</li>
          </ol>
        </div>
      </section>

      {/* Section 05 - Platform Protocols */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">05. PLATFORM PROTOCOLS</h2>
        <p className="text-sm text-text-muted font-medium">
          Your brand architecture must maintain perfect consistency across all touchpoints.
        </p>

        <div className="space-y-4">
          {/* Website */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text-primary">Digital Headquarters (Website)</h3>
            <ul className="space-y-1 text-sm text-text-muted pl-4">
              <li>• <span className="font-semibold">Directive:</span> Precise messaging, systematic visual implementation, frictionless user experience.</li>
              <li>• <span className="font-semibold">Requirement:</span> Primary Call-to-Action (CTA) positioned above the scroll threshold.</li>
            </ul>
          </div>

          {/* Instagram */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text-primary">Instagram</h3>
            <ul className="space-y-1 text-sm text-text-muted pl-4">
              <li>• <span className="font-semibold">Directive:</span> Approach as a curated portfolio, not casual content.</li>
              <li>• <span className="font-semibold">Requirement:</span> Meticulous, intentional, visual validation of your market position.</li>
            </ul>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text-primary">Email Communication</h3>
            <ul className="space-y-1 text-sm text-text-muted pl-4">
              <li>• <span className="font-semibold">Directive:</span> Send only when delivering substantive value.</li>
              <li>• <span className="font-semibold">Requirement:</span> Concise, actionable, compelling.</li>
            </ul>
          </div>

          {/* DM */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text-primary">Direct Messaging</h3>
            <ul className="space-y-1 text-sm text-text-muted pl-4">
              <li>• <span className="font-semibold">Directive:</span> Operate with strategic intent, not a transactional approach.</li>
              <li>• <span className="font-semibold">Requirement:</span> Direct, valuable, professional.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 06 - Final Strategic Imperative */}
      <section className="space-y-4 pb-8">
        <h2 className="text-2xl font-bold tracking-tight">06. THE FINAL STRATEGIC IMPERATIVE</h2>
        
        <div className="space-y-4 text-text-muted">
          <p>
            Branding is not a one-time implementation. It is the ongoing system that maintains your market position.
          </p>
          
          <p>
            Every communication, digital asset, offering, and interaction should pass a single evaluation criterion: Does this reinforce the brand architecture? Or does it compromise it?
          </p>
          
          <div className="mt-6 space-y-2">
            <p className="font-bold text-lg text-text-primary">Your Final Directive:</p>
            <p className="font-semibold text-text-primary">Establish clarity.</p>
            <p className="font-semibold text-text-primary">Build for permanence.</p>
            <p className="font-semibold text-text-primary">Dominate with strategic presence.</p>
          </div>

          <p className="mt-8 text-center font-bold text-xl text-white tracking-wider">
            TD STUDIOS
          </p>
        </div>
      </section>
    </section>
  )
}
