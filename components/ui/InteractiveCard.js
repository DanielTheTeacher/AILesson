
import React from 'react';

/**
 * @typedef {object} InteractiveCardProps
 * @property {React.ReactNode} children - The content of the card.
 * @property {string} [className] - Optional CSS classes for the card.
 * @property {string} [id] - Optional HTML ID for the card. If present, it must be a string.
 */

/**
 * A card component for displaying interactive content.
 * The 'id' prop is optional. If not provided, it defaults to undefined within the component,
 * which typically results in the 'id' attribute being omitted from the rendered HTML element.
 * @param {InteractiveCardProps} props
 */
export const InteractiveCard = ({ children, className = '', id = undefined }) => {
  return (
    React.createElement('div', {
      id: id, // If id is undefined, React typically omits the attribute
      className: `bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 border border-slate-200 ${className}`
    },
      children
    )
  );
};