// "use client";

// import React, { useState } from "react";
// import Sidebar from "@/components/Sidebar";
// import SummarySection from "@/components/dashboard/SummarySection";
// import BalanceChart from "@/components/dashboard/BalanceChart";
// import ExpensePieChart from "@/components/dashboard/ExpensePieChart";

// import {
//   balanceHistory,
//   expenseByCategoryData,
//   summaryMockData,
//   transactions,
// } from "@/data/mockData";

// export default function Home() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Dashboard");

//   return (
//     <div className="flex min-h-screen bg-gray-50/50">
//       <main className="flex-1 p-4 md:p-8 overflow-x-hidden max-w-7xl mx-auto">
//         {/* Mobile Header */}
//         <div className="lg:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-2xl border border-border-custom shadow-sm">
//           <h2 className="font-bold text-primary italic">Finance Dash</h2>
//           <button
//             onClick={() => setIsOpen(true)}
//             className="p-2 bg-primary/10 rounded-xl px-4 font-bold text-primary"
//           >
//             Menu
//           </button>
//         </div>

//         {/* No Transition Container */}
//         <div>
//           {/* Dashboard Tab */}
//           {activeTab === "Dashboard" && (
//             <div className="space-y-8">
//               <h2 className="text-2xl md:text-3xl font-bold italic text-foreground">
//                 Overview
//               </h2>
//               <SummarySection data={summaryMockData} />
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 <div className="lg:col-span-2">
//                   <BalanceChart data={balanceHistory} />
//                 </div>
//                 <div className="lg:col-span-1">
//                   <ExpensePieChart data={expenseByCategoryData} />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

import SummarySection from "@/components/dashboard/SummarySection";
import BalanceChart from "@/components/dashboard/BalanceChart";
import ExpensePieChart from "@/components/dashboard/ExpensePieChart";

// ডাটা ইম্পোর্ট
import {
  balanceHistory,
  expenseByCategoryData,
  summaryMockData,
  transactions,
} from "@/data/mockData";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import TransactionTable from "./transactions/page";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard"); // ডিফল্ট ট্যাব

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto">
        {/* ২. কন্ডিশনাল রেন্ডারিং - এখানে ম্যাজিকটা হয় */}

        {/* যদি activeTab 'Dashboard' হয় তবেই এগুলো দেখাবে */}
        {activeTab === "Dashboard" && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold italic">Overview</h2>
            <SummarySection data={summaryMockData} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <BalanceChart data={balanceHistory} />
              </div>
              <div className="lg:col-span-1">
                <ExpensePieChart data={expenseByCategoryData} />
              </div>
            </div>
          </div>
        )}

        {/* যদি activeTab 'Transactions' হয় তবে শুধু টেবিল দেখাবে */}
        {activeTab === "Transactions" && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold italic">All Transactions</h2>
            {/* ডাটা শুধুমাত্র এখানেই পাস করা হয়েছে */}
            <TransactionTable data={transactions} />
          </div>
        )}
      </main>
    </div>
  );
}
