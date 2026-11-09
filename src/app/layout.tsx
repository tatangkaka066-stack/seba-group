import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEBA GROUP — AI & Digital Solutions",
  description:
    "SEBA GROUP adalah agensi AI & digital solutions yang membantu bisnis Anda bertransformasi dengan teknologi terkini: agentic AI, automation, web development, dan digital strategy.",
  keywords: [
    "SEBA GROUP",
    "AI agency",
    "agentic AI",
    "digital solutions",
    "web development",
    "automation",
    "Indonesia",
  ],
  openGraph: {
    title: "SEBA GROUP — AI & Digital Solutions",
    description:
      "Transformasi bisnis Anda dengan agentic AI, automation, dan web development.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
