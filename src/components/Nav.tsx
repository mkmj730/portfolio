"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="md:hidden flex items-center gap-2 font-semibold hover:text-brand" onClick={close}>
            <div className="relative size-6 rounded-full bg-black dark:bg-white">
              <Image src="/images/face.png" alt="김명재 프로필" fill className="object-cover" sizes="24px" />
            </div>
            <span>개발자 김명재</span>
          </Link>
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={`opacity-80 hover:text-brand ${isActive("/") ? "font-semibold" : ""}`}>MJ</Link>
            <Link href="/about" className={`opacity-80 hover:text-brand ${isActive("/about") ? "font-semibold" : ""}`}>About</Link>
            <Link href="/work" className={`opacity-80 hover:text-brand ${isActive("/work") ? "font-semibold" : ""}`}>Work</Link>
            <Link href="/experience" className={`opacity-80 hover:text-brand ${isActive("/experience") ? "font-semibold" : ""}`}>Experience</Link>
            <Link href="/contact" className={`opacity-80 hover:text-brand ${isActive("/contact") ? "font-semibold" : ""}`}>Contact</Link>
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
              <Link href="/" onClick={close} className={`opacity-90 ${isActive("/") ? "font-semibold" : ""}`}>MJ</Link>
              <Link href="/about" onClick={close} className={`opacity-90 ${isActive("/about") ? "font-semibold" : ""}`}>About</Link>
              <Link href="/work" onClick={close} className={`opacity-90 ${isActive("/work") ? "font-semibold" : ""}`}>Work</Link>
              <Link href="/experience" onClick={close} className={`opacity-90 ${isActive("/experience") ? "font-semibold" : ""}`}>Experience</Link>
              <Link href="/contact" onClick={close} className={`opacity-90 ${isActive("/contact") ? "font-semibold" : ""}`}>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


