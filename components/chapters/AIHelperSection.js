
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { ListItem } from '../ui/ListItem.js';
import { EthicsTable } from '../shared/EthicsTable.js';
import { Vocation } from '../../types.js'; 
import { EmptyReferencesDropdown } from '../ui/EmptyReferencesDropdown.js';

const YouFirstFootnotes = {
  F1: "Engaging in challenging academic work, often termed \"productive struggle,\" is essential for cognitive development. This process allows students to expand their cognitive capacity and grow their \"learning power,\" akin to physical exercise building muscles, rather than merely acquiring static knowledge (Hammond, 2025). Such cognitive exertion is fundamental for developing sophisticated cognitive structures necessary for complex academic tasks.",
  F2: "The process of academic essay writing cultivates a range of higher-order cognitive skills beyond mere composition. It requires learners to structure their thoughts logically, organize complex information coherently, engage in critical thinking through analysis and evaluation of sources, find and integrate evidence effectively, and communicate their arguments clearly and persuasively (Yusupova & Ergasheva, 2024). These activities are central to academic discourse and intellectual development.",
  F3: "The critical thinking, analytical, and communication skills honed through academic writing are highly transferable and valuable beyond educational settings. Research indicates that such abilities are essential not only for academic success but also for effective functioning in the workforce, where reasoning and the capacity to process complex information are crucial (Yusupova & Ergasheva, 2024).",
  F4: "Over-reliance on Artificial Intelligence for cognitive tasks, a phenomenon known as cognitive offloading, can hinder the development of critical thinking and problem-solving skills. Studies indicate a significant negative correlation between frequent AI tool usage and critical thinking abilities, particularly as individuals delegate demanding cognitive work to AI, thereby missing opportunities to engage in the deep, reflective thinking necessary for skill cultivation (Gerlich, 2025; Jose et al., 2024).",
  F5: "The experience of grappling with challenging material, often perceived as difficult, is integral to the learning process and can lead to significant cognitive growth. Research suggests that this \"productive struggle,\" particularly with complex problems, contributes to increased brain development and enhanced problem-solving capabilities (Boaler, 2016).",
  F6: "Productive struggle, characterized by learners actively engaging with tasks slightly beyond their current understanding, is fundamental to deep learning. This intentional introduction of difficulty stimulates cognitive engagement as students confront obstacles and persist in finding solutions, a process that leads to a more profound understanding and retention of knowledge than passive information consumption (Progress Learning, 2024).",
  F7: "Recent research indicates that adolescents, particularly in upper secondary school, report significant levels of school-related stress, often termed \"distress.\" Some students respond to these difficulties passively, feeling overwhelmed or powerless, and may adopt avoidance coping strategies rather than actively addressing the stressors, suggesting challenges in tackling difficulties effectively (Røsand & Klomsten, 2024).",
  F8: "There is a growing concern that the pervasive availability of technology, including AI, might inadvertently diminish resilience by reducing exposure to manageable challenges. When individuals, particularly students, avoid grappling with complex issues or offload cognitive effort to AI, they may miss opportunities to develop coping mechanisms and intellectual perseverance (Gerlich, 2025; Lukianoff & Haidt, 2018).",
  F9: "Adolescence, extending into the early twenties (approximately up to age 24 or 25), is recognized as a second critical period of heightened brain plasticity, following early childhood. During this time, the brain undergoes significant \"rewiring,\" including processes like synaptic pruning and myelination, which refine neural pathways and optimize information processing, making it highly adaptable to learning and experience (Arain et al., 2013; Harper et al., 2018).",
  F10: "The period of increased brain plasticity during adolescence and young adulthood is a crucial window for the development of fundamental cognitive skills, including higher-order thinking processes like problem-solving, critical thinking, and executive functions. Learning experiences and environmental influences during these years play a key role in shaping neural connections and strengthening these essential cognitive capabilities for future application (Harper et al., 2018; Arain et al., 2013).",
  F11: "Excessive reliance on AI tools during the formative years of adolescence and early adulthood may negatively impact the long-term development of essential cognitive skills. Research suggests that younger individuals who exhibit higher dependence on AI for cognitive tasks may score lower in critical thinking and could be less inclined to engage in deep, independent thought, potentially hindering their ability to fully develop these vital skills for later life (Gerlich, 2025; Jose et al., 2024)."
};

const YouFirstReferences = [
  { key: "arain2013", content: React.createElement(React.Fragment, null, "Arain, M., Haque, M., Johal, L., Mathur, P., Nel, W., Rais, A., Sandhu, R., & Sharma, S. (2013). Maturation of the adolescent brain. ", React.createElement('em', null, "Neuropsychiatric Disease and Treatment, 9"), ", 449–461. ", React.createElement('a', { href: "https://doi.org/10.2147/NDT.S39776", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://doi.org/10.2147/NDT.S39776")) },
  { key: "boaler2016", content: React.createElement(React.Fragment, null, "Boaler, J. (2016). ", React.createElement('em', null, "Mathematical mindsets: Unleashing students' potential through creative math, inspiring messages and innovative teaching."), " Jossey-Bass.") },
  { key: "gerlich2025", content: React.createElement(React.Fragment, null, "Gerlich, M. (2025). AI tools in society: Impacts on cognitive offloading and the future of critical thinking. ", React.createElement('em', null, "Societies, 15"), "(1), Article 6. ", React.createElement('a', { href: "https://www.mdpi.com/2075-4698/15/1/6", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://www.mdpi.com/2075-4698/15/1/6")) },
  { key: "hammond2025", content: React.createElement(React.Fragment, null, "Hammond, Z. (2025). ", React.createElement('em', null, "(Re)Building students’ learning power: Teaching for instructional equity and cognitive justice."), " Corwin.") },
  { key: "harper2018", content: React.createElement(React.Fragment, null, "Harper, R., Hermann, H., & Waite, W. (2018). ", React.createElement('em', null, "The science of adolescent learning: How body and brain development affect student learning."), " Alliance for Excellent Education. ", React.createElement('a', { href: "https://all4ed.org/wp-content/uploads/2018/08/ScienceAdolescentLearning_HowBodyBrainDevAffectStudentLearning.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://all4ed.org/wp-content/uploads/2018/08/ScienceAdolescentLearning_HowBodyBrainDevAffectStudentLearning.pdf")) },
  { key: "jose2024", content: React.createElement(React.Fragment, null, "Jose, B., Cherian, J., Verghis, A. M., Varghise, S. M., Mumthas, S., & Joseph, S. (2024). The cognitive paradox of AI in education: Between enhancement and erosion. ", React.createElement('em', null, "Cureus, 16"), "(4), e58019. ", React.createElement('a', { href: "https://doi.org/10.7759/cureus.58019", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://doi.org/10.7759/cureus.58019")) },
  { key: "lukianoff2018", content: React.createElement(React.Fragment, null, "Lukianoff, G., & Haidt, J. (2018). ", React.createElement('em', null, "The coddling of the American mind: How good intentions and bad ideas are setting up a generation for failure."), " Penguin Press.") },
  { key: "progresslearning2024", content: React.createElement(React.Fragment, null, "Progress Learning. (2024). ", React.createElement('em', null, "What is productive struggle in education?"), " Progress Learning Blog. ", React.createElement('a', { href: "https://progresslearning.com/news-blog/what-is-productive-struggle/", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://progresslearning.com/news-blog/what-is-productive-struggle/")) },
  { key: "rosand2024", content: React.createElement(React.Fragment, null, "Røsand, I., & Klomsten, A. T. (2024). Exploring adolescent stress and coping strategies in school: A qualitative study of upper secondary school students in Norway. ", React.createElement('em', null, "Nordisk tidsskrift for utdanning og praksis, 18"), "(3), 146–172. ", React.createElement('a', { href: "https://doi.org/10.23865/up.v18.5975", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://doi.org/10.23865/up.v18.5975")) },
  { key: "yusupova2024", content: React.createElement(React.Fragment, null, "Yusupova, S. Z., & Ergasheva, N. E. (2024). The importance of critical thinking in academic writing. ", React.createElement('em', null, "Science and Innovation International Scientific Journal, 3"), "(B1), 374–376. ", React.createElement('a', { href: "http://scientists.uz/uploads/202401/B-69.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "http://scientists.uz/uploads/202401/B-69.pdf")) }
];

export const AI_HELPER_SUB_CHAPTERS = [
  { id: 'ai-helper-you-first', title: '"You First" Principle' },
  { id: 'ai-helper-augmentation-vs-generation', title: 'Augmentation vs. Generation' },
  { id: 'ai-helper-ethical-use', title: 'Ethical Use & Guidelines' },
  { id: 'ai-helper-academic-integrity', title: 'Academic Integrity' },
  { id: 'ai-helper-ethics-table', title: 'Ethics Table (Green/Yellow/Red)' },
  { id: 'ai-helper-chapter2-activities-heading', title: 'Chapter 2 Activities' }
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
        id: AI_HELPER_SUB_CHAPTERS[0].id, // 'ai-helper-you-first' (also matches 'youFirstPrinciple' used internally in Disclaimer)
        "data-subchapter-target": "true",
        key: "youFirstPrincipleCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "The \"You First\" Principle: Your Brain, Then AI" }),
          React.createElement('p', { key: 'p1', className: "text-neutral-700 mb-3 leading-relaxed" },
            "When you use AI for school, the most important rule is: ", React.createElement('strong', { key: 's1' }, "You First!"), " This means you must always start by using your own brain – your own thinking, planning, and initial effort – ", React.createElement('em', { key: 'e1' }, "before"), " you turn to AI."
          ),
          React.createElement('p', { key: 'p2', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Think of it this way: using AI to write your essays or solve all your problems is like using a forklift to lift weights at the gym. Sure, the forklift can lift heavy things easily, but ", React.createElement('em', { key: 'e2' }, "you"), " don't get any stronger. The whole point of lifting weights is to build ", React.createElement('em', { key: 'e3' }, "your own"), " muscles. Similarly, the point of doing schoolwork isn't just to get an answer or a finished product; it's to build your \"mental muscles.\"",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F1, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '1') })
          ),
          React.createElement('p', { key: 'p3', className: "text-neutral-700 mb-3 leading-relaxed" },
            "When you write an essay, for example, you're not just learning to write. You're learning much deeper skills: how to structure your thoughts, organize complex information, think critically about a topic, find evidence, and communicate your ideas clearly and persuasively.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F2, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '2') }),
            " These are incredibly important skills for any job and for life in general.",
             React.createElement(Tooltip, { text: YouFirstFootnotes.F3, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '3') }),
            " If AI does this heavy lifting for you, you miss out on developing these critical abilities.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F4, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '4') })
          ),
          React.createElement('p', { key: 'p4', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Learning can sometimes feel a bit tough or \"painful\" – that's when your brain is really working hard and growing.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F5, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '5') }),
            " It's often at these moments that it's most tempting to let AI take over. But remember the saying, \"no pain, no gain.\" That struggle is actually what learning feels like. If you skip that struggle, you skip the learning.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F6, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '6') })
          ),
          React.createElement('p', { key: 'p5', className: "text-neutral-700 mb-3 leading-relaxed" },
            "Scientists have noticed that many teenagers today report feeling more stressed and perhaps less able to tackle difficulties.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F7, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '7') }),
            " Some think this might be partly because technology, including AI, can remove many of the small challenges and hurdles that actually help us grow stronger and more resilient.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F8, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '8') }),
            " Your brain is incredibly plastic (able to change and adapt) when you're young – roughly until your early twenties.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F9, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '9') }),
            " This is the prime time to build those fundamental thinking skills.",
            React.createElement(Tooltip, { text: YouFirstFootnotes.F10, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '10') }),
            " If you rely too much on AI to do the thinking for you now, it can be much harder to develop these essential skills later in life.",
             React.createElement(Tooltip, { text: YouFirstFootnotes.F11, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '11') })
          ),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 leading-relaxed" },
            "So, always start with your own effort. Once you've wrestled with the material yourself, then AI can be a useful tool to support, improve, or refine your work. But you do the core thinking first."
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

      React.createElement(InteractiveCard, { 
        id: AI_HELPER_SUB_CHAPTERS[1].id, // 'ai-helper-augmentation-vs-generation'
        "data-subchapter-target": "true",
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
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-dropdown-aug' })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: AI_HELPER_SUB_CHAPTERS[2].id, // 'ai-helper-ethical-use'
        "data-subchapter-target": "true",
        key: "ethicalUseCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Ethical Use: AI as a Learning Partner (with Norwegian Guidelines)" }),
          React.createElement('div', { key: 'content-block-p13', className: "flex flex-col gap-y-3 mb-2" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p13', className: "text-neutral-700 leading-relaxed" }, 
               "With the \"You First\" principle and your teacher's permission, AI can be a great learning partner. Here are some examples of ethical AI use:"
              )
            ),
            React.createElement('div', { key: 'links-p13', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'r1', href: "https://ndla.no/r/engelsk-sf/presentation-sf/3f99192e37", children: "Ethical AI Use (NDLA)" }),
                React.createElement(ResourceLink, { key: 'r2', href: "https://www.udir.no/kvalitet-og-kompetanse/digitalisering-skole/kunstig-intelligens-ki-i-skolen/kunstig-intelligens-ki-i-skolen/", children: "Norwegian AI Guidelines (Udir)" })
              )
            )
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
            React.createElement(ListItem, { key: 'li8', children: [React.createElement('strong', { key: 's9' }, "Privacy:"), " Don't share sensitive personal information or copyrighted material with AI tools, especially those not approved for GDPR (privacy regulations). Consider using tools like ", React.createElement('strong', { key: 's10' }, "NDLA AI Chat"), ", which is adapted to Norwegian privacy laws."] })
          ),
          React.createElement('p', { key: 'p15', className: "text-neutral-700 leading-relaxed" }, "Ethical use is about your intention and transparency. The goal must be to learn more and become better, not to avoid work."),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-dropdown-ethical' })
        ]
      }),
      
      React.createElement(InteractiveCard, { 
        id: AI_HELPER_SUB_CHAPTERS[3].id, // 'ai-helper-academic-integrity'
        "data-subchapter-target": "true",
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
          React.createElement('p', { key: 'p20', className: "text-neutral-700 mt-3 leading-relaxed" }, "Hovedpoenget er: KI skal ikke erstatte din egen læring, kritiske tenkning eller kreativitet. Målet med skolen er at ", React.createElement('strong', { key: 's11' }, "du"), " skal lære og utvikle disse ferdighetene."),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-dropdown-integrity' })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: AI_HELPER_SUB_CHAPTERS[4].id, // 'ai-helper-ethics-table' -> also 'ethicsTableActivity'
        "data-subchapter-target": "true",
        key: "ethicsTableActivityCard",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub5', children: "AI Use: Green, Yellow, Red Light for School Assignments" }),
          React.createElement(EthicsTable, { key: 'et1' })
        ]
      }),
      
      React.createElement('h4', { 
        key: 'actSetHeading', 
        id: AI_HELPER_SUB_CHAPTERS[5].id, // 'ai-helper-chapter2-activities-heading'
        "data-subchapter-target": "true",
        className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", 
        children: "Chapter 2 Activities" 
      }),

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
