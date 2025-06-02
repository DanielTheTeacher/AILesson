

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Header } from './components/layout/Header.js';
import { Footer } from './components/layout/Footer.js';
import { RightSidebarNav } from './components/layout/RightSidebarNav.js'; // Filename remains, behavior changes
import { ExploreAISection, EXPLORE_AI_SUB_CHAPTERS } from './components/chapters/ExploreAISection.js';
import { AIHelperSection, AI_HELPER_SUB_CHAPTERS } from './components/chapters/AIHelperSection.js';
import { AIFutureSection, AI_FUTURE_SUB_CHAPTERS } from './components/chapters/AIFutureSection.js';
import { ExercisesSkillsSection, EXERCISES_SKILLS_SUB_CHAPTERS } from './components/chapters/ExercisesSkillsSection.js';
import { RealDangersSection, REAL_DANGERS_SUB_CHAPTERS } from './components/chapters/RealDangersSection.js';
import { DisclaimerSection, DISCLAIMER_SUB_CHAPTERS } from './components/chapters/DisclaimerSection.js';
import { ChapterId, Vocation } from './types.js';
import { NAV_ITEMS } from './constants.js';

const CHAPTER_SUB_SECTIONS = {
  [ChapterId.ExploreAI]: EXPLORE_AI_SUB_CHAPTERS,
  [ChapterId.AIHelper]: AI_HELPER_SUB_CHAPTERS,
  [ChapterId.RealDangers]: REAL_DANGERS_SUB_CHAPTERS, // Combined from CriticalThinking & AISociety
  [ChapterId.AIFuture]: AI_FUTURE_SUB_CHAPTERS,
  [ChapterId.ExercisesSkills]: EXERCISES_SKILLS_SUB_CHAPTERS,
  [ChapterId.Disclaimer]: DISCLAIMER_SUB_CHAPTERS,
};

const App = () => {
  const [activeChapterId, setActiveChapterId] = useState(ChapterId.ExploreAI);
  const [selectedVocation, setSelectedVocation] = useState(Vocation.Elektro);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollToElementId, setScrollToElementId] = useState(null);

  const [currentSubChapters, setCurrentSubChapters] = useState([]);
  const [activeSubChapterId, setActiveSubChapterId] = useState(null);

  const mainContentRef = useRef(null);
  const observerRef = useRef(null);
  const subChapterRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentSubChapters(CHAPTER_SUB_SECTIONS[activeChapterId] || []);
    setActiveSubChapterId(null); // Reset active sub-chapter when main chapter changes
    // Initialize refs for new subchapters
    subChapterRefs.current = {}; 
    (CHAPTER_SUB_SECTIONS[activeChapterId] || []).forEach(sub => {
      subChapterRefs.current[sub.id] = React.createRef();
    });
  }, [activeChapterId]);

  const handleNavClick = (id, elementId) => {
    setActiveChapterId(id);
    if (elementId) {
      setScrollToElementId(elementId);
    } else {
      if (mainContentRef.current) {
         mainContentRef.current.scrollTop = 0;
      }
      window.scrollTo(0, 0);
      setScrollToElementId(null);
      setActiveSubChapterId(null); // Reset on main nav click without specific element
    }
  };

  const handleSubNavClick = (subChapterId) => {
    setActiveSubChapterId(subChapterId); // Optimistically set active state
    setScrollToElementId(subChapterId);
  };
  
  useEffect(() => {
    if (scrollToElementId) {
      Promise.resolve().then(() => { // Ensure DOM is updated
        const element = document.getElementById(scrollToElementId);
        if (element) {
          const headerOffset = isScrolled ? 80 : 130; // Adjusted for potentially taller sticky header when not scrolled
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
  }, [scrollToElementId, isScrolled]);


  // IntersectionObserver for active sub-chapter
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
           // setActiveSubChapterId(entry.target.id); // Simplified, direct assignment here caused jumps
        }
      });
        
      let bestCandidate = null;
      let smallestTop = Infinity;

      entries.forEach(entry => {
        const rect = entry.boundingClientRect;
        // Prioritize elements that are fully visible or at the very top of the viewport below the header
        if (entry.isIntersecting) {
           if (rect.top < smallestTop && rect.top >=0) { // Element is visible and starts at/below viewport top
            smallestTop = rect.top;
            bestCandidate = entry.target.id;
           } else if (!bestCandidate && rect.top < window.innerHeight && rect.bottom > 0) {
             // Fallback for elements that are partially visible if no better candidate found
             bestCandidate = entry.target.id;
           }
        }
      });
      if (bestCandidate) {
        setActiveSubChapterId(bestCandidate);
      }

    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null, // viewport
      rootMargin: '-80px 0px -50% 0px', // Adjust top margin for sticky header, bottom to prefer top items
      threshold: 0.01 // Small visibility needed
    });

    const targets = mainContentRef.current ? mainContentRef.current.querySelectorAll('[data-subchapter-target="true"]') : [];
    targets.forEach(target => {
      if (target.id) { 
        observerRef.current.observe(target);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentSubChapters, activeChapterId]); // Rerun when subchapters change (new page content)


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
      case ChapterId.ExercisesSkills: 
        return React.createElement(ExercisesSkillsSection, { ...commonProps, onNavigate: handleNavClick });
      case ChapterId.Disclaimer:
        return React.createElement(DisclaimerSection, { onNavigate: handleNavClick });
      default:
        return React.createElement(ExploreAISection, commonProps);
    }
  };
  
  // Sidebar width (w-60 = 15rem = 240px). Padding for main content: sidebar width (no gap) = 15rem
  const mainContentPaddingLeft = currentSubChapters.length > 0 ? 'lg:pl-[15rem]' : '';

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
      React.createElement('div', { className: "container mx-auto flex-grow max-w-[1000px] sm:max-w-[1200px] lg:max-w-[1040px]" }, // Adjusted lg:max-w
        React.createElement('main', {
          ref: mainContentRef,
          className: `p-4 sm:p-6 lg:pr-0 pt-0 transition-all duration-300 ${mainContentPaddingLeft}` // Added lg:pr-0
        },
          React.createElement('div', { className: "max-w-[800px] mx-auto" },
            renderChapter()
          )
        ),
        currentSubChapters.length > 0 && React.createElement(RightSidebarNav, { // Name remains RightSidebarNav
          subChapters: currentSubChapters,
          activeSubChapterId: activeSubChapterId,
          onSubNavClick: handleSubNavClick,
          headerHeight: isScrolled ? 70 : 120 
        })
      ),
      React.createElement(Footer, { onNavigateToDisclaimer: () => handleNavClick(ChapterId.Disclaimer) })
    )
  );
};

export default App;