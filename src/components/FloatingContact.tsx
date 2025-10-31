"use client";

import { useState, useMemo } from "react";
import { FiMessageCircle, FiMail, FiGithub, FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const bottomOffset = useMemo(() => {
    // 모바일 탭바 높이(64px) + 안전영역 보정
    return `calc(64px + max(env(safe-area-inset-bottom), 16px))`;
  }, []);

  return (
    <div className="fixed right-4 z-[70]" style={{ bottom: bottomOffset }}>
      <div className="relative">
        {open && (
          <div className="absolute bottom-full right-0 mb-3 w-48 rounded-xl border border-black/10 dark:border-white/15 bg-[rgb(var(--background))] shadow-xl overflow-hidden">
            <ul className="py-1">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <FiMail className="w-4 h-4 opacity-80" />
                  <span>이메일</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <FiGithub className="w-4 h-4 opacity-80" />
                  <span>깃허브</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume_standard.pdf"
                  download
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                >
                  <FiDownload className="w-4 h-4 opacity-80" />
                  <span>이력서 다운로드</span>
                </a>
              </li>
            </ul>
          </div>
        )}

        <button
          type="button"
          aria-label="연락하기"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/50"
        >
          <FiMessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}


