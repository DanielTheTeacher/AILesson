

import { ChapterId, Vocation } from './types.js';

export const NAV_ITEMS = [
  { id: ChapterId.ExploreAI, label: '1. What is AI?' },
  { id: ChapterId.AIHelper, label: '2. Using AI in School' },
  { id: ChapterId.RealDangers, label: '3. AI: Real Dangers' },
  { id: ChapterId.AIFuture, label: '4. AI & Your Job' },
  { id: ChapterId.ExercisesSkills, label: '5. Exercises & textbook connections' }, 
  // { id: ChapterId.References, label: '6. References' }, // Removed
  { id: ChapterId.Disclaimer, label: 'Disclaimer' },
];

export const HUMAN_SKILLS_DATA = [
  // ... (Ensure this is unchanged)
];

// Ensure Vocation is imported and used correctly here
export const VOCATION_OPTIONS = [
  Vocation.Elektro,
  Vocation.Helse,
  Vocation.Bygg,
];
