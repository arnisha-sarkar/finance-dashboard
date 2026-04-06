"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { DashboardProvider } from "@/context/DashboardContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";

/**
 * Configure fonts with CSS variables for global use
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * RootLayout: The main wrapper for the entire application.
 * Manages global providers, fonts, and the core dashboard structure.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global state to manage sidebar visibility on mobile devices
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full transition-colors duration-300`}
      >
        {/* Wrap with ThemeProvider to handle Dark/Light mode globally */}
        <ThemeProvider>
          {/* DashboardProvider provides financial data context across all components */}
          <DashboardProvider>
            {/* Main Application Shell */}
            <div className="flex h-screen w-full overflow-hidden text-foreground bg-background">
              {/* Global Navigation Components */}
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

              <div className="flex flex-1 flex-col min-w-0">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-background transition-colors">
                  {/* Toast notifications for user feedback */}
                  <Toaster position="top-right" reverseOrder={false} />

                  {/* Page content rendered here */}
                  {children}
                </main>
              </div>
            </div>
          </DashboardProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
