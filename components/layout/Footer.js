
import React from 'react';

export const Footer = ({ onNavigateToDisclaimer }) => { // Added onNavigateToDisclaimer prop
  const handleDisclaimerClick = (e) => {
    e.preventDefault();
    if (onNavigateToDisclaimer) {
      onNavigateToDisclaimer();
    }
  };

  return (
    React.createElement('footer', { className: "bg-neutral-800 text-neutral-300 text-center p-6 mt-auto" },
      React.createElement('p', { className: "text-sm" }, "\u00A9 2025 - Daniel the Teacher"),
      React.createElement('p', { className: "text-xs mt-1" }, 
        React.createElement('button', {
          onClick: handleDisclaimerClick,
          className: "text-neutral-300 hover:text-teal-300 underline focus:outline-none focus:ring-1 focus:ring-teal-400 rounded",
          'aria-label': "Gå til Disclaimer-siden" // Updated aria-label
        }, "Disclaimer") // Updated text
      )
    )
  );
};