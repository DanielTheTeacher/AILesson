
import React from 'react';

export const Tooltip = ({ text, children, type = 'definition' }) => { // Added type prop, default to 'definition'
  const tooltipTextClass = type === 'footnote' ? "tooltip-text-footnote-custom" : "tooltip-text-custom";
  return (
    React.createElement('span', { className: "tooltip-custom relative inline-block cursor-help text-teal-500 font-semibold border-b border-dotted border-teal-500" },
      children,
      React.createElement('span', { className: tooltipTextClass }, text)
    )
  );
};
