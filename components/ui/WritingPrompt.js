import React from 'react';

export const WritingPrompt = ({ number, children, className = '' }) => { // Removed React.FC and prop types
  return (
    React.createElement('div', { className: `mt-3 p-3 bg-neutral-100 border-l-4 border-teal-400 rounded-r-md ${className}` },
      React.createElement('p', { className: "text-sm text-neutral-800" },
        number && React.createElement('span', { className: "font-bold text-teal-600 mr-1" }, number),
        children
      )
    )
  );
};