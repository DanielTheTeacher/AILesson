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
      className: `bg-teal-700 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2.5' : 'py-4'}`
    },
      React.createElement('div', { className: "container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center max-w-screen-lg" },
        React.createElement('div', { className: "w-full px-4 flex flex-col sm:flex-row items-center max-w-screen-lg" },
          React.createElement('nav', { className: "flex-1 w-full flex justify-center sm:justify-start" },
            React.createElement('ul', { className: `flex flex-wrap justify-center space-x-1 sm:space-x-1.5 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm sm:text-base'}` },
              navItems.map((item) => (
                React.createElement('li', { key: item.id },
                  React.createElement('button', {
                    onClick: () => onNavClick(item.id),
                    className: `px-2 py-1 rounded-md transition-colors duration-200 ease-in-out
                      ${activeChapterId === item.id
                        ? 'bg-teal-500 text-white font-semibold shadow-sm'
                        : 'text-teal-100 hover:bg-teal-600 hover:text-white' 
                      }
                      ${isScrolled ? 'sm:px-2.5 sm:py-1.5' : 'sm:px-3 sm:py-2'}
                    `,
                    "aria-current": activeChapterId === item.id ? "page" : undefined
                  },
                    item.label
                  )
                )
              ))
            )
          ),
          React.createElement('div', { className: "flex-shrink-0 mt-3 sm:mt-0 sm:ml-8 pl-4 sm:border-l border-teal-600" },
            React.createElement('label', { htmlFor: "vocation-select", className: "sr-only" }, "Select Vocation"),
            React.createElement('select', {
              id: "vocation-select",
              value: selectedVocation,
              onChange: (e) => onVocationChange(e.target.value),
              className: `bg-teal-600 text-white border border-teal-500 rounded-md shadow-sm focus:ring-2 focus:ring-teal-400 focus:border-teal-400 text-sm ${isScrolled ? 'p-1.5 text-xs' : 'p-2.5 text-sm'} transition-all duration-300`,
              "aria-label": "Select your vocational field"
            },
              VOCATION_OPTIONS.map(vocation => (
                React.createElement('option', { key: vocation, value: vocation }, vocation)
              ))
            )
          )
        )
      )
    )
  );
};