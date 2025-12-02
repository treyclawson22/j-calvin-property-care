# J Calvin Property Care Plans - Project Documentation

## Overview

This is a Next.js 14 website for J Calvin Property Care Plans, a property maintenance service company serving North Houston. The site showcases monthly maintenance packages (Essentials, Signature, Concierge, Estate) with a time savings calculator, feature comparisons, and signup functionality.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Fonts**: Custom serif and sans-serif fonts

## Color Palette

Defined in `tailwind.config.ts`:

```typescript
colors: {
  'hunter': {
    DEFAULT: '#1a3d2e',  // Primary dark green
    light: '#2d5a45',    // Lighter green (used in gradients)
    medium: '#4a7c59'    // Medium green (accents)
  },
  'cream': {
    DEFAULT: '#faf8f5',  // Light background
    dark: '#f5f3f0'      // Slightly darker cream
  },
  'bronze': {
    DEFAULT: '#b87333',  // Accent color (CTAs, highlights)
    light: '#e8c496'     // Light bronze (labels)
  },
}
```

## Package Colors

Each package tier has its own accent color (defined in `src/data/pricing.ts`):

- **Essentials**: `#447456` (lighter green)
- **Signature**: `#2d5a45` (darker green)
- **Concierge**: `#8b5a2b` (bronze/brown)
- **Estate**: `#2d2d2d` (dark charcoal)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home/Program Overview page
│   ├── layout.tsx            # Root layout with header/footer
│   ├── globals.css           # Global styles and Tailwind
│   ├── about/page.tsx        # About Us page
│   ├── contact/page.tsx      # Contact page
│   ├── compare/page.tsx      # Plan comparison page
│   ├── calculator/page.tsx   # Standalone calculator page
│   ├── signup/page.tsx       # Signup form page
│   └── packages/
│       └── [slug]/page.tsx   # Dynamic package detail pages
├── components/
│   ├── Header.tsx            # Navigation header with logo
│   ├── Footer.tsx            # Site footer with logo
│   ├── Calculator.tsx        # Time savings calculator
│   ├── FAQ.tsx               # Reusable FAQ accordion component
│   ├── ServiceArea.tsx       # Service area map/info
│   ├── Logo.tsx              # Logo component (legacy, replaced by images)
│   └── icons.tsx             # SVG icon components
├── data/
│   ├── pricing.ts            # Package pricing, features, descriptions
│   └── faq.ts                # FAQ content for each page/package
└── public/
    ├── J Calvin Propert Care Logo - header.png  # Header logo (42px height)
    └── J Calvin Propert Care Logo - footer.png  # Footer logo (36px height)
```

## Key Files

### `src/data/pricing.ts`

Central data file containing:
- `pricingData`: All 4 packages with prices, features, colors, voucher values
- `sizes`: Home size tiers (up to 2,750 sq ft, 2,751-3,750, etc.)
- `featureDescriptions`: Detailed descriptions for each feature
- `comparisonFeatures`: Data for the comparison table

### `src/data/faq.ts`

FAQ content organized by page:
- `generalFAQs`: Used on home, about, and contact pages
- `essentialsFAQs`, `signatureFAQs`, `conciergeFAQs`, `estateFAQs`: Package-specific FAQs
- `compareFAQs`: Comparison page FAQs

### `src/components/Calculator.tsx`

Time savings calculator component:
- Supports `embedded` prop for use on other pages
- Shows background image only when not embedded
- Uses string state for inputs to allow empty field
- Calculates net savings based on hourly rate and package costs

## Page Headers with Background Images

All major pages have background images with a hunter green overlay:

| Page | Image Theme |
|------|-------------|
| Home (Hero) | Premium traditional home (~4,500 sq ft) |
| Home (Calculator) | Traditional estate with shingle roof |
| Compare | Traditional suburban home |
| About | Neighborhood street view |
| Contact | Telephone/communication |
| Essentials Package | Nice single-family home |
| Signature Package | Upscale traditional home |
| Concierge Package | Traditional brick home |
| Estate Package | Luxury backyard with pool |

Images are from Unsplash (free to use). The overlay uses `bg-gradient-to-br from-hunter/90 to-hunter-light/85` for consistency.

## Contact Information

- **Phone**: (832) 371-6030
- **Email**: info@jcalvintx.com
- **Service Areas**: Tomball, Klein, Spring, The Woodlands, Montgomery, Cypress

## Component Patterns

### Card Styling
Package cards use consistent styling:
```tsx
<div className="bg-white rounded-2xl overflow-hidden border-2 border-hunter/10 shadow-sm">
  <div className="h-1.5" style={{ backgroundColor: pkg.color }} />
  {/* Card content */}
</div>
```

### FAQ Component Usage
```tsx
<FAQ
  faqs={faqArray}
  title="Section Title"
  subtitle="Optional subtitle"
  accentColor={packageColor}  // Optional, defaults to bronze
/>
```

### Hero Section Pattern
```tsx
<section className="py-20 px-6 relative overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(...)' }}
  />
  <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
  <div className="max-w-[900px] mx-auto text-center relative z-10">
    {/* Content */}
  </div>
</section>
```

## Styling Classes

Common custom classes (defined in `globals.css`):
- `.btn-primary`: Bronze background CTA button
- `.btn-secondary`: Outlined hunter green button
- `.btn-outline-light`: Outlined cream button (for dark backgrounds)
- `.section-label`: Small uppercase tracking label
- `.section-title`: Large serif heading
- `.section-title-light`: Light version for dark backgrounds

## Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Future Development Notes

1. **Form Handling**: The contact and signup forms currently log to console. Need to integrate with backend/email service.

2. **Images**: Background images are from Unsplash CDN. Consider downloading and self-hosting for production.

3. **Analytics**: No analytics currently implemented.

4. **SEO**: Meta tags and OpenGraph images should be added for production.

5. **Calculator Page**: There's a standalone `/calculator` route that may not be needed (calculator is on home page).

6. **Logos**: Stored in `/public` with spaces in filenames. Consider renaming for cleaner URLs.
