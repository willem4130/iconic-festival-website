# Iconic Festival - Media Assets Directory

This directory contains all media assets for the Iconic Festival website.

## Directory Structure

```
public/
├── images/
│   ├── hero/              # Homepage hero/banner images
│   │                      # Recommended: 1920x1080px, WebP format
│   │
│   ├── artists/           # Artist photos
│   │                      # Recommended: 800x800px (square) or 16:9, WebP format
│   │                      # Naming: [artist-slug].webp
│   │
│   ├── news/              # News article cover images
│   │                      # Recommended: 1200x630px (social sharing optimized), WebP format
│   │
│   ├── gallery/           # Festival photos organized by year
│   │   ├── 2023/          # Photos from 2023 festival
│   │   └── 2024/          # Photos from 2024 festival
│   │                      # Recommended: 1200x800px, WebP format
│   │
│   └── logos/             # Branding assets (logo, icons)
│                          # Include SVG + PNG versions
│
├── videos/                # Self-hosted videos (if not using YouTube/Vimeo)
│                          # Format: MP4 (H.264), consider YouTube embed for bandwidth
│
└── fonts/                 # Custom fonts (if needed beyond Google Fonts)
```

## Image Optimization Guidelines

### Formats
- **Primary**: WebP (best compression, modern browsers)
- **Fallback**: JPG (for older browser support)
- **Logos**: SVG (scalable) + PNG (fallback)

### Sizes
- **Hero images**: 1920x1080px (Full HD)
- **Artist photos**: 800x800px (square) or 1600x900px (16:9)
- **News covers**: 1200x630px (optimized for social media sharing)
- **Gallery photos**: 1200x800px
- **Thumbnails**: Auto-generated via Next.js Image component

### Optimization Tools
- Use tools like ImageOptim, Squoosh, or sharp for compression
- Target: < 200KB per image (hero images can be larger)
- Next.js automatically optimizes images at build time

## Video Guidelines

### Self-Hosted
- Format: MP4 with H.264 codec
- Resolution: 1080p or 720p
- Bitrate: 2-5 Mbps for good quality
- Consider file size (aim for < 50MB per video)

### Recommended: External Hosting
For better performance and bandwidth savings:
- **YouTube**: Embed videos using YouTube player
- **Vimeo**: Professional video hosting with customizable player
- Benefits: CDN delivery, adaptive streaming, no bandwidth cost

## File Naming Convention

### Artists
- Format: `[artist-slug].webp`
- Example: `the-bon-jovi-experience.webp`
- Use lowercase, hyphenated slugs

### News
- Format: `[article-slug]-cover.webp`
- Example: `lineup-announcement-2025-cover.webp`

### Gallery
- Format: `[year]-[category]-[number].webp`
- Example: `2024-atmosphere-01.webp`, `2023-performances-15.webp`

## SEO Optimization

### Alt Text
Always include descriptive alt text for images in the code:
```tsx
<Image
  src="/images/artists/artist-name.webp"
  alt="Artist Name performing at Iconic Festival 2024"
/>
```

### File Names
- Use descriptive, keyword-rich file names
- Avoid generic names like `IMG_1234.jpg`
- Good: `iconic-festival-2024-main-stage.webp`
- Bad: `photo1.jpg`

## Next.js Image Component

All images should use the Next.js `<Image />` component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero/festival-crowd.webp"
  alt="Iconic Festival crowd enjoying performances"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  quality={90}
/>
```

## Getting Started

1. **Prepare your images**: Resize and optimize all images before uploading
2. **Organize by category**: Place files in the appropriate directory
3. **Follow naming conventions**: Use descriptive, SEO-friendly names
4. **Convert to WebP**: Use conversion tools for optimal format
5. **Update database/content**: Add references to images in your content management system

## Questions?

Contact: willem@scex.nl
