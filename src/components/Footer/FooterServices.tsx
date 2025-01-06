import React from 'react';
import { serviceCategories } from '../../data/services';

export function FooterServices() {
  return (
    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {serviceCategories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h4 className="text-lg font-semibold text-white">{category.title}</h4>
          <ul className="space-y-2">
            {category.services.map((service, index) => (
              <li key={index}>
                <a 
                  href={`#${category.id}`} 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}