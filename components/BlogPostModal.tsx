import React, { useEffect } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

interface BlogPostModalProps {
  post: Post;
  onClose: () => void;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ post, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
        
        {/* Header Image */}
        <div className="relative h-48 md:h-64 flex-shrink-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-md"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl md:text-3xl font-serif font-bold leading-tight drop-shadow-lg">
              {post.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
          
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
             <div className="flex items-center gap-1">
                <Calendar size={14} /> <span>Atualizado recentemente</span>
             </div>
             <div className="flex items-center gap-1">
                <Clock size={14} /> <span>Leitura de 3 min</span>
             </div>
          </div>

          <div 
            className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Inline CTA */}
          <div className="mt-10 bg-gold-50 p-6 rounded-xl border border-gold-200 text-center">
            <h4 className="font-bold text-gold-800 text-lg mb-2">Gostou desse conteúdo?</h4>
            <p className="text-slate-600 mb-4 text-sm">
              Não deixe para depois. Se você se identificou com esse texto, os Búzios podem confirmar o caminho para sua vitória.
            </p>
            <WhatsAppButton text="Quero saber mais sobre meu caso" variant="secondary" className="w-full justify-center !bg-green-600 hover:!bg-green-500" />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col md:flex-row gap-3 justify-between items-center flex-shrink-0">
          <span className="text-xs text-slate-500 hidden md:block">Escrito por Babá Camilo</span>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 font-bold text-sm underline md:no-underline px-4"
          >
            Fechar
          </button>
          <WhatsAppButton text="Agendar Consulta" variant="secondary" className="!py-2 !px-6 w-full md:w-auto text-sm" />
        </div>

      </div>
    </div>
  );
};

export default BlogPostModal;
