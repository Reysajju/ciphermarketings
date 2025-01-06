import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceCategories } from '../data/services';

export function ServicePage() {
  const { categoryId, serviceId } = useParams();
  
  const category = serviceCategories.find(cat => cat.id === categoryId);
  const service = category?.services.find(
    s => s.toLowerCase().replace(/\s+/g, '-') === serviceId
  );

  if (!category || !service) {
    return <div className="container mx-auto px-6 py-32">Service not found</div>;
  }

  return (
    <div className="pt-24">
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert {service} services tailored to your business needs. Drive results with our data-driven approach.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">How We Can Help</h2>
            <p className="text-gray-600 mb-8">
              Our {service} solutions are designed to help your business achieve maximum ROI through strategic planning and execution.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-700">Strategic campaign planning and execution</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-700">Data-driven optimization and testing</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <p className="text-gray-700">Regular performance reporting and insights</p>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Service"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}