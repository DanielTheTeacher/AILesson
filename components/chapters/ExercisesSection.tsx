import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { ChapterId } from '../../types.js'; // ChapterId is JS object
import { ListItem } from '../ui/ListItem.js';

const ExerciseLink = ({onClick, children, ariaLabel}) => ( // Removed React.FC and types
  React.createElement('button', { 
    onClick: onClick, 
    className: "text-sky-600 hover:underline focus:outline-none text-left",
    "aria-label": ariaLabel || (typeof children === 'string' ? children : 'Navigate to exercise') // Changed aria-label
  },
    children
  )
);

export const ExercisesSection = ({ onNavigate, selectedVocation }) => { // Removed React.FC and ExercisesSectionProps
  
  const handleLinkClick = (chapterId, elementId) => {
     onNavigate(chapterId, elementId);
  };

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Exercises: Test Your Knowledge and Reflect" }),
      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "Quick Access to Interactive Exercises & Writing Prompts" }),
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-4 leading-relaxed" }, "Here you'll find direct links to some of the interactive exercises and reflection prompts from other chapters. This is a good way to review and test what you've learned, tailored for ", React.createElement('strong', { key: 's1', className: "text-sky-600" }, selectedVocation), " where applicable."),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [
              React.createElement(ExerciseLink, { 
                key: 'el1',
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'aiAroundUsActivity'),
                ariaLabel: "Navigate to Writing Prompt Set 1: AI Around Us in the Explore AI chapter",
                children: "Writing Prompt Set 1: AI Around Us"
              }), " (Chapter: Explore AI)"
            ]}),
            React.createElement(ListItem, { key: 'li2', children: [
              React.createElement(ExerciseLink, { 
                key: 'el2',
                onClick: () => handleLinkClick(ChapterId.CriticalThinking, 'spotTheLieActivity'),
                ariaLabel: "Navigate to What is AI-Generated Fiction? exercise in the Think Critically chapter",
                children: "What is AI-Generated Fiction?"
              }), " (Chapter: Think Critically)"
            ]}),
            React.createElement(ListItem, { key: 'li3', children: [
              React.createElement(ExerciseLink, { 
                key: 'el3',
                onClick: () => handleLinkClick(ChapterId.CriticalThinking, 'escapeBubbleActivity'),
                ariaLabel: "Navigate to Writing Prompt 2.1: Burst the Bubble! Action Plan in the Think Critically chapter",
                children: "Writing Prompt 2.1: Burst the Bubble! Action Plan"
              }), " (Chapter: Think Critically)"
            ]}),
            React.createElement(ListItem, { key: 'li4', children: [
              React.createElement(ExerciseLink, { 
                key: 'el4',
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'ethicsTableActivity'),
                ariaLabel: "Navigate to AI Use: Green, Yellow, Red Light table in the AI as Helper chapter",
                children: "AI Use: Green, Yellow, Red Light"
              }), " (Chapter: AI as Helper)"
            ]}),
            React.createElement(ListItem, { key: 'li5', children: [
              React.createElement(ExerciseLink, { 
                key: 'el5',
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'vocationalFutureActivity'),
                ariaLabel: "Navigate to Writing Prompt 3.1: My Vocational Future with AI in the Your AI Future chapter",
                children: "Writing Prompt 3.1: My Vocational Future with AI"
              }), " (Chapter: Your AI Future)"
            ]}),
            React.createElement(ListItem, { key: 'li6', children: [
              React.createElement(ExerciseLink, { 
                key: 'el6',
                onClick: () => handleLinkClick(ChapterId.SkillsConnect, 'skillsConnectPrompts'),
                ariaLabel: `Navigate to Writing Prompts related to 'Skills Elektro' in the Connecting AI to 'Skills' chapter`,
                children: `Writing Prompts related to 'Skills Elektro' & ${selectedVocation}`
              }), " (Chapter: Connecting AI to 'Skills')"
            ]}),
            React.createElement(ListItem, { key: 'li7', children: [
              React.createElement(ExerciseLink, { 
                key: 'el7',
                onClick: () => handleLinkClick(ChapterId.AISociety, 'ethicalDilemmasActivity'),
                ariaLabel: `Navigate to Writing Prompts 4: Ethical Dilemmas in AI in the AI & Society chapter`,
                children: `Writing Prompts 4: Ethical Dilemmas in AI (for ${selectedVocation})`
              }), " (Chapter: AI & Society)"
            ]}),
            React.createElement(ListItem, { key: 'li8', children: [
              React.createElement(ExerciseLink, { 
                key: 'el8',
                onClick: () => handleLinkClick(ChapterId.AISociety, 'ethicsCharterActivity'),
                ariaLabel: "Navigate to Writing Prompt 5.1: My AI Ethics Charter Ideas in the AI & Society chapter",
                children: "Writing Prompt 5.1: My AI Ethics Charter Ideas"
              }), " (Chapter: AI & Society)"
            ]})
          )
        ]
      })
    )
  );
};