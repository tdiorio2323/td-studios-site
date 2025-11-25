# Portfolio Images

## How to Add Your Portfolio Images

1. **Drop your images here** - Just drag and drop your portfolio images into this folder
2. **Supported formats**: JPG, PNG, WebP (WebP recommended for best performance)
3. **Recommended naming**: Use descriptive names like `brand-identity-clientname.jpg`
4. **Image size**: Recommended minimum 1200px wide for best quality

## Configure Your Portfolio

After adding images, edit `/lib/portfolio.ts` to add the details:

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: "unique-id-1",
    image: "your-image-filename.jpg", // Must match the filename you dropped here
    title: "Project Title",
    subtitle: "Client Name or Brief Description", // Optional
    category: "branding" // Optional: "branding" | "web" | "social" | "cannabis" | "packaging"
  },
  {
    id: "unique-id-2",
    image: "another-image.jpg",
    title: "Another Project",
    subtitle: "Client Name",
    category: "web"
  },
  // Add more items...
]
```

## Categories & Colors

Each category has a color scheme for the hover overlay:
- **branding**: Orange/Amber gradient
- **web**: Red/Cyan gradient (brand colors)
- **social**: Cyan/Blue gradient
- **cannabis**: Emerald/Lime gradient
- **packaging**: Pink/Purple gradient

Leave category blank for a default dark overlay.

## Tips for Best Results

- Use high-quality images (at least 1200px wide)
- Keep aspect ratios consistent (4:3 works great)
- Optimize images before uploading (use tools like TinyPNG)
- Use descriptive titles that explain what the project is
- Keep subtitles short (client name or 1-2 word description)

## Example

If you drop an image called `cannabis-packaging-purpz.jpg`, add this to `portfolio.ts`:

```typescript
{
  id: "purpz-packaging",
  image: "cannabis-packaging-purpz.jpg",
  title: "Candy Rain Mylar Bags",
  subtitle: "Purpz Cannabis",
  category: "cannabis"
}
```

The gallery will automatically display it with hover effects and animations!
