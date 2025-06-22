import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'canary', setTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('canary');

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  // Apply theme class and persist preference
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-canary', 'theme-white', 'theme-light');
      document.documentElement.classList.add(`theme-${theme}`);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
