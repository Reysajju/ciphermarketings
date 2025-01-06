import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Maximize Your ROI with Expert PPC and Digital Marketing Solutions
            </h1>
            <p className="text-xl text-gray-600">
              Transform your digital presence and drive measurable results with our data-driven marketing strategies.
            </p>
            <button className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition">
              Get a Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing Analytics"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}