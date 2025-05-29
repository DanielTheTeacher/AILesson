
import React from 'react';

interface SubsectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SubsectionTitle: React.FC<SubsectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-semibold mb-3 text-sky-800 ${className}`}>
      {children}
    </h3>
  );
};
