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
      React.createElement(SectionTitle, { children: "4. Your AI Future: Opportunities and Human Strengths" }),

      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: ["AI's Impact on Your Vocational Field (Focus: ", selectedVocation, ")"] }),
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-2 leading-relaxed" }, "AI will affect most professions, but its impact is particularly notable in technical fields like ", React.createElement('strong', { key: 's1', className: "text-sky-600" }, selectedVocation), ". Understanding these changes is key:"),
          React.createElement('div', { key: 'div1', className: "bg-sky-50 p-4 rounded-md border border-sky-200 mb-2" },
            React.createElement('p', { key: 'p2', className: "text-slate-700 leading-relaxed font-medium text-sky-800" }, "Specifically for ", selectedVocation, ":"),
            React.createElement('p', { key: 'p3', className: "text-slate-700 leading-relaxed mt-1" }, getVocationImpactDetails())
          ),
          React.createElement('p', { key: 'p4', className: "text-slate-700 leading-relaxed" },
            "The point is often that AI ", React.createElement(Tooltip, { key: 't1', text: "Improves or makes better.", children: "enhances" }), " human skills and changes job tasks, rather than replacing skilled workers. It will be important to be able to collaborate with AI systems.",
            React.createElement(ResourceLink, { key: 'r1', href: "https://www.livingstonjames.com/fundamentally-human-the-irreplaceable-skills-needed-in-the-age-of-ai/", children: "Read: Irreplaceable Human Skills" })
          )
        ]
      }),

      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "The Irreplaceable Human Skills" }),
          React.createElement('p', { key: 'p5', className: "text-slate-700 mb-4 leading-relaxed" }, "Even as AI gets smarter, many skills remain uniquely human and become even more important:"),
          React.createElement(HumanSkillsList, { key: 'hsl1' }),
          React.createElement('p', { key: 'p6', className: "text-slate-700 mt-3 leading-relaxed" }, "You develop many of these skills through practical work and collaboration in your vocational subjects for ", React.createElement('strong', { key: 's2', className: "text-sky-600" }, selectedVocation), "!")
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: "vocationalFutureActivity",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Writing Prompt 3.1: My Vocational Future with AI" }),
          React.createElement('p', { key: 'p7', className: "text-slate-700 mb-3 leading-relaxed" }, "Consider the following questions and write a few paragraphs in a separate document to explore your thoughts. This is for your own reflection and learning:"),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 space-y-2 mb-3 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: ["What is your chosen vocational field or dream job within ", React.createElement('strong', { key: 's3', className: "text-sky-600" }, selectedVocation), " (", getVocationSpecificPromptDetails(), ")?"] }),
            React.createElement(ListItem, { key: 'li2', children: ["Imagine you're working in this job 5-10 years from now. How do you think AI might be a part of your daily work? Describe 1-2 specific tasks AI could help with."] }),
            React.createElement(ListItem, { key: 'li3', children: ["In that same future job, what are 1-2 important tasks or responsibilities that you believe *only a human* (you!) could do well, where your human skills and judgment would be essential? Explain why."] }),
            React.createElement(ListItem, { key: 'li4', children: ["What's one key skill (like critical thinking, problem-solving, or communication) you think you should focus on developing now to be successful working alongside AI in the future? How can you work on this skill in your current studies for ", selectedVocation, "?"] })
          )
        ]
      })
    )
  );
};