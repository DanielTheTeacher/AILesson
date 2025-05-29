
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`text-2xl sm:text-3xl font-semibold mb-6 text-sky-700 ${className}`}>
      {children}
    </h2>
  );
};
