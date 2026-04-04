"use client";

import { Transaction } from "@/types/dashboard";
import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Type Definitions
type Role = "Admin" | "Viewer";

// Defining a specific type for filters instead of 'any'
interface FilterType {
  search: string;
  category: string;
}

interface DashboardContextType {
  transactions: Transaction[];
  role: Role;
  filters: FilterType;
  setRole: (role: Role) => void;
  setFilters: (filters: FilterType) => void;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>; // To update transaction list globally
}

// 2. Create Context
const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

// 3. Provider Component
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [role, setRole] = useState<Role>("Viewer");
  const [filters, setFilters] = useState<FilterType>({
    search: "",
    category: "All",
  }); // Providing default initial values

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

// 4. Custom Hook for easy access
export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
