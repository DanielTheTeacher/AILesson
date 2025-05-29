import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { ChapterId } from '../../types.js'; // ChapterId is JS object
import { ListItem } from '../ui/ListItem.js';

// ... (Keep ExerciseLink)

export const ExercisesSection = ({ onNavigate, selectedVocation }) => {
  const handleLinkClick = (chapterId, elementId) => {
     onNavigate(chapterId, elementId);
  };

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Exercises: Test Your Knowledge and Reflect" }),
      React.createElement(InteractiveCard, {
        children: [
          // ... (Keep intro text)
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [
              React.createElement(ExerciseLink, {
                key: 'el1',
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'aiAroundUsActivity'), // Still Chapter 1
                ariaLabel: "Navigate to Writing Prompt Set 1: AI Around Us in the What is AI? chapter",
                children: "Writing Prompt Set 1: AI Around Us"
              }), " (Chapter: What is AI?)"
            ]}),
            React.createElement(ListItem, { key: 'li2', children: [
              React.createElement(ExerciseLink, {
                key: 'el2',
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'spotTheLieActivity'), // Now in RealDangers
                ariaLabel: "Navigate to What is AI-Generated Fiction? exercise in the AI: Real Dangers chapter",
                children: "What is AI-Generated Fiction?"
              }), " (Chapter: AI: Real Dangers)"
            ]}),
            React.createElement(ListItem, { key: 'li3', children: [
              React.createElement(ExerciseLink, {
                key: 'el3',
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'escapeBubbleActivity'), // Now in RealDangers
                ariaLabel: "Navigate to Writing Prompt 2.1: Burst the Bubble! Action Plan in the AI: Real Dangers chapter",
                children: "Writing Prompt 2.1: Burst the Bubble! Action Plan"
              }), " (Chapter: AI: Real Dangers)"
            ]}),
            React.createElement(ListItem, { key: 'li4', children: [
              React.createElement(ExerciseLink, {
                key: 'el4',
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'ethicsTableActivity'), // Now Chapter 2
                ariaLabel: "Navigate to AI Use: Green, Yellow, Red Light table in the Using AI in School chapter",
                children: "AI Use: Green, Yellow, Red Light"
              }), " (Chapter: Using AI in School)"
            ]}),
            React.createElement(ListItem, { key: 'li5', children: [
              React.createElement(ExerciseLink, {
                key: 'el5',
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'vocationalFutureActivity'), // Now Chapter 4
                ariaLabel: "Navigate to Writing Prompt 3.1: My Vocational Future with AI in the AI & Your Job chapter",
                children: "Writing Prompt 3.1: My Vocational Future with AI"
              }), " (Chapter: AI & Your Job)"
            ]}),
            React.createElement(ListItem, { key: 'li6', children: [
              React.createElement(ExerciseLink, {
                key: 'el6',
                onClick: () => handleLinkClick(ChapterId.SkillsConnect, 'skillsConnectPrompts'), // Now Chapter 6
                ariaLabel: `Maps to Writing Prompts related to 'Skills Elektro' in the AI & 'Skills' chapter`,
                children: `Writing Prompts related to 'Skills Elektro' & ${selectedVocation}`
              }), " (Chapter: AI & 'Skills')"
            ]}),
            React.createElement(ListItem, { key: 'li7', children: [
              React.createElement(ExerciseLink, {
                key: 'el7',
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'ethicalDilemmasActivity'), // Now in RealDangers
                ariaLabel: `Maps to Writing Prompts 4: Ethical Dilemmas in AI in the AI: Real Dangers chapter`,
                children: `Writing Prompts 4: Ethical Dilemmas in AI (for ${selectedVocation})`
              }), " (Chapter: AI: Real Dangers)"
            ]}),
            React.createElement(ListItem, { key: 'li8', children: [
              React.createElement(ExerciseLink, {
                key: 'el8',
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'ethicsCharterActivity'), // Now in RealDangers
                ariaLabel: "Navigate to Writing Prompt 5.1: My AI Ethics Charter Ideas in the AI: Real Dangers chapter",
                children: "Writing Prompt 5.1: My AI Ethics Charter Ideas"
              }), " (Chapter: AI: Real Dangers)"
            ]})
          )
        ]
      })
    )
  );
};