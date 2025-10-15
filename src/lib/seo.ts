import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  title: "김명재 | Frontend Developer",
  description: "사용자의 불안을 기술로 해결하는 FE | Next.js, TypeScript, Zustand",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "MJ Portfolio",
  },
  twitter: { cardType: "summary_large_image" },
};


