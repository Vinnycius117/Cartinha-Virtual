import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; content: string }>>([]);
  const [backgroundHearts, setBackgroundHearts] = useState<Array<{ id: number; left: string; delay: string; content: string }>>([]);

  useEffect(() => {
    // Create background hearts
    const hearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `-${Math.random() * 15}s`,
      content: ['❤️', '💋', '💖', '💝', '💕'][Math.floor(Math.random() * 5)]
    }));
    setBackgroundHearts(hearts);
  }, []);

  const handleReveal = () => {
    setIsOpen(true);
    createFloatingElements();
    setTimeout(() => {
      setShowLetter(true);
    }, 2000);
  };

  const createFloatingElements = () => {
    const elements = [];
    const contents = ['❤️', '💋', '💖', '💝', '💕'];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 8 : 15;
    
    for (let i = 0; i < count; i++) {
      elements.push({
        id: i,
        x: Math.random() * (isMobile ? 150 : 300) - (isMobile ? 75 : 150),
        y: Math.random() * (isMobile ? 150 : 300) - (isMobile ? 75 : 150),
        content: contents[Math.floor(Math.random() * contents.length)]
      });
    }
    
    setFloatingElements(elements);
  };

  const poem = {
    title: "Minha Casa",
    verses: [
      "Em ti encontrei um porto seguro,",
      "Um amor que atravessa o tempo e o muro.",
      "Teus abraços são meu lar verdadeiro,",
      "Teu sorriso, meu céu inteiro.",
      "",
      "Escolher-te foi meu maior acerto,",
      "Um destino que veio no momento certo.",
      "Cada passo ao teu lado, uma canção,",
      "Que embala a melodia do meu coração.",
      "",
      "Carol, meu amor,",
      "És a mais bela e rara flor.",
      "Em você encontrei minha paz,",
      "E todo o amor que me satisfaz.",
      "Ao teu lado, escolhi viver,",
      "E em ti, para sempre, quero permanecer."
    ]
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 relative overflow-hidden">
      {/* Background Hearts */}
      {backgroundHearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-background"
          style={{
            left: heart.left,
            animationDelay: heart.delay
          }}
        >
          {heart.content}
        </div>
      ))}

      {/* Letter Container */}
      <div className="letter-container mt-8"> {/* Adicionei margin-top */}
        <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`}>
          <div className={`envelope ${isOpen ? 'open' : ''}`}>
            <div className="envelope-seal">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="envelope-flap"></div>
            <div className="envelope-back"></div>
          </div>
        </div>

        <button
          onClick={handleReveal}
          className={`reveal-button ${isOpen ? 'hidden' : ''} px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300 flex items-center gap-2 z-10`}
        >
          <Heart className="w-5 h-5" />
          Revelar Carta
        </button>
        
        <div className={`letter-paper ${showLetter ? 'show' : ''}`}>
          <div className="poem-content">
            <h1 className="poem-title font-great-vibes">{poem.title}</h1>
            <div className="poem-text font-great-vibes">
              {poem.verses.map((verse, index) => (
                <React.Fragment key={index}>
                  {verse || <br />}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      {isOpen && floatingElements.map((element) => (
        <div
          key={element.id}
          className="floating-element text-2xl"
          style={{
            '--tx': `${element.x}px`,
            '--ty': `${element.y}px`,
            '--r': `${Math.random() * 360}deg`,
            right: '10%',
            bottom: '10%'
          } as React.CSSProperties}
        >
          {element.content}
        </div>
      ))}

      {/* Footer */}
      <footer className="w-full text-center py-4 mt-auto">
      </footer>
    </div>
  );
}