"use client";

import { Transaction } from "@/types/dashboard";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { transactions as mockData } from "@/data/mockData";

type Role = "Admin" | "Viewer";

interface DashboardContextType {
  transactions: Transaction[];
  role: Role;
  setRole: (role: Role) => void;
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
  addTransaction: (transaction: Transaction) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [role, setRole] = useState<Role>("Viewer");

  // এটি ডাটা লোড হওয়া নিশ্চিত করবে
  const isLoaded = useRef(false);

  // ১. পেজ লোড হওয়ার সময় LocalStorage থেকে ডাটা আনা
  useEffect(() => {
    const savedRole = localStorage.getItem("dashboard-role") as Role;
    if (savedRole) setRole(savedRole);

    const savedTransactions = localStorage.getItem("dashboard-transactions");
    if (savedTransactions && savedTransactions !== "[]") {
      setTransactions(JSON.parse(savedTransactions));
    } else {
      setTransactions(mockData);
    }
    isLoaded.current = true;
  }, []);

  // ২. রোল সেভ করা
  useEffect(() => {
    localStorage.setItem("dashboard-role", role);
  }, [role]);

  // ৩. মূল ফিক্স: addTransaction ফাংশন
  // const addTransaction = (newTransaction: Transaction) => {
  //   // আগের ডাটার সাথে নতুনটি যোগ করা
  //   setTransactions((prev) => {
  //     const updatedData = [newTransaction, ...prev];

  //     // ব্রাউজারের মেমোরিতে সরাসরি সেভ করে দেওয়া (যাতে রিলোড না লাগে)
  //     localStorage.setItem(
  //       "dashboard-transactions",
  //       JSON.stringify(updatedData),
  //     );

  //     return updatedData;
  //   });
  // };
  const addTransaction = (newTransaction: Transaction) => {
    setTransactions((prev) => {
      const updatedData = [newTransaction, ...prev];

      // সাথে সাথে LocalStorage এ সেভ করা নিশ্চিত করা
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "dashboard-transactions",
          JSON.stringify(updatedData),
        );
      }

      return updatedData;
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        transactions,
        role,
        setRole,
        setTransactions,
        addTransaction,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context)
    throw new Error("useDashboard must be used within a DashboardProvider");
  return context;
};
