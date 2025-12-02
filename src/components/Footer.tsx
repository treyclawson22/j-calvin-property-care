import Link from 'next/link';
import Image from 'next/image';
import { pricingData } from '@/data/pricing';

export default function Footer() {
  return (
    <footer className="bg-hunter py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/J Calvin Propert Care Logo - footer.png"
                alt="J Calvin Property Care"
                width={144}
                height={36}
                className="h-[36px] w-auto"
              />
            </div>
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              Premium monthly maintenance for your home&apos;s exterior and outdoor living spaces.
            </p>
          </div>

          {/* Plans */}
          <div>
            <h4 className="font-sans text-xs text-bronze-light tracking-[2px] uppercase mb-6">
              Our Plans
            </h4>
            {Object.entries(pricingData).map(([key, pkg]) => (
              <Link
                key={key}
                href={`/packages/${key}`}
                className="block font-sans text-sm text-cream/70 py-2 hover:text-cream transition-colors"
              >
                {pkg.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs text-bronze-light tracking-[2px] uppercase mb-6">
              Company
            </h4>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
              { href: '/compare', label: 'Compare Plans' },
              { href: '/calculator', label: 'Time Calculator' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-sans text-sm text-cream/70 py-2 hover:text-cream transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-sans text-xs text-bronze-light tracking-[2px] uppercase mb-6">
              Service Area
            </h4>
            <p className="font-sans text-sm text-cream/70 leading-8">
              Tomball<br />
              Klein<br />
              Spring<br />
              The Woodlands<br />
              Montgomery<br />
              Cypress
            </p>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-cream/50">
            © {new Date().getFullYear()} J Calvin. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/50">
            Licensed • Insured • 32+ Years Combined Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
