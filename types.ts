export enum ChapterId {
  Home = 'home',
  ExploreAI = 'explore',
  CriticalThinking = 'critical',
  AIHelper = 'helper',
  AIFuture = 'future',
  AISociety = 'society',
  Exercises = 'exercises',
  SkillsConnect = 'skills_connect',
  References = 'references',
}

export enum Vocation {
  Elektro = "Elektro & Datateknologi",
  Helse = "Helse & Oppvekstfag",
  Bygg = "Bygg & Anleggsteknikk",
}

export interface NavItem {
  id: ChapterId;
  label: string;
}

export interface HumanSkill {
  name: string;
  desc: string;
}

export interface Reference {
  id: string;
  content: React.ReactNode; // Allow JSX in reference content
}

export interface Citation {
  refId: string;
  text: string;
}

export interface ResourceLinkProps {
  href: string;
  children: React.ReactNode;
}

// Props for components that will display vocation-specific content
export interface VocationSpecificProps {
  selectedVocation: Vocation;
}

export interface HeaderProps {
  navItems: NavItem[];
  activeChapterId: ChapterId;
  onNavClick: (id: ChapterId, elementId?: string) => void; // Updated for elementId
  selectedVocation: Vocation;
  onVocationChange: (vocation: Vocation) => void;
  isScrolled: boolean;
}

export interface ExercisesSectionProps extends VocationSpecificProps {
  onNavigate: (chapterId: ChapterId, elementId?: string) => void;
}
