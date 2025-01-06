import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { RickshawService } from './pages/services/RickshawService';
import { CarService } from './pages/services/CarService';
import { Footer } from './components/Footer/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/rickshaw" element={<RickshawService />} />
            <Route path="/services/cars" element={<CarService />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}