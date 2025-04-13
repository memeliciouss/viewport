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
  title: "viewport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ marginTop: "60px",marginLeft:"20px" }}
      >
        {/* Fixed Header */}
        <div
          style={{
            position: "fixed", // Make the header fixed at the top
            top: 0, // Align at the very top
            left: 0,
            right: 0,
            height: "40px", // Height of the header
            backgroundColor: "#4B5569", // Background color of the header
            color: "#fff", // Text color inside header
            display: "flex",
            justifyContent: "flex-start", // Align content to the left
            alignItems: "center", // Center content vertically
            paddingLeft: "20px", // Add padding to the left side of the header
            paddingRight: "20px", // Add padding to the right side of the header
            zIndex: 1000, // Ensure the header is on top of everything else
          }}
          
        >
          <p style={{fontFamily:"ByteBounce",fontSize:"30px"}}>viewport/memeliciouss</p>
        </div>
        {children}
      </body>
    </html>
  );
}
