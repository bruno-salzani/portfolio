
import React from 'react';
import { TECH_STACK } from '../constants';

export const Skills: React.FC = () => {
  const SkillCard = ({ title, items, colorClass, icon }: { title: string, items: string[], colorClass: string, icon: string }) => (
    <div className="glass p-8 rounded-3xl hover:translate-y-[-8px] transition-all duration-500 group card-gradient">
      <div className={`w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorClass}`}>
        <i className={`ph ${icon} text-2xl`}></i>
      </div>
      <h3 className={`text-xl font-bold mb-4 text-white`}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-sm text-slate-400 group-hover:text-slate-200 group-hover:border-white/10 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <SkillCard 
        title="Linguagens" 
        items={TECH_STACK.languages} 
        colorClass="text-blue-400" 
        icon="ph-code"
      />
      <SkillCard 
        title="Automação" 
        items={TECH_STACK.automation} 
        colorClass="text-purple-400" 
        icon="ph-robot"
      />
      <SkillCard 
        title="CI/CD & DevOps" 
        items={TECH_STACK.devops} 
        colorClass="text-green-400" 
        icon="ph-rocket-launch"
      />
      <SkillCard 
        title="Gestão Ágil" 
        items={TECH_STACK.agile} 
        colorClass="text-orange-400" 
        icon="ph-users-three"
      />
    </div>
  );
};
