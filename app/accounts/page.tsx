"use client";

import React, { useState, useEffect } from "react";
import { Plus, ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react";
import { accountsData } from "@/data/mockData";
import { Account } from "@/types/dashboard";

export default function AccountsPage() {
  /**
   * State to manage the loading sequence.
   * In a real app, this would come from a data fetching hook or Context.
   */
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Effect to simulate a network delay for the Skeleton UI.
   * This provides a better user experience by showing placeholders during data fetch.
   */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Reusable Skeleton Component for individual account cards.
   * Uses 'animate-pulse' for a smooth loading effect.
   */
  const SkeletonAccount = () => (
    <div className="bg-card-bg border border-border-custom p-6 rounded-[28px] animate-pulse">
      <div className="flex items-start justify-between mb-8">
        <div className="w-14 h-14 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        <div className="w-4 h-6 bg-slate-100 dark:bg-slate-800 rounded"></div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
          <div className="w-32 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
        </div>
        <div className="flex items-end justify-between border-t border-border-custom pt-4">
          <div className="space-y-2">
            <div className="w-24 h-8 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="w-20 h-3 bg-slate-100 dark:bg-slate-800 rounded"></div>
          </div>
          <div className="w-12 h-4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-background text-foreground transition-colors duration-300">
      {/* Header Section: Title and Add Account Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black italic text-foreground uppercase tracking-tighter">
            My Accounts
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Manage your linked bank accounts and cards
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-200 active:scale-95 group">
          <Plus
            size={18}
            className="group-hover:rotate-90 transition-transform"
          />
          Add New Account
        </button>
      </div>

      {/* Hero Section: Total Balance Overview with conditional loading state */}
      {isLoading ? (
        <div className="h-[200px] w-full bg-slate-200 dark:bg-slate-800 rounded-[32px] animate-pulse"></div>
      ) : (
        <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group border border-white/5 dark:border-blue-500/20">
          {/* Decorative background element */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="text-blue-400 text-[10px] uppercase font-black tracking-[0.3em] mb-3">
                Total Combined Balance
              </p>
              <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter">
                $56,555.00
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex items-center gap-1 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[11px] font-bold border border-green-500/20">
                  <ArrowUpRight size={14} />
                  +4.2% Growth
                </span>
                <span className="text-slate-400 text-xs font-medium italic">
                  Since last month
                </span>
              </div>
            </div>

            {/* Card Brand Badges */}
            <div className="flex gap-2">
              <div className="w-12 h-8 bg-white/5 rounded-md border border-white/10 flex items-center justify-center italic font-bold text-[10px]">
                VISA
              </div>
              <div className="w-12 h-8 bg-white/5 rounded-md border border-white/10 flex items-center justify-center italic font-bold text-[10px]">
                MC
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid Display: Iterates through accounts data or shows skeletons while loading */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? [...Array(3)].map((_, i) => <SkeletonAccount key={i} />)
          : accountsData.map((account: Account) => {
              const Icon = account.icon;
              return (
                <div
                  key={account.id}
                  className="bg-card-bg border border-border-custom p-6 rounded-[28px] hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-blue-500/5 transition-all group relative overflow-hidden"
                >
                  {/* Account Icon and Action Menu */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`p-4 rounded-2xl ${account.color} text-white shadow-lg transform group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={24} />
                    </div>
                    <button className="text-slate-300 hover:text-slate-500 dark:text-slate-600 dark:hover:text-slate-400 transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  {/* Account Details: Bank Name and Type */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">
                        {account.bankName}
                      </p>
                      <h4 className="font-bold text-foreground text-lg leading-tight">
                        {account.accountType}
                      </h4>
                    </div>

                    {/* Financial Status: Balance and percentage change */}
                    <div className="flex items-end justify-between border-t border-border-custom pt-4">
                      <div>
                        <p className="text-2xl font-black italic text-foreground leading-none">
                          {account.balance}
                        </p>
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-1 tracking-tighter">
                          {account.accountNumber}
                        </p>
                      </div>
                      <div
                        className={`flex items-center gap-0.5 text-[11px] font-bold ${account.isPositive ? "text-green-500" : "text-red-500"}`}
                      >
                        {account.isPositive ? (
                          <ArrowUpRight size={12} />
                        ) : (
                          <ArrowDownRight size={12} />
                        )}
                        {account.change}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
