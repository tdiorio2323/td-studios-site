import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-lux-subtle bg-gradient-to-b from-black/40 to-black/60 py-16 md:py-20">
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto container-padding relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight text-white transition-all duration-300 hover:text-brand-primary hover:scale-[1.02]"
              style={{ letterSpacing: '-0.03em' }}
            >
              TD Studios
            </Link>
            <p className="mt-6 max-w-sm text-sm text-white/80 leading-relaxed" style={{ letterSpacing: '-0.005em' }}>
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white/60" style={{ letterSpacing: '0.15em' }}>
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/websites"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-brand-primary hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-brand-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding-design"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-brand-tertiary hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-brand-tertiary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-brand-secondary hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-brand-secondary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-wider text-white/60" style={{ letterSpacing: '0.15em' }}>
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/work"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-white/85 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="w-0 h-px bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-lux-subtle pt-10 md:flex-row">
          <p className="text-xs text-white/50 tracking-wide" style={{ letterSpacing: '0.02em' }}>
            © {new Date().getFullYear()} TD Studios. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Social links can be added here */}
          </div>
        </div>
      </div>
    </footer>
  )
}
