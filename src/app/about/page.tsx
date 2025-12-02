import Link from 'next/link';
import { generalFAQs } from '@/data/faq';
import FAQ from '@/components/FAQ';
import {
  MedalIcon,
  DocumentIcon,
  ShieldIcon,
  UsersIcon,
  StarIcon,
  HeartIcon,
} from '@/components/icons';

const trustSignals = [
  {
    icon: <MedalIcon className="w-12 h-12 text-bronze" />,
    title: '32+ Years Combined Experience',
    description: 'Our team brings together decades of expertise in professional exterior care.',
  },
  {
    icon: <DocumentIcon className="w-12 h-12 text-bronze" />,
    title: 'Fully Licensed',
    description: 'All required licenses and certifications to operate professionally in Texas.',
  },
  {
    icon: <ShieldIcon className="w-12 h-12 text-bronze" />,
    title: 'Fully Insured',
    description: 'Comprehensive liability insurance protects you and your property.',
  },
  {
    icon: <UsersIcon className="w-12 h-12 text-bronze" />,
    title: 'Family Owned',
    description: "We treat every home like our own because we understand what's at stake.",
  },
  {
    icon: <StarIcon className="w-12 h-12 text-bronze" />,
    title: 'Trusted Reputation',
    description: 'Thousands of satisfied customers across the North Houston area.',
  },
  {
    icon: <HeartIcon className="w-12 h-12 text-bronze" />,
    title: 'Dedicated Service',
    description: 'Consistent teams who know your property and your preferences.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=2000&q=80)' }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            About Us
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-6">
            Experienced &<br />Trusted Service
          </h1>
          <p className="font-sans text-xl text-cream/85 leading-relaxed">
            J Calvin is a family-owned business dedicated to helping North Houston
            homeowners protect and enjoy their properties.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter mb-8">Our Story</h2>
          <div className="font-sans text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Our team brings together over 32 years of combined experience serving the North Houston
              community with professional exterior care services. What started as a commitment to helping
              neighbors maintain their homes has grown into a comprehensive property care company trusted by
              families across Tomball, Klein, Spring, The Woodlands, Montgomery, and Cypress.
            </p>
            <p>
              We understand that your home is more than just a building—it&apos;s where memories are
              made, where family gathers, and where you should feel most at peace. That&apos;s why we
              created our Property Care Plans: to give you back the time you deserve to actually
              enjoy your home.
            </p>
            <p>
              Every service we provide is backed by our commitment to excellence, attention to
              detail, and genuine care for the families we serve. When you trust us with your
              property, you&apos;re not just hiring a service—you&apos;re gaining a dedicated partner in home
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter text-center mb-12">
            Why Trust Us With Your Home
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustSignals.map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-serif text-xl font-medium text-hunter mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={generalFAQs} />

      {/* CTA */}
      <section className="py-20 px-6 bg-cream-dark text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter mb-6">Ready to Get Started?</h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join all the other families who have reclaimed their weekends and trust J Calvin for their property care.
          </p>
          <Link href="/compare" className="btn-primary">
            View Our Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
