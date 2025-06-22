import { useTheme } from './ThemeContext';
import { FaRegLightbulb, FaMoon, FaSun } from 'react-icons/fa';

const themes = ['canary', 'white', 'light'];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const current = themes.indexOf(theme);
    const next = themes[(current + 1) % themes.length];
    setTheme(next);
  };

  const icon = () => {
    switch (theme) {
      case 'white':
        return <FaMoon />;
      case 'light':
        return <FaSun />;
      default:
        return <FaRegLightbulb />;
    }
  };

  return (
    <button
      onClick={cycleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded hover:bg-[var(--hover-color)] hover:text-[var(--bg-color)]"
    >
      {icon()}
    </button>
  );
}
