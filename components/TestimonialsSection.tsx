import React from 'react';
import { COPY } from '../constants';
import { Quote, Star } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gold-400 mb-3">
            Histórias Reais, Resultados Reais
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Veja o que dizem as pessoas que já tiveram seus caminhos abertos por Babá Camilo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {COPY.testimonials.map((t, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl relative hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full backdrop-blur-sm">
              <Quote className="absolute top-4 left-4 text-gold-600/20" size={32} />
              
              <div className="flex gap-1 mb-3 text-gold-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="relative z-10 text-slate-300 mb-4 leading-snug italic flex-grow text-sm md:text-base">
                "{t.text}"
              </p>
              
              <div className="relative z-10 flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/50">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm">
                    {t.name.charAt(0)}
                </div>
                <div>
                    <span className="font-bold text-gold-50 block leading-tight text-sm">{t.name}</span>
                    <span className="text-[10px] text-slate-500">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
            <WhatsAppButton text={COPY.testimonialsCta} variant="secondary" className="py-3 text-sm" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;