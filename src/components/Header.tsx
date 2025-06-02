import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Ghost, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <Ghost className="h-8 w-8 text-[#0ff] mr-2" />
            <h1 className="text-2xl font-bold glitch-effect" data-text="GHOST.LOG">
              <span className="text-white">GHOST</span>
              <span className="text-[#0ff]">.LOG</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-sm uppercase tracking-wider hover:text-[#0ff]">
              Home
            </Link>
            <div className="relative group">
              <button className="nav-link text-sm uppercase tracking-wider hover:text-[#0ff] flex items-center">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 border border-[#0ff]/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link to="/?category=cybernetics" className="block px-4 py-2 text-sm hover:bg-[#0ff]/10 hover:text-[#0ff]">
                    Cybernetics
                  </Link>
                  <Link to="/?category=ai" className="block px-4 py-2 text-sm hover:bg-[#0ff]/10 hover:text-[#0ff]">
                    Artificial Intelligence
                  </Link>
                  <Link to="/?category=cyberspace" className="block px-4 py-2 text-sm hover:bg-[#0ff]/10 hover:text-[#0ff]">
                    Cyberspace
                  </Link>
                  <Link to="/?category=security" className="block px-4 py-2 text-sm hover:bg-[#0ff]/10 hover:text-[#0ff]">
                    Security
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="nav-link text-sm uppercase tracking-wider hover:text-[#0ff]">
              About
            </Link>
          </nav>
          
          <button 
            className="cyber-button hidden md:block"
            onClick={() => alert('Subscribe feature coming soon!')}
          >
            SUBSCRIBE
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#0ff]" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-[#0ff]/30 cyber-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="nav-link text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <details className="group">
              <summary className="nav-link text-sm uppercase tracking-wider py-2 cursor-pointer list-none flex items-center">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </summary>
              <div className="mt-2 pl-4 border-l border-[#0ff]/30 space-y-2">
                <Link 
                  to="/?category=cybernetics" 
                  className="block py-1 text-sm hover:text-[#0ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cybernetics
                </Link>
                <Link 
                  to="/?category=ai" 
                  className="block py-1 text-sm hover:text-[#0ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artificial Intelligence
                </Link>
                <Link 
                  to="/?category=cyberspace" 
                  className="block py-1 text-sm hover:text-[#0ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cyberspace
                </Link>
                <Link 
                  to="/?category=security" 
                  className="block py-1 text-sm hover:text-[#0ff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Security
                </Link>
              </div>
            </details>
            <Link 
              to="/about" 
              className="nav-link text-sm uppercase tracking-wider py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button 
              className="cyber-button self-start mt-2"
              onClick={() => {
                alert('Subscribe feature coming soon!');
                setIsMenuOpen(false);
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;