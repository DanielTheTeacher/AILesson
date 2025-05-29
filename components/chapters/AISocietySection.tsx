
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { SubsectionTitle } from '../ui/SubsectionTitle.tsx';
import { Tooltip } from '../ui/Tooltip.tsx';
import { ResourceLink } from '../ui/ResourceLink.tsx';
import { CitationLink } from '../ui/CitationLink.tsx';
import { WritingPrompt } from '../ui/WritingPrompt.tsx';
import { ListItem } from '../ui/ListItem.tsx';
import { EthicalDilemmasTabs } from '../shared/EthicalDilemmasTabs.tsx';
import { VocationSpecificProps } from '../../types.ts';

export const AISocietySection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {
  return (
    <section className="mb-12">
      <SectionTitle>5. AI & Society: Your Responsibility as a User and Citizen</SectionTitle>
      
      <InteractiveCard>
        <SubsectionTitle>The Attention Economy and AI's Role</SubsectionTitle>
         <p className="text-slate-700 mb-2 leading-relaxed">
            The <Tooltip text="The idea that your attention is valuable, and tech companies design products to capture it, often for advertising revenue.">Attention Economy</Tooltip> is about your attention being valuable, and tech companies design products to capture it, often for advertising revenue.<CitationLink referenceId="ref-13" text="[13]" />
            <ResourceLink href="https://econreview.studentorg.berkeley.edu/paying-attention-the-attention-economy/">Read: The Attention Economy (Text)</ResourceLink>
            <ResourceLink href="https://www.youtube.com/watch?v=50R21mblLb0">Watch: The Attention Economy (Video)</ResourceLink>
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">AI is an engine in this:<CitationLink referenceId="ref-14" text="[14]" /></p>
        <ul className="list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed">
            <ListItem><strong>Personalization:</strong> AI algorithms tailor content (feeds, recommendations, notifications) to be as engaging as possible for you.</ListItem>
            <ListItem><strong>Engagement Optimization:</strong> AI can identify and promote content that captures attention (e.g., emotional, sensational), regardless of quality or accuracy.</ListItem>
        </ul>
        <p className="text-slate-700 mb-2 leading-relaxed">
            Once your attention is captured, you become more susceptible to manipulation. Misinformation and disinformation can more easily take root when you're already engaged and perhaps less critical. Your values can also be subtly shaped. For example, you might see a "cringe" video of a woman with brightly colored hair who is vegan and says something outrageous. Even if the video is designed purely to provoke anger and get views (thereby making money for the creator), repeated exposure to such content could unconsciously affect your attitude towards people with colored hair, vegans, or people holding certain political opinions. The goal of such content is often just to make you react, not to inform or engage in good faith.
        </p>
        <p className="text-slate-700 leading-relaxed">
            Disadvantages can include increased distraction, impact on mental health, and spread of misleading content. For you as a vocational student in <strong className="text-sky-600">{selectedVocation}</strong>, it's important to protect your focus for learning and future work.
        </p>
        <p className="text-slate-700 mt-2 leading-relaxed">
          <strong>Supplementary Material:</strong> For more on how online content can be designed to provoke reactions like anger, watch CGPGrey's video: <a href="https://www.youtube.com/watch?v=rE3j_RHkqJc" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Why I'm Not Angry (Anymore)</a>. (Note: This is an external link to YouTube.)
        </p>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>Ethical Dilemmas in AI</SubsectionTitle>
        <EthicalDilemmasTabs selectedVocation={selectedVocation} />
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>Your Voice Counts: Contribute to Ethical AI Development</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
            You're not just a passive user of AI – you can help shape how AI is developed and used ethically!
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed">
            <ListItem><strong>Give feedback:</strong> When using AI tools, provide constructive criticism about performance, bias, or usability.</ListItem>
            <ListItem><strong>Promote ethical practices:</strong> In your future job in <strong className="text-sky-600">{selectedVocation}</strong>, advocate for ethical AI principles and responsible use.</ListItem>
            <ListItem><strong>Be mindful of the data you create:</strong> The data you generate online and through your interactions with AI can be used to train future AI models.</ListItem>
            <ListItem><strong>Join the dialogue:</strong> Engage in discussions about AI, such as in student councils or professional forums. Community input is valuable.</ListItem>
        </ul>
      </InteractiveCard>

      <InteractiveCard id="ethicsCharterActivity">
        <SubsectionTitle>Writing Prompt 5.1: My AI Ethics Charter Ideas</SubsectionTitle>
        <p className="text-slate-700 mb-3 leading-relaxed">Think about what you've learned. What are the 2-3 most important principles you believe should guide your use of AI responsibly and ethically, both in your studies for <strong className="text-sky-600">{selectedVocation}</strong> now and in your future job? Write them down and briefly explain why each is important to you.</p>
        <p className="text-slate-700 mt-2 leading-relaxed"><em>(This can be a starting point for a class discussion or a personal commitment.)</em></p>
      </InteractiveCard>
    </section>
  );
};