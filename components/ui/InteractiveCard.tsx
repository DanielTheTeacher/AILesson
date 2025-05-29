import React from 'react';

export const InteractiveCard = ({ children, className = '', id }) => { // Removed React.FC and prop types
  return (
    React.createElement('div', { 
      id: id, 
      className: `bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 border border-slate-200 ${className}`
    },
      children
    )
  );
};
