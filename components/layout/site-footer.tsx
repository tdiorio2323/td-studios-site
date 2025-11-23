import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle bg-bg-elevated py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-text-primary">
              TD Studios
            </Link>
            <p className="mt-4 max-w-xs text-sm text-text-muted">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Services</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/services/websites" className="hover:text-brand-primary">Websites</Link></li>
              <li><Link href="/services/branding-design" className="hover:text-brand-tertiary">Branding</Link></li>
              <li><Link href="/services/social-media" className="hover:text-brand-secondary">Social Media</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-text-primary">Company</h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link href="/work" className="hover:text-text-primary">Work</Link></li>
              <li><Link href="/process" className="hover:text-text-primary">Process</Link></li>
              <li><Link href="/about" className="hover:text-text-primary">About</Link></li>
              <li><Link href="/contact" className="hover:text-text-primary">Contact</Link></li>
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
