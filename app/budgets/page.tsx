"use client";

import React, { useState, useEffect } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { budgetData } from "@/data/mockData";
import { Budget } from "@/types/dashboard";

/**
 * BudgetsPage Component
 * Provides a visual overview of monthly spending limits and progress across different categories.
 */
export default function BudgetsPage() {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Simulate a fetch delay to showcase the Skeleton UI during data loading.
   */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Skeleton placeholder for the Budget cards.
   * Maintains the layout structure while data is being "fetched".
   */
  const SkeletonBudget = () => (
    <div className="bg-card-bg border border-border-custom p-8 rounded-[32px] animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
          <div className="space-y-2">
            <div className="w-24 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="w-16 h-3 bg-slate-100 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
        <div className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <div className="w-28 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded"></div>
          </div>
          <div className="w-10 h-4 bg-slate-100 dark:bg-slate-800 rounded"></div>
        </div>
        <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden"></div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-background text-foreground transition-colors duration-300">
      {/* Header: Title and Action Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black italic uppercase tracking-tighter text-foreground">
            Budget Planner
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Monitor your monthly spending limits
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-200 dark:shadow-none active:scale-95 group">
          <Plus
            size={18}
            className="group-hover:rotate-90 transition-transform"
          />
          Create Budget
        </button>
      </div>

      {/* Grid Layout: Renders skeletons or active budget cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoading
          ? [...Array(4)].map((_, i) => <SkeletonBudget key={i} />)
          : budgetData.map((item: Budget) => {
              const Icon = item.icon;
              // Calculate spending percentage, capped at 100 for the progress bar
              const percentage = Math.min((item.spent / item.limit) * 100, 100);
              const isOverBudget = item.spent > item.limit;

              return (
                <div
                  key={item.id}
                  className="bg-card-bg border border-border-custom p-8 rounded-[32px] hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-500/5 transition-all group"
                >
                  {/* Category and Icon Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-2xl ${item.lightColor} dark:bg-opacity-20 ${item.textColor} transform group-hover:scale-110 transition-transform`}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          {item.category}
                        </h4>
                        <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-widest">
                          Active Budget
                        </p>
                      </div>
                    </div>
                    <button className="text-slate-300 hover:text-slate-600 dark:text-slate-600 dark:hover:text-slate-400 transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  {/* Progress and Amount Display */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-end font-bold italic">
                      <div>
                        <p
                          className={`text-2xl font-black ${isOverBudget ? "text-red-500" : "text-foreground"}`}
                        >
                          ${item.spent.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-tighter not-italic">
                          Spent of ${item.limit.toLocaleString()}
                        </p>
                      </div>
                      <p
                        className={`text-xs ${isOverBudget ? "text-red-500" : "text-slate-400 dark:text-slate-500"}`}
                      >
                        {percentage.toFixed(0)}%
                      </p>
                    </div>

                    {/* Dynamic Progress Bar: Changes color if budget is exceeded */}
                    <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ${isOverBudget ? "bg-red-500" : item.color}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    {/* Visual Warning for over-limit budgets */}
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
