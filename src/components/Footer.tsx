import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brand">GitHub</a>
          <a href={`mailto:${profile.email}`} className="hover:text-brand">Email</a>
          <a href={profile.resume} className="hover:text-brand">Resume</a>
        </div>
      </div>
    </footer>
  );
}


