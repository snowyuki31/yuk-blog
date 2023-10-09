import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HOME",
  description: "yuk's home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} px-16 py-24`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
