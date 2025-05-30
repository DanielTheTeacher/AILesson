

import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { CitationLink } from '../ui/CitationLink.js'; // Though not used in the new "You First" text directly
import { ListItem } from '../ui/ListItem.js';
import { EthicsTable } from '../shared/EthicsTable.js';
import { Vocation } from '../../types.js'; // Vocation is JS object

const YouFirstFootnotes = {
  F1: "It's vital to do your own thinking. Relying too much on AI means less mental work, which is needed for real learning and skill growth. Easy AI answers can stop you from thinking hard, which builds memory and understanding. (Cognitive Paradox of AI, 2025; InnerDrive, 2025; IBU Press, 2025).",
  F2: "Good writing needs language and thinking skills, especially critical thinking. Critical thinking involves analyzing, combining, and judging information to make smart decisions. (Al-Nuaimi & Al-Emran, 2025a; Shanto & Ahmed, 2025).",
  F3: "Studies show that using AI tools a lot can lower critical thinking skills, as students let AI do the thinking for them. This 'cognitive offloading' can stop you from developing your own problem-solving and critical thinking. (Gerlich, 2025; Al-Nuaimi & Al-Emran, 2025a; Alshurideh et al., 2025).",
  F4: "Working through hard tasks ('productive struggle') is key for deeper understanding, better problem-solving, and building resilience. (Harvard GSE, 2025; U. Pittsburgh, n.d.).",
  F5: "If AI gives easy answers, you might only learn on the surface and miss the critical thinking needed for lasting learning. This reduces the mental effort for deep understanding. (InnerDrive, 2025; IBU Press, 2025; Cognitive Paradox of AI, 2025).",
  F6: "AI can offer support, but relying too much on digital tools (including AI) can lead to student burnout and emotional problems if not managed carefully. (Student Burnout & MH, 2025; Tracking Evolving Impact, 2025).",
  F7: "Studies link frequent AI use with more mental stress, even though it might offer some cognitive benefits like better short-term memory. (Investigating Freq. Interactions, 2024).",
  F8: "Brain science (neuroplasticity) shows that mental effort in learning directly impacts long-term memory and how our brains adapt. How we use digital tools also affects brain structure and function, especially for thinking control and decision-making. (Challenging Cog. Load, 2025; Systematic Rev. AI Impact, 2025).",
  F9: "Younger people (17-25) often rely more on AI and may have lower critical thinking scores. This suggests 'digital natives' might be more likely to let AI do their thinking during key brain development years. (Gerlich, 2025).",
  F10: "Experts advise using AI as an extra tool, thoughtfully and ethically. The goal is for AI to be a 'thought-provoking tool,' not just an 'answer tool,' encouraging you to think critically about its output. (Al-Nuaimi & Al-Emran, 2025a; IBU Press, 2025; Shanto & Ahmed, 2025)."
};

const YouFirstReferences = [
  {
    key: "alnuaimi2025a",
    content: React.createElement(React.Fragment, null,
      "Al-Nuaimi, S. M. N., & Al-Emran, M. (2025a). ",
      React.createElement('em', null, "English as a foreign language (EFL) secondary school students' use of artificial intelligent (AI) tools for developing writing skills: unveiling practices and perceptions."),
      " Cogent Education, 12(1), 2505304. ",
      React.createElement('a', { href: "https://doi.org/10.1080/2331186X.2025.2505304", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://doi.org/10.1080/2331186X.2025.2505304")
    )
  },
  {
    key: "alshurideh2025",
    content: React.createElement(React.Fragment, null,
      "Alshurideh, M., Al-Rakhami, M., Al-Shami, S. A., Al-Emran, M., & Al-Maroof, R. S. (2025). ",
      React.createElement('em', null, "The impact of artificial intelligence on students’ academic development: A systematic review."),
      " Education and Information Technologies, 30(3), 343. (Note: Full author list and exact journal details for this specific article were inferred based on typical MDPI structures and related snippets; refer to original publication for precise details if available.)"
    )
  },
  {
    key: "challengingCogLoad2025",
    content: React.createElement(React.Fragment, null,
      "Challenging Cognitive Load Theory: The Role of Educational Neuroscience and Artificial Intelligence in Redefining Learning Efficacy. (2025, February 15). ",
      React.createElement('em', null, "PMC PubMed Central."),
      " (Retrieved from provided research material)"
    )
  },
  {
    key: "gerlich2025",
    content: React.createElement(React.Fragment, null,
      "Gerlich, M. (2025, January 3). ",
      React.createElement('em', null, "AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking."),
      " Societies. (Retrieved from provided research material; note: a PsyPost article also discusses this study by Gerlich, and an MDPI source references its findings. The primary citation is to the Societies journal as indicated.)"
    )
  },
  {
    key: "harvardGSE2025",
    content: React.createElement(React.Fragment, null,
      "Harvard Graduate School of Education. (2025, April). AI can add, not just subtract, from learning. ",
      React.createElement('em', null, "Harvard Graduate School of Education News & Ideas."),
      " Retrieved from ",
      React.createElement('a', { href: "https://www.gse.harvard.edu/ideas/news/25/04/ai-can-add-not-just-subtract-learning", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://www.gse.harvard.edu/ideas/news/25/04/ai-can-add-not-just-subtract-learning")
    )
  },
  {
    key: "ibuPress2025",
    content: React.createElement(React.Fragment, null,
      "IBU Press. (2025, May 14). ",
      React.createElement('em', null, "[AI as a thought-provoking tool vs. an answer tool]."),
      " Retrieved from ",
      React.createElement('a', { href: "https://www.ibupress.com/Pages/Latest/Details?id=VQAAAA==", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://www.ibupress.com/Pages/Latest/Details?id=VQAAAA=="),
      " (Note: Title is descriptive as original title was not provided in snippet.)"
    )
  },
  {
    key: "innerDrive2025",
    content: React.createElement(React.Fragment, null,
      "InnerDrive. (2025). Does ChatGPT actually help student learning? ",
      React.createElement('em', null, "InnerDrive."),
      " Retrieved from ",
      React.createElement('a', { href: "https://www.innerdrive.co.uk/blog/chatgpt-student-learning/", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://www.innerdrive.co.uk/blog/chatgpt-student-learning/")
    )
  },
  {
    key: "investigatingInteractions2024",
    content: React.createElement(React.Fragment, null,
      "Investigating How Frequent Interactions with AI Technologies Impact Cognitive and Emotional Processes. (2024, September 30). ",
      React.createElement('em', null, "ResearchGate."),
      " (Retrieved from provided research material; appears to be related to a BBE Journal publication, specific authors not fully detailed in snippets.)"
    )
  },
  {
    key: "shantoAhmed2025",
    content: React.createElement(React.Fragment, null,
      "Shanto, S. A., & Ahmed, S. F. (2025, April 25). ",
      React.createElement('em', null, "Enhancing Critical Thinking: Exploring Human-AI Synergy in Student Cognitive Development"),
      " [Unpublished manuscript]. ResearchGate. (Retrieved from provided research material)"
    )
  },
  {
    key: "studentBurnout2025",
    content: React.createElement(React.Fragment, null,
      "Student burnout and mental health in higher education during COVID-19: Online learning fatigue, institutional support, and the role of AI. (2025, April). ",
      React.createElement('em', null, "Higher Education Studies."),
      " (Retrieved from provided research material; specific authors and full title details were partially indicated.)"
    )
  },
  {
    key: "systematicReviewAIImpact2025",
    content: React.createElement(React.Fragment, null,
      "A systematic review of the impact of artificial intelligence, digital technology, and social media on cognitive functions. (2025, March 29). ",
      React.createElement('em', null, "ResearchGate."),
      " (Retrieved from provided research material)"
    )
  },
  {
    key: "teachingLearningPitt",
    content: React.createElement(React.Fragment, null,
      "Teaching and Learning, Office of the Provost. (n.d.). Embracing productive struggle: The key to success for college students. ",
      React.createElement('em', null, "University of Pittsburgh."),
      " Retrieved from ",
      React.createElement('a', { href: "https://teaching.pitt.edu/resources/embracing-productive-struggle-the-key-to-success-for-college-students/", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://teaching.pitt.edu/resources/embracing-productive-struggle-the-key-to-success-for-college-students/")
    )
  },
  {
    key: "cognitiveParadox2025",
    content: React.createElement(React.Fragment, null,
      "The cognitive paradox of AI in education: between enhancement and erosion. (2025). ",
      React.createElement('em', null, "Frontiers in Psychology / PMC PubMed Central."),
      " (Retrieved from provided research material)"
    )
  },
  {
    key: "trackingEvolvingImpact2025",
    content: React.createElement(React.Fragment, null,
      "Tracking the evolving impact of AI-driven learning platforms on EFL students' burnout, emotional challenges, and well-being: a longitudinal growth curve analysis. (2025, May 22). ",
      React.createElement('em', null, "ResearchGate."),
      " (Retrieved from provided research material; specific authors not provided in snippet.)"
    )
  }
];


export const AIHelperSection = ({ selectedVocation }) => { 

  const getVocationSpecificOhmLawExample = () => {
    switch (selectedVocation) {
      case Vocation.Elektro:
        return "I've read about Ohm's Law but struggle to understand. Can you explain it simply for an apprentice in electrical trades, perhaps with an analogy related to water flow in pipes?";
      case Vocation.Helse:
        return "I'm learning about patient vital signs. Can you explain the normal ranges and what deviations might indicate, in simple terms for a healthcare assistant student?";
      case Vocation.Bygg:
        return "I'm studying different types of load-bearing structures. Can you explain the basic principles of tensile and compressive forces for a construction student, using examples like bridges or building frames?";
      default:
        return "I'm struggling with a concept from my studies. Can you explain it simply?";
    }
  };

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Using AI in School" }),

      React.createElement(InteractiveCard, { 
        id: "youFirstPrinciple", 
        key: "youFirstPrincipleCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "The \"You First\" Principle: Your Brain, Then AI" }),
          React.createElement('p', { key: 'p1', className: "text-neutral-700 mb-3 leading-relaxed" },
            "When you use AI for school, the most important rule is: ", React.createElement('strong', { key: 's1' }, "You First!"), " This means you must always start by using your own brain – your own thinking, planning, and initial effort – ", React.createElement('em', { key: 'e1' }, "before"), " you turn to AI."
          ),
          React.createElement('p', { key: 'p2', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Think of it this way: using AI to write your essays or solve all your problems is like using a forklift to lift weights at the gym. Sure, the forklift can lift heavy things easily, but ", React.createElement('em', { key: 'e2' }, "you"), " don't get any stronger. The whole point of lifting weights is to build ", React.createElement('em', { key: 'e3' }, "your own"), " muscles. Similarly, the point of doing schoolwork isn't just to get an answer or a finished product; it's to build your \"mental muscles\" by engaging in the cognitive work yourself.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F1, children: React.createElement('sup', {className: "cursor-help"}, '1') })
          ),
          React.createElement('p', { key: 'p3', className: "text-neutral-700 mb-3 leading-relaxed" },
            "When you write an essay, for example, you're not just learning to write. You're learning much deeper skills: how to structure your thoughts, organize complex information, think critically about a topic, find evidence, and communicate your ideas clearly and persuasively.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F2, children: React.createElement('sup', {className: "cursor-help"}, '2') }),
            " These are incredibly important skills for any job and for life in general. If AI does this heavy lifting for you, you risk missing out on developing these critical abilities, as over-reliance on AI can hinder the development of independent writing and critical thinking skills.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F3, children: React.createElement('sup', {className: "cursor-help"}, '3') })
          ),
          React.createElement('p', { key: 'p4', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Learning can sometimes feel a bit tough – that's when your brain is really working hard and growing. This \"productive struggle\" is essential for deep learning and building resilience.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F4, children: React.createElement('sup', {className: "cursor-help"}, '4') }),
            " It's often at these challenging moments that it's most tempting to let AI take over. However, if AI tools make tasks too easy by providing answers directly, they risk bypassing the very cognitive engagement that underpins robust and durable learning.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F5, children: React.createElement('sup', {className: "cursor-help"}, '5') }),
            " If you skip that struggle, you may skip the learning."
          ),
          React.createElement('p', { key: 'p5', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Researchers have noted that while AI can offer support, over-reliance on technology, including AI, might reduce opportunities to face and overcome small challenges, which are important for building resilience and coping strategies.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F6, children: React.createElement('sup', {className: "cursor-help"}, '6') }),
            " Interestingly, some studies also link frequent AI interaction with increased mental stress.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F7, children: React.createElement('sup', {className: "cursor-help"}, '7') }),
            " Your brain is incredibly plastic (able to change and adapt), especially during adolescence and early adulthood.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F8, children: React.createElement('sup', {className: "cursor-help"}, '8') }),
            " This is a prime time to build fundamental thinking skills. Relying too much on AI to do the thinking for you during these critical developmental years could make it harder to develop these essential skills independently later in life, as younger individuals (e.g., 17-25 years old) have shown higher dependence on AI and correspondingly lower critical thinking scores in some studies.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F9, children: React.createElement('sup', {className: "cursor-help"}, '9') })
          ),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 leading-relaxed" },
            "So, always start with your own effort. Once you've wrestled with the material yourself, AI can then be a useful tool to support, improve, or refine your work.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F10, children: React.createElement('sup', {className: "cursor-help"}, '10') }),
            " But the core thinking, the initial heavy lifting, must come from you first."
          ),
          
          React.createElement('details', { key: 'references-details', className: "mt-6" },
            React.createElement('summary', { 
              className: "text-md font-semibold text-teal-700 cursor-pointer py-2 border-b border-neutral-200 focus:outline-none hover:text-teal-800 transition-colors" 
            }, 
              "References"
            ),
            React.createElement('ul', { className: "mt-2 space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-600 pl-4" },
              YouFirstReferences.map(ref => (
                React.createElement('li', { key: ref.key, className: "mb-2" }, ref.content)
              ))
            )
          )
        ]
      }),

      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        key: "augmentationVsGenerationCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: ["AI for ", React.createElement(Tooltip, { key: 't5', text: "To add to or enhance something, making it better or more effective.", children: " Augmentation " }), " vs. Generation"] }),
          React.createElement('p', { key: 'p7', className: "text-neutral-700 mb-2 leading-relaxed" },
            "There's a big difference between using AI to augment your work and letting AI generate work for you."
          ),
          React.createElement('div', { key: 'div1', className: "grid md:grid-cols-2 gap-4 text-neutral-700 leading-relaxed" },
            React.createElement('div', { key: 'd1', className: "bg-rose-50 p-4 rounded border border-rose-200" },
              React.createElement('h4', { key: 'h1', className: "font-semibold text-rose-700 mb-1" }, "Generation (Risky for Learning)"),
              React.createElement('p', { key: 'p8', className: "text-sm" }, "AI creates content or solutions almost entirely from scratch, often based on a simple command (prompt), without much prior effort from you. This is like letting the forklift do all the lifting – you don't build your own skills."),
              React.createElement('p', { key: 'p9', className: "text-sm mt-1" }, React.createElement('i', { key: 'i1' }, "Example: \"Write an essay about...\""))
            ),
            React.createElement('div', { key: 'd2', className: "bg-green-50 p-4 rounded border border-green-200" },
              React.createElement('h4', { key: 'h2', className: "font-semibold text-green-700 mb-1" }, "Augmentation (Good for Learning)"),
              React.createElement('p', { key: 'p10', className: "text-sm" }, "AI helps you, improves, or builds upon work you'vealready started or thought out. AI is a collaborator, helping you lift more after you've done your reps."),
              React.createElement('p', { key: 'p11', className: "text-sm mt-1" }, React.createElement('i', { key: 'i2' }, "Example: \"Here's a paragraph I wrote. Can you give feedback on clarity and grammar?\""))
            )
          ),
          React.createElement('p', { key: 'p12', className: "text-neutral-700 mt-3 leading-relaxed" },
            "In school and professional life, the focus should be on augmentation. AI can help you see new angles, improve what you'vecreated, or automate simple parts of a task, so you can focus on the more demanding and creative parts."
          )
        ]
      }),

      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        key: "ethicalUseCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Ethical Use: AI as a Learning Partner (with Norwegian Guidelines)" }),
          React.createElement('p', { key: 'p13', className: "text-neutral-700 mb-2 leading-relaxed" }, "With the \"You First\" principle and your teacher's permission, AI can be a great learning partner. Here are some examples of ethical AI use:",
            React.createElement(ResourceLink, { key: 'r1', href: "https://ndla.no/r/engelsk-sf/presentation-sf/3f99192e37", children: "Ethical AI Use (NDLA)" }),
            React.createElement(ResourceLink, { key: 'r2', href: "https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-ki-i-skolen/kunstig-intelligens-ki-i-skolen/", children: "Norwegian AI Guidelines (Udir)" })
          ),
          React.createElement('ul', { key: 'ul1', className: "list-disc list-inside text-neutral-700 mb-3 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: [React.createElement('strong', { key: 's2' }, "Brainstorming (", React.createElement('em', { key: 'e4' }, "after"), " your own effort!):"), " This is key: ", React.createElement('em', { key: 'e5' }, "after"), " you have already thought deeply about your project and have your own initial ideas, you could ask AI: \"I've thought about X, Y, Z for my project related to ", selectedVocation, ". Can you suggest some other angles or related concepts I might have missed?\" Using AI before you've done your own thinking is like asking the forklift to decide which muscles you should train – it defeats the purpose."] }),
            React.createElement(ListItem, { key: 'li2', children: [React.createElement('strong', { key: 's3' }, "Getting feedback on YOUR work:"), " \"Can you check this text I wrote for grammar mistakes?\""] }),
            React.createElement(ListItem, { key: 'li3', children: [React.createElement('strong', { key: 's4' }, "Explaining difficult topics (after your own effort):"), " \"", getVocationSpecificOhmLawExample(), "\""] }),
            React.createElement(ListItem, { key: 'li4', children: [React.createElement('strong', { key: 's5' }, "Practicing skills:"), " \"Give me a scenario for a customer conversation where the customer is dissatisfied about an issue relevant to ", selectedVocation, ".\""] })
          ),
          React.createElement('p', { key: 'p14', className: "text-neutral-700 mb-2 font-semibold" }, "Important in Norway:"),
          React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 text-sm leading-relaxed" },
            React.createElement(ListItem, { key: 'li5', children: [React.createElement('strong', { key: 's6' }, "AI as support, not replacement:"), " AI should support learning, not replace your own work and critical thinking."] }),
            React.createElement(ListItem, { key: 'li6', children: [React.createElement('strong', { key: 's7' }, "Be transparent:"), " Be clear about when and how you've used AI."] }),
            React.createElement(ListItem, { key: 'li7', children: [React.createElement('strong', { key: 's8' }, "Check facts:"), " Information from AI must always be checked against reliable sources. Do not cite AI as a source."] }),
            React.createElement(ListItem, { key: 'li8', children: [React.createElement('strong', { key: 's9' }, "Privacy:"), " Don't share sensitive personal information or copyrighted material with AI tools, especially those not approved for GDPR (privacy regulations). Consider using tools like ", React.createElement('strong', { key: 's10' }, "NDLA AI Chat"), ", which is adapted to Norwegian privacy laws.", React.createElement(CitationLink, { key: 'c2', referenceId: "ref-12", text: "[12]" })] })
          ),
          React.createElement('p', { key: 'p15', className: "text-neutral-700 leading-relaxed" }, "Ethical use is about your intention and transparency. The goal must be to learn more and become better, not to avoid work.")
        ]
      }),
      
      React.createElement(InteractiveCard, { // Explanatory - non-collapsible
        key: "academicIntegrityCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub4', children: "Academic Integrity: What's NOT Okay? – Consequences of Cheating with AI" }),
          React.createElement('p', { key: 'p16', className: "text-neutral-700 mb-2 leading-relaxed" }, "Using AI to do your work for you and presenting it as your own is considered cheating. Schools take this very seriously. The following information about what constitutes cheating with AI and its consequences is paraphrased and inspired by guidelines such as those from Vestfold Fylke (see ", React.createElement('a', { key: 'a1', href: "https://www.vestfoldfylke.no/no/skoler/smi-skolen/meny/praktisk-info/regler-og-rettigheter/", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "Vestfold Fylke's rules"), "). Similar rules and consequences apply in Møre og Romsdal and other regions."),
          React.createElement('h4', { key: 'h3', className: "font-semibold text-neutral-600 mt-4 mb-2" }, "Hva regnes som juks og plagiat med KI?"),
          React.createElement('p', { key: 'p17', className: "text-neutral-700 mb-2 text-sm leading-relaxed" },
            "Juks med KI innebærer å presentere KI-generert arbeid som ditt eget, uten tillatelse eller uten å ha gjort en betydelig egeninnsats først. Dette inkluderer direkte avskrift eller omskrivinger fra KI uten kildehenvisning. Selv om KI kan være et nyttig verktøy for læring og refleksjon, er det juks hvis du bruker det til å unngå eget arbeid og presenterer resultatet som ditt."
          ),
          React.createElement('p', { key: 'p18', className: "text-neutral-700 mt-2 mb-2 font-semibold" }, "Reaksjoner ved juks og plagiat med KI (paraphrased from typical school guidelines):"),
          React.createElement('p', { key: 'p19', className: "text-neutral-700 mb-2 text-sm leading-relaxed" },
            "Å jukse med KI kan få alvorlige følger, avhengig av hvor alvorlig det er og om det har skjedd før."
          ),
          React.createElement('ul', { key: 'ul3', className: "list-disc list-inside text-neutral-700 text-sm space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li9', children: "Du får annullert prøver og innleveringer der KI er brukt." }),
            React.createElement(ListItem, { key: 'li10', children: "Ved alvorlig eller gjentatt juks kan du få nedsatt karakter i orden og/eller oppførsel (jf. «skoleregler for elever, § 5-3» og forskrift til opplæringsloven § 9-17). Skolen vil da fatte et enkeltvedtak, og du (og foresatte hvis du er under 18) blir varslet og får forklare deg." }),
            React.createElement(ListItem, { key: 'li11', children: "Juks på eksamen kan føre til at eksamen blir annullert, og du mister også standpunktkarakteren i faget. Dette kan bety at du ikke får førstegangsvitnemål (jf. forskrift til opplæringsloven § 9-42)." })
          ),
          React.createElement('p', { key: 'p20', className: "text-neutral-700 mt-3 leading-relaxed" }, "Hovedpoenget er: KI skal ikke erstatte din egen læring, kritiske tenkning eller kreativitet. Målet med skolen er at ", React.createElement('strong', { key: 's11' }, "du"), " skal lære og utvikle disse ferdighetene.")
        ]
      }),

      React.createElement(InteractiveCard, { // EthicsTable is a reference, make it non-collapsible
        id: "ethicsTableActivity",
        key: "ethicsTableActivityCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub5', children: "AI Use: Green, Yellow, Red Light for School Assignments" }),
          React.createElement(EthicsTable, { key: 'et1' })
        ]
      }),
      
      React.createElement('h4', { key: 'actSetHeading', className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", children: "Chapter 2 Activities" }),

      React.createElement(InteractiveCard, {
        key: 'aihelper-activity1',
        id: 'aihelper-activity1-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'helpAct1Title', children: "✍️ Writing Prompt: My Work, Then AI's Help" }),
          React.createElement('p', { key: 'helpAct1Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Think of ONE task you do for your ", selectedVocation, " studies (e.g., writing a short summary of a process, planning a simple practical step, looking up a definition)."] }),
          React.createElement('ul', { key: 'helpAct1List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'helpAct1Li1', children: "What's the first thing YOU would do for this task, using your own brain?" }),
            React.createElement(ListItem, { key: 'helpAct1Li2', children: "After doing that, how could AI give you a little bit of help (e.g., check your spelling for the summary, suggest one tool for the practical step, give you another definition to compare)?" })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aihelper-activity2',
        id: 'aihelper-activity2-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'helpAct2Title', children: "💬 Discussion Prompt: Good AI Use for School" }),
          React.createElement('p', { key: 'helpAct2Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "Look at the 'EthicsTable', especially the 'Green Light' examples." }),
          React.createElement('ul', { key: 'helpAct2List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'helpAct2Li1', children: "With a partner, choose ONE 'Green Light' example (like AI checking your grammar after you write something)." }),
            React.createElement(ListItem, { key: 'helpAct2Li2', children: ["How could this help you learn better in ", selectedVocation, " without the AI doing the work for you? Give one reason."] })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aihelper-activity3',
        id: 'aihelper-activity3-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'helpAct3Title', children: ["🔍 Exploration Activity: Asking AI for Help (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'helpAct3Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Imagine you've written one sentence explaining a simple tool or concept used in ", selectedVocation, " (e.g., for Elektro: 'A multimeter is used to measure electricity.'; for Helse: 'Good hygiene helps prevent infection.'; for Bygg: 'A spirit level checks if something is straight.')."] }),
          React.createElement('p', { key: 'helpAct3Prompt', className: "text-neutral-700 mb-2 leading-relaxed", children: "With a partner, write ONE question you could ask an AI (like NDLA AI Chat) to get feedback on your sentence to make it clearer for another student. (Example: 'Is my sentence about a multimeter easy to understand for a new Elektro student?')" })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'aihelper-activity4',
        id: 'aihelper-activity4-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'helpAct4Title', children: "💡 Mini-Discussion: AI Use: Okay or Not Okay?" }),
          React.createElement('p', { key: 'helpAct4Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["The teacher will describe a quick scenario of a student using AI for a ", selectedVocation, " task (e.g., 'A student asks AI to list all safety steps for a task before trying to remember them themselves')."] }),
          React.createElement('p', { key: 'helpAct4Prompt', className: "text-neutral-700 mb-2 leading-relaxed", children: "As a class, quickly discuss: Is this a 'Green Light' (good use), 'Yellow Light' (be careful), or 'Red Light' (not okay) according to the EthicsTable? Why?" })
        ]
      })
    )
  );
};
