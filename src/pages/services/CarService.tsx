import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceHero } from '../../components/service/ServiceHero';
import { ServiceBenefits } from '../../components/service/ServiceBenefits';
import { ServiceFeatures } from '../../components/service/ServiceFeatures';
import { ServicePricing } from '../../components/service/ServicePricing';
import { serviceContent } from '../../data/serviceContent';
import { rickshawImages } from '../../utils/images';

export const CarService: React.FC = () => {
  const { cars: content } = serviceContent;

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.keywords} />
      </Helmet>

      <ServiceHero
        title={content.title}
        description={content.description}
        imageSrc={rickshawImages[15]} // Using a relevant image from the collection
      />
      
      <div className="py-16">
        <div className="container mx-auto px-6">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            {content.content.overview}
          </p>
        </div>
      </div>

      <ServiceBenefits benefits={content.content.benefits} />
      <ServiceFeatures features={content.content.features} />
      <ServicePricing pricing={content.content.pricing} />
    </>
  );
};