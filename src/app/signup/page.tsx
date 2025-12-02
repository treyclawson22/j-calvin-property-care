'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pricingData, sizes } from '@/data/pricing';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    homeSize: '0',
    package: 'signature',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedPackage = pricingData[formData.package as keyof typeof pricingData];
  const selectedPrice = selectedPackage?.prices[parseInt(formData.homeSize)] || selectedPackage?.prices[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const packageName = selectedPackage?.name || formData.package;
    const homeSize = sizes[parseInt(formData.homeSize)];

    const subject = encodeURIComponent(`Property Care Signup - ${packageName}`);
    const body = encodeURIComponent(
      `NEW SIGNUP REQUEST\n` +
      `==================\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Address: ${formData.address}\n` +
      `City: ${formData.city}\n` +
      `ZIP: ${formData.zip}\n\n` +
      `Package: ${packageName}\n` +
      `Home Size: ${homeSize}\n` +
      `Monthly Rate: $${selectedPrice?.monthly}/mo\n\n` +
      `Additional Notes:\n${formData.message || 'None'}`
    );

    window.location.href = `mailto:hello@jcalvintx.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 px-6 bg-gradient-to-br from-hunter to-hunter-light">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            Get Started
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-4">
            Sign Up Today
          </h1>
          <p className="font-sans text-xl text-cream/85">
            Complete the form below to begin your property care journey.
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-[900px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-hunter/10 shadow-lg">
                <h2 className="font-serif text-2xl font-normal text-hunter mb-6">
                  Your Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Home Size *
                      </label>
                      <select
                        name="homeSize"
                        value={formData.homeSize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50 bg-white"
                      >
                        {sizes.map((size, i) => (
                          <option key={i} value={i}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Select Package *
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50 bg-white"
                      >
                        {Object.entries(pricingData).map(([key, pkg]) => (
                          <option key={key} value={key}>
                            {pkg.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any special requests or questions?"
                      className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-bronze text-cream font-sans text-base font-medium rounded hover:bg-bronze/90 transition-all"
                  >
                    Submit Enrollment Request
                  </button>

                  <p className="font-sans text-xs text-gray-500 text-center">
                    By submitting, you agree to be contacted about our services. We&apos;ll reach out
                    within 1 business day to complete your enrollment.
                  </p>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-hunter rounded-2xl p-8 text-cream sticky top-24">
                <h3 className="font-serif text-xl font-normal text-cream mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-cream/70">Package</span>
                    <span className="font-sans text-sm font-medium">
                      {selectedPackage?.name.replace('The ', '').replace(' Package', '')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-cream/70">Home Size</span>
                    <span className="font-sans text-sm font-medium">
                      {sizes[parseInt(formData.homeSize)]}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-sans text-sm text-cream/70">Hours Saved/Year</span>
                    <span className="font-sans text-sm font-medium text-bronze-light">
                      {selectedPrice?.hoursSaved} hrs
                    </span>
                  </div>
                </div>

                <div className="border-t border-cream/20 pt-6">
                  <div className="flex justify-between items-end">
                    <span className="font-sans text-sm text-cream/70">Monthly Rate</span>
                    <div className="text-right">
                      <span className="font-serif text-4xl font-normal">${selectedPrice?.monthly}</span>
                      <span className="font-sans text-sm text-cream/70">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-cream/10 rounded-lg">
                  <p className="font-sans text-xs text-cream/70 leading-relaxed">
                    After submitting, a member of our team will contact you to verify your
                    information and schedule your first service. No payment is required until your
                    enrollment is confirmed.
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/compare"
                    className="block text-center font-sans text-sm text-cream/70 hover:text-cream underline"
                  >
                    ← Compare all plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
