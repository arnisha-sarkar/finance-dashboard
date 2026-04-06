"use client";

import React, { useState, useEffect } from "react";
import SummarySection from "@/components/dashboard/SummarySection";
import BalanceChart from "@/components/dashboard/BalanceChart";

// Import data and mock assets
import {
  balanceHistory,
  expenseByCategoryData,
  summaryMockData,
  transactions as mockTransactions, // Alias used to avoid naming conflicts with context
} from "@/data/mockData";

// Import skeleton loaders for better user experience during data fetching
import {
  SkeletonCard,
  SkeletonChartLarge,
  SkeletonChartRound,
} from "@/components/dashboard/SkeletonCard";

// Import Dashboard Context to access shared transaction state
import { useDashboard } from "@/context/DashboardContext";
import Insights from "@/components/dashboard/TableRows/Insight/Insights";
import ExpensePieChart from "@/components/charts/ExpensePieChart";
import TransactionTable from "@/components/dashboard/TransactionTable";

/**
 * Dashboard Home Component
 * Manages the main overview and transaction views of the application.
 */
export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isLoading, setIsLoading] = useState(true);

  // Retrieve real-time transactions from context
  const { transactions: contextTransactions } = useDashboard();

  // Logic: Use context data if available, otherwise fallback to mock data for presentation
  const displayTransactions =
    contextTransactions.length > 0 ? contextTransactions : mockTransactions;

  /**
   * Effect to simulate a network delay.
   * This ensures the Skeleton UI is visible for 1.5 seconds during the initial load.
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen ">
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto">
        {/* Dashboard Tab Content */}
        {activeTab === "Dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <h2 className="text-2xl font-bold italic">Overview</h2>

            {/* 1. Summary Cards Section: Displays high-level totals (Balance, Income, Expense) */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <SummarySection data={summaryMockData} />
            )}

            {/* 2. Charts Section: Visualizes financial trends and category spending */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Balance History Chart */}
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4 italic uppercase tracking-tight">
                  Balance History
                </h3>
                {isLoading ? (
                  <SkeletonChartLarge />
                ) : (
                  <BalanceChart data={balanceHistory} />
                )}
              </div>

              {/* Expense Distribution by Category */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold mb-4 italic uppercase tracking-tight">
                  Expense by Category
                </h3>
                {isLoading ? (
                  <SkeletonChartRound />
                ) : (
                  <ExpensePieChart data={expenseByCategoryData} />
                )}
              </div>
            </div>

            {/* 3. Financial Insights Section: Provides logic-driven analysis of transactions */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4 italic uppercase tracking-tight">
                Financial Insights
              </h3>
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              ) : (
                <Insights transactions={displayTransactions} />
              )}
            </div>
          </div>
        )}

        {/* Transactions Tab Content: Displays the full list of financial records */}
        {activeTab === "Transactions" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-2xl font-bold italic">All Transactions</h2>
            <TransactionTable data={displayTransactions} />
          </div>
        )}
      </main>
    </div>
  );
}
