import React from 'react';
import { COPY } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-gold-50 border-t border-gold-200/50 scroll-mt-20" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-gold-700 font-bold uppercase tracking-wider text-[10px] md:text-xs bg-gold-200/50 px-3 py-1 rounded-full border border-gold-300">Especialidades</span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-3">
            Como Babá Camilo pode te ajudar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-12">
          {COPY.services.map((service, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-gold-300 hover:border-gold-500 group flex flex-col items-center text-center md:text-left md:items-start md:block">
              <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-gold-500 transition-colors duration-300 shadow-inner border border-gold-100">
                <service.icon className="text-gold-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-gold-700 transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-snug">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gold-100 max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
          <p className="text-slate-700 mb-4 font-medium text-base md:text-lg">Não sabe qual o trabalho ideal? O Jogo de Búzios irá revelar.</p>
          <WhatsAppButton text={COPY.servicesCta} variant="secondary" className="!bg-gold-600 hover:!bg-gold-500 w-full md:w-auto py-3 text-sm mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;