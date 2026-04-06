"use client";

import React, { useState, useEffect } from "react";
import TransactionTable from "@/components/dashboard/TransactionTable";
import { useDashboard } from "@/context/DashboardContext";
import { PlusCircle } from "lucide-react";
import AddTransactionModal from "@/components/dashboard/AddTransactionModal";
import { SkeletonTable } from "@/components/dashboard/SkeletonCard";

/**
 * TransactionPage Component
 * Manages financial history with full dark mode support.
 */
const TransactionPage = () => {
  const { role, transactions, addTransaction } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Simulates a data fetch delay.
   * Skeleton loaders here should adapt to dark/light theme automatically.
   */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground italic tracking-tight uppercase">
            Transaction History
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monitor and manage all your recent financial activities.
          </p>
        </div>

        {/* Conditional rendering for Admin access */}
        {role === "Admin" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-2xl font-bold shadow-lg hover:opacity-90 transition-all active:scale-95 text-sm"
          >
            <PlusCircle size={18} />
            <span>Add Transaction</span>
          </button>
        )}
      </div>

      {/* Main Table Area: Adapts to dark mode seamlessly */}
      <div className="w-full">
        {isLoading ? (
          // Logic: The SkeletonTable component should use 'dark:bg-slate-800' internally
          <SkeletonTable />
        ) : (
          <TransactionTable data={transactions} />
        )}
      </div>

      {/* Transaction Modal Entry */}
      <AddTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addTransaction}
      />
    </div>
  );
};

export default TransactionPage;
