"use client";

import React, { useState, useEffect } from "react";
import SummarySection from "@/components/dashboard/SummarySection";
import BalanceChart from "@/components/dashboard/BalanceChart";
import ExpensePieChart from "@/components/dashboard/ExpensePieChart";

// ডাটা ইম্পোর্ট
import {
  balanceHistory,
  expenseByCategoryData,
  summaryMockData,
  transactions as mockTransactions, // নাম পরিবর্তন করে নিলাম কনফ্লিক্ট এড়াতে
} from "@/data/mockData";

import TransactionTable from "./transactions/page";
import {
  SkeletonCard,
  SkeletonChartLarge,
  SkeletonChartRound,
} from "@/components/dashboard/SkeletonCard";
import { useDashboard } from "@/context/DashboardContext"; // ২. Context ইম্পোর্ট করুন
import Insights from "@/components/dashboard/TableRows/Insight/Insights";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isLoading, setIsLoading] = useState(true);

  // ৩. Context থেকে রিয়েল ট্রানজ্যাকশন ডাটা নিন
  const { transactions: contextTransactions } = useDashboard();
  const displayTransactions =
    contextTransactions.length > 0 ? contextTransactions : mockTransactions;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen ">
      <main className="flex-1 p-4 md:p-8 max-w-7xl mx-auto">
        {/* Dashboard Tab */}
        {activeTab === "Dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-700">
            <h2 className="text-2xl font-bold italic">Overview</h2>

            {/* ১. Summary Section */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <SummarySection data={summaryMockData} />
            )}

            {/* ২. Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            {/* ৩. Financial Insights Section (নতুন যোগ করা হয়েছে) */}
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

        {/* Transactions Tab */}
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
