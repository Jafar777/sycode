import type { Metadata } from "next";
import { Syncopate, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "syncode — we code websites & mobile apps",
  description:
    "syncode builds fast, reliable websites and mobile apps. Web development, mobile app development, and everything in between.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink-950 font-body antialiased">{children}</body>
    </html>
  );
}
