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
  title: "김명재 | Frontend Developer",
  description:
    "문제를 정의하고 기술로 해결하는 FE 개발자 | Next.js, TypeScript, Zustand, Capacitor",
  metadataBase: new URL("https://your-portfolio-domain.vercel.app"),
  openGraph: {
    title: "김명재 | Frontend Developer",
    description:
      "기획→기술→도메인→고객 성장 스토리로 구성한 포트폴리오",
    type: "website",
    url: "https://your-portfolio-domain.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "김명재 | Frontend Developer",
    description: "문제를 정의하고 기술로 해결하는 FE 개발자",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}
