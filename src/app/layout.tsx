import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AsciiObserver from "@/components/AsciiObserver";
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
  title: "viewport",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/customui/winbox.min.css" />
        <link rel="stylesheet" href="/customui/windows-theme.css" />
        <script src="/customui/winbox.min.js" defer></script>
      </head>
      <body className={`wallpaper-classic ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AsciiObserver />
        {children}
      </body>
    </html>
  );
}
