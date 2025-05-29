
import React from 'react';
import { ChapterId, NavItem, Vocation, HeaderProps } from '../../types.ts';
import { VOCATION_OPTIONS } from '../../constants.ts';

export const Header: React.FC<HeaderProps> = ({ 
  navItems, 
  activeChapterId, 
  onNavClick,
  selectedVocation,
  onVocationChange,
  isScrolled
}) => {
  return (
    <header className={`bg-sky-700 text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center max-w-screen-xl">
        <div className="mb-3 sm:mb-0">
          <label htmlFor="vocation-select" className="sr-only">Select Vocation</label>
          <select 
            id="vocation-select"
            value={selectedVocation}
            onChange={(e) => onVocationChange(e.target.value as Vocation)}
            className={`bg-sky-600 text-white border border-sky-500 rounded-md shadow-sm focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-sm ${isScrolled ? 'p-1.5 text-xs' : 'p-2 text-sm'} transition-all duration-300`}
            aria-label="Select your vocational field"
          >
            {VOCATION_OPTIONS.map(vocation => (
              <option key={vocation} value={vocation}>
                {vocation}
              </option>
            ))}
          </select>
        </div>
        <nav>
          <ul className={`flex flex-wrap justify-center space-x-1 sm:space-x-1.5 transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm sm:text-base'}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavClick(item.id)}
                  className={`px-2 py-1 rounded-md transition-colors duration-200 ease-in-out
                    ${activeChapterId === item.id
                      ? 'bg-sky-500 text-white font-semibold shadow-sm'
                      : 'hover:bg-sky-600 hover:text-white'
                    }
                    ${isScrolled ? 'sm:px-2 sm:py-1' : 'sm:px-3 sm:py-1.5'}
                  `}
                  aria-current={activeChapterId === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};