"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// ১. টাইপ ডিফাইন করা
type Role = "Admin" | "Viewer";

interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
}

interface DashboardContextType {
  transactions: Transaction[];
  role: Role;
  filters: any; // আপনার ফিল্টার লজিক অনুযায়ী এখানে টাইপ বসাতে পারেন
  setRole: (role: Role) => void;
  setFilters: (filters: any) => void;
}

// ২. কনটেক্সট তৈরি (ডিফল্ট ভ্যালুসহ)
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

// ৩. প্রোভাইডার কম্পোনেন্ট
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [role, setRole] = useState<Role>("Viewer");
  const [filters, setFilters] = useState({});

  return (
    <DashboardContext.Provider
      value={{ transactions, role, filters, setRole, setFilters }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

// ৪. কাস্টম হুক (ব্যবহার সহজ করার জন্য)
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
