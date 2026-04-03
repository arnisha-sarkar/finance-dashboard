// data/mockData.ts
import { SummaryData, Transaction } from "@/types/dashboard";

export const summaryMockData: SummaryData = {
  totalBalance: 24500, // Tomar iccha moto set koro
  totalIncome: 32000,
  totalExpense: 7500,
};

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

// src/data/mockData.ts
export const transactions: Transaction[] = [
  {
    id: "1",
    date: "2026-04-01",
    amount: 2500,
    category: "Salary",
    type: "income",
    description: "Monthly Salary",
  },
  {
    id: "2",
    date: "2026-04-02",
    amount: 150,
    category: "Food",
    type: "expense",
    description: "Lunch at Cafe",
  },
  {
    id: "3",
    date: "2026-04-03",
    amount: 1200,
    category: "Rent",
    type: "expense",
    description: "April House Rent",
  },
  {
    id: "4",
    date: "2026-04-03",
    amount: 500,
    category: "Freelance",
    type: "income",
    description: "Project Bonus",
  },
  {
    id: "5",
    date: "2026-04-04",
    amount: 80,
    category: "Shopping",
    type: "expense",
    description: "New T-shirt",
  },
];
