import React, { useState } from 'react';
import { Menu, X, CircleUserRound, MessageCircle } from 'lucide-react';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Mapa Corporal', href: '#body-map' },
    { label: 'Especializações', href: '#specializations' },
    { label: 'Saiba Mais Sobre Nós', href: '#about' },
  ];

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 pt-6 sm:px-8 sm:pt-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 256 256"
              className="w-8 h-8 md:w-9 md:h-9 fill-white"
            >
              <path d="M 128 128 C 198.692 128 256 185.308 256 256 L 151.883 256 C 149.812 220.307 120.213 192 84 192 C 47.787 192 18.188 220.307 16.117 256 L 0 256 C 0 185.308 57.308 128 128 128 Z M 104.117 0 C 106.188 35.694 135.787 64 172 64 C 208.213 64 237.812 35.694 239.883 0 L 256 0 C 256 70.692 198.692 128 128 128 C 57.308 128 0 70.692 0 0 Z" />
            </svg>
            <span className="text-white font-medium text-sm md:text-base hidden sm:inline">
              FisioClínica
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="liquid-glass rounded-full px-8 py-3">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-sm font-medium transition-opacity duration-300 ${
                      link.label === 'Início'
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
            <button className="liquid-glass h-10 w-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              <MessageCircle className="h-5 w-5 text-white/80" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden liquid-glass h-10 w-10 rounded-full flex items-center justify-center relative z-50"
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                className={`absolute inset-0 w-5 h-5 text-white transition-all duration-300 ${
                  menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/80 backdrop-blur-xl transition-all duration-500 ease-out ${
          menuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ease-out ${
            menuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-2xl font-medium text-white hover:text-white/80 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 mt-4">
            <div className="liquid-glass rounded-full p-2">
              <CircleUserRound className="h-6 w-6 text-white/60" />
            </div>
            <span className="text-sm font-light text-white/60">Conta</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
