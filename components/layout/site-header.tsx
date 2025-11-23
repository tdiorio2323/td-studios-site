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
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-body/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/td-studios-logo.png"
            alt="TD Studios"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-brand-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button variant="default" className="hidden sm:flex bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
              Start a Project
            </Button>
          </Link>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-bg-body border-border-subtle">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-lg font-semibold text-text-primary">TD Studios</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                {siteConfig.mainNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-text-primary hover:text-brand-primary"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/contact">
                    <Button className="mt-4 w-full bg-brand-primary hover:bg-brand-primary/90 text-white border-0">
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
