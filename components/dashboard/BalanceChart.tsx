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
    /* ১. bg-card-bg এবং border-border-custom ব্যবহার করে কার্ড ডার্ক করা হয়েছে */
    <div className="w-full bg-card-bg p-6 rounded-[32px] border border-border-custom shadow-sm transition-all hover:shadow-md duration-300">
      {/* ২. টাইটেল text-foreground করা হয়েছে */}
      <h3 className="text-lg font-bold text-foreground mb-6 uppercase italic tracking-tight">
        {title}
      </h3>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            {/* ৩. গ্রিড লাইনের কালার ডার্ক মোডে হালকা করার জন্য opacity এবং ভেরিয়েবল ব্যবহার */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--border-custom)"
              opacity={0.5}
            />

            {/* ৪. XAxis এবং YAxis এর টিক টেক্সট ডার্ক মোডে হালকা ধূসর রাখা হয়েছে */}
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

            {/* ৫. Tooltip ডার্ক মোড ফ্রেন্ডলি করা হয়েছে */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card-bg)",
                borderRadius: "16px",
                border: "1px solid var(--border-custom)",
                color: "var(--foreground)",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3)",
              }}
              itemStyle={{ color: "var(--foreground)" }}
            />

            {/* ৬. লাইন এবং ডট স্টাইল */}
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6" // উজ্জ্বল নীল যা ডার্ক মোডে ভালো দেখায়
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#3b82f6",
                strokeWidth: 2,
                stroke: "var(--card-bg)", // ডটের চারপাশের বর্ডার কার্ডের রঙের সাথে মিলবে
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
