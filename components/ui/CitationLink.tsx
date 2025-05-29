
import React from 'react';

interface CitationLinkProps {
  referenceId: string;
  text: string;
}

export const CitationLink: React.FC<CitationLinkProps> = ({ referenceId, text }) => {
  // In a full SPA with routing, this might scroll to the reference.
  // For now, it's a visual indicator. Links to #ref-id will work if ReferencesSection is on the same page
  // but since we switch components, this direct linking won't work without App-level coordination.
  // For simplicity, we won't implement cross-component anchor scrolling.
  // The user can navigate to the References chapter.
  return (
    <sup className="text-xs align-super text-gray-400 hover:text-gray-500 font-normal ml-px cursor-pointer" title={`Reference ${text}`}>
      <a href={`#${referenceId}`} onClick={(e) => e.preventDefault()} className="text-gray-400 no-underline hover:underline">
        {text}
      </a>
    </sup>
  );
};
