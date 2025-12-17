import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ChevronDown } from 'lucide-react';
import { FORM_OPTIONS, WHATSAPP_NUMBER } from '../constants';
import { useLeadForm } from '../LeadContext';

const LeadFormModal: React.FC = () => {
  const { isFormOpen, closeForm } = useLeadForm();
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fecha o modal com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeForm();
    };
    if (isFormOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen, closeForm]);

  if (!isFormOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Olá Babá Camilo. Me chamo ${name}. Gostaria de saber mais sobre ${service}.`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Pequeno delay para feedback visual
    setTimeout(() => {
        window.open(whatsappLink, '_blank');
        setIsSubmitting(false);
        closeForm();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeForm}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-gold-300">
        
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
            <div>
                <h3 className="text-xl font-serif font-bold text-slate-800">Fale com Babá Camilo</h3>
                <p className="text-xs text-slate-500 mt-1">Atendimento Rápido via WhatsApp</p>
            </div>
            <button 
                onClick={closeForm}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-200"
            >
                <X size={24} />
            </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Seu Nome</label>
                <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-slate-800"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-8 relative">
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Como podemos ajudar?</label>
                <div className="relative">
                    <select 
                        id="service"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-200 outline-none transition-all text-slate-800 appearance-none bg-white cursor-pointer"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    >
                        <option value="" disabled>Selecione uma opção...</option>
                        {FORM_OPTIONS.map((opt, idx) => (
                            <option key={idx} value={opt}>{opt}</option>
                        ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                </div>
            </div>

            <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isSubmitting ? 'bg-slate-400 cursor-wait' : 'bg-green-600 hover:bg-green-500'}`}
            >
                {isSubmitting ? (
                    "Direcionando..."
                ) : (
                    <>
                        <MessageCircle size={24} />
                        Chamar no WhatsApp
                    </>
                )}
            </button>
            
            <p className="text-center text-xs text-slate-400 mt-4">
                Ao clicar, você será redirecionado para o WhatsApp com uma mensagem pronta.
            </p>
        </form>

      </div>
    </div>
  );
};

export default LeadFormModal;