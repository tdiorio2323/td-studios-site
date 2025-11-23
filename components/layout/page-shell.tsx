import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-bg-body text-text-primary font-sans antialiased selection:bg-brand-primary/30 selection:text-brand-primary">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
