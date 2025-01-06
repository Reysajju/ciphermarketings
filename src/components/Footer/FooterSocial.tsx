import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { ConsultationForm } from '../consultation/ConsultationForm';

export function FooterSocial() {
  const [showConsultation, setShowConsultation] = React.useState(false);

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Cipher Marketing</h3>
      <p className="mb-6">Transforming businesses through innovative digital marketing solutions.</p>
      <button
        onClick={() => setShowConsultation(true)}
        className="w-full mb-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
        <a href="#" className="hover:text-blue-400 transition"><Twitter /></a>
        <a href="#" className="hover:text-blue-400 transition"><Linkedin /></a>
        <a href="#" className="hover:text-blue-400 transition"><Instagram /></a>
      </div>

      {showConsultation && <ConsultationForm onClose={() => setShowConsultation(false)} />}
    </div>
  );
}