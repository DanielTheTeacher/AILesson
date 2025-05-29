import React from 'react';
// Types are effectively removed, rely on JSDoc or conventions
import { VOCATION_OPTIONS } from '../../constants.js';

export const Header = ({ 
  navItems, 
  activeChapterId, 
  onNavClick,
  selectedVocation,
  onVocationChange,
  isScrolled
}) => { // Removed React.FC and prop types
  return (
    React.createElement('header', { 
      className: `bg-sky-700 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-4'}`
    },
      React.createElement('div', { className: "container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center max-w-screen-xl" },
        React.createElement('div', { className: "mb-3 sm:mb-0" },
          React.createElement('label', { htmlFor: "vocation-select", className: "sr-only" }, "Select Vocation"),
          React.createElement('select', { 
            id: "vocation-select",
            value: selectedVocation,
            onChange: (e) => onVocationChange(e.target.value), // Removed 'as Vocation'
            className: `bg-sky-600 text-white border border-sky-500 rounded-md shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-sm ${isScrolled ? 'p-1.5 text-xs' : 'p-2 text-sm'} transition-all duration-300`,
            "aria-label": "Select your vocational field" // Changed aria-label to "aria-label"
          } as any, // Cast to any to allow standard HTML attributes
            VOCATION_OPTIONS.map(vocation => (
              React.createElement('option', { key: vocation, value: vocation }, vocation)
            ))
          )
        ),
        React.createElement('nav', null,
          React.createElement('ul', { className: `flex flex-wrap justify-center space-x-1 sm:space-x-1.5 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm sm:text-base'}` },
            navItems.map((item) => (
              React.createElement('li', { key: item.id },
                React.createElement('button', {
                  onClick: () => onNavClick(item.id),
                  className: `px-2 py-1 rounded-md transition-colors duration-200 ease-in-out
                    ${activeChapterId === item.id
                      ? 'bg-sky-500 text-white font-semibold shadow-sm'
                      : 'hover:bg-sky-600 hover:text-white'
                    }
                    ${isScrolled ? 'sm:px-2 sm:py-1' : 'sm:px-3 sm:py-1.5'}
                  `,
                  "aria-current": activeChapterId === item.id ? "page" : undefined // Changed aria-current to "aria-current"
                },
                  item.label
                )
              )
            ))
          )
        )
      )
    )
  );
};