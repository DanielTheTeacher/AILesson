import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { ListItem } from '../ui/ListItem.js';
import { Vocation } from '../../types.js'; // Vocation is JS Object

export const SkillsConnectSection = ({ selectedVocation }) => { // Removed React.FC and prop types
 
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
    React.createElement('section', { className: "mb-12", id: "skillsConnectPrompts" },
      React.createElement(SectionTitle, { children: ["Connecting AI to 'Skills' (for ", selectedVocation, ")"] }),
      React.createElement(InteractiveCard, {
        children: [
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-4 leading-relaxed" }, getVocationSpecificSkillsConnectIntro()),
          React.createElement(SubsectionTitle, { key: 'sub1', className: "mt-4", children: "General Connections (Chapter 1 Focus)" }),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's1' }, "Expectations & New Inventions (Ch 1, pp. 8-9, \"Skills Elektro\"):"), " Think of AI as a new, powerful \"invention that is changing the use of electricity\" and many other fields, including ", selectedVocation, ". Just like past technologies transformed society, AI is doing so now. The \"learning strategies and language tools\" mentioned on p. 9 are exactly what you'll use to understand AI."] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's2' }, "Vocational English for AI (Ch 1, pp. 18-19, \"Skills Elektro\"):"), " As you learn specialized vocabulary for ", selectedVocation, ", recognize that understanding AI also involves learning new \"vocational English\" specific to AI and digital technologies (like \"algorithm,\" \"bias,\" \"hallucination\")."] }),
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's3' }, "Innovation: Edison & AI (Ch 1, pp. 40-41, \"Skills Elektro\"):"), " Thomas Edison was a great innovator. AI is a modern-day innovation with huge transformative potential. ", React.createElement('em', { key: 'e1' }, "Discussion Point:"), " How is AI similar to or different from Edison's inventions in its impact on society and work within ", selectedVocation, "?"] })
          ),

          React.createElement(SubsectionTitle, { key: 'sub2', className: "mt-6", children: "Connections for \"1. Explore AI\"" }),
          React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li4', children: [React.createElement('strong', { key: 's4' }, "Fictional AI vs. Real LLMs (Ch 5, \"True Love\", pp. 210-211, \"Skills Elektro\"):"), " After learning that real LLMs don't \"think\" like humans, read the summary of Asimov's short story \"True Love.\" ", React.createElement('em', { key: 'e2' }, "Writing Prompt 1.4 (for ", selectedVocation, "):"), " In what ways does the AI 'Joe' in the story seem to understand or misunderstand human concepts relevant to your field (e.g., 'care' for Helse, 'precision' for Bygg, 'logic' for Elektro)? How does this compare to what you've learned about how real LLMs work?"] }),
            React.createElement(ListItem, { key: 'li5', children: [React.createElement('strong', { key: 's5' }, "AI and Automation in Jobs (Ch 6, \"Robots 'to replace up to 20 million factory jobs'\", pp. 274-275, \"Skills Elektro\"):"), " When we discuss AI enhancing human skills, this article provides context on automation. ", React.createElement('em', { key: 'e3' }, "Writing Prompt 1.5 (for ", selectedVocation, "):"), " Read the summary of the article. Discuss how AI-driven automation might specifically impact the ", selectedVocation, " field. What 'human skills' from our list (Module 4) will be most important to complement this automation?"] }),
            React.createElement(ListItem, { key: 'li6', children: [React.createElement('strong', { key: 's6' }, "Human-Tech Integration (Ch 6, \"iBoy 101\", pp. 278-279, \"Skills Elektro\"):"), " This novel excerpt shows an extreme fictional example of human-tech fusion. ", React.createElement('em', { key: 'e4' }, "Discussion Starter:"), " The character in 'iBoy' literally has technology in his brain. While fictional, how does this idea relate to how integrated AI is becoming in our daily tools and devices (like smartphones or specialized equipment in ", selectedVocation, ")?"] }),
            React.createElement(ListItem, { key: 'li7', children: [React.createElement('strong', { key: 's7' }, "Complex Systems Analogy (Ch 2, \"The Black Box\", pp. 80-81, \"Skills Elektro\"):"), " When we say \"AI is not magic,\" think about the complex electronic systems and data recording in aircraft, as described in \"The Black Box.\" AI also relies on vast data and complex algorithms, similar to modern systems in ", selectedVocation, "."] })
          ),

          React.createElement(SubsectionTitle, { key: 'sub3', className: "mt-6", children: "Connections for \"2. Think Critically\"" }),
          React.createElement('ul', { key: 'ul3', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li8', children: [React.createElement('strong', { key: 's8' }, "Misinformation & Fake News (Ch 4, \"Nothing on This Page is Real\", pp. 138-139, \"Skills Elektro\"):"), " This article is a perfect match! Christopher Blair's \"satirical/fake news\" directly relates to misinformation and how AI can generate convincing but false content. ", React.createElement('em', { key: 'e5' }, "Writing Prompt 2.2 (after \"What is AI-Generated Fiction?\" exercise, for ", selectedVocation, "):"), " Read the summary of \"Nothing on This Page is Real.\" How does Christopher Blair's motivation for creating 'fake news' compare or contrast with how an AI might generate a 'hallucination' relevant to ", selectedVocation, "? What are the different dangers?"] }),
            React.createElement(ListItem, { key: 'li9', children: [React.createElement('strong', { key: 's9' }, "Evaluating AI as a Source (Ch 4, \"Skills Focus: Selecting Sources\", p. 146, \"Skills Elektro\"):"), " The principles here are ", React.createElement('em', { key: 'e6' }, "essential"), " for evaluating information from AI. AI is a new type of \"source\" needing extra scrutiny. ", React.createElement('em', { key: 'e7' }, "Activity Idea:"), " Review the 'Selecting Sources' guidelines. How would you adapt step 3 ('Is it relevant?'), step 4 ('Is it reliable?'), and step 5 ('Cross-check') when evaluating information from an AI like NDLA AI Chat for a task in ", selectedVocation, "?"] })
          ),
          
          React.createElement(SubsectionTitle, { key: 'sub4', className: "mt-6", children: "Connections for \"3. AI as Helper\"" }),
          React.createElement('ul', { key: 'ul4', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li10', children: [React.createElement('strong', { key: 's10' }, "\"You First\" & Learning Strategies (Ch 1, \"Skills Focus: Learning Strategies\", p. 16, \"Skills Elektro\"):"), " The \"You First\" principle directly links to these strategies. AI can be a tool ", React.createElement('em', { key: 'e8' }, "within"), " these. Crucially, apply strategy 1: \"Prepare your brain for learning\" ", React.createElement('em', { key: 'e9' }, "before"), " engaging AI on ", selectedVocation, " topics."] })
          ),

          React.createElement(SubsectionTitle, { key: 'sub5', className: "mt-6", children: "Connections for \"4. Your AI Future\"" }),
          React.createElement('ul', { key: 'ul5', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li11', children: [React.createElement('strong', { key: 's11' }, "Relating to Peers (Ch 1, \"Core Content: This Is Me\", pp. 10-11, \"Skills Elektro\"):"), " ", React.createElement('em', { key: 'e10' }, "Writing Prompt 3.2 (related to Prompt 3.1 for ", selectedVocation, "):"), " Re-read one of the student profiles. Imagine that student is working in ", selectedVocation, " 5-10 years from now. How might AI be part of *their* daily work? What human skills would still be essential for them?"] }),
            React.createElement(ListItem, { key: 'li12', children: [React.createElement('strong', { key: 's12' }, "Safety, Standards & Human Responsibility (Ch 2, \"Safety First!\", pp. 54-55 & \"Codes and Standards\", pp. 76-77, \"Skills Elektro\"):"), " When discussing \"Ethical Judgment & Responsibility\" as a human skill, relate it to the critical importance of safety and standards in ", selectedVocation, ". AI might suggest something, but human judgment, knowledge of relevant codes/protocols, and responsibility for safety are paramount."] })
          ),

          React.createElement(SubsectionTitle, { key: 'sub6', className: "mt-6", children: "Connections for \"5. AI & Society\"" }),
          React.createElement('ul', { key: 'ul6', className: "list-disc list-inside text-slate-700 space-y-2 leading-relaxed" },
            React.createElement(ListItem, { key: 'li13', children: [React.createElement('strong', { key: 's13' }, "AI & Sustainable Development (Ch 8, \"Core Text: Sustainable Development\", pp. 346-347, \"Skills Elektro\"):"), " ", React.createElement('em', { key: 'e11' }, "Discussion (for ", selectedVocation, "):"), " How could AI be a tool to achieve (or hinder) Sustainable Development Goals relevant to ", selectedVocation, " (e.g., energy efficiency for Elektro, resource management for Bygg, equitable access for Helse)?"] })
          ),
          React.createElement('p', { key: 'p2', className: "mt-4 text-sm text-slate-600" }, React.createElement('em', { key: 'e12' }, "Further connections from the original \"Skills Elektro\" list can be adapted based on your specific vocational curriculum for ", selectedVocation, ". The prompts above aim to make them more relevant to your chosen field."))
        ]
      })
    )
  );
};