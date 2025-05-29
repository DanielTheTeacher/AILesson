import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { ExploreAISection } from './components/chapters/ExploreAISection.js';
import { AIHelperSection } from './components/chapters/AIHelperSection.js';
import { AIFutureSection } from './components/chapters/AIFutureSection.js';
import { ExercisesSection } from './components/chapters/ExercisesSection.js';
import { SkillsConnectSection } from './components/chapters/SkillsConnectSection.js';
import { ReferencesSection } from './components/chapters/ReferencesSection.js';
import { RealDangersSection } from './components/chapters/RealDangersSection.js'; // <-- Ensure this is imported
import { ChapterId, Vocation } from './types.js';
import { NAV_ITEMS, VOCATION_OPTIONS } from './constants.js'; // Ensure VOCATION_OPTIONS is imported

const App = () => {
  const [activeChapterId, setActiveChapterId] = useState(ChapterId.ExploreAI); // Start with the first chapter
  const [selectedVocation, setSelectedVocation] = useState(Vocation.Elektro); // Default vocation
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
      window.scrollTo(0, 0);
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
  }, [activeChapterId, scrollToElementId, isScrolled]);

  const renderChapter = () => {
    const commonProps = { selectedVocation }; // Pass vocation to all
    switch (activeChapterId) {
      case ChapterId.ExploreAI:
        return React.createElement(ExploreAISection, commonProps);
      case ChapterId.AIHelper:
        return React.createElement(AIHelperSection, commonProps);
      case ChapterId.RealDangers:
        return React.createElement(RealDangersSection, commonProps);
      case ChapterId.AIFuture:
        return React.createElement(AIFutureSection, commonProps);
      case ChapterId.Exercises:
        return React.createElement(ExercisesSection, { ...commonProps, onNavigate: handleNavClick });
      case ChapterId.SkillsConnect:
        return React.createElement(SkillsConnectSection, commonProps);
      case ChapterId.References:
        return React.createElement(ReferencesSection, null);
      default:
        return React.createElement(ExploreAISection, commonProps); // Default to first chapter
    }
  };

  return (
    React.createElement('div', { className: "flex flex-col min-h-screen bg-slate-100 text-slate-800" },
      React.createElement(Header, {
        navItems: NAV_ITEMS,
        activeChapterId: activeChapterId,
        onNavClick: handleNavClick,
        selectedVocation: selectedVocation,
        onVocationChange: setSelectedVocation, // Pass the *setter* function
        isScrolled: isScrolled
      }),
      React.createElement('main', {
        ref: mainContentRef,
        className: `container mx-auto p-4 sm:p-6 flex-grow pt-0 max-w-[800px] transition-all duration-300`
      },
        renderChapter()
      ),
      React.createElement(Footer, null)
    )
  );
};

export default App;