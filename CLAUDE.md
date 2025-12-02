# J Calvin Property Care - Marketing Website

## Overview
Static marketing website for J Calvin Property Care, a premium monthly property maintenance service serving North Houston.

## Live Site
**Production URL:** https://jcalvintx.com/property-care/

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Static export hosted on 10Web (WordPress hosting) via SFTP
- **Domain:** DNS managed by DreamHost, proxied through Cloudflare (10Web's CDN)

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/              # About Us page
│   ├── calculator/         # Time savings calculator
│   ├── compare/            # Compare all plans page
│   ├── contact/            # Contact form (mailto)
│   ├── packages/[slug]/    # Dynamic package detail pages
│   ├── services/           # Service vouchers info
│   ├── signup/             # Signup form (mailto)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── FAQ.tsx             # FAQ accordion component
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Navigation header
│   ├── Logo.tsx            # Logo component (unused)
│   └── icons.tsx           # SVG icon components
└── data/                   # Static data
    ├── faq.ts              # FAQ content for all pages
    └── pricing.ts          # Package pricing and features
```

## Packages/Plans
- **Essentials** - Basic monthly maintenance
- **Signature** - Essentials + roof/gutter + service vouchers
- **Concierge** - Signature + storm cleanup + window cleaning
- **Estate** - All-inclusive with Christmas lighting included

## Configuration

### next.config.js
```javascript
const nextConfig = {
  reactStrictMode: true,
  output: 'export',           // Static HTML export
  basePath: '/property-care', // Subdirectory path
  assetPrefix: '/property-care/',
  trailingSlash: true,
  images: {
    unoptimized: true,        // Required for static export
  },
}
```

### Image Paths
Images use absolute paths with the basePath prefix:
```jsx
<img src="/property-care/J Calvin Propert Care Logo - header.png" />
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build static export
npm run build
# Output: /out directory
```

## Deployment

### Building for Production
```bash
npm run build
```

### Deploying to 10Web
1. Connect via SFTP to 10Web hosting
2. Navigate to `/home/wplive/web/wp-live/`
3. Upload contents of `/out` folder to `property-care/` directory

### SFTP Details
- **Path:** `/home/wplive/web/wp-live/property-care/`
- WordPress root is at `/home/wplive/web/wp-live/`

## Related Projects
- **Customer Portal:** Planned for https://myaccount.jcalvintx.com
  - Located at: `/Users/Trey/Claude-Code-Projects/j-calvin-customer-portal`

## Forms
Contact and signup forms use mailto links to `hello@jcalvintx.com` since this is a static site without a backend.

## Brand Colors (Tailwind)
- `hunter` - Primary dark green
- `bronze` - Accent gold/bronze
- `cream` - Light background
- `cream-dark` - Slightly darker cream

## Repository
https://github.com/treyclawson22/j-calvin-property-care
