import { LucideIcon } from "lucide-react";

export interface SummaryData {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
}

// SummaryCard er jonno interface
export interface SummaryCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
}
