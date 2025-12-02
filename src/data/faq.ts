export interface FAQItem {
  question: string;
  answer: string;
}

// General FAQs for main page, about, and contact
export const generalFAQs: FAQItem[] = [
  {
    question: "What areas do you serve?",
    answer: "We serve North Houston including Tomball, Klein, Spring, The Woodlands, Montgomery, and Cypress. If you're unsure whether you're in our service area, please contact us and we'll be happy to check."
  },
  {
    question: "How do I know which package is right for me?",
    answer: "Our packages are designed to fit different lifestyles and needs. The Essentials Package is perfect for maintaining a fresh, inviting look year-round. Signature adds roof and gutter maintenance plus flexible service vouchers. Concierge provides comprehensive care with storm cleanup and window cleaning. Estate is our all-inclusive luxury option with bi-monthly deep cleaning and included Christmas lighting."
  },
  {
    question: "What happens if my home is over 6,000 sq ft?",
    answer: "For homes over 6,000 sq ft, we provide custom quotes tailored to your property's specific needs. Contact us for a personalized assessment and pricing."
  },
  {
    question: "What makes J Calvin different from other services?",
    answer: "We're a family-owned business that treats every home like our own. Our team brings decades of combined experience, and we focus on building lasting relationships with our customers. You'll work with consistent crews who know your property and preferences."
  },
  {
    question: "How do I get started?",
    answer: "Simply click 'Get Started' or 'Sign Up Now' on any page to begin. We'll collect some information about your home and schedule your first service. You can also contact us directly if you have questions before signing up."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, J Calvin is fully licensed and insured with over 32 years of combined experience serving North Houston homeowners."
  },
];

// Essentials Package specific FAQs
export const essentialsFAQs: FAQItem[] = [
  {
    question: "What's included in the monthly trash can cleaning?",
    answer: "We thoroughly clean and sanitize up to 2 trash cans each month, eliminating odors, bacteria, and grime. Additional cans can be added for $7 each. Say goodbye to smelly bins and hello to a fresher garage and curb."
  },
  {
    question: "What does the outdoor living space light clean include?",
    answer: "Your patio furniture and grill exterior get a thorough dust-off and wipe-down, keeping your back porch inviting and ready for relaxation or entertaining at a moment's notice."
  },
  {
    question: "What's included in the front entryway refresh?",
    answer: "We clean your entry windows, rinse eaves, and freshen your entire entryway area. First impressions matter—your guests will always be greeted by a polished, welcoming entrance."
  },
  {
    question: "How does the Christmas lighting discount work?",
    answer: "Essentials Package members receive a 10% discount on professional Christmas lighting installation and takedown through our holiday lighting division. Transform your home into a holiday showpiece without lifting a finger."
  },
  {
    question: "How often do you perform these services?",
    answer: "All Essentials Package services are performed monthly, ensuring your home maintains a consistently fresh and inviting appearance year-round."
  },
];

// Signature Package specific FAQs
export const signatureFAQs: FAQItem[] = [
  {
    question: "How do the Exterior Service Vouchers work?",
    answer: "You receive 2 Exterior Service Vouchers per calendar year, redeemable for any one-time service we offer—pressure washing, window cleaning, gutter brightening, and more. Unused vouchers automatically roll over each year, with a maximum of 4 vouchers held at any time. Vouchers are also transferable to friends or family within our service area."
  },
  {
    question: "What's the value of each voucher?",
    answer: "Voucher values are based on your home size: up to $300 for homes up to 2,750 sq ft, $450 for 2,751-3,750 sq ft, $600 for 3,751-4,750 sq ft, and $750 for 4,751-6,000 sq ft. For services exceeding voucher value, you may apply multiple vouchers or pay the difference."
  },
  {
    question: "When is the roof debris removal performed?",
    answer: "Roof debris removal is performed twice per year (bi-annually). We clear leaves, branches, and debris from your roof to prevent buildup, maintain curb appeal, and protect against potential water damage or pest issues."
  },
  {
    question: "Why is gutter cleaning important in North Houston?",
    answer: "North Houston's unpredictable weather, especially heavy rain seasons, makes proper gutter drainage essential. We clean and flush your gutters twice yearly, ensuring optimal drainage and protecting your foundation, landscaping, and exterior from water damage."
  },
  {
    question: "How does the Christmas lighting discount compare to Essentials?",
    answer: "Signature Package members receive a 25% discount on Christmas lighting services, compared to 10% for Essentials Package members."
  },
];

// Concierge Package specific FAQs
export const conciergeFAQs: FAQItem[] = [
  {
    question: "What are post-storm cleanup vouchers?",
    answer: "After severe weather hits, use these vouchers for priority debris cleanup on properties up to ¼ acre. We'll clear fallen branches, scattered debris, and storm damage quickly so you can get back to normal. You receive 2 vouchers per year. Note: these vouchers do not roll over but are transferable to friends and family."
  },
  {
    question: "How many service vouchers do I get with Concierge?",
    answer: "You receive 4 Exterior Service Vouchers per year (2 additional on top of Signature). The rollover cap is increased to 6 vouchers, and they remain transferable to friends or family within our service area."
  },
  {
    question: "What's included in the quarterly window and screen cleaning?",
    answer: "Four times per year, we professionally clean all your exterior windows for a brilliant, streak-free shine, plus remove, clean, and reinstall all window screens. This removes built-up pollen, dust, and grime—giving you crystal-clear views and maximized natural light in every room."
  },
  {
    question: "When are the pollen wash-off visits scheduled?",
    answer: "During peak pollen season (typically February-May in North Houston), we provide three dedicated wash-off visits to rinse pollen from your home's exterior surfaces, outdoor furniture, and cars parked in the driveway. This provides relief for allergy sufferers and protection for your finishes."
  },
  {
    question: "What's the Christmas lighting discount for Concierge members?",
    answer: "Concierge Package members receive a 50% discount on professional Christmas lighting installation and takedown—the highest discount level before the included lighting in our Estate Package."
  },
];

// Estate Package specific FAQs
export const estateFAQs: FAQItem[] = [
  {
    question: "What's included in the bi-monthly deep clean?",
    answer: "Every two months, your outdoor living spaces receive a comprehensive deep cleaning—not just a dust-off, but a thorough scrub of furniture, cushions, planters, and hardscapes. This also includes a thorough grill interior cleaning (grates, burners, drip pans, and housing) to extend your grill's life, improve food flavor, and eliminate fire hazards from grease buildup."
  },
  {
    question: "How many service vouchers do I get with Estate?",
    answer: "You receive 6 Exterior Service Vouchers per year—the most of any package. The rollover cap is increased to 9 vouchers, giving you maximum flexibility to save up for larger projects or tackle multiple jobs throughout the year."
  },
  {
    question: "How many post-storm cleanup vouchers are included?",
    answer: "Estate Package members receive 4 post-storm cleanup vouchers per year (2 additional on top of Concierge), providing the most comprehensive storm protection available."
  },
  {
    question: "How does the included Christmas lighting work?",
    answer: "Professional Christmas lighting installation and takedown is included with your Estate Package, up to a value based on your home size: $800 for homes up to 2,750 sq ft, $1,400 for 2,751-3,750 sq ft, $2,000 for 3,751-4,750 sq ft, and $2,600 for 4,751-6,000 sq ft. Any additional lighting beyond this value is available at a 50% discount."
  },
  {
    question: "Why is Estate Package considered 'all-inclusive'?",
    answer: "The Estate Package combines every service from our other packages with enhanced frequency and quantities: bi-monthly deep cleaning (vs. monthly light clean), 6 service vouchers (vs. 2-4), 4 storm cleanup vouchers (vs. 0-2), and included Christmas lighting. It's designed for homeowners who want the ultimate in convenience and comprehensive property care."
  },
];

// Compare page FAQs
export const compareFAQs: FAQItem[] = [
  {
    question: "Can I upgrade my package later?",
    answer: "Yes! You can upgrade your package at any time. When you upgrade, your existing service vouchers and any accumulated rollover will transfer to your new package (subject to the new package's rollover cap)."
  },
  {
    question: "What's the difference between the voucher types?",
    answer: "Exterior Service Vouchers are flexible and can be used for any one-time service we offer (pressure washing, window cleaning, etc.) and roll over year to year. Post-storm cleanup vouchers are specifically for debris cleanup after severe weather and do not roll over, but are transferable to friends and family."
  },
  {
    question: "How do the Christmas lighting benefits compare?",
    answer: "Essentials: 10% discount. Signature: 25% discount. Concierge: 50% discount. Estate: Included up to your home size value ($800-$2,600), with additional lighting at 50% off."
  },
  {
    question: "Which package offers the best value?",
    answer: "It depends on your needs. Use our Time Savings Calculator to see the value of hours saved with each package compared to the cost. Many homeowners find that Signature or Concierge provide the best balance of services and savings."
  },
  {
    question: "Do all packages include the same monthly services?",
    answer: "Yes, all packages include monthly trash can cleaning, outdoor living space maintenance, and front entryway refresh. Higher-tier packages add additional services like roof/gutter maintenance, window cleaning, storm cleanup, and deep cleaning."
  },
];
