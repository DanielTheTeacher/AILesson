

import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { ListItem } from '../ui/ListItem.js';
import { SpotTheLieGame } from '../shared/SpotTheLieGame.js';
import { EscapeTheBubble } from '../shared/EscapeTheBubble.js';
import { Vocation } from '../../types.js'; 
import { FictionalStoryLink } from '../ui/FictionalStoryLink.js'; 

const CriticalThinkingFootnotes = {
  F2: "AI systems are fundamentally shaped by their training data, which is derived from human knowledge. Consequently, human cognitive biases can be introduced into AI through data collection, labeling processes, and algorithm design choices. As a result, AI may inadvertently learn and perpetuate these existing human biases in its predictions and decisions (Gao et al., 2024). Similarly, the core issue with algorithmic bias in predictive systems is that all prediction looks to the past to make inferences about the future; in a world with existing societal stratifications, any predictive method risks projecting the inequalities of the past into the future if those inequalities are present in the training data (Mayson, 2019).",
  F3: "AI systems, shaped by their training data, may not only inadvertently perpetuate existing human biases but can also amplify them. This amplification can lead to unfair treatment of underrepresented individuals or groups and exacerbate pre-existing societal inequalities (Gao et al., 2024).",
  F4: "Large Language Models, trained on extensive real-life data, can intentionally or inadvertently extend human biases present in that data. Because these models learn complex patterns and associations, a foundation of biased or flawed data can lead the AI to generate outputs that reflect these \"mistakes\" and potentially create novel manifestations or extensions of the learned biases, effectively treating them as valid information (Gao et al., 2024)."
};

const CriticalThinkingReferences = [
  { key: "gao2024", content: React.createElement(React.Fragment, null, "Gao, Y., Chen, Z., Chen, Y., Zhan, Y., Li, Y., Liu, Y., Gao, M., Liu, D., Chen, K., & Li, Y. (2024). Ethical Issues in AI and Large Language Models: A Systematic Evaluation of Protected Attributes in LLMs. ", React.createElement('em', null, "arXiv preprint arXiv:2501.10484"), ". Retrieved from ", React.createElement('a', { href: "https://arxiv.org/abs/2501.10484", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://arxiv.org/abs/2501.10484")) },
  { key: "mayson2019", content: React.createElement(React.Fragment, null, "Mayson, S. G. (2019). Bias in, bias out. ", React.createElement('em', null, "Yale Law Journal, 128"), "(8), 2218–2300. Retrieved from ", React.createElement('a', { href: "https://scholarship.law.unc.edu/cgi/viewcontent.cgi?article=1010&context=aidr_collection", target: "_blank", rel: "noopener noreferrer", className: "text-teal-600 hover:underline" }, "https://scholarship.law.unc.edu/cgi/viewcontent.cgi?article=1010&context=aidr_collection")) }
];

export const CRITICAL_THINKING_SUB_CHAPTERS = [
  { id: 'critthink-bias-in-out', title: 'Bias In, Bias Out' },
  { id: 'critthink-hallucinations-fakes', title: 'AI Hallucinations & Fakes' }, // This is 'spotTheLieActivity' card
  { id: 'critthink-hallucination-challenge-activity', title: '🧪 AI Hallucination Challenge' }, // This is 'critThink-activity1-card'
  { id: 'critthink-misinfo-bubbles', title: 'Misinformation & Filter Bubbles' }, // This is 'escapeBubbleActivity' card
  { id: 'critthink-chapter3-set1-activities-heading', title: 'Chapter 3 Activities - Set 1' }
];

export const CriticalThinkingSection = ({ selectedVocation }) => { 

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Think Critically: Navigating an AI-Driven World" }),
      
      React.createElement(InteractiveCard, { 
        id: CRITICAL_THINKING_SUB_CHAPTERS[0].id, // 'critthink-bias-in-out'
        "data-subchapter-target": "true",
        key: 'biasCard',
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "How AI Learns (and Gets it Wrong): Bias In, Bias Out" }),
          React.createElement('div', { key: 'content-block-p1-bias', className: "flex flex-col gap-y-3 mb-2" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p1', className: "text-neutral-700 leading-relaxed" }, 
                "AI models learn from the vast amounts of data we feed them. If this data contains existing biases (like unfair assumptions about different groups of people, or information that isn't complete), the AI will learn these biases.",
                React.createElement(Tooltip, { text: CriticalThinkingFootnotes.F2, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '2') }),
                " Even worse, it can sometimes amplify them, meaning it makes the unfairness even stronger.",
                React.createElement(Tooltip, { text: CriticalThinkingFootnotes.F3, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '3') }),
                " Think of it like this: if you teach an AI with a history book full of mistakes, the AI will believe those mistakes are true and might even invent new \"facts\" based on them.",
                React.createElement(Tooltip, { text: CriticalThinkingFootnotes.F4, type: "footnote", children: React.createElement('sup', {className: "cursor-help"}, '4') }),
                " This is often summed up as \"Bias In, Bias Out.\""
              )
            ),
            React.createElement('div', { key: 'links-p1-bias', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'r1', href: "https://www.youtube.com/watch?v=DzV10l-OJwQ", children: "Watch: AI Bias Explained" }),
                React.createElement(ResourceLink, { key: 'r2', href: "https://www.youtube.com/watch?v=x2mRoFNm22g", children: "Watch: How Training Data Creates Bias" })
              )
            )
          ),
          React.createElement('p', { key: 'p2', className: "text-neutral-700 mb-2 leading-relaxed" }, "Examples of AI bias that could affect you (specifically for ", React.createElement('strong', { key: 's1', className: "text-teal-600" }, selectedVocation), " and generally):"),
          
          React.createElement('div', { key: 'bias-examples-container', className: "mt-4 ml-4 pl-4 border-l-2 border-neutral-300 space-y-6" },
            
            React.createElement('div', { key: 'ex-decisions', className: "space-y-2" },
              React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• The AI That Decides Your Future (And Gets It Wrong):"),
              React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                "AI is increasingly making huge calls about your life: what school accepts you, if you can get a loan for your first car or home, even if police systems flag you as a future risk. Imagine an AI, fed old, unfair information, brands you \"high-risk.\" Suddenly, doors slam shut. Your dreams are blocked, or you're treated with suspicion, and you might never even find out that a cold, unfeeling AI (",
                React.createElement(Tooltip, { key: 't-algo', text: "a computer's set of instructions", children: "algorithm" }),
                ") made that devastating, unfair decision."
              ),
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                React.createElement(ResourceLink, { href: "https://calmatters.org/economy/technology/2025/05/california-somehow-finds-no-ai-risks/", children: "Read article: State Claims There's Zero 'High-Risk' AI in California Government, Despite Use of Biased COMPAS Tool" }),
                React.createElement(ResourceLink, { href: "https://www.iotforall.com/ai-loans-finance-bias", children: "Read article: The Problem with AI Loan Algorithms and Bias: How AI Can Perpetuate Discrimination" }),
                React.createElement(ResourceLink, { href: "https://boingboing.net/2025/05/01/algorithms-in-college-admissions-could-make-discrimination-worse.html", children: "Read article: Algorithms in College Admissions Could Make Discrimination Worse" })
              )
            ),

            React.createElement('div', { key: 'ex-facial-rec', className: "space-y-2" },
              React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• Your Face, Your Crime (But It Wasn't You):"),
              React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                "Police use face-matching tech (",
                React.createElement(Tooltip, { key: 't-facial', text: "technology that identifies people by analyzing their face", children: "facial recognition" }),
                ") to hunt criminals. But if the AI is poorly trained, it can point the finger at completely innocent people. Real people have been arrested, their lives turned upside down, because an AI made a mistake. Imagine the terror of being accused, maybe even jailed, for a crime you had nothing to do with, your reputation destroyed, all because an AI got it wrong."
              ),
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                React.createElement(ResourceLink, { href: "https://quadrangle.michigan.law.umich.edu/issues/winter-2024-2025/flawed-facial-recognition-technology-leads-wrongful-arrest-and-historic", children: "Read article: Flawed Facial Recognition Technology Leads to Wrongful Arrest and Historic Settlement in Robert Williams's Case" }),
                React.createElement(ResourceLink, { href: "https://www.democracynow.org/2023/8/9/porcha_woodruff_false_facial_recognition_arrest", children: "Read article: Meet Porcha Woodruff, Detroit Woman Jailed While 8 Months Pregnant After False AI Facial Recognition" }),
                React.createElement(FictionalStoryLink, {
                  key: 'r-pedestrian-moved',
                  href: "https://www.commonlit.org/en/texts/the-pedestrian",
                  title: "The Pedestrian",
                  author: "Ray Bradbury",
                  summary: "In a tech-dominated future, Leonard Mead's joy in solitary night walks leads to his detention by an automated police car, deeming his habits 'regressive' in a society absorbed by screens.",
                  theme: "Technology Control & Conformity, Individual Freedom vs. Automated Authority, Surveillance.",
                  difficulty: 2, 
                  length: "~1200 words",
                  readingTime: "~5-7 min"
                })
              )
            ),

            selectedVocation === Vocation.Elektro && React.createElement('div', { key: 'ex-elektro-specific', className: "space-y-4" },
              React.createElement('h4', { className: "font-semibold text-neutral-700 mt-4 pt-4 border-t border-neutral-200" }, "Examples Specifically for Elektro & Datateknologi Students:"),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• Dangerous \"Facts\" Can Lead to Electrocution:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "You're about to work on a high-voltage system and ask an AI for Norwegian electrical safety rules. It confidently spits out American rules, perfectly translated. If you trust this ",
                  React.createElement(Tooltip, { text: "false or inaccurate information", children: "misinformation" }),
                  " and follow it, you could be instantly killed. The current doesn't care that the AI sounded sure; different countries have life-or-death differences in their electrical standards."
                ),
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                  React.createElement(ResourceLink, { href: "https://brainfiller.com/technical-articles/artificial-intelligence-ai-is-no-substitute-for-knowledge/", children: "Read article: Artificial Intelligence is No Substitute for Knowledge! The Risks of Misinformation in Electrical Safety" }),
                  React.createElement(ResourceLink, { href: "https://www.bbc.com/news/business-66196223", children: "Read article: ChatGPT Owner in Probe Over Risks Around False Answers" })
                )
              ),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• Critical Infrastructure Failure – Triggered by Biased AI:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "Imagine an AI controlling a city's power grid (",
                  React.createElement(Tooltip, { text: "vital systems like power and communication networks", children: "infrastructure" }),
                  "). If it learned from biased historical data that some neighborhoods or new industrial zones are \"less critical,\" it might, during a power crisis, decide to cut electricity to your workplace, or worse, to hospitals and emergency services. This isn't just an inconvenience; it's chaos, potentially endangering lives and causing massive damage, all because an AI made a biased choice."
                ),
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                  React.createElement(ResourceLink, { href: "https://lifestyle.sustainability-directory.com/term/bias-in-digital-systems/", children: "Read article: Bias in Digital Systems: How It Shapes Our World and What We Can Do" }),
                  React.createElement(ResourceLink, { href: "https://www.agilityrecovery.com/article/ai-power-outages-grid-reliability", children: "Read article: AI Power Outages: Is Your Business Ready for Grid Reliability Challenges?" })
                )
              )
            ),

            selectedVocation === Vocation.Helse && React.createElement('div', { key: 'ex-helse-specific', className: "space-y-4" },
              React.createElement('h4', { className: "font-semibold text-neutral-700 mt-4 pt-4 border-t border-neutral-200" }, "Examples Specifically for Helse & Oppvekstfag Students:"),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• The AI Doctor That Misdiagnoses Based on Your Gender or Skin Tone:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "An AI tool designed to spot skin cancer, if primarily trained on light skin images, might tragically fail to detect a dangerous melanoma on darker skin until it's spread and become untreatable. Similarly, an AI symptom checker, learning mostly from men's medical data, could dismiss a woman's heart attack symptoms as anxiety, because they present differently. This isn't just a glitch; it's a potential death sentence due to medical AI failing to see everyone."
                ),
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                  React.createElement(ResourceLink, { href: "https://www.pharmasalmanac.com/articles/the-gender-bias-built-into-ai-and-its-threat-to-womens-health", children: "Read article: The Gender Bias Built Into AI — And Its Threat to Women's Health" })
                )
              ),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• The Child Protection AI That Unjustly Shatters Families:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "Authorities might use AI to predict which children are at risk of neglect. But what if the AI is trained on biased ",
                  React.createElement(Tooltip, { text: "facts and information", children: "data" }),
                  " that wrongly links poverty or a family's background with danger? It could wrongly flag loving, innocent families. Imagine the trauma of stressful investigations, or the unimaginable horror of children being wrongly torn from their parents based on a flawed computer prediction, a family shattered by an algorithm."
                ),
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                  React.createElement(ResourceLink, { href: "https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse", children: "Read article: The NYC Algorithm Deciding Which Families Are Under Watch for Child Abuse" })
                )
              ),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• Mental Health AI That Gives Harmful \"Support\":"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "Think about an AI chatbot designed for mental health advice. If this AI learned from toxic corners of the internet, it could give terrible, even dangerous, advice. It might ",
                  React.createElement(Tooltip, { text: "in a clever, hard-to-notice way", children: "subtly" }),
                  " push unhealthy body image ideals on vulnerable young women, or tell a young man struggling with depression to just \"man up,\" making their mental health spiral downwards. What seems like harmless tech could become a source of deep psychological harm."
                ),
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center mt-2" },
                  React.createElement(ResourceLink, { href: "https://hsph.harvard.edu/news/artificial-intelligence-tools-offer-harmful-advice-on-eating-disorders/", children: "Read article: Artificial Intelligence Tools Offer Harmful Advice on Eating Disorders" }),
                  React.createElement(ResourceLink, { href: "https://www.bbc.com/news/articles/ced2ywg7246o", children: "Read article: AI Chatbots: Users Tell of 'Empathy' and 'Support' but Experts Warn of Risks" })
                )
              )
            ),

            selectedVocation === Vocation.Bygg && React.createElement('div', { key: 'ex-bygg-specific', className: "space-y-4" },
              React.createElement('h4', { className: "font-semibold text-neutral-700 mt-4 pt-4 border-t border-neutral-200" }, "Examples Specifically for Bygg & Anleggsteknikk Students:"),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• The AI That Gives Deadly Building Codes:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "Imagine you’re designing a roof for a new school gym in a part of Norway known for massive snowfalls. You ask an AI for the correct building rules. It spits out official-looking codes, in perfect Norwegian, detailing how strong the roof needs to be. But these are actually codes for a sunny, snow-free country! If you trust that AI and build it that way, the first heavy Norwegian blizzard could cause the entire roof to buckle and crash down, potentially onto hundreds of people. That's not just a mistake; it's a catastrophe caused by relying on deadly wrong info (",
                  React.createElement(Tooltip, { text: "false or wrong info", children: "misinformation" }),
                  ") from an AI that doesn't understand real-world Norwegian conditions like ",
                  React.createElement(Tooltip, { text: "ground that is permanently frozen", children: "permafrost" }),
                  "."
                )
              ),
              React.createElement('div', { className: "space-y-2" },
                React.createElement('p', { className: "text-neutral-700 leading-relaxed font-semibold" }, "• Biased Material Estimates That Bankrupt a Project or Compromise Safety:"),
                React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
                  "Your team is building housing in a remote Norwegian town. You use an AI to estimate the cost and amount of good quality, safe materials. But the AI learned mostly from big city projects where that material is cheap and plentiful. For your rural project, the AI’s estimate is dangerously low. The project suddenly faces a massive budget shortfall. To avoid going bankrupt, the company might be pressured to use worse quality materials, or skimp on insulation vital for brutal Norwegian winters. Imagine those new homes a few years later: freezing cold, riddled with damp and mold, or structurally unsound, unable to withstand strong winds. This isn't just about money; it’s about an AI’s bad guess ",
                  React.createElement(Tooltip, { text: "weakening or putting at risk", children: "compromising" }),
                  " the health, safety, and lives of the families who were promised a safe home."
                )
              )
            )
          ), 
          
          React.createElement('p', { key: 'p3', className: "text-neutral-700 mt-6 leading-relaxed" }, 
            "For your vocational field of ", React.createElement('strong', { key: 's5', className: "text-teal-600" }, selectedVocation), ", a biased AI could lead to incorrect diagnoses, unfair assessments, or designs that don't suit everyone. It's important to remember that AI bias often mirrors existing ", React.createElement(Tooltip, { key: 't1', text: "Unfair differences in how groups of people are treated or have access to opportunities in society.", children: "societal inequalities" }), ".", 
            " Therefore, human oversight and critical assessment are always needed."
          ),
          React.createElement('details', { key: 'references-details-bias', className: "mt-6" },
            React.createElement('summary', { 
              className: "text-md font-semibold text-teal-700 cursor-pointer py-2 border-b border-neutral-200 focus:outline-none hover:text-teal-800 transition-colors" 
            }, 
              "References"
            ),
            React.createElement('ul', { className: "mt-2 space-y-2 text-xs sm:text-sm leading-relaxed text-neutral-600 pl-4" },
              CriticalThinkingReferences.map(ref => (
                React.createElement('li', { key: ref.key, className: "mb-2" }, ref.content)
              ))
            )
          )
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: CRITICAL_THINKING_SUB_CHAPTERS[1].id, // 'critthink-hallucinations-fakes' (also 'spotTheLieActivity')
        "data-subchapter-target": "true",
        key: 'hallucinationsCard',
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: ["AI \"Hallucinations\" & ", React.createElement('strong', { key: 's6' }, "Looks Real, But Isn't"), ": Spotting Convincing Fakes"] }),
          React.createElement('div', { key: 'content-block-p4-hallu', className: "flex flex-col gap-y-3 mb-2" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p4', className: "text-neutral-700 leading-relaxed" }, 
                "Sometimes AI can generate incorrect or misleading information presented as fact. This is called ", React.createElement(Tooltip, { key: 't2', text: "When AI invents facts or information that isn't true.", children: "AI hallucinations" }), "."
              )
            ),
            React.createElement('div', { key: 'links-p4-hallu', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'r3', href: "https://builtin.com/artificial-intelligence/ai-hallucination", children: "Read: AI Hallucinations Explained" }),
                React.createElement(FictionalStoryLink, {
                  key: 'r-machine-war',
                  href: "https://www.commonlit.org/en/texts/the-machine-that-won-the-war",
                  title: "The Machine that Won the War",
                  author: "Isaac Asimov",
                  summary: "After a war won by the supercomputer Multivac, key figures reveal that unreliable data forced them to make crucial decisions using human intuition and a coin flip, not the machine.",
                  theme: "AI Decision-Making & Trust, Human Oversight & Fallibility, Dangers of Over-reliance on AI.",
                  difficulty: 2, 
                  length: "~2000 words",
                  readingTime: "~8-10 min"
                })
              )
            )
          ),
          React.createElement('p', { key: 'p5', className: "text-neutral-700 mb-2 leading-relaxed" },
            React.createElement('strong', { key: 's7' }, "Why does this happen?"), " AI hallucinations occur because AI doesn't 'know' but predicts based on patterns. Think of it like a super-advanced autocomplete. If you ask it, 'Who will win the Ballon d'Or in 2025?', it doesn't know the answer. But it knows which football players' names often appear near 'Ballon d'Or winner'. So, it might confidently name a famous current player. It ", React.createElement('em', { key: 'e1' }, "sounds"), " believable because the name is right, the context is right, but the AI is just making a highly probable guess, not stating a known fact. It can be totally wrong."
          ),
          React.createElement('p', { key: 'p6', className: "text-neutral-700 mb-2 leading-relaxed" },
            "This isn't deliberate deception by the AI. It's just how it works: predicting patterns. If the patterns in its data are incomplete or lead to a 'likely' but false statement, it will still generate it."
          ),
          React.createElement('p', { key: 'p7', className: "text-neutral-700 mb-4 leading-relaxed" },
            "For example, an AI might 'invent' historical events or scientific 'facts.' The problem is made worse because AI can make its output look very real and professional (what I, Daniel the teacher, like to call 'the look of expertise'). Perfect grammar and a confident tone can make false information seem true, even when it's completely made up."
          ),
          React.createElement(SpotTheLieGame, { key: 'game1' })
        ]
      }),
      
      React.createElement(InteractiveCard, { 
        id: CRITICAL_THINKING_SUB_CHAPTERS[2].id, // 'critthink-hallucination-challenge-activity' (was 'critThink-activity1-card')
        "data-subchapter-target": "true",
        key: 'critThink-activity1',
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct1Title', children: "🧪 Experiment: The AI Hallucination Challenge" }),
          React.createElement('p', { key: 'critAct1Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "Your mission: try to (safely and ethically) get an AI to 'hallucinate' – make up information that sounds plausible but isn't true. This helps understand AI fallibility and why checking info is key." }),
          React.createElement('ol', { key: 'critAct1Instructions', className: "list-decimal list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct1Inst1', children: "Work individually or in pairs." }),
            React.createElement(ListItem, { key: 'critAct1Inst2', children: "Use an AI chat tool approved by your teacher (e.g., NDLA AI Chat)." }),
            React.createElement(ListItem, { key: 'critAct1Inst3', children: "Goal: Ask questions or give prompts that might lead to a 'hallucinated' (made-up/incorrect) response." }),
            React.createElement(ListItem, { key: 'critAct1Inst4', children: "Try 3-5 different prompts using some tips below." }),
            React.createElement(ListItem, { key: 'critAct1Inst5', children: "For ONE of your attempts: Write down your prompt, the AI's response, why you think it's a hallucination (or why it gave a good answer), and how you could verify it." }),
            React.createElement(ListItem, { key: 'critAct1Inst6', children: "Be ready to share your most interesting attempt." })
          ]}),
          React.createElement('h4', { key: 'critAct1TipsTitle', className: "font-semibold text-neutral-600 mt-4 mb-2", children: "Tips for Encouraging AI Hallucinations:" }),
          React.createElement('ul', { key: 'critAct1TipsList', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct1Tip1', children: React.createElement('span', {className: 'text-sm'}, ["Ask about very recent or future events (e.g., 'What were the results of the ", selectedVocation, " competition happening next month?')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip2', children: React.createElement('span', {className: 'text-sm'}, ["Ask about very obscure or niche topics (e.g., 'History of the left-handed widget tightener in ", selectedVocation, " in Tingvoll, 1920s.')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip3', children: React.createElement('span', {className: 'text-sm'}, ["Ask leading questions with a false premise (e.g., 'Tell me why Norway banned [common ", selectedVocation, " tool] last year.')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip4', children: React.createElement('span', {className: 'text-sm'}, ["Combine unrelated concepts (e.g., 'Similarities between 18th-century folk music and ", selectedVocation, " safety protocols for [modern equipment]?')."]) }),
            React.createElement(ListItem, { key: 'critAct1Tip5', children: React.createElement('span', {className: 'text-sm'}, ["Request highly specific, made-up details (e.g., 'Transcript of the Minister of ", selectedVocation, "'s speech at the fictional \"Tingvoll Centre for Advanced ", selectedVocation, " Studies\" on March 28, 2045?')."]) })
          ]}),
          React.createElement('p', { key: 'critAct1Reminder', className: "text-rose-600 font-semibold mt-3 leading-relaxed", children: "Important Reminder ❗: The goal is learning about AI limits. DO NOT share AI hallucinations as real facts outside this exercise. Always verify AI info!" })
        ]
      }),

      React.createElement(InteractiveCard, { 
        id: CRITICAL_THINKING_SUB_CHAPTERS[3].id, // 'critthink-misinfo-bubbles' (also 'escapeBubbleActivity')
        "data-subchapter-target": "true",
        key: 'misinfoCard',
        children: [
          React.createElement(SubsectionTitle, { key: 'sub3', children: "Misinformation, Echo Chambers & Filter Bubbles" }),
          React.createElement('div', { key: 'content-block-p8-misinfo', className: "flex flex-col gap-y-3 mb-2" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p8', className: "text-neutral-700 leading-relaxed" }, 
                "On the internet, false or inaccurate information can spread quickly. It's important to distinguish between:"
              ),
              React.createElement('ul', { key: 'ul2', className: "list-disc list-inside text-neutral-700 my-2 space-y-1 leading-relaxed" },
                React.createElement(ListItem, { key: 'li4', children: React.createElement(Tooltip, { key: 't3', text: "False info spread, often without the sender knowing it's false.", children: "Misinformation" }) }),
                React.createElement(ListItem, { key: 'li5', children: React.createElement(Tooltip, { key: 't4', text: "False info created and spread intentionally to deceive or harm.", children: "Disinformation" }) })
              )
            ),
            React.createElement('div', { key: 'links-p8-misinfo', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" }, 
                React.createElement(ResourceLink, { key: 'r4', href: "https://guides.lib.k-state.edu/media-literacy/factcheck", children: "Learn: Mis/Disinformation & Fact-Checking" })
              )
            )
          ),
          
          React.createElement('div', { key: 'content-block-p9-misinfo', className: "flex flex-col gap-y-3 mt-3 mb-2" }, 
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p9', className: "text-neutral-700 leading-relaxed" }, 
                "AI can amplify these problems. Algorithms on social media can create:"
              ),
              React.createElement('ul', { key: 'ul3', className: "list-disc list-inside text-neutral-700 my-2 space-y-1 leading-relaxed" },
                React.createElement(ListItem, { key: 'li6', children: React.createElement(Tooltip, { key: 't5', text: "Environments where you mostly see opinions you already agree with, and alternative views are rarely encountered.", children: "Echo Chambers" }) }),
                React.createElement(ListItem, { key: 'li7', children: React.createElement(Tooltip, { key: 't6', text: "When algorithms personalize the content you see based on your past behavior, so you miss other perspectives, often without knowing it.", children: "Filter Bubbles" }) })
              )
            ),
            React.createElement('div', { key: 'links-p9-misinfo', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" }, 
                React.createElement(ResourceLink, { key: 'r5', href: "https://en.wikipedia.org/wiki/Filter_bubble", children: "Read: Filter Bubbles (Wikipedia)" }),
                React.createElement(ResourceLink, { key: 'r6', href: "https://www.youtube.com/watch?v=eaolE1blpWk", children: "Watch: Echo Chambers & Filter Bubbles" })
              )
            )
          ),

          React.createElement('p', { key: 'p10', className: "text-neutral-700 mb-2 mt-3 leading-relaxed" },
            "This is related to the ", React.createElement(Tooltip, { key: 't7', text: "The idea that your attention is a valuable resource that websites and apps compete for, often through advertising.", children: "Attention Economy" }), ". AI is good at finding and promoting content that captures attention, regardless of whether it's true or good for you."
          ),
          React.createElement('p', { key: 'p11', className: "text-neutral-700 mb-2 font-semibold text-rose-700 leading-relaxed" },
            React.createElement('strong', { key: 's8' }, "The Dangers are Real:"), " This isn't just about being wrong; it's serious. Believing and spreading false AI-generated information can have severe consequences. In your future jobs in ", React.createElement('strong', { key: 's9', className: "text-rose-600" }, selectedVocation), ", decisions based on bad info could lead to dangerous mistakes, financial loss, or harm to people's reputations or even their safety. Imagine an electrician relying on faulty AI-generated wiring diagrams, or a healthcare assistant acting on incorrect AI medical advice. Online, it can lead to bullying, scams, and even influence important societal events like elections with false narratives, undermining democratic processes. Being critical isn't just a skill; it's a responsibility to protect yourself and others."
          ),
          React.createElement(EscapeTheBubble, { key: 'escape1' })
        ]
      }),

      React.createElement('h4', { 
        key: 'actSetHeading', 
        id: CRITICAL_THINKING_SUB_CHAPTERS[4].id, // 'critthink-chapter3-set1-activities-heading'
        "data-subchapter-target": "true",
        className: "text-lg font-semibold text-neutral-700 mt-10 mb-4 pt-6 border-t border-neutral-300", 
        children: "Chapter 3 Activities - Set 1" 
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity2',
        id: 'critThink-activity2-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct2Title', children: "✍️ Writing Prompt: Spotting Unfairness" }),
          React.createElement('p', { key: 'critAct2Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: "The lesson talks about AI being unfair if it's trained on biased data." }),
          React.createElement('ul', { key: 'critAct2List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct2Li1', children: "Can you remember a time you saw something that felt unfair in an app, a game, an ad, or on social media (e.g., a job ad only showing men, a beauty filter that changes features too much)?" }),
            React.createElement(ListItem, { key: 'critAct2Li2', children: "Briefly describe it. Why did it feel unfair?" })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity3',
        id: 'critThink-activity3-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct3Title', children: ["💬 Discussion Prompt: AI Mistakes at Work (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'critAct3Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["AI sometimes makes 'hallucinations' – it gives wrong information that looks real. If an AI gave wrong advice or instructions for a specific task in your ", selectedVocation, " field (e.g., a wrong measurement for a Bygg project, an incorrect safety step for Elektro, wrong patient information for Helse), what's ONE bad thing that could happen on the job? Discuss one clear example (Small Group)."] })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity4',
        id: 'critThink-activity4-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct4Title', children: ["🔍 Exploration Activity: Is This Real? (", selectedVocation, ")"] }),
          React.createElement('p', { key: 'critAct4Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["The teacher will give you ONE short piece of information or a 'fact' related to ", selectedVocation, ". It might be true, or it might be an AI-generated fake."] }),
          React.createElement('ul', { key: 'critAct4List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct4Li1', children: "With a partner, use a search engine to try and check if it's true. Look for reliable sources." }),
            React.createElement(ListItem, { key: 'critAct4Li2', children: "Decide: Real or Fake? Why do you think so? Be ready to share one source you checked." })
          ]})
        ]
      }),

      React.createElement(InteractiveCard, {
        key: 'critThink-activity5',
        id: 'critThink-activity5-card', 
        isCollapsible: true,
        children: [
          React.createElement(SubsectionTitle, { key: 'critAct5Title', children: "💡 Mini-Scenario: What Would You Say?" }),
          React.createElement('p', { key: 'critAct5Desc', className: "text-neutral-700 mb-2 leading-relaxed", children: ["Imagine a friend shares a 'surprising fact' about ", selectedVocation, " on social media that you think might be wrong. The teacher will give you an example of such a fact."] }),
          React.createElement('ul', { key: 'critAct5List', className: "list-disc list-inside text-neutral-700 mb-2 space-y-1 leading-relaxed", children: [
            React.createElement(ListItem, { key: 'critAct5Li1', children: "What is ONE polite question you could ask your friend to check if the information is true, without starting an argument?" }),
            React.createElement(ListItem, { key: 'critAct5Li2', children: "Share your question with the class." })
          ]})
        ]
      })
    )
  );
};
