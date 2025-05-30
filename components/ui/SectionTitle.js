import React from 'react';

export const SectionTitle = ({ children, className = '' }) => { // Removed React.FC and prop types
  return (
    React.createElement('h2', { 
      className: `text-2xl sm:text-3xl font-semibold mb-8 text-teal-700 ${className}` 
    },
      children
    )
  );
};