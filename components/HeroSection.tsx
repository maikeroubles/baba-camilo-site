import React from 'react';
import { COPY } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const HeroSection: React.FC = () => {
  // URLs dos vídeos
  // SUBSTITUA ESSAS URLS PELOS SEUS VÍDEOS REAIS
  const DESKTOP_VIDEO = "https://videos.pexels.com/video-files/5649235/5649235-hd_1920_1080_24fps.mp4";
  const MOBILE_VIDEO = "https://videos.pexels.com/video-files/5502660/5502660-uhd_2160_3840_25fps.mp4"; // Placeholder Vertical

  return (
    <section id="home" className="relative w-full min-h-[75vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        
        {/* Desktop Video (Visível apenas em telas médias para cima: md:block) */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hidden md:block w-full h-full object-cover opacity-50 md:opacity-60"
          poster="https://picsum.photos/1920/1080?grayscale&blur=2"
        >
          <source src={DESKTOP_VIDEO} type="video/mp4" />
        </video>

        {/* Mobile Video (Visível apenas em telas pequenas: md:hidden) */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="block md:hidden w-full h-full object-cover opacity-50"
          poster="https://picsum.photos/1080/1920?grayscale&blur=2"
        >
          <source src={MOBILE_VIDEO} type="video/mp4" />
        </video>

        {/* Overlays para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/70 to-gold-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-16 md:pt-0">
        <div className="mb-4 md:mb-6 inline-block animate-fade-in-up">
            <span className="py-1.5 px-4 border border-gold-400/30 text-gold-100 rounded-full text-[10px] md:text-sm uppercase tracking-widest bg-slate-900/60 backdrop-blur-md font-semibold shadow-2xl">
                {COPY.hero.badge}
            </span>
        </div>
        
        <h1 className="text-2xl md:text-5xl lg:text-6xl text-white font-serif font-bold leading-tight mb-4 md:mb-6 drop-shadow-2xl px-2">
          {COPY.hero.headline}
        </h1>
        
        <p className="text-sm md:text-xl text-gold-50/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2 md:px-0 font-light">
          {COPY.hero.subheadline}
        </p>
        
        <div className="flex flex-col items-center justify-center gap-3 animate-bounce-subtle">
          <WhatsAppButton text={COPY.hero.cta} variant="primary" className="w-full md:w-auto text-base md:text-lg py-3 md:py-4 shadow-gold-900/50 border border-white/10" />
          <p className="text-gold-200/80 text-[10px] md:text-sm font-medium tracking-wide mt-1">
            {COPY.hero.subCta}
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-12 opacity-80 text-white/60 text-[10px] md:text-sm uppercase tracking-widest">
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span> Online
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-gold-400">★</span> Alta Assertividade
            </div>
            <div className="flex items-center gap-1.5">
                <span className="text-gold-400">🔒</span> Sigilo Total
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-[calc(100%+1.3px)] h-[30px] md:h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;