# Background Images Reference

All background images are sourced from Unsplash and use the following URL pattern:
`https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w=2000&q=80`

## Current Image Assignments

### Main Pages

| Page | Location | Unsplash Photo ID | Description |
|------|----------|-------------------|-------------|
| Home | Hero Section | `photo-1583608205776-bfd35f0d9f83` | Premium traditional home ~4,500 sq ft |
| Home | Calculator Section | `photo-1628744448840-55bdb2497bd4` | Traditional estate with shingle roof |
| Compare | Hero | `photo-1570129477492-45c003edd2be` | Traditional suburban home |
| About | Hero | `photo-1592595896616-c37162298647` | Neighborhood street view |
| Contact | Hero | `photo-1523966211575-eb4a01e7dd51` | Telephone/communication themed |
| Calculator (standalone) | Hero | `photo-1508962914676-134849a727f0` | Clock/time concept |

### Package Pages

| Package | Unsplash Photo ID | Description |
|---------|-------------------|-------------|
| Essentials | `photo-1568605114967-8130f3a36994` | Nice single-family home with white exterior |
| Signature | `photo-1416331108676-a22ccb276e35` | Elegant traditional luxury home |
| Concierge | `photo-1605276374104-dee2a0ed3cd6` | Traditional brick home with landscaping |
| Estate | `photo-1564501049412-61c2a3083791` | Luxury backyard with pool and patio |

## Image Selection Guidelines

When selecting new images, follow these criteria:

1. **Traditional Architecture**: Avoid modern/contemporary designs. Look for:
   - Brick or stone exteriors
   - Shingle roofs (not flat or metal)
   - Classic American suburban style
   - Texas-appropriate landscaping

2. **Home Size Matching**:
   - Essentials: Standard nice home (~2,500-3,000 sq ft look)
   - Signature: Upscale home (~3,500-4,000 sq ft look)
   - Concierge: Premium home (~4,000-5,000 sq ft look)
   - Estate: Luxury property with outdoor living spaces

3. **Image Quality**:
   - Use `w=2000&q=80` parameters for high quality
   - Ensure good horizontal composition (headers are wide)
   - Avoid images with prominent text or watermarks

4. **Overlay Compatibility**:
   - Images work with `from-hunter/90 to-hunter-light/85` overlay
   - Medium brightness images work best
   - Avoid very dark or very light images

## How to Change an Image

1. Find a new image on Unsplash
2. Copy the photo ID from the URL (e.g., `photo-1234567890123-abcdef123456`)
3. Update the corresponding file:
   - Main pages: Edit the specific page file in `src/app/`
   - Package pages: Edit `src/app/packages/[slug]/page.tsx` and update the `packageImages` object
   - Calculator: Edit `src/components/Calculator.tsx`

## Example Code

```tsx
// In a page file
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=2000&q=80)' }}
/>
<div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
```

```tsx
// In packages/[slug]/page.tsx
const packageImages: Record<string, string> = {
  essentials: 'https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=2000&q=80',
  signature: 'https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=2000&q=80',
  concierge: 'https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=2000&q=80',
  estate: 'https://images.unsplash.com/photo-XXXXXXXXXX?auto=format&fit=crop&w=2000&q=80',
};
```

## Production Considerations

For production deployment, consider:

1. **Self-hosting**: Download images and serve from your own CDN to avoid Unsplash rate limits
2. **Next.js Image**: Convert to use `next/image` component for automatic optimization
3. **Responsive images**: Add different sizes for mobile/tablet/desktop
4. **Lazy loading**: Implement lazy loading for below-fold images
