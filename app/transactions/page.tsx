"use client";

import React, { useState } from "react";
import TransactionTable from "@/components/dashboard/TransactionTable";
// ১. useDashboard ইম্পোর্ট করুন
import { useDashboard } from "@/context/DashboardContext";
import { PlusCircle, X } from "lucide-react";
import toast from "react-hot-toast";

const TransactionPage = () => {
  // ২. useRole() এর বদলে useDashboard() ব্যবহার করুন এবং transactions ডাটা এখান থেকেই নিন
  const { role, transactions, addTransaction } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 relative">
      {/* হেডার সেকশন */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 italic tracking-tight uppercase">
            Transaction History
          </h1>
          <p className="text-sm text-gray-500">
            Monitor and manage all your recent financial activities.
          </p>
        </div>

        {role === "Admin" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-2xl font-bold shadow-lg hover:bg-gray-800 transition-all active:scale-95 text-sm"
          >
            <PlusCircle size={18} />
            <span>Add Transaction</span>
          </button>
        )}
      </div>

      {/* টেবিল সেকশন */}
      <div className="w-full">
        {/* ৩. আলাদা mockData ইম্পোর্ট না করে context এর transactions ব্যবহার করুন */}
        <TransactionTable data={transactions} />
      </div>

      {/* Add Transaction Modal UI */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b flex justify-between items-center bg-gray-50/50 rounded-t-3xl">
              <h2 className="font-bold text-lg uppercase italic tracking-tight">
                New Transaction
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);

                // ৪. প্রফেশনাল টোস্ট মেসেজ
                toast.success("Transaction added successfully!", {
                  duration: 3000,
                  position: "top-right",
                  style: {
                    borderRadius: "12px",
                    background: "#1f2937",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                  },
                });
              }}
            >
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Salary, Rent, Food..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all text-black"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                    Amount
                  </label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all text-black"
                    required
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                    Type
                  </label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black transition-all cursor-pointer font-medium text-black">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-all mt-4 shadow-lg shadow-black/10"
              >
                Save Transaction
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
