import React, { useState } from 'react';
import { COPY } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 md:py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2 text-gold-600">
                <HelpCircle size={20} />
                <span className="font-bold uppercase tracking-wider text-xs">Tire suas dúvidas</span>
            </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900">
            {COPY.faq.title}
          </h2>
        </div>

        <div className="space-y-3 mb-10">
          {COPY.faq.items.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-300">
              <button
                className="w-full flex justify-between items-center p-4 md:p-5 bg-slate-50 hover:bg-white text-left focus:outline-none transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-base md:text-lg font-bold text-slate-800 pr-4 leading-tight">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-500 flex-shrink-0" size={18} />
                ) : (
                  <ChevronDown className="text-slate-400 flex-shrink-0" size={18} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-4 md:p-5 pt-0 bg-white text-slate-600 leading-relaxed border-t border-slate-100 text-sm md:text-base">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
            <p className="mb-4 text-slate-600 text-sm">Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
            <WhatsAppButton text="Conversar no WhatsApp" variant="secondary" className="!bg-green-600 hover:!bg-green-500 py-3 text-sm" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;