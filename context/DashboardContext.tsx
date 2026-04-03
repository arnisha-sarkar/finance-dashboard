"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// ১. টাইপ ডিফাইন করা
type Role = "Admin" | "Viewer";

export interface Transaction {
  // export করুন যাতে অন্য পেজেও টাইপটি পান
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
}

// ফিল্টারের জন্য একটি টাইপ দিন
interface FilterType {
  search: string;
  category: string;
}

interface DashboardContextType {
  transactions: Transaction[];
  role: Role;
  filters: FilterType; // any এর বদলে FilterType
  setRole: (role: Role) => void;
  setFilters: (filters: FilterType) => void;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>; // ট্রানজ্যাকশন আপডেট করার জন্য
}

// ২. কনটেক্সট তৈরি
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

// ৩. প্রোভাইডার কম্পোনেন্ট
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [role, setRole] = useState<Role>("Viewer");
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    category: "All",
  }); // ডিফল্ট ভ্যালু দিন

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        role,
        filters,
        setRole,
        setFilters,
        setTransactions,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// ৪. কাস্টম হুক
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
