import { CheckCircle2 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const clients = [
  {
    title: "Serious Brands",
    description: "You value quality and want your business to look as good as it performs.",
  },
  {
    title: "Creators Who Sell",
    description: "You're beyond the starter phase and need a system that supports your offers.",
  },
  {
    title: "Agencies & Partners",
    description: "You need a reliable creative partner for white-label work. No drama.",
  },
]

export function WhoItsFor() {
  return (
    <section className="section-spacing-sm border-t border-lux-subtle/40 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-tertiary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto container-padding">
        <div className="mx-auto max-w-3xl">
          <div className="animate-fade-in-up">
            <SectionHeader
              eyebrow="Who We Work With"
              title="For brands and creators who take their image seriously"
              subtitle="If you care how your brand looks, loads, and converts, TD Studios is built for you. We're not for bargain hunters or quick-fix projects."
              align="center"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={client.title}
              className={`group flex flex-col items-center text-center p-8 rounded-3xl glass-card shadow-lux-soft hover:shadow-lux-medium transition-all duration-500 hover-lift-subtle animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Icon with premium styling */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl glass-medium text-brand-primary ring-1 ring-lux group-hover:ring-lux-bright group-hover:scale-110 transition-all duration-400">
                <CheckCircle2 className="h-8 w-8 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-white group-hover:text-brand-primary transition-colors duration-300" style={{ letterSpacing: '-0.02em' }}>
                {client.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/95 transition-colors duration-300" style={{ letterSpacing: '-0.005em' }}>
                {client.description}
              </p>

              {/* Bottom highlight line */}
              <div className="mt-6 w-0 h-px bg-gradient-to-r from-brand-primary to-brand-secondary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
