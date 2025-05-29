import React from 'react';
import { CriticalThinkingSection } from './CriticalThinkingSection.js';
import { AISocietySection } from './AISocietySection.js';

// We don't necessarily need a SectionTitle here,
// as the individual components have their own titles.
// If you want one, you can add it back.

export const RealDangersSection = ({ selectedVocation }) => {
  return (
    // A simple fragment or div is enough to wrap them.
    React.createElement(React.Fragment, null,
      React.createElement(CriticalThinkingSection, { selectedVocation: selectedVocation }),
      React.createElement(AISocietySection, { selectedVocation: selectedVocation })
    )
  );
};