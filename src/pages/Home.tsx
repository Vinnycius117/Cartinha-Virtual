import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  
  

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-5xl md:text-7xl font-great-vibes text-white text-center mb-8">
        Minha Carta de Amor para Carol
      </h1>
      
      <div className="max-w-2xl text-center mb-12">
        <p className="text-xl text-white/90 leading-relaxed">
          Bem-vinda ao nosso mundo, Meu Amor.
          Aqui guardo cada momento nosso e cada palavra que vêm direto do coração. Sempre atualizaremos cada foto, cada poema e cada cartinha.
        </p>
      </div>

      <button
        onClick={() => navigate('/letter')}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-full overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
        <Heart className="w-5 h-5 mr-2 relative z-10" />
        <span className="relative z-10">Ler a Carta</span>
      </button>
    </div>
  );
}