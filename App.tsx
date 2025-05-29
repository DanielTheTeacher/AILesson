
import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header.tsx';
import { Footer } from './components/layout/Footer.tsx';
import { WelcomeSection } from './components/chapters/WelcomeSection.tsx';
import { ExploreAISection } from './components/chapters/ExploreAISection.tsx';
import { CriticalThinkingSection } from './components/chapters/CriticalThinkingSection.tsx';
import { AIHelperSection } from './components/chapters/AIHelperSection.tsx';
import { AIFutureSection } from './components/chapters/AIFutureSection.tsx';
import { AISocietySection } from './components/chapters/AISocietySection.tsx';
import { ExercisesSection } from './components/chapters/ExercisesSection.tsx';
import { SkillsConnectSection } from './components/chapters/SkillsConnectSection.tsx';
import { ReferencesSection } from './components/chapters/ReferencesSection.tsx';
import { ChapterId, Vocation } from './types.ts';
import { NAV_ITEMS, VOCATION_OPTIONS } from './constants.ts';

const App: React.FC = () => {
  const [activeChapterId, setActiveChapterId] = useState<ChapterId>(ChapterId.Home);
  const [selectedVocation, setSelectedVocation] = useState<Vocation>(Vocation.Elektro);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollToElementId, setScrollToElementId] = useState<string | null>(null);
  
  const mainContentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: ChapterId, elementId?: string) => {
    setActiveChapterId(id);
    if (elementId) {
      setScrollToElementId(elementId);
    } else {
      window.scrollTo(0, 0); // Scroll to top if no specific element
      setScrollToElementId(null);
    }
  };
  
  useEffect(() => {
    if (scrollToElementId && mainContentRef.current) {
      // Wait for the new chapter to render by using a microtask (Promise.resolve())
      // or a small timeout. This helps ensure the element is in the DOM.
      Promise.resolve().then(() => {
        const element = document.getElementById(scrollToElementId);
        if (element) {
          const headerOffset = isScrolled ? 70 : 120; // Approximate header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        setScrollToElementId(null); // Reset after attempting to scroll
      });
    } else if (!scrollToElementId) {
      // Only scroll to top if not trying to scroll to a specific element
      // This condition is important to prevent overriding the element scroll.
       // window.scrollTo(0, 0); // Removed: This was causing issues with element scrolling. Element scroll is handled above.
    }
  }, [activeChapterId, scrollToElementId, isScrolled]);


  const renderChapter = () => {
    const commonProps = { selectedVocation };
    switch (activeChapterId) {
      case ChapterId.Home:
        return <WelcomeSection {...commonProps} />;
      case ChapterId.ExploreAI:
        return <ExploreAISection {...commonProps} />;
      case ChapterId.CriticalThinking:
        return <CriticalThinkingSection {...commonProps} />;
      case ChapterId.AIHelper:
        return <AIHelperSection {...commonProps} />;
      case ChapterId.AIFuture:
        return <AIFutureSection {...commonProps} />;
      case ChapterId.AISociety:
        return <AISocietySection {...commonProps} />;
      case ChapterId.Exercises:
        return <ExercisesSection {...commonProps} onNavigate={handleNavClick} />;
      case ChapterId.SkillsConnect:
        return <SkillsConnectSection {...commonProps} />;
      case ChapterId.References:
        return <ReferencesSection />; // References are generic
      default:
        return <WelcomeSection {...commonProps} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800">
      <Header
        navItems={NAV_ITEMS}
        activeChapterId={activeChapterId}
        onNavClick={handleNavClick}
        selectedVocation={selectedVocation}
        onVocationChange={setSelectedVocation}
        isScrolled={isScrolled}
      />
      {/* pt- value should be based on header height */}
      <main ref={mainContentRef} className={`container mx-auto p-4 sm:p-6 flex-grow ${isScrolled ? 'pt-20 sm:pt-24' : 'pt-28 sm:pt-32'} max-w-screen-xl transition-all duration-300`}>
        {renderChapter()}
      </main>
      <Footer />
    </div>
  );
};

export default App;