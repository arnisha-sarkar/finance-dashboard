// data/mockData.ts
import {
  SummaryData,
  Transaction,
  ChartDataPoint,
  ExpenseCategoryData,
  Account, // Ensure these are imported from your central types
  Budget,
} from "@/types/dashboard";

import {
  Building2,
  CreditCard,
  ShoppingBag,
  Utensils,
  Wallet,
  Zap,
} from "lucide-react";

/**
 * Global Dashboard Summary Stats
 * Displays total balance, income, and expenses at the top of the dashboard.
 */
export const summaryMockData: SummaryData = {
  totalBalance: 24500,
  totalIncome: 32000,
  totalExpense: 7500,
};

/**
 * Balance History for Line Chart
 * Used to visualize the financial growth over a specific period.
 */
export const balanceHistory: ChartDataPoint[] = [
  { date: "Apr 01", balance: 2500 },
  { date: "Apr 02", balance: 3100 },
  { date: "Apr 03", balance: 2800 },
  { date: "Apr 04", balance: 4200 },
  { date: "Apr 05", balance: 3900 },
  { date: "Apr 06", balance: 5000 },
];

/**
 * Expenses Categorized for Pie/Donut Chart
 * Represents the distribution of spending across different sectors.
 */
export const expenseByCategoryData: ExpenseCategoryData[] = [
  { name: "Food", value: 2500, color: "#2563eb" }, // Blue
  { name: "Rent", value: 8000, color: "#16a34a" }, // Green
  { name: "Shopping", value: 4500, color: "#d33451" }, // Rose
  { name: "Travel", value: 1200, color: "#ca8a04" }, // Yellow
  { name: "Bills", value: 3800, color: "#9333ea" }, // Purple
];

/**
 * Recent Transaction List
 * Detailed record of both income and expense activities.
 */
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

/**
 * Linked Bank Accounts and Cards
 * Data for rendering account-specific cards in the UI.
 */
export const accountsData: Account[] = [
  {
    id: 1,
    bankName: "Chase Bank",
    accountType: "Savings Account",
    balance: "$42,500.00",
    accountNumber: "**** 5678",
    change: "+2.5%",
    isPositive: true,
    color: "bg-blue-600",
    icon: Building2,
  },
  {
    id: 2,
    bankName: "Bank of America",
    accountType: "Salary Account",
    balance: "$11,205.00",
    accountNumber: "**** 1234",
    change: "+1.2%",
    isPositive: true,
    color: "bg-purple-600",
    icon: Wallet,
  },
  {
    id: 3,
    bankName: "Visa Platinum",
    accountType: "Credit Card",
    balance: "$2,850.00",
    accountNumber: "**** 8899",
    change: "-0.5%",
    isPositive: false,
    color: "bg-slate-900",
    icon: CreditCard,
  },
];

/**
 * Monthly Budget Allocations
 * Tracks spending progress against pre-defined limits per category.
 */
export const budgetData: Budget[] = [
  {
    id: 1,
    category: "Food & Dining",
    spent: 850,
    limit: 1200,
    icon: Utensils,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    id: 2,
    category: "Shopping",
    spent: 2100,
    limit: 2500,
    icon: ShoppingBag,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    id: 3,
    category: "Subscriptions",
    spent: 450,
    limit: 400,
    icon: Zap,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
];
