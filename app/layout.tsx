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
  title: "Adesina Olagunju | Full-Stack & Mobile Developer",
  description:
    "Full-Stack and Mobile Developer experienced in Python, Django, Flask, Laravel, React, Next.js, and React Native. Building scalable, impactful digital solutions across Africa.",
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
      >
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adesina Olagunju",
              jobTitle: "Full-Stack & Mobile Developer",
              url: "https://adesinaolagunju.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/adesinaolagunju",
                "https://github.com/adesinaolagunju",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
