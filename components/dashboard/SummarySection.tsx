"use client";

import React from "react";

import { SummaryData } from "@/types/dashboard";
import { SummaryCard } from "./SummaryCard";
import { ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";

interface Props {
  data: SummaryData;
}

/**
 * SummarySection: A layout component that organizes the metric cards.
 * Uses a responsive grid to display financial summaries (Balance, Income, Expense).
 */
export default function SummarySection({ data }: Props) {
  return (
    /* Responsive Grid System:
       - 1 column on mobile for better stacking.
       - 3 columns on medium screens (md) to display cards side-by-side.
    */
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
      {/* Total Balance Metric */}
      <SummaryCard
        label="Total Balance"
        value={data.totalBalance}
        icon={Wallet}
        iconColor="text-blue-600"
        bgColor="bg-blue-50"
      />

      {/* Total Income Metric with positive growth visual */}
      <SummaryCard
        label="Total Income"
        value={data.totalIncome}
        icon={ArrowUpRight}
        iconColor="text-emerald-600"
        bgColor="bg-emerald-50"
      />

      {/* Total Expense Metric with negative flow visual */}
      <SummaryCard
        label="Total Expense"
        value={data.totalExpense}
        icon={ArrowDownRight}
        iconColor="text-rose-600"
        bgColor="bg-rose-50"
      />
    </div>
  );
}
