// "use client";

// import { useState } from "react";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
// import Topbar from "@/components/layout/Topbar";
// import { Toaster } from "react-hot-toast";
// import { DashboardProvider } from "@/context/DashboardContext";
// import { ThemeProvider } from "@/context/ThemeContext"; // ১. ThemeProvider ইমপোর্ট করুন

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
//         className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background transition-colors duration-300`}
//       >
//         {/* ৩. এরপর DashboardProvider থাকবে */}
//         <DashboardProvider>
//           <div className="flex h-screen w-full overflow-hidden text-black dark:text-white">
//             <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

//             <div className="flex flex-1 flex-col min-w-0">
//               <Topbar onMenuClick={() => setSidebarOpen(true)} />

//               {/* Main Content Area */}
//               <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-gray-50 dark:bg-slate-950 transition-colors">
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
import { ThemeProvider } from "@/context/ThemeContext"; // ইমপোর্ট করা আছে

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full transition-colors duration-300`}
      >
        {/* ১. সবার বাইরে ThemeProvider দিন */}
        <ThemeProvider>
          {/* ২. এরপর DashboardProvider */}
          <DashboardProvider>
            {/* ৩. টেক্সট কালার ডাইনামিক করতে 'text-foreground' ব্যবহার করা ভালো */}
            <div className="flex h-screen w-full overflow-hidden text-foreground bg-background">
              <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />

              <div className="flex flex-1 flex-col min-w-0">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-background transition-colors">
                  <Toaster position="top-right" reverseOrder={false} />
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
