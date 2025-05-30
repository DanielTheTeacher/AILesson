
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
      className: `bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 border border-neutral-200 ${className}`
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
          className: `ml-3 text-teal-600 transform transition-transform duration-300 ease-in-out text-lg ${isOpen ? 'rotate-180' : ''}`,
          'aria-hidden': 'true'
        }, '▼') // Icon changes direction based on isOpen
      ),
      // Collapsible Body with transition
      bodyContent && React.createElement('div', { 
        id: contentId,
        className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`,
        role: 'region',
        'aria-labelledby': cardId 
      },
         React.createElement('div', { className: "p-5 sm:p-6 pt-0" }, bodyContent)
      )
    );
  }

  // Original non-collapsible rendering
  return React.createElement('div', {
    id: cardId,
    className: `bg-white p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-10 border border-neutral-200 ${className}`
  }, children);
};