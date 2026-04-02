"use client"; // ইন্টারঅ্যাক্টিভিটির জন্য এটি লাগবেই

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ১. সাইডবার ওপেন/ক্লোজ করার জন্য স্টেট
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background`}
      >
        <div className="flex h-screen w-full overflow-hidden">
          {/* ২. Sidebar-এ স্টেট পাস করছি */}
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

          <div className="flex flex-1 flex-col min-w-0">
            {/* ৩. Topbar-এ মেনু ওপেন করার ফাংশন পাস করছি */}
            <Topbar onMenuClick={() => setSidebarOpen(true)} />

            {/* মেইন কন্টেন্ট এরিয়া */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
