import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavBar } from './Navigation/NavBar';
import { ConsultationForm } from './consultation/ConsultationForm';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showConsultation, setShowConsultation] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <NavBar />

          <button 
            onClick={() => setShowConsultation(true)}
            className="hidden lg:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </button>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {/* Mobile menu content */}
          </div>
        )}
      </nav>

      {showConsultation && <ConsultationForm onClose={() => setShowConsultation(false)} />}
    </header>
  );
}