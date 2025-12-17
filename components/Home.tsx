import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import MethodSection from './MethodSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import BlogSection from './BlogSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Check for hash in URL and scroll if present (handling navigation from other routes)
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const headerOffset = 85;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AboutSection /> 
      <MethodSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection /> 
      <FAQSection /> 
    </>
  );
};

export default Home;