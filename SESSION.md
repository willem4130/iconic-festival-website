# Session State - Iconic Festival Website

**Last Updated**: November 21, 2025, 1:25 PM CET
**Session Type**: Complex
**Project**: Iconic Festival Website - PowerPoint design implementation

---

## 🎯 Current Objective

Implement PowerPoint-inspired design improvements: hero video background, centered carousel layouts, authentic content from iconicfestival.nl, Instagram feed integration, and Framer Motion hover effects.

---

## Progress Summary

### ✅ Completed Tasks (Current Session)

**1. PowerPoint Design Analysis & Implementation**
- Studied PowerPoint images (image1-3.png) to understand design requirements
- Documented section structure: Hero with video, split layout About, horizontal carousel
- Transformed homepage to match PowerPoint aesthetic

**2. Hero Section with Video Background**
- Added hero background video (Goffertpark aerial, 12.2s loop)
- Optimized video from 4K/51MB → 1080p/8.1MB (84% reduction using ffmpeg)
- Implemented HTML5 video: autoplay, loop, muted, playsInline
- Added dark overlay (40%) for text readability
- Created scrolling marquee with event info: "9 MEI 2026 ★ GOFFERTPARK, NIJMEGEN ★ BEST OF TRIBUTE"
- Added `@keyframes marquee` animation to globals.css

**3. About Section Transformation**
- Converted from centered text to split layout (PowerPoint style)
- Left side: Orange gradient background with white text
- Right side: Festival crowd photo placeholder
- Fetched authentic content from www.iconicfestival.nl
- Updated text: mentions Queen, ABBA, Bruno Mars, Dua Lipa, 2nd stage at Goffert Theater
- Changed banner from "HET OUDSTE TRIBUTEFESTIVAL..." to "BEST OF TRIBUTE – 9 MEI 2026 – GOFFERTPARK NIJMEGEN"
- Added decorative circular shapes (purple) for visual interest

**4. Line-up Carousel Implementation**
- Replaced grid layout with horizontal carousel (embla-carousel)
- Changed alignment from 'start' to 'center' for better centering
- Added 9 tribute acts: Queen, Golden Earring, Anouk, Mystery Band, Donna Summer, Coldplay, Pink Floyd, Fleetwood Mac, ABBA
- Artist cards: white 4px borders, 3:4 aspect ratio, hover scale 105%
- Added dot navigation indicators (9 dots)
- Created zigzag decorative pattern at bottom (purple)
- Adjusted spacing: max-w-6xl, -ml-3, pl-3

**5. Layout Centering Fixes**
- Fixed carousel centering issue (was left-aligned)
- Reduced news grid max-width from max-w-6xl to max-w-5xl
- Made container padding consistent: `container mx-auto px-4 md:px-6 lg:px-8`
- Adjusted carousel spacing for balanced appearance

**6. Instagram Feed Integration**
- Added new section before final CTA
- Integrated LightWidget for @iconic_festival feed
- Widget ID: eb64db92bd805ab287d364ea964612aa
- Used Next.js Script component with lazyOnload strategy
- Section heading: "Volg Ons Op Instagram"
- Subtitle: "@iconic_festival - Bekijk sfeerimpressies en blijf op de hoogte"

**7. Framer Motion Hover Effects**
- Installed framer-motion package
- Converted page.tsx to 'use client' component
- Added hover effects to all h2 headings:
  - Scale: 1.05 (5% enlargement)
  - Y-axis lift: -5px (subtle float)
  - Smooth 0.3s transitions
- Applied to: FESTIVAL, DIT IS DE LINE-UP VAN 2026, Laatste Nieuws, Volg Ons Op Instagram, Mis Het Niet!

**8. Content Updates**
- Updated all text to match iconicfestival.nl branding
- Fixed Instagram handle: @iconicfestival → @iconic_festival
- Photo captions updated: "Iconic Festival, Goffertpark, Nijmegen"
- All sections now have compact spacing (py-12 md:py-16 instead of section-padding)

**9. Documentation Updates**
- Updated CLAUDE.md with complete Phase 1 implementation
- Added tech stack details (Framer Motion 11.x)
- Documented hover effects with code examples
- Added troubleshooting section
- Listed all 6 homepage sections with details

**10. Git & Deployment**
- 8 commits pushed to GitHub
- Video file excluded from git (.gitignore: public/videos/)
- Commits: PowerPoint design, centering fixes, content updates, Instagram integration, hover effects, documentation
- Vercel auto-deployment triggered (some failed due to video in git history)
- Latest stable: https://websitev10-dpa12yigl-willem4130s-projects.vercel.app

### 🚧 In Progress

- None - all planned work for this session is complete

### 📋 Pending Tasks

**Immediate:**
- Resolve Vercel deployment issue (video file in git history causing failures)
- Consider hosting video on CDN (Cloudinary, Vimeo) for production

**Phase 2: Page Templates** (Next Priority)
1. `/line-up` page - Artist grid with filters
2. `/line-up/[slug]` - Artist detail pages
3. `/nieuws` - News listing
4. `/nieuws/[slug]` - News article detail
5. `/in-de-media` - Media gallery
6. `/tickets` - Ticket information
7. `/over-iconic` - About page

---

## 🔑 Key Decisions Made

**Hero Video Implementation**
- **Choice**: HTML5 video element with local hosting
- **Rationale**: Better control, no external dependencies, autoplay/loop support
- **Alternatives Considered**: YouTube embed (rejected - less control), Vimeo (rejected - requires account)
- **Impact**: Engaging hero, but 8.1MB file size causes Vercel deployment issues

**Video Optimization Strategy**
- **Choice**: Optimize 4K to 1080p with H.264, CRF 28
- **Rationale**: Balance quality and file size for web delivery
- **Command**: `ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -preset slow -crf 28 -movflags +faststart -an output.mp4`
- **Impact**: 84% size reduction (51MB → 8.1MB)

**Layout Strategy: Center Alignment**
- **Choice**: Change carousel from align: 'start' to align: 'center'
- **Rationale**: PowerPoint design showed centered cards, not left-aligned
- **Impact**: More balanced, professional appearance matching design intent

**Content Source: Authentic Website Text**
- **Choice**: Fetch actual content from www.iconicfestival.nl via WebFetch
- **Rationale**: Accurate branding, real festival information, SEO consistency
- **Alternatives Considered**: Write custom text (rejected - want consistency with main site)
- **Impact**: Authentic voice, mentions real acts (Queen, ABBA, Bruno Mars, Dua Lipa)

**Instagram Integration: LightWidget**
- **Choice**: Use LightWidget embed with Next.js Script component
- **Rationale**: User has existing account, supports lazy loading, responsive
- **Alternatives Considered**: Custom Instagram API integration (rejected - more complex, rate limits)
- **Impact**: Live feed updates automatically, social proof, dynamic content

**Animation Library: Framer Motion**
- **Choice**: Framer Motion over GSAP
- **Rationale**: Better React integration, simpler API for basic hovers, user mentioned "framer or gsap"
- **Alternatives Considered**: GSAP (more powerful but overkill for simple hovers)
- **Impact**: Page becomes 'use client', smooth hover effects on all headings

---

## 📁 Files Modified

### Created
- `public/videos/hero-background.mp4` - Optimized hero video (8.1MB, git ignored)

### Modified (Current Session)
- `src/app/page.tsx` - Major restructure: video hero, carousel, Instagram, Framer Motion (376 lines)
- `src/app/globals.css` - Added `@keyframes marquee` animation
- `package.json` - Added framer-motion dependency
- `.gitignore` - Added public/videos/ to exclude large files
- `CLAUDE.md` - Complete rewrite with Phase 1 details (238 lines)

### Deleted
- `public/videos/hero-background-original.mp4` - Original unoptimized video (51MB)

---

## 🏗️ Patterns & Architecture

**Client-Side Rendering Pattern**:
```tsx
'use client'  // Required for Framer Motion

export default function Home() {
  return (
    <>
      <motion.h2 whileHover={{ scale: 1.05, y: -5 }}>
        Heading
      </motion.h2>
    </>
  )
}
```

**Video Optimization Workflow**:
```bash
# Input: 4K MP4 (51MB)
ffmpeg -i input.mp4 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
  -c:v libx264 -preset slow -crf 28 \
  -movflags +faststart -an output.mp4
# Output: 1080p MP4 (8.1MB)
```

**Carousel Configuration**:
```tsx
<Carousel opts={{ align: 'center', loop: true }} className="w-full max-w-6xl mx-auto">
  <CarouselContent className="-ml-3">
    <CarouselItem className="pl-3 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      {/* Card content */}
    </CarouselItem>
  </CarouselContent>
</Carousel>
```

**Dependencies Added**:
- framer-motion: ^11.x (animations)

**Tech Stack**:
- Next.js 16.0.1 + Turbopack
- React 19 + TypeScript 5.9
- Tailwind CSS 3.4
- Framer Motion 11.x
- embla-carousel-react 8.6.0
- shadcn/ui (17 components)

---

## 💡 Context & Notes

**Important Context**:

1. **PowerPoint Design Source**
   - Location: `design input/extracted/ppt/media/image*.png`
   - Image 1: Hero with video background, scrolling marquee
   - Image 2: Horizontal carousel with dot navigation, zigzag pattern
   - Image 3: Split layout (text + photo), bold banner statement

2. **Video Deployment Challenge**
   - 8.1MB video works perfectly on localhost
   - Causes Vercel deployment failures (too large for serverless)
   - Video excluded from git but still in history
   - Options: CDN hosting, further compression, or static image fallback for production

3. **Instagram Feed**
   - Widget ID: eb64db92bd805ab287d364ea964612aa
   - Account: @iconic_festival (with underscore)
   - Updates automatically from Instagram
   - Lazy loaded for performance

4. **Hover Effects**
   - All h2 headings have interactive hover
   - Scale: 1.05 (subtle enlargement)
   - Y-lift: -5px (floats upward)
   - Duration: 0.3s (smooth transition)

**Gotchas & Edge Cases**:

1. **'use client' Directive**
   - Required at top of page.tsx for Framer Motion
   - Makes entire page client-rendered
   - May impact SEO slightly (acceptable trade-off for animations)

2. **Video Autoplay**
   - Requires `muted` attribute for autoplay to work
   - `playsInline` needed for iOS devices
   - Dark overlay (bg-black/40) improves text contrast

3. **Carousel Spacing**
   - Negative margin (-ml-3) with matching padding (pl-3) creates gutter
   - `basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4` for responsive columns
   - `align: 'center'` centers current slide

4. **Instagram Widget Loading**
   - Next.js Script with `strategy="lazyOnload"` delays loading
   - Improves initial page load performance
   - Widget loads when user scrolls near it

**Documentation References**:

- **Project Files**:
  - `CLAUDE.md` - Complete implementation guide
  - `SESSION.md` - This file
  - `design input/Iconic website design.pptx` - Original PowerPoint

- **External Resources**:
  - Framer Motion: https://www.framer.com/motion/
  - LightWidget: https://lightwidget.com/
  - FFmpeg docs: https://ffmpeg.org/ffmpeg.html
  - Embla Carousel: https://www.embla-carousel.com/

---

## 🔄 Continuation Prompt

**Use this to resume work in a new session:**

---

I'm continuing work on the Iconic Festival Website. Here's where we left off:

**Current Status**: Phase 1 is COMPLETE with PowerPoint-inspired design fully implemented!

**What's Working (localhost:3020)**:
- ✅ Hero section with looping video background (Goffertpark aerial)
- ✅ Scrolling marquee: "9 MEI 2026 ★ GOFFERTPARK, NIJMEGEN ★ BEST OF TRIBUTE"
- ✅ About section with split layout (orange gradient + photo)
- ✅ Line-up carousel (centered, 9 tribute acts, dot navigation, zigzag pattern)
- ✅ News section (compact cards, authentic content)
- ✅ Instagram feed (@iconic_festival, LightWidget widget ID: eb64db92bd805ab287d364ea964612aa)
- ✅ Framer Motion hover effects on all h2 headings (scale 1.05, y: -5px)
- ✅ All content from iconicfestival.nl (authentic branding)

**Key Changes Made**:
1. Optimized hero video: 4K/51MB → 1080p/8.1MB (ffmpeg)
2. Carousel: changed to center alignment, max-w-6xl
3. About section: split layout with authentic text
4. Instagram: LightWidget integration with lazy loading
5. Animations: Framer Motion hover effects
6. Content: fetched from www.iconicfestival.nl

**Known Issues**:
- ⚠️ Vercel deployment failing (video file in git history causes size issues)
- ✅ Video works perfectly on localhost:3020
- 📝 Video excluded from git but still in history

**Files to Know**:
- `src/app/page.tsx` - Homepage ('use client', Framer Motion, 376 lines)
- `public/videos/hero-background.mp4` - Hero video (8.1MB, git ignored)
- `CLAUDE.md` - Complete implementation guide
- `design input/extracted/ppt/media/` - PowerPoint design references

**Next Steps**:

**Option A: Fix Vercel Deployment**
1. Further compress video to <5MB (target 3-4MB)
2. Or use CDN hosting (Cloudinary, Vimeo)
3. Or add static image fallback for production
4. Test deployment after fix

**Option B: Start Phase 2 (Page Templates)**
1. Create `/line-up` page with artist grid
2. Create `/line-up/[slug]` dynamic route
3. Implement filters and search
4. Connect to Prisma database

**Development Setup**:
```bash
# Start local server
PORT=3020 npm run dev
open http://localhost:3020

# If port in use
lsof -ti:3020 | xargs kill -9
PORT=3020 npm run dev
```

**Tech Stack**:
- Next.js 16 + Turbopack
- Framer Motion (animations)
- LightWidget (Instagram)
- embla-carousel (carousel)
- Video: 1080p H.264, 8.1MB

**Context**:
- Project: `/Users/willemvandenberg/Iconic/websitev10`
- Design system: Purple/magenta primary, orange secondary, blue accent
- All text in Dutch (lang="nl")
- Authentic content from iconicfestival.nl
- PowerPoint design fully implemented

**Questions/Blockers**:
- Decide: Fix video deployment or proceed to Phase 2?
- Video CDN vs further compression vs image fallback?

---

## 📚 Previous Session Notes

**Session: November 21, 2025 (Morning)**
- Complete transformation from Simplicate to Iconic Festival
- Built entire Phase 1 foundation: Header, Footer, Homepage, Database schema
- 168 files modified, 26,779 lines added
- Deployed to production successfully
- Complex session with major codebase transformation

**Session: November 21, 2025 (Afternoon - Current)**
- PowerPoint design implementation
- Hero video background + optimization
- Layout centering and carousel fixes
- Authentic content from iconicfestival.nl
- Instagram feed integration
- Framer Motion hover effects
- Documentation updates (CLAUDE.md)
- 8 commits, multiple features added

**Key Achievement**:
Transformed a basic homepage into a PowerPoint-inspired, interactive festival website with video backgrounds, horizontal carousels, Instagram integration, and smooth hover animations - matching the design vision exactly.

---

**Session Complexity**: Complex (major design transformation, video optimization, animations, multiple integrations)
**Commits**: 8 new commits (total 11)
**Files Modified**: 6 files
**New Dependencies**: framer-motion
**Documentation**: CLAUDE.md completely rewritten (238 lines)
**Build Status**: ✅ Passing locally, ⚠️ Vercel deployment issues
**Local URL**: http://localhost:3020

---
