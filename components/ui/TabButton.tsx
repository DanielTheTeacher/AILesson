import React from 'react';

export const TabButton = ({ onClick, isActive, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('button', {
      onClick: onClick,
      className: `px-3 py-2 text-sm font-medium rounded-t-md focus:outline-none transition-colors
        ${isActive 
          ? 'bg-white text-sky-600 border-slate-300 border-t border-l border-r -mb-px' 
          : 'text-slate-500 hover:text-sky-600 hover:bg-slate-50 border-transparent'
        }`
    },
      children
    )
  );
};
