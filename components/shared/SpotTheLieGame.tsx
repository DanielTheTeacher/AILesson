
import React, { useState } from 'react';
import { CitationLink } from '../ui/CitationLink.tsx';

interface LieOption {
  id: number;
  text: React.ReactNode;
  isLie: boolean;
}

const options: LieOption[] = [
  { id: 1, text: <>"The chocolate fountain was invented in Canada by Aztec Inc. in the early 1990s and quickly became popular at fairs and events for its unique way of serving melted chocolate." <CitationLink referenceId="ref-8" text="[8]" /></>, isLie: true },
  { id: 2, text: <>"The world's longest documented hiccuping spell lasted for 68 years, from 1922 to 1990, affecting an American man named Charles Osborne." <CitationLink referenceId="ref-9" text="[9]" /></>, isLie: false },
  { id: 3, text: <>"The 'Great Emu War' in Australia in 1932 was an actual military operation where soldiers were deployed with machine guns to combat a large population of emus destroying crops." <CitationLink referenceId="ref-10" text="[10]" /></>, isLie: false },
];

export const SpotTheLieGame: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [feedbackColor, setFeedbackColor] = useState<string>('text-slate-700');

  const handleOptionClick = (option: LieOption) => {
    setSelectedId(option.id);
    if (option.isLie) {
      setFeedback(`Correct! Text ${option.id} is AI-generated fiction. Well observed!`);
      setFeedbackColor('text-green-600');
    } else {
      setFeedback(`Not quite. Text 1 is the AI fiction. Text ${option.id} is true!`);
      setFeedbackColor('text-red-600');
    }
  };

  return (
    <div id="spotTheLieActivity" className="bg-amber-50 p-4 rounded-md border border-amber-200">
      <h4 className="font-semibold text-amber-700 mb-2">Exercise: What is AI-Generated Fiction?</h4>
      <p className="text-sm text-slate-700 mb-3 leading-relaxed">Below are three short descriptions. Two are true (though perhaps a bit obscure), and one is an AI-generated "hallucination." Can you find the AI fiction?</p>
      <div className="space-y-3">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`p-3 bg-white rounded shadow cursor-pointer hover:shadow-md transition-all border-2 ${
              selectedId === option.id 
                ? (option.isLie ? 'border-green-500' : 'border-red-500') 
                : 'border-transparent'
            }`}
          >
            <strong className="text-sm">Text {option.id}:</strong> <span className="text-sm">{option.text}</span>
          </div>
        ))}
      </div>
      {feedback && <p className={`text-sm mt-3 font-medium ${feedbackColor}`}>{feedback}</p>}
      <p className="text-xs text-slate-600 mt-2 leading-relaxed"><i>(Answer: Text 1 is AI fiction. Chocolate fountains were popularized by Design & Realisation, but Aztec Inc. is not mentioned in sources confirming the invention. Texts 2 and 3 are true, albeit unusual, events.)</i></p>
    </div>
  );
};