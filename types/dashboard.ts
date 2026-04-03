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

// src/types/dashboard.ts
export interface ChartDataPoint {
  date: string;
  balance: number;
}

export interface LineChartProps {
  data: ChartDataPoint[];
  title?: string;
}

// src/types/dashboard.ts
// ... আগের টাইপগুলো থাকবে ...

export interface ExpenseCategoryData {
  name: string; // ক্যাটাগরির নাম (যেমন: 'Food')
  value: number; // খরচের পরিমাণ
  color: string; // এই ক্যাটাগরির জন্য নির্দিষ্ট রঙ
}

export interface ExpensePieChartProps {
  data: ExpenseCategoryData[];
  title?: string;
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
}
