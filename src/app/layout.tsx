import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "김명재 | Frontend Developer",
    template: "%s | 김명재",
  },
  description:
    "문제를 정의하고 본질을 해결하는 FE 개발자 | Next.js, TypeScript, Zustand, Capacitor",
  keywords: [
    "김명재",
    "포트폴리오",
    "프론트엔드",
    "Frontend",
    "Next.js",
    "TypeScript",
    "Zustand",
    "Capacitor",
    "React",
    "웹 개발",
  ],
  applicationName: "MJ Portfolio",
  authors: [{ name: "김명재" }],
  creator: "김명재",
  publisher: "김명재",
  metadataBase: new URL("https://portfolio-flame-ten-38.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#0064FF",
  openGraph: {
    title: "김명재 | Frontend Developer",
    description:
      "문제를 정의하고 본질을 해결하는 FE 개발자",
    type: "website",
    url: "https://portfolio-flame-ten-38.vercel.app",
    siteName: "MJ Portfolio",
    locale: "ko_KR",
    images: [
      {
        url: "/og-image.png", // public/og-image.png 로 대체하세요
        width: 1200,
        height: 630,
        alt: "김명재 포트폴리오 썸네일",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "김명재 | Frontend Developer",
    description: "문제를 정의하고 본질을 해결하는 FE 개발자",
    creator: "@your_twitter_id",
    images: [
      {
        url: "/og-image.png", // public/og-image.png 로 대체하세요
        width: 1200,
        height: 630,
        alt: "김명재 포트폴리오 썸네일",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Nav />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}
