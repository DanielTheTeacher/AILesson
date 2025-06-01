
import React from 'react';

export const EmptyReferencesDropdown = () => {
  return (
    React.createElement('details', { key: 'references-details-empty', className: "mt-6" },
      React.createElement('summary', {
        className: "text-md font-semibold text-teal-700 cursor-pointer py-2 border-b border-neutral-200 focus:outline-none hover:text-teal-800 transition-colors"
      },
        "References"
      ),
      React.createElement('ul', { className: "mt-2 space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-600 pl-4" },
        React.createElement('li', { className: "italic" }, "No references yet for this section.")
      )
    )
  );
};
