
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-slate-700 text-sm md:text-base">{skill.name}</span>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5">
                <div 
                  className={`${skill.color} h-2.5 rounded-full transition-all duration-1000`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
