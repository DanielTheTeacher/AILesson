import React from 'react';

export const WritingPrompt = ({ number, children, className = '' }) => { // Removed React.FC and prop types
  return (
    React.createElement('div', { className: `mt-3 p-3 bg-slate-50 border-l-4 border-sky-400 rounded-r-md ${className}` },
      React.createElement('p', { className: "text-sm text-slate-800" },
        number && React.createElement('span', { className: "font-bold text-sky-600 mr-1" }, number),
        children
      )
    )
  );
};
