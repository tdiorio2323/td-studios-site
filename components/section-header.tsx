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
        <span className="text-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className="text-heading-1 text-text-primary">
        {title}
      </h2>
      {(subtitle || description) && (
        <p className="text-body-lg max-w-2xl">
          {subtitle || description}
        </p>
      )}
    </div>
  )
}
