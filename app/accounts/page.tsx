"use client";

import React from "react";
import { Plus, ArrowUpRight, ArrowDownRight, MoreVertical } from "lucide-react";
import { accountsData } from "@/data/mockData";
import { Account } from "@/types/dashboard";

export default function AccountsPage() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black italic text-gray-900 uppercase tracking-tighter">
            My Accounts
          </h2>
          <p className="text-sm text-gray-500 font-medium">
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

      {/* Main Net Worth Card */}
      <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden group">
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

      {/* Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* এখানে map এর ভেতর Account ইন্টারফেসটি বলে দেয়া হয়েছে */}
        {accountsData.map((account: Account) => {
          const Icon = account.icon;
          return (
            <div
              key={account.id}
              className="bg-white border border-gray-100 p-6 rounded-[28px] hover:shadow-2xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div
                  className={`p-4 rounded-2xl ${account.color} text-white shadow-lg transform group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} />
                </div>
                <button className="text-gray-300 hover:text-gray-600 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">
                    {account.bankName}
                  </p>
                  <h4 className="font-bold text-gray-900 text-lg leading-tight">
                    {account.accountType}
                  </h4>
                </div>

                <div className="flex items-end justify-between border-t border-gray-50 pt-4">
                  <div>
                    <p className="text-2xl font-black italic text-gray-900 leading-none">
                      {account.balance}
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold mt-1 tracking-tighter">
                      {account.accountNumber}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-0.5 text-[11px] font-bold ${
                      account.isPositive ? "text-green-500" : "text-red-500"
                    }`}
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
