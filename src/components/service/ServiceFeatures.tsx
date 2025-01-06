import React from 'react';

interface ServiceFeaturesProps {
  features: string[];
}

export const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ features }) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-blue-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};