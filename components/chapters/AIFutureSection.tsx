import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard';
import { SectionTitle } from '../ui/SectionTitle';
import { SubsectionTitle } from '../ui/SubsectionTitle';
import { Tooltip } from '../ui/Tooltip';
import { ResourceLink } from '../ui/ResourceLink';
import { WritingPrompt } from '../ui/WritingPrompt';
import { ListItem } from '../ui/ListItem';
import { HumanSkillsList } from '../shared/HumanSkillsList';
import { Vocation, VocationSpecificProps } from '../../types';

export const AIFutureSection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {

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
    <section className="mb-12">
      <SectionTitle>4. Your AI Future: Opportunities and Human Strengths</SectionTitle>

      <InteractiveCard>
        <SubsectionTitle>AI's Impact on Your Vocational Field (Focus: {selectedVocation})</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">AI will affect most professions, but its impact is particularly notable in technical fields like <strong className="text-sky-600">{selectedVocation}</strong>. Understanding these changes is key:</p>
        <div className="bg-sky-50 p-4 rounded-md border border-sky-200 mb-2">
            <p className="text-slate-700 leading-relaxed font-medium text-sky-800">Specifically for {selectedVocation}:</p>
            <p className="text-slate-700 leading-relaxed mt-1">{getVocationImpactDetails()}</p>
        </div>
        
        <p className="text-slate-700 leading-relaxed">
          The point is often that AI <Tooltip text="Improves or makes better.">enhances</Tooltip> human skills and changes job tasks, rather than replacing skilled workers. It will be important to be able to collaborate with AI systems.
          <ResourceLink href="https://www.livingstonjames.com/fundamentally-human-the-irreplaceable-skills-needed-in-the-age-of-ai/">Read: Irreplaceable Human Skills</ResourceLink>
        </p>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>The Irreplaceable Human Skills</SubsectionTitle>
        <p className="text-slate-700 mb-4 leading-relaxed">Even as AI gets smarter, many skills remain uniquely human and become even more important:</p>
        <HumanSkillsList />
        <p className="text-slate-700 mt-3 leading-relaxed">You develop many of these skills through practical work and collaboration in your vocational subjects for <strong className="text-sky-600">{selectedVocation}</strong>!</p>
      </InteractiveCard>

      <InteractiveCard id="vocationalFutureActivity">
        <SubsectionTitle>Writing Prompt 3.1: My Vocational Future with AI</SubsectionTitle>
        <p className="text-slate-700 mb-3 leading-relaxed">Consider the following questions and write a few paragraphs in a separate document to explore your thoughts. This is for your own reflection and learning:</p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-3 leading-relaxed">
          <ListItem>What is your chosen vocational field or dream job within <strong className="text-sky-600">{selectedVocation}</strong> ({getVocationSpecificPromptDetails()})?</ListItem>
          <ListItem>Imagine you're working in this job 5-10 years from now. How do you think AI might be a part of your daily work? Describe 1-2 specific tasks AI could help with.</ListItem>
          <ListItem>In that same future job, what are 1-2 important tasks or responsibilities that you believe *only a human* (you!) could do well, where your human skills and judgment would be essential? Explain why.</ListItem>
          <ListItem>What's one key skill (like critical thinking, problem-solving, or communication) you think you should focus on developing now to be successful working alongside AI in the future? How can you work on this skill in your current studies for {selectedVocation}?</ListItem>
        </ul>
      </InteractiveCard>
    </section>
  );
};
