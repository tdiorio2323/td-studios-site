import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12 md:mb-16",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {(subtitle || description) && (
        <p className="text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
          {subtitle || description}
        </p>
      )}
    </div>
  )
}
