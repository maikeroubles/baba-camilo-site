import React, { useState } from 'react';
import { COPY } from '../constants';
import { BookOpen, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import BlogPostModal from './BlogPostModal';

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof COPY.blog.posts[0] | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Mostra apenas os 3 primeiros se showAll for falso
  const displayedPosts = showAll ? COPY.blog.posts : COPY.blog.posts.slice(0, 3);

  return (
    <section className="py-10 md:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2 text-gold-600">
                <BookOpen size={20} />
                <span className="font-bold uppercase tracking-wider text-xs">Conteúdo Espiritual</span>
            </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
            {COPY.blog.title}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            {COPY.blog.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {displayedPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full border border-slate-100 hover:border-gold-300"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-gold-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-gold-600 font-bold text-xs uppercase tracking-wide mt-auto group/btn">
                  Ler Artigo 
                  <ArrowRight size={14} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-gold-600 text-gold-700 hover:bg-gold-600 hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300 uppercase tracking-wide text-xs md:text-sm"
            >
                {showAll ? (
                    <>Ver Menos <ChevronUp size={16} /></>
                ) : (
                    <>Ver Mais Artigos <ChevronDown size={16} /></>
                )}
            </button>
        </div>
      </div>

      {selectedPost && (
        <BlogPostModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}
    </section>
  );
};

export default BlogSection;