'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/locales';

export const LanguageToggle = () => {
  const { language, setLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <button className="bg-white/10 px-3 py-2 text-white">
        <div className="w-6 h-4" />
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
      className="bg-white/10 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/18"
      aria-label="Toggle language"
    >
      {language === 'th' ? 'EN' : 'ไทย'}
    </button>
  );
};
