import React from 'react';

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-200">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};