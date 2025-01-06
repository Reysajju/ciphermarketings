import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceBenefitsProps {
  benefits: string[];
}

export const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};