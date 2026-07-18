'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales';

export const LanguageToggle = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <button className="header-control rounded-2xl px-3 py-2 text-sm font-semibold">
        <div className="h-4 w-6" />
      </button>
    );
  }

  const toggleLanguage = () => {
    const newLang: Language = language === 'th' ? 'en' : 'th';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="header-control rounded-2xl px-3 py-2 text-sm font-semibold transition-colors"
      aria-label="Toggle language"
    >
      {language === 'th' ? 'EN' : 'TH'}
    </button>
  );
};
