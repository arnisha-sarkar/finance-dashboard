"use client";

import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { budgetData } from "@/data/mockData";
import { Budget } from "@/types/dashboard";

export default function BudgetsPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-900">
            Budget Planner
          </h2>
          <p className="text-sm text-gray-500 font-medium">
            Monitor your monthly spending limits
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-200 active:scale-95 group">
          <Plus
            size={18}
            className="group-hover:rotate-90 transition-transform"
          />
          Create Budget
        </button>
      </div>

      {/* Budget Cards Mapping */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* এখানে item: Budget টাইপটি ডিফাইন করা হয়েছে */}
        {budgetData.map((item: Budget) => {
          const Icon = item.icon;
          const percentage = Math.min((item.spent / item.limit) * 100, 100);
          const isOverBudget = item.spent > item.limit;

          return (
            <div
              key={item.id}
              className="bg-white border border-gray-100 p-8 rounded-[32px] hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-4 rounded-2xl ${item.lightColor} ${item.textColor} transform group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.category}</h4>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                      Active Budget
                    </p>
                  </div>
                </div>
                <button className="text-gray-300 hover:text-gray-600 transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end font-bold italic">
                  <div>
                    <p
                      className={`text-2xl font-black ${isOverBudget ? "text-red-500" : "text-gray-900"}`}
                    >
                      ${item.spent.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter not-italic">
                      Spent of ${item.limit.toLocaleString()}
                    </p>
                  </div>
                  <p
                    className={`text-xs ${isOverBudget ? "text-red-500" : "text-gray-400"}`}
                  >
                    {percentage.toFixed(0)}%
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      isOverBudget ? "bg-red-500" : item.color
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {isOverBudget && (
                  <p className="text-[10px] font-bold text-red-500 italic mt-1 uppercase tracking-tight">
                    ⚠️ Over limit by $
                    {(item.spent - item.limit).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
