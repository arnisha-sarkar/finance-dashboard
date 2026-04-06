import { LucideIcon } from "lucide-react";
import { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

/**
 * Summary Data: Represents the overall financial state.
 */
export interface SummaryData {
  totalBalance: number;
  totalIncome: number;
  totalExpense: number;
}

/**
 * Summary Card Props: Configuration for the top-level metric cards.
 */
export interface SummaryCardProps {
  label: string;
  value: number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

/**
 * Chart Data Point: Structure for time-series balance data.
 */
export interface ChartDataPoint {
  date: string;
  balance: number;
}

export interface LineChartProps {
  data: ChartDataPoint[];
  title?: string;
}

/**
 * Expense Categories: Used for visual breakdown in charts.
 */
export interface ExpenseCategoryData {
  name: string;
  value: number;
  color: string;
}

export interface ExpensePieChartProps {
  data: ExpenseCategoryData[];
  title?: string;
}

/**
 * Custom Tooltip Props: Specifically for Recharts to avoid 'payload' or 'any' type errors.
 * Using <any, any> is the most reliable way to let Recharts handle internal data points.
 */
export type CustomTooltipProps = TooltipProps<ValueType, NameType>;

/**
 * Transaction: Detailed structure for individual financial records.
 */
export interface Transaction {
  id: string | number;
  date: string;
  amount: number;
  category: string;
  type: "income" | "expense";
  description: string;
}

/**
 * Account: Represents linked bank or financial accounts.
 */
export interface Account {
  id: number;
  bankName: string;
  accountType: string;
  balance: string;
  accountNumber: string;
  change: string;
  isPositive: boolean;
  color: string;
  icon: LucideIcon;
}

/**
 * Budget: Defines spending limits and current usage per category.
 */
export interface Budget {
  id: number;
  category: string;
  spent: number;
  limit: number;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  textColor: string;
}
