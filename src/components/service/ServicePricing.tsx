import React from 'react';

interface PricingTier {
  basic: string;
  standard: string;
  premium: string;
}

interface ServicePricingProps {
  pricing: PricingTier;
}

export const ServicePricing: React.FC<ServicePricingProps> = ({ pricing }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(pricing).map(([tier, features], index) => (
            <div 
              key={tier}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 capitalize">{tier}</h3>
              <p className="text-gray-600 mb-6">{features}</p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};