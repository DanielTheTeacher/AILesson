
import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <li className="mb-1">{children}</li>
  );
};
