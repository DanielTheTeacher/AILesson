import { ChapterId, Vocation } from './types.js'; // Updated import

export const NAV_ITEMS = [
  { id: ChapterId.Home, label: 'Home' },
  { id: ChapterId.ExploreAI, label: '1. Explore AI' },
  { id: ChapterId.CriticalThinking, label: '2. Think Critically' },
  { id: ChapterId.AIHelper, label: '3. AI as Helper' },
  { id: ChapterId.AIFuture, label: '4. Your AI Future' },
  { id: ChapterId.AISociety, label: '5. AI & Society' },
  { id: ChapterId.Exercises, label: 'Exercises' },
  { id: ChapterId.SkillsConnect, label: 'Connecting AI to \'Skills\'' },
  { id: ChapterId.References, label: 'References' },
];

export const HUMAN_SKILLS_DATA = [
  { name: "Critical Thinking & Problem Solving", desc: "Analyzing complex situations, evaluating info, solving unusual problems." },
  { name: "Creativity & Innovation", desc: "Generating new ideas, thinking outside the box, developing original solutions." },
  { name: "Emotional Intelligence & Empathy", desc: "Understanding own and others' emotions, building relationships, showing care." },
  { name: "Communication & Collaboration", desc: "Conveying info clearly, listening actively, working well in teams." },
  { name: "Adaptability & Lifelong Learning", desc: "Learning new things quickly, adjusting to changes, developing professionally." },
  { name: "Ethical Judgment & Responsibility", desc: "Making decisions based on values, considering consequences, ensuring fairness." },
  { name: "Manual Dexterity & Physical Skills", desc: "Performing precise and complex manual tasks (important in many vocational trades)." }
];

export const VOCATION_OPTIONS = [
  Vocation.Elektro,
  Vocation.Helse,
  Vocation.Bygg,
];
