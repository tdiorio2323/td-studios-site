export type Project = {
  id: string
  title: string
  category: "Website" | "Branding" | "Social"
  description: string
  image: string // Placeholder color or path
  slug: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Vesper Architecture",
    category: "Website",
    description: "Minimalist portfolio for a high-end residential architect firm.",
    image: "bg-neutral-800", // Placeholder class
    slug: "vesper-architecture",
  },
  {
    id: "2",
    title: "Lumina Skin",
    category: "Branding",
    description: "Complete visual identity for a luxury biotech skincare brand.",
    image: "bg-brand-primary/20",
    slug: "lumina-skin",
  },
  {
    id: "3",
    title: "Apex Fitness",
    category: "Social",
    description: "Content system and reel templates for a performance gym.",
    image: "bg-brand-secondary/20",
    slug: "apex-fitness",
  },
  {
    id: "4",
    title: "Echo Finance",
    category: "Website",
    description: "Web3 dashboard and marketing site for a DeFi protocol.",
    image: "bg-brand-tertiary/20",
    slug: "echo-finance",
  },
  {
    id: "5",
    title: "Nectar",
    category: "Branding",
    description: "Packaging and identity for an organic cold-press juice line.",
    image: "bg-neutral-700",
    slug: "nectar",
  },
]
