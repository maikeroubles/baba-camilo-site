import React from 'react';
import { COPY } from '../constants';
import { AlertCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-3 px-2">
            {COPY.problems.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-4 leading-snug">{COPY.problems.subtitle}</p>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {COPY.problems.items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 p-4 md:p-6 bg-gold-50/50 rounded-xl shadow-sm border border-gold-100 hover:shadow-lg transition-all duration-300">
              <div className="flex-shrink-0 text-red-600 mt-0.5 drop-shadow-sm">
                <AlertCircle size={20} />
              </div>
              <p className="text-base md:text-lg text-slate-800 font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-800 max-w-3xl mx-auto text-center">
            <h3 className="text-lg md:text-xl font-bold text-gold-100 mb-3 font-serif">Você não precisa carregar esse peso sozinho.</h3>
            <p className="text-slate-300 mb-6 font-light text-sm md:text-base">
                A espiritualidade tem respostas e caminhos que seus olhos físicos não conseguem ver.
            </p>
            <div className="flex justify-center">
                <WhatsAppButton text={COPY.problems.cta} variant="secondary" className="w-full md:w-auto shadow-md border border-gold-500/30 py-3 text-sm md:text-base" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;