
import React from 'react';

interface TabButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

export const TabButton: React.FC<TabButtonProps> = ({ onClick, isActive, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm font-medium rounded-t-md focus:outline-none transition-colors
        ${isActive 
          ? 'bg-white text-sky-600 border-slate-300 border-t border-l border-r -mb-px' 
          : 'text-slate-500 hover:text-sky-600 hover:bg-slate-50 border-transparent'
        }`}
    >
      {children}
    </button>
  );
};
