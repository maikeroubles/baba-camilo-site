import React, { useState } from 'react';
import { COPY, MENU_LINKS, LEGAL_TEXT } from '../constants';
import { Mail, Phone } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{title: string, content: string} | null>(null);

  const openPrivacy = () => setLegalModal({ title: LEGAL_TEXT.privacy.title, content: LEGAL_TEXT.privacy.content });
  const openTerms = () => setLegalModal({ title: LEGAL_TEXT.terms.title, content: LEGAL_TEXT.terms.content });
  const closeModal = () => setLegalModal(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    }
  };

  return (
    <>
    <footer className="bg-slate-950 text-slate-400 py-10 md:py-16 border-t border-slate-900 font-sans mt-auto">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            
            {/* Col 1: About */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center font-serif text-sm font-bold">BC</span>
                    <h4 className="text-xl font-serif text-gold-500 font-bold">Babá Camilo</h4>
                </div>
                <p className="text-xs md:text-sm leading-relaxed mb-4">
                    Com mais de 20 anos de iniciação, Babá Camilo utiliza a sabedoria ancestral dos Orixás para guiar caminhos e trazer prosperidade.
                </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Links Rápidos</h4>
                <ul className="space-y-2">
                    {MENU_LINKS.map(link => (
                        <li key={link.label}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="hover:text-gold-400 transition-colors text-xs md:text-sm flex items-center gap-2 cursor-pointer"
                            >
                                <span className="w-1 h-1 bg-gold-500 rounded-full"></span>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Col 3: Legal */}
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Institucional</h4>
                <ul className="space-y-2">
                    <li>
                        <button onClick={openPrivacy} className="hover:text-gold-400 transition-colors text-xs md:text-sm text-left flex items-center gap-2">
                             <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                            Política de Privacidade
                        </button>
                    </li>
                    <li>
                        <button onClick={openTerms} className="hover:text-gold-400 transition-colors text-xs md:text-sm text-left flex items-center gap-2">
                             <span className="w-1 h-1 bg-slate-600 rounded-full"></span>
                            Termos de Uso
                        </button>
                    </li>
                </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Atendimento</h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Phone className="text-gold-500 mt-0.5" size={16} />
                        <span className="text-xs md:text-sm">(12) 97602-6316<br/><span className="text-[10px] opacity-70">Seg a Sex: 09h às 19h</span></span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail className="text-gold-500" size={16} />
                        <span className="text-xs md:text-sm">contato@babacamilo.com.br</span>
                    </li>
                </ul>
            </div>

        </div>

        <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] opacity-60 text-center md:text-left">
            <p>{COPY.footer.disclaimer}</p>
            <p>&copy; {new Date().getFullYear()} Babá Camilo de Oxum.</p>
        </div>
      </div>
    </footer>

    {legalModal && (
        <LegalModal 
            title={legalModal.title} 
            content={legalModal.content} 
            onClose={closeModal} 
        />
    )}
    </>
  );
};

export default Footer;