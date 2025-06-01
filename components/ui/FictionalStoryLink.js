
import React from 'react';

// Helper function to render difficulty bar
const DifficultyBar = ({ level }) => { // level is 1, 2, or 3
  return (
    React.createElement('div', { className: "flex items-center" },
      React.createElement('span', { className: "text-xs mr-1.5 font-medium text-neutral-300" }, "Difficulty:"),
      React.createElement('div', { className: "flex space-x-1" },
        [1, 2, 3].map(val => (
          React.createElement('div', {
            key: val,
            className: `w-6 h-3 rounded-sm border border-neutral-500 ${val <= level ? 'bg-sky-500' : 'bg-neutral-600'}`
          })
        ))
      )
    )
  );
};

export const FictionalStoryLink = ({ href, title, author, summary, theme, difficulty, length, readingTime }) => {
  const uniqueId = React.useId(); 

  return (
    React.createElement('div', { className: "fictional-story-link-container relative group mb-2" }, // Added mb-2 for spacing between links if multiple
      React.createElement('a', {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "block w-full px-4 py-2.5 bg-sky-100 text-sky-700 rounded-md text-sm font-semibold hover:bg-sky-200 hover:text-sky-800 transition-colors duration-150 text-left focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-500 focus:ring-offset-white",
        'aria-describedby': `tooltip-${uniqueId}`
      },
        `Read relevant fiction: "${title}" by ${author}`
      ),
      React.createElement('div', {
        id: `tooltip-${uniqueId}`,
        role: 'tooltip',
        // Tailwind classes for visibility, positioning, and styling:
        // hidden group-hover:block group-focus-within:block (for visibility)
        // absolute z-20 (for positioning)
        // w-80 sm:w-96 (width)
        // p-3 bg-neutral-800 text-white text-xs rounded-md shadow-lg (styling)
        // opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 (smooth transition)
        // transition-opacity duration-300 (transition timing)
        // pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto (mouse interaction)
        // left-0 mt-1 (position below button)
        // transform translate-y-1 group-hover:translate-y-0 group-focus-within:translate-y-0 (slight move up effect)
        className: "fictional-story-tooltip hidden group-hover:block group-focus-within:block absolute z-20 w-80 sm:w-96 p-4 bg-neutral-800 text-neutral-100 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto left-0 mt-1.5"
      },
        React.createElement('h4', { className: "font-bold text-base mb-1.5 text-sky-300" }, title),
        React.createElement('p', { className: "mb-2 leading-relaxed" }, React.createElement('strong', { className: "text-neutral-300" }, "Summary: "), summary),
        React.createElement('p', { className: "mb-2 leading-relaxed" }, React.createElement('strong', { className: "text-neutral-300" }, "Key Theme: "), theme),
        React.createElement(DifficultyBar, { level: difficulty }),
        React.createElement('div', { className: "flex justify-between mt-2.5 pt-2 border-t border-neutral-700 text-neutral-400" },
          React.createElement('span', null, "Length: ", length),
          React.createElement('span', null, "Read time: ", readingTime)
        )
      )
    )
  );
};
