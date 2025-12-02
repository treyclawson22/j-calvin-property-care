'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pricingData, sizes, featureDescriptions } from '@/data/pricing';
import { essentialsFAQs, signatureFAQs, conciergeFAQs, estateFAQs, FAQItem } from '@/data/faq';
import FAQ from '@/components/FAQ';
import { CheckIcon, ChevronDownIcon } from '@/components/icons';

const packageFAQs: Record<string, FAQItem[]> = {
  essentials: essentialsFAQs,
  signature: signatureFAQs,
  concierge: conciergeFAQs,
  estate: estateFAQs,
};

const packageImages: Record<string, string> = {
  essentials: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80',
  signature: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=2000&q=80',
  concierge: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=2000&q=80',
  estate: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80',
};

const packageTestimonials: Record<string, { quote: string; author: string }> = {
  essentials: {
    quote: "The soft washing at my house done by J Calvin was absolutely amazing. Very professional and quick. When they were done with my house it looked brand new.",
    author: "Leah L."
  },
  signature: {
    quote: "J Calvin did an excellent job clearing the pine needles off my roof! They were very courteous and on time. They left my yard cleaner than it was when they arrived! I will definitely be calling them to do more work for me in the future!!",
    author: "Pat N."
  },
  concierge: {
    quote: "J Calvin did an awesome job twice now on my home for pressure washing and window cleaning. He even cleaned up a nest we had for a while under our porch and all the mess that came along with it. Super happy with their work.",
    author: "Amber P."
  },
  estate: {
    quote: "Professionalism and hard work ethics are outstanding! J Calvin will always be my go-to for making my home's outdoor spaces feeling warm and inviting!",
    author: "Clyde H."
  },
};

interface PackagePageClientProps {
  slug: string;
}

export default function PackagePageClient({ slug }: PackagePageClientProps) {
  const pkg = pricingData[slug as keyof typeof pricingData];
  const [selectedSize, setSelectedSize] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  if (!pkg) {
    notFound();
  }

  const priceData = pkg.prices[selectedSize];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${packageImages[slug] || packageImages.essentials})` }}
        />
        {/* Color overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${pkg.color}e6 0%, ${adjustColor(pkg.color, 20)}d9 100%)`,
          }}
        />
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            Property Care Plan
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-4">
            {pkg.name}
          </h1>
          <p className="font-sans text-xl text-cream/85 max-w-lg mx-auto">
            {pkg.tagline}
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-[1000px] mx-auto">
          {/* Size Selector */}
          <div className="mb-12">
            <label className="block font-sans text-xs text-gray-500 mb-3 tracking-wider uppercase text-center">
              Select Your Home Size
            </label>
            <div className="flex justify-center gap-3 flex-wrap">
              {sizes.map((size, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(i)}
                  className={`px-6 py-3 rounded font-sans text-sm transition-all ${
                    selectedSize === i
                      ? 'bg-hunter text-cream'
                      : 'bg-white text-hunter border border-hunter hover:bg-hunter/5'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-white rounded-2xl overflow-hidden border-2 border-hunter/10 max-w-md mx-auto text-center shadow-lg">
            <div className="h-1.5" style={{ backgroundColor: pkg.color }} />
            <div className="p-10">
            <div className="font-serif text-6xl font-normal text-hunter mb-2">
              ${priceData.monthly}
              <span className="text-xl text-gray-500 font-sans">/mo</span>
            </div>
            <p className="font-sans text-sm text-gray-500 mb-6">
              For homes {sizes[selectedSize]}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-hunter/5 p-4 rounded-lg">
                <div className="font-serif text-3xl text-bronze">{priceData.hoursSaved}</div>
                <div className="font-sans text-xs text-gray-500 uppercase tracking-wider">
                  Hours Saved/Year
                </div>
              </div>
              <div className="bg-hunter/5 p-4 rounded-lg">
                <div className="font-serif text-3xl text-bronze">{pkg.discount}</div>
                <div className="font-sans text-xs text-gray-500 uppercase tracking-wider">
                  Christmas Lighting
                </div>
              </div>
            </div>

            <Link
              href="/signup"
              className="block w-full py-4 px-8 bg-bronze text-cream font-sans text-base font-medium rounded hover:bg-bronze/90 transition-all"
            >
              Sign Up Now
            </Link>
            <Link
              href="/compare"
              className="block mt-4 font-sans text-sm text-gray-500 hover:text-hunter transition-colors"
            >
              Compare all plans →
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-cream-dark">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter text-center mb-12">
            What&apos;s Included
          </h2>

          <div className="space-y-4">
            {pkg.features.map((feature, i) => {
              const featureInfo = featureDescriptions[feature] || {};
              const isExpanded = expandedFeature === i;
              const isHeader = feature.includes('Everything in');

              return (
                <div
                  key={i}
                  className={`bg-white rounded-xl border border-hunter/10 overflow-hidden ${
                    isHeader ? 'border-bronze/30 bg-bronze/5' : ''
                  }`}
                >
                  <button
                    onClick={() => setExpandedFeature(isExpanded ? null : i)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isHeader ? 'bg-bronze/20' : 'bg-hunter-medium/20'
                        }`}
                      >
                        <CheckIcon
                          className={`w-4 h-4 ${isHeader ? 'text-bronze' : 'text-hunter-medium'}`}
                        />
                      </span>
                      <span
                        className={`font-sans text-base ${
                          isHeader ? 'text-bronze font-medium' : 'text-hunter'
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                    {featureInfo.description && (
                      <ChevronDownIcon
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {isExpanded && featureInfo.description && (
                    <div className="px-5 pb-5 pt-0">
                      <div className="pl-10 border-l-2 border-hunter/10 ml-3">
                        <p className="font-sans text-sm text-gray-600 leading-relaxed">
                          {featureInfo.description}
                        </p>

                        {featureInfo.hasVoucherValues && pkg.voucherValues && (
                          <div className="mt-4">
                            <p className="font-sans text-sm font-medium text-hunter mb-3">
                              Voucher Value by Home Size:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {sizes.map((size, idx) => (
                                <div key={idx} className="flex justify-between items-center p-3 bg-cream border border-hunter/10 rounded-lg">
                                  <span className="font-sans text-sm text-gray-600">{size}</span>
                                  <span className="font-sans text-sm font-semibold text-hunter">
                                    {pkg.voucherValues?.[idx]}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {featureInfo.hasChristmasValues && pkg.christmasValues && (
                          <div className="mt-4">
                            <p className="font-sans text-sm font-medium text-hunter mb-3">
                              Christmas Lighting Value by Home Size:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {sizes.map((size, idx) => (
                                <div key={idx} className="flex justify-between items-center p-3 bg-cream border border-hunter/10 rounded-lg">
                                  <span className="font-sans text-sm text-gray-600">{size}</span>
                                  <span className="font-sans text-sm font-semibold text-hunter">
                                    {pkg.christmasValues?.[idx]}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <p className="font-sans text-xs text-gray-500 mt-3">
                              Additional lighting beyond included value available at 50% discount
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-block py-4 px-10 bg-bronze text-cream font-sans text-base font-medium rounded hover:bg-bronze/90 transition-all"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        faqs={packageFAQs[slug] || essentialsFAQs}
        title={`${pkg.name.replace('The ', '').replace(' Package', '')} Package FAQs`}
        accentColor={pkg.color}
      />

      {/* Testimonial Section */}
      {packageTestimonials[slug] && (
        <section className="py-16 px-6" style={{ backgroundColor: pkg.color }}>
          <div className="max-w-[700px] mx-auto text-center">
            <svg className="w-10 h-10 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="font-serif text-xl md:text-2xl text-cream leading-relaxed mb-6">
              &ldquo;{packageTestimonials[slug].quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex text-bronze">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="font-sans text-base text-cream/80">— {packageTestimonials[slug].author}</p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-cream-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join all the other families who have reclaimed their weekends and trust J Calvin for their property care.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="btn-primary">
              Sign Up Now
            </Link>
            <Link href="/compare" className="btn-secondary">
              Compare All Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function adjustColor(color: string, amount: number): string {
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000ff) + amount));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
