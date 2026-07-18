// Location detection utility
export const detectUserLocation = async (): Promise<string> => {
  try {
    return 'th';
  } catch (error) {
    console.warn('Failed to detect location:', error);
    return 'th';
  }
};

// Get user's preferred language from various sources
export const getUserLanguage = (): string => {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return 'th'; // Default for SSR
  }
  
  // Check localStorage first
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang) {
    return savedLang;
  }
  
  // Check browser language
  return 'th';
};

// Save user's language preference
export const saveLanguagePreference = (language: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', language);
  }
};
