import React from 'react';

interface StepContactProps {
  formData: { email: string; phone: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function StepContact({ formData, onChange }: StepContactProps) {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900">How can we reach you?</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="john@example.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>
    </div>
  );
}