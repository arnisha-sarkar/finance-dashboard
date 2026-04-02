"use client";

import React, { useState } from "react";

// Sidebar open korar jonno amra eikhane 'onMenuClick' prop nibo
interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const [role, setRole] = useState<"Admin" | "Viewer">("Admin");

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-border-custom flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Sudhu mobile e dekhabe (lg:hidden) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-600 hover:bg-background rounded-xl transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Page Title */}
        <h2 className="font-bold text-foreground tracking-tight text-sm md:text-base">
          Overview
        </h2>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <span className="hidden sm:block text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Role Mode:
        </span>

        {/* Role Switcher Toggle */}
        <div className="bg-background p-1 rounded-full flex items-center shadow-inner border border-border-custom scale-90 md:scale-100">
          <button
            onClick={() => setRole("Admin")}
            className={`px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full transition-all duration-300 ${
              role === "Admin"
                ? "bg-primary text-white shadow-md"
                : "text-slate-500 hover:text-primary"
            }`}
          >
            Admin
          </button>

          <button
            onClick={() => setRole("Viewer")}
            className={`px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-bold rounded-full transition-all duration-300 ${
              role === "Viewer"
                ? "bg-primary text-white shadow-md"
                : "text-slate-500 hover:text-primary"
            }`}
          >
            Viewer
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
