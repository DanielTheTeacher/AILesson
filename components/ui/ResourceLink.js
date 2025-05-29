import React from 'react';
// Types are effectively removed

export const ResourceLink = ({ href, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('a', {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block mt-1 mr-2 px-2 py-1 bg-sky-100 text-sky-700 rounded text-xs font-medium hover:bg-sky-200 transition-colors"
    },
      children
    )
  );
};