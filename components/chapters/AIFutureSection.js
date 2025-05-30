

import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';
import { ListItem } from '../ui/ListItem.js';
import { HumanSkillsList } from '../shared/HumanSkillsList.js';
import { Vocation } from '../../types.js'; // Vocation is JS object

export const AIFutureSection = ({ selectedVocation }) => { // Removed React.FC and prop types

  const getVocationImpactDetails = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "Expect to see more AI in smart power grid management, automated fault detection in complex circuits, advanced AI tools for cybersecurity threat analysis, and AI assistants that help with coding and software development. You might use AI to analyze sensor data from electrical installations or to optimize energy distribution.";
      case Vocation.Helse:
        return "AI will increasingly be used for analyzing medical images (like X-rays or MRIs), assisting in robotic surgery, managing patient data and predicting outbreaks, and personalizing patient care plans. You might interact with AI systems that help monitor patient vitals or suggest treatment protocols.";
      case Vocation.Bygg:
        return "In construction, AI can optimize project schedules, improve building design through generative design, monitor job sites for safety using computer vision, and manage logistics for materials and equipment. You could use AI for drone-based site inspections or to analyze structural integrity.";
      default:
        return "AI will significantly impact various tasks within your field, automating some and creating new opportunities for skilled professionals who can work with these technologies.";
    }
  };
  
  const getVocationSpecificPromptDetails = () => {
     switch (selectedVocation) {
      case Vocation.Elektro:
        return "e.g., an electrician, automation technician, or data network installer";
      case Vocation.Helse:
        return "e.g., a healthcare assistant, pharmacy technician, or child and youth worker";
      case Vocation.Bygg:
        return "e.g., a carpenter, mason, or construction site manager";
      default:
        return "your chosen field";
    }
  }

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "AI & Your Job" }),

      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        key: "impactCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: ["AI's Impact on Your Vocational Field (Focus: ", selectedVocation, ")"] }),
          React.createElement('p', { key: 'p1', className: "text-neutral-700 mb-2 leading-relaxed" }, "AI will affect most professions, but its impact is particularly notable in technical fields like ", React.createElement('strong', { key: 's1', className: "text-teal-600" }, selectedVocation), ". Understanding these changes is key:"),
          React.createElement('div', { key: 'div1', className: "bg-teal-50 p-4 rounded-md border border-teal-200 mb-2" },
            React.createElement('p', { key: 'p2', className: "text-neutral-700 leading-relaxed font-medium text-teal-800" }, "Specifically for ", selectedVocation, ":"),
            React.createElement('p', { key: 'p3', className: "text-neutral-700 leading-relaxed mt-1" }, getVocationImpactDetails())
          ),
          React.createElement('p', { key: 'p4', className: "text-neutral-700 leading-relaxed" },
            "The point is often that AI ", React.createElement(Tooltip, { key: 't1', text: "Improves or makes better.", children: "enhances" }), " human skills and changes job tasks, rather than replacing skilled workers. It will be important to be able to collaborate with AI systems.",
            React.createElement(ResourceLink, { key: 'r1', href: "https://www.livingstonjames.com/fundamentally-human-the-irreplaceable-skills-needed-in-the-age-of-ai/", children: "Read: Irreplaceable Human Skills" })
          )
        ]
      }),

      React.createElement(InteractiveCard, { // Explanatory / List - non-collapsible (HumanSkillsList is not a task)
        key: "humanSkillsCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "The Irreplaceable Human Skills" }),
          React.createElement('p', { key: 'p5', className: "text-neutral-700 mb-4 leading-relaxed" }, "Even as AI gets smarter, many skills remain uniquely human and become even more important:"),
          React.createElement(HumanSkillsList, { key: 'hsl1' }),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 mt-3 leading-relaxed" }, "You develop many of these skills through practical work and collaboration in your vocational subjects for ", React.createElement('strong', { key: 's2', className: "text-teal-600" }, selectedVocation), "!")
        ]
      }),

      React.createElement(InteractiveCard, { // This is a task card
        id: "vocationalFutureActivity",
        key: "vocationalFutureActivityCard",
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: ["✍️ Writing Prompt: My Vocational Future with AI (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'p7', className: "text-neutral-700 mb-3 leading-relaxed" }, "Consider the following questions and write a few paragraphs in a separate document to explore your thoughts. This is for your own reflection and learning:"),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-neutral-700 space-y-2 mb-3 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: ["What is your chosen vocational field or dream job within ", React.createElement('strong', { key: 's3', className: "text-teal-600" }, selectedVocation), " (", getVocationSpecificPromptDetails(), ")?"] }),
            React.createElement(ListItem, { key: 'li2', children: ["Imagine you're working in this job 5-10 years from now. How do you think AI might be a part of your daily work? Describe 1-2 specific tasks AI could help with."] }),
            React.createElement(ListItem, { key: 'li3', children: ["In that same future job, what are 1-2 important tasks or responsibilities that you believe *only a human* (you!) could do well, where your human skills and judgment would be essential? Explain why."] }),
            React.createElement(ListItem, { key: 'li4', children: ["What's one key skill (like critical thinking, problem-solving, or communication) you think you should focus on developing now to be successful working alongside AI in the future? How can you work on this skill in your current studies for ", selectedVocation, "?"] })
          )
        ]
      }),
      
      React.createElement('h4', { key: 'actSetHeading', className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", children: "Chapter 4 Activities" }),

      // New Activities Start Here - These are tasks, so they are collapsible
      React.createElement(InteractiveCard, {
        key: 'aifuture-activity1',
        id: 'aifuture-activity1-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'futAct1Title', children: ["✍️ Writing Prompt: My Best Skill for (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'futAct1Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "Look at the 'HumanSkillsList' (e.g., problem-solving, teamwork, communication)." }),
          React.createElement('ul', { key: 'futAct1List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'futAct1Li1', children: ["Which ONE of these skills do you think is your strongest when you are doing tasks for ", selectedVocation, "?"] }),
            React.createElement(ListItem, { key: 'futAct1Li2', children: ["Give ONE example of when you used this skill in your studies or a hobby related to ", selectedVocation, "."] })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aifuture-activity2',
        id: 'aifuture-activity2-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'futAct2Title', children: ["💬 Discussion Prompt: How AI Changes Work in (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'futAct2Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["The lesson says AI might change job tasks in ", selectedVocation, "."] }),
          React.createElement('ul', { key: 'futAct2List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'futAct2Li1', children: ["Think of ONE task a professional in ", selectedVocation, " does today."] }),
            React.createElement(ListItem, { key: 'futAct2Li2', children: "How might AI help make that ONE task easier or different in the future?" }),
            React.createElement(ListItem, { key: 'futAct2Li3', children: "Will the human still be needed for that task? Why?" })
          ]}),
          React.createElement('p', { key: 'futAct2Instruction', className: "text-neutral-700 mb-2 leading-relaxed", children: "(Small Group discussion)" })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aifuture-activity3',
        id: 'aifuture-activity3-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'futAct3Title', children: "🔍 Exploration Activity: AI Tool for My Future Job" }),
          React.createElement('p', { key: 'futAct3Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Imagine a job you might have in ", selectedVocation, " in the future."] }),
          React.createElement('ul', { key: 'futAct3List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'futAct3Li1', children: "Think of ONE AI tool that doesn't exist yet but would be very helpful for that job." }),
            React.createElement(ListItem, { key: 'futAct3Li2', children: "What would the tool do? What would you call it?" })
          ]}),
          React.createElement('p', { key: 'futAct3Instruction', className: "text-neutral-700 mb-2 leading-relaxed", children: "Share your idea with a partner." })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aifuture-activity4',
        id: 'aifuture-activity4-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'futAct4Title', children: "💡 Quick Share: Why My Skill Matters with AI" }),
          React.createElement('p', { key: 'futAct4Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Each student picks ONE skill from the 'HumanSkillsList' that they think is super important for ", selectedVocation, "."] }),
          React.createElement('p', { key: 'futAct4Prompt', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Be ready to tell the class in 1-2 sentences: What is the skill, and why will it still be important even if AI helps with many tasks in ", selectedVocation, "?"] })
        ]
      })
      // New Activities End Here
    )
  );
};