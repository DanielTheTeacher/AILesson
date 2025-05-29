import React from 'react';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({ children, className = '', id }) => {
  return (
    <div 
      id={id} 
      className={`bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 border border-slate-200 ${className}`}
    >
      {children}
    </div>
  );
};
