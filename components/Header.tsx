import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MENU_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to target
    const targetId = href.substring(1); // remove '#'
    if (targetId === 'home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(targetId);
        if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Logo Area */}
        <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2 cursor-pointer"
        >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm border-2 transition-colors ${isScrolled ? 'bg-gold-500 text-white border-gold-500' : 'bg-transparent text-white border-white/50 group-hover:bg-gold-500 group-hover:border-gold-500'}`}>
                BC
            </div>
            <div className={`font-serif font-bold text-lg leading-tight transition-colors ${isScrolled ? 'text-gold-600' : 'text-white'}`}>
                Babá Camilo<br/>
                <span className={`text-xs font-sans font-normal uppercase tracking-wider ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>de Oxum</span>
            </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
            {MENU_LINKS.map((link) => (
                <a 
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-bold uppercase tracking-wider hover:text-gold-500 transition-colors cursor-pointer ${
                        isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
                    }`}
                >
                    {link.label}
                </a>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
            <a 
                href="https://wa.me/5512976026316?text=Olá, quero agendar"
                target="_blank"
                rel="noreferrer" 
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all hover:shadow-lg transform hover:-translate-y-0.5 ${
                    isScrolled 
                    ? 'bg-gold-500 text-white hover:bg-gold-600' 
                    : 'bg-white text-gold-600 hover:bg-gold-50'
                }`}
            >
                Agendar Agora
            </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
        >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
          <nav className="flex flex-col p-6 gap-4">
            {MENU_LINKS.map((link) => (
                <a 
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-700 font-bold text-lg py-2 border-b border-slate-100 hover:text-gold-500 cursor-pointer"
                >
                    {link.label}
                </a>
            ))}
             <a 
                href="https://wa.me/5512976026316?text=Olá, quero agendar"
                target="_blank"
                rel="noreferrer" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gold-500 text-white text-center py-3 rounded-lg font-bold mt-4"
            >
                Agendar Consulta
            </a>
          </nav>
      </div>
    </header>
  );
};

export default Header;