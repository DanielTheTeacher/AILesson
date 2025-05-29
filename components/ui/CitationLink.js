
import React from 'react';

export const CitationLink = ({ referenceId, text }) => { // Removed React.FC and prop types
  return (
    React.createElement('sup', { 
      className: "text-xs align-super text-gray-400 hover:text-gray-500 font-normal ml-px cursor-pointer", 
      title: `Reference ${text}` 
    },
      React.createElement('a', { 
        href: `#${referenceId}`, 
        onClick: (e) => e.preventDefault(), 
        className: "text-gray-400 no-underline hover:underline" 
      }, // Removed 'as any'
        text
      )
    )
  );
};