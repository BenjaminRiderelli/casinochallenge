import Navbar from "@/components/nav/navbar";
import FooterNav from "@/components/nav/footernav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Casino",
  description: "Ultimate gaming experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-dark-text-color">
      <body className="min-w-screen">
        <Navbar />
        <main className="items-center h-full mt-16 bg-dark-bg-color">{children}</main>
        <FooterNav />
      </body>
    </html>
  );
}
