import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-6 text-sm">
          <Link href="#home" className="font-semibold">MJ</Link>
          <Link href="#story" className="opacity-80 hover:opacity-100">스토리</Link>
          <Link href="#kanginham" className="opacity-80 hover:opacity-100">강인함</Link>
          <Link href="#alchemylab" className="opacity-80 hover:opacity-100">알케미랩</Link>
          <Link href="#skills" className="opacity-80 hover:opacity-100">역량</Link>
          <Link href="#contact" className="opacity-80 hover:opacity-100">연락</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}


