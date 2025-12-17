import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const BackgroundSound: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false); // Estado para saber se o autoplay foi bloqueado
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // URL de uma música ambiente tranquila (Royalty Free - Nature/Ambient)
  // Fonte: Pixabay (Water/Meditation)
  const AUDIO_URL = "https://cdn.pixabay.com/download/audio/2022/02/07/audio_1808fbf07a.mp3?filename=water-stream-113401.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1; // Volume bem baixo (10%) conforme solicitado

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsBlocked(false);
          })
          .catch((error) => {
            // Autoplay bloqueado pelo navegador
            console.log("Autoplay prevented by browser, waiting for interaction.");
            setIsPlaying(false);
            setIsBlocked(true);
          });
      }
    }

    // Tenta iniciar o áudio no primeiro clique do usuário se estiver bloqueado
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
            setIsBlocked(false);
        }).catch(e => console.error(e));
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    if (isBlocked) {
        window.addEventListener('click', handleFirstInteraction);
    }
    
    return () => {
        window.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <audio ref={audioRef} src={AUDIO_URL} loop preload="auto" />
      
      <button
        onClick={toggleSound}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border border-white/20 ${
          isPlaying 
            ? 'bg-gold-500/80 text-white hover:bg-gold-600' 
            : 'bg-slate-900/60 text-white/70 hover:bg-slate-900/80'
        }`}
        aria-label="Controle de Som Ambiente"
      >
        {isPlaying ? (
          <>
            <Volume2 size={20} className="animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Som Ambiente</span>
          </>
        ) : (
          <>
            <VolumeX size={20} />
            <span className="text-xs font-bold uppercase tracking-wider hidden md:block">Ativar Som</span>
          </>
        )}
      </button>

      {/* Dica visual inicial se estiver tocando */}
      {isPlaying && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
      )}
    </div>
  );
};

export default BackgroundSound;