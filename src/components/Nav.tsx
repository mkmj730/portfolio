"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="font-semibold hover:text-brand" onClick={close}>MJ</Link>
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about" className="opacity-80 hover:text-brand">About</Link>
            <Link href="/work" className="opacity-80 hover:text-brand">Work</Link>
            <Link href="/experience" className="opacity-80 hover:text-brand">Experience</Link>
            <Link href="/contact" className="opacity-80 hover:text-brand">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            className="md:hidden p-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="메뉴 열기"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-[rgb(var(--background))]">
          <div className="container py-3">
            <div className="flex flex-col gap-3 text-sm">
              <Link href="/about" onClick={close} className="opacity-90">About</Link>
              <Link href="/work" onClick={close} className="opacity-90">Work</Link>
              <Link href="/experience" onClick={close} className="opacity-90">Experience</Link>
              <Link href="/contact" onClick={close} className="opacity-90">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


