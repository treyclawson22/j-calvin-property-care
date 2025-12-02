'use client';

import { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/icons';
import { generalFAQs } from '@/data/faq';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    package: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build mailto link with form data
    const subject = encodeURIComponent(`Property Care Inquiry${formData.package ? ` - ${formData.package}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Address: ${formData.address || 'Not provided'}\n` +
      `Interested In: ${formData.package || 'Not specified'}\n\n` +
      `Message:\n${formData.message || 'No message provided'}`
    );

    window.location.href = `mailto:hello@jcalvintx.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=2000&q=80)' }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            Contact Us
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-6">
            Get In Touch
          </h1>
          <p className="font-sans text-xl text-cream/85">
            Questions about our services? Ready to get started? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-normal text-hunter mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-hunter/10 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-5 h-5 text-hunter" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-hunter mb-1">Phone</h3>
                    <p className="font-sans text-gray-600">(832) 371-6030</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-hunter/10 flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-5 h-5 text-hunter" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-hunter mb-1">Email</h3>
                    <p className="font-sans text-gray-600">hello@jcalvintx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-hunter/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-hunter" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-medium text-hunter mb-1">Service Area</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      Tomball, Klein, Spring,
                      <br />
                      The Woodlands, Montgomery,
                      <br />
                      Cypress
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-hunter/5 rounded-xl">
                <h3 className="font-serif text-xl font-medium text-hunter mb-3">Office Hours</h3>
                <div className="font-sans text-sm text-gray-600 space-y-1">
                  <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday: 8:00 AM – 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-hunter/10 shadow-lg">
                <h2 className="font-serif text-2xl font-normal text-hunter mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
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
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                        Interested In
                      </label>
                      <select
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50 bg-white"
                      >
                        <option value="">Select a package...</option>
                        <option value="essentials">The Essentials Package</option>
                        <option value="signature">The Signature Package</option>
                        <option value="concierge">The Concierge Package</option>
                        <option value="estate">The Estate Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address, city, zip"
                      className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-xs text-gray-500 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 border border-hunter/20 rounded-lg font-sans text-base text-hunter outline-none focus:ring-2 focus:ring-bronze/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-bronze text-cream font-sans text-base font-medium rounded hover:bg-bronze/90 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={generalFAQs} />

      <ServiceArea />
    </div>
  );
}
