import Link from 'next/link';
import {
  HomeIcon,
  SparklesIcon,
  DropletIcon,
  SunIcon,
  WindowIcon,
  ShieldIcon,
} from '@/components/icons';

const services = [
  {
    name: 'House Washing',
    description: 'We transform homes with our expert house washing service, tackling dirt and grime effortlessly. Restore your home\'s curb appeal with a thorough exterior clean.',
    icon: HomeIcon,
  },
  {
    name: 'Driveway Cleaning',
    description: 'We bring driveways back to life with our thorough cleaning, delivering a crisp, polished finish. Remove oil stains, tire marks, and built-up grime.',
    icon: DropletIcon,
  },
  {
    name: 'Roof Soft Washing',
    description: 'Our gentle roof cleaning service protects your rooftop, erasing stains and buildup with care. Safe for shingles while eliminating algae, moss, and dark streaks.',
    icon: ShieldIcon,
  },
  {
    name: 'Deck Cleaning',
    description: 'We renew decks with our top-notch cleaning service, restoring their natural beauty quickly. Prepare your deck for staining or simply enjoy the refreshed look.',
    icon: SparklesIcon,
  },
  {
    name: 'Fence Cleaning',
    description: 'Our fence cleaning service restores fences to their best, keeping them sturdy and sharp-looking. Works on wood, vinyl, and composite materials.',
    icon: ShieldIcon,
  },
  {
    name: 'Sidewalk Cleaning',
    description: 'We make sidewalks spotless with our safe cleaning approach, wiping out grime effortlessly. Improve safety and appearance around your home.',
    icon: DropletIcon,
  },
  {
    name: 'Gutter Brightening',
    description: 'Our gutter brightening service removes black streaks, oxidation, and grime from your gutter exteriors, restoring their original appearance and curb appeal.',
    icon: DropletIcon,
  },
  {
    name: 'Window Cleaning',
    description: 'Our window cleaning service brightens up homes, leaving windows crystal clear and stunning. Enjoy streak-free views and maximized natural light.',
    icon: WindowIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-bronze/10 rounded-full blur-3xl" />

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            One-Time Services
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-6">
            Professional Exterior<br />Cleaning Services
          </h1>
          <p className="font-sans text-xl text-cream/85 leading-relaxed max-w-[600px] mx-auto">
            Use your Exterior Service Vouchers on any of these professional cleaning services.
            Each service is performed by our experienced team with 32+ years of expertise.
          </p>
        </div>
      </section>

      {/* Voucher Info */}
      <section className="py-12 px-6 bg-bronze/10 border-y border-bronze/20">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="font-sans text-lg text-hunter">
            <strong>Property Care Plan members:</strong> Your Exterior Service Vouchers can be redeemed for any service below.
            Voucher values range from <strong>$300 to $750</strong> based on your home size.
          </p>
          <div className="mt-4 flex gap-4 justify-center flex-wrap">
            <Link href="/compare" className="font-sans text-sm text-bronze hover:text-bronze/80 underline">
              View plan voucher details →
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Available Services</p>
            <h2 className="section-title">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-hunter/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-hunter/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-7 h-7 text-bronze" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-hunter mb-3">
                      {service.name}
                    </h3>
                    <p className="font-sans text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voucher Values */}
      <section className="py-20 px-6 bg-cream-dark">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="section-label">Voucher Values</p>
            <h2 className="section-title mb-4">Your Vouchers, Your Choice</h2>
            <p className="font-sans text-lg text-gray-600">
              Exterior Service Voucher values are based on your home size. Use them for any service above.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-hunter/10 overflow-hidden">
            <div className="grid grid-cols-2 bg-hunter text-cream">
              <div className="p-4 font-sans text-sm font-medium">Home Size</div>
              <div className="p-4 font-sans text-sm font-medium text-right">Voucher Value</div>
            </div>
            {[
              { size: 'Up to 2,750 sq ft', value: '$300' },
              { size: '2,751 - 3,750 sq ft', value: '$450' },
              { size: '3,751 - 4,750 sq ft', value: '$600' },
              { size: '4,751 - 6,000 sq ft', value: '$750' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-cream/50' : 'bg-white'}`}>
                <div className="p-4 font-sans text-base text-hunter">{row.size}</div>
                <div className="p-4 font-serif text-2xl text-bronze text-right">{row.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-hunter/5 rounded-xl">
            <h4 className="font-sans text-sm font-medium text-hunter mb-3">How Vouchers Work:</h4>
            <ul className="font-sans text-sm text-gray-600 space-y-2">
              <li>• Vouchers can be combined for larger projects</li>
              <li>• Unused vouchers roll over year to year (up to your plan&apos;s cap)</li>
              <li>• Vouchers are transferable to friends and family in our service area</li>
              <li>• For services exceeding voucher value, simply pay the difference</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-cream text-center">
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-serif text-4xl font-normal text-hunter mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-sans text-lg text-gray-600 mb-8">
            Join a Property Care Plan to receive Exterior Service Vouchers, or contact us for a one-time service quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/compare" className="btn-primary">
              View Plans
            </Link>
            <Link href="/contact" className="btn-secondary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
