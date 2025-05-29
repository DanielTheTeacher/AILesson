
import React from 'react';

interface WritingPromptProps {
  number?: string;
  children: React.ReactNode;
  className?: string;
}

export const WritingPrompt: React.FC<WritingPromptProps> = ({ number, children, className = '' }) => {
  return (
    <div className={`mt-3 p-3 bg-slate-50 border-l-4 border-sky-400 rounded-r-md ${className}`}>
      <p className="text-sm text-slate-800">
        {number && <span className="font-bold text-sky-600 mr-1">{number}</span>}
        {children}
      </p>
    </div>
  );
};
