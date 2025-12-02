import Link from 'next/link';

export default function ServiceArea() {
  return (
    <section className="py-20 px-6 bg-cream border-t border-hunter/5">
      <div className="max-w-[800px] mx-auto text-center">
        <p className="section-label">Service Area</p>
        <h2 className="font-serif text-4xl font-normal text-hunter mb-6">
          Proudly Serving North Houston
        </h2>
        <p className="font-sans text-lg text-gray-600 mb-8">
          We provide property care services throughout the greater North Houston area, including:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Tomball', 'Klein', 'Spring', 'The Woodlands', 'Montgomery', 'Cypress'].map((city) => (
            <span
              key={city}
              className="px-6 py-2 bg-hunter/5 rounded-full font-sans text-sm text-hunter"
            >
              {city}
            </span>
          ))}
        </div>
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
  );
}
