import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import OrderTracking from './components/OrderTracking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoonModal from './components/ComingSoonModal';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  // Add smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-in', 'fade-in-50', 'slide-in-from-bottom-8');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComingSoonClick = () => {
    setIsComingSoonModalOpen(true);
  };

  const closeComingSoonModal = () => {
    setIsComingSoonModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onComingSoonClick={handleComingSoonClick} />
      <Hero onComingSoonClick={handleComingSoonClick} />
      
      <div data-animate>
        <Features />
      </div>
      
      <div data-animate>
        <Services onComingSoonClick={handleComingSoonClick} />
      </div>
      
      <div data-animate>
        <Testimonials />
      </div>
      
      <div data-animate>
        <OrderTracking onComingSoonClick={handleComingSoonClick} />
      </div>
      
      <div data-animate>
        <Contact onComingSoonClick={handleComingSoonClick} />
      </div>
      
      <Footer onComingSoonClick={handleComingSoonClick} />
      
      <ComingSoonModal 
        isOpen={isComingSoonModalOpen} 
        onClose={closeComingSoonModal} 
      />

      <WhatsAppButton/>
    </div>
  );
}

export default App;