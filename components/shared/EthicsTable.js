import React from 'react';

const tableData = [
  {
    task: "Brainstorming",
    green: "After own thoughts, ask AI for related concepts or new angles.",
    yellow: "AI generates topic list if stuck; research independently to choose/develop.",
    red: "AI chooses topic & provides all initial ideas without own effort."
  },
  {
    task: "Fact-checking/Definitions",
    green: "AI explains term *after* own attempt; verify with reliable sources.",
    yellow: "AI summarizes long article (read first) for notes; understand original source.",
    red: "Using AI summaries/facts without reading original sources or verifying."
  },
  {
    task: "Writing Drafts",
    green: "AI checks *your* text for grammar/spelling; suggests improvements to *your* sentences.",
    yellow: "AI helps outline *after* main arguments/sources decided; AI rephrases *your* awkward sentence. Be open.",
    red: "AI writes paragraphs/sections/entire text; submitting AI text as own."
  }
];

export const EthicsTable = () => { // Removed React.FC
  return (
    React.createElement('div', { id: "ethicsTableActivity", className: "overflow-x-auto" },
      React.createElement('p', { className: "text-slate-700 mb-3 leading-relaxed" }, "This table provides a guide on what is generally okay, what you should be careful with (and check with your teacher), and what is generally not okay when using AI for schoolwork. Remember the \"You First\" principle!"),
      React.createElement('table', { className: "min-w-full w-full text-xs sm:text-sm border-collapse border border-slate-300" },
        React.createElement('thead', null,
          React.createElement('tr', { className: "bg-slate-50" },
            React.createElement('th', { className: "w-1/4 border border-slate-300 p-2 text-left font-semibold text-slate-700" }, "Task Type (Example)"),
            React.createElement('th', { className: "w-1/4 border border-slate-300 p-2 text-left font-semibold text-slate-700 bg-green-100 text-green-700" }, "Green Light (Generally OK with permission & \"You First\")"),
            React.createElement('th', { className: "w-1/4 border border-slate-300 p-2 text-left font-semibold text-slate-700 bg-yellow-100 text-yellow-700" }, "Yellow Light (Be cautious – Check with teacher, use ethically & openly)"),
            React.createElement('th', { className: "w-1/4 border border-slate-300 p-2 text-left font-semibold text-slate-700 bg-red-100 text-red-700" }, "Red Light (Generally NOT OK)")
          )
        ),
        React.createElement('tbody', null,
          tableData.map((row, index) => (
            React.createElement('tr', { key: index, className: "[&>td]:border [&>td]:border-slate-300 [&>td]:p-2 [&>td]:align-top" },
              React.createElement('td', { className: "font-semibold" }, row.task),
              React.createElement('td', { className: "bg-green-50 text-green-800" }, row.green),
              React.createElement('td', { className: "bg-yellow-50 text-yellow-800" }, row.yellow),
              React.createElement('td', { className: "bg-red-50 text-red-800" }, row.red)
            )
          ))
        )
      ),
      React.createElement('p', { className: "text-xs text-slate-500 mt-2" }, "Always check with your teacher if you're unsure!")
    )
  );
};