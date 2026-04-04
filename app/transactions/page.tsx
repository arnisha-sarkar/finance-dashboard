"use client";

import React, { useState, useEffect } from "react";
import TransactionTable from "@/components/dashboard/TransactionTable";
import { useDashboard } from "@/context/DashboardContext";
import { PlusCircle } from "lucide-react";
import AddTransactionModal from "@/components/dashboard/AddTransactionModal"; // ইম্পোর্ট করুন

// ডাটা এবং স্কেলিটন ইম্পোর্ট
import { transactions as mockData } from "@/data/mockData";
import { SkeletonTable } from "@/components/dashboard/SkeletonCard";

const TransactionPage = () => {
  const {
    role,
    transactions: contextTransactions,
    addTransaction,
  } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // ডাটা ডিসপ্লে লজিক
  const displayData =
    contextTransactions && contextTransactions.length > 0
      ? contextTransactions
      : mockData;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 relative animate-in fade-in duration-500">
      {/* হেডার সেকশন */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 italic tracking-tight uppercase">
            Transaction History
          </h1>
          <p className="text-sm text-gray-500">
            Monitor and manage all your recent financial activities.
          </p>
        </div>

        {role === "Admin" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-2xl font-bold shadow-lg hover:bg-gray-800 transition-all active:scale-95 text-sm"
          >
            <PlusCircle size={18} />
            <span>Add Transaction</span>
          </button>
        )}
      </div>

      {/* টেবিল সেকশন */}
      <div className="w-full">
        {isLoading ? (
          <SkeletonTable />
        ) : displayData.length > 0 ? (
          <TransactionTable data={displayData} />
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500">No transactions found.</p>
          </div>
        )}
      </div>

      {/* --- আলাদা কম্পোনেন্ট হিসেবে মোডাল --- */}
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTransaction}
      />
    </div>
  );
};

export default TransactionPage;
