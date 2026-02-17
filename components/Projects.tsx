
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'QA' | 'Web' | 'Other'>('All');

  const filteredProjects = PROJECTS.filter(p => activeTab === 'All' || p.category === activeTab);

  const getGenericDescription = (category: string) => {
    switch(category) {
      case 'QA': return 'Repositório com implementações modernas e foco em estratégias de teste automatizado.';
      case 'Web': return 'Repositório com foco em arquitetura de software web e desenvolvimento full-stack.';
      default: return 'Projeto diversificado explorando novas tecnologias, cibersegurança e desenvolvimento especializado.';
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {(['All', 'QA', 'Web', 'Other'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all border ${
              activeTab === tab 
              ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/30 scale-105' 
              : 'bg-white/5 border-white/10 text-slate-500 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab === 'All' ? 'VER TODOS' : tab === 'QA' ? 'QUALIDADE / QA' : tab === 'Web' ? 'DESENVOLVIMENTO WEB' : 'OUTROS'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <a 
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col p-8 rounded-[2rem] bg-[#111114] border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-lg ${
                  project.category === 'QA' ? 'bg-purple-500/10 text-purple-400' : 
                  project.category === 'Web' ? 'bg-blue-500/10 text-blue-400' : 
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  <i className={`ph ${
                    project.category === 'QA' ? 'ph-check-square-offset' : 
                    project.category === 'Web' ? 'ph-brackets-curly' : 
                    'ph-cube'
                  } text-2xl`}></i>
                </div>
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 bg-white/5 px-4 py-1.5 rounded-full uppercase">{project.date}</span>
              </div>

              <h4 className="text-xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-sm text-slate-500 mb-8 line-clamp-3 leading-relaxed">
                {project.description || getGenericDescription(project.category)}
              </p>
              
              <div className="mt-auto flex items-center text-xs font-black tracking-widest text-slate-400 group-hover:text-blue-400 transition-all uppercase">
                Explorar Código
                <i className="ph ph-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
