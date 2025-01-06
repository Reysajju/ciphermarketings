import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Data-Driven Decision Making',
  'Transparent Reporting',
  'Dedicated Account Manager',
  'Custom Strategy Development',
  'Regular Performance Reviews',
  'Continuous Optimization'
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Team Meeting"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}