"use client";

import React, { useMemo } from "react";
import { useDashboard } from "@/context/DashboardContext"; // ১. আপনার নতুন DashboardContext ব্যবহার করুন
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Target,
  AlertTriangle,
} from "lucide-react"; // আইকন

// --- helper functions (ডাটা ক্যালকুলেশন করার জন্য) ---

// ১. এই মাসের এবং গত মাসের মোট খরচ বের করা
const getMonthlyExpenses = (transactions: any[]) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const currentMonthExpenses = transactions
    .filter(
      (t) =>
        t.type === "expense" &&
        new Date(t.date).getMonth() === currentMonth &&
        new Date(t.date).getFullYear() === currentYear,
    )
    .reduce((sum, t) => sum + t.amount, 0);

  const lastMonthExpenses = transactions
    .filter(
      (t) =>
        t.type === "expense" &&
        new Date(t.date).getMonth() ===
          (currentMonth === 0 ? 11 : currentMonth - 1) &&
        new Date(t.date).getFullYear() ===
          (currentMonth === 0 ? currentYear - 1 : currentYear),
    )
    .reduce((sum, t) => sum + t.amount, 0);

  return { currentMonthExpenses, lastMonthExpenses };
};

// ২. সবথেকে বেশি খরচের ক্যাটাগরি বের করা
const getHighestSpendingCategory = (transactions: any[]) => {
  const expenseTransactions = transactions.filter((t) => t.type === "expense");
  const categoryTotals: { [key: string]: number } = {};

  expenseTransactions.forEach((t) => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  let highestCategory = "";
  let highestAmount = 0;

  for (const category in categoryTotals) {
    if (categoryTotals[category] > highestAmount) {
      highestCategory = category;
      highestAmount = categoryTotals[category];
    }
  }

  return { highestCategory, highestAmount };
};

// ৩. একটি "Useful Observation" বের করা (সিম্পল লজিক)
const getObservation = (
  currentMonthExpenses: number,
  lastMonthExpenses: number,
) => {
  if (currentMonthExpenses === 0)
    return {
      text: "No expenses recorded this month yet.",
      icon: Target,
      color: "text-blue-600",
    };

  if (currentMonthExpenses > lastMonthExpenses && lastMonthExpenses > 0) {
    const percentage = (
      ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) *
      100
    ).toFixed(0);
    return {
      text: `You've spent ${percentage}% more than last month. Be careful!`,
      icon: AlertTriangle,
      color: "text-amber-600",
    };
  }

  if (currentMonthExpenses < lastMonthExpenses && lastMonthExpenses > 0) {
    return {
      text: "Great job! Your expenses are lower than last month.",
      icon: Target,
      color: "text-emerald-600",
    };
  }

  return {
    text: "Keep tracking your expenses to see detailed observations.",
    icon: BarChart3,
    color: "text-gray-600",
  };
};

// --- মেইন InsightsPage কম্পোনেন্ট ---

const InsightsPage = () => {
  const { transactions } = useDashboard(); // ২. কন্টেক্সট থেকে ডাটা নিন

  // useMemo ব্যবহার করছি যাতে ডাটা চেঞ্জ না হলে বারবার ক্যালকুলেশন না হয় (Performance Optimization)
  const { currentMonthExpenses, lastMonthExpenses } = useMemo(
    () => getMonthlyExpenses(transactions),
    [transactions],
  );
  const { highestCategory, highestAmount } = useMemo(
    () => getHighestSpendingCategory(transactions),
    [transactions],
  );
  const observation = useMemo(
    () => getObservation(currentMonthExpenses, lastMonthExpenses),
    [currentMonthExpenses, lastMonthExpenses],
  );

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* হেডার */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-gray-900 italic tracking-tight uppercase">
          Financial Insights
        </h1>
        <p className="text-sm text-gray-500">
          Smart analysis and observations from your transaction data.
        </p>
      </div>

      {/* --- Insights Cards (রিকোয়ারমেন্ট অনুযায়ী) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* ১. Highest Spending Category */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-bold text-lg uppercase italic tracking-tight text-gray-900">
              Highest Spending Category
            </h3>
          </div>
          {highestCategory ? (
            <div className="space-y-1">
              <p className="text-4xl font-extrabold text-red-600 tracking-tighter">
                {highestCategory}
              </p>
              <p className="text-sm text-gray-500">
                Total Spent: ${highestAmount.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">No expense data yet.</p>
          )}
        </div>

        {/* ২. Monthly Comparison */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
              <BarChart3 size={24} />
            </div>
            <h3 className="font-bold text-lg uppercase italic tracking-tight text-gray-900">
              Monthly Comparison
            </h3>
          </div>
          <div className="flex gap-6 items-end">
            <div className="text-center">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                This Month
              </p>
              <p className="text-3xl font-extrabold text-emerald-600 tracking-tighter">
                ${currentMonthExpenses.toFixed(2)}
              </p>
            </div>
            <div className="text-center border-l pl-6">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                Last Month
              </p>
              <p className="text-xl font-bold text-gray-500 tracking-tighter">
                ${lastMonthExpenses.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* ৩. Useful Observation */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
              <Target size={24} />
            </div>
            <h3 className="font-bold text-lg uppercase italic tracking-tight text-gray-900">
              Smart Observation
            </h3>
          </div>
          <div
            className={`flex items-start gap-3 p-4 bg-gray-50 rounded-2xl ${observation.color}`}
          >
            <observation.icon size={20} className="mt-0.5 flex-shrink-0" />
            <p className="text-sm font-semibold">{observation.text}</p>
          </div>
        </div>
      </div>

      {/* --- (ঐচ্ছিক) এখানে আপনি আপনার চার্ট যোগ করতে পারেন --- */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h3 className="font-bold text-xl uppercase italic tracking-tight text-gray-900 mb-6">
          Detailed Expense Visualization
        </h3>
        <div className="h-80 bg-gray-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-bold">
            Your Bar/Pie Chart goes here...
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
