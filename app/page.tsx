// app/page.tsx
"use client";

import React from "react";
import SummarySection from "@/components/dashboard/SummarySection";
import BalanceChart from "@/components/dashboard/BalanceChart";
import ExpensePieChart from "@/components/dashboard/ExpensePieChart";
import {
  summaryMockData,
  balanceHistory,
  expenseByCategoryData,
} from "@/data/mockData";

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* ১. হেডার সেকশন */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
          Financial Dashboard
        </h1>
        <p className="text-gray-500 text-sm md:text-base font-medium">
          Welcome back! Here&apos;s what&apos;s happening with your money.
        </p>
      </div>

      {/* ২. সামারি কার্ড সেকশন */}
      <section>
        <SummarySection data={summaryMockData} />
      </section>

      {/* ৩. চার্ট সেকশন - গ্রিড লেআউট */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ব্যালেন্স লাইন চার্ট - এটি ২ কলাম জায়গা নিবে */}
        <section className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <BalanceChart data={balanceHistory} title="Balance Over Time" />
        </section>

        {/* এক্সপেন্স পাই চার্ট - এটি ১ কলাম জায়গা নিবে */}
        <section className="lg:col-span-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <ExpensePieChart
            data={expenseByCategoryData}
            title="Expense Breakdown"
          />
        </section>
      </div>

      {/* ৪. ট্রানজ্যাকশন টেবিল (ভবিষ্যতের জন্য) */}
      {/* <section className="w-full">
          <TransactionTable />
      </section> */}
    </main>
  );
};

export default Home;
