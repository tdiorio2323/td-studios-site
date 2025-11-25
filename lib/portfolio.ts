export type PortfolioItem = {
  id: string
  image: string // filename in /public/portfolio/
  title: string
  subtitle?: string
  category?: "branding" | "web" | "social" | "cannabis" | "packaging"
}

// Add your portfolio items here - just specify the filename, title, and subtitle
export const portfolioItems: PortfolioItem[] = [
  // Example items - replace these with your actual images
  // {
  //   id: "project-1",
  //   image: "project-1.jpg",
  //   title: "Brand Identity",
  //   subtitle: "Client Name",
  //   category: "branding"
  // },
  // {
  //   id: "project-2",
  //   image: "project-2.jpg",
  //   title: "Website Design",
  //   subtitle: "Client Name",
  //   category: "web"
  // },
]
