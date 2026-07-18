'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, translations, TranslationKeys } from '@/locales';
import { detectUserLocation, getUserLanguage, saveLanguagePreference } from '@/lib/location';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('th');
  const isLoading = false;

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // First check if user has a saved preference
        const savedLang = getUserLanguage();
        
        // If no saved preference, detect location
        if (!localStorage.getItem('preferred-language')) {
          const detectedLang = await detectUserLocation();
          setLanguageState(detectedLang as Language);
          saveLanguagePreference(detectedLang);
        } else {
          setLanguageState(savedLang as Language);
        }
      } catch (error) {
        console.warn('Failed to initialize language:', error);
        // Fallback to Thai
        setLanguageState('th');
      }
    };

    initializeLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguagePreference(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
