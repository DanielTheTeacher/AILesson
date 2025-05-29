import React from 'react';
import { InteractiveCard } from '../ui/InteractiveCard';
// Removed SectionTitle import as we'll use a more prominent h1
import { Tooltip } from '../ui/Tooltip';
import { ListItem } from '../ui/ListItem';
import { VocationSpecificProps } from '../../types';

export const WelcomeSection: React.FC<VocationSpecificProps> = ({ selectedVocation }) => {
  return (
    <section className="mb-12">
      {/* Main application title moved here */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-700 mb-3">
          AI Learning for Vocational Studies
        </h1>
        <p className="text-lg text-slate-600">
          Tailored for <span className="font-semibold text-sky-600">{selectedVocation}</span> and all vocational learners.
        </p>
      </div>

      <InteractiveCard>
        {/* Original SectionTitle changed to h2 for semantic structure */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-sky-700">
          Welcome to Your AI Learning Journey!
        </h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Artificial Intelligence (AI) is rapidly changing the world – including how we work and learn. For those of you in vocational studies, especially students in <strong className="text-sky-600">{selectedVocation}</strong>, it's important to understand what AI is, how you can use it smartly, and the new opportunities and challenges it brings.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          This page is designed to help you with just that! Here you will learn about:
        </p>
        <ul className="list-disc list-inside text-slate-700 mb-4 space-y-1 leading-relaxed">
          <ListItem>What AI really is, in simple terms.</ListItem>
          <ListItem>How to think critically when encountering AI-generated content.</ListItem>
          <ListItem>How to use AI as a useful tool in your schoolwork and future job.</ListItem>
          <ListItem>Which skills will be extra important in a future with more AI.</ListItem>
          <ListItem>How to use AI responsibly.</ListItem>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          The goal is not just for you to be able to use AI tools, but for you to become a <Tooltip text="One who thinks for themselves and asks questions.">critical</Tooltip>, <Tooltip text="One who considers what is right and wrong.">ethical</Tooltip>, and <Tooltip text="One who easily learns new things.">adaptable</Tooltip> user of AI. Let's explore together!
        </p>
      </InteractiveCard>
    </section>
  );
};
