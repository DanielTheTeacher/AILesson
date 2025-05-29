
import React from 'react';

export const SkillsIconWithTooltip = () => {
  return React.createElement('span', { 
    className: "ml-2 relative inline-flex items-center align-middle skills-icon-tooltip-trigger",
    title: "Connects to 'Skills' textbook" // Basic title for accessibility if CSS/JS fails
  },
    React.createElement('span', { 'aria-label': "Connects to 'Skills' textbook", role: 'img'}, '📚'),
    React.createElement('span', {
      className: "skills-icon-tooltip-text" // Styled by CSS in index.html
    }, "Connects to 'Skills' textbook")
  );
};