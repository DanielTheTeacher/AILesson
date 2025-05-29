
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.tsx';
import { SectionTitle } from '../ui/SectionTitle.tsx';
import { SubsectionTitle } from '../ui/SubsectionTitle.tsx';
import { ListItem } from '../ui/ListItem.tsx';
import { Vocation, VocationSpecificProps } from '../../types.ts';
// Add WritingPrompt if specific prompts are directly in this section
// import { WritingPrompt } from '../ui/WritingPrompt.tsx';

export const SkillsConnectSection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {
 
  const getVocationSpecificSkillsConnectIntro = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "This AI literacy guide is designed to complement your learning with the \"Skills Elektro\" textbook. Many concepts you're developing are directly relevant.";
      case Vocation.Helse:
        return `This AI literacy guide connects to core competencies in Helse & Oppvekstfag. Skills like communication, ethics, and observation are vital when working with AI in healthcare settings. (Note: "Skills Elektro" references below are illustrative; adapt or find equivalent texts for Helse & Oppvekstfag).`;
      case Vocation.Bygg:
        return `For Bygg & Anleggsteknikk, understanding AI ties into project management, material science, and safety protocols. (Note: "Skills Elektro" references below are illustrative; adapt or find equivalent texts for Bygg & Anleggsteknikk).`;
      default:
        return "This AI literacy guide is designed to complement your learning with your vocational textbooks.";
    }
  };


  return (
    <section className="mb-12" id="skillsConnectPrompts">
      <SectionTitle>Connecting AI to 'Skills' (for {selectedVocation})</SectionTitle>
      <InteractiveCard>
        <p className="text-slate-700 mb-4 leading-relaxed">{getVocationSpecificSkillsConnectIntro()}</p>

        <SubsectionTitle className="mt-4">General Connections (Chapter 1 Focus)</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
          <ListItem><strong>Expectations & New Inventions (Ch 1, pp. 8-9, "Skills Elektro"):</strong> Think of AI as a new, powerful "invention that is changing the use of electricity" and many other fields, including {selectedVocation}. Just like past technologies transformed society, AI is doing so now. The "learning strategies and language tools" mentioned on p. 9 are exactly what you'll use to understand AI.</ListItem>
          <ListItem><strong>Vocational English for AI (Ch 1, pp. 18-19, "Skills Elektro"):</strong> As you learn specialized vocabulary for {selectedVocation}, recognize that understanding AI also involves learning new "vocational English" specific to AI and digital technologies (like "algorithm," "bias," "hallucination").</ListItem>
          <ListItem><strong>Innovation: Edison & AI (Ch 1, pp. 40-41, "Skills Elektro"):</strong> Thomas Edison was a great innovator. AI is a modern-day innovation with huge transformative potential. <em>Discussion Point:</em> How is AI similar to or different from Edison's inventions in its impact on society and work within {selectedVocation}?</ListItem>
        </ul>

        <SubsectionTitle className="mt-6">Connections for "1. Explore AI"</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
          <ListItem><strong>Fictional AI vs. Real LLMs (Ch 5, "True Love", pp. 210-211, "Skills Elektro"):</strong> After learning that real LLMs don't "think" like humans, read the summary of Asimov's short story "True Love." <em>Writing Prompt 1.4 (for {selectedVocation}):</em> In what ways does the AI 'Joe' in the story seem to understand or misunderstand human concepts relevant to your field (e.g., 'care' for Helse, 'precision' for Bygg, 'logic' for Elektro)? How does this compare to what you've learned about how real LLMs work?</ListItem>
          <ListItem><strong>AI and Automation in Jobs (Ch 6, "Robots 'to replace up to 20 million factory jobs'", pp. 274-275, "Skills Elektro"):</strong> When we discuss AI enhancing human skills, this article provides context on automation. <em>Writing Prompt 1.5 (for {selectedVocation}):</em> Read the summary of the article. Discuss how AI-driven automation might specifically impact the {selectedVocation} field. What 'human skills' from our list (Module 4) will be most important to complement this automation?</ListItem>
           <ListItem><strong>Human-Tech Integration (Ch 6, "iBoy 101", pp. 278-279, "Skills Elektro"):</strong> This novel excerpt shows an extreme fictional example of human-tech fusion. <em>Discussion Starter:</em> The character in 'iBoy' literally has technology in his brain. While fictional, how does this idea relate to how integrated AI is becoming in our daily tools and devices (like smartphones or specialized equipment in {selectedVocation})?</ListItem>
          <ListItem><strong>Complex Systems Analogy (Ch 2, "The Black Box", pp. 80-81, "Skills Elektro"):</strong> When we say "AI is not magic," think about the complex electronic systems and data recording in aircraft, as described in "The Black Box." AI also relies on vast data and complex algorithms, similar to modern systems in {selectedVocation}.</ListItem>
        </ul>

        <SubsectionTitle className="mt-6">Connections for "2. Think Critically"</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
          <ListItem><strong>Misinformation & Fake News (Ch 4, "Nothing on This Page is Real", pp. 138-139, "Skills Elektro"):</strong> This article is a perfect match! Christopher Blair's "satirical/fake news" directly relates to misinformation and how AI can generate convincing but false content. <em>Writing Prompt 2.2 (after "What is AI-Generated Fiction?" exercise, for {selectedVocation}):</em> Read the summary of "Nothing on This Page is Real." How does Christopher Blair's motivation for creating 'fake news' compare or contrast with how an AI might generate a 'hallucination' relevant to {selectedVocation}? What are the different dangers?</ListItem>
          <ListItem><strong>Evaluating AI as a Source (Ch 4, "Skills Focus: Selecting Sources", p. 146, "Skills Elektro"):</strong> The principles here are <em>essential</em> for evaluating information from AI. AI is a new type of "source" needing extra scrutiny. <em>Activity Idea:</em> Review the 'Selecting Sources' guidelines. How would you adapt step 3 ('Is it relevant?'), step 4 ('Is it reliable?'), and step 5 ('Cross-check') when evaluating information from an AI like NDLA AI Chat for a task in {selectedVocation}?</ListItem>
        </ul>
        
        <SubsectionTitle className="mt-6">Connections for "3. AI as Helper"</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
            <ListItem><strong>"You First" & Learning Strategies (Ch 1, "Skills Focus: Learning Strategies", p. 16, "Skills Elektro"):</strong> The "You First" principle directly links to these strategies. AI can be a tool *within* these. Crucially, apply strategy 1: "Prepare your brain for learning" <em>before</em> engaging AI on {selectedVocation} topics.</ListItem>
        </ul>

        <SubsectionTitle className="mt-6">Connections for "4. Your AI Future"</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
            <ListItem><strong>Relating to Peers (Ch 1, "Core Content: This Is Me", pp. 10-11, "Skills Elektro"):</strong> <em>Writing Prompt 3.2 (related to Prompt 3.1 for {selectedVocation}):</em> Re-read one of the student profiles. Imagine that student is working in {selectedVocation} 5-10 years from now. How might AI be part of *their* daily work? What human skills would still be essential for them?</ListItem>
            <ListItem><strong>Safety, Standards & Human Responsibility (Ch 2, "Safety First!", pp. 54-55 & "Codes and Standards", pp. 76-77, "Skills Elektro"):</strong> When discussing "Ethical Judgment & Responsibility" as a human skill, relate it to the critical importance of safety and standards in {selectedVocation}. AI might suggest something, but human judgment, knowledge of relevant codes/protocols, and responsibility for safety are paramount.</ListItem>
        </ul>

        <SubsectionTitle className="mt-6">Connections for "5. AI & Society"</SubsectionTitle>
        <ul className="list-disc list-inside text-slate-700 space-y-2 leading-relaxed">
            <ListItem><strong>AI & Sustainable Development (Ch 8, "Core Text: Sustainable Development", pp. 346-347, "Skills Elektro"):</strong> <em>Discussion (for {selectedVocation}):</em> How could AI be a tool to achieve (or hinder) Sustainable Development Goals relevant to {selectedVocation} (e.g., energy efficiency for Elektro, resource management for Bygg, equitable access for Helse)?</ListItem>
        </ul>
        <p className="mt-4 text-sm text-slate-600"><em>Further connections from the original "Skills Elektro" list can be adapted based on your specific vocational curriculum for {selectedVocation}. The prompts above aim to make them more relevant to your chosen field.</em></p>
      </InteractiveCard>
    </section>
  );
};