
import React from 'react';

export const RightSidebarNav = ({ subChapters = [], activeSubChapterId, onSubNavClick, headerHeight }) => {
  if (!subChapters || subChapters.length === 0) {
    return null;
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    onSubNavClick(id);
  };

  return (
    React.createElement('aside', { 
      className: "hidden lg:block w-60 fixed left-0 p-6 overflow-y-auto transition-all duration-300 bg-neutral-50", // Changed right-0 to left-0, adjusted pl-8 to be covered by p-6
      style: { top: `${headerHeight + 24}px`, height: `calc(100vh - ${headerHeight + 24}px)` } 
    },
      React.createElement('nav', null,
        React.createElement('h3', { className: "text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3" }, "On this page"),
        React.createElement('ul', { className: "space-y-2" },
          subChapters.map(subChapter => (
            React.createElement('li', { key: subChapter.id },
              React.createElement('a', {
                href: `#${subChapter.id}`,
                onClick: (e) => handleClick(e, subChapter.id),
                className: `block text-xs hover:text-teal-600 transition-colors duration-150 
                  ${activeSubChapterId === subChapter.id 
                    ? 'text-teal-600 font-semibold border-l-2 border-teal-500 pl-2' // Keep border-l and pl for left-aligned text
                    : 'text-neutral-600 pl-[10px]' // Keep pl for consistent alignment
                  }`,
                'aria-current': activeSubChapterId === subChapter.id ? 'location' : undefined
              }, subChapter.title)
            )
          ))
        )
      )
    )
  );
};
