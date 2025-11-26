import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass-medium border-b border-lux-subtle">
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between container-padding py-2">
        <Link
          href="/"
          className="flex items-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
        >
          <Image
            src="/td-studios-logo.png"
            alt="TD Studios"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav with enhanced micro-interactions */}
        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-semibold text-white/90 transition-all duration-300 hover:text-white"
              style={{ letterSpacing: '-0.01em' }}
            >
              <span className="relative z-10">{item.title}</span>
              {/* Underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-400 group-hover:w-full" />
              {/* Glow effect on hover */}
              <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-lg bg-brand-primary/20" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button
              variant="default"
              className="hidden sm:flex bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lux-glow transition-all duration-400 hover:shadow-[0_16px_48px_rgba(214,0,28,0.2)] hover:scale-105"
            >
              Start a Project
            </Button>
          </Link>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 glass-strong border-l border-lux-bright shadow-lux-strong"
            >
              <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
              <SheetHeader className="mb-8 relative z-10">
                <SheetTitle className="text-xl font-bold text-white" style={{ letterSpacing: '-0.02em' }}>
                  TD Studios
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-5 relative z-10">
                {siteConfig.mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="group text-base font-semibold text-white/90 hover:text-white transition-all duration-300 py-2 px-4 rounded-xl hover:bg-white/5"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      <span className="relative">
                        {item.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/contact">
                    <Button className="mt-6 w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0 shadow-lux-glow transition-all duration-400 hover:shadow-[0_16px_48px_rgba(214,0,28,0.2)] hover:scale-[1.02]">
                      Start a Project
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
