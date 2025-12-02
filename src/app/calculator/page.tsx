import Calculator from '@/components/Calculator';

export default function CalculatorPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=2000&q=80)' }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-hunter/90 to-hunter-light/85" />
        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <p className="font-sans text-xs tracking-[3px] uppercase text-bronze-light mb-4">
            Time Savings Calculator
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-cream mb-6">
            How Much Is Your Time Worth?
          </h1>
          <p className="font-sans text-xl text-cream/85">
            Enter your hourly rate or salary to see how much value each plan provides.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-6 bg-cream">
        <Calculator embedded={true} />
      </section>
    </div>
  );
}
