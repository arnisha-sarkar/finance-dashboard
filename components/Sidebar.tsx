"use client";

import React from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const menuItems = ["Dashboard", "Transactions", "Insights", "Settings"];

  return (
    <>
      {/* ১. Mobile Overlay: ব্যাকগ্রাউন্ড ব্লার করার জন্য */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ২. Sidebar Component */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border-custom flex flex-col h-screen overflow-y-auto transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo Section - Primary Color logic */}
        <div className="p-6 border-b border-border-custom flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary tracking-tight">
            Finance Dash
          </h1>
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-slate-400 hover:text-danger transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={item}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group ${
                index === 0
                  ? "bg-primary text-white font-semibold shadow-md" // Active: Global Primary Color
                  : "text-slate-500 hover:bg-background hover:text-primary" // Inactive: Hover e Global Background (Slate 50)
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* User Profile Section - Foreground (Dark Slate) color use korchi */}
        <div className="p-4 border-t border-border-custom">
          <div className="bg-foreground rounded-xl p-4 text-white shadow-lg shadow-foreground/10">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Logged in as
            </p>
            <p className="text-sm font-semibold">Arnisha Sarkar</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
