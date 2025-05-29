import React, { useState } from 'react';
import { CitationLink } from '../ui/CitationLink.js';

// LieOption interface removed

const options = [ // Removed LieOption[] type
  { id: 1, text: React.createElement(React.Fragment, null, "\"The chocolate fountain was invented in Canada by Aztec Inc. in the early 1990s and quickly became popular at fairs and events for its unique way of serving melted chocolate.\" ", React.createElement(CitationLink, { referenceId: "ref-8", text: "[8]" })), isLie: true },
  { id: 2, text: React.createElement(React.Fragment, null, "\"The world's longest documented hiccuping spell lasted for 68 years, from 1922 to 1990, affecting an American man named Charles Osborne.\" ", React.createElement(CitationLink, { referenceId: "ref-9", text: "[9]" })), isLie: false },
  { id: 3, text: React.createElement(React.Fragment, null, "\"The 'Great Emu War' in Australia in 1932 was an actual military operation where soldiers were deployed with machine guns to combat a large population of emus destroying crops.\" ", React.createElement(CitationLink, { referenceId: "ref-10", text: "[10]" })), isLie: false },
];

export const SpotTheLieGame = () => { // Removed React.FC
  const [selectedId, setSelectedId] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('text-slate-700');

  const handleOptionClick = (option) => {
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
    React.createElement('div', { id: "spotTheLieActivity", className: "bg-amber-50 p-4 rounded-md border border-amber-200" },
      React.createElement('h4', { className: "font-semibold text-amber-700 mb-2" }, "Exercise: What is AI-Generated Fiction?"),
      React.createElement('p', { className: "text-sm text-slate-700 mb-3 leading-relaxed" }, "Below are three short descriptions. Two are true (though perhaps a bit obscure), and one is an AI-generated \"hallucination.\" Can you find the AI fiction?"),
      React.createElement('div', { className: "space-y-3" },
        options.map((option) => (
          React.createElement('div', {
            key: option.id,
            onClick: () => handleOptionClick(option),
            className: `p-3 bg-white rounded shadow cursor-pointer hover:shadow-md transition-all border-2 ${
              selectedId === option.id 
                ? (option.isLie ? 'border-green-500' : 'border-red-500') 
                : 'border-transparent'
            }`
          },
            React.createElement('strong', { className: "text-sm" }, "Text ", option.id, ":"), 
            React.createElement('span', { className: "text-sm" }, option.text)
          )
        ))
      ),
      feedback && React.createElement('p', { className: `text-sm mt-3 font-medium ${feedbackColor}` }, feedback),
      React.createElement('p', { className: "text-xs text-slate-600 mt-2 leading-relaxed" }, 
        React.createElement('i', null, "(Answer: Text 1 is AI fiction. Chocolate fountains were popularized by Design & Realisation, but Aztec Inc. is not mentioned in sources confirming the invention. Texts 2 and 3 are true, albeit unusual, events.)")
      )
    )
  );
};