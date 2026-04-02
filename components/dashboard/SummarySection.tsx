"use client";

import React from "react";
import { Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { SummaryData } from "@/types/dashboard";
import { SummaryCard } from "./SummaryCard";

interface Props {
  data: SummaryData;
}

export default function SummarySection({ data }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
      <SummaryCard
        label="Total Balance"
        value={data.totalBalance}
        icon={Wallet}
        iconColor="text-blue-600"
        bgColor="bg-blue-50"
      />
      <SummaryCard
        label="Total Income"
        value={data.totalIncome}
        icon={ArrowUpRight}
        iconColor="text-emerald-600"
        bgColor="bg-emerald-50"
      />
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
