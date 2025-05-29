import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { Tooltip } from '../ui/Tooltip.js';
import { ListItem } from '../ui/ListItem.js';
// Types removed

export const WelcomeSection = ({ selectedVocation }) => { // Removed React.FC and prop types
  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement('div', { className: "text-center mb-10" },
        React.createElement('h1', { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-sky-700 mb-3" },
          "AI Learning for Vocational Studies"
        ),
        React.createElement('p', { className: "text-lg text-slate-600" },
          "Tailored for ",
          React.createElement('span', { className: "font-semibold text-sky-600" }, selectedVocation),
          " and all vocational learners."
        )
      ),
      React.createElement(InteractiveCard, {
        children: [
          React.createElement('h2', { key: 'h2', className: "text-2xl sm:text-3xl font-semibold mb-6 text-sky-700" },
            "Welcome to Your AI Learning Journey!"
          ),
          React.createElement('p', { key: 'p1', className: "text-slate-700 mb-4 leading-relaxed" },
            "Artificial Intelligence (AI) is rapidly changing the world – including how we work and learn. For those of you in vocational studies, especially students in ",
            React.createElement('strong', { className: "text-sky-600" }, selectedVocation),
            ", it's important to understand what AI is, how you can use it smartly, and the new opportunities and challenges it brings."
          ),
          React.createElement('p', { key: 'p2', className: "text-slate-700 mb-4 leading-relaxed" },
            "This page is designed to help you with just that! Here you will learn about:"
          ),
          React.createElement('ul', { key: 'ul', className: "list-disc list-inside text-slate-700 mb-4 space-y-1 leading-relaxed" },
            React.createElement(ListItem, { key: 'li1', children: "What AI really is, in simple terms." }),
            React.createElement(ListItem, { key: 'li2', children: "How to think critically when encountering AI-generated content." }),
            React.createElement(ListItem, { key: 'li3', children: "How to use AI as a useful tool in your schoolwork and future job." }),
            React.createElement(ListItem, { key: 'li4', children: "Which skills will be extra important in a future with more AI." }),
            React.createElement(ListItem, { key: 'li5', children: "How to use AI responsibly." })
          ),
          React.createElement('p', { key: 'p3', className: "text-slate-700 leading-relaxed" },
            "The goal is not just for you to be able to use AI tools, but for you to become a ",
            React.createElement(Tooltip, { key: 't1', text: "One who thinks for themselves and asks questions.", children: "critical" }),
            ", ",
            React.createElement(Tooltip, { key: 't2', text: "One who considers what is right and wrong.", children: "ethical" }),
            ", and ",
            React.createElement(Tooltip, { key: 't3', text: "One who easily learns new things.", children: "adaptable" }),
            " user of AI. Let's explore together!"
          )
        ]
      })
    )
  );
};