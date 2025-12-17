import React, { useState, useEffect } from 'react';
import { COPY } from '../constants';
import { BookOpen, ArrowRight, Search, Calendar, Tag } from 'lucide-react';
import BlogPostModal from '../components/BlogPostModal';
import WhatsAppButton from '../components/WhatsAppButton';

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof COPY.blog.posts[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = COPY.blog.posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      
      {/* Blog Hero */}
      <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gold-900/20 z-0"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold-500 rounded-full blur-[100px] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/50 px-4 py-1 rounded-full mb-6">
                <BookOpen size={16} className="text-gold-400" />
                <span className="text-sm font-bold text-gold-100 uppercase tracking-widest">Portal de Conhecimento</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-xl">
                Sabedoria dos Orixás
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Artigos profundos sobre espiritualidade, amarrações, limpeza e prosperidade. 
                Entenda o mundo invisível que governa sua vida.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 relative">
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="O que você procura? (Ex: Amor, Inveja, Banhos...)" 
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-slate-200 shadow-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all text-slate-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
                <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full border border-slate-100 hover:border-gold-300 hover:-translate-y-1"
                onClick={() => setSelectedPost(post)}
                >
                <div className="relative h-56 overflow-hidden">
                    <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                        <span className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <Tag size={10} /> Artigo
                        </span>
                    </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-gold-600 transition-colors leading-tight font-serif">
                    {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                    </p>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <Calendar size={12} /> Leitura rápida
                        </span>
                        <div className="flex items-center text-gold-600 font-bold text-sm uppercase tracking-wide group/btn">
                        Ler Agora
                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
                </article>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <p className="text-slate-500 text-lg mb-4">Nenhum artigo encontrado para sua busca.</p>
                <button 
                    onClick={() => setSearchTerm("")}
                    className="text-gold-600 font-bold hover:underline"
                >
                    Ver todos os artigos
                </button>
            </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Sente que precisa de uma orientação pessoal?</h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Os artigos trazem conhecimento, mas o Jogo de Búzios traz a revelação específica para o seu destino. Não fique na dúvida.</p>
                <div className="flex justify-center">
                    <WhatsAppButton text="Agendar Consulta com Babá Camilo" variant="secondary" className="!bg-gold-500 hover:!bg-gold-400" />
                </div>
            </div>
        </div>

      </div>

      {/* Modal Rendering */}
      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </div>
  );
};

export default BlogPage;