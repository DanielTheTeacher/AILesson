
import React from 'react';
import { HumanSkill } from '../../types';
import { HUMAN_SKILLS_DATA } from '../../constants';

export const HumanSkillsList: React.FC = () => {
  return (
    <div id="humanSkillsContainer" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {HUMAN_SKILLS_DATA.map((skill, index) => (
        <div key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-slate-200">
          <h4 className="font-semibold text-sky-600 mb-1">{skill.name}</h4>
          <p className="text-sm text-slate-700 leading-relaxed">{skill.desc}</p>
        </div>
      ))}
    </div>
  );
};
