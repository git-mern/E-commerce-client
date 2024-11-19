import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

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

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-commerce",
  description: "A store for your products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
