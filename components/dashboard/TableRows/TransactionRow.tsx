"use client";

import React from "react";
import { Transaction } from "@/types/dashboard";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface Props {
  transaction: Transaction;
}

/**
 * TransactionRow: Renders an individual row for the transaction table.
 * Includes conditional styling and iconography based on transaction type (Income vs Expense).
 */
const TransactionRow = ({ transaction }: Props) => {
  const isIncome = transaction.type?.toLowerCase() === "income";

  return (
    /* Highlight row on hover with a subtle background shift for better scannability */
    <tr className="group transition-all duration-200 hover:bg-slate-50 dark:hover:bg-white/5 cursor-default">
      {/* Transaction Date Column */}
      <td className="p-4">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {transaction.date}
        </span>
      </td>

      {/* Transaction Identity: Icon & Description */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          {/* Status Indicator Icon with scale effect on row hover */}
          <div
            className={`p-2 rounded-xl transition-transform group-hover:scale-110 ${
              isIncome
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
            }`}
          >
            {isIncome ? (
              <ArrowUpRight size={16} aria-label="Income" />
            ) : (
              <ArrowDownLeft size={16} aria-label="Expense" />
            )}
          </div>

          {/* Dynamic text color on hover to provide visual feedback */}
          <span className="text-sm font-bold text-slate-900 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {transaction.description}
          </span>
        </div>
      </td>

      {/* Category Pill: Hidden on mobile to maintain clean UI */}
      <td className="p-4 hidden sm:table-cell">
        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">
          {transaction.category}
        </span>
      </td>

      {/* Financial Amount: Color-coded by type with negative/positive prefixes */}
      <td className="p-4 text-right">
        <span
          className={`text-sm font-black tracking-tight ${
            isIncome ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {isIncome ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
        </span>
      </td>
    </tr>
  );
};

export default TransactionRow;
