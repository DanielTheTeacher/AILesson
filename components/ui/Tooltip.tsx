
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  return (
    <span className="tooltip-custom relative inline-block cursor-help text-sky-500 font-semibold border-b border-dotted border-sky-500">
      {children}
      <span className="tooltip-text-custom">
        {text}
      </span>
    </span>
  );
};
