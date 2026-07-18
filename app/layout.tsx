import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/satoshi/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JT Interiors",
  description:
    "The JT Interior style is defined by strong, solid forms with subtle elegance, natural balance and enduring appeal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
