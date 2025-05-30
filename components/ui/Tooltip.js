import React from 'react';

export const Tooltip = ({ text, children }) => { // Removed React.FC and prop types
  return (
    React.createElement('span', { className: "tooltip-custom relative inline-block cursor-help text-teal-500 font-semibold border-b border-dotted border-teal-500" },
      children,
      React.createElement('span', { className: "tooltip-text-custom" }, text)
    )
  );
};