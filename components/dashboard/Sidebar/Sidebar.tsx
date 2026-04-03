// // "use client";

// // import { SidebarProps } from "@/types/layout";

// // const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
// //   const menuItems = ["Dashboard", "Transactions", "Insights", "Settings"];

// //   return (
// //     <>
// //       {/* ১. Mobile Overlay: ব্যাকগ্রাউন্ড ব্লার করার জন্য */}
// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
// //           onClick={() => setIsOpen(false)}
// //         />
// //       )}

// //       {/* ২. Sidebar Component */}
// //       <aside
// //         className={`
// //           fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border-custom flex flex-col h-screen overflow-y-auto transition-transform duration-300 ease-in-out
// //           lg:static lg:translate-x-0
// //           ${isOpen ? "translate-x-0" : "-translate-x-full"}
// //         `}
// //       >
// //         {/* Logo Section - Primary Color logic */}
// //         <div className="p-6 border-b border-border-custom flex items-center justify-between">
// //           <h1 className="text-xl font-bold text-primary tracking-tight">
// //             Finance Dash
// //           </h1>
// //           {/* Mobile Close Button */}
// //           <button
// //             onClick={() => setIsOpen(false)}
// //             className="lg:hidden p-2 text-slate-400 hover:text-danger transition-colors"
// //           >
// //             ✕
// //           </button>
// //         </div>

// //         {/* Navigation Links */}
// //         <nav className="flex-1 p-4 space-y-1">
// //           {menuItems.map((item, index) => (
// //             <button
// //               key={item}
// //               className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group ${
// //                 index === 0
// //                   ? "bg-primary text-white font-semibold shadow-md" // Active: Global Primary Color
// //                   : "text-slate-500 hover:bg-background hover:text-primary" // Inactive: Hover e Global Background (Slate 50)
// //               }`}
// //             >
// //               {item}
// //             </button>
// //           ))}
// //         </nav>

// //         {/* User Profile Section - Foreground (Dark Slate) color use korchi */}
// //         <div className="p-4 border-t border-border-custom">
// //           <div className="bg-foreground rounded-xl p-4 text-white shadow-lg shadow-foreground/10">
// //             <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
// //               Logged in as
// //             </p>
// //             <p className="text-sm font-semibold">Arnisha Sarkar</p>
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // };

// // export default Sidebar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "@/types/layout";
import { useDashboard } from "@/context/DashboardContext"; // ১. নতুন কন্টেক্সট ইম্পোর্ট

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const pathname = usePathname();
  const { role } = useDashboard(); // ২. এখান থেকে রোল ডাটা আসবে

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Transactions", path: "/transactions" },
    { name: "Insights", path: "/insights" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* ১. Mobile Overlay */}
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
        {/* Logo Section */}
        <div className="p-6 border-b border-border-custom flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary tracking-tight italic uppercase">
            Finance Dash
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 text-slate-400 hover:text-danger transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-primary text-white font-semibold shadow-md shadow-primary/20 scale-[1.02]"
                    : "text-slate-500 hover:bg-background hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-border-custom">
          <div className="bg-foreground rounded-xl p-4 text-white shadow-lg shadow-foreground/10">
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              Logged in as
            </p>
            <p className="text-sm font-semibold truncate">Arnisha Sarkar</p>

            {/* ৩. রোলটি এখানে ডাইনামিকভাবে দেখাবে */}
            <div className="mt-2 inline-block px-2 py-0.5 bg-white/10 rounded text-[10px] font-bold border border-white/20">
              {role}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
