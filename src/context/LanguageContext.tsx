import React, { createContext, useContext, useState, useEffect } from 'react';
import { data, TranslationData } from '../data';

export type Language = 'es' | 'ca';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (path: string) => string;
  copy: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const supportedLanguages: Language[] = ['es', 'ca'];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const cached = localStorage.getItem('preferred-language');
    if (cached && supportedLanguages.includes(cached as Language)) {
      return cached as Language;
    }
    const browserLang = navigator.language.slice(0, 2).toLowerCase() as Language;
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  // Traverses nested object paths (e.g., "nav.home", "hero.title")
  const t = (path: string): string => {
    const keys = path.split('.');
    
    // Attempt local language resolution
    let current: any = data[language];
    let found = true;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        found = false;
        break;
      }
    }
    
    if (found && typeof current === 'string') {
      return current;
    }

    // Fallback to Spanish (es)
    let fallbackCurrent: any = data['es'];
    for (const key of keys) {
      if (fallbackCurrent && fallbackCurrent[key] !== undefined) {
        fallbackCurrent = fallbackCurrent[key];
      } else {
        return path; // Return raw key path if everything fails
      }
    }
    return typeof fallbackCurrent === 'string' ? fallbackCurrent : path;
  };

  const copy = data[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, copy }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
