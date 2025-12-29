
import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a 
          href="#top" 
          onClick={(e) => handleScroll(e, 'top')} 
          className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight shrink-0 cursor-pointer"
        >
          Bruno<span className="text-blue-600">.</span>Salzani
        </a>
        
        {/* Menu Desktop */}
        <div className="hidden lg:flex space-x-8 font-medium text-slate-600">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-blue-600 transition-colors">Sobre</a>
          <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-blue-600 transition-colors">Portfólio</a>
          <a href="#education" onClick={(e) => handleScroll(e, 'education')} className="hover:text-blue-600 transition-colors">Trajetória</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-blue-600 transition-colors">Contato</a>
        </div>

        <a 
          href="https://wa.me/5519987096082" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 whitespace-nowrap"
        >
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
