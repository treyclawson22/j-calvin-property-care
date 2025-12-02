'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pricingData, sizes, comparisonFeatures } from '@/data/pricing';
import { compareFAQs } from '@/data/faq';
import Calculator from '@/components/Calculator';
import FAQ from '@/components/FAQ';
import { CheckIcon, XIcon, ChevronDownIcon } from '@/components/icons';

export default function ComparePage() {
  const [selectedSize, setSelectedSize] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=2000&q=80)' }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            Compare Plans
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-4">
            Find Your Perfect Plan
          </h1>
          <p className="font-sans text-xl text-cream/85">
            Compare all four packages side-by-side to find the right fit for your home.
          </p>
        </div>
      </section>

      {/* Size Selector */}
      <section className="py-10 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
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
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 bg-cream-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingData).map(([key, pkg]) => (
              <div
                key={key}
                className="bg-white rounded-2xl overflow-hidden border border-hunter/10 flex flex-col"
              >
                <div className="h-1.5" style={{ backgroundColor: pkg.color }} />

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl font-medium mb-2" style={{ color: pkg.color }}>
                    {pkg.name.replace('The ', '').replace(' Package', '')}
                  </h3>

                  <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed flex-1">
                    {pkg.tagline}
                  </p>

                  <div className="font-serif text-5xl font-normal text-hunter mb-1">
                    ${pkg.prices[selectedSize].monthly}
                    <span className="text-lg text-gray-500 font-sans">/mo</span>
                  </div>

                  <p className="font-sans text-xs text-gray-500 mb-4">
                    For {sizes[selectedSize]}
                  </p>

                  <div className="bg-hunter-medium/10 p-3 rounded-lg mb-6">
                    <span className="font-sans text-sm text-hunter-medium font-medium">
                      Save {pkg.prices[selectedSize].hoursSaved} hours/year
                    </span>
                  </div>

                  <Link
                    href={`/packages/${key}`}
                    className="w-full text-center py-3.5 px-6 border-2 border-hunter text-hunter font-sans text-sm font-medium rounded transition-all hover:bg-hunter hover:text-cream mb-3"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/signup"
                    className="w-full text-center py-3.5 px-6 bg-bronze text-cream font-sans text-sm font-medium rounded hover:bg-bronze/90 transition-all"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Desktop */}
      <section className="py-20 px-6 bg-white hidden lg:block">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter text-center mb-12">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto rounded-xl border border-hunter/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-hunter">
                  <th className="p-5 text-left font-sans text-sm font-medium text-cream w-[30%]">
                    Feature
                  </th>
                  {Object.entries(pricingData).map(([key, pkg]) => (
                    <th
                      key={key}
                      className="p-5 text-center font-serif text-xl font-medium text-cream"
                    >
                      {pkg.name.replace('The ', '').replace(' Package', '')}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <>
                    <tr
                      key={i}
                      onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                      className={`${
                        i % 2 === 0 ? 'bg-cream' : 'bg-white'
                      } border-b border-hunter/5 cursor-pointer hover:bg-hunter/5 transition-colors`}
                    >
                      <td className="p-4 font-sans text-sm text-hunter">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold transition-all ${
                              expandedFeature === i
                                ? 'bg-hunter text-cream'
                                : 'bg-hunter/10 text-hunter'
                            }`}
                          >
                            {expandedFeature === i ? '−' : '+'}
                          </span>
                          {feature.name}
                        </div>
                      </td>
                      {(['essentials', 'signature', 'concierge', 'estate'] as const).map((key) => (
                        <td key={key} className="p-4 text-center">
                          {renderFeatureValue(feature[key])}
                        </td>
                      ))}
                    </tr>
                    {expandedFeature === i && (
                      <tr className="bg-hunter/5">
                        <td colSpan={5} className="p-6">
                          <p className="font-sans text-sm text-gray-600 leading-relaxed max-w-3xl">
                            {feature.description}
                          </p>
                          {feature.hasVoucherValues && (
                            <div className="mt-4">
                              <p className="font-sans text-sm font-medium text-hunter mb-3">
                                Voucher Value by Home Size:
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {sizes.map((size, idx) => (
                                  <div key={idx} className="flex justify-between items-center p-3 bg-white border border-hunter/10 rounded-lg">
                                    <span className="font-sans text-sm text-gray-600">{size}</span>
                                    <span className="font-sans text-sm font-semibold text-hunter">
                                      {pricingData.signature.voucherValues?.[idx]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {feature.hasChristmasValues && (
                            <div className="mt-4">
                              <p className="font-sans text-sm font-medium text-hunter mb-3">
                                Christmas Lighting Value by Home Size:
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {sizes.map((size, idx) => (
                                  <div key={idx} className="flex justify-between items-center p-3 bg-white border border-hunter/10 rounded-lg">
                                    <span className="font-sans text-sm text-gray-600">{size}</span>
                                    <span className="font-sans text-sm font-semibold text-hunter">
                                      {pricingData.estate.christmasValues?.[idx]}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <p className="font-sans text-xs text-gray-500 mt-3">
                                Additional lighting beyond included value available at 50% discount
                              </p>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Cards - Mobile/Tablet */}
      <section className="py-20 px-6 bg-white lg:hidden">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-3xl font-normal text-hunter text-center mb-8">
            Feature Comparison
          </h2>

          <div className="space-y-4">
            {comparisonFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl border border-hunter/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-sans text-sm font-medium text-hunter pr-2">
                    {feature.name}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      expandedFeature === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedFeature === i && (
                  <div className="px-4 pb-4">
                    <p className="font-sans text-xs text-gray-600 mb-4">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {(['essentials', 'signature', 'concierge', 'estate'] as const).map((key) => (
                        <div
                          key={key}
                          className="bg-white p-3 rounded-lg border border-hunter/10 text-center"
                        >
                          <div
                            className="font-sans text-xs font-medium mb-1"
                            style={{ color: pricingData[key].color }}
                          >
                            {pricingData[key].name.replace('The ', '').replace(' Package', '')}
                          </div>
                          <div className="flex justify-center">
                            {renderFeatureValue(feature[key])}
                          </div>
                        </div>
                      ))}
                    </div>

                    {feature.hasVoucherValues && (
                      <div className="mt-4">
                        <p className="font-sans text-xs font-medium text-hunter mb-2">
                          Voucher Value by Home Size:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {sizes.map((size, idx) => (
                            <div key={idx} className="flex justify-between items-center p-2 bg-white border border-hunter/10 rounded-lg">
                              <span className="font-sans text-xs text-gray-600">{size}</span>
                              <span className="font-sans text-xs font-semibold text-hunter">
                                {pricingData.signature.voucherValues?.[idx]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {feature.hasChristmasValues && (
                      <div className="mt-4">
                        <p className="font-sans text-xs font-medium text-hunter mb-2">
                          Christmas Lighting Value:
                        </p>
                        <div className="grid grid-cols-1 gap-2">
                          {sizes.map((size, idx) => (
                            <div key={idx} className="flex justify-between items-center p-2 bg-white border border-hunter/10 rounded-lg">
                              <span className="font-sans text-xs text-gray-600">{size}</span>
                              <span className="font-sans text-xs font-semibold text-hunter">
                                {pricingData.estate.christmasValues?.[idx]}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p className="font-sans text-xs text-gray-500 mt-2">
                          Additional lighting at 50% discount
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 bg-[#2d2d2d]">
        <div className="max-w-[700px] mx-auto text-center">
          <svg className="w-10 h-10 text-bronze/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-xl md:text-2xl text-cream leading-relaxed mb-6">
            &ldquo;I recently had J Calvin come do a house wash at my home; they were very professional and timely. They even endured the rain since I was having house pictures taken later that afternoon! Thank you so much, would highly recommend for all your exterior cleaning needs.&rdquo;
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
          <p className="font-sans text-base text-cream/80">— Kevin S.</p>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* FAQ */}
      <FAQ
        faqs={compareFAQs}
        title="Plan Comparison FAQs"
        subtitle="Common questions about choosing the right package"
      />

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
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function renderFeatureValue(value: boolean | string) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-hunter-medium/20">
        <CheckIcon className="w-4 h-4 text-hunter-medium" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
        <XIcon className="w-4 h-4 text-gray-400" />
      </span>
    );
  }
  return <span className="font-sans text-sm font-medium text-hunter">{value}</span>;
}
