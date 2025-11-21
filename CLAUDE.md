# Iconic Festival Website

Official website for Iconic Festival - celebrating the greatest music icons with legendary tribute acts in Goffertpark, Nijmegen.

## Current Status

✅ **Phase 1 Complete - Foundation Deployed:**
- Vibrant design system (purple/magenta, orange, blue)
- Responsive Header & Footer
- Homepage with 5 sections (Hero, About, Line-up preview, News, CTA)
- Festival database schema (Artist, NewsArticle, MediaItem)
- Deployed to Vercel and live

⚠️ **PRIORITY - Match PowerPoint Design:**
- Current sections/layout don't match PowerPoint structure
- Need to study PowerPoint images and adjust section sequence
- Focus on section structure and layout patterns, not pixel-perfect design

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage (NEEDS: section restructure)
│   └── globals.css             # Festival design system
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Sticky navigation with mobile menu
│   │   └── footer.tsx          # Four-column footer
│   └── ui/                     # 17 shadcn/ui components
├── server/api/
│   ├── root.ts                 # tRPC router (empty, ready for data)
│   └── trpc.ts                 # tRPC configuration
└── prisma/
    ├── schema.prisma           # Festival models (Artist, NewsArticle, MediaItem)
    └── seed.ts                 # Sample festival data
```

## Next Steps: Match PowerPoint Design

### 1. Study PowerPoint Section Structure
Location: `design input/extracted/ppt/media/image*.png`

**Document:**
- What sections appear on homepage? (in what order?)
- How are sections laid out? (full-width, grid, contained)
- Card layouts for artists/news
- Image/text arrangements
- Visual separation between sections

### 2. Adjust Homepage Structure
File: `src/app/page.tsx`

Current sections:
1. Hero (large ICONIC branding)
2. About Iconic (centered text)
3. Line-up preview (6 cards, 3-col grid)
4. News preview (3 cards, 3-col grid)
5. CTA (gradient background)

**Update to match PowerPoint:**
- Reorder sections if needed
- Adjust grid layouts (1-col, 2-col, 3-col)
- Fix spacing between sections
- Match content width (full vs. contained)
- Add/remove sections as needed

### 3. Implement PowerPoint Feedback

**From Slide 1 (Homepage):**
- Compact layout, less white space
- Artist cards: add descriptions + "Meer Info" CTA
- News cards: add descriptions + "Lees meer" CTA
- Photos: add year labels (2023, 2024)
- Mix photos and videos in media section

**From Slide 2 (Artist Page):**
- More compact, to the point
- Less aggressive ticket CTAs
- Better content balance

**From Slide 3 (News Article):**
- Better readability
- Cleaner typography
- Better text-to-image ratio
- One article = one news item

## Organization Rules

**Festival Content Pattern:**
- Pages → `src/app/[page]/page.tsx`
- Dynamic routes → `src/app/[page]/[slug]/page.tsx`
- Components → `src/components/[category]/[name].tsx`
- Layouts → `src/components/layout/`

**Content Organization:**
- Media → `public/images/[category]/`
- Artist photos → `public/images/artists/`
- News covers → `public/images/news/`
- Gallery → `public/images/gallery/[year]/`

**Keep focused:**
- Match section structure from PowerPoint
- Don't overthink - structure over pixels
- Test responsive layouts (mobile, tablet, desktop)

## Code Quality - Zero Tolerance

After editing ANY file, run:
```bash
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint validation
```

**Database changes:**
```bash
npm run db:generate  # Regenerate Prisma client after schema changes
npm run dev          # Restart dev server
```

## Quick Reference

**Design System:**
- Primary: Purple/magenta (280° 70% 50%)
- Secondary: Orange (30° 95% 55%)
- Accent: Electric blue (210° 100% 50%)
- Utilities: `.festival-gradient`, `.btn-festival`, `.section-padding`

**Key URLs:**
- Live: https://websitev10-9lin2nthd-willem4130s-projects.vercel.app
- GitHub: https://github.com/willem4130/iconic-festival-website
- PowerPoint: `design input/Iconic website design.pptx`
