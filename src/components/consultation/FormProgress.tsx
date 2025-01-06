import React from 'react';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  return (
    <div className="mb-8">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${(currentStep + 1) * (100 / totalSteps)}%` }}
        />
      </div>
    </div>
  );
}