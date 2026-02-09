# Spline 3D Integration Guide

## Installation (Run Locally)

```powershell
cd C:\pravin\portfolio
npm install @splinetool/react-spline
```

## What Was Built

✅ **Background3D Component** (`components/Background3D.tsx`)
- Dynamic Spline import (code splitting for performance)
- Loading states with gradient fallback
- Error handling with graceful degradation
- **Mobile optimization**: Disabled on screens < 768px for performance
- **Reduced-motion support**: Shows static gradient if user prefers reduced motion
- Fade-in animation when scene loads (1s transition)
- Overlay gradient for text readability

✅ **Updated Hero Section** (`components/sections/Hero.tsx`)
- Layered architecture:
  - **Z-0**: Spline 3D background
  - **Z-10**: Gradient overlay (in Background3D)
  - **Z-20**: Content (text, photo, buttons)
- Enhanced visual effects:
  - Backdrop blur on profile photo ring
  - Drop shadows on text for readability over 3D scene
  - Stronger button shadows (shadow-2xl)
  - Semi-transparent accent backgrounds with backdrop-blur

## Spline Scene Details

**Scene URL**: `https://prod.spline.design/8409dc4255b647feb0d96f106a6ce59b/scene.splinecode`

Converted from file ID: `8409dc42-55b6-47fe-b0d9-6f106a6ce59b`

**Configuration**:
- `pointerEvents: "none"` — Background only, no interaction
- Full width/height coverage
- Non-blocking load (Suspense + dynamic import)

## Performance Optimizations

1. **Code Splitting**: Spline loaded via `next/dynamic` with `ssr: false`
2. **Conditional Rendering**: 
   - Disabled on mobile (< 768px)
   - Disabled on reduced-motion preference
3. **Graceful Fallback**: Gradient background if Spline fails
4. **Progressive Enhancement**: Content visible immediately, 3D enhances experience

## Testing Steps

1. **Install package**: `npm install @splinetool/react-spline`
2. **Test desktop**: Verify 3D scene loads at http://localhost:3000
3. **Test mobile**: Verify gradient fallback on narrow viewport
4. **Test reduced-motion**: 
   - Chrome DevTools → Rendering → Emulate CSS prefers-reduced-motion
   - Verify gradient fallback shows
5. **Test error handling**: Break scene URL temporarily, verify fallback

## Customization Options

**Enable 3D on Mobile** (if performance is acceptable):
```tsx
// In Background3D.tsx, remove this check:
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

// Or make it interactive:
style={{ pointerEvents: "auto" }} // Allow user to interact with 3D scene
```

**Adjust Overlay Gradient** (for more/less scene visibility):
```tsx
// In Background3D.tsx, line 47:
className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"
// Lower opacity = more 3D visible
```

## File Changes

- ✅ `components/Background3D.tsx` (NEW)
- ✅ `components/sections/Hero.tsx` (UPDATED)
- ✅ Resume filename: `/resume/Pravin_MR_Resume.pdf`

## Next Steps

Run `npm install @splinetool/react-spline` and test locally!
