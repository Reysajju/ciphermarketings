import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { serviceCategories } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Cipher Marketing</h3>
            <p className="mb-6">Transforming businesses through innovative digital marketing solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter /></a>
              <a href="#" className="hover:text-blue-400 transition"><Linkedin /></a>
              <a href="#" className="hover:text-blue-400 transition"><Instagram /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <div className="grid grid-cols-2 gap-4">
              {serviceCategories.slice(0, 5).map((category) => (
                <a 
                  key={category.id}
                  href={`#${category.id}`} 
                  className="hover:text-white transition text-sm"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">More Services</h4>
            <div className="grid grid-cols-2 gap-4">
              {serviceCategories.slice(5).map((category) => (
                <a 
                  key={category.id}
                  href={`#${category.id}`} 
                  className="hover:text-white transition text-sm"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                contact@ciphermarketing.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                123 Digital Street, Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Cipher Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}