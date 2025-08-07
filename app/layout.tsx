import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onset = Onest({
  variable: "--font-onset",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odyss",
  description: "Your personalized travel partner with a touch of magic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onset.variable} antialiased`}>{children}</body>
    </html>
  );
}
