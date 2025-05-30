
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';
import { CitationLink } from '../ui/CitationLink.js';
import { ListItem } from '../ui/ListItem.js';
import { Vocation } from '../../types.js'; // Vocation is now a JS object

export const ExploreAISection = ({ selectedVocation }) => { // Removed React.FC and prop types
  
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
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "What is AI?" }),
      
      React.createElement(InteractiveCard, { // This card is explanatory, not a task - remains non-collapsible
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "What is Artificial Intelligence (AI)?" }),
          React.createElement('p', { key: 'p1', className: "text-neutral-700 mb-2 leading-relaxed" },
            "Think of AI as computers or programs that can do things that usually require human intelligence. This can be learning from experience, solving problems, making decisions, or understanding language."
          ),
          React.createElement('p', { key: 'p2', className: "text-neutral-700 mb-2 leading-relaxed" },
            "An important part of AI is ",
            React.createElement(Tooltip, { key: 't1', text: "Systems that learn from large amounts of data to find patterns and make decisions without being specifically programmed for each task.", children: "Machine Learning (ML)" }),
            ". For example, streaming services use Machine Learning (ML) to suggest movies.",
            React.createElement(CitationLink, { key: 'c1', referenceId: "ref-1", text: "[1]" }),
            React.createElement(ResourceLink, { key: 'r1', href: "https://www.youtube.com/watch?v=PeMlggyqz0Y", children: "Watch: ML explained in 100 seconds (2:34)" }),
            React.createElement(ResourceLink, { key: 'rCGPGreyML', href: "https://www.youtube.com/watch?v=R9OHn5ZF4Uo", children: "Watch: CGPGrey: How Machines Learn (8:54)" })
          ),
          React.createElement('p', { key: 'p3', className: "text-neutral-700 mb-4 leading-relaxed" },
            React.createElement(Tooltip, { key: 't2', text: "Advanced 'computer brains' trained on enormous amounts of text and code.", children: "Large Language Models (LLMs)" }),
            " are a type of AI you might have heard of, like ChatGPT. They learn patterns and can generate text, answer questions.",
            React.createElement(CitationLink, { key: 'c2', referenceId: "ref-2", text: "[2]" }),
            " Important: LLMs don't \"think\" like humans; they predict the next word based on learned patterns.",
            React.createElement(CitationLink, { key: 'c3', referenceId: "ref-2", text: "[2]" }),
            React.createElement(ResourceLink, { key: 'r2', href: "https://www.youtube.com/watch?v=sg_fuEzFw0g", children: "Watch: LLMs explained (2:34)" })
          ),
          React.createElement('div', { key: 'div1', className: "bg-teal-50 p-4 rounded-md border border-teal-200" },
            React.createElement('h4', { key: 'h4a', className: "font-semibold text-teal-700 mb-2" }, "AI is not magic!"),
            React.createElement('p', { key: 'p4', className: "text-sm text-neutral-700 leading-relaxed" },
              "It's important to remember that AI works by recognizing and copying patterns from training data; they have no real understanding or consciousness.",
              React.createElement(CitationLink, { key: 'c4', referenceId: "ref-3", text: "[3]" }),
              " This is key to understanding both what AI can do, and what it *cannot* do.",
              React.createElement(ResourceLink, { key: 'r3', href: "https://www.youtube.com/watch?v=b0KaGBOU4Ys", children: "Watch: AI - Pattern Recognition vs. Understanding" })
            )
          )
        ]
      }),

      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "AI in your daily life and future profession" }),
          React.createElement('p', { key: 'p5', className: "text-neutral-700 mb-4 leading-relaxed" }, "AI is not just something for the future – it's already part of your everyday life! You encounter AI when using social media (personalized feed)", React.createElement(CitationLink, { key: 'c5', referenceId: "ref-4", text: "[4]" }), ", email (spam filter)", React.createElement(CitationLink, { key: 'c6', referenceId: "ref-5", text: "[5]" }), ", GPS apps (route optimization)", React.createElement(CitationLink, { key: 'c7', referenceId: "ref-6", text: "[6]" }), ", and smart speakers."),
          React.createElement('h4', { key: 'h4b', className: "font-semibold text-neutral-600 mb-2" }, "AI in Vocational Fields (Focus: ", selectedVocation, "):"),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 mb-3 leading-relaxed" },
            getVocationSpecificExamples(),
            selectedVocation === Vocation.Elektro && (
              React.createElement(React.Fragment, { key: 'frag1' },
                React.createElement(ResourceLink, { key: 'r4', href: "https://matlabsimulation.com/artificial-intelligence-projects-for-electrical-engineering/", children: "Read: Examples of AI in Electrical Engineering" })
              )
            ),
            selectedVocation === Vocation.Helse && (
              React.createElement(React.Fragment, { key: 'frag2' },
                React.createElement(ResourceLink, { key: 'r6', href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10002328/", children: "More: AI in Healthcare" }),
                React.createElement(ResourceLink, { key: 'r7', href: "https://www.forbes.com/sites/forbestechcouncil/2023/07/18/the-role-of-ai-in-modern-health-care/?sh=23a7136e7358", children: "More: AI in Modern Healthcare (Forbes)" })
              )
            ),
            selectedVocation === Vocation.Bygg && (
              React.createElement(React.Fragment, { key: 'frag3' },
                React.createElement(ResourceLink, { key: 'r8', href: "https://www.autodesk.com/construction-cloud/blog/ai-in-construction/", children: "More: AI in Construction (Autodesk)" }),
                React.createElement(ResourceLink, { key: 'r9', href: "https://www.bdcnetwork.com/how-ai-transforming-construction-industry", children: "More: AI Transforming Construction (BDC)" })
              )
            )
          ),
          React.createElement('p', { key: 'p7', className: "text-neutral-700 mt-4 leading-relaxed" },
            "In most professions, AI is about ", React.createElement(Tooltip, { key: 't3', text: "Making better or stronger.", children: "enhancing" }), " human skills, increasing efficiency and safety, not necessarily replacing people. It's important to see how AI can become a useful tool in your specific field!"
          )
        ]
      }),
      
      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Why is AI literacy important for you?" }),
          React.createElement('p', { key: 'p8', className: "text-neutral-700 mb-2 leading-relaxed" },
            React.createElement(Tooltip, { key: 't4', text: "The ability to understand basic AI concepts, critically evaluate AI systems, and use AI tools effectively and ethically.", children: "AI literacy" }), " is more than just a technical skill. It's a key competency for the future, especially for students in fields like ", selectedVocation, ".",
            React.createElement(ResourceLink, { key: 'r10', href: "https://www.datiak12.io/leadership/oped/article/15712114/the-74-why-data-ai-literacy-are-important-skills-for-k12-students", children: "Read: Why AI Literacy is Important" })
          ),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's1' }, "Future-proof your career:"), " AI is changing the job market. With AI literacy, you are better equipped for changes in ", selectedVocation, " and related industries."] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's2' }, "Make informed choices:"), " Understand how AI affects society, including ethics, privacy, and possible ", React.createElement(Tooltip, { key: 't5', text: "Unfair leaning towards or against something or someone, often based on pre-existing ideas instead of facts.", children: "bias" }), "."] }),
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's3' }, "Become a better professional:"), " AI literacy helps you think critically and learn throughout life, which is important in all professions."] })
          ),
          React.createElement('p', { key: 'p9', className: "text-neutral-700 leading-relaxed" }, "Being able to assess the information you get from AI tools is especially important. In many professions, important decisions are made. If an AI tool provides incorrect or biased information, you must be able to ask questions and check the information, not just accept it.")
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: "aiAroundUsActivity",
        isCollapsible: true, // This is a task card
        children: [
          React.createElement(SubsectionTitle, { key: 'sub4', children: "✍️ Writing Prompts: AI Around Us" }),
          React.createElement('p', { key: 'p10', className: "text-neutral-700 mb-3 leading-relaxed" }, "Let's become AI detectives! Think about where you encounter AI in everyday life and in your field of ", React.createElement('strong', { className: "text-teal-600" }, selectedVocation), "."),
          React.createElement('div', { key: 'div2', className: "space-y-3" },
            React.createElement(WritingPrompt, { key: 'wp1', number: "Prompt:", children: "Name 1-2 examples of AI you use in your everyday life. Briefly describe what they do." }),
            React.createElement(WritingPrompt, { key: 'wp2', number: "Prompt:", children: ["Your vocational field is ", selectedVocation, ". Research and describe 2-3 specific ways AI is currently used or is emerging in this field. For each, also mention one potential ethical issue or concern related to its use."] }),
            React.createElement(WritingPrompt, { key: 'wp3', number: "Prompt:", children: ["Based on one of the examples from your vocational field (", selectedVocation, "), explain how AI can help professionals in that task. Then, describe a potential disadvantage or problem if the AI makes a mistake or is used incorrectly in that specific scenario."] })
          )
        ]
      }),

      React.createElement('h4', { key: 'actSetHeading', className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", children: "Chapter 1 Activities" }),

      // New Activities Start Here - These are tasks, so they are collapsible
      React.createElement(InteractiveCard, {
        key: 'explore-activity1',
        id: 'explore-activity1-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'expAct1Title', children: "🔍 Exploration Activity: AI in My Job - Quick Find" }),
          React.createElement('p', { key: 'expAct1Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Think about your chosen vocational field (", selectedVocation, "). Use a search engine (like Google) for 5-10 minutes to find ONE specific example of how AI is used in a job in this field."] }),
          React.createElement('ul', { key: 'expAct1List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'expAct1Li1', children: "What is the AI tool or system?" }),
            React.createElement(ListItem, { key: 'expAct1Li2', children: "What does it do for the worker?" })
          ]}),
          React.createElement('p', { key: 'expAct1Conclusion', className: "text-neutral-700 mb-2 leading-relaxed", children: "Be ready to share your finding with a partner." })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'explore-activity2',
        id: 'explore-activity2-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'expAct2Title', children: "💬 Discussion Prompt: AI vs. Human Smartness" }),
          React.createElement('p', { key: 'expAct2Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "The lesson says AI can do things that need 'human intelligence'." }),
          React.createElement('ul', { key: 'expAct2List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'expAct2Li1', children: "Think of one thing a human can do that you think is 'smart' (e.g., solving a tricky problem on the job, understanding someone's feelings, creating something new)." }),
            React.createElement(ListItem, { key: 'expAct2Li2', children: "Do you think the AI described in the lesson (like ChatGPT, which predicts words) can do that 'smart' thing in the same way a human does? Why or why not?" })
          ]}),
          React.createElement('p', { key: 'expAct2Conclusion', className: "text-neutral-700 mb-2 leading-relaxed", children: "Discuss with a partner (Pairs or Small Group)." })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'explore-activity3',
        id: 'explore-activity3-card', // Added ID
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'expAct3Title', children: "🤸 Active Challenge: AI Spotting Game" }),
          React.createElement('p', { key: 'expAct3Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["The teacher names a place or situation (e.g., 'In the Kitchen,' 'On a Construction Site for ", selectedVocation, ",' 'At the Doctor's Office for ", selectedVocation, "'). Students take turns naming ONE way AI could be used there. No repeats. If you can't think of one in 15 seconds, you're out for that round. The last few students in win points."] })
        ]
      })
      // New Activities End Here
    )
  );
};
