import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import MethodSection from './components/MethodSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LeadFormModal from './components/LeadFormModal';
import BackgroundSound from './components/BackgroundSound';
import { LeadFormProvider } from './LeadContext';

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Babá Camilo | Amarração Amorosa e Consulta de Búzios";
  }, []);

  return (
    <LeadFormProvider>
      <main className="w-full min-h-screen font-sans text-slate-900 overflow-x-hidden bg-white selection:bg-gold-200 selection:text-gold-900 flex flex-col justify-between">
        <Header />
        
        <HeroSection />
        <ProblemSection />
        <AboutSection /> 
        <MethodSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection /> 
        <FAQSection /> 
        
        <Footer />
        
        {/* Elementos Flutuantes */}
        <WhatsAppButton text="" variant="floating" />
        <BackgroundSound />
        
        <LeadFormModal />
      </main>
    </LeadFormProvider>
  );
};

export default App;