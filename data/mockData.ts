// data/mockData.ts
import { SummaryData, Transaction } from "@/types/dashboard";

export const summaryMockData: SummaryData = {
  totalBalance: 24500, // Tomar iccha moto set koro
  totalIncome: 32000,
  totalExpense: 7500,
};

export const transactionsMockData: Transaction[] = [
  {
    id: "1",
    date: "2026-04-01",
    amount: 5000,
    category: "Salary",
    type: "income",
  },
  {
    id: "2",
    date: "2026-04-02",
    amount: 150,
    category: "Food",
    type: "expense",
  },
  // Aro kisu data add koro...
];

// src/data/mockData.ts
import { ChartDataPoint } from "@/types/dashboard";

export const balanceHistory: ChartDataPoint[] = [
  { date: "Apr 01", balance: 2500 },
  { date: "Apr 02", balance: 3100 },
  { date: "Apr 03", balance: 2800 },
  { date: "Apr 04", balance: 4200 },
  { date: "Apr 05", balance: 3900 },
  { date: "Apr 06", balance: 5000 },
];

// src/data/mockData.ts
// ... আগের মক ডেটা থাকবে ...
import { ExpenseCategoryData } from "@/types/dashboard";

export const expenseByCategoryData: ExpenseCategoryData[] = [
  { name: "Food", value: 2500, color: "#2563eb" }, // Blue
  { name: "Rent", value: 8000, color: "#16a34a" }, // Green
  { name: "Shopping", value: 4500, color: "#d33451" }, // Rose
  { name: "Travel", value: 1200, color: "#ca8a04" }, // Yellow
  { name: "Bills", value: 3800, color: "#9333ea" }, // Purple
];
