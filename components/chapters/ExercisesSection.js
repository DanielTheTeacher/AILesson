
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { ChapterId } from '../../types.js'; // ChapterId is JS object
import { ListItem } from '../ui/ListItem.js';
import { SkillsIconWithTooltip } from '../ui/SkillsIconWithTooltip.js'; // Import the icon

// Define ExerciseLink component
const ExerciseLink = ({ onClick, children, ariaLabel }) => {
  return React.createElement('button', {
    onClick: onClick,
    'aria-label': ariaLabel,
    className: "text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300 rounded"
  }, children);
};

export const ExercisesSection = ({ onNavigate, selectedVocation }) => {
  const handleLinkClick = (chapterId, elementId) => {
     onNavigate(chapterId, elementId);
  };

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "AI Exercises" }),
      React.createElement(InteractiveCard, {
        // This card itself could be collapsible if desired, but for an overview, non-collapsible is fine.
        children: [
          React.createElement('p', { key: 'p-intro', className: "text-slate-700 mb-4 leading-relaxed" }, "This section lists all the writing prompts and interactive exercises found throughout the learning material. You can use this as a quick navigation hub or as a checklist for completion. Click on any link to jump directly to the relevant activity within its chapter."),
          
          // Chapter 1: What is AI? (ExploreAISection)
          React.createElement(SubsectionTitle, { key: 'sub-explore', children: "Chapter: What is AI?"}),
          React.createElement('ul', { key: 'ul-explore', className: "list-disc list-inside text-slate-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-explore1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'aiAroundUsActivity'), 
                ariaLabel: "Navigate to Writing Prompts: AI Around Us",
                children: "✍️ Writing Prompts: AI Around Us"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-explore2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity1-card'), 
                ariaLabel: "Navigate to Exploration Activity: AI in My Job - Quick Find",
                children: "🔍 Exploration Activity: AI in My Job - Quick Find"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-explore3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: AI vs. Human Smartness",
                children: "💬 Discussion Prompt: AI vs. Human Smartness"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-explore4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity3-card'), 
                ariaLabel: "Navigate to Active Challenge: AI Spotting Game",
                children: "🤸 Active Challenge: AI Spotting Game"
              })
            ]}),
          ),

          // Chapter 2: Using AI in School (AIHelperSection)
          React.createElement(SubsectionTitle, { key: 'sub-helper', children: "Chapter: Using AI in School"}),
          React.createElement('ul', { key: 'ul-helper', className: "list-disc list-inside text-slate-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-helper1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'ethicsTableActivity'), 
                ariaLabel: "Navigate to AI Use: Green, Yellow, Red Light table",
                children: "AI Use: Green, Yellow, Red Light for School Assignments"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity1-card'), 
                ariaLabel: "Navigate to Writing Prompt: My Work, Then AI's Help",
                children: "✍️ Writing Prompt: My Work, Then AI's Help"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: Good AI Use for School",
                children: "💬 Discussion Prompt: Good AI Use for School"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity3-card'), 
                ariaLabel: "Navigate to Exploration Activity: Asking AI for Help",
                children: ["🔍 Exploration Activity: Asking AI for Help (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity4-card'), 
                ariaLabel: "Navigate to Mini-Discussion: AI Use: Okay or Not Okay?",
                children: "💡 Mini-Discussion: AI Use: Okay or Not Okay?"
              })
            ]}),
          ),
          
          // Chapter 3: AI: Real Dangers (CriticalThinkingSection & AISocietySection)
          React.createElement(SubsectionTitle, { key: 'sub-dangers', children: "Chapter: AI: Real Dangers"}),
          React.createElement('ul', { key: 'ul-dangers', className: "list-disc list-inside text-slate-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-dangers1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'spotTheLieActivity'), // Navigates to CriticalThinkingSection part
                ariaLabel: "Navigate to What is AI-Generated Fiction? exercise",
                children: "What is AI-Generated Fiction?"
              })
            ]}),
             React.createElement(ListItem, { key: 'ex-dangers2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity1-card'), 
                ariaLabel: "Navigate to Experiment: The AI Hallucination Challenge",
                children: "🧪 Experiment: The AI Hallucination Challenge"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'escapeBubbleActivity'), // Navigates to CriticalThinkingSection part
                ariaLabel: "Navigate to Writing Prompt: Burst the Bubble! Action Plan",
                children: "Writing Prompt: Burst the Bubble! Action Plan"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity2-card'), 
                ariaLabel: "Navigate to Writing Prompt: Spotting Unfairness",
                children: "✍️ Writing Prompt: Spotting Unfairness"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity3-card'), 
                ariaLabel: "Navigate to Discussion Prompt: AI Mistakes at Work",
                children: ["💬 Discussion Prompt: AI Mistakes at Work (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers6', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity4-card'), 
                ariaLabel: "Navigate to Exploration Activity: Is This Real?",
                children: ["🔍 Exploration Activity: Is This Real? (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers7', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity5-card'), 
                ariaLabel: "Navigate to Mini-Scenario: What Would You Say?",
                children: "💡 Mini-Scenario: What Would You Say?"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers8', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'ethicalDilemmasActivity'), // Navigates to AISocietySection part
                ariaLabel: "Navigate to Ethical Dilemmas in AI",
                children: ["Ethical Dilemmas in AI (for ", selectedVocation, ")"]
              })
            ]}),
             React.createElement(ListItem, { key: 'ex-dangers9', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'ethicsCharterActivity'), 
                ariaLabel: "Navigate to Writing Prompt: My AI Ethics Charter Ideas",
                children: ["✍️ Writing Prompt: My AI Ethics Charter Ideas (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers10', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'aisociety-activity1-card'), 
                ariaLabel: "Navigate to Writing Prompt: My Tech Time Check",
                children: "✍️ Writing Prompt: My Tech Time Check"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers11', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'aisociety-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: Problem with AI Idea",
                children: ["💬 Discussion Prompt: Problem with AI Idea (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers12', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'aisociety-activity3-card'), 
                ariaLabel: "Navigate to Teacher-Led Example: AI Story of the Week",
                children: "💡 Teacher-Led Example: AI Story of the Week"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers13', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AISociety, 'aisociety-activity4-card'), 
                ariaLabel: "Navigate to Mini-Debate: AI in Our School/Town",
                children: ["💡 Mini-Debate: AI in Our School/Town (", selectedVocation, "Focus)"]
              })
            ]}),
          ),

          // Chapter 4: AI & Your Job (AIFutureSection)
          React.createElement(SubsectionTitle, { key: 'sub-future', children: "Chapter: AI & Your Job"}),
          React.createElement('ul', { key: 'ul-future', className: "list-disc list-inside text-slate-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-future1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'vocationalFutureActivity'),
                ariaLabel: "Navigate to Writing Prompt: My Vocational Future with AI",
                children: ["✍️ Writing Prompt: My Vocational Future with AI (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity1-card'), 
                ariaLabel: "Navigate to Writing Prompt: My Best Skill",
                children: ["✍️ Writing Prompt: My Best Skill for (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: How AI Changes Work",
                children: ["💬 Discussion Prompt: How AI Changes Work in (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity3-card'), 
                ariaLabel: "Navigate to Exploration Activity: AI Tool for My Future Job",
                children: "🔍 Exploration Activity: AI Tool for My Future Job"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity4-card'), 
                ariaLabel: "Navigate to Quick Share: Why My Skill Matters with AI",
                children: "💡 Quick Share: Why My Skill Matters with AI"
              })
            ]}),
          ),
          
          // Chapter 6: AI & 'Skills' (SkillsConnectSection)
          React.createElement(SubsectionTitle, { key: 'sub-skills', children: "Chapter: AI & 'Skills'"}),
          React.createElement('ul', { key: 'ul-skills', className: "list-disc list-inside text-slate-700 space-y-2 mb-4 leading-relaxed" },
             React.createElement(ListItem, { key: 'ex-skills1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.SkillsConnect, 'skillsConnectPrompts'), 
                ariaLabel: `Maps to Writing Prompts related to 'Skills' textbook`,
                children: `Writing Prompts and Discussion Points related to 'Skills' Textbook (for ${selectedVocation})`
              }),
              React.createElement(SkillsIconWithTooltip, { key: 'sicon-ex'})
            ]}),
          )
        ]
      })
    )
  );
};
