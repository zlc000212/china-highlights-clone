import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from './ClientBody';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>China Highlights Clone</title>
        <meta name="description" content="A pixel-perfect clone of the China Highlights travel website, showcasing modern web development practices and responsive design." />
        <meta name="verify-yeahpromos" content="e9da7b7fdfd4" />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
