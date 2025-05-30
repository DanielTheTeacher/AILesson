import React from 'react';
// Types are effectively removed

export const ResourceLink = ({ href, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('a', {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block mt-1 mr-2 px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-xs font-medium hover:bg-teal-200 hover:text-teal-800 transition-colors"
    },
      children
    )
  );
};