"use client";

import React from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const AddTransactionModal = ({ isOpen, onClose, onSave }: Props) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const newEntry = {
        id: Date.now().toString(),
        description: formData.get("description") as string,
        amount: Number(formData.get("amount")),
        type: formData.get("type") as "income" | "expense",
        category: (formData.get("category") as string) || "General",
        date: new Date().toISOString().split("T")[0],
      };

      // চেক করা হচ্ছে onSave কি আসলেই একটি ফাংশন কি না
      if (typeof onSave === "function") {
        onSave(newEntry);
        toast.success("Transaction added successfully!", {
          style: {
            borderRadius: "12px",
            background: "#1f2937",
            color: "#fff",
          },
        });
        onClose();
      } else {
        console.error(
          "onSave is not a function. Check if addTransaction is passed correctly.",
        );
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl animate-in zoom-in duration-200">
        {/* Modal Header */}
        <div className="p-6 border-b flex justify-between items-center bg-gray-50/50 rounded-t-3xl">
          <h2 className="font-bold text-lg uppercase italic tracking-tight text-black">
            New Transaction
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X size={20} className="text-black" />
          </button>
        </div>

        {/* Modal Form */}
        <form className="p-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
              Description
            </label>
            <input
              name="description"
              type="text"
              placeholder="Salary, Rent..."
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black text-black"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                Amount
              </label>
              <input
                name="amount"
                type="number"
                placeholder="0.00"
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black text-black"
                required
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                Category
              </label>
              <input
                name="category"
                type="text"
                placeholder="Food, Salary..."
                className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black text-black"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
              Type
            </label>
            <select
              name="type"
              className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black cursor-pointer font-medium text-black"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800 transition-all mt-4 shadow-lg active:scale-95"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
