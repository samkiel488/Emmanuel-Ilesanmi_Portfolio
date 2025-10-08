"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleToggle = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  const icon =
    theme === "system" ? (
      <Laptop size={18} />
    ) : theme === "light" ? (
      <Sun size={18} />
    ) : (
      <Moon size={18} />
    );

  // Force re-render on theme change to ensure UI updates
  useEffect(() => {
    // This empty effect triggers a re-render on theme change
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-md transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}
