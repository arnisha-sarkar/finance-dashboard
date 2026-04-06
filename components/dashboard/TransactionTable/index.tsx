"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Transaction } from "@/types/dashboard";
import { Search, ArrowUpDown } from "lucide-react";
import TransactionRow from "../TableRows/TransactionRow";

interface TransactionTableProps {
  data: Transaction[];
}

/**
 * TransactionTable: A feature-rich table to display, search, filter, and sort financial records.
 */
const TransactionTable = ({ data = [] }: TransactionTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">(
    "all",
  );
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  /**
   * Using a safer way to reset search and filters.
   * Wrapping in a micro-task (Promise.resolve) or zero-timeout prevents
   * the "cascading render" warning in some React versions.
   */
  useEffect(() => {
    if (data.length > 0) {
      // Current render cycle-er baire state update korbe
      Promise.resolve().then(() => {
        setSearchTerm("");
        setFilterType("all");
      });
    }
  }, [data.length]);

  /**
   * Memoized filter and sort logic for better performance.
   * Handles multi-column search (description and category) and type filtering.
   */
  const filteredData = useMemo(() => {
    if (!data) return [];

    return data
      .filter((item) => {
        const searchContent =
          `${item.description} ${item.category}`.toLowerCase();
        const matchesSearch = searchContent.includes(searchTerm.toLowerCase());
        const matchesType =
          filterType === "all" ||
          item.type?.toLowerCase() === filterType.toLowerCase();

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
      });
  }, [data, searchTerm, filterType, sortOrder]);

  return (
    <div className="bg-card-bg rounded-[32px] border border-border-custom shadow-sm overflow-hidden transition-colors duration-300">
      {/* Search and Filter Controls */}
      <div className="p-6 border-b border-border-custom flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50 dark:bg-slate-900/20">
        {/* Search Input Field */}
        <div className="relative w-full md:max-w-xs">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            className="w-full pl-10 pr-4 py-2.5 bg-background border border-border-custom rounded-2xl text-sm text-foreground focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter and Sort Actions */}
        <div className="flex gap-2 w-full md:w-auto">
          <select
            className="flex-1 md:w-40 px-4 py-2.5 bg-background border border-border-custom rounded-2xl text-sm font-bold text-foreground outline-none cursor-pointer hover:border-slate-400 transition-colors"
            value={filterType}
            onChange={(e) =>
              setFilterType(e.target.value as "all" | "income" | "expense")
            }
          >
            <option value="all">All Status</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
            aria-label="Toggle Sort Order"
            className="p-2.5 bg-background border border-border-custom rounded-2xl hover:bg-slate-50 text-slate-600 transition-all active:scale-95"
          >
            <ArrowUpDown
              size={18}
              className={`transition-transform duration-300 ${sortOrder === "asc" ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Responsive Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/30 dark:bg-slate-900/40">
              <th className="p-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                Date
              </th>
              <th className="p-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                Description
              </th>
              <th className="p-4 text-[11px] font-black text-slate-400 uppercase tracking-widest hidden sm:table-cell">
                Category
              </th>
              <th className="p-4 text-[11px] font-black text-slate-400 uppercase tracking-widest text-right">
                Amount
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border-custom">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <TransactionRow key={item.id} transaction={item} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="p-20 text-center text-slate-500 italic font-medium"
                >
                  No transactions found matching your criteria.
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
