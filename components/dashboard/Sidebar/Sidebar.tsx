"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "@/types/layout";
import { useDashboard } from "@/context/DashboardContext";
import {
  LayoutDashboard,
  ArrowRightLeft,
  Settings,
  X,
  LogOut,
  PieChart,
  CreditCard,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { role } = useDashboard();

  // আপনার রিকোয়ারমেন্ট অনুযায়ী ৫টি মেনু আইটেম
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Transactions", path: "/transactions", icon: ArrowRightLeft },
    { name: "Accounts", path: "/accounts", icon: CreditCard },
    { name: "Budgets", path: "/budgets", icon: PieChart },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <>
      {/* ১. Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ২. Sidebar Component */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 flex flex-col h-screen transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo Section */}
        <div className="p-8 flex items-center justify-between">
          <h1 className="text-xl font-black text-blue-600 tracking-tighter italic uppercase flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white not-italic">
              F
            </div>
            Finance Dash
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 space-y-1.5">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-200 scale-[1.02]"
                    : "text-gray-500 hover:bg-blue-50 hover:text-blue-600 font-medium"
                }`}
              >
                <Icon
                  size={18}
                  className={
                    isActive ? "text-white" : "group-hover:text-blue-600"
                  }
                />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 mt-auto">
          <div className="bg-[#0f172a] rounded-[24px] p-6 text-white relative overflow-hidden group shadow-2xl">
            {/* Decoration Glow */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black mb-1">
                Logged in as
              </p>
              <h3 className="text-sm font-bold truncate mb-3">
                Arnisha Sarkar
              </h3>

              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold border border-white/10 backdrop-blur-md">
                  {role}
                </span>

                <button className="p-2 bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-all text-slate-400">
                  <LogOut size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
