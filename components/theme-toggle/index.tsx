"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label="Toggle theme"
      className="size-8 md:size-10"
    >
      {theme === "light" && (
        <Sun className="size-4 md:size-5" />
      )}
      {theme === "dark" && (
        <Moon className="size-4 md:size-5" />
      )}
      {theme === "system" && (
        <Monitor className="size-4 md:size-5" />
      )}
    </Button>
  );
};
