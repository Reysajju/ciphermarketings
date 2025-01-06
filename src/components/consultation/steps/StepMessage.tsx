import React from 'react';

interface StepMessageProps {
  formData: { message: string };
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function StepMessage({ formData, onChange }: StepMessageProps) {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900">Tell us about your project</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Tell us about your goals and requirements..."
          required
        />
      </div>
    </div>
  );
}