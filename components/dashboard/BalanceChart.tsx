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

const BalanceChart = ({ data, title = "Balance Overview" }: LineChartProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <h3 className="text-lg font-bold text-gray-800 mb-6">{title}</h3>

      {/* ResponsiveContainer চার্টকে সব স্ক্রিনে ফিট করতে সাহায্য করে */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb" // Blue-600
              strokeWidth={3}
              dot={{ r: 4, fill: "#2563eb", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceChart;
