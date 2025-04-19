
import React from 'react';
import { personalData } from '@/data/personal';

export const SkillsSection = () => {
  return (
    <section className="space-y-8 my-16">
      <h2 className="text-3xl font-bold text-gradient text-center">Skills</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gradient">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {personalData.skills.technical.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gradient">Design Skills</h3>
          <div className="flex flex-wrap gap-2">
            {personalData.skills.design.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gradient">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {personalData.skills.soft.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
