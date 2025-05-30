
import React, { useState } from 'react';
import { ResourceLink } from '../ui/ResourceLink.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';

// Strategy interface removed

const strategies = [ // Removed Strategy[] type
  { id: "strategy1", title: "Vary your news sources", info: "Actively seek news from various sources with different perspectives, even those you disagree with. (Tool example: AllSides.com)" },
  { id: "strategy2", title: "Follow diverse voices", info: "Consciously follow people and organizations on social media who have different opinions than your own." },
  { id: "strategy3", title: "Fact-check thoroughly", info: "Check if information is true before sharing it. Use reputable fact-checking sites (e.g., Faktisk.no, Snopes, PolitiFact) and cross-reference." },
  { id: "strategy4", title: "Understand and \"confuse\" algorithms", info: "Be aware that algorithms personalize content. Consciously explore content outside your usual interests." },
];

export const EscapeTheBubble = () => { // Removed React.FC
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  return (
    React.createElement('div', { id: "escapeBubbleActivity", className: "bg-teal-50 p-4 rounded-md border border-teal-200 mt-4" },
      React.createElement('h4', { className: "font-semibold text-teal-700 mb-2" }, "Exercise: Burst the Bubble!"),
      React.createElement('p', { className: "text-sm text-neutral-700 mb-3 leading-relaxed" },
        "How can you avoid being trapped in filter bubbles and echo chambers? Click on a strategy to learn more and reflect.",
        React.createElement(ResourceLink, { href: "https://libguides.pittcc.edu/evaluate/fact-checking", children: "Learn: Fact-Checking Techniques" }),
        React.createElement(ResourceLink, { href: "https://guides.lib.k-state.edu/media-literacy/factcheck", children: "Tools: Fact-Checking Websites" })
      ),
      React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-3" },
        strategies.map((strategy) => (
          React.createElement('div', {
            key: strategy.id,
            onClick: () => setSelectedStrategy(strategy),
            className: `p-3 bg-white rounded shadow cursor-pointer hover:shadow-md transition-all ${
              selectedStrategy?.id === strategy.id ? 'ring-2 ring-teal-500 bg-teal-100' : ''
            }`
          },
            React.createElement('p', { className: "text-sm font-medium text-neutral-700" }, strategy.title)
          )
        ))
      ),
      selectedStrategy && (
        React.createElement('div', { className: "mt-4 p-3 bg-teal-100 border border-teal-200 rounded" },
          React.createElement('p', { className: "text-sm text-neutral-700 leading-relaxed" }, selectedStrategy.info),
          React.createElement('p', { className: "text-xs font-medium text-neutral-600 mt-2 mb-1" }, "How could you apply this strategy this week? (Quick thought for yourself)")
        )
      ),
      React.createElement(WritingPrompt, { 
        number: "Writing Prompt:", 
        className: "mt-6", 
        children: "After exploring the strategies above, choose 1-2 strategies you think would be most helpful for you. In a few sentences, explain why you chose them and describe a specific situation where you could apply each one this week." 
      })
    )
  );
};