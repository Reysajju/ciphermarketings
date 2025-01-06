import React from 'react';
import { serviceCategories } from '../../../data/services';

interface StepServiceProps {
  formData: { service: string; preOrder: boolean };
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}

export function StepService({ formData, onChange }: StepServiceProps) {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900">What service interests you?</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select a Service
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Select a service...</option>
          {serviceCategories.map(category => (
            <optgroup key={category.id} label={category.title}>
              {category.services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="preOrder"
          checked={formData.preOrder}
          onChange={onChange}
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="text-sm text-gray-700">
          I'm interested in pre-ordering this service
        </label>
      </div>
    </div>
  );
}