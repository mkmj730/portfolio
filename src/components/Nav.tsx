"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { FiHome, FiUser, FiBriefcase, FiClock, FiMessageCircle } from "react-icons/fi";
export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* 데스크톱 상단 네비게이션 */}
      <header className="hidden md:block sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
        <nav className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-6 text-sm">
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
          </div>
        </nav>
      </header>

      {/* 모바일 하단 탭바 (토스 스타일) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-black/5 dark:border-white/10 bg-[rgb(var(--background))]/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto max-w-screen-sm">
          <ul className="flex items-center justify-around h-16 px-1">
            <li className="flex-1">
              <Link href="/" className="flex flex-col items-center justify-center gap-0.5 py-2">
                <FiHome className={`w-6 h-6 ${isActive("/") ? "text-brand" : "opacity-70"}`} aria-hidden="true" />
                <span className={`text-[11px] ${isActive("/") ? "text-brand font-medium" : "opacity-75"}`}>Home</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="/about" className="flex flex-col items-center justify-center gap-0.5 py-2">
                <FiUser className={`w-6 h-6 ${isActive("/about") ? "text-brand" : "opacity-70"}`} aria-hidden="true" />
                <span className={`text-[11px] ${isActive("/about") ? "text-brand font-medium" : "opacity-75"}`}>About</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="/work" className="flex flex-col items-center justify-center gap-0.5 py-2">
                <FiBriefcase className={`w-6 h-6 ${isActive("/work") ? "text-brand" : "opacity-70"}`} aria-hidden="true" />
                <span className={`text-[11px] ${isActive("/work") ? "text-brand font-medium" : "opacity-75"}`}>Work</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="/experience" className="flex flex-col items-center justify-center gap-0.5 py-2">
                <FiClock className={`w-6 h-6 ${isActive("/experience") ? "text-brand" : "opacity-70"}`} aria-hidden="true" />
                <span className={`text-[11px] ${isActive("/experience") ? "text-brand font-medium" : "opacity-75"}`}>Experience</span>
              </Link>
            </li>
            <li className="flex-1">
              <Link href="/contact" className="flex flex-col items-center justify-center gap-0.5 py-2">
                <FiMessageCircle className={`w-6 h-6 ${isActive("/contact") ? "text-brand" : "opacity-70"}`} aria-hidden="true" />
                <span className={`text-[11px] ${isActive("/contact") ? "text-brand font-medium" : "opacity-75"}`}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* iOS 안전 영역 하단 여백 */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </nav>
    </>
  );
}


