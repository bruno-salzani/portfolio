
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 overflow-hidden" aria-label="Introdução">
      {/* Elementos de Fundo com Blur Dinâmico */}
      <div className="absolute top-[15%] right-[5%] -z-10 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-[10%] left-[5%] -z-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Esquerda: Conteúdo */}
        <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-left-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
            7+ Anos de Experiência em Tecnologia
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05] text-white animate-in fade-in slide-in-from-left-4 duration-1000 delay-150">
            Qualidade em <br />
            <span className="gradient-text">Cada Linha</span><br />
            de Código.
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
            Olá, sou <span className="text-white font-bold">Bruno Salzani</span>. Ajudo empresas a entregarem softwares impecáveis através de automação estratégica e desenvolvimento robusto.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 w-full animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <a 
              href="https://www.linkedin.com/in/brunosalzani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
              title="Conectar com Bruno Salzani no LinkedIn"
            >
              <i className="ph ph-linkedin-logo text-2xl"></i>
              CONECTAR
            </a>
            <a 
              href="./curriculo.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-transparent border border-white/10 text-white rounded-2xl font-black transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
              title="Visualizar currículo de Bruno Salzani"
            >
              <i className="ph ph-file-pdf text-xl group-hover:scale-110 transition-transform"></i>
              VER CURRÍCULO
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 md:gap-12 py-8 border-t border-white/5 w-full lg:w-auto animate-in fade-in duration-1000 delay-700">
            <div>
              <div className="text-3xl font-black text-white">+7</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Anos de XP</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">15+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Projetos</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">30+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Certificados</div>
            </div>
          </div>
        </div>

        {/* Direita: Foto com Elementos Visuais */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative group">
            {/* Brilho atrás da foto */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] p-2 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] backdrop-blur-3xl shadow-2xl border border-white/10">
              <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
                <img 
                  src="https://avatars.githubusercontent.com/u/61254239?v=4" 
                  alt="Foto de perfil de Bruno Salzani - QA e Web Developer" 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              
              {/* Badges Flutuantes */}
              <div className="absolute -right-6 top-1/4 glass p-4 rounded-2xl border border-white/20 shadow-2xl animate-bounce hidden md:block" style={{animationDuration: '4s'}} aria-hidden="true">
                <i className="ph ph-bug text-3xl text-purple-400"></i>
              </div>
              <div className="absolute -left-6 bottom-1/4 glass p-4 rounded-2xl border border-white/20 shadow-2xl animate-bounce hidden md:block" style={{animationDuration: '5s'}} aria-hidden="true">
                <i className="ph ph-globe text-3xl text-blue-400"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-500 opacity-40" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
