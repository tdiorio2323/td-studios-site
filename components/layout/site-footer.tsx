import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-bg-elevated/50 py-12 md:py-16 border-gradient-top">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-text-primary transition-smooth hover:text-brand-primary">
              TD Studios
            </Link>
            <p className="mt-4 max-w-xs text-body-sm">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/websites" className="text-text-muted transition-smooth hover:text-brand-primary">
                  Websites
                </Link>
              </li>
              <li>
                <Link href="/services/branding-design" className="text-text-muted transition-smooth hover:text-brand-tertiary">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="text-text-muted transition-smooth hover:text-brand-secondary">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="text-text-muted transition-smooth hover:text-text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-text-muted transition-smooth hover:text-text-primary">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted transition-smooth hover:text-text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted transition-smooth hover:text-text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} TD Studios. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social links placeholder */}
          </div>
        </div>
      </div>
    </footer>
  )
}
