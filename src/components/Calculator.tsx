'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { pricingData, sizes } from '@/data/pricing';

interface CalculatorProps {
  embedded?: boolean;
}

export default function Calculator({ embedded = false }: CalculatorProps) {
  const [salaryInput, setSalaryInput] = useState('150000');
  const [hourlyInput, setHourlyInput] = useState('72');
  const [inputMode, setInputMode] = useState<'salary' | 'hourly'>('salary');
  const [selectedSize, setSelectedSize] = useState(0);

  const annualSalary = Number(salaryInput) || 0;
  const hourlyRate = Number(hourlyInput) || 0;

  useEffect(() => {
    if (inputMode === 'salary' && salaryInput !== '') {
      setHourlyInput(Math.round(annualSalary / 2080).toString());
    }
  }, [annualSalary, inputMode, salaryInput]);

  useEffect(() => {
    if (inputMode === 'hourly' && hourlyInput !== '') {
      setSalaryInput(Math.round(hourlyRate * 2080).toString());
    }
  }, [hourlyRate, inputMode, hourlyInput]);

  const bgClass = embedded ? 'bg-cream-dark' : 'bg-hunter';
  const textClass = embedded ? 'text-hunter' : 'text-cream';
  const mutedClass = embedded ? 'text-gray-500' : 'text-cream/60';
  const borderClass = embedded ? 'border-hunter/10' : 'border-cream/10';
  const inputBgClass = embedded ? 'bg-white border-hunter/20' : 'bg-cream/10 border-cream/20';

  return (
    <section className={`${embedded ? '' : 'py-32 px-6 relative overflow-hidden'} ${embedded ? '' : bgClass}`}>
      {!embedded && (
        <>
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=2000&q=80)' }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-hunter/90" />
        </>
      )}
      <div className="max-w-[1000px] mx-auto relative z-10">
        {!embedded && (
          <div className="text-center mb-16">
            <p className="section-label text-bronze-light">Time Savings Calculator</p>
            <h2 className="section-title-light">How Much Is Your Time Worth?</h2>
          </div>
        )}

        <div className={`${embedded ? 'bg-cream-dark' : 'bg-cream/15'} rounded-2xl p-8 md:p-12 border ${borderClass}`}>
          {/* Input Section */}
          <div className="mb-12">
            <div className="flex gap-4 mb-6 flex-wrap">
              <button
                onClick={() => setInputMode('salary')}
                className={`px-6 py-3 rounded font-sans text-sm transition-all ${
                  inputMode === 'salary'
                    ? 'bg-bronze text-white'
                    : `bg-transparent ${textClass} border ${borderClass}`
                }`}
              >
                Enter Annual Salary
              </button>
              <button
                onClick={() => setInputMode('hourly')}
                className={`px-6 py-3 rounded font-sans text-sm transition-all ${
                  inputMode === 'hourly'
                    ? 'bg-bronze text-white'
                    : `bg-transparent ${textClass} border ${borderClass}`
                }`}
              >
                Enter Hourly Rate
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={`block font-sans text-xs ${mutedClass} mb-2 tracking-wider uppercase`}>
                  {inputMode === 'salary' ? 'Your Annual Salary' : 'Your Hourly Rate'}
                </label>
                <div className="relative">
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 ${textClass} font-sans text-lg`}>
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={inputMode === 'salary' ? salaryInput : hourlyInput}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      inputMode === 'salary'
                        ? setSalaryInput(value)
                        : setHourlyInput(value);
                    }}
                    className={`w-full py-4 pl-8 pr-4 ${inputBgClass} border rounded-lg font-sans text-lg ${textClass} outline-none focus:ring-2 focus:ring-bronze/50`}
                  />
                </div>
              </div>

              <div>
                <label className={`block font-sans text-xs ${mutedClass} mb-2 tracking-wider uppercase`}>
                  Home Size
                </label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(Number(e.target.value))}
                  className={`w-full py-4 px-4 ${inputBgClass} border rounded-lg font-sans text-base ${textClass} outline-none cursor-pointer focus:ring-2 focus:ring-bronze/50`}
                >
                  {sizes.map((size, i) => (
                    <option key={i} value={i} className="text-hunter">
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(pricingData).map(([key, pkg]) => {
              const priceData = pkg.prices[selectedSize];
              const timeSaved = priceData.hoursSaved * hourlyRate;
              const annualCost = priceData.monthly * 12;
              const netSavings = timeSaved - annualCost;

              return (
                <div
                  key={key}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-sm border-2 border-hunter/10"
                >
                  <div className="h-1.5" style={{ backgroundColor: pkg.color }} />
                  <div className="p-8 flex-1 flex flex-col">
                    <h4 className="font-serif text-2xl font-medium mb-2" style={{ color: pkg.color }}>
                      {pkg.name.replace('The ', '').replace(' Package', '')}
                    </h4>

                    <div className="font-serif text-4xl font-normal text-hunter mb-1">
                      {priceData.hoursSaved}
                      <span className="text-base text-gray-500 font-sans"> hrs/yr</span>
                    </div>

                    <p className="font-sans text-xs text-gray-500 mb-4">
                      Time saved annually
                    </p>

                    <div className="space-y-2 mb-6 flex-1">
                      <div className="flex justify-between">
                        <span className="font-sans text-sm text-gray-500">Time Value</span>
                        <span className="font-sans text-sm font-medium text-hunter">
                          ${timeSaved.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-sans text-sm text-gray-500">Annual Cost</span>
                        <span className="font-sans text-sm font-medium text-hunter">
                          ${annualCost.toLocaleString('en-US')}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-lg ${
                        netSavings >= 0 ? 'bg-hunter-medium/10' : 'bg-red-100'
                      }`}
                    >
                      <div
                        className={`font-sans text-xs font-semibold mb-1 ${
                          netSavings >= 0 ? 'text-hunter-medium' : 'text-red-600'
                        }`}
                      >
                        {netSavings >= 0 ? 'NET SAVINGS' : 'NET COST'}
                      </div>
                      <div
                        className={`font-serif text-2xl ${
                          netSavings >= 0 ? 'text-hunter-medium' : 'text-red-600'
                        }`}
                      >
                        ${Math.abs(netSavings).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className={`font-sans text-xs ${mutedClass} text-center mt-8`}>
            * Net savings calculated by comparing the value of your time saved against the annual subscription cost
          </p>

          <div className="text-center mt-10">
            <Link
              href="/signup"
              className="inline-block py-4 px-10 bg-bronze text-cream font-sans text-base font-medium rounded hover:bg-bronze/90 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
