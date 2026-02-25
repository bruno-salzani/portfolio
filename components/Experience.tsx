
import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <div className="flex flex-col gap-12">
      {EXPERIENCES.map((exp, index) => (
        <div 
          key={index} 
          className="relative pl-8 md:pl-12 border-l border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Dot on the timeline */}
          <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-black text-white mb-1">{exp.role}</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold">
                <span className="text-blue-400 uppercase tracking-wider">{exp.company}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{exp.type}</span>
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-sm font-black text-slate-200 mb-1 uppercase tracking-tighter">
                {exp.period}
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                {exp.duration}
              </div>
            </div>
          </div>

          <div className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-tight flex items-center gap-2">
            <i className="ph ph-map-pin"></i>
            {exp.location}
          </div>

          <ul className="space-y-4">
            {exp.description.map((item, i) => {
              const [title, ...rest] = item.split(':');
              return (
                <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-1.5">•</span>
                  <p className="text-sm md:text-base">
                    <span className="text-slate-200 font-bold">{title}:</span>
                    {rest.join(':')}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
