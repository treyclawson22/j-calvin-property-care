import Link from 'next/link';
import { pricingData } from '@/data/pricing';
import { generalFAQs } from '@/data/faq';
import Calculator from '@/components/Calculator';
import ServiceArea from '@/components/ServiceArea';
import FAQ from '@/components/FAQ';
import { ClockIcon, HomeIcon, StarIcon, CalendarIcon } from '@/components/icons';

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 px-6 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=2000&q=80)' }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
      {/* Decorative elements */}
      <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-bronze/15 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-bronze/10 rounded-full blur-3xl" />

      <div className="max-w-[900px] text-center relative z-10">
        <p className="font-sans text-sm tracking-[3px] uppercase text-bronze-light mb-6">
          J Calvin Property Care Plans
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal text-cream leading-tight mb-8">
          Reclaim Your<br />
          <span className="text-bronze-light italic">Weekends</span>
        </h1>

        <p className="font-sans text-xl text-cream/85 leading-relaxed max-w-[600px] mx-auto mb-12">
          Premium monthly maintenance for your home&apos;s exterior and outdoor living spaces.
          Stop spending your free time on upkeep—start enjoying the home you&apos;ve worked so hard for.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/compare" className="btn-primary">
            View Plans & Pricing
          </Link>
          <Link href="/calculator" className="btn-outline-light">
            Calculate Your Savings
          </Link>
        </div>

        <div className="mt-20 flex justify-center gap-12 flex-wrap">
          {[
            { number: '32+', label: 'Years Combined Experience' },
            { number: '15K+', label: 'Homes Served' },
            { number: '100%', label: 'Licensed & Insured' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-5xl text-bronze-light font-light">
                {stat.number}
              </div>
              <div className="font-sans text-xs text-cream/70 tracking-wider uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Value Proposition Section
function ValueProposition() {
  const benefits = [
    {
      icon: <ClockIcon className="w-10 h-10 text-bronze" />,
      title: 'Save 60-280 Hours Yearly',
      description: "Depending on your plan, reclaim up to 280 hours per year. That's over 11 full days back with your family.",
    },
    {
      icon: <HomeIcon className="w-10 h-10 text-bronze" />,
      title: 'Protect Your Investment',
      description: 'Regular maintenance prevents costly repairs and keeps your home looking its best year-round.',
    },
    {
      icon: <StarIcon className="w-10 h-10 text-bronze" />,
      title: 'Consistent Curb Appeal',
      description: 'Never worry about what the neighbors think. Your home will always make a stunning first impression.',
    },
    {
      icon: <CalendarIcon className="w-10 h-10 text-bronze" />,
      title: 'Fully Managed Care',
      description: 'We handle the scheduling, the work, and the details. You just enjoy your pristine home.',
    },
  ];

  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">Your Time Is Precious</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-lg border border-hunter/5 hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="font-serif text-2xl font-medium text-hunter mb-4">{item.title}</h3>
              <p className="font-sans text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Package Preview Section
function PackagePreview() {
  return (
    <section className="py-32 px-6 bg-cream-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <p className="section-label">Our Plans</p>
          <h2 className="section-title mb-6">Choose Your Level of Care</h2>
          <p className="font-sans text-lg text-gray-600 max-w-[600px] mx-auto">
            From essential maintenance to all-inclusive luxury care, we have a plan that fits your lifestyle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(pricingData).map(([key, pkg]) => (
            <Link
              key={key}
              href={`/packages/${key}`}
              className="bg-white rounded-xl overflow-hidden border border-hunter/10 hover:shadow-xl transition-all group"
            >
              <div className="h-2" style={{ backgroundColor: pkg.color }} />

              <div className="p-8">
                <h3 className="font-serif text-2xl font-medium mb-2" style={{ color: pkg.color }}>
                  {pkg.name.replace('The ', '').replace(' Package', '')}
                </h3>

                <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="font-serif text-4xl font-normal text-hunter mb-1">
                  ${pkg.prices[0].monthly}
                  <span className="text-base text-gray-500 font-sans">/mo</span>
                </div>

                <p className="font-sans text-xs text-gray-500 mb-6">
                  Starting price for homes up to 2,750 sq ft
                </p>

                <div className="bg-hunter/5 p-4 rounded-lg mb-6">
                  <span className="font-sans text-sm text-hunter">
                    Save up to <strong>{pkg.prices[3].hoursSaved} hours</strong> per year
                  </span>
                </div>

                <div className="btn-secondary w-full text-center group-hover:bg-hunter group-hover:text-cream">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/compare" className="btn-secondary">
            Compare All Plans Side-by-Side
          </Link>
        </div>
      </div>
    </section>
  );
}

// Single Testimonial Component
function TestimonialCard({ quote, author, dark = false }: { quote: string; author: string; dark?: boolean }) {
  return (
    <div className={`p-8 rounded-xl ${dark ? 'bg-hunter' : 'bg-white border border-hunter/10'}`}>
      <div className="flex text-bronze mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className={`font-sans text-base leading-relaxed mb-4 ${dark ? 'text-cream/90' : 'text-gray-600'}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <p className={`font-sans text-sm font-medium ${dark ? 'text-bronze-light' : 'text-hunter'}`}>— {author}</p>
    </div>
  );
}

// Featured Testimonial Section (large, centered)
function FeaturedTestimonial() {
  return (
    <section className="py-20 px-6 bg-[#2d2d2d]">
      <div className="max-w-[800px] mx-auto text-center">
        <svg className="w-12 h-12 text-bronze/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="font-serif text-2xl md:text-3xl text-cream leading-relaxed mb-8">
          &ldquo;We have used J Calvin a few times, twice for our driveway and once for our house, and every time they have provided excellent results. I would highly recommend them to anyone that is looking to clean things up!&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-2">
          <div className="flex text-bronze">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="font-sans text-lg text-cream/80 mt-4">— Greg K.</p>
      </div>
    </section>
  );
}

// Testimonials Grid Section
function TestimonialsGrid() {
  const testimonials = [
    {
      quote: "The soft washing at my house done by J Calvin was absolutely amazing. Very professional and quick. When they were done with my house it looked brand new.",
      author: "Leah L."
    },
    {
      quote: "J Calvin did an awesome job twice now on my home for pressure washing and window cleaning. He even cleaned up a nest we had for a while under our porch and all the mess that came along with it. Super happy with their work.",
      author: "Amber P."
    },
    {
      quote: "J Calvin did an excellent job clearing the pine needles off my roof! They were very courteous and on time. They left my yard cleaner than it was when they arrived! I will definitely be calling them to do more work for me in the future!!",
      author: "Pat N."
    },
    {
      quote: "Professionalism and hard work ethics are outstanding! J Calvin will always be my go-to for making my home's outdoor spaces feeling warm and inviting!",
      author: "Clyde H."
    },
  ];

  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="section-label">What Our Customers Say</p>
          <h2 className="section-title">Trusted by Homeowners</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <PackagePreview />
      <FeaturedTestimonial />
      <Calculator />
      <TestimonialsGrid />
      <FAQ faqs={generalFAQs} />
      <ServiceArea />
    </>
  );
}
