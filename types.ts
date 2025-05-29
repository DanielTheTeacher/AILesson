// Enums are converted to plain JavaScript objects
export const ChapterId = {
  Home: 'home',
  ExploreAI: 'explore',
  CriticalThinking: 'critical',
  AIHelper: 'helper',
  AIFuture: 'future',
  AISociety: 'society',
  Exercises: 'exercises',
  SkillsConnect: 'skills_connect',
  References: 'references',
};

export const Vocation = {
  Elektro: "Elektro & Datateknologi",
  Helse: "Helse & Oppvekstfag",
  Bygg: "Bygg & Anleggsteknikk",
};

// Interfaces are removed in plain JavaScript as they are TypeScript-specific.
// Object shapes will be based on convention and usage.
// We can add JSDoc comments for clarity if needed, but for direct conversion, they are removed.

// Example of how you might document an expected shape with JSDoc (optional):
/**
 * @typedef {Object} NavItem
 * @property {string} id - Should be one of ChapterId values
 * @property {string} label
 */

/**
 * @typedef {Object} HumanSkill
 * @property {string} name
 * @property {string} desc
 */

/**
 * @typedef {Object} Reference
 * @property {string} id
 * @property {React.ReactNode} content - Allow JSX in reference content (will be React.createElement calls)
 */

/**
 * @typedef {Object} Citation
 * @property {string} refId
 * @property {string} text
 */

/**
 * @typedef {Object} ResourceLinkProps
 * @property {string} href
 * @property {React.ReactNode} children
 */

/**
 * @typedef {Object} VocationSpecificProps
 * @property {string} selectedVocation - Should be one of Vocation values
 */

/**
 * @typedef {Object} HeaderProps
 * @property {NavItem[]} navItems
 * @property {string} activeChapterId
 * @property {function(string, string=): void} onNavClick
 * @property {string} selectedVocation
 * @property {function(string): void} onVocationChange
 * @property {boolean} isScrolled
 */

/**
 * @typedef {Object} ExercisesSectionProps
 * @property {string} selectedVocation
 * @property {function(string, string=): void} onNavigate
 */
