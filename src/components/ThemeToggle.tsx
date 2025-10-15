"use client";

import { useEffect, useState } from "react";

type ThemeToggleProps = {
  showLabel?: boolean;
  className?: string;
};

export default function ThemeToggle({ showLabel = true, className = "" }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ?? (prefersDark ? "dark" : "light");
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  const sizeClass = showLabel ? "px-3 py-1.5" : "p-2";
  const baseClass = `inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/15 ${sizeClass} text-sm hover:bg-black/5 dark:hover:bg-white/10 ${className}`;

  return (
    <button
      type="button"
      onClick={toggle}
      className={baseClass}
      aria-label={theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      <span aria-hidden>{theme === "dark" ? "🌙" : "☀️"}</span>
      {showLabel ? (theme === "dark" ? "다크" : "라이트") : null}
    </button>
  );
}


