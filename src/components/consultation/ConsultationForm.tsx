import React from 'react';
import { X } from 'lucide-react';
import { useConsultationForm } from './useConsultationForm';
import { StepPersonal } from './steps/StepPersonal';
import { StepContact } from './steps/StepContact';
import { StepService } from './steps/StepService';
import { StepMessage } from './steps/StepMessage';
import { StepConfirmation } from './steps/StepConfirmation';
import { FormProgress } from './FormProgress';

interface ConsultationFormProps {
  onClose: () => void;
}

export function ConsultationForm({ onClose }: ConsultationFormProps) {
  const { 
    currentStep,
    formData,
    isValid,
    isSubmitting,
    handleInputChange,
    handleNext,
    handleSubmit
  } = useConsultationForm();

  const steps = [
    <StepPersonal key="personal" formData={formData} onChange={handleInputChange} />,
    <StepContact key="contact" formData={formData} onChange={handleInputChange} />,
    <StepService key="service" formData={formData} onChange={handleInputChange} />,
    <StepMessage key="message" formData={formData} onChange={handleInputChange} />,
    <StepConfirmation key="confirmation" formData={formData} />
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-2xl mx-4 overflow-hidden relative" data-aos="zoom-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <FormProgress currentStep={currentStep} totalSteps={steps.length} />
          
          <form 
            name="consultation" 
            method="POST" 
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="consultation" />
            <input type="hidden" name="bot-field" />
            
            <div className="min-h-[300px]">
              {steps[currentStep]}
            </div>

            <div className="flex justify-between pt-4">
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isValid}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}