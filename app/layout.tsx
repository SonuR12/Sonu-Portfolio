import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Sonu Rai",
  description: "A portfolio website of SonuRai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body className={`${inter.className} antialiased dark`}>
      {children}
    </body>
  </html>  
  );
}
