import { ContactForm } from "./contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl">Start a Project</h1>
          <p className="text-lg text-text-muted">
            Ready to elevate your brand? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
