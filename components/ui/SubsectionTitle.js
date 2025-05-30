
import React from 'react';
import { SkillsIconWithTooltip } from './SkillsIconWithTooltip.js'; // Import the new component

export const SubsectionTitle = ({ children, className = '', hasSkillsIcon = false }) => { 
  return React.createElement('h3', { 
      className: `text-xl font-semibold mb-4 text-teal-800 flex items-center ${className}` 
    },
    children,
    hasSkillsIcon && React.createElement(SkillsIconWithTooltip, null) // Conditionally render the icon
  );
};