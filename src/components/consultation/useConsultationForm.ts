import { useState } from 'react';
import { FormData } from './types';
import { encode } from '../../utils/form';

export function useConsultationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    preOrder: false,
    service: '',
    message: ''
  });

  const validation = {
    0: () => formData.fullName.length >= 3,
    1: () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      return emailRegex.test(formData.email) && phoneRegex.test(formData.phone);
    },
    2: () => formData.service !== '',
    3: () => formData.message.length >= 10,
    4: () => true
  };

  const isValid = validation[currentStep as keyof typeof validation]();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleNext = () => {
    if (isValid && currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'consultation',
          ...formData,
          preOrder: formData.preOrder ? 'yes' : 'no'
        })
      });

      if (response.ok) {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          preOrder: false,
          service: '',
          message: ''
        });
        setCurrentStep(0);
        alert('Thank you for your submission! We will contact you soon.');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    currentStep,
    formData,
    isValid,
    isSubmitting,
    handleInputChange,
    handleNext,
    handleSubmit
  };
}