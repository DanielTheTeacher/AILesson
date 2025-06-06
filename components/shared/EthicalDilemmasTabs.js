
import React, { useState } from 'react';
import { TabButton } from '../ui/TabButton.js';
import { WritingPrompt } from '../ui/WritingPrompt.js';
import { ResourceLink } from '../ui/ResourceLink.js';
import { Vocation } from '../../types.js'; // Vocation is JS object

// DilemmaTab type removed
// EthicalDilemmasTabsProps interface removed

export const EthicalDilemmasTabs = ({ selectedVocation }) => { // Removed React.FC and prop types
  const [activeTab, setActiveTab] = useState('dilemma1'); // Removed DilemmaTab type

  const getScenario1Title = () => {
    switch (selectedVocation) {
      case Vocation.Elektro: return "Electrical Safety Automation";
      case Vocation.Helse: return "Patient Diagnosis AI";
      case Vocation.Bygg: return "Structural Integrity AI";
      default: return "Scenario 1";
    }
  };

  const getScenario1Description = () => {
    switch (selectedVocation) {
      case Vocation.Elektro: 
        return "An AI tool for electrical planning suggests a wiring layout for a complex industrial machine that meets basic code but seems overly complicated and difficult to maintain safely. Your experience suggests a simpler, more robust layout would be better in the long run, though it might use slightly more expensive components initially.";
      case Vocation.Helse:
        return "An AI diagnostic tool flags a patient for a rare condition based on subtle patterns in their test results. Standard protocols and your clinical experience suggest a more common ailment. The AI has a high accuracy rate but isn't infallible, and further tests for the rare condition are invasive and costly.";
      case Vocation.Bygg:
        return "An AI system analyzing sensor data from a new bridge design suggests a potential structural weakness that standard engineering calculations did not predict. Implementing the AI's recommended reinforcements would cause significant project delays and cost overruns, but ignoring it carries a remote risk.";
      default: return "Scenario 1 Description";
    }
  };
  
  const getScenario1Prompt = () => {
    switch (selectedVocation) {
      case Vocation.Elektro: 
        return "For the Electrical Safety scenario, what would you do? Explain your reasoning. How do you balance the AI's suggestion (which is code-compliant and possibly cost-effective short-term) with your professional judgment about long-term safety and maintainability? What are the potential consequences of each choice?";
      case Vocation.Helse:
        return "For the Patient Diagnosis AI scenario, what steps would you take? How do you balance the AI's data-driven insight with your clinical judgment and patient well-being, considering resource constraints and potential for harm?";
      case Vocation.Bygg:
        return "For the Structural Integrity AI scenario, how would you proceed? How do you weigh the AI's predictive warning against established engineering practices, project constraints, and public safety concerns?";
      default: return "Scenario 1 Prompt";
    }
  };


  const getScenario2Title = () => {
    switch (selectedVocation) {
      case Vocation.Elektro: return "Predictive Maintenance AI";
      case Vocation.Helse: return "Resource Allocation AI";
      case Vocation.Bygg: return "Automated Construction Robotics";
      default: return "Scenario 2";
    }
  };

  const getScenario2Description = () => {
     switch (selectedVocation) {
      case Vocation.Elektro:
        return "An AI predictive maintenance system for a critical power substation indicates a component is likely to fail soon, requiring an immediate shutdown for replacement. However, a manual inspection shows no obvious signs of wear, and an unscheduled shutdown will cause major disruption to services.";
      case Vocation.Helse:
        return "An AI system designed to optimize hospital bed allocation during a surge in patients prioritizes those with the highest probability of quick recovery to maximize throughput. This inadvertently deprioritizes patients with complex chronic conditions who also need urgent care but may have longer recovery times.";
      case Vocation.Bygg:
        return "An AI controlling automated bricklaying robots on a large construction site can work 24/7, significantly speeding up the project. However, this reduces the need for human bricklayers, causing job security concerns among the skilled workforce. The AI also struggles with non-standard design elements requiring human expertise.";
      default: return "Scenario 2 Description";
    }
  };
  
  const getScenario2Prompt = () => {
     switch (selectedVocation) {
      case Vocation.Elektro:
        return "For the Predictive Maintenance AI scenario, what are the ethical considerations? How do you balance the AI's prediction of failure and potential preventative benefits against the certainty of service disruption and lack of visible defects?";
      case Vocation.Helse:
        return "For the Resource Allocation AI scenario, what are the ethical issues at play? How should a hospital balance efficiency goals driven by AI with principles of equity and fairness in patient care, especially for vulnerable populations?";
      case Vocation.Bygg:
        return "For the Automated Construction Robotics scenario, what are the ethical responsibilities of the construction company? How can they balance the benefits of AI-driven automation (speed, cost) with impacts on the human workforce and the need for specialized craftsmanship?";
      default: return "Scenario 2 Prompt";
    }
  };


  return (
    React.createElement('div', { id: "ethicalDilemmasActivity" },
      React.createElement('div', { key: 'content-block-dilemmas-intro', className: "flex flex-col gap-y-3 mb-3" },
        React.createElement('div', { className: "" },
          React.createElement('p', { className: "text-neutral-700 leading-relaxed" }, 
            "As a professional in ", React.createElement('strong', { className: "text-teal-600" }, selectedVocation), ", you might face ethical dilemmas where AI recommendations clash with your judgment or professional ethics. Consider the following scenarios:"
          )
        ),
        React.createElement('div', { key: 'links-dilemmas-intro', className: "w-full" },
          React.createElement('div', { className: "flex flex-row flex-wrap gap-2 items-center" },
            React.createElement(ResourceLink, { href: "https://library.fiveable.me/lists/key-ai-ethics-case-studies", children: "More: AI Ethics Case Studies" })
          )
        )
      ),
      React.createElement('div', { className: "mb-0 flex border-b border-neutral-300" }, 
        React.createElement(TabButton, { 
          onClick: () => setActiveTab('dilemma1'), 
          isActive: activeTab === 'dilemma1', 
          children: getScenario1Title() 
        }),
        React.createElement(TabButton, { 
          onClick: () => setActiveTab('dilemma2'), 
          isActive: activeTab === 'dilemma2', 
          children: getScenario2Title() 
        })
      ),
      React.createElement('div', { className: "p-4 border border-t-0 border-neutral-300 rounded-b-md bg-white" },
        activeTab === 'dilemma1' && (
          React.createElement('div', null,
            React.createElement('h4', { className: "font-semibold text-neutral-700 mb-1 text-lg" }, getScenario1Title()),
            React.createElement('p', { className: "text-neutral-700 mb-2 leading-relaxed" }, getScenario1Description()),
            React.createElement(WritingPrompt, { 
              number: "Prompt:", 
              children: getScenario1Prompt() 
            })
          )
        ),
        activeTab === 'dilemma2' && (
          React.createElement('div', null,
            React.createElement('h4', { className: "font-semibold text-neutral-700 mb-1 text-lg" }, getScenario2Title()),
            React.createElement('p', { className: "text-neutral-700 mb-2 leading-relaxed" }, getScenario2Description()),
            React.createElement(WritingPrompt, { 
              number: "Prompt:", 
              children: getScenario2Prompt() 
            })
          )
        )
      ),
      React.createElement('p', { className: "text-neutral-700 mt-3 leading-relaxed" }, "Such dilemmas often have no easy answers. They show how important human judgment, ethical reflection, and the ability to critically question AI are.")
    )
  );
};