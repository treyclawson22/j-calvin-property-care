# Pricing Data Structure

This document explains the pricing data structure used throughout the site, located in `src/data/pricing.ts`.

## Package Structure

Each package follows this TypeScript interface:

```typescript
interface Package {
  name: string;           // Full package name (e.g., "The Essentials Package")
  tagline: string;        // Short description
  prices: PricePoint[];   // Array of 4 price tiers by home size
  discount: string;       // Christmas lighting discount (e.g., "10%", "25%", "50%", "50%+")
  features: string[];     // List of included features
  color: string;          // Hex color for package branding
  voucherValues?: string[]; // Optional: voucher values by home size
  christmasValues?: string[]; // Optional: Christmas lighting values (Estate only)
}

interface PricePoint {
  size: string;           // Home size description
  monthly: number;        // Monthly price in dollars
  hoursSaved: number;     // Estimated hours saved per year
}
```

## Current Pricing (as of documentation date)

### The Essentials Package
- Color: `#447456`
- Starting at: $150/mo

| Home Size | Monthly | Hours Saved/Year |
|-----------|---------|------------------|
| Up to 2,750 sq ft | $150 | 60 |
| 2,751 – 3,750 sq ft | $190 | 69 |
| 3,751 – 4,750 sq ft | $225 | 78 |
| 4,751 – 6,000 sq ft | $265 | 90 |

**Features:**
- Trash can cleaning & sanitization (up to 2 cans)
- Outdoor living space light clean
- Front entryway refresh
- 10% discount on Christmas lighting

### The Signature Package
- Color: `#2d5a45`
- Starting at: $240/mo

| Home Size | Monthly | Hours Saved/Year | Voucher Value |
|-----------|---------|------------------|---------------|
| Up to 2,750 sq ft | $240 | 84 | $300 |
| 2,751 – 3,750 sq ft | $320 | 99 | $450 |
| 3,751 – 4,750 sq ft | $400 | 117 | $600 |
| 4,751 – 6,000 sq ft | $480 | 138 | $750 |

**Features:**
- Everything in Essentials, plus:
- Bi-annual roof debris removal
- Bi-annual gutter cleaning & flushing
- 2 Exterior Service Vouchers per year
- Vouchers roll over (max 4 held)
- Vouchers transferable to friends/family
- 25% discount on Christmas lighting

### The Concierge Package
- Color: `#8b5a2b`
- Starting at: $450/mo

| Home Size | Monthly | Hours Saved/Year | Voucher Value |
|-----------|---------|------------------|---------------|
| Up to 2,750 sq ft | $450 | 111 | $300 |
| 2,751 – 3,750 sq ft | $585 | 135 | $450 |
| 3,751 – 4,750 sq ft | $675 | 162 | $600 |
| 4,751 – 6,000 sq ft | $855 | 192 | $750 |

**Features:**
- Everything in Signature, plus:
- 2 Post-storm cleanup vouchers/year
- 2 additional Exterior Service Vouchers (4 total/year)
- Vouchers roll over (max 6 held)
- Quarterly window & screen cleaning
- 3 Pollen wash-off visits
- 50% discount on Christmas lighting

### The Estate Package
- Color: `#2d2d2d`
- Starting at: $765/mo

| Home Size | Monthly | Hours Saved/Year | Voucher Value | Christmas Value |
|-----------|---------|------------------|---------------|-----------------|
| Up to 2,750 sq ft | $765 | 177 | $300 | $800 |
| 2,751 – 3,750 sq ft | $990 | 189 | $450 | $1,400 |
| 3,751 – 4,750 sq ft | $1,215 | 231 | $600 | $2,000 |
| 4,751 – 6,000 sq ft | $1,485 | 279 | $750 | $2,600 |

**Features:**
- Everything in Concierge, plus:
- 2 additional Post-storm cleanup vouchers (4 total/year)
- Bi-monthly deep clean of outdoor spaces
- Thorough grill interior cleaning
- 2 additional Exterior Service Vouchers (6 total/year)
- Vouchers roll over (max 9 held)
- Christmas lighting included (up to value)
- Additional lighting at 50% discount

## Home Size Tiers

```typescript
export const sizes = [
  "Up to 2,750 sq ft",
  "2,751 – 3,750 sq ft",
  "3,751 – 4,750 sq ft",
  "4,751 – 6,000 sq ft"
];
```

Note: Homes over 6,000 sq ft require custom quotes.

## Updating Pricing

To update pricing:

1. Edit `src/data/pricing.ts`
2. Update the relevant package's `prices` array
3. If adding new features, also update `featureDescriptions` and `comparisonFeatures`

Example:
```typescript
essentials: {
  // ...
  prices: [
    { size: "Up to 2,750 sq ft", monthly: 150, hoursSaved: 60 },
    { size: "2,751 – 3,750 sq ft", monthly: 190, hoursSaved: 69 },
    // ... update values here
  ],
  // ...
}
```

## Calculator Logic

The Time Savings Calculator uses this formula:

```
Time Value = hoursSaved * hourlyRate
Annual Cost = monthly * 12
Net Savings = Time Value - Annual Cost
```

Where `hourlyRate` is calculated from:
- Direct input, OR
- `annualSalary / 2080` (2080 = 40 hours/week * 52 weeks)
