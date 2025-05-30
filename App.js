
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { ExploreAISection } from './components/chapters/ExploreAISection.js';
import { AIHelperSection } from './components/chapters/AIHelperSection.js';
import { AIFutureSection } from './components/chapters/AIFutureSection.js';
import { ExercisesSkillsSection } from './components/chapters/ExercisesSkillsSection.js'; // New combined chapter
import { ReferencesSection } from './components/chapters/ReferencesSection.js';
import { RealDangersSection } from './components/chapters/RealDangersSection.js';
import { DisclaimerSection } from './components/chapters/DisclaimerSection.js';
import { ChapterId, Vocation } from './types.js';
import { NAV_ITEMS, VOCATION_OPTIONS } from './constants.js';

const App = () => {
  const [activeChapterId, setActiveChapterId] = useState(ChapterId.ExploreAI);
  const [selectedVocation, setSelectedVocation] = useState(Vocation.Elektro);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollToElementId, setScrollToElementId] = useState(null);

  const mainContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id, elementId) => {
    setActiveChapterId(id);
    if (elementId) {
      setScrollToElementId(elementId);
    } else {
      // Scroll to top if no specific element ID is provided
      if (mainContentRef.current) {
         mainContentRef.current.scrollTop = 0; // For content area
      }
      window.scrollTo(0, 0); // For whole page
      setScrollToElementId(null);
    }
  };
  

  useEffect(() => {
    if (scrollToElementId && mainContentRef.current) {
      Promise.resolve().then(() => {
        const element = document.getElementById(scrollToElementId);
        if (element) {
          const headerOffset = isScrolled ? 70 : 120; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setScrollToElementId(null); 
      });
    }
  }, [activeChapterId, scrollToElementId, isScrolled]); // Dependency on activeChapterId ensures scroll logic runs after chapter changes

  const renderChapter = () => {
    const commonProps = { selectedVocation, onNavigate: handleNavClick };
    switch (activeChapterId) {
      case ChapterId.ExploreAI:
        return React.createElement(ExploreAISection, commonProps);
      case ChapterId.AIHelper:
        return React.createElement(AIHelperSection, commonProps);
      case ChapterId.RealDangers:
        return React.createElement(RealDangersSection, commonProps);
      case ChapterId.AIFuture:
        return React.createElement(AIFutureSection, commonProps);
      case ChapterId.ExercisesSkills: // Updated to new combined chapter
        return React.createElement(ExercisesSkillsSection, { ...commonProps, onNavigate: handleNavClick });
      case ChapterId.References:
        return React.createElement(ReferencesSection, null);
      case ChapterId.Disclaimer:
        return React.createElement(DisclaimerSection, { onNavigate: handleNavClick });
      default:
        return React.createElement(ExploreAISection, commonProps);
    }
  };

  return (
    React.createElement('div', { className: "flex flex-col min-h-screen bg-neutral-50 text-neutral-800" },
      React.createElement(Header, {
        navItems: NAV_ITEMS,
        activeChapterId: activeChapterId,
        onNavClick: handleNavClick,
        selectedVocation: selectedVocation,
        onVocationChange: setSelectedVocation,
        isScrolled: isScrolled
      }),
      React.createElement('main', {
        ref: mainContentRef,
        className: `container mx-auto p-4 sm:p-6 flex-grow pt-0 max-w-[800px] transition-all duration-300`
      },
        renderChapter()
      ),
      React.createElement(Footer, { onNavigateToDisclaimer: () => handleNavClick(ChapterId.Disclaimer) })
    )
  );
};

export default App;