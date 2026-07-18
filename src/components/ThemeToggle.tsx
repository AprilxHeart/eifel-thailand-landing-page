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
      <button className="header-control rounded-2xl p-2.5">
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="header-control rounded-2xl p-2.5 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiOutlineSun className="h-5 w-5 text-[var(--signal)]" />
      ) : (
        <HiOutlineMoon className="h-5 w-5" />
      )}
    </button>
  );
};
