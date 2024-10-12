import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'slick-carousel/slick/slick.css';   // Slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css';  // Slick-carousel theme CSS
import { ReactNode } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Restaurantly",
  description: "Your favorite restaurant!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
