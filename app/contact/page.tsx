import { ContactForm } from "./contact-form"

export default function ContactPage() {
  return (
    <div className="container mx-auto container-padding section-spacing">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center animate-fade-in-up">
          <h1 className="mb-4 text-display">Start a Project</h1>
          <p className="text-body-lg">
            Ready to elevate your brand? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-100">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
