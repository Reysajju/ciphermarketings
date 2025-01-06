import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroSlider } from './HeroSlider';
import { ConsultationForm } from '../consultation/ConsultationForm';

export function Hero() {
  const [showConsultation, setShowConsultation] = React.useState(false);

  return (
    <div className="relative min-h-screen flex items-center">
      <HeroSlider />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Transform Your Digital Presence with Data-Driven Marketing
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            Elevate your brand with our comprehensive digital marketing solutions and expert PPC management
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setShowConsultation(true)}
              className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition"
            >
              Get Free Strategy Session
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition">
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {showConsultation && <ConsultationForm onClose={() => setShowConsultation(false)} />}
    </div>
  );
}