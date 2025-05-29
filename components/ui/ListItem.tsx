import React from 'react';

export const ListItem = ({ children }) => { // Removed React.FC and prop types
  return (
    React.createElement('li', { className: "mb-1" }, children)
  );
};
