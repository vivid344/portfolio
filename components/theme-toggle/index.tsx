"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

const themeLabels = {
  light: "ライトモード（クリックでダークモードに切り替え）",
  dark: "ダークモード（クリックでシステム設定に切り替え）",
  system:
    "システム設定（クリックでライトモードに切り替え）",
} as const;

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
      aria-label={themeLabels[theme]}
      title={themeLabels[theme]}
      className="size-8 md:size-10"
    >
      {theme === "light" && (
        <Sun
          className="size-4 md:size-5"
          aria-hidden="true"
        />
      )}
      {theme === "dark" && (
        <Moon
          className="size-4 md:size-5"
          aria-hidden="true"
        />
      )}
      {theme === "system" && (
        <Monitor
          className="size-4 md:size-5"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">現在のテーマ: {theme}</span>
    </Button>
  );
};
