
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
      React.createElement(SectionTitle, { children: "Think Critically: Navigating an AI-Driven World" }),
      
      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        key: 'biasCard',
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

      React.createElement(InteractiveCard, { // SpotTheLieGame is an activity, so this card is collapsible
        key: 'hallucinationsCard',
        id: 'spotTheLieActivity', // ID for navigation
        isCollapsible: true,
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
      
      React.createElement(InteractiveCard, { // This is an activity card
        key: 'critThink-activity1',
        id: 'critThink-activity1-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct1Title', children: "🧪 Experiment: The AI Hallucination Challenge" }),
          React.createElement('p', { key: 'critAct1Desc', className: "text-slate-700 mb-2 leading-relaxed", children: "Your mission: try to (safely and ethically) get an AI to 'hallucinate' – make up information that sounds plausible but isn't true. This helps understand AI fallibility and why checking info is key." }),
          React.createElement('ol', { key: 'critAct1Instructions', className: "list-decimal list-inside text-slate-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct1Inst1', children: "Work individually or in pairs." }),
            React.createElement(ListItem, { key: 'critAct1Inst2', children: "Use an AI chat tool approved by your teacher (e.g., NDLA AI Chat)." }),
            React.createElement(ListItem, { key: 'critAct1Inst3', children: "Goal: Ask questions or give prompts that might lead to a 'hallucinated' (made-up/incorrect) response." }),
            React.createElement(ListItem, { key: 'critAct1Inst4', children: "Try 3-5 different prompts using some tips below." }),
            React.createElement(ListItem, { key: 'critAct1Inst5', children: "For ONE of your attempts: Write down your prompt, the AI's response, why you think it's a hallucination (or why it gave a good answer), and how you could verify it." }),
            React.createElement(ListItem, { key: 'critAct1Inst6', children: "Be ready to share your most interesting attempt." })
          ]}),
          React.createElement('h4', { key: 'critAct1TipsTitle', className: "font-semibold text-slate-600 mt-4 mb-2", children: "Tips for Encouraging AI Hallucinations:" }),
          React.createElement('ul', { key: 'critAct1TipsList', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct1Tip1', children: React.createElement('span', {className: 'text-sm'}, ["Ask about very recent or future events (e.g., 'What were the results of the ", selectedVocation, " competition happening next month?')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip2', children: React.createElement('span', {className: 'text-sm'}, ["Ask about very obscure or niche topics (e.g., 'History of the left-handed widget tightener in ", selectedVocation, " in Tingvoll, 1920s.')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip3', children: React.createElement('span', {className: 'text-sm'}, ["Ask leading questions with a false premise (e.g., 'Tell me why Norway banned [common ", selectedVocation, " tool] last year.')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip4', children: React.createElement('span', {className: 'text-sm'}, ["Combine unrelated concepts (e.g., 'Similarities between 18th-century folk music and ", selectedVocation, " safety protocols for [modern equipment]?')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip5', children: React.createElement('span', {className: 'text-sm'}, ["Request highly specific, made-up details (e.g., 'Transcript of the Minister of ", selectedVocation, "'s speech at the fictional \"Tingvoll Centre for Advanced ", selectedVocation, " Studies\" on March 28, 2045?')."]) })
          ]}),
          React.createElement('p', { key: 'critAct1Reminder', className: "text-red-600 font-semibold mt-3 leading-relaxed", children: "Important Reminder ❗: The goal is learning about AI limits. DO NOT share AI hallucinations as real facts outside this exercise. Always verify AI info!" })
        ]
      }),

      React.createElement(InteractiveCard, { // EscapeTheBubble is an activity, so this card is collapsible
        key: 'misinfoCard',
        id: 'escapeBubbleActivity', // ID for navigation
        isCollapsible: true,
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
      }),

      React.createElement('h4', { key: 'actSetHeading', className: "text-lg font-semibold text-slate-700 mt-10 mb-4 pt-6 border-t border-slate-300", children: "Chapter 3 Activities - Set 1" }),

      // New Activities Start Here - These are tasks, so they are collapsible
      React.createElement(InteractiveCard, {
        key: 'critThink-activity2',
        id: 'critThink-activity2-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct2Title', children: "✍️ Writing Prompt: Spotting Unfairness" }),
          React.createElement('p', { key: 'critAct2Desc', className: "text-slate-700 mb-2 leading-relaxed", children: "The lesson talks about AI being unfair if it's trained on biased data." }),
          React.createElement('ul', { key: 'critAct2List', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct2Li1', children: "Can you remember a time you saw something that felt unfair in an app, a game, an ad, or on social media (e.g., a job ad only showing men, a beauty filter that changes features too much)?" }),
            React.createElement(ListItem, { key: 'critAct2Li2', children: "Briefly describe it. Why did it feel unfair?" })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity3',
        id: 'critThink-activity3-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct3Title', children: ["💬 Discussion Prompt: AI Mistakes at Work (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'critAct3Desc', className: "text-slate-700 mb-2 leading-relaxed", children: ["AI sometimes makes 'hallucinations' – it gives wrong information that looks real. If an AI gave wrong advice or instructions for a specific task in your ", selectedVocation, " field (e.g., a wrong measurement for a Bygg project, an incorrect safety step for Elektro, wrong patient information for Helse), what's ONE bad thing that could happen on the job? Discuss one clear example (Small Group)."] })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity4',
        id: 'critThink-activity4-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct4Title', children: ["🔍 Exploration Activity: Is This Real? (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'critAct4Desc', className: "text-slate-700 mb-2 leading-relaxed", children: ["The teacher will give you ONE short piece of information or a 'fact' related to ", selectedVocation, ". It might be true, or it might be an AI-generated fake."] }),
          React.createElement('ul', { key: 'critAct4List', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct4Li1', children: "With a partner, use a search engine to try and check if it's true. Look for reliable sources." }),
            React.createElement(ListItem, { key: 'critAct4Li2', children: "Decide: Real or Fake? Why do you think so? Be ready to share one source you checked." })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity5',
        id: 'critThink-activity5-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct5Title', children: "💡 Mini-Scenario: What Would You Say?" }),
          React.createElement('p', { key: 'critAct5Desc', className: "text-slate-700 mb-2 leading-relaxed", children: ["Imagine a friend shares a 'surprising fact' about ", selectedVocation, " on social media that you think might be wrong. The teacher will give you an example of such a fact."] }),
          React.createElement('ul', { key: 'critAct5List', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct5Li1', children: "What is ONE polite question you could ask your friend to check if the information is true, without starting an argument?" }),
            React.createElement(ListItem, { key: 'critAct5Li2', children: "Share your question with the class." })
          ]})
        ]
      })
      // New Activities End Here
    )
  );
};
