"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { LineChartProps } from "@/types/dashboard";

/**
 * BalanceChart: Renders a smooth line chart to visualize balance trends over time.
 * Designed with a modular approach to support both light and dark themes.
 */
const BalanceChart = ({ data, title = "Balance Overview" }: LineChartProps) => {
  return (
    /* Uses dynamic background and border variables for seamless theme switching */
    <div className="w-full bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm transition-all hover:shadow-md duration-300">
      {/* Dynamic text color for the chart heading */}
      <h3 className="text-lg font-bold text-foreground mb-6 uppercase italic tracking-tight">
        {title}
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            {/* Horizontal grid lines with low opacity for a clean look */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--border-custom)"
              opacity={0.5}
            />

            {/* X and Y Axis configuration with muted tick colors for better readability */}
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }} // slate-400
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            {/* Custom styled Tooltip with backdrop blur and dynamic theme colors */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "16px",
                border: "1px solid var(--border-custom)",
                color: "var(--foreground)",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3)",
                backdropFilter: "blur(8px)", // Added for a modern glassmorphism effect
              }}
              itemStyle={{ color: "var(--foreground)" }}
              labelStyle={{ color: "#94a3b8", marginBottom: "4px" }}
            />

            {/* Main Line styling: Uses a vibrant blue for high contrast on dark backgrounds */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#3b82f6",
                strokeWidth: 2,
                stroke: "var(--card-bg)", // Blends the dot border with the card background
              }}
              activeDot={{ r: 8, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
