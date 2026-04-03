"use client";

import React, { useState, useMemo } from "react";
import { Transaction } from "@/types/dashboard";
import { Search, ArrowUpDown } from "lucide-react";
// পাথটি আপনার ফোল্ডার অনুযায়ী চেক করে নিন
import TransactionRow from "../TableRows/TransactionRow";

interface TransactionTableProps {
  data: Transaction[];
}

const TransactionTable = ({ data = [] }: TransactionTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all",
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  // Filter & Search Logic
  const filteredData = useMemo(() => {
    // সেফটি চেক: ডাটা না থাকলে খালি অ্যারে রিটার্ন করবে
    if (!data) return [];

    return data
      .filter((item) => {
        // description বা category-র ভেতরে সার্চ করবে
        const searchContent =
          `${item.description} ${item.category}`.toLowerCase();
        const matchesSearch = searchContent.includes(searchTerm.toLowerCase());
        const matchesType = filterType === "all" || item.type === filterType;
        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        // অংক করার সময় চেক করে নেওয়া ভালো
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
      });
  }, [data, searchTerm, filterType, sortOrder]);

  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
      {/* Controls: Search & Filter */}
      <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/20">
        <div className="relative w-full md:max-w-xs">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/10 outline-none transition-all"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <select
            className="flex-1 md:w-40 px-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm font-medium outline-none cursor-pointer hover:border-gray-300 transition-colors"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as any)}
          >
            <option value="all">All Status</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            className="p-2.5 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 text-gray-600 border transition-all active:scale-95"
            title="Sort by Date"
          >
            <ArrowUpDown
              size={18}
              className={
                sortOrder === "asc"
                  ? "rotate-180 transition-transform"
                  : "transition-transform"
              }
            />
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/30">
              <th className="p-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                Date
              </th>
              <th className="p-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                Description
              </th>
              <th className="p-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden sm:table-cell">
                Category
              </th>
              <th className="p-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TransactionRow key={item.id} transaction={item} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="p-20 text-center text-gray-400 italic"
                >
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
