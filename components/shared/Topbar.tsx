// "use client";
// import React from "react";
// import { useDashboard } from "@/context/DashboardContext";
// import { TopbarProps } from "@/types/layout";
// import { Search, Bell, Menu, Calendar } from "lucide-react";

// const Topbar = ({ onMenuClick }: TopbarProps) => {
//   const { role, setRole } = useDashboard();

//   const today = new Date().toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });

//   return (
//     <header className="h-20 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
//       {/* বাম পাশ: ওয়েলকাম এবং তারিখ */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={onMenuClick}
//           className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
//         >
//           <Menu size={24} className="text-gray-600" />
//         </button>

//         <div className="hidden md:flex flex-col">
//           <h1 className="text-sm font-bold text-gray-900 leading-tight">
//             Welcome back, Arnisha!
//           </h1>
//           <div className="flex items-center gap-1.5 text-gray-400">
//             <Calendar size={12} />
//             <span className="text-[11px] font-medium">{today}</span>
//           </div>
//         </div>
//       </div>

//       {/* ডান পাশ: সব এলিমেন্ট */}
//       <div className="flex items-center gap-2 md:gap-5">
//         <button className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
//           <Search size={20} />
//         </button>

//         <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 scale-90 md:scale-100">
//           <button
//             onClick={() => setRole("Admin")}
//             className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
//               role === "Admin"
//                 ? "bg-white text-blue-600 shadow-sm"
//                 : "text-gray-500"
//             }`}
//           >
//             Admin
//           </button>
//           <button
//             onClick={() => setRole("Viewer")}
//             className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
//               role === "Viewer"
//                 ? "bg-blue-600 text-white shadow-md"
//                 : "text-gray-500"
//             }`}
//           >
//             Viewer
//           </button>
//         </div>

//         <button className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-all hidden sm:block">
//           <Bell size={20} />
//           <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//         </button>

//         <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
//           <div className="hidden text-right md:block">
//             <p className="text-xs font-bold text-gray-900 leading-none">
//               Arnisha Sarkar
//             </p>
//             <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
//               {role}
//             </span>
//           </div>
//           <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg transform hover:rotate-6 transition-transform">
//             AS
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Topbar;

"use client";
import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import { useTheme } from "@/context/ThemeContext"; // ১. ThemeContext ইমপোর্ট করুন
import { TopbarProps } from "@/types/layout";
import { Search, Bell, Menu, Calendar, Moon, Sun } from "lucide-react"; // ২. Sun, Moon ইমপোর্ট করুন

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const { role, setRole } = useDashboard();
  const { isDarkMode, toggleTheme } = useTheme(); // ৩. থিম স্টেট এবং ফাংশন নিন

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-background/80 backdrop-blur-md border-b border-border-custom flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 transition-colors duration-300">
      {/* বাম পাশ: ওয়েলকাম এবং তারিখ */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
        >
          <Menu size={24} className="text-foreground" />
        </button>

        <div className="hidden md:flex flex-col">
          <h1 className="text-sm font-bold text-foreground leading-tight">
            Welcome back, Arnisha!
          </h1>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Calendar size={12} />
            <span className="text-[11px] font-medium">{today}</span>
          </div>
        </div>
      </div>

      {/* ডান পাশ: সব এলিমেন্ট */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* ৪. থিম টগল বাটন (নতুন যোগ করা হয়েছে) */}
        <button
          onClick={toggleTheme}
          className="p-2.5 text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-all active:scale-95"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>

        <button className="p-2.5 text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-all">
          <Search size={20} />
        </button>

        {/* Role Switcher */}
        <div className="flex bg-gray-100 dark:bg-slate-800 p-1 rounded-full border border-border-custom scale-90 md:scale-100 transition-colors">
          <button
            onClick={() => setRole("Admin")}
            className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
              role === "Admin"
                ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-500"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole("Viewer")}
            className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
              role === "Viewer"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-500"
            }`}
          >
            Viewer
          </button>
        </div>

        <button className="relative p-2.5 text-foreground hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-all hidden sm:block">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-border-custom">
          <div className="hidden text-right md:block">
            <p className="text-xs font-bold text-foreground leading-none">
              Arnisha Sarkar
            </p>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              {role}
            </span>
          </div>
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg transform hover:rotate-6 transition-transform">
            AS
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
