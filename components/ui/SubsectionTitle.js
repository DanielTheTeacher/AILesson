import React from 'react';

export const SubsectionTitle = ({ children, className = '' }) => { // Removed React.FC and prop types
  return (
    React.createElement('h3', { 
      className: `text-xl font-semibold mb-3 text-sky-800 ${className}` 
    },
      children
    )
  );
};