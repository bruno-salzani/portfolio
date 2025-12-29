
import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-12 md:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://github.com/bruno-salzani.png" 
            alt="Foto de perfil de Bruno Salzani - Desenvolvedor Web Full Stack" 
            className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/bruno/400";
            }}
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">Desenvolvedor Web Full Stack Freelancer</h2>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Olá, eu sou o <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Bruno Salzani</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Especialista em <strong>desenvolvimento web</strong> com foco em criar soluções digitais performáticas e experiências de usuário memoráveis usando React e TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              title="Entrar em contato com Bruno Salzani"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all font-bold shadow-lg shadow-blue-200"
            >
              Fazer Orçamento
            </a>
            <a 
              href="https://github.com/bruno-salzani/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Ver repositórios no GitHub de Bruno Salzani"
              className="inline-flex items-center justify-center border border-slate-300 px-8 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all font-medium bg-white/50 cursor-pointer"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
