import { CheckCircle2 } from "lucide-react"

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
    <section className="py-24 bg-bg-body">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who We Work With</h2>
          <p className="mt-4 text-text-muted">
            TD Studios is for brands and creators who take their image seriously. We don't chase bargain hunters.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {clients.map((client) => (
            <div key={client.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bg-elevated text-brand-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-primary">{client.title}</h3>
              <p className="text-text-muted">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
