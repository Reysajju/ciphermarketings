import React from 'react';
import { FooterServices } from './FooterServices';
import { FooterContact } from './FooterContact';
import { FooterSocial } from './FooterSocial';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-1">
            <FooterSocial />
          </div>
          <FooterServices />
          <div className="lg:col-span-1">
            <FooterContact />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Cipher Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}