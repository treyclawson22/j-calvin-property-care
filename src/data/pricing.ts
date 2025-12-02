export interface PricePoint {
  size: string;
  monthly: number;
  hoursSaved: number;
}

export interface Package {
  name: string;
  tagline: string;
  prices: PricePoint[];
  discount: string;
  features: string[];
  color: string;
  voucherValues?: string[];
  christmasValues?: string[];
}

export const pricingData: Record<string, Package> = {
  essentials: {
    name: "The Essentials Package",
    tagline: "Clean, foundational care to keep your property looking fresh year-round.",
    prices: [
      { size: "Up to 2,750 sq ft", monthly: 150, hoursSaved: 60 },
      { size: "2,751 – 3,750 sq ft", monthly: 190, hoursSaved: 69 },
      { size: "3,751 – 4,750 sq ft", monthly: 225, hoursSaved: 78 },
      { size: "4,751 – 6,000 sq ft", monthly: 265, hoursSaved: 90 },
    ],
    discount: "10%",
    features: [
      "Trash can cleaning & sanitization (up to 2 cans)",
      "Outdoor living space light clean",
      "Front entryway refresh",
      "10% discount on Christmas lighting"
    ],
    color: "#447456"
  },
  signature: {
    name: "The Signature Package",
    tagline: "Premium maintenance with added polish to elevate curb appeal.",
    prices: [
      { size: "Up to 2,750 sq ft", monthly: 240, hoursSaved: 84 },
      { size: "2,751 – 3,750 sq ft", monthly: 320, hoursSaved: 99 },
      { size: "3,751 – 4,750 sq ft", monthly: 400, hoursSaved: 117 },
      { size: "4,751 – 6,000 sq ft", monthly: 480, hoursSaved: 138 },
    ],
    discount: "25%",
    features: [
      "Everything in Essentials, plus:",
      "Bi-annual roof debris removal",
      "Bi-annual gutter cleaning & flushing",
      "2 Exterior Service Vouchers per year",
      "Vouchers roll over (max 4 held)",
      "Vouchers transferable to friends/family",
      "25% discount on Christmas lighting"
    ],
    voucherValues: ["$300", "$450", "$600", "$750"],
    color: "#2d5a45"
  },
  concierge: {
    name: "The Concierge Package",
    tagline: "White-glove service with proactive scheduling and priority treatment.",
    prices: [
      { size: "Up to 2,750 sq ft", monthly: 450, hoursSaved: 111 },
      { size: "2,751 – 3,750 sq ft", monthly: 585, hoursSaved: 135 },
      { size: "3,751 – 4,750 sq ft", monthly: 675, hoursSaved: 162 },
      { size: "4,751 – 6,000 sq ft", monthly: 855, hoursSaved: 192 },
    ],
    discount: "50%",
    features: [
      "Everything in Signature, plus:",
      "2 Post-storm cleanup vouchers/year",
      "2 additional Exterior Service Vouchers (4 total/year)",
      "Vouchers roll over (max 6 held)",
      "Quarterly window & screen cleaning",
      "3 Pollen wash-off visits",
      "50% discount on Christmas lighting"
    ],
    voucherValues: ["$300", "$450", "$600", "$750"],
    color: "#8b5a2b"
  },
  estate: {
    name: "The Estate Package",
    tagline: "All-inclusive luxury care for high-value homes and legacy properties.",
    prices: [
      { size: "Up to 2,750 sq ft", monthly: 765, hoursSaved: 177 },
      { size: "2,751 – 3,750 sq ft", monthly: 990, hoursSaved: 189 },
      { size: "3,751 – 4,750 sq ft", monthly: 1215, hoursSaved: 231 },
      { size: "4,751 – 6,000 sq ft", monthly: 1485, hoursSaved: 279 },
    ],
    discount: "50%+",
    features: [
      "Everything in Concierge, plus:",
      "2 additional Post-storm cleanup vouchers (4 total/year)",
      "Bi-monthly deep clean of outdoor spaces",
      "Thorough grill interior cleaning",
      "2 additional Exterior Service Vouchers (6 total/year)",
      "Vouchers roll over (max 9 held)",
      "Christmas lighting included (up to value)",
      "Additional lighting at 50% discount"
    ],
    voucherValues: ["$300", "$450", "$600", "$750"],
    christmasValues: ["$800", "$1,400", "$2,000", "$2,600"],
    color: "#2d2d2d"
  }
};

export const sizes = [
  "Up to 2,750 sq ft",
  "2,751 – 3,750 sq ft",
  "3,751 – 4,750 sq ft",
  "4,751 – 6,000 sq ft"
];

export const featureDescriptions: Record<string, { description: string; isHeader?: boolean; hasVoucherValues?: boolean; hasChristmasValues?: boolean }> = {
  "Trash can cleaning & sanitization (up to 2 cans)": {
    description: "We thoroughly clean and sanitize up to 2 trash cans each month, eliminating odors, bacteria, and grime. Additional cans can be added for $7 each. Say goodbye to smelly bins and hello to a fresher garage and curb."
  },
  "Outdoor living space light clean": {
    description: "Your patio furniture and grill exterior get a thorough dust-off and wipe-down, keeping your back porch inviting and ready for relaxation or entertaining at a moment's notice."
  },
  "Front entryway refresh": {
    description: "We clean your entry windows, rinse eaves, and freshen your entire entryway area. First impressions matter—your guests will always be greeted by a polished, welcoming entrance."
  },
  "10% discount on Christmas lighting": {
    description: "Save 10% on professional Christmas lighting installation and takedown through our holiday lighting division. Transform your home into a holiday showpiece without lifting a finger."
  },
  "Everything in Essentials, plus:": {
    description: "The Signature Package includes everything from the Essentials Package, plus the additional premium services listed below.",
    isHeader: true
  },
  "Bi-annual roof debris removal": {
    description: "Twice per year, we clear leaves, branches, and debris from your roof to prevent buildup, maintain curb appeal, and protect against potential water damage or pest issues."
  },
  "Bi-annual gutter cleaning & flushing": {
    description: "We clean and flush your gutters twice yearly, ensuring optimal drainage and protecting your foundation, landscaping, and exterior from water damage—especially important during North Houston's heavy rain seasons."
  },
  "2 Exterior Service Vouchers per year": {
    description: "Flexible vouchers redeemable for any one-time service we offer—pressure washing, window cleaning, gutter brightening, and more. For services exceeding voucher value, you may apply multiple vouchers or pay the difference.",
    hasVoucherValues: true
  },
  "Vouchers roll over (max 4 held)": {
    description: "Unused vouchers don't disappear—they roll over to the next year, up to a maximum of 4 vouchers. This gives you flexibility to save up for larger projects or use multiple vouchers on a single big job."
  },
  "Vouchers transferable to friends/family": {
    description: "Share the love! Your service vouchers can be gifted to friends or family within our service area. Perfect for helping neighbors or loved ones with their property care needs."
  },
  "25% discount on Christmas lighting": {
    description: "Save 25% on professional Christmas lighting installation and takedown through our holiday lighting division. Transform your home into a holiday showpiece without lifting a finger."
  },
  "Everything in Signature, plus:": {
    description: "The Concierge Package includes everything from the Signature Package, plus the additional premium services listed below.",
    isHeader: true
  },
  "2 Post-storm cleanup vouchers/year": {
    description: "After severe weather hits, use these vouchers for priority debris cleanup on properties up to ¼ acre. We'll clear fallen branches, scattered debris, and storm damage quickly so you can get back to normal. These vouchers do not roll over but are transferable to friends and family."
  },
  "2 additional Exterior Service Vouchers (4 total/year)": {
    description: "Two additional flexible vouchers on top of the 2 from Signature, giving you 4 total per year. Redeemable for any one-time service we offer—pressure washing, window cleaning, gutter brightening, and more.",
    hasVoucherValues: true
  },
  "Vouchers roll over (max 6 held)": {
    description: "Unused vouchers roll over to the next year, up to a maximum of 6 vouchers. This gives you even more flexibility to save up for larger projects or tackle multiple jobs at once."
  },
  "Quarterly window & screen cleaning": {
    description: "Four times per year, we professionally clean all your exterior windows for a brilliant, streak-free shine, plus remove, clean, and reinstall all window screens. This removes built-up pollen, dust, and grime—giving you crystal-clear views and maximized natural light in every room."
  },
  "3 Pollen wash-off visits": {
    description: "During peak pollen season (typically February-May in North Houston), we provide three dedicated wash-off visits to rinse pollen from your home's exterior surfaces, outdoor furniture, and cars parked in the driveway. Relief for allergy sufferers and protection for your finishes."
  },
  "50% discount on Christmas lighting": {
    description: "Save 50% on professional Christmas lighting installation and takedown through our holiday lighting division. Transform your home into a holiday showpiece without lifting a finger."
  },
  "Everything in Concierge, plus:": {
    description: "The Estate Package includes everything from the Concierge Package, plus the additional premium services listed below.",
    isHeader: true
  },
  "2 additional Post-storm cleanup vouchers (4 total/year)": {
    description: "Two additional post-storm cleanup vouchers on top of the 2 from Concierge, giving you 4 total per year. After severe weather hits, use these vouchers for priority debris cleanup on properties up to ¼ acre."
  },
  "Bi-monthly deep clean of outdoor spaces": {
    description: "Every two months, your outdoor living spaces receive a comprehensive deep cleaning—not just a dust-off, but a thorough scrub of furniture, cushions, planters, and hardscapes. Your patio will always be guest-ready."
  },
  "Thorough grill interior cleaning": {
    description: "Included with your bi-monthly deep clean, we thoroughly clean your grill's interior—grates, burners, drip pans, and housing. Extend your grill's life, improve food flavor, and eliminate fire hazards from grease buildup."
  },
  "2 additional Exterior Service Vouchers (6 total/year)": {
    description: "Two additional flexible vouchers on top of the 4 from Concierge, giving you 6 total per year. Redeemable for any one-time service we offer—pressure washing, window cleaning, gutter brightening, and more.",
    hasVoucherValues: true
  },
  "Vouchers roll over (max 9 held)": {
    description: "Unused vouchers roll over to the next year, up to a maximum of 9 vouchers. This gives you maximum flexibility to save up for larger projects or tackle multiple jobs throughout the year."
  },
  "Christmas lighting included (up to value)": {
    description: "Professional Christmas lighting installation and takedown is included with your Estate Package, up to a value based on your home size. Transform your home into a holiday showpiece without lifting a finger.",
    hasChristmasValues: true
  },
  "Additional lighting at 50% discount": {
    description: "Want to go beyond the included Christmas lighting value? Additional lighting services are available at a 50% discount for Estate Package members."
  }
};

export const comparisonFeatures = [
  {
    name: "Trash can cleaning & sanitization",
    essentials: true, signature: true, concierge: true, estate: true,
    description: "We thoroughly clean and sanitize up to 2 trash cans each month, eliminating odors, bacteria, and grime. Additional cans can be added for $7 each."
  },
  {
    name: "Outdoor living space light clean",
    essentials: true, signature: true, concierge: true, estate: true,
    description: "Your patio furniture and grill exterior get a thorough dust-off and wipe-down, keeping your back porch inviting and ready for relaxation."
  },
  {
    name: "Front entryway refresh",
    essentials: true, signature: true, concierge: true, estate: true,
    description: "We clean your entry windows, rinse eaves, and freshen your entire entryway area. First impressions matter."
  },
  {
    name: "Bi-annual roof debris removal",
    essentials: false, signature: true, concierge: true, estate: true,
    description: "Twice per year, we clear leaves, branches, and debris from your roof to prevent buildup and protect against water damage."
  },
  {
    name: "Bi-annual gutter cleaning",
    essentials: false, signature: true, concierge: true, estate: true,
    description: "We clean and flush your gutters twice yearly, ensuring optimal drainage and protecting your foundation."
  },
  {
    name: "Service vouchers/year",
    essentials: "—", signature: "2", concierge: "4", estate: "6",
    description: "Flexible vouchers redeemable for any one-time service we offer—pressure washing, window cleaning, gutter brightening, and more.",
    hasVoucherValues: true
  },
  {
    name: "Voucher rollover cap",
    essentials: "—", signature: "4", concierge: "6", estate: "9",
    description: "Unused vouchers don't disappear—they roll over to the next year, up to your plan's cap."
  },
  {
    name: "Post-storm cleanup vouchers",
    essentials: false, signature: false, concierge: "2/year", estate: "4/year",
    description: "After severe weather hits, use these vouchers for priority debris cleanup on properties up to ¼ acre."
  },
  {
    name: "Quarterly window & screen cleaning",
    essentials: false, signature: false, concierge: true, estate: true,
    description: "Four times per year, we professionally clean all your exterior windows and screens."
  },
  {
    name: "Pollen wash-off visits",
    essentials: false, signature: false, concierge: "3/year", estate: "3/year",
    description: "During peak pollen season, we provide dedicated wash-off visits to rinse pollen from your home's exterior surfaces."
  },
  {
    name: "Bi-monthly deep clean",
    essentials: false, signature: false, concierge: false, estate: true,
    description: "Every two months, your outdoor living spaces receive a comprehensive deep cleaning."
  },
  {
    name: "Grill interior cleaning",
    essentials: false, signature: false, concierge: false, estate: true,
    description: "We thoroughly clean your grill's interior—grates, burners, drip pans, and housing."
  },
  {
    name: "Christmas lighting discount",
    essentials: "10%", signature: "25%", concierge: "50%", estate: "Included*",
    description: "Save on professional Christmas lighting installation and takedown through our holiday lighting division.",
    hasChristmasValues: true
  },
];
