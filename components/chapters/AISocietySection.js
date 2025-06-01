

import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';
import { ListItem } from '../ui/ListItem.js';
import { EthicalDilemmasTabs } from '../shared/EthicalDilemmasTabs.js';
import { EmptyReferencesDropdown } from '../ui/EmptyReferencesDropdown.js';
import { FictionalStoryLink } from '../ui/FictionalStoryLink.js'; 

export const AI_SOCIETY_SUB_CHAPTERS = [
  { id: 'aisociety-attention-economy', title: 'Attention Economy & AI' },
  { id: 'aisociety-ethical-dilemmas', title: 'Ethical Dilemmas (Interactive)' }, // This is the 'ethicalDilemmasActivity' card
  { id: 'aisociety-your-voice-counts', title: 'Your Voice Counts' },
  { id: 'aisociety-ethics-charter-prompt', title: '✍️ AI Ethics Charter Prompt' }, // This is 'ethicsCharterActivity'
  { id: 'aisociety-chapter3-set2-activities-heading', title: 'Chapter 3 Activities - Set 2' }
];

export const AISocietySection = ({ selectedVocation }) => { 
  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "AI & Society: Your Responsibilities as a Citizen" }),
      
      React.createElement(InteractiveCard, { 
        id: AI_SOCIETY_SUB_CHAPTERS[0].id, // 'aisociety-attention-economy'
        "data-subchapter-target": "true",
        key: "attentionEconomyCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "The Attention Economy and AI's Role" }),
          React.createElement('div', { key: 'content-block-p1-society', className: "flex flex-col gap-y-3 mb-2" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p1', className: "text-neutral-700 leading-relaxed" }, 
                "The ", React.createElement(Tooltip, { key: 't1', text: "The idea that your attention is valuable, and tech companies design products to capture it, often for advertising revenue.", children: "Attention Economy" }), " is about your attention being valuable, and tech companies design products to capture it, often for advertising revenue."
              )
            ),
            React.createElement('div', { key: 'links-p1-society', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'r1', href: "https://econreview.studentorg.berkeley.edu/paying-attention-the-attention-economy/", children: "Read: The Attention Economy (Text)" }),
                React.createElement(ResourceLink, { key: 'r2', href: "https://www.youtube.com/watch?v=50R21mblLb0", children: "Watch: The Attention Economy (Video)" })
              )
            )
          ),
          React.createElement('p', { key: 'p2', className: "text-neutral-700 mb-2 leading-relaxed" }, "AI is an engine in this:"),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's1' }, "Personalization:"), " AI algorithms tailor content (feeds, recommendations, notifications) to be as engaging as possible for you."] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's2' }, "Engagement Optimization:"), " AI can identify and promote content that captures attention (e.g., emotional, sensational), regardless of quality or accuracy."] })
          ),
          React.createElement('p', { key: 'p3', className: "text-neutral-700 mb-2 leading-relaxed" },
            "Once your attention is captured, you become more susceptible to manipulation. Misinformation and disinformation can more easily take root when you're already engaged and perhaps less critical. Your values can also be subtly shaped. For example, you might see a \"cringe\" video of a woman with brightly colored hair who is vegan and says something outrageous. Even if the video is designed purely to provoke anger and get views (thereby making money for the creator), repeated exposure to such content could unconsciously affect your attitude towards people with colored hair, vegans, or people holding certain political opinions. The goal of such content is often just to make you react, not to inform or engage in good faith."
          ),
          React.createElement('p', { key: 'p4', className: "text-neutral-700 leading-relaxed" },
            "Disadvantages can include increased distraction, impact on mental health, and spread of misleading content. For you as a vocational student in ", React.createElement('strong', { key: 's3', className: "text-teal-600" }, selectedVocation), ", it's important to protect your focus for learning and future work."
          ),
          
          React.createElement('div', { key: 'content-block-p5-society', className: "flex flex-col sm:flex-row gap-x-6 mt-2" }, 
            React.createElement('div', { className: "flex-1" },
              React.createElement('p', { key: 'p5', className: "text-neutral-700 leading-relaxed" },
                React.createElement('strong', { key: 's4' }, "Supplementary Material:"), " For more on how online content can be designed to provoke reactions like anger, watch CGPGrey's video: ", React.createElement('a', { key: 'a1', href: "https://www.youtube.com/watch?v=rE3j_RHkqJc", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "Why I'm Not Angry (Anymore)"), ". (Note: This is an external link to YouTube.)"
              )
            )
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-dropdown-attention' })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: AI_SOCIETY_SUB_CHAPTERS[1].id, // 'aisociety-ethical-dilemmas' (which is 'ethicalDilemmasActivity')
        "data-subchapter-target": "true",
        key: "ethicalDilemmasCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "Ethical Dilemmas in AI" }),
          React.createElement(EthicalDilemmasTabs, { key: 'edt1', selectedVocation: selectedVocation })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: AI_SOCIETY_SUB_CHAPTERS[2].id, // 'aisociety-your-voice-counts'
        "data-subchapter-target": "true",
        key: "yourVoiceCountsCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Your Voice Counts: Contribute to Ethical AI Development" }),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 mb-2 leading-relaxed" },
            "You're not just a passive user of AI – you can help shape how AI is developed and used ethically!"
          ),
          React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's5' }, "Give feedback:"), " When using AI tools, provide constructive criticism about performance, bias, or usability."] }),
            React.createElement(ListItem, { key: 'li4', children: [React.createElement('strong', { key: 's6' }, "Promote ethical practices:"), " In your future job in ", React.createElement('strong', { key: 's7', className: "text-teal-600" }, selectedVocation), ", advocate for ethical AI principles and responsible use."] }),
            React.createElement(ListItem, { key: 'li5', children: [React.createElement('strong', { key: 's8' }, "Be mindful of the data you create:"), " The data you generate online and through your interactions with AI can be used to train future AI models."] }),
            React.createElement(ListItem, { key: 'li6', children: [React.createElement('strong', { key: 's9' }, "Join the dialogue:"), " Engage in discussions about AI, such as in student councils or professional forums. Community input is valuable."] })
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-dropdown-voice' })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: AI_SOCIETY_SUB_CHAPTERS[3].id, // 'aisociety-ethics-charter-prompt' (which is 'ethicsCharterActivity')
        "data-subchapter-target": "true",
        key: "ethicsCharterActivityCard",
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'sub4', children: ["✍️ Writing Prompt: My AI Ethics Charter Ideas (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'p7', className: "text-neutral-700 mb-3 leading-relaxed" }, "Think about what you'velearned. What are the 2-3 most important principles you believe should guide your use of AI responsibly and ethically, both in your studies for ", React.createElement('strong', { key: 's10', className: "text-teal-600" }, selectedVocation), " now and in your future job? Write them down and briefly explain why each is important to you."),
          React.createElement('p', { key: 'p8', className: "text-neutral-700 mt-2 leading-relaxed" }, React.createElement('em', { key: 'e1' }, "(This can be a starting point for a class discussion or a personal commitment.)"))
        ]
      }),

      React.createElement('h4', { 
        key: 'actSetHeading2', 
        id: AI_SOCIETY_SUB_CHAPTERS[4].id, // 'aisociety-chapter3-set2-activities-heading'
        "data-subchapter-target": "true",
        className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", 
        children: "Chapter 3 Activities - Set 2" 
      }),

      React.createElement(InteractiveCard, {
        key: 'aisociety-activity1',
        id: 'aisociety-activity1-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'socAct1Title', children: "✍️ Writing Prompt: My Tech Time Check" }),
          React.createElement('p', { key: 'socAct1Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "The lesson talks about the Attention Economy, where apps try to keep you watching." }),
          React.createElement('ul', { key: 'socAct1List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'socAct1Li1', children: "Which app or website do you think takes up most of your attention each day?" }),
            React.createElement(ListItem, { key: 'socAct1Li2', children: "What's ONE small thing you could do this week to control your time on that app a bit more (e.g., set a timer, turn off notifications for an hour)?" })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aisociety-activity2',
        id: 'aisociety-activity2-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'socAct2Title', children: ["💬 Discussion Prompt: Problem with AI Idea (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'socAct2Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Look at one of the 'Ethical Dilemmas' for ", selectedVocation, " in the lesson."] }),
          React.createElement('ul', { key: 'socAct2List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'socAct2Li1', children: "If the AI in that story makes a mistake, what is ONE bad thing that could happen to a person or the company?" }),
            React.createElement(ListItem, { key: 'socAct2Li2', children: "Discuss with a partner." })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aisociety-activity3',
        id: 'aisociety-activity3-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'socAct3Title', children: "💡 Teacher-Led Example: AI Story of the Week" }),
          React.createElement('p', { key: 'socAct3Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "The teacher will share ONE recent news headline or short story about AI (e.g., a new AI tool, an AI mistake, an ethical concern)." }),
          React.createElement('ul', { key: 'socAct3List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'socAct3Li1', children: "As a class, discuss: What is the main point of the story?" }),
            React.createElement(ListItem, { key: 'socAct3Li2', children: "Does it remind you of anything we learned in this AI lesson (e.g., AI bias, AI helping jobs, AI making things up)?" })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aisociety-activity4',
        id: 'aisociety-activity4-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'socAct4Title', children: ["💡 Mini-Debate: AI in Our School/Town (", selectedVocation, "Focus)"] }),
          React.createElement('p', { key: 'socAct4Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Imagine the school wants to use a new AI tool to help students in ", selectedVocation, " (e.g., an AI to give feedback on practical work designs for Bygg, an AI to suggest study plans for Elektro, an AI to simulate patient interactions for Helse)."] }),
          React.createElement('ul', { key: 'socAct4List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'socAct4Li1', children: "One half of the class: Think of ONE big benefit of this AI." }),
            React.createElement(ListItem, { key: 'socAct4Li2', children: "Other half of the class: Think of ONE potential problem or worry about this AI." })
          ]}),
          React.createElement('p', { key: 'socAct4Instruction', className: "text-neutral-700 mb-2 leading-relaxed", children: "Share your benefit and problem with the class." })
        ]
      })
    )
  );
};
