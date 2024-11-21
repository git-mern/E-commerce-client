import type { Metadata } from "next";

import "./globals.css";

import { Urbanist } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal.-provider";
import ToastProvider from "@/providers/toast-provider";

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
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
