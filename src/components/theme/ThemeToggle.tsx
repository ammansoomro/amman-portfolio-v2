"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:text-accent hover:border-accent/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
