import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onset = Onest({
  variable: "--font-onset",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odyss.ng"),
  title: "Odyss - Your personalized travel partner",
  description: "Your personalized travel partner with a touch of magic.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.odyss.ng/",
    title: "Odyss - Your personalized travel partner",
    description: "Your personalized travel partner with a touch of magic.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Odyss - Your personalized travel partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@travelodyss",
    title: "Odyss - Your personalized travel partner",
    description: "Your personalized travel partner with a touch of magic.",
    images: ["/og-image.jpg"],
  },
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
