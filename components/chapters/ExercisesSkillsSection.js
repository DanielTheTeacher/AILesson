
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { ListItem } from '../ui/ListItem.js';
import { SkillsIconWithTooltip } from '../ui/SkillsIconWithTooltip.js';
import { ChapterId, Vocation } from '../../types.js';

// Define ExerciseLink component locally as it's specific to this section for now
const ExerciseLink = ({ onClick, children, ariaLabel }) => {
  return React.createElement('button', {
    onClick: onClick,
    'aria-label': ariaLabel,
    className: "text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300 rounded"
  }, children);
};

export const ExercisesSkillsSection = ({ selectedVocation, onNavigate }) => {
  const handleLinkClick = (chapterId, elementId) => {
     onNavigate(chapterId, elementId);
  };

  // Content from former SkillsConnectSection
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
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Exercises & Textbook Connections" }),
      
      // Part 1: AI Exercises Overview (from former ExercisesSection)
      React.createElement(InteractiveCard, {
        children: [
          React.createElement(SubsectionTitle, { key: 'sub-exercises-overview', children: "AI Exercises Overview" }),
          React.createElement('p', { key: 'p-intro', className: "text-neutral-700 mb-4 leading-relaxed" }, "This section lists all the writing prompts and interactive exercises found throughout the learning material. You can use this as a quick navigation hub or as a checklist for completion. Click on any link to jump directly to the relevant activity within its chapter, or to the textbook connections section below."),
          
          React.createElement(SubsectionTitle, { key: 'sub-explore', children: "From Chapter: What is AI?"}),
          React.createElement('ul', { key: 'ul-explore', className: "list-disc list-inside text-neutral-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-explore1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'aiAroundUsActivity'), 
                ariaLabel: "Navigate to Writing Prompts: AI Around Us",
                children: "✍️ Writing Prompts: AI Around Us"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-explore2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity1-card'), 
                ariaLabel: "Navigate to Exploration Activity: AI in My Job - Quick Find",
                children: "🔍 Exploration Activity: AI in My Job - Quick Find"
              })
            ]}),
            // ... (other links from ExploreAI as in original ExercisesSection)
            React.createElement(ListItem, { key: 'ex-explore3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: AI vs. Human Smartness",
                children: "💬 Discussion Prompt: AI vs. Human Smartness"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-explore4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExploreAI, 'explore-activity3-card'), 
                ariaLabel: "Navigate to Active Challenge: AI Spotting Game",
                children: "🤸 Active Challenge: AI Spotting Game"
              })
            ]}),
          ),

          React.createElement(SubsectionTitle, { key: 'sub-helper', children: "From Chapter: Using AI in School"}),
          React.createElement('ul', { key: 'ul-helper', className: "list-disc list-inside text-neutral-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-helper1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'ethicsTableActivity'), 
                ariaLabel: "Navigate to AI Use: Green, Yellow, Red Light table",
                children: "AI Use: Green, Yellow, Red Light for School Assignments"
              })
            ]}),
             React.createElement(ListItem, { key: 'ex-helper2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity1-card'),
                ariaLabel: "Navigate to Writing Prompt: My Work, Then AI's Help",
                children: "✍️ Writing Prompt: My Work, Then AI's Help"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity2-card'),
                ariaLabel: "Navigate to Discussion Prompt: Good AI Use for School",
                children: "💬 Discussion Prompt: Good AI Use for School"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity3-card'),
                ariaLabel: "Navigate to Exploration Activity: Asking AI for Help",
                children: ["🔍 Exploration Activity: Asking AI for Help (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-helper5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIHelper, 'aihelper-activity4-card'),
                ariaLabel: "Navigate to Mini-Discussion: AI Use: Okay or Not Okay?",
                children: "💡 Mini-Discussion: AI Use: Okay or Not Okay?"
              })
            ]}),
          ),
          
          React.createElement(SubsectionTitle, { key: 'sub-dangers', children: "From Chapter: AI: Real Dangers"}),
          React.createElement('ul', { key: 'ul-dangers', className: "list-disc list-inside text-neutral-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-dangers1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'spotTheLieActivity'),
                ariaLabel: "Navigate to What is AI-Generated Fiction? exercise",
                children: "What is AI-Generated Fiction?"
              })
            ]}),
             React.createElement(ListItem, { key: 'ex-dangers2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity1-card'), 
                ariaLabel: "Navigate to Experiment: The AI Hallucination Challenge",
                children: "🧪 Experiment: The AI Hallucination Challenge"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'escapeBubbleActivity'),
                ariaLabel: "Navigate to Writing Prompt: Burst the Bubble! Action Plan",
                children: "Writing Prompt: Burst the Bubble! Action Plan"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity2-card'), 
                ariaLabel: "Navigate to Writing Prompt: Spotting Unfairness",
                children: "✍️ Writing Prompt: Spotting Unfairness"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity3-card'), 
                ariaLabel: "Navigate to Discussion Prompt: AI Mistakes at Work",
                children: ["💬 Discussion Prompt: AI Mistakes at Work (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers6', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity4-card'), 
                ariaLabel: "Navigate to Exploration Activity: Is This Real?",
                children: ["🔍 Exploration Activity: Is This Real? (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers7', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'critThink-activity5-card'), 
                ariaLabel: "Navigate to Mini-Scenario: What Would You Say?",
                children: "💡 Mini-Scenario: What Would You Say?"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers8', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'ethicalDilemmasActivity'), // Corrected ChapterId
                ariaLabel: "Navigate to Ethical Dilemmas in AI",
                children: ["Ethical Dilemmas in AI (for ", selectedVocation, ")"]
              })
            ]}),
             React.createElement(ListItem, { key: 'ex-dangers9', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'ethicsCharterActivity'),  // Corrected ChapterId
                ariaLabel: "Navigate to Writing Prompt: My AI Ethics Charter Ideas",
                children: ["✍️ Writing Prompt: My AI Ethics Charter Ideas (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers10', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'aisociety-activity1-card'), // Corrected ChapterId
                ariaLabel: "Navigate to Writing Prompt: My Tech Time Check",
                children: "✍️ Writing Prompt: My Tech Time Check"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers11', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'aisociety-activity2-card'), // Corrected ChapterId
                ariaLabel: "Navigate to Discussion Prompt: Problem with AI Idea",
                children: ["💬 Discussion Prompt: Problem with AI Idea (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers12', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'aisociety-activity3-card'), // Corrected ChapterId
                ariaLabel: "Navigate to Teacher-Led Example: AI Story of the Week",
                children: "💡 Teacher-Led Example: AI Story of the Week"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-dangers13', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.RealDangers, 'aisociety-activity4-card'), // Corrected ChapterId
                ariaLabel: "Navigate to Mini-Debate: AI in Our School/Town",
                children: ["💡 Mini-Debate: AI in Our School/Town (", selectedVocation, "Focus)"]
              })
            ]}),
          ),

          React.createElement(SubsectionTitle, { key: 'sub-future', children: "From Chapter: AI & Your Job"}),
          React.createElement('ul', { key: 'ul-future', className: "list-disc list-inside text-neutral-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-future1', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'vocationalFutureActivity'),
                ariaLabel: "Navigate to Writing Prompt: My Vocational Future with AI",
                children: ["✍️ Writing Prompt: My Vocational Future with AI (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future2', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity1-card'), 
                ariaLabel: "Navigate to Writing Prompt: My Best Skill",
                children: ["✍️ Writing Prompt: My Best Skill for (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future3', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity2-card'), 
                ariaLabel: "Navigate to Discussion Prompt: How AI Changes Work",
                children: ["💬 Discussion Prompt: How AI Changes Work in (", selectedVocation, ")"]
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future4', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity3-card'), 
                ariaLabel: "Navigate to Exploration Activity: AI Tool for My Future Job",
                children: "🔍 Exploration Activity: AI Tool for My Future Job"
              })
            ]}),
            React.createElement(ListItem, { key: 'ex-future5', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.AIFuture, 'aifuture-activity4-card'), 
                ariaLabel: "Navigate to Quick Share: Why My Skill Matters with AI",
                children: "💡 Quick Share: Why My Skill Matters with AI"
              })
            ]}),
          ),
          
          // Link to the "Skills Textbook Connections" part WITHIN this chapter:
          React.createElement(SubsectionTitle, { key: 'sub-skills-link-header', children: "This Chapter: 'Skills' Textbook Connections"}),
          React.createElement('ul', { key: 'ul-skills-link', className: "list-disc list-inside text-neutral-700 space-y-2 mb-4 leading-relaxed" },
            React.createElement(ListItem, { key: 'ex-skills-internal-link', children: [
              React.createElement(ExerciseLink, {
                onClick: () => handleLinkClick(ChapterId.ExercisesSkills, 'skills-textbook-connections-content'),
                ariaLabel: `Navigate to 'Skills' Textbook Connections`,
                children: `Writing Prompts and Discussion Points related to 'Skills' Textbook (for ${selectedVocation})`
              }),
              React.createElement(SkillsIconWithTooltip, { key: 'sicon-ex-internal'})
            ]})
          )
        ]
      }), // End of AI Exercises Overview Card

      // Part 2: 'Skills' Textbook Connections (from former SkillsConnectSection)
      React.createElement('div', { id: "skills-textbook-connections-content", className: "mt-12 pt-6 border-t border-neutral-300" }, // Added class for spacing and visual separation
        // This div acts as the target for the internal link.
        // The content from SkillsConnectSection starts here.
        React.createElement(InteractiveCard, { 
          // The ID 'skillsConnectPrompts' was on the original section, we can place it here if needed for any old direct links,
          // but 'skills-textbook-connections-content' is the primary target now.
          // id: 'skillsConnectPrompts', 
          children: [
            React.createElement(SubsectionTitle, { key: 'sub-skills-actual-title', children: ["'Skills' Textbook Connections (for ", selectedVocation, ")"], hasSkillsIcon: true }),
            React.createElement('p', { key: 'p-skills-intro', className: "text-neutral-700 mb-4 leading-relaxed" }, getVocationSpecificSkillsConnectIntro()),
            
            React.createElement(SubsectionTitle, { key: 'sub-skills-general', className: "mt-4", children: "General Connections (Chapter 1 Focus)", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-general', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills1', children: [React.createElement('strong', { key: 's1' }, "Expectations & New Inventions (Ch 1, pp. 8-9, \"Skills Elektro\"):"), " Think of AI as a new, powerful \"invention that is changing the use of electricity\" and many other fields, including ", selectedVocation, ". Just like past technologies transformed society, AI is doing so now. The \"learning strategies and language tools\" mentioned on p. 9 are exactly what you'll use to understand AI."] }),
              React.createElement(ListItem, { key: 'li-skills2', children: [React.createElement('strong', { key: 's2' }, "Vocational English for AI (Ch 1, pp. 18-19, \"Skills Elektro\"):"), " As you learn specialized vocabulary for ", selectedVocation, ", recognize that understanding AI also involves learning new \"vocational English\" specific to AI and digital technologies (like \"algorithm,\" \"bias,\" \"hallucination\")."] }),
              React.createElement(ListItem, { key: 'li-skills3', children: [React.createElement('strong', { key: 's3' }, "Innovation: Edison & AI (Ch 1, pp. 40-41, \"Skills Elektro\"):"), " Thomas Edison was a great innovator. AI is a modern-day innovation with huge transformative potential. ", React.createElement('em', { key: 'e1' }, "Discussion Point:"), " How is AI similar to or different from Edison's inventions in its impact on society and work within ", selectedVocation, "?"] })
            ),

            React.createElement(SubsectionTitle, { key: 'sub-skills-explore', className: "mt-6", children: "Connections for \"1. Explore AI\"", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-explore', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills4', children: [React.createElement('strong', { key: 's4' }, "Fictional AI vs. Real LLMs (Ch 5, \"True Love\", pp. 210-211, \"Skills Elektro\"):"), " After learning that real LLMs don't \"think\" like humans, read the summary of Asimov's short story \"True Love.\" ", React.createElement('em', { key: 'e2' }, "Writing Prompt 1.4 (for ", selectedVocation, "):"), " In what ways does the AI 'Joe' in the story seem to understand or misunderstand human concepts relevant to your field (e.g., 'care' for Helse, 'precision' for Bygg, 'logic' for Elektro)? How does this compare to what you've learned about how real LLMs work?"] }),
              React.createElement(ListItem, { key: 'li-skills5', children: [React.createElement('strong', { key: 's5' }, "AI and Automation in Jobs (Ch 6, \"Robots 'to replace up to 20 million factory jobs'\", pp. 274-275, \"Skills Elektro\"):"), " When we discuss AI enhancing human skills, this article provides context on automation. ", React.createElement('em', { key: 'e3' }, "Writing Prompt 1.5 (for ", selectedVocation, "):"), " Read the summary of the article. Discuss how AI-driven automation might specifically impact the ", selectedVocation, " field. What 'human skills' from our list (Module 4) will be most important to complement this automation?"] }),
              React.createElement(ListItem, { key: 'li-skills6', children: [React.createElement('strong', { key: 's6' }, "Human-Tech Integration (Ch 6, \"iBoy 101\", pp. 278-279, \"Skills Elektro\"):"), " This novel excerpt shows an extreme fictional example of human-tech fusion. ", React.createElement('em', { key: 'e4' }, "Discussion Starter:"), " The character in 'iBoy' literally has technology in his brain. While fictional, how does this idea relate to how integrated AI is becoming in our daily tools and devices (like smartphones or specialized equipment in ", selectedVocation, ")?"] }),
              React.createElement(ListItem, { key: 'li-skills7', children: [React.createElement('strong', { key: 's7' }, "Complex Systems Analogy (Ch 2, \"The Black Box\", pp. 80-81, \"Skills Elektro\"):"), " When we say \"AI is not magic,\" think about the complex electronic systems and data recording in aircraft, as described in \"The Black Box.\" AI also relies on vast data and complex algorithms, similar to modern systems in ", selectedVocation, "."] })
            ),

            React.createElement(SubsectionTitle, { key: 'sub-skills-crit', className: "mt-6", children: "Connections for \"2. Think Critically\"", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-crit', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills8', children: [React.createElement('strong', { key: 's8' }, "Misinformation & Fake News (Ch 4, \"Nothing on This Page is Real\", pp. 138-139, \"Skills Elektro\"):"), " This article is a perfect match! Christopher Blair's \"satirical/fake news\" directly relates to misinformation and how AI can generate convincing but false content. ", React.createElement('em', { key: 'e5' }, "Writing Prompt 2.2 (after \"What is AI-Generated Fiction?\" exercise, for ", selectedVocation, "):"), " Read the summary of \"Nothing on This Page is Real.\" How does Christopher Blair's motivation for creating 'fake news' compare or contrast with how an AI might generate a 'hallucination' relevant to ", selectedVocation, "? What are the different dangers?"] }),
              React.createElement(ListItem, { key: 'li-skills9', children: [React.createElement('strong', { key: 's9' }, "Evaluating AI as a Source (Ch 4, \"Skills Focus: Selecting Sources\", p. 146, \"Skills Elektro\"):"), " The principles here are ", React.createElement('em', { key: 'e6' }, "essential"), " for evaluating information from AI. AI is a new type of \"source\" needing extra scrutiny. ", React.createElement('em', { key: 'e7' }, "Activity Idea:"), " Review the 'Selecting Sources' guidelines. How would you adapt step 3 ('Is it relevant?'), step 4 ('Is it reliable?'), and step 5 ('Cross-check') when evaluating information from an AI like NDLA AI Chat for a task in ", selectedVocation, "?"] })
            ),
            
            React.createElement(SubsectionTitle, { key: 'sub-skills-helper', className: "mt-6", children: "Connections for \"3. AI as Helper\"", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-helper', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills10', children: [React.createElement('strong', { key: 's10' }, "\"You First\" & Learning Strategies (Ch 1, \"Skills Focus: Learning Strategies\", p. 16, \"Skills Elektro\"):"), " The \"You First\" principle directly links to these strategies. AI can be a tool ", React.createElement('em', { key: 'e8' }, "within"), " these. Crucially, apply strategy 1: \"Prepare your brain for learning\" ", React.createElement('em', { key: 'e9' }, "before"), " engaging AI on ", selectedVocation, " topics."] })
            ),

            React.createElement(SubsectionTitle, { key: 'sub-skills-future', className: "mt-6", children: "Connections for \"4. Your AI Future\"", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-future', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills11', children: [React.createElement('strong', { key: 's11' }, "Relating to Peers (Ch 1, \"Core Content: This Is Me\", pp. 10-11, \"Skills Elektro\"):"), " ", React.createElement('em', { key: 'e10' }, "Writing Prompt 3.2 (related to Prompt 3.1 for ", selectedVocation, "):"), " Re-read one of the student profiles. Imagine that student is working in ", selectedVocation, " 5-10 years from now. How might AI be part of *their* daily work? What human skills would still be essential for them?"] }),
              React.createElement(ListItem, { key: 'li-skills12', children: [React.createElement('strong', { key: 's12' }, "Safety, Standards & Human Responsibility (Ch 2, \"Safety First!\", pp. 54-55 & \"Codes and Standards\", pp. 76-77, \"Skills Elektro\"):"), " When discussing \"Ethical Judgment & Responsibility\" as a human skill, relate it to the critical importance of safety and standards in ", selectedVocation, ". AI might suggest something, but human judgment, knowledge of relevant codes/protocols, and responsibility for safety are paramount."] })
            ),

            React.createElement(SubsectionTitle, { key: 'sub-skills-society', className: "mt-6", children: "Connections for \"5. AI & Society\"", hasSkillsIcon: true }),
            React.createElement('ul', { key: 'ul-skills-society', className: "list-disc list-inside text-neutral-700 space-y-2 leading-relaxed" },
              React.createElement(ListItem, { key: 'li-skills13', children: [React.createElement('strong', { key: 's13' }, "AI & Sustainable Development (Ch 8, \"Core Text: Sustainable Development\", pp. 346-347, \"Skills Elektro\"):"), " ", React.createElement('em', { key: 'e11' }, "Discussion (for ", selectedVocation, "):"), " How could AI be a tool to achieve (or hinder) Sustainable Development Goals relevant to ", selectedVocation, " (e.g., energy efficiency for Elektro, resource management for Bygg, equitable access for Helse)?"] })
            ),
            React.createElement('p', { key: 'p-skills-outro', className: "mt-4 text-sm text-neutral-600" }, React.createElement('em', { key: 'e12' }, "Further connections from the original \"Skills Elektro\" list can be adapted based on your specific vocational curriculum for ", selectedVocation, ". The prompts above aim to make them more relevant to your chosen field."))
          ]
        })
      ) // End of 'Skills' Textbook Connections Content
    )
  );
};
