
import React, { useState } from 'react';
import { ResourceLink } from '../ui/ResourceLink';
import { WritingPrompt } from '../ui/WritingPrompt';

interface Strategy {
  id: string;
  title: string;
  info: string;
}

const strategies: Strategy[] = [
  { id: "strategy1", title: "Vary your news sources", info: "Actively seek news from various sources with different perspectives, even those you disagree with. (Tool example: AllSides.com)" },
  { id: "strategy2", title: "Follow diverse voices", info: "Consciously follow people and organizations on social media who have different opinions than your own." },
  { id: "strategy3", title: "Fact-check thoroughly", info: "Check if information is true before sharing it. Use reputable fact-checking sites (e.g., Faktisk.no, Snopes, PolitiFact) and cross-reference." },
  { id: "strategy4", title: "Understand and \"confuse\" algorithms", info: "Be aware that algorithms personalize content. Consciously explore content outside your usual interests." },
];

export const EscapeTheBubble: React.FC = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  return (
    <div id="escapeBubbleActivity" className="bg-sky-50 p-4 rounded-md border border-sky-200 mt-4">
      <h4 className="font-semibold text-sky-700 mb-2">Exercise: Burst the Bubble!</h4>
      <p className="text-sm text-slate-700 mb-3 leading-relaxed">
        How can you avoid being trapped in filter bubbles and echo chambers? Click on a strategy to learn more and reflect.
        <ResourceLink href="https://libguides.pittcc.edu/evaluate/fact-checking">Learn: Fact-Checking Techniques</ResourceLink>
        <ResourceLink href="https://guides.lib.k-state.edu/media-literacy/factcheck">Tools: Fact-Checking Websites</ResourceLink>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            onClick={() => setSelectedStrategy(strategy)}
            className={`p-3 bg-white rounded shadow cursor-pointer hover:shadow-md transition-all ${
              selectedStrategy?.id === strategy.id ? 'ring-2 ring-sky-500 bg-sky-100' : ''
            }`}
          >
            <p className="text-sm font-medium text-slate-700">{strategy.title}</p>
          </div>
        ))}
      </div>
      {selectedStrategy && (
        <div className="mt-4 p-3 bg-sky-100 border border-sky-200 rounded">
          <p className="text-sm text-slate-700 leading-relaxed">{selectedStrategy.info}</p>
          <p className="text-xs font-medium text-slate-600 mt-2 mb-1">How could you apply this strategy this week? (Quick thought for yourself)</p>
        </div>
      )}
      <WritingPrompt number="Writing Prompt 2.1:" className="mt-6">
        After exploring the strategies above, choose 1-2 strategies you think would be most helpful for you. In a few sentences, explain why you chose them and describe a specific situation where you could apply each one this week.
      </WritingPrompt>
    </div>
  );
};
