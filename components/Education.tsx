
import React, { useState } from 'react';
import { STUDIES } from '../constants';
import { StudyCategory } from '../types';

const CategoryCard: React.FC<{ category: StudyCategory }> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden bg-white mb-4 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <svg 
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-bold text-slate-800 flex items-center gap-2">
            {category.title}
            <span className="bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full font-mono">
              {category.courses.length}
            </span>
          </span>
        </div>
        <span className="text-xs text-slate-400 font-medium">
          {isOpen ? 'Recolher' : 'Expandir'}
        </span>
      </button>
      
      {isOpen && (
        <div className="border-t border-slate-100 divide-y divide-slate-100 bg-slate-50/30">
          {category.courses.map((course, idx) => (
            <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900 leading-tight">
                  {course.title}
                </span>
                <span className="text-xs text-slate-500">
                  {course.institution}
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded whitespace-nowrap self-start sm:self-center">
                {course.date}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-100/50 border-y border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Meus Estudos
          </h2>
          <p className="text-slate-500">Documentação detalhada da minha trajetória de aprendizado técnico e profissional.</p>
        </div>

        <div className="space-y-4">
          {STUDIES.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-4">
          <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-blue-800">
            Clique nas categorias acima para expandir ou recolher a lista completa de cursos e certificações obtidas na Alura, Senac, Inspand e outras instituições.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
