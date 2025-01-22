
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Home from './pages/Home';
import Letter from './pages/Letter';
import Photos from './pages/Photos';
import Poems from './pages/Poems';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-pink-500 relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="floating-hearts" aria-hidden="true"></div>
        
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <Heart className="h-6 w-6 text-pink-200" />
                  <span className="ml-2 text-xl font-great-vibes text-white">Nossa História</span>
                </Link>
              </div>
              <div className="flex space-x-8">
                <Link to="/" className="text-white hover:text-pink-200 transition-colors">
                  Início
                </Link>
                <Link to="/letter" className="text-white hover:text-pink-200 transition-colors">
                  Carta
                </Link>
                <Link to="/photos" className="text-white hover:text-pink-200 transition-colors">
                  Nossas Fotos
                </Link>
                <Link to="/poems" className="text-white hover:text-pink-200 transition-colors">
                  Poemas
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/letter" element={<Letter />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/poems" element={<Poems />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full bg-white/10 backdrop-blur-sm border-t border-white/20 py-4">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <p className="font-great-vibes text-xl">Feito com todo meu amor, Vinny</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;