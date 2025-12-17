import React from 'react';
import { COPY } from '../constants';
import { CheckCircle2, Award } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const AboutSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden scroll-mt-20" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group max-w-md mx-auto md:max-w-none">
            <div className="absolute top-3 -left-3 w-full h-full border-2 border-gold-300 rounded-2xl z-0 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://picsum.photos/600/800?grayscale" 
              alt="Babá Camilo de Oxum jogando búzios" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover aspect-[3/4] md:aspect-[4/5]"
            />
            <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg text-center border-l-4 border-gold-500">
              <span className="block text-2xl md:text-4xl font-bold text-gold-600 font-serif">20+</span>
              <span className="text-[10px] md:text-xs text-slate-600 font-bold uppercase tracking-wider">Anos de<br/>Experiência</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
             <div className="flex items-center gap-2 mb-2">
                <Award className="text-gold-500" size={18} />
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">{COPY.about.subtitle}</span>
             </div>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
              {COPY.about.title}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-gold-500 to-gold-300 mb-6 rounded-full"></div>
            
            <p className="text-base text-slate-600 leading-relaxed mb-6 text-justify">
              {COPY.about.description}
            </p>

            <ul className="space-y-3 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {COPY.about.stats.map((stat, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-800 font-medium text-sm md:text-base">
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={18} />
                  <span>{stat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton text={COPY.about.cta} variant="primary" className="!py-3 !text-sm md:!text-base" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;