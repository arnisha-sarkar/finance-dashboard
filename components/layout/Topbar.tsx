"use client";
import React from "react";
import { useDashboard } from "@/context/DashboardContext";
import { TopbarProps } from "@/types/layout";
import { Search, Bell, Menu, Calendar } from "lucide-react";

const Topbar = ({ onMenuClick }: TopbarProps) => {
  const { role, setRole } = useDashboard();

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
      {/* বাম পাশ: ওয়েলকাম এবং তারিখ */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu size={24} className="text-gray-600" />
        </button>

        <div className="hidden md:flex flex-col">
          <h1 className="text-sm font-bold text-gray-900 leading-tight">
            Welcome back, Arnisha!
          </h1>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Calendar size={12} />
            <span className="text-[11px] font-medium">{today}</span>
          </div>
        </div>
      </div>

      {/* ডান পাশ: সব এলিমেন্ট */}
      <div className="flex items-center gap-2 md:gap-5">
        <button className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
          <Search size={20} />
        </button>

        <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200 scale-90 md:scale-100">
          <button
            onClick={() => setRole("Admin")}
            className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
              role === "Admin"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-500"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole("Viewer")}
            className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${
              role === "Viewer"
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-500"
            }`}
          >
            Viewer
          </button>
        </div>

        <button className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-full transition-all hidden sm:block">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
          <div className="hidden text-right md:block">
            <p className="text-xs font-bold text-gray-900 leading-none">
              Arnisha Sarkar
            </p>
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
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
