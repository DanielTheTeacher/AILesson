
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { SubsectionTitle } from '../ui/SubsectionTitle.tsx';
import { Tooltip } from '../ui/Tooltip.tsx';
import { ResourceLink } from '../ui/ResourceLink.tsx';
import { WritingPrompt } from '../ui/WritingPrompt.tsx';
import { CitationLink } from '../ui/CitationLink.tsx';
import { ListItem } from '../ui/ListItem.tsx';
import { Vocation, VocationSpecificProps } from '../../types.ts';

export const ExploreAISection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {
  
  const getVocationSpecificExamples = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "Examples for Elektro: AI in smart grids, predictive maintenance for electrical systems, circuit design assistance.";
      case Vocation.Helse:
        return "Examples for Helse: AI in diagnostic imaging, patient monitoring systems, personalized treatment plans.";
      case Vocation.Bygg:
        return "Examples for Bygg: AI in construction project management, site safety monitoring, sustainable building design.";
      default:
        return "AI is becoming a bigger deal in many jobs, especially in technical fields. It's showing up everywhere, helping with tasks like smart power management, automatically finding faults, improving cybersecurity, and even assisting with coding.";
    }
  };

  return (
    <section className="mb-12">
      <SectionTitle>1. Explore AI: What is it, and where do we find it?</SectionTitle>
      
      <InteractiveCard>
        <SubsectionTitle>What is Artificial Intelligence (AI)?</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          Think of AI as computers or programs that can do things that usually require human intelligence. This can be learning from experience, solving problems, making decisions, or understanding language.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          An important part of AI is <Tooltip text="Systems that learn from large amounts of data to find patterns and make decisions without being specifically programmed for each task.">Machine Learning (ML)</Tooltip>. For example, streaming services use Machine Learning (ML) to suggest movies.<CitationLink referenceId="ref-1" text="[1]" />
          <ResourceLink href="https://www.youtube.com/watch?v=PeMlggyqz0Y">Watch: What is ML?</ResourceLink>
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          <Tooltip text="Advanced 'computer brains' trained on enormous amounts of text and code.">Large Language Models (LLMs)</Tooltip> are a type of AI you might have heard of, like ChatGPT. They learn patterns and can generate text, answer questions.<CitationLink referenceId="ref-2" text="[2]" /> Important: LLMs don't "think" like humans; they predict the next word based on learned patterns.<CitationLink referenceId="ref-2" text="[2]" />
          <ResourceLink href="https://www.youtube.com/watch?v=sg_fuEzFw0g">Watch: What are LLMs?</ResourceLink>
        </p>
         <div className="bg-sky-50 p-4 rounded-md border border-sky-200">
            <h4 className="font-semibold text-sky-700 mb-2">AI is not magic!</h4>
            <p className="text-sm text-slate-700 leading-relaxed">It's important to remember that AI works by recognizing and copying patterns from training data; they have no real understanding or consciousness.<CitationLink referenceId="ref-3" text="[3]" /> This is key to understanding both what AI can do, and what it *cannot* do.
                 <ResourceLink href="https://www.youtube.com/watch?v=b0KaGBOU4Ys">Watch: AI - Pattern Recognition vs. Understanding</ResourceLink>
            </p>
        </div>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>AI in your daily life and future profession</SubsectionTitle>
        <p className="text-slate-700 mb-4 leading-relaxed">AI is not just something for the future – it's already part of your everyday life! You encounter AI when using social media (personalized feed)<CitationLink referenceId="ref-4" text="[4]" />, email (spam filter)<CitationLink referenceId="ref-5" text="[5]" />, GPS apps (route optimization)<CitationLink referenceId="ref-6" text="[6]" />, and smart speakers.</p>
        
        <h4 className="font-semibold text-slate-600 mb-2">AI in Vocational Fields (Focus: {selectedVocation}):</h4>
        <p className="text-slate-700 mb-3 leading-relaxed">
          {getVocationSpecificExamples()}
          {selectedVocation === Vocation.Elektro && (
            <>
              <ResourceLink href="https://matlabsimulation.com/artificial-intelligence-projects-for-electrical-engineering/">More: AI in Electrical Engineering</ResourceLink>
              <ResourceLink href="https://blog.exertherm.com/the-impact-of-ai-on-electrical-asset-maintenance">More: AI in Predictive Maintenance</ResourceLink>
            </>
          )}
          {selectedVocation === Vocation.Helse && (
            <>
              <ResourceLink href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10002328/">More: AI in Healthcare</ResourceLink>
              <ResourceLink href="https://www.forbes.com/sites/forbestechcouncil/2023/07/18/the-role-of-ai-in-modern-health-care/?sh=23a7136e7358">More: AI in Modern Healthcare (Forbes)</ResourceLink>
            </>
          )}
          {selectedVocation === Vocation.Bygg && (
            <>
              <ResourceLink href="https://www.autodesk.com/construction-cloud/blog/ai-in-construction/">More: AI in Construction (Autodesk)</ResourceLink>
              <ResourceLink href="https://www.bdcnetwork.com/how-ai-transforming-construction-industry">More: AI Transforming Construction (BDC)</ResourceLink>
            </>
          )}
        </p>
        <p className="text-slate-700 mt-4 leading-relaxed">
            In most professions, AI is about <Tooltip text="Making better or stronger.">enhancing</Tooltip> human skills, increasing efficiency and safety, not necessarily replacing people. It's important to see how AI can become a useful tool in your specific field!
        </p>
      </InteractiveCard>
      
      <InteractiveCard>
        <SubsectionTitle>Why is AI literacy important for you?</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
            <Tooltip text="The ability to understand basic AI concepts, critically evaluate AI systems, and use AI tools effectively and ethically.">AI literacy</Tooltip> is more than just a technical skill. It's a key competency for the future, especially for students in fields like {selectedVocation}.
             <ResourceLink href="https://www.datiak12.io/leadership/oped/article/15712114/the-74-why-data-ai-literacy-are-important-skills-for-k12-students">Read: Why AI Literacy is Important</ResourceLink>
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed">
            <ListItem><strong>Future-proof your career:</strong> AI is changing the job market. With AI literacy, you are better equipped for changes in {selectedVocation} and related industries.</ListItem>
            <ListItem><strong>Make informed choices:</strong> Understand how AI affects society, including ethics, privacy, and possible <Tooltip text="Unfair leaning towards or against something or someone, often based on pre-existing ideas instead of facts.">bias</Tooltip>.</ListItem>
            <ListItem><strong>Become a better professional:</strong> AI literacy helps you think critically and learn throughout life, which is important in all professions.</ListItem>
        </ul>
        <p className="text-slate-700 leading-relaxed">Being able to assess the information you get from AI tools is especially important. In many professions, important decisions are made. If an AI tool provides incorrect or biased information, you must be able to ask questions and check the information, not just accept it.</p>
      </InteractiveCard>

      <InteractiveCard id="aiAroundUsActivity">
        <SubsectionTitle>Writing Prompt Set 1: AI Around Us</SubsectionTitle>
        <p className="text-slate-700 mb-3 leading-relaxed">Let's become AI detectives! Think about where you encounter AI in everyday life and in your field of <strong className="text-sky-600">{selectedVocation}</strong>.</p>
        <div className="space-y-3">
            <WritingPrompt number="Prompt 1.1:">Name 1-2 examples of AI you use in your everyday life. Briefly describe what they do.</WritingPrompt>
            <WritingPrompt number="Prompt 1.2:">Your vocational field is {selectedVocation}. Research and describe 2-3 specific ways AI is currently used or is emerging in this field. For each, also mention one potential ethical issue or concern related to its use.</WritingPrompt>
            <WritingPrompt number="Prompt 1.3:">Based on one of the examples from your vocational field ({selectedVocation} - Prompt 1.2), explain how AI can help professionals in that task. Then, describe a potential disadvantage or problem if the AI makes a mistake or is used incorrectly in that specific scenario.</WritingPrompt>
        </div>
      </InteractiveCard>
    </section>
  );
};