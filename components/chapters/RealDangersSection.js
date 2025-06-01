
import React from 'react';
import { CriticalThinkingSection, CRITICAL_THINKING_SUB_CHAPTERS } from './CriticalThinkingSection.js';
import { AISocietySection, AI_SOCIETY_SUB_CHAPTERS } from './AISocietySection.js';

// For the "RealDangers" chapter, the sub-chapters are a combination of those
// from CriticalThinkingSection and AISocietySection.
// We prefix IDs to ensure they remain unique if these components were ever used elsewhere individually
// on the same page, though in this app structure, they are nested.
// The App.js logic will primarily use the sub-chapters from the specific section being rendered.
// This combined list is useful if `RealDangers` itself is considered one scrollable unit with internal parts.
// However, the App.js IntersectionObserver will target elements within the rendered HTML,
// so the individual component's sub-chapter lists are more directly used by the observer setup.
// For the `CHAPTER_SUB_SECTIONS` map in App.js, we'll use this combined list.

const criticalThinkingPrefixed = CRITICAL_THINKING_SUB_CHAPTERS.map(sc => ({
  ...sc,
  // id: `rd-crit-${sc.id}`, // No prefixing needed as App.js handles context
}));

const aiSocietyPrefixed = AI_SOCIETY_SUB_CHAPTERS.map(sc => ({
  ...sc,
  // id: `rd-soc-${sc.id}`, // No prefixing needed
}));

export const REAL_DANGERS_SUB_CHAPTERS = [
  ...criticalThinkingPrefixed,
  ...aiSocietyPrefixed
];


export const RealDangersSection = ({ selectedVocation }) => {
  return (
    React.createElement(React.Fragment, null,
      React.createElement(CriticalThinkingSection, { selectedVocation: selectedVocation }),
      React.createElement(AISocietySection, { selectedVocation: selectedVocation })
    )
  );
};
