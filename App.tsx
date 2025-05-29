import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { WelcomeSection } from './components/chapters/WelcomeSection.js';
import { ExploreAISection } from './components/chapters/ExploreAISection.js';
import { CriticalThinkingSection } from './components/chapters/CriticalThinkingSection.js';
import { AIHelperSection } from './components/chapters/AIHelperSection.js';
import { AIFutureSection } from './components/chapters/AIFutureSection.js';
import { AISocietySection } from './components/chapters/AISocietySection.js';
import { ExercisesSection } from './components/chapters/ExercisesSection.js';
import { SkillsConnectSection } from './components/chapters/SkillsConnectSection.js';
import { ReferencesSection } from './components/chapters/ReferencesSection.js';
import { ChapterId, Vocation } from './types.js';
import { NAV_ITEMS, VOCATION_OPTIONS } from './constants.js';

const App = () => { // Removed React.FC
  const [activeChapterId, setActiveChapterId] = useState(ChapterId.Home);
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
    const commonProps = { selectedVocation };
    switch (activeChapterId) {
      case ChapterId.Home:
        return React.createElement(WelcomeSection, commonProps);
      case ChapterId.ExploreAI:
        return React.createElement(ExploreAISection, commonProps);
      case ChapterId.CriticalThinking:
        return React.createElement(CriticalThinkingSection, commonProps);
      case ChapterId.AIHelper:
        return React.createElement(AIHelperSection, commonProps);
      case ChapterId.AIFuture:
        return React.createElement(AIFutureSection, commonProps);
      case ChapterId.AISociety:
        return React.createElement(AISocietySection, commonProps);
      case ChapterId.Exercises:
        return React.createElement(ExercisesSection, { ...commonProps, onNavigate: handleNavClick });
      case ChapterId.SkillsConnect:
        return React.createElement(SkillsConnectSection, commonProps);
      case ChapterId.References:
        return React.createElement(ReferencesSection, null); 
      default:
        return React.createElement(WelcomeSection, commonProps);
    }
  };

  return (
    React.createElement('div', { className: "flex flex-col min-h-screen bg-slate-100 text-slate-800" },
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
        className: `container mx-auto p-4 sm:p-6 flex-grow ${isScrolled ? 'pt-20 sm:pt-24' : 'pt-28 sm:pt-32'} max-w-screen-xl transition-all duration-300` 
      },
        renderChapter()
      ),
      React.createElement(Footer, null)
    )
  );
};

export default App;
