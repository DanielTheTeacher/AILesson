import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { CitationLink } from '../ui/CitationLink.js';
import { ListItem } from '../ui/ListItem.js';
import { SpotTheLieGame } from '../shared/SpotTheLieGame.js';
import { EscapeTheBubble } from '../shared/EscapeTheBubble.js';
import { Vocation } from '../../types.js'; // Vocation is JS object

export const CriticalThinkingSection = ({ selectedVocation }) => { // Removed React.FC and prop types

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
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "2. Think Critically: Navigating an AI-Driven World" }),
      
      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "How AI Learns (and Gets it Wrong): Bias In, Bias Out" }),
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-2 leading-relaxed" },
            "AI models learn from data; if data contains bias, AI will reflect/amplify it.",
            React.createElement(CitationLink, { key: 'c1', referenceId: "ref-7", text: "[7]" }),
            React.createElement(ResourceLink, { key: 'r1', href: "https://www.youtube.com/watch?v=DzV10l-OJwQ", children: "Watch: AI Bias Explained" }),
            React.createElement(ResourceLink, { key: 'r2', href: "https://www.youtube.com/watch?v=x2mRoFNm22g", children: "Watch: How Training Data Creates Bias" })
          ),
          React.createElement('p', { key: 'p2', className: "text-slate-700 mb-2 leading-relaxed" }, "Examples of AI bias that could affect you (specifically for ", React.createElement('strong', { key: 's1', className: "text-sky-600" }, selectedVocation), " and generally):"),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 mb-2 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's2' }, "Dangerous \"Facts\" for Your Trade (", selectedVocation, "):"), " ", getVocationSpecificBiasExample()] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's3' }, "Getting Skipped for an Opportunity (And No One Knows Why):"), " Let's say in a few years you apply for a summer job or a special program. The company uses AI to sort through applications. Your application might get skipped. It could be that the AI was poorly designed to promote diversity and ended up accidentally filtering *out* male applicants for certain roles, or it might unfairly filter out female candidates for technical roles if it learned from historical data where mostly men held those positions. Or it might be looking for tiny, weird patterns in CVs that it <em>thinks</em> predict success, but actually have nothing to do with how good you'd be, accidentally discriminating against you."] }),
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's4' }, "Social Media Misunderstandings & Shadow Bans:"), " You post something online – a joke, an opinion, a comment. An AI moderator, trained mostly on English internet drama or American cultural issues, might misunderstand your Norwegian slang, sarcasm, or cultural reference. It could flag your normal comment as \"problematic,\" delete it, or even temporarily ban your account (\"shadow ban\" you so fewer people see your stuff) because it wrongly thinks you're breaking rules, even when you're just talking like a typical Norwegian teen."] })
          ),
          React.createElement('p', { key: 'p3', className: "text-slate-700 leading-relaxed" },
            "For your vocational field of ", React.createElement('strong', { key: 's5', className: "text-sky-600" }, selectedVocation), ", a biased AI could lead to incorrect diagnoses, unfair assessments, or designs that don't suit everyone. It's important to remember that AI bias often mirrors existing ", React.createElement(Tooltip, { key: 't1', text: "Unfair differences in how groups of people are treated or have access to opportunities in society.", children: "societal inequalities" }), ".", React.createElement(CitationLink, { key: 'c2', referenceId: "ref-7", text: "[7]" }), " Therefore, human oversight and critical assessment are always needed."
          )
        ]
      }),

      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: ["AI \"Hallucinations\" & ", React.createElement('strong', { key: 's6' }, "Looks Real, But Isn't"), ": Spotting Convincing Fakes"] }),
          React.createElement('p', { key: 'p4', className: "text-slate-700 mb-2 leading-relaxed" },
            "Sometimes AI can generate incorrect or misleading information presented as fact. This is called ", React.createElement(Tooltip, { key: 't2', text: "When AI invents facts or information that isn't true.", children: "AI hallucinations" }), ".", React.createElement(CitationLink, { key: 'c3', referenceId: "ref-2", text: "[2]" }),
            React.createElement(ResourceLink, { key: 'r3', href: "https://builtin.com/artificial-intelligence/ai-hallucination", children: "Read: AI Hallucinations Explained" })
          ),
          React.createElement('p', { key: 'p5', className: "text-slate-700 mb-2 leading-relaxed" },
            React.createElement('strong', { key: 's7' }, "Why does this happen?"), " AI hallucinations occur because AI doesn't 'know' but predicts based on patterns.", React.createElement(CitationLink, { key: 'c4', referenceId: "ref-2", text: "[2]" }), " Think of it like a super-advanced autocomplete. If you ask it, 'Who will win the Ballon d'Or in 2025?', it doesn't know the answer. But it knows which football players' names often appear near 'Ballon d'Or winner'. So, it might confidently name a famous current player. It ", React.createElement('em', { key: 'e1' }, "sounds"), " believable because the name is right, the context is right, but the AI is just making a highly probable guess, not stating a known fact. It can be totally wrong."
          ),
          React.createElement('p', { key: 'p6', className: "text-slate-700 mb-2 leading-relaxed" },
            "This isn't deliberate deception by the AI. It's just how it works: predicting patterns. If the patterns in its data are incomplete or lead to a 'likely' but false statement, it will still generate it."
          ),
          React.createElement('p', { key: 'p7', className: "text-slate-700 mb-4 leading-relaxed" },
            "For example, an AI might 'invent' historical events or scientific 'facts.' The problem is made worse because AI can make its output look very real and professional (what I, Daniel the teacher, like to call 'the look of expertise'). Perfect grammar and a confident tone can make false information seem true, even when it's completely made up."
          ),
          React.createElement(SpotTheLieGame, { key: 'game1' })
        ]
      }),
      
      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Misinformation, Echo Chambers & Filter Bubbles" }),
          React.createElement('p', { key: 'p8', className: "text-slate-700 mb-2 leading-relaxed" },
            "On the internet, false or inaccurate information can spread quickly. It's important to distinguish between:"
          ),
          React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-slate-700 my-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li4', children: React.createElement(Tooltip, { key: 't3', text: "False info spread, often without the sender knowing it's false.", children: "Misinformation" }) }),
            React.createElement(ListItem, { key: 'li5', children: React.createElement(Tooltip, { key: 't4', text: "False info created and spread intentionally to deceive or harm.", children: "Disinformation" }) })
          ),
          React.createElement(ResourceLink, { key: 'r4', href: "https://guides.lib.k-state.edu/media-literacy/factcheck", children: "Learn: Mis/Disinformation & Fact-Checking" }),
          React.createElement('p', { key: 'p9', className: "text-slate-700 mb-2 mt-3 leading-relaxed" },
            "AI can amplify these problems. Algorithms on social media can create:"
          ),
          React.createElement('ul', { key: 'ul3', className: "list-disc list-inside text-slate-700 my-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li6', children: React.createElement(Tooltip, { key: 't5', text: "Environments where you mostly see opinions you already agree with, and alternative views are rarely encountered.", children: "Echo Chambers" }) }),
            React.createElement(ListItem, { key: 'li7', children: React.createElement(Tooltip, { key: 't6', text: "When algorithms personalize the content you see based on your past behavior, so you miss other perspectives, often without knowing it.", children: "Filter Bubbles" }) })
          ),
          React.createElement(ResourceLink, { key: 'r5', href: "https://en.wikipedia.org/wiki/Filter_bubble", children: "Read: Filter Bubbles (Wikipedia)" }),
          React.createElement(ResourceLink, { key: 'r6', href: "https://www.youtube.com/watch?v=eaolE1blpWk", children: "Watch: Echo Chambers & Filter Bubbles" }),
          React.createElement('p', { key: 'p10', className: "text-slate-700 mb-2 mt-3 leading-relaxed" },
            "This is related to the ", React.createElement(Tooltip, { key: 't7', text: "The idea that your attention is a valuable resource that websites and apps compete for, often through advertising.", children: "Attention Economy" }), ". AI is good at finding and promoting content that captures attention, regardless of whether it's true or good for you."
          ),
          React.createElement('p', { key: 'p11', className: "text-slate-700 mb-2 font-semibold text-red-700 leading-relaxed" },
            React.createElement('strong', { key: 's8' }, "The Dangers are Real:"), " This isn't just about being wrong; it's serious. Believing and spreading false AI-generated information can have severe consequences. In your future jobs in ", React.createElement('strong', { key: 's9', className: "text-red-600" }, selectedVocation), ", decisions based on bad info could lead to dangerous mistakes, financial loss, or harm to people's reputations or even their safety. Imagine an electrician relying on faulty AI-generated wiring diagrams, or a healthcare assistant acting on incorrect AI medical advice. Online, it can lead to bullying, scams, and even influence important societal events like elections with false narratives, undermining democratic processes. Being critical isn't just a skill; it's a responsibility to protect yourself and others."
          ),
          React.createElement(EscapeTheBubble, { key: 'escape1' })
        ]
      })
    )
  );
};