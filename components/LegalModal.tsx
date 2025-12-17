import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ title, content, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
                <ShieldCheck className="text-gold-600" size={24} />
                <h3 className="text-xl font-bold font-serif text-slate-800">{title}</h3>
            </div>
            <button 
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
                <X size={24} />
            </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar bg-white">
          <div 
            className="prose prose-slate max-w-none text-slate-600 text-sm md:text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-lg transition-colors text-sm"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModal;
