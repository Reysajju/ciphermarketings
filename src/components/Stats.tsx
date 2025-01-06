import React, { useEffect, useRef } from 'react';
import { animateNumber } from '../utils/animateNumber';

const stats = [
  { value: 1000000, label: 'Leads Generated', prefix: '' },
  { value: 500, label: 'Campaigns Managed', prefix: '' },
  { value: 95, label: 'Client Satisfaction', prefix: '', suffix: '%' },
  { value: 50000000, label: 'Ad Spend Managed', prefix: '$' }
];

export function Stats() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement;
            const index = refs.current.indexOf(element);
            if (index !== -1) {
              animateNumber(element, 0, stats[index].value, 2000);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span>{stat.prefix}</span>
                <span ref={el => refs.current[index] = el}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}