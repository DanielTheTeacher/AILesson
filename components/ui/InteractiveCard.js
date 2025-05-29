
import React from 'react';

/**
 * @typedef {object} InteractiveCardProps
 * @property {React.ReactNode} children - The content of the card.
 * @property {string} [className] - Optional CSS classes for the card.
 * @property {string} [id] - Optional HTML ID for the card. If present, it must be a string.
 * @property {boolean} [isCollapsible] - If true, the card content (excluding the first child, which becomes the header) will be collapsible.
 * @property {boolean} [initialCollapsed] - If true and isCollapsible is true, the card will be collapsed initially. Defaults to true.
 */

/**
 * A card component for displaying interactive content.
 * Can be made collapsible.
 * @param {InteractiveCardProps} props
 */
export const InteractiveCard = ({ children, className = '', id = undefined, isCollapsible = false, initialCollapsed = true }) => {
  const internalId = React.useId();
  const cardId = id || internalId;
  const contentId = `${cardId}-content`;

  const [isOpen, setIsOpen] = React.useState(isCollapsible ? !initialCollapsed : true);

  if (isCollapsible) {
    const childArray = React.Children.toArray(children);
    const headerContent = childArray.length > 0 ? childArray[0] : null;
    const bodyContent = childArray.length > 1 ? childArray.slice(1) : null;

    return React.createElement('div', {
      id: cardId,
      className: `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 border border-slate-200 ${className}`
    },
      React.createElement('div', { // Clickable Header
        className: "p-5 sm:p-6 cursor-pointer flex justify-between items-center",
        onClick: () => setIsOpen(!isOpen),
        role: 'button',
        tabIndex: 0,
        'aria-expanded': isOpen,
        'aria-controls': contentId,
        onKeyDown: (e) => { 
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen); 
          }
        }
      },
        headerContent, // This is typically the SubsectionTitle
        React.createElement('span', {
          className: `ml-2 text-sky-600 transform transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`, // '▶' icon rotates 90deg to '▼'
          'aria-hidden': 'true'
        }, '▶')
      ),
      // Collapsible Body with transition
      // The outer div handles the max-height transition and overflow
      // The inner div applies padding to the actual bodyContent
      bodyContent && React.createElement('div', { 
        id: contentId,
        className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`,
        role: 'region',
        'aria-labelledby': cardId // Assuming headerContent has an id, or link to cardId if header acts as label
      },
         React.createElement('div', { className: "p-5 sm:p-6 pt-0" }, bodyContent)
      )
    );
  }

  // Original non-collapsible rendering
  return React.createElement('div', {
    id: cardId,
    className: `bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-8 border border-slate-200 ${className}`
  }, children);
};