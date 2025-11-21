# Iconic Festival Website

Official website for Iconic Festival - celebrating the greatest music icons with legendary tribute acts in Goffertpark, Nijmegen.

## Current Status

✅ **Phase 1 COMPLETE - PowerPoint Design Implemented:**
- ✅ Hero section with background video (12s loop, optimized 8.1MB)
- ✅ Scrolling marquee with event info
- ✅ About section with split layout (text + photo)
- ✅ Line-up carousel with dot navigation
- ✅ News section with compact cards
- ✅ Instagram feed integration (@iconic_festival)
- ✅ Framer Motion hover effects on all headings
- ✅ Authentic content from iconicfestival.nl
- ✅ Centered layouts and compact spacing

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage (PowerPoint-inspired, 'use client')
│   └── globals.css             # Festival design system + marquee animation
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Sticky navigation with mobile menu
│   │   └── footer.tsx          # Four-column footer
│   └── ui/                     # 17 shadcn/ui components + Carousel
├── server/api/
│   ├── root.ts                 # tRPC router (ready for data)
│   └── trpc.ts                 # tRPC configuration
├── prisma/
│   ├── schema.prisma           # Festival models (Artist, NewsArticle, MediaItem)
│   └── seed.ts                 # Sample festival data
└── public/
    ├── videos/
    │   └── hero-background.mp4 # Hero video (ignored from git, 8.1MB)
    └── images/                  # Organized media directories

```

## Homepage Sections (Implemented)

1. **Hero Section**
   - Background: Looping video (Goffertpark aerial)
   - Large "ICONIC FESTIVAL" branding + "BEST OF TRIBUTE"
   - Single "TICKETS" CTA button (blue)
   - Scrolling marquee: "9 MEI 2026 ★ GOFFERTPARK, NIJMEGEN ★ BEST OF TRIBUTE"

2. **About Section (Split Layout)**
   - Orange gradient background
   - Left: Text content (authentic from iconicfestival.nl)
   - Right: Festival crowd photo
   - Banner: "BEST OF TRIBUTE – 9 MEI 2026 – GOFFERTPARK NIJMEGEN"

3. **Line-up Carousel**
   - Horizontal carousel (not grid)
   - 9 artist cards with white borders
   - Dot navigation indicators
   - Zigzag decorative pattern at bottom
   - Hover: scale to 105%

4. **News Section**
   - 3 cards in responsive grid (max-w-5xl)
   - Compact spacing (py-12 md:py-16)
   - Date, title, excerpt, "Lees meer" link

5. **Instagram Feed**
   - LightWidget integration (@iconic_festival)
   - Widget ID: eb64db92bd805ab287d364ea964612aa
   - Lazy loading with Next.js Script component

6. **Final CTA**
   - Festival gradient background
   - "Mis Het Niet!" heading
   - Bold "BESTEL TICKETS" button

## Animations & Interactions

**Framer Motion Hover Effects:**
```tsx
<motion.h2
  whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.3 } }}
>
  Heading Text
</motion.h2>
```

Applied to all h2 headings:
- FESTIVAL
- DIT IS DE LINE-UP VAN 2026
- Laatste Nieuws
- Volg Ons Op Instagram
- Mis Het Niet!

## Tech Stack

**Core:**
- Next.js 16.0.1 (App Router, Turbopack)
- React 19 + TypeScript 5.9
- Tailwind CSS 3.4
- Framer Motion 11.x (animations)

**Components:**
- shadcn/ui (17 components)
- embla-carousel-react (carousel)
- Lucide icons

**Backend:**
- tRPC 11.0
- Prisma 6.19 (PostgreSQL)
- NextAuth (optional, for admin)

## Code Quality Rules

After editing ANY file:
```bash
npm run typecheck    # TypeScript validation (REQUIRED)
npm run lint         # ESLint validation
```

**Database changes:**
```bash
npm run db:generate  # After schema changes
npm run dev          # Restart dev server
```

**Git workflow:**
```bash
git add -A
git commit -m "message"
git push origin main  # Auto-deploys to Vercel
```

## Development

**Local server:**
```bash
PORT=3020 npm run dev  # Or any available port
open http://localhost:3020
```

**Video optimization (if needed):**
```bash
cd public/videos
ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 28 \
  -movflags +faststart -an optimized.mp4
```

## Content Organization

**Media files:**
- Hero video: `public/videos/hero-background.mp4` (git ignored)
- Artist photos: `public/images/artists/`
- News covers: `public/images/news/`
- Gallery: `public/images/gallery/[year]/`

**Important:**
- Video file excluded from git (too large for Vercel)
- Use `.gitignore`: `public/videos/`
- Optimal video: 1080p, H.264, <5MB, 10-30s

## Next Steps (Phase 2)

**Page Templates:**
1. `/line-up` - Artist grid with filters
2. `/line-up/[slug]` - Artist detail pages
3. `/nieuws` - News listing with pagination
4. `/nieuws/[slug]` - News article details
5. `/in-de-media` - Media gallery with year filters
6. `/tickets` - Ticket information
7. `/over-iconic` - About page with history

**Data Integration:**
- Create tRPC routers for artists, news, media
- Connect homepage to Prisma database
- Implement search/filter functionality
- Add loading states and error boundaries

## Design System

**Colors:**
- Primary: `hsl(280, 70%, 50%)` - Purple/magenta
- Secondary: `hsl(30, 95%, 55%)` - Orange
- Accent: `hsl(210, 100%, 50%)` - Electric blue

**Custom Utilities:**
```css
.festival-gradient        /* Multi-color gradient */
.festival-text-gradient   /* Gradient text */
.section-padding          /* py-16 md:py-24 lg:py-32 */
.btn-festival             /* Primary button style */
.animate-marquee          /* Scrolling text */
```

**Typography:**
- Font: Inter (Google Fonts)
- Headings: Bold, tight tracking
- Responsive sizes: text-3xl → text-5xl

## Key URLs

- **Local:** http://localhost:3020
- **Vercel (stable):** https://websitev10-dpa12yigl-willem4130s-projects.vercel.app
- **GitHub:** https://github.com/willem4130/iconic-festival-website
- **Instagram:** https://www.instagram.com/iconic_festival/
- **Official site:** https://www.iconicfestival.nl

## Troubleshooting

**Port already in use:**
```bash
lsof -ti:3020 | xargs kill -9
PORT=3020 npm run dev
```

**Next.js lock error:**
```bash
pkill -f "next dev"
rm -f .next/dev/lock
npm run dev
```

**Vercel deployment fails:**
- Check for large files (video)
- Verify all dependencies in package.json
- Run `npm run typecheck` locally first

## Notes

- Page is 'use client' for Framer Motion
- Instagram widget uses Next.js Script (lazyOnload)
- Carousel uses embla-carousel with centered alignment
- All sections optimized for mobile-first responsive
- Dutch language throughout (lang="nl")
