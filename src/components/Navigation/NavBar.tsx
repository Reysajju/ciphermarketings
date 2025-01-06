import React from 'react';
import { NavItem } from './NavItem';
import { serviceCategories } from '../../data/services';

const abbreviations = {
  'ppc': 'PPC',
  'display': 'DSP',
  'optimization': 'OPT',
  'landing-pages': 'LP',
  'analytics': 'ANL',
  'social': 'SMM',
  'seo': 'SEO',
  'content': 'CNT',
  'automation': 'AUT',
  'ecommerce': 'ECM'
};

export function NavBar() {
  return (
    <div className="hidden lg:flex space-x-2">
      {serviceCategories.map((category) => (
        <NavItem
          key={category.id}
          id={category.id}
          title={category.title}
          abbreviation={abbreviations[category.id as keyof typeof abbreviations]}
          services={category.services}
        />
      ))}
    </div>
  );
}