// "use client";

// import { useState } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
// import Topbar from "@/components/layout/Topbar";
// import { Toaster } from "react-hot-toast";
// import { DashboardProvider } from "@/context/DashboardContext"; // শুধু এটিই লাগবে

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <html lang="en" className="h-full">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background`}
//       >
//         {/* ১. DashboardProvider-কে সবার উপরে দিন যাতে Sidebar এবং Topbar এর ডাটা পায় */}
//         <DashboardProvider>
//           <div className="flex h-screen w-full overflow-hidden">
//             {/* এখন Sidebar এর ভেতর useDashboard() কাজ করবে */}
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

//             <div className="flex flex-1 flex-col min-w-0">
//               {/* এখন Topbar এর ভেতর useDashboard() কাজ করবে */}
//               <Topbar onMenuClick={() => setSidebarOpen(true)} />

//               {/* মেইন কন্টেন্ট এরিয়া */}
//               <main className="flex-1 overflow-y-auto p-4 lg:p-8">
//                 <Toaster position="top-right" reverseOrder={false} />
//                 {children}
//               </main>
//             </div>
//           </div>
//         </DashboardProvider>
//       </body>
//     </html>
//   );
// }

"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Toaster } from "react-hot-toast";
import { DashboardProvider } from "@/context/DashboardContext";

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
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background`}
      >
        {/* 1. Wrap with DashboardProvider so Sidebar and Topbar can access data */}
        <DashboardProvider>
          <div className="flex h-screen w-full overflow-hidden text-black">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="flex flex-1 flex-col min-w-0">
              <Topbar onMenuClick={() => setSidebarOpen(true)} />

              {/* Main Content Area */}
              <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                <Toaster position="top-right" reverseOrder={false} />
                {children}
              </main>
            </div>
          </div>
        </DashboardProvider>
      </body>
    </html>
  );
}
