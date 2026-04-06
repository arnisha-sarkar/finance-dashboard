"use client";

import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { Transaction } from "@/types/dashboard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Transaction) => void; // Defined specific type instead of 'any'
}

const AddTransactionModal = ({ isOpen, onClose, onSave }: Props) => {
  // Early return if modal is not active
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      // Construct the transaction object from form data
      const newEntry: Transaction = {
        id: Date.now().toString(),
        description: formData.get("description") as string,
        amount: Number(formData.get("amount")),
        type: formData.get("type") as "income" | "expense",
        category: (formData.get("category") as string) || "General",
        date: new Date().toISOString().split("T")[0],
      };

      /**
       * Validate if onSave is a valid function before execution.
       * This prevents runtime crashes if the prop is passed incorrectly.
       */
      if (typeof onSave === "function") {
        onSave(newEntry);

        // Visual feedback using react-hot-toast
        toast.success("Transaction added successfully!", {
          style: {
            borderRadius: "12px",
            background: "#1f2937",
            color: "#fff",
          },
        });

        onClose(); // Close modal on success
      } else {
        console.error(
          "onSave prop is not a function. Ensure addTransaction is passed correctly.",
        );
      }
    } catch (error) {
      toast.error("Failed to add transaction. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
      <div className="bg-card-bg w-full max-w-md rounded-3xl shadow-2xl border border-border-custom animate-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b border-border-custom flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/20 rounded-t-3xl">
          <h2 className="font-bold text-lg uppercase italic tracking-tight text-foreground">
            New Transaction
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} className="text-foreground" />
          </button>
        </div>

        {/* Modal Form */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          {/* Description Input */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Salary, Rent..."
              className="w-full p-3 rounded-xl border border-border-custom bg-background focus:outline-none focus:border-blue-500 text-foreground"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Amount Input */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
                Amount
              </label>
              <input
                name="amount"
                type="number"
                placeholder="0.00"
                className="w-full p-3 rounded-xl border border-border-custom bg-background focus:outline-none focus:border-blue-500 text-foreground"
                required
              />
            </div>
            {/* Category Input */}
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
                Category
              </label>
              <input
                name="category"
                type="text"
                placeholder="Food, Salary..."
                className="w-full p-3 rounded-xl border border-border-custom bg-background focus:outline-none focus:border-blue-500 text-foreground"
                required
              />
            </div>
          </div>

          {/* Transaction Type Dropdown */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">
              Type
            </label>
            <select
              name="type"
              className="w-full p-3 rounded-xl border border-border-custom bg-background focus:outline-none focus:border-blue-500 cursor-pointer font-medium text-foreground"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-background py-4 rounded-2xl font-bold uppercase tracking-widest hover:opacity-90 transition-all mt-4 shadow-lg active:scale-95"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
