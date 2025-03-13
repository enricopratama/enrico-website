import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/app/components/navbar";
import { Analytics } from "@vercel/analytics/react";

// Mofify this to change global font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enrico Pratama",
  description: "Enrico Pratama's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavbarComponent />
        <Analytics />
      </body>
    </html>
  );
}
