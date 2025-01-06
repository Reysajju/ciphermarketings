import React from 'react';

interface StepConfirmationProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    preOrder: boolean;
    message: string;
  };
}

export function StepConfirmation({ formData }: StepConfirmationProps) {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-gray-900">Confirm Your Details</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
          <p className="mt-1">{formData.fullName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Email</h3>
          <p className="mt-1">{formData.email}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Phone</h3>
          <p className="mt-1">{formData.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Service</h3>
          <p className="mt-1">{formData.service}</p>
        </div>
        {formData.preOrder && (
          <div>
            <p className="text-sm text-blue-600">Pre-order requested</p>
          </div>
        )}
        <div>
          <h3 className="text-sm font-medium text-gray-500">Message</h3>
          <p className="mt-1">{formData.message}</p>
        </div>
      </div>
    </div>
  );
}