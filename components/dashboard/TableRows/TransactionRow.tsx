// components/dashboard/TransactionTable/TableRows/TransactionRow.tsx
import React from "react";
import { Transaction } from "@/types/dashboard";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  // Safety check: transaction বা type না থাকলে কিছুই রেন্ডার করবে না
  if (!transaction || !transaction.type) return null;

  const isIncome = transaction.type === "income";

  return (
    <tr className="hover:bg-gray-50/80 transition-colors border-b border-gray-100 group">
      {/* Date */}
      <td className="p-4 text-sm text-gray-500 whitespace-nowrap">
        {transaction.date}
      </td>

      {/* Description & Category (Mobile Optimized) */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          {/* Icon Section */}
          <div
            className={`p-2 rounded-lg hidden sm:block ${
              isIncome ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
            }`}
          >
            {isIncome ? (
              <ArrowUpRight size={16} />
            ) : (
              <ArrowDownLeft size={16} />
            )}
          </div>

          <div>
            <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {transaction.description}
            </div>
            {/* Mobile View Category */}
            <div className="text-[10px] text-gray-400 font-bold uppercase sm:hidden">
              {transaction.category}
            </div>
          </div>
        </div>
      </td>

      {/* Category (Desktop only) */}
      <td className="p-4 hidden sm:table-cell">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
          {transaction.category}
        </span>
      </td>

      {/* Amount Section */}
      <td
        className={`p-4 text-sm font-black text-right ${
          isIncome ? "text-green-600" : "text-red-600"
        }`}
      >
        {/* ?? 0 ব্যবহার করা হয়েছে যাতে amount undefined হলেও এরর না আসে */}
        {isIncome ? "+" : "-"}${(transaction.amount ?? 0).toLocaleString()}
      </td>
    </tr>
  );
};

export default TransactionRow;
