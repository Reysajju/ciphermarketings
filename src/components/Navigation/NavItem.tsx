import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../utils/smoothScroll';

interface NavItemProps {
  id: string;
  title: string;
  abbreviation: string;
  services: string[];
}

export function NavItem({ id, title, abbreviation, services }: NavItemProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button 
        onClick={() => scrollToElement(id)}
        className="text-gray-600 hover:text-blue-600 text-sm py-2 px-3 rounded-md transition-colors"
      >
        <span className="block text-center font-medium">{abbreviation}</span>
        <span className="hidden group-hover:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-xs whitespace-nowrap bg-white/90 px-2 py-1 rounded shadow-lg">
          {title}
        </span>
      </button>

      {showDropdown && (
        <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 z-50 transform transition-all duration-200 opacity-100 translate-y-0">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${id.toLowerCase()}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {service}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}