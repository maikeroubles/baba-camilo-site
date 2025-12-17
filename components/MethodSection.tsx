import React from 'react';
import { COPY } from '../constants';
import { Calendar, Eye, Sparkles } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const icons = [Calendar, Eye, Sparkles];

const MethodSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gold-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-oxum-light rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
            {COPY.method.title}
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed">
            {COPY.method.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative mb-10 md:mb-16">
          <div className="hidden md:block absolute top-10 left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-gold-300 to-transparent z-0"></div>

          {COPY.method.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-gold-100 mb-4 group-hover:border-gold-500 transition-all duration-300 shadow-lg group-hover:shadow-gold-200">
                  <Icon size={28} className="text-gold-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 leading-snug px-2 text-sm md:text-base">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
            <WhatsAppButton text={COPY.method.cta} variant="primary" className="py-3 text-base" />
        </div>
      </div>
    </section>
  );
};

export default MethodSection;