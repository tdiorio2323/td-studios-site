export type ServiceType = "web" | "branding" | "social" | "cannabis";

export type Project = {
  slug: string;
  name: string;
  client?: string;
  summary: string;
  serviceType: ServiceType;
  tags: string[];
  image?: string;       // path under /public
  highlight?: string;   // short 1-liner
};

export const projects: Project[] = [
  {
    slug: "candy-rain-mylars",
    name: "Candy Rain Drop Series",
    client: "Purpz",
    summary: "Full mylar series for Candy Rain strain drops: bags, jars, and social rollout assets.",
    serviceType: "cannabis",
    tags: ["Mylar Bags", "Strain Line", "Social Launch"],
    image: "/work/candy-rain-mylars.jpg",
    highlight: "Sold out first drop in under 48 hours."
  },
  {
    slug: "spreed-fd-series",
    name: "Freeze-Dried Spree Line",
    client: "Private Brand",
    summary: "Packaging line built around freeze-dried candy SKUs with bold, candy-inspired visuals.",
    serviceType: "cannabis",
    tags: ["Packaging", "Edibles", "Flavor System"],
    image: "/work/freeze-dried-spree.jpg",
    highlight: "Unified look across 5+ SKUs."
  },
  {
    slug: "td-studios-hq-site",
    name: "TD Studios HQ",
    client: "TD Studios",
    summary: "Core studio site focused on tight copy, high-impact visuals, and clear service funnels.",
    serviceType: "web",
    tags: ["Website", "Strategy", "Conversion"],
    image: "/work/td-studios-site.jpg",
    highlight: "Built to convert web, brand, and social clients."
  },
  {
    slug: "chef-brand-refresh",
    name: "Chef Brand Refresh",
    client: "Chef Client",
    summary: "Identity and system refresh for a food brand: logo, palette, typography, and socials.",
    serviceType: "branding",
    tags: ["Branding", "Logo", "Social Kit"],
    image: "/work/chef-branding.jpg",
    highlight: "Cohesive look across all touchpoints."
  },
  {
    slug: "social-system-pack",
    name: "Social System Pack",
    client: "Creator",
    summary: "Content system with templates, cover styles, and post rhythm for a creator account.",
    serviceType: "social",
    tags: ["Social Templates", "Content System"],
    image: "/work/social-system-pack.jpg",
    highlight: "Turnkey content engine instead of random posts."
  }
];
