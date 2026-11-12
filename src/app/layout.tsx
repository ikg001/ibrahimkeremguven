import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} · ${PERSONAL_INFO.title}`,
  description: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.tagline} ${PERSONAL_INFO.bio}`,
  keywords: [
    "İbrahim Kerem Güven",
    "Yazılım Mühendisliği Öğrencisi",
    "Fırat Üniversitesi",
    "Next.js",
    "React",
    "TypeScript",
    "Yapay Zekâ",
    "Portfolyo",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} · ${PERSONAL_INFO.title}`,
    description: PERSONAL_INFO.tagline,
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#07090E] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
