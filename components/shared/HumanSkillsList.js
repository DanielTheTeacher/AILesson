import React from 'react';
// HumanSkill type removed
import { HUMAN_SKILLS_DATA } from '../../constants.js';

export const HumanSkillsList = () => { // Removed React.FC
  return (
    React.createElement('div', { id: "humanSkillsContainer", className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4" },
      HUMAN_SKILLS_DATA.map((skill, index) => (
        React.createElement('div', { key: index, className: "p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-neutral-200" },
          React.createElement('h4', { className: "font-semibold text-teal-600 mb-1" }, skill.name),
          React.createElement('p', { className: "text-sm text-neutral-700 leading-relaxed" }, skill.desc)
        )
      ))
    )
  );
};