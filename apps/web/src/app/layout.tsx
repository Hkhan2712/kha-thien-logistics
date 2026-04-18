import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
// import "../styles/index.css";
import "@kha-thien-logistics/ui/globals.css";
import "../styles/theme.css";
import Topbar from "@/components/layouts/Topbar";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import FloatingContact from "@/components/floating/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kha-thien-logistics",
  description: "kha-thien-logistics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}>
        <Topbar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        {/* <Footer /> */}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
