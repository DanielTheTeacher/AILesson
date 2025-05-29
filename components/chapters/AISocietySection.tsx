import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { CitationLink } from '../ui/CitationLink.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';
import { ListItem } from '../ui/ListItem.js';
import { EthicalDilemmasTabs } from '../shared/EthicalDilemmasTabs.js';
// Types removed

export const AISocietySection = ({ selectedVocation }) => { // Removed React.FC and prop types
  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "5. AI & Society: Your Responsibility as a User and Citizen" }),
      
      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "The Attention Economy and AI's Role" }),
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-2 leading-relaxed" },
            "The ", React.createElement(Tooltip, { key: 't1', text: "The idea that your attention is valuable, and tech companies design products to capture it, often for advertising revenue.", children: "Attention Economy" }), " is about your attention being valuable, and tech companies design products to capture it, often for advertising revenue.", React.createElement(CitationLink, { key: 'c1', referenceId: "ref-13", text: "[13]" }),
            React.createElement(ResourceLink, { key: 'r1', href: "https://econreview.studentorg.berkeley.edu/paying-attention-the-attention-economy/", children: "Read: The Attention Economy (Text)" }),
            React.createElement(ResourceLink, { key: 'r2', href: "https://www.youtube.com/watch?v=50R21mblLb0", children: "Watch: The Attention Economy (Video)" })
          ),
          React.createElement('p', { key: 'p2', className: "text-slate-700 mb-2 leading-relaxed" }, "AI is an engine in this:", React.createElement(CitationLink, { key: 'c2', referenceId: "ref-14", text: "[14]" })),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's1' }, "Personalization:"), " AI algorithms tailor content (feeds, recommendations, notifications) to be as engaging as possible for you."] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's2' }, "Engagement Optimization:"), " AI can identify and promote content that captures attention (e.g., emotional, sensational), regardless of quality or accuracy."] })
          ),
          React.createElement('p', { key: 'p3', className: "text-slate-700 mb-2 leading-relaxed" },
            "Once your attention is captured, you become more susceptible to manipulation. Misinformation and disinformation can more easily take root when you're already engaged and perhaps less critical. Your values can also be subtly shaped. For example, you might see a \"cringe\" video of a woman with brightly colored hair who is vegan and says something outrageous. Even if the video is designed purely to provoke anger and get views (thereby making money for the creator), repeated exposure to such content could unconsciously affect your attitude towards people with colored hair, vegans, or people holding certain political opinions. The goal of such content is often just to make you react, not to inform or engage in good faith."
          ),
          React.createElement('p', { key: 'p4', className: "text-slate-700 leading-relaxed" },
            "Disadvantages can include increased distraction, impact on mental health, and spread of misleading content. For you as a vocational student in ", React.createElement('strong', { key: 's3', className: "text-sky-600" }, selectedVocation), ", it's important to protect your focus for learning and future work."
          ),
          React.createElement('p', { key: 'p5', className: "text-slate-700 mt-2 leading-relaxed" },
            React.createElement('strong', { key: 's4' }, "Supplementary Material:"), " For more on how online content can be designed to provoke reactions like anger, watch CGPGrey's video: ", React.createElement('a', { key: 'a1', href: "https://www.youtube.com/watch?v=rE3j_RHkqJc", target: "_blank", rel: "noopener noreferrer", className: "text-sky-600 hover:underline" }, "Why I'm Not Angry (Anymore)"), ". (Note: This is an external link to YouTube.)"
          )
        ]
      }),

      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "Ethical Dilemmas in AI" }),
          React.createElement(EthicalDilemmasTabs, { key: 'edt1', selectedVocation: selectedVocation })
        ]
      }),

      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Your Voice Counts: Contribute to Ethical AI Development" }),
          React.createElement('p', { key: 'p6', className: "text-slate-700 mb-2 leading-relaxed" },
            "You're not just a passive user of AI – you can help shape how AI is developed and used ethically!"
          ),
          React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-slate-700 mb-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's5' }, "Give feedback:"), " When using AI tools, provide constructive criticism about performance, bias, or usability."] }),
            React.createElement(ListItem, { key: 'li4', children: [React.createElement('strong', { key: 's6' }, "Promote ethical practices:"), " In your future job in ", React.createElement('strong', { key: 's7', className: "text-sky-600" }, selectedVocation), ", advocate for ethical AI principles and responsible use."] }),
            React.createElement(ListItem, { key: 'li5', children: [React.createElement('strong', { key: 's8' }, "Be mindful of the data you create:"), " The data you generate online and through your interactions with AI can be used to train future AI models."] }),
            React.createElement(ListItem, { key: 'li6', children: [React.createElement('strong', { key: 's9' }, "Join the dialogue:"), " Engage in discussions about AI, such as in student councils or professional forums. Community input is valuable."] })
          )
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: "ethicsCharterActivity",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub4', children: "Writing Prompt 5.1: My AI Ethics Charter Ideas" }),
          React.createElement('p', { key: 'p7', className: "text-slate-700 mb-3 leading-relaxed" }, "Think about what you've learned. What are the 2-3 most important principles you believe should guide your use of AI responsibly and ethically, both in your studies for ", React.createElement('strong', { key: 's10', className: "text-sky-600" }, selectedVocation), " now and in your future job? Write them down and briefly explain why each is important to you."),
          React.createElement('p', { key: 'p8', className: "text-slate-700 mt-2 leading-relaxed" }, React.createElement('em', { key: 'e1' }, "(This can be a starting point for a class discussion or a personal commitment.)"))
        ]
      })
    )
  );
};