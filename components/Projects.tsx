
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20 bg-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-slate-900">Projetos em Destaque</h2>
            <p className="text-slate-500">Uma seleção do meu trabalho mais recente no GitHub.</p>
          </div>
          <a href="https://github.com/bruno-salzani?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            Ver tudo no GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 font-mono">
                  {project.date}
                </span>
              </div>
              
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 flex items-center hover:text-blue-600 transition-colors"
                  >
                    Ver Código
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
