import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLeadForm } from '../LeadContext';

interface WhatsAppButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'floating';
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ text, variant = 'primary', className = '' }) => {
  const { openForm } = useLeadForm();
  
  const baseStyles = "transition-all duration-300 font-bold flex items-center justify-center gap-2 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer";
  
  const variants = {
    primary: "bg-green-600 hover:bg-green-500 text-white py-4 px-8 text-lg w-full md:w-auto uppercase tracking-wide",
    secondary: "bg-gold-500 hover:bg-gold-400 text-white py-3 px-6 text-base w-full md:w-auto",
    floating: "fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl animate-bounce-slow"
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openForm();
  };

  if (variant === 'floating') {
    return (
      <button 
        onClick={handleClick}
        className={variants.floating}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </button>
    );
  }

  return (
    <button 
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      {text}
    </button>
  );
};

export default WhatsAppButton;