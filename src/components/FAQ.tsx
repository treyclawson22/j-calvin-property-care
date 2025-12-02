'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@/components/icons';
import { FAQItem } from '@/data/faq';

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  accentColor?: string;
}

export default function FAQ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle,
  accentColor = "#b87333"
}: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-normal text-hunter mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-lg text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <div
                key={i}
                className="bg-cream rounded-xl border border-hunter/10 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-cream-dark transition-colors"
                >
                  <span className="font-sans text-base font-medium text-hunter pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    style={{ color: accentColor }}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <div
                      className="pl-4 border-l-2"
                      style={{ borderColor: accentColor }}
                    >
                      <p className="font-sans text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
