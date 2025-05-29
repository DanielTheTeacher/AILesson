import React from 'react';

export const Footer = () => { // Removed React.FC
  return (
    React.createElement('footer', { className: "bg-slate-800 text-slate-300 text-center p-6 mt-auto" },
      React.createElement('p', { className: "text-sm" }, "\u00A9 2025 - Daniel the Teacher"),
      React.createElement('p', { className: "text-xs mt-1" }, "Created for demonstration purposes.")
    )
  );
};