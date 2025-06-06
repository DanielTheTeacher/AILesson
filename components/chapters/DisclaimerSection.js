

import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard.js';
import { SectionTitle } from '../ui/SectionTitle.js';
import { ChapterId } from '../../types.js';

export const DISCLAIMER_SUB_CHAPTERS = [
  { id: 'disclaimer-main-content', title: 'Disclaimer Details' }
];

export const DisclaimerSection = ({ onNavigate }) => {
  const handleYouFirstLink = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(ChapterId.AIHelper, 'ai-helper-you-first'); // Updated to use the sub-chapter ID from AIHelperSection
    }
  };

  return (
    React.createElement('section', { className: "mb-12" },
      React.createElement(SectionTitle, { children: "Disclaimer" }),
      React.createElement(InteractiveCard, {
        id: DISCLAIMER_SUB_CHAPTERS[0].id, // 'disclaimer-main-content'
        "data-subchapter-target": "true",
        children: [
          React.createElement('p', { className: "text-neutral-700 mb-3 leading-relaxed" },
            "Dette AI-kurset er utviklet av Daniel Bolstad-Heien for utdanningsformål."
          ),
          React.createElement('p', { className: "text-neutral-700 mb-3 leading-relaxed" },
            "Innholdet er skrevet av Daniel, og raffinert ved hjelp av kunstig intelligens (KI) i tråd med «Du Først»-prinsippet (se ",
            React.createElement('button', {
              onClick: handleYouFirstLink,
              className: "text-teal-600 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300 rounded",
              'aria-label': "Naviger til Du Først-prinsippet i kapittel 2"
            }, "her"),
            "). Kilder er samlet inn både manuelt og ved bruk av Notebook LM. Alt innhold er manuelt kontrollert."
          ),
          React.createElement('p', { className: "text-neutral-700 mb-3 leading-relaxed" },
            "Nettstedets kode er generert med Google Gemini 2.5 Pro Preview (versjon 05-06), og deretter manuelt modifisert, samt ved hjelp av Anthropic Claude 4 Sonnet. Innholdet er lagret på GitHub og følger GDPR- og personvernregler. Siden er ikke indeksert av søkemotorer."
          ),
          React.createElement('p', { className: "text-neutral-700 mb-3 leading-relaxed" },
            "Feil eller endringsforslag kan sendes til ",
            React.createElement('a', { href: "mailto:daniel.andre.bolstad-heien@mrfylke.no", className: "text-teal-600 hover:underline" }, "daniel.andre.bolstad-heien@mrfylke.no"),
            "."
          ),
          React.createElement('p', { className: "text-neutral-700 leading-relaxed" },
            "Nettstedet ble utviklet i 2025, og nylige endringer i teknologi og samfunn er muligens ikke fullstendig hensyntatt."
          )
        ]
      })
    )
  );
};
