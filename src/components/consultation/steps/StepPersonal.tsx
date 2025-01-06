import React from 'react';

interface StepPersonalProps {
  formData: { fullName: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function StepPersonal({ formData, onChange }: StepPersonalProps) {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900">Welcome! Let's get to know you</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's your full name?
        </label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="John Doe"
          required
        />
      </div>
    </div>
  );
}