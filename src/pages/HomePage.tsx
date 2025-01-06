import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Benefits />
      <Testimonials />
      <ContactForm />
    </main>
  );
}