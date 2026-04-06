"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  TooltipProps,
} from "recharts";
import { ExpensePieChartProps } from "@/types/dashboard";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

/**
 * Custom Tooltip Component
 * Fixed: Defined a specific interface for the payload to avoid 'any' and resolve TS(2339).
 * This ensures strict type safety and satisfies ESLint rules.
 */
interface TooltipPayload {
  name: string;
  value: number;
  payload: Record<string, unknown>; // Chart-er internal data row-er jonno eta allow kore
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayload[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  // Check if the tooltip is active and has data in the payload array
  if (active && payload && payload.length) {
    return (
      <div className="bg-card-bg p-4 rounded-xl shadow-lg border border-border-custom backdrop-blur-md">
        <p className="text-sm font-semibold text-foreground italic uppercase">
          {payload[0].name}
        </p>
        <p className="text-sm font-bold text-blue-500">
          {/* Format the number with commas for better visual presentation */}$
          {Number(payload[0].value).toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

/**
 * ExpensePieChart Component
 * Visualizes the breakdown of expenses in a clean donut chart format.
 */
const ExpensePieChart = ({
  data,
  title = "Expense Breakdown",
}: ExpensePieChartProps) => {
  return (
    <div className="w-full bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm transition-all hover:shadow-md h-[400px] flex flex-col duration-300">
      {/* Chart Heading */}
      <h3 className="text-lg font-bold text-foreground mb-2 uppercase italic tracking-tight">
        {title}
      </h3>

      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              cornerRadius={8}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  /* stroke helps in blending the slice gaps with the card background */
                  stroke="var(--card-bg)"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            {/* Interactive Tooltip Configuration */}
            {/* Interactive Tooltip Configuration */}
            <Tooltip
              content={<CustomTooltip />} // এখানে আলাদা করে active বা payload দেওয়ার দরকার নেই
              cursor={{ fill: "transparent" }}
            />
            {/* Chart Legend with dynamic text colors for Dark/Light mode */}
            <Legend
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value) => (
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-2 font-medium">
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
