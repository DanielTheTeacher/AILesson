
import React from 'react';
// Types are effectively removed

export const ResourceLink = ({ href, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('a', {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block px-2.5 py-1 bg-teal-100 text-teal-700 rounded-md text-xs font-medium hover:bg-teal-200 hover:text-teal-800 transition-colors text-center"
    },
      children
    )
  );
};