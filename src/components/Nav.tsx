import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="font-semibold">MJ</Link>
          <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
          <Link href="/work" className="opacity-80 hover:opacity-100">Work</Link>
          <Link href="/experience" className="opacity-80 hover:opacity-100">Experience</Link>
          <Link href="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}


