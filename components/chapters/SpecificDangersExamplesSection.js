
import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { SubsectionTitle } from '../ui/SubsectionTitle.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { Vocation } from '../../types.js';
import { EmptyReferencesDropdown } from '../ui/EmptyReferencesDropdown.js';

export const SpecificDangersExamplesSection = ({ selectedVocation }) => {
  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "More Real-World AI Dangers: Case Studies" }),

      React.createElement(InteractiveCard, {
        key: "danger-decisions-updated",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub1', children: "The AI That Decides Your Future (And Gets It Wrong)" }),
          React.createElement('div', { key: 'content-block-decisions', className: "flex flex-col gap-y-3" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p1', className: "text-neutral-700 leading-relaxed" },
                "AI is increasingly making huge calls about your life: what school accepts you, if you can get a loan for your first car or home, even if police systems flag you as a future risk. Imagine an AI, fed old, unfair information, brands you \"high-risk.\" Suddenly, doors slam shut. Your dreams are blocked, or you're treated with suspicion, and you might never even find out that a cold, unfeeling AI (",
                React.createElement(Tooltip, { key: 't-algo', text: "a computer's set of instructions", children: "algorithm" }),
                ") made that devastating, unfair decision."
              )
            ),
            React.createElement('div', { key: 'links-decisions', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'rl1', href: "https://calmatters.org/economy/technology/2025/05/california-somehow-finds-no-ai-risks/", children: "Read article: State Claims There's Zero 'High-Risk' AI in California Government, Despite Use of Biased COMPAS Tool" }),
                React.createElement(ResourceLink, { key: 'rl2', href: "https://www.iotforall.com/ai-loans-finance-bias", children: "Read article: The Problem with AI Loan Algorithms and Bias: How AI Can Perpetuate Discrimination" }),
                React.createElement(ResourceLink, { key: 'rl3', href: "https://boingboing.net/2025/05/01/algorithms-in-college-admissions-could-make-discrimination-worse.html", children: "Read article: Algorithms in College Admissions Could Make Discrimination Worse" })
              )
            )
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-decisions' })
        ]
      }),

      React.createElement(InteractiveCard, {
        key: "danger-facial-rec-updated",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub2', children: "Your Face, Your Crime (But It Wasn't You)" }),
          React.createElement('div', { key: 'content-block-facial', className: "flex flex-col gap-y-3" },
            React.createElement('div', { className: "" },
              React.createElement('p', { key: 'p2', className: "text-neutral-700 leading-relaxed" },
                "Police use face-matching tech (",
                React.createElement(Tooltip, { key: 't-facial', text: "technology that identifies people by analyzing their face", children: "facial recognition" }),
                ") to hunt criminals. But if the AI is poorly trained, it can point the finger at completely innocent people. Real people have been arrested, their lives turned upside down, because an AI made a mistake. Imagine the terror of being accused, maybe even jailed, for a crime you had nothing to do with, your reputation destroyed, all because an AI got it wrong."
              )
            ),
            React.createElement('div', { key: 'links-facial', className: "w-full" },
              React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                React.createElement(ResourceLink, { key: 'rl4', href: "https://quadrangle.michigan.law.umich.edu/issues/winter-2024-2025/flawed-facial-recognition-technology-leads-wrongful-arrest-and-historic", children: "Read article: Flawed Facial Recognition Technology Leads to Wrongful Arrest and Historic Settlement in Robert Williams's Case" }),
                React.createElement(ResourceLink, { key: 'rl5', href: "https://www.democracynow.org/2023/8/9/porcha_woodruff_false_facial_recognition_arrest", children: "Read article: Meet Porcha Woodruff, Detroit Woman Jailed While 8 Months Pregnant After False AI Facial Recognition" })
              )
            )
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-facial-rec' })
        ]
      }),

      selectedVocation === Vocation.Elektro && React.createElement(InteractiveCard, {
        key: "danger-elektro-updated",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub-elektro', children: ["Specific Dangers for ", Vocation.Elektro] }),
          React.createElement('div', { key: 'ed1-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('div', { key: 'content-block-ed1', className: "flex flex-col gap-y-3 mb-2" },
              React.createElement('div', { className: "" },
                React.createElement('h4', { key: 'h-ed1', className: "font-semibold text-neutral-700 mb-2" }, "Dangerous \"Facts\" Can Lead to Electrocution"),
                React.createElement('p', { key: 'p-ed1', className: "text-neutral-700 leading-relaxed" },
                  "You're about to work on a high-voltage system and ask an AI for Norwegian electrical safety rules. It confidently spits out American rules, perfectly translated. If you trust this ",
                  React.createElement(Tooltip, { key: 't-misinfo-elektro', text: "false or inaccurate information", children: "misinformation" }),
                  " and follow it, you could be instantly killed. The current doesn't care that the AI sounded sure; different countries have life-or-death differences in their electrical standards."
                )
              ),
              React.createElement('div', { key: 'links-ed1', className: "w-full" },
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                  React.createElement(ResourceLink, { key: 'rl-ed1-1', href: "https://brainfiller.com/technical-articles/artificial-intelligence-ai-is-no-substitute-for-knowledge/", children: "Read article: Artificial Intelligence is No Substitute for Knowledge! The Risks of Misinformation in Electrical Safety" }),
                  React.createElement(ResourceLink, { key: 'rl-ed1-2', href: "https://www.bbc.com/news/business-66196223", children: "Read article: ChatGPT Owner in Probe Over Risks Around False Answers" })
                )
              )
            )
          ),
          React.createElement('div', { key: 'ed2-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('div', { key: 'content-block-ed2', className: "flex flex-col gap-y-3" },
              React.createElement('div', { className: "" },
                React.createElement('h4', { key: 'h-ed2', className: "font-semibold text-neutral-700 mb-2" }, "Critical Infrastructure Failure – Triggered by Biased AI"),
                React.createElement('p', { key: 'p-ed2', className: "text-neutral-700 leading-relaxed" },
                  "Imagine an AI controlling a city's power grid (",
                  React.createElement(Tooltip, { key: 't-infra-elektro', text: "vital systems like power and communication networks", children: "infrastructure" }),
                  "). If it learned from biased historical data that some neighborhoods or new industrial zones are \"less critical,\" it might, during a power crisis, decide to cut electricity to your workplace, or worse, to hospitals and emergency services. This isn't just an inconvenience; it's chaos, potentially endangering lives and causing massive damage, all because an AI made a biased choice."
                )
              ),
              React.createElement('div', { key: 'links-ed2', className: "w-full" },
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                  React.createElement(ResourceLink, { key: 'rl-ed2-1', href: "https://lifestyle.sustainability-directory.com/term/bias-in-digital-systems/", children: "Read article: Bias in Digital Systems: How It Shapes Our World and What We Can Do" }),
                  React.createElement(ResourceLink, { key: 'rl-ed2-2', href: "https://www.agilityrecovery.com/article/ai-power-outages-grid-reliability", children: "Read article: AI Power Outages: Is Your Business Ready for Grid Reliability Challenges?" })
                )
              )
            )
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-elektro' })
        ]
      }),

      selectedVocation === Vocation.Helse && React.createElement(InteractiveCard, {
        key: "danger-helse-updated",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub-helse', children: ["Specific Dangers for ", Vocation.Helse] }),
          React.createElement('div', { key: 'hd1-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('div', { key: 'content-block-hd1', className: "flex flex-col gap-y-3 mb-2" },
              React.createElement('div', { className: "" },
                React.createElement('h4', { key: 'h-hd1', className: "font-semibold text-neutral-700 mb-2" }, "The AI Doctor That Misdiagnoses Based on Your Gender or Skin Tone"),
                React.createElement('p', { key: 'p-hd1', className: "text-neutral-700 leading-relaxed" },
                  "An AI tool designed to spot skin cancer, if primarily trained on light skin images, might tragically fail to detect a dangerous melanoma on darker skin until it's spread and become untreatable. Similarly, an AI symptom checker, learning mostly from men's medical data, could dismiss a woman's heart attack symptoms as anxiety, because they present differently. This isn't just a glitch; it's a potential death sentence due to medical AI failing to see everyone."
                )
              ),
              React.createElement('div', { key: 'links-hd1', className: "w-full" },
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                  React.createElement(ResourceLink, { key: 'rl-hd1-1', href: "https://www.pharmasalmanac.com/articles/the-gender-bias-built-into-ai-and-its-threat-to-womens-health", children: "Read article: The Gender Bias Built Into AI — And Its Threat to Women's Health" })
                )
              )
            )
          ),
          React.createElement('div', { key: 'hd2-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('div', { key: 'content-block-hd2', className: "flex flex-col gap-y-3 mb-2" },
              React.createElement('div', { className: "" },
                React.createElement('h4', { key: 'h-hd2', className: "font-semibold text-neutral-700 mb-2" }, "The Child Protection AI That Unjustly Shatters Families"),
                React.createElement('p', { key: 'p-hd2', className: "text-neutral-700 leading-relaxed" },
                  "Authorities might use AI to predict which children are at risk of neglect. But what if the AI is trained on biased ",
                  React.createElement(Tooltip, { key: 't-data-helse', text: "facts and information", children: "data" }),
                  " that wrongly links poverty or a family's background with danger? It could wrongly flag loving, innocent families. Imagine the trauma of stressful investigations, or the unimaginable horror of children being wrongly torn from their parents based on a flawed computer prediction, a family shattered by an algorithm."
                )
              ),
              React.createElement('div', { key: 'links-hd2', className: "w-full" },
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                  React.createElement(ResourceLink, { key: 'rl-hd2-1', href: "https://themarkup.org/investigations/2025/05/20/the-nyc-algorithm-deciding-which-families-are-under-watch-for-child-abuse", children: "Read article: The NYC Algorithm Deciding Which Families Are Under Watch for Child Abuse" })
                )
              )
            )
          ),
          React.createElement('div', { key: 'hd3-container', className: "mt-4 pt-4 border-t border-neutral-200" },
             React.createElement('div', { key: 'content-block-hd3', className: "flex flex-col gap-y-3" },
              React.createElement('div', { className: "" },
                React.createElement('h4', { key: 'h-hd3', className: "font-semibold text-neutral-700 mb-2" }, "Mental Health AI That Gives Harmful \"Support\""),
                React.createElement('p', { key: 'p-hd3', className: "text-neutral-700 leading-relaxed" },
                  "Think about an AI chatbot designed for mental health advice. If this AI learned from toxic corners of the internet, it could give terrible, even dangerous, advice. It might ",
                  React.createElement(Tooltip, { key: 't-subtly-helse', text: "in a clever, hard-to-notice way", children: "subtly" }),
                  " push unhealthy body image ideals on vulnerable young women, or tell a young man struggling with depression to just \"man up,\" making their mental health spiral downwards. What seems like harmless tech could become a source of deep psychological harm."
                )
              ),
              React.createElement('div', { key: 'links-hd3', className: "w-full" },
                React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
                  React.createElement(ResourceLink, { key: 'rl-hd3-1', href: "https://hsph.harvard.edu/news/artificial-intelligence-tools-offer-harmful-advice-on-eating-disorders/", children: "Read article: Artificial Intelligence Tools Offer Harmful Advice on Eating Disorders" }),
                  React.createElement(ResourceLink, { key: 'rl-hd3-2', href: "https://www.bbc.com/news/articles/ced2ywg7246o", children: "Read article: AI Chatbots: Users Tell of 'Empathy' and 'Support' but Experts Warn of Risks" })
                )
              )
            )
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-helse' })
        ]
      }),

      selectedVocation === Vocation.Bygg && React.createElement(InteractiveCard, {
        key: "danger-bygg-updated",
        children: [
          React.createElement(SubsectionTitle, { key: 'sub-bygg', children: ["Specific Dangers for ", Vocation.Bygg] }),
          React.createElement('div', { key: 'bd1-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('h4', { key: 'h-bd1', className: "font-semibold text-neutral-700 mb-2" }, "The AI That Gives Deadly Building Codes"),
            React.createElement('p', { key: 'p-bd1', className: "text-neutral-700 mb-2 leading-relaxed" },
              "Imagine you’re designing a roof for a new school gym in a part of Norway known for massive snowfalls. You ask an AI for the correct building rules. It spits out official-looking codes, in perfect Norwegian, detailing how strong the roof needs to be. But these are actually codes for a sunny, snow-free country! If you trust that AI and build it that way, the first heavy Norwegian blizzard could cause the entire roof to buckle and crash down, potentially onto hundreds of people. That's not just a mistake; it's a catastrophe caused by relying on deadly wrong info (",
              React.createElement(Tooltip, { key: 't-misinfo-bygg', text: "false or wrong info", children: "misinformation" }),
              ") from an AI that doesn't understand real-world Norwegian conditions like ",
              React.createElement(Tooltip, { key: 't-permafrost-bygg', text: "ground that is permanently frozen", children: "permafrost" }),
              "."
            )
            // No ResourceLinks provided for this example in the prompt
          ),
          React.createElement('div', { key: 'bd2-container', className: "mt-4 pt-4 border-t border-neutral-200" },
            React.createElement('h4', { key: 'h-bd2', className: "font-semibold text-neutral-700 mb-2" }, "Biased Material Estimates That Bankrupt a Project or Compromise Safety"),
            React.createElement('p', { key: 'p-bd2', className: "text-neutral-700 leading-relaxed" }, // Removed mb-2 from original here as it was the last paragraph
              "Your team is building housing in a remote Norwegian town. You use an AI to estimate the cost and amount of good quality, safe materials. But the AI learned mostly from big city projects where that material is cheap and plentiful. For your rural project, the AI’s estimate is dangerously low. The project suddenly faces a massive budget shortfall. To avoid going bankrupt, the company might be pressured to use worse quality materials, or skimp on insulation vital for brutal Norwegian winters. Imagine those new homes a few years later: freezing cold, riddled with damp and mold, or structurally unsound, unable to withstand strong winds. This isn't just about money; it’s about an AI’s bad guess ",
              React.createElement(Tooltip, { key: 't-compromising-bygg', text: "weakening or putting at risk", children: "compromising" }),
              " the health, safety, and lives of the families who were promised a safe home."
            )
            // No ResourceLinks provided for this example in the prompt
          ),
          React.createElement(EmptyReferencesDropdown, { key: 'refs-bygg' })
        ]
      })
    )
  );
};