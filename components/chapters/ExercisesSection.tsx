
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { SubsectionTitle } from '../ui/SubsectionTitle.tsx';
import { ChapterId, ExercisesSectionProps } from '../../types.ts';
import { ListItem } from '../ui/ListItem.tsx';

const ExerciseLink: React.FC<{onClick: () => void; children: React.ReactNode; ariaLabel?: string}> = ({ onClick, children, ariaLabel }) => (
  <button 
    onClick={onClick} 
    className="text-sky-600 hover:underline focus:outline-none text-left"
    aria-label={ariaLabel || (typeof children === 'string' ? children : 'Navigate to exercise')}
  >
    {children}
  </button>
);

export const ExercisesSection: React.FC<ExercisesSectionProps> = ({ onNavigate, selectedVocation }) => {
  
  const handleLinkClick = (chapterId: ChapterId, elementId: string) => {
     onNavigate(chapterId, elementId);
  };

  return (
    <section className="mb-12">
      <SectionTitle>Exercises: Test Your Knowledge and Reflect</SectionTitle>
      <InteractiveCard>
        <SubsectionTitle>Quick Access to Interactive Exercises & Writing Prompts</SubsectionTitle>
        <p className="text-slate-700 mb-4 leading-relaxed">Here you'll find direct links to some of the interactive exercises and reflection prompts from other chapters. This is a good way to review and test what you've learned, tailored for <strong className="text-sky-600">{selectedVocation}</strong> where applicable.</p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.ExploreAI, 'aiAroundUsActivity')}
              ariaLabel="Navigate to Writing Prompt Set 1: AI Around Us in the Explore AI chapter"
            >
              Writing Prompt Set 1: AI Around Us
            </ExerciseLink> (Chapter: Explore AI)
          </ListItem>
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.CriticalThinking, 'spotTheLieActivity')}
              ariaLabel="Navigate to What is AI-Generated Fiction? exercise in the Think Critically chapter"
            >
              What is AI-Generated Fiction?
            </ExerciseLink> (Chapter: Think Critically)
          </ListItem>
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.CriticalThinking, 'escapeBubbleActivity')}
              ariaLabel="Navigate to Writing Prompt 2.1: Burst the Bubble! Action Plan in the Think Critically chapter"
            >
              Writing Prompt 2.1: Burst the Bubble! Action Plan
            </ExerciseLink> (Chapter: Think Critically)
          </ListItem>
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.AIHelper, 'ethicsTableActivity')}
              ariaLabel="Navigate to AI Use: Green, Yellow, Red Light table in the AI as Helper chapter"
            >
              AI Use: Green, Yellow, Red Light
            </ExerciseLink> (Chapter: AI as Helper)
          </ListItem>
           <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.AIFuture, 'vocationalFutureActivity')}
              ariaLabel="Navigate to Writing Prompt 3.1: My Vocational Future with AI in the Your AI Future chapter"
            >
              Writing Prompt 3.1: My Vocational Future with AI
            </ExerciseLink> (Chapter: Your AI Future)
          </ListItem>
          <ListItem> 
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.SkillsConnect, 'skillsConnectPrompts')}
              ariaLabel="Navigate to Writing Prompts related to 'Skills Elektro' in the Connecting AI to 'Skills' chapter"
            > 
              Writing Prompts related to 'Skills Elektro' &amp; {selectedVocation}
            </ExerciseLink> (Chapter: Connecting AI to 'Skills')
          </ListItem>
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.AISociety, 'ethicalDilemmasActivity')}
              ariaLabel="Navigate to Writing Prompts 4: Ethical Dilemmas in AI in the AI & Society chapter"
            >
              Writing Prompts 4: Ethical Dilemmas in AI (for {selectedVocation})
            </ExerciseLink> (Chapter: AI & Society)
          </ListItem>
          <ListItem>
            <ExerciseLink 
              onClick={() => handleLinkClick(ChapterId.AISociety, 'ethicsCharterActivity')}
              ariaLabel="Navigate to Writing Prompt 5.1: My AI Ethics Charter Ideas in the AI & Society chapter"
            >
              Writing Prompt 5.1: My AI Ethics Charter Ideas
            </ExerciseLink> (Chapter: AI & Society)
          </ListItem>
        </ul>
      </InteractiveCard>
    </section>
  );
};