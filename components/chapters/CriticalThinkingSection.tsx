import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard';
import { SectionTitle } from '../ui/SectionTitle';
import { SubsectionTitle } from '../ui/SubsectionTitle';
import { Tooltip } from '../ui/Tooltip';
import { ResourceLink } from '../ui/ResourceLink';
import { CitationLink } from '../ui/CitationLink';
import { ListItem } from '../ui/ListItem';
import { SpotTheLieGame } from '../shared/SpotTheLieGame';
import { EscapeTheBubble } from '../shared/EscapeTheBubble';
import { Vocation, VocationSpecificProps } from '../../types';

export const CriticalThinkingSection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {

  const getVocationSpecificBiasExample = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "Imagine you're an Elektro-student looking up safety rules for high-voltage installations. An AI might give you an answer in perfect Norwegian, claiming these are 'Norwegian electrical safety standards.' But, if the AI was mostly trained on American data, it might actually be giving you US electrical codes, just translated. Following these could be extremely dangerous in Norway.";
      case Vocation.Helse:
        return "Consider an AI tool used for initial patient symptom assessment in Helse. If trained on data that underrepresents certain demographics, it might misdiagnose or delay necessary care for individuals from those groups, leading to poorer health outcomes.";
      case Vocation.Bygg:
        return "In Bygg & Anleggsteknikk, an AI tool for estimating material costs might be biased if its training data primarily includes projects from urban areas with different material availability and pricing than rural areas, leading to inaccurate budgets for projects outside cities.";
      default:
        return "An AI tool might provide misleading information specific to your field if its training data is not representative.";
    }
  };

  return (
    <section className="mb-12">
      <SectionTitle>2. Think Critically: Navigating an AI-Driven World</SectionTitle>
      
      <InteractiveCard>
        <SubsectionTitle>How AI Learns (and Gets it Wrong): Bias In, Bias Out</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          AI models learn from data; if data contains bias, AI will reflect/amplify it.<CitationLink referenceId="ref-7" text="[7]" />
          <ResourceLink href="https://www.youtube.com/watch?v=DzV10l-OJwQ">Watch: AI Bias Explained</ResourceLink>
          <ResourceLink href="https://www.youtube.com/watch?v=x2mRoFNm22g">Watch: How Training Data Creates Bias</ResourceLink>
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">Examples of AI bias that could affect you (specifically for <strong className="text-sky-600">{selectedVocation}</strong> and generally):</p>
        <ul className="list-disc list-inside text-slate-700 mb-2 space-y-2 leading-relaxed">
          <ListItem><strong>Dangerous "Facts" for Your Trade ({selectedVocation}):</strong> {getVocationSpecificBiasExample()}</ListItem>
          <ListItem><strong>Getting Skipped for an Opportunity (And No One Knows Why):</strong> Let's say in a few years you apply for a summer job or a special program. The company uses AI to sort through applications. Your application might get skipped. It could be that the AI was poorly designed to promote diversity and ended up accidentally filtering *out* male applicants for certain roles, or it might unfairly filter out female candidates for technical roles if it learned from historical data where mostly men held those positions. Or it might be looking for tiny, weird patterns in CVs that it <em>thinks</em> predict success, but actually have nothing to do with how good you'd be, accidentally discriminating against you.</ListItem>
          <ListItem><strong>Social Media Misunderstandings & Shadow Bans:</strong> You post something online – a joke, an opinion, a comment. An AI moderator, trained mostly on English internet drama or American cultural issues, might misunderstand your Norwegian slang, sarcasm, or cultural reference. It could flag your normal comment as "problematic," delete it, or even temporarily ban your account ("shadow ban" you so fewer people see your stuff) because it wrongly thinks you're breaking rules, even when you're just talking like a typical Norwegian teen.</ListItem>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          For your vocational field of <strong className="text-sky-600">{selectedVocation}</strong>, a biased AI could lead to incorrect diagnoses, unfair assessments, or designs that don't suit everyone. It's important to remember that AI bias often mirrors existing <Tooltip text="Unfair differences in how groups of people are treated or have access to opportunities in society.">societal inequalities</Tooltip>.<CitationLink referenceId="ref-7" text="[7]" /> Therefore, human oversight and critical assessment are always needed.
        </p>
      </InteractiveCard>

      <InteractiveCard>
        <SubsectionTitle>AI "Hallucinations" & <strong>Looks Real, But Isn't</strong>: Spotting Convincing Fakes</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          Sometimes AI can generate incorrect or misleading information presented as fact. This is called <Tooltip text="When AI invents facts or information that isn't true.">AI hallucinations</Tooltip>.<CitationLink referenceId="ref-2" text="[2]" />
          <ResourceLink href="https://builtin.com/artificial-intelligence/ai-hallucination">Read: AI Hallucinations Explained</ResourceLink>
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          <strong>Why does this happen?</strong> AI hallucinations occur because AI doesn't 'know' but predicts based on patterns.<CitationLink referenceId="ref-2" text="[2]" /> Think of it like a super-advanced autocomplete. If you ask it, 'Who will win the Ballon d'Or in 2025?', it doesn't know the answer. But it knows which football players' names often appear near 'Ballon d'Or winner'. So, it might confidently name a famous current player. It <em>sounds</em> believable because the name is right, the context is right, but the AI is just making a highly probable guess, not stating a known fact. It can be totally wrong.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          This isn't deliberate deception by the AI. It's just how it works: predicting patterns. If the patterns in its data are incomplete or lead to a 'likely' but false statement, it will still generate it.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          For example, an AI might 'invent' historical events or scientific 'facts.' The problem is made worse because AI can make its output look very real and professional (what I, Daniel the teacher, like to call 'the look of expertise'). Perfect grammar and a confident tone can make false information seem true, even when it's completely made up.
        </p>
        <SpotTheLieGame />
      </InteractiveCard>
      
      <InteractiveCard>
        <SubsectionTitle>Misinformation, Echo Chambers & Filter Bubbles</SubsectionTitle>
        <p className="text-slate-700 mb-2 leading-relaxed">
          On the internet, false or inaccurate information can spread quickly. It's important to distinguish between:
        </p>
        <ul className="list-disc list-inside text-slate-700 my-2 space-y-1 leading-relaxed">
            <ListItem><Tooltip text="False info spread, often without the sender knowing it's false.">Misinformation</Tooltip></ListItem>
            <ListItem><Tooltip text="False info created and spread intentionally to deceive or harm.">Disinformation</Tooltip></ListItem>
        </ul>
        <ResourceLink href="https://guides.lib.k-state.edu/media-literacy/factcheck">Learn: Mis/Disinformation & Fact-Checking</ResourceLink>
        
        <p className="text-slate-700 mb-2 mt-3 leading-relaxed">
          AI can amplify these problems. Algorithms on social media can create:
        </p>
        <ul className="list-disc list-inside text-slate-700 my-2 space-y-1 leading-relaxed">
            <ListItem><Tooltip text="Environments where you mostly see opinions you already agree with, and alternative views are rarely encountered.">Echo Chambers</Tooltip></ListItem>
            <ListItem><Tooltip text="When algorithms personalize the content you see based on your past behavior, so you miss other perspectives, often without knowing it.">Filter Bubbles</Tooltip></ListItem>
        </ul>
        <ResourceLink href="https://en.wikipedia.org/wiki/Filter_bubble">Read: Filter Bubbles (Wikipedia)</ResourceLink>
        <ResourceLink href="https://www.youtube.com/watch?v=eaolE1blpWk">Watch: Echo Chambers & Filter Bubbles</ResourceLink>
        
        <p className="text-slate-700 mb-2 mt-3 leading-relaxed">
          This is related to the <Tooltip text="The idea that your attention is a valuable resource that websites and apps compete for, often through advertising.">Attention Economy</Tooltip>. AI is good at finding and promoting content that captures attention, regardless of whether it's true or good for you.
        </p>
        <p className="text-slate-700 mb-2 font-semibold text-red-700 leading-relaxed">
          <strong>The Dangers are Real:</strong> This isn't just about being wrong; it's serious. Believing and spreading false AI-generated information can have severe consequences. In your future jobs in <strong className="text-red-600">{selectedVocation}</strong>, decisions based on bad info could lead to dangerous mistakes, financial loss, or harm to people's reputations or even their safety. Imagine an electrician relying on faulty AI-generated wiring diagrams, or a healthcare assistant acting on incorrect AI medical advice. Online, it can lead to bullying, scams, and even influence important societal events like elections with false narratives, undermining democratic processes. Being critical isn't just a skill; it's a responsibility to protect yourself and others.
        </p>
        <EscapeTheBubble />
      </InteractiveCard>
    </section>
  );
};
