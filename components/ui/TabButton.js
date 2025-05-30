import React from 'react';

export const TabButton = ({ onClick, isActive, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('button', {
      onClick: onClick,
      className: `px-3 py-2 text-sm rounded-t-md focus:outline-none transition-colors
        ${isActive 
          ? 'bg-white text-teal-600 border-neutral-300 border-t border-l border-r -mb-px font-semibold' 
          : 'text-neutral-500 hover:text-teal-700 hover:bg-teal-50 border-transparent font-medium'
        }`
    },
      children
    )
  );
};