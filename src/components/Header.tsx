'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const carePlanItems = [
  { href: '/packages/essentials', label: 'The Essentials Package' },
  { href: '/packages/signature', label: 'The Signature Package' },
  { href: '/packages/concierge', label: 'The Concierge Package' },
  { href: '/packages/estate', label: 'The Estate Package' },
  { href: '/services', label: 'Service Vouchers' },
];

const navItems = [
  { href: '/', label: 'Program Overview' },
  { href: '/compare', label: 'Compare Plans' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carePlanOpen, setCarePlanOpen] = useState(false);
  const pathname = usePathname();

  const isCarePlanActive = carePlanItems.some(item => pathname === item.href || pathname.startsWith('/packages/'));

  return (
    <nav className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-hunter/10 z-50 px-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
          <img
            src="/property-care/J Calvin Propert Care Logo - header.png"
            alt="J Calvin Property Care"
            width={168}
            height={42}
            className="h-[42px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex gap-8 items-center">
          <Link
            href="/"
            className={`font-sans text-sm transition-all duration-200 py-2 border-b-2 ${
              pathname === '/'
                ? 'text-hunter border-bronze'
                : 'text-gray-500 border-transparent hover:text-hunter'
            }`}
          >
            Program Overview
          </Link>

          {/* Care Plans Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCarePlanOpen(true)}
            onMouseLeave={() => setCarePlanOpen(false)}
          >
            <button
              className={`font-sans text-sm transition-all duration-200 py-2 border-b-2 flex items-center gap-1 ${
                isCarePlanActive
                  ? 'text-hunter border-bronze'
                  : 'text-gray-500 border-transparent hover:text-hunter'
              }`}
            >
              Care Plans
              <svg className={`w-4 h-4 transition-transform ${carePlanOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {carePlanOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white rounded-lg shadow-lg border border-hunter/10 py-2">
                {carePlanItems.map((item, i) => (
                  <div key={item.href}>
                    {i === 4 && <div className="border-t border-hunter/10 my-2" />}
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 font-sans text-sm transition-colors ${
                        pathname === item.href
                          ? 'text-hunter bg-hunter/5 font-medium'
                          : 'text-gray-600 hover:text-hunter hover:bg-hunter/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/compare"
            className={`font-sans text-sm transition-all duration-200 py-2 border-b-2 ${
              pathname === '/compare'
                ? 'text-hunter border-bronze'
                : 'text-gray-500 border-transparent hover:text-hunter'
            }`}
          >
            Compare Plans
          </Link>
          <Link
            href="/about"
            className={`font-sans text-sm transition-all duration-200 py-2 border-b-2 ${
              pathname === '/about'
                ? 'text-hunter border-bronze'
                : 'text-gray-500 border-transparent hover:text-hunter'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`font-sans text-sm transition-all duration-200 py-2 border-b-2 ${
              pathname === '/contact'
                ? 'text-hunter border-bronze'
                : 'text-gray-500 border-transparent hover:text-hunter'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/signup"
            className="bg-hunter text-cream px-6 py-3 font-sans text-sm font-medium rounded transition-all duration-200 hover:bg-hunter-light"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-hunter"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-cream border-t border-hunter/10">
          <div className="px-6 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 font-sans text-base ${
                pathname === '/' ? 'text-hunter font-medium' : 'text-gray-500'
              }`}
            >
              Program Overview
            </Link>

            {/* Mobile Care Plans Section */}
            <div className="py-2">
              <p className="font-sans text-xs text-bronze uppercase tracking-wider mb-2">Care Plans</p>
              <div className="pl-4 space-y-1">
                {carePlanItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 font-sans text-base ${
                      pathname === item.href ? 'text-hunter font-medium' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/compare"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 font-sans text-base ${
                pathname === '/compare' ? 'text-hunter font-medium' : 'text-gray-500'
              }`}
            >
              Compare Plans
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 font-sans text-base ${
                pathname === '/about' ? 'text-hunter font-medium' : 'text-gray-500'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 font-sans text-base ${
                pathname === '/contact' ? 'text-hunter font-medium' : 'text-gray-500'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-4 bg-hunter text-cream text-center px-6 py-3 font-sans text-base font-medium rounded"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
