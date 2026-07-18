'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="bg-white/10 p-2 text-white">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="bg-white/10 p-2 text-white transition-colors hover:bg-white/18"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-white" />
      )}
    </button>
  );
};
