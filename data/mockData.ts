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
