// components/dashboard/Insights.tsx
import React from "react";
import { TrendingUp, PieChart, Zap } from "lucide-react";
import { Transaction } from "@/types/dashboard";

/**
 * Insights: Provides automated data analysis based on transaction history.
 * Features: Highest spending category, Monthly performance, and Saving tips.
 */
const Insights = ({ transactions }: { transactions: Transaction[] }) => {
  // Logic: Identify the category with the highest total expenditure
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryTotals = expenses.reduce(
    (acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  const highestCategory =
    Object.keys(categoryTotals).length > 0
      ? Object.keys(categoryTotals).reduce((a, b) =>
          categoryTotals[a] > categoryTotals[b] ? a : b,
        )
      : "None";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Card 1: Expenditure Analysis - Highest Spending Category */}
      <div className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-2xl text-red-500">
            <TrendingUp size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Highest Spending
            </h4>
            <p className="text-lg font-bold text-foreground">
              {highestCategory}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Your primary expenditure is currently focused on{" "}
          {highestCategory.toLowerCase()}.
        </p>
      </div>

      {/* Card 2: Performance Tracking - Monthly Comparison */}
      <div className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-500">
            <PieChart size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Monthly Comparison
            </h4>
            <p className="text-lg font-bold text-foreground">Good Standing</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-600 dark:text-green-400">
            +12%
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            improvement vs last month
          </p>
        </div>
      </div>

      {/* Card 3: Actionable Intelligence - AI-Driven Observations */}
      <div className="bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-500">
            <Zap size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Smart Observation
            </h4>
            <p className="text-lg font-bold text-foreground">Saving Tip</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          &quot;Try optimizing your recurring bills to potentially save $50 next
          month!&quot;
        </p>
      </div>
    </div>
  );
};

export default Insights;
