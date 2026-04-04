// components/dashboard/Insights.tsx
import React from "react";
import { TrendingUp, PieChart, Zap } from "lucide-react";

const Insights = ({ transactions }: { transactions: any[] }) => {
  // ১. লজিক: Highest Spending Category বের করা
  const expenses = transactions.filter((t) => t.type === "expense");
  const categoryTotals = expenses.reduce(
    (acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  const highestCategory = Object.keys(categoryTotals).reduce(
    (a, b) => (categoryTotals[a] > categoryTotals[b] ? a : b),
    "None",
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* কার্ড ১: Highest Spending */}
      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-red-50 rounded-2xl text-red-500">
            <TrendingUp size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Highest Spending
            </h4>
            <p className="text-lg font-bold text-gray-900">{highestCategory}</p>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          You spend most of your money on {highestCategory.toLowerCase()}.
        </p>
      </div>

      {/* কার্ড ২: Monthly Status */}
      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-green-50 rounded-2xl text-green-500">
            <PieChart size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Monthly Comparison
            </h4>
            <p className="text-lg font-bold text-gray-900">Good Standing</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-green-600">+12%</span>
          <p className="text-xs text-gray-500">vs last month</p>
        </div>
      </div>

      {/* কার্ড ৩: Smart Observation */}
      <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
            <Zap size={24} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Smart Observation
            </h4>
            <p className="text-lg font-bold text-gray-900">Saving Tip</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 italic">
          "Try reducing Food expenses to save $50 next month!"
        </p>
      </div>
    </div>
  );
};

export default Insights;
